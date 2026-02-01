import { NextRequest, NextResponse } from 'next/server'

import config from '@payload-config'
import { getPayload } from 'payload'
//import { Flat } from '@/payload-types'
import {
  MigrateRequest,
  MigrateResponse,
  MigrateError,
  //XMLBuilding,
  NormalizedFlat,
} from '@/types/migrate'
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
import { sanitizeRealpadFlatData } from '@/utils/sanitizeRealpadFlat'
import { updateProjectLastRun } from '@/lib/cronScheduler'
import { Readable } from 'stream'

export async function POST(req: NextRequest): Promise<NextResponse> {
  // Verify security token
  const token = req.headers.get('x-cron-token')
  const expectedToken = process.env.CRON_SECURITY_TOKEN || ''

  if (!token || token !== expectedToken) {
    console.log('❌ Unauthorized access attempt to migrate endpoint')
    return NextResponse.json(
      {
        success: false,
        error: 'Unauthorized',
        timestamp: new Date().toISOString(),
      },
      { status: 401 },
    )
  }

  const timer = new PerformanceTimer()
  const errors: MigrateError[] = []
  let updated = 0
  let countFlats = 0

  try {
    // 1. Validate request data
    console.log('🔄 Starting flats update process...')
    const requestData = await req.json()
    console.log('📝 Request data:', requestData)
    const { projectID, projectRealID }: MigrateRequest = validateMigrateRequest(requestData)
    console.log('✅ Request validation passed')

    // 2. Initialize services
    const payload = await getPayload({ config })
    const migrateService = new MigrateService(payload)

    // 3. Setup RealPad API
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

      return NextResponse.json(errorResponse, { status: 500 })
    }

    // First, let's check what we actually got from the API
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

      return NextResponse.json(errorResponse, { status: 500 })
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

      return NextResponse.json(errorResponse, { status: 500 })
    }

    //console.log('🔧 Setting up XML stream...')
    // Convert text to readable stream
    const nodeStream = Readable.from([responseText])

    let xmlStream: any
    try {
      xmlStream = setupXMLParser(nodeStream)
      //console.log('✅ XML parser ready')
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

      return NextResponse.json(errorResponse, { status: 500 })
    }

    // 4. Data collection arrays - only flats for this endpoint
    const flats: NormalizedFlat[] = []
    const flatIds: string[] = []
    const processedFlatIds = new Set<string>() // Deduplicate flats

    // 5. Stream processing with data collection
    return new Promise<NextResponse>((resolve, reject) => {
      //console.log('🔄 Setting up XML stream listeners for flats...')

      // Add general event listeners for debugging
      /*xmlStream.on('tag:*', (tagName: string, data: any) => {
        console.log(`📋 Found XML tag: ${tagName}`, Object.keys(data))
      })*/

      // Process buildings to extract flats
      xmlStream.on('tag:building', async (rawBuilding: any) => {
        //console.log('🏢 Found building, extracting flats...')
        try {
          const building = validateXMLBuilding(normalizeXMLData(rawBuilding))

          // Process floors to get flats
          const buildingFloors = ensureArray(building.floor)
          for (const floor of buildingFloors) {
            // Process flats
            const floorFlats = ensureArray(floor.flat)
            for (const flat of floorFlats) {
              // Skip if already processed (avoid duplicates)
              if (processedFlatIds.has(flat.$attrs.id)) {
                console.log(`⏭️ Skipping duplicate flat from building: ${flat.$attrs.id}`)
                continue
              }

              const normalizedFlat = flatToNormalized(
                flat,
                parseInt(projectID),
                building.$attrs.id, // Will be mapped to internal ID later
                floor.$attrs.id, // Will be mapped to internal ID later
              )

              flats.push(normalizedFlat)
              flatIds.push(flat.$attrs.id)
              processedFlatIds.add(flat.$attrs.id)
              console.log(`📄 Found flat from building: ${flat.$attrs.id}`)
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

      // Also listen for direct flat tags if they exist
      xmlStream.on('tag:flat', async (rawFlat: any) => {
        //console.log('🏠 Found direct flat tag:', rawFlat?.$attrs?.id)
        try {
          // Handle direct flat tags if the XML structure supports it
          const normalized = normalizeXMLData(rawFlat)
          if (normalized?.$attrs?.id) {
            // Skip if already processed (avoid duplicates)
            if (processedFlatIds.has(normalized.$attrs.id)) {
              console.log(`⏭️ Skipping duplicate direct flat tag: ${normalized.$attrs.id}`)
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
              building: '', // Will be resolved later if needed
              floor: '', // Will be resolved later if needed
              realpadid: normalized.$attrs.id,
            }

            flats.push(flatData)
            flatIds.push(normalized.$attrs.id)
            processedFlatIds.add(normalized.$attrs.id)
            console.log(`🏠 Found direct flat tag: ${normalized.$attrs.id}`)
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
        //console.log('🏁 XML stream ended')
        try {
          console.log(`📊 Collected ${flats.length} flats for update`)

          // 6. Bulk existence check (eliminates N+1 queries)
          const existingItems = await migrateService.checkExistence([], [], flatIds)

          // 7. Update existing flats only
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

                  // Only include building/floor if they are provided and not empty
                  if (flatData.building && flatData.floor) {
                    // Get building and floor references
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
            } else {
              console.log(`⚠️ Flat ${flatData.realpadid} not found in database - skipping`)
            }
          }

          updated = countFlats

          console.log(`✅ Flats update completed: ${updated} flats updated in ${timer.elapsed()}ms`)

          if (errors.length > 0) {
            console.warn(`⚠️ ${errors.length} errors occurred during flats update`)
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

          resolve(NextResponse.json(response))
        } catch (error) {
          console.error('❌ Flats update failed during processing:', error)

          // Update project's lastRun timestamp even on error
          await updateProjectLastRun(
            projectID,
            'error',
            error instanceof Error ? error.message : 'Flats update processing failed',
          )

          reject(
            NextResponse.json(
              {
                success: false,
                error: error instanceof Error ? error.message : 'Flats update processing failed',
                imported: 0,
                errors: [],
                countBuildings: 0,
                countFloors: 0,
                countFlats: 0,
              },
              { status: 500 },
            ),
          )
        }
      })

      xmlStream.on('error', async (error: any) => {
        console.error('❌ XML stream error:', error)
        console.error('❌ Error details:', error.stack)

        // Update project's lastRun timestamp even on XML error
        await updateProjectLastRun(projectID, 'error', `XML parsing failed: ${error.message}`)

        reject(
          NextResponse.json(
            {
              success: false,
              error: `XML parsing failed: ${error.message}`,
              imported: 0,
              errors: [],
              countBuildings: 0,
              countFloors: 0,
              countFlats: 0,
            },
            { status: 500 },
          ),
        )
      })

      // Handle stream cleanup
      req.signal?.addEventListener('abort', () => {
        // nodeStream is a Node.js stream and supports destroy()
        if (typeof (nodeStream as any).destroy === 'function') {
          ;(nodeStream as any).destroy()
        }
        // xmlStream is likely an EventEmitter, so use removeAllListeners or emit 'close' if needed
        if (typeof (xmlStream as any).removeAllListeners === 'function') {
          ;(xmlStream as any).removeAllListeners()
        }
      })
    })
  } catch (error) {
    console.error('❌ Flats update setup failed:', error)

    // Try to update project's lastRun if projectID is available
    try {
      const requestData = await req.json()
      const { projectID } = validateMigrateRequest(requestData)
      await updateProjectLastRun(
        projectID,
        'error',
        error instanceof Error ? error.message : 'Flats update setup failed',
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
          error: error instanceof Error ? error.message : 'Flats update setup failed',
        },
      ],
      countBuildings: 0,
      countFloors: 0,
      countFlats: 0,
      processingTime: timer.elapsed(),
    }

    return NextResponse.json(errorResponse, { status: 500 })
  }
}
