import { getPayload } from 'payload'
import config from '@payload-config'
import { MigrateRequest, MigrateResponse, MigrateError, NormalizedFlat } from '@/types/migrate'
import { sanitizeRealpadFlatData } from '@/utils/sanitizeRealpadFlat'
import {
  validateMigrateRequest,
  validateXMLBuilding,
  normalizeXMLData,
  ensureArray,
  flatToNormalized,
  validateXMLStructure,
} from '@/utils/xmlProcessing'
import { MigrateService } from '@/services/migrateService'
import {
  createRealPadConfig,
  fetchRealPadProject,
  setupXMLParser,
  PerformanceTimer,
} from '@/utils/realpadApi'
import { updateProjectLastRun } from '@/lib/cronScheduler'
import { Readable } from 'stream'

export interface MigrationParams {
  projectID: string | number
  projectRealID: string | number
  projectName?: string
}

/**
 * Shared migration function that can be called directly without HTTP
 * Used by both cron jobs and manual endpoints
 */
export async function runFlatsMigration(params: MigrationParams): Promise<MigrateResponse> {
  const timer = new PerformanceTimer()
  const errors: MigrateError[] = []
  let updated = 0
  let countFlats = 0

  try {
    console.log(
      `🔄 Starting flats migration for project: ${params.projectName || params.projectID}`,
    )

    // Validate request data
    const { projectID, projectRealID }: MigrateRequest = validateMigrateRequest({
      projectID: params.projectID,
      projectRealID: params.projectRealID,
      projectName: params.projectName,
    })

    // Initialize services
    const payload = await getPayload({ config })
    const migrateService = new MigrateService(payload)

    // Setup RealPad API
    const realpadConfig = createRealPadConfig(projectRealID)

    let response: Response
    try {
      response = await fetchRealPadProject(realpadConfig)
    } catch (error) {
      console.error('❌ Failed to fetch RealPad project data:', error)
      const errorResponse: MigrateResponse = {
        success: false,
        imported: 0,
        errors: [
          {
            type: 'flat',
            error: error instanceof Error ? error.message : 'Failed to fetch RealPad project data',
          },
        ],
        countBuildings: 0,
        countFloors: 0,
        countFlats: 0,
        processingTime: timer.elapsed(),
      }

      // Update project's lastRun timestamp
      await updateProjectLastRun(
        projectID,
        'error',
        error instanceof Error ? error.message : 'Failed to fetch RealPad project data',
      )

      return errorResponse
    }

    // Get response text
    const responseText = await response.text()

    if (responseText.length === 0) {
      const errorResponse: MigrateResponse = {
        success: false,
        imported: 0,
        errors: [
          {
            type: 'flat',
            error: 'API returned empty response',
          },
        ],
        countBuildings: 0,
        countFloors: 0,
        countFlats: 0,
        processingTime: timer.elapsed(),
      }

      // Update project's lastRun timestamp
      await updateProjectLastRun(projectID, 'error', 'API returned empty response')

      return errorResponse
    }

    // Validate XML structure
    if (!validateXMLStructure(responseText)) {
      const errorResponse: MigrateResponse = {
        success: false,
        imported: 0,
        errors: [
          {
            type: 'flat',
            error: 'Invalid XML structure received from API',
          },
        ],
        countBuildings: 0,
        countFloors: 0,
        countFlats: 0,
        processingTime: timer.elapsed(),
      }

      // Update project's lastRun timestamp
      await updateProjectLastRun(projectID, 'error', 'Invalid XML structure received from API')

      return errorResponse
    }

    // Convert text to readable stream
    const nodeStream = Readable.from([responseText])

    let xmlStream: any
    try {
      xmlStream = setupXMLParser(nodeStream)
    } catch (error) {
      console.error('❌ Failed to setup XML parser:', error)
      const errorResponse: MigrateResponse = {
        success: false,
        imported: 0,
        errors: [
          {
            type: 'flat',
            error: error instanceof Error ? error.message : 'Failed to setup XML parser',
          },
        ],
        countBuildings: 0,
        countFloors: 0,
        countFlats: 0,
        processingTime: timer.elapsed(),
      }

      // Update project's lastRun timestamp
      await updateProjectLastRun(projectID, 'error', 'Failed to setup XML parser')

      return errorResponse
    }

    // Data collection arrays
    const flats: NormalizedFlat[] = []
    const flatIds: string[] = []
    const processedFlatIds = new Set<string>()

    // Return a promise to handle the stream processing
    return new Promise<MigrateResponse>((resolve, reject) => {
      // Process buildings to extract flats
      xmlStream.on('tag:building', async (rawBuilding: any) => {
        try {
          const building = validateXMLBuilding(normalizeXMLData(rawBuilding))

          // Process floors to get flats
          const buildingFloors = ensureArray(building.floor)
          for (const floor of buildingFloors) {
            const floorFlats = ensureArray(floor.flat)
            for (const flat of floorFlats) {
              // Skip duplicates
              if (processedFlatIds.has(flat.$attrs.id)) {
                continue
              }

              const normalizedFlat = flatToNormalized(
                flat,
                parseInt(projectID),
                building.$attrs.id,
                floor.$attrs.id,
              )

              flats.push(normalizedFlat)
              flatIds.push(flat.$attrs.id)
              processedFlatIds.add(flat.$attrs.id)
            }
          }
        } catch (error) {
          errors.push({
            type: 'flat',
            itemId: rawBuilding?.$attrs?.id,
            error: error instanceof Error ? error.message : String(error),
            data: rawBuilding,
          })
        }
      })

      // Handle direct flat tags
      xmlStream.on('tag:flat', async (rawFlat: any) => {
        try {
          const normalized = normalizeXMLData(rawFlat)
          if (normalized?.$attrs?.id) {
            if (processedFlatIds.has(normalized.$attrs.id)) {
              return
            }

            const flatAttributes = normalized['flat-attribute'] || []
            const transformedAttrs: Record<string, any> = {}

            const attrs = Array.isArray(flatAttributes) ? flatAttributes : []
            for (const item of attrs) {
              if (typeof item === 'object' && item !== null && 'key' in item && 'value' in item) {
                transformedAttrs[item.key] = item.value
              }
            }

            // Add PDF ID to flat attributes if it exists
            if (normalized.$attrs.pdf) {
              transformedAttrs.pdf = normalized.$attrs.pdf
            }

            // Add associated-unit-ids to flat attributes if it exists
            if (normalized.$attrs['associated-unit-ids']) {
              transformedAttrs['associated-unit-ids'] = normalized.$attrs['associated-unit-ids']
            }

            const flatData: NormalizedFlat = {
              realpadFlat: transformedAttrs,
              title: transformedAttrs.flat_internal_id || '',
              slug: transformedAttrs.flat_internal_id
                ? transformedAttrs.flat_internal_id.toString()
                : '',
              project: parseInt(projectID),
              building: '',
              floor: '',
              realpadid: normalized.$attrs.id,
            }

            flats.push(flatData)
            flatIds.push(normalized.$attrs.id)
            processedFlatIds.add(normalized.$attrs.id)
          }
        } catch (error) {
          errors.push({
            type: 'flat',
            itemId: rawFlat?.$attrs?.id,
            error: error instanceof Error ? error.message : String(error),
            data: rawFlat,
          })
        }
      })

      xmlStream.on('end', async () => {
        try {
          console.log(`📊 Collected ${flats.length} flats for update`)

          // Bulk existence check
          const existingItems = await migrateService.checkExistence([], [], flatIds)

          // Update existing flats only
          let processedCount = 0
          for (const flatData of flats) {
            if (existingItems.flats.has(flatData.realpadid)) {
              try {
                const existingFlatResult = await payload.find({
                  collection: 'flats',
                  where: { realpadid: { equals: flatData.realpadid } },
                  limit: 1,
                })

                if (existingFlatResult.docs.length > 0) {
                  const updateData: any = {
                    realpadFlat: sanitizeRealpadFlatData(flatData.realpadFlat),
                    title: flatData.title,
                    slug: flatData.slug,
                  }

                  // Handle building/floor references if provided
                  if (flatData.building && flatData.floor) {
                    const [buildingResult, floorResult] = await Promise.all([
                      payload.find({
                        collection: 'buildings',
                        where: { realpadid: { equals: flatData.building } },
                        limit: 1,
                      }),
                      payload.find({
                        collection: 'floors',
                        where: { realpadid: { equals: flatData.floor } },
                        limit: 1,
                      }),
                    ])

                    if (buildingResult.docs.length > 0) {
                      updateData.building = Number(buildingResult.docs[0].id)
                    }
                    if (floorResult.docs.length > 0) {
                      updateData.floor = Number(floorResult.docs[0].id)
                    }
                  }

                  await payload.update({
                    collection: 'flats',
                    id: existingFlatResult.docs[0].id,
                    data: updateData,
                  })
                  await payload.update({
                    collection: 'flats',
                    id: existingFlatResult.docs[0].id,
                    locale: 'en',
                    data: {
                      title: flatData.title,
                    },
                  })

                  countFlats++
                  processedCount++
                  console.log(
                    `✅ Updated flat: ${flatData.realpadid} (${processedCount}/${flats.length})`,
                  )
                }
              } catch (error) {
                errors.push({
                  type: 'flat',
                  itemId: flatData.realpadid,
                  error: error instanceof Error ? error.message : String(error),
                  data: flatData,
                })
              }
            }
          }

          updated = countFlats

          console.log(
            `✅ Flats migration completed: ${updated} flats updated in ${timer.elapsed()}ms`,
          )

          if (errors.length > 0) {
            console.warn(`⚠️ ${errors.length} errors occurred during flats migration`)
          }

          const response: MigrateResponse = {
            success: errors.length === 0,
            imported: updated,
            errors,
            countBuildings: 0,
            countFloors: 0,
            countFlats,
            processingTime: timer.elapsed(),
          }

          // Update project's lastRun timestamp
          await updateProjectLastRun(
            projectID,
            errors.length === 0 ? 'active' : 'error',
            JSON.stringify(response, null, 2),
          )

          resolve(response)
        } catch (error) {
          console.error('❌ Flats migration failed during processing:', error)

          // Update project's lastRun timestamp even on error
          await updateProjectLastRun(
            projectID,
            'error',
            error instanceof Error ? error.message : 'Flats migration processing failed',
          )

          reject(
            new Error(error instanceof Error ? error.message : 'Flats migration processing failed'),
          )
        }
      })

      xmlStream.on('error', async (error: any) => {
        console.error('❌ XML stream error:', error)

        // Update project's lastRun timestamp even on XML error
        await updateProjectLastRun(projectID, 'error', `XML parsing failed: ${error.message}`)

        reject(new Error(`XML parsing failed: ${error.message}`))
      })
    })
  } catch (error) {
    console.error('❌ Flats migration setup failed:', error)

    // Try to update project's lastRun if projectID is available
    try {
      await updateProjectLastRun(
        params.projectID,
        'error',
        error instanceof Error ? error.message : 'Flats migration setup failed',
      )
    } catch (updateError) {
      console.error('❌ Could not update project lastRun:', updateError)
    }

    const errorResponse: MigrateResponse = {
      success: false,
      imported: 0,
      errors: [
        {
          type: 'flat',
          error: error instanceof Error ? error.message : 'Flats migration setup failed',
        },
      ],
      countBuildings: 0,
      countFloors: 0,
      countFlats: 0,
      processingTime: timer.elapsed(),
    }

    return errorResponse
  }
}
