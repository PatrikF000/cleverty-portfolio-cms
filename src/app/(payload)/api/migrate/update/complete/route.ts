import { NextRequest, NextResponse } from 'next/server'

import config from '@payload-config'
import { getPayload } from 'payload'
import {
  MigrateRequest,
  MigrateResponse,
  MigrateError,
  NormalizedBuilding,
  NormalizedFloor,
  NormalizedFlat,
} from '@/types/migrate'
import {
  validateMigrateRequest,
  validateXMLBuilding,
  normalizeXMLData,
  ensureArray,
  buildingToNormalized,
  floorToNormalized,
  flatToNormalized,
  validateXMLStructure,
  extractProjectData,
  extractBuildingData,
  extractFloorData,
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

// Progress tracking for long-running operations
interface ProgressState {
  stage: 'parsing' | 'processing' | 'updating' | 'complete'
  buildingsProcessed: number
  floorsProcessed: number
  flatsProcessed: number
  totalBuildings: number
  totalFloors: number
  totalFlats: number
  startTime: number
}

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
  const updated = 0
  const countBuildings = 0
  const countFloors = 0
  const countFlats = 0

  try {
    // 1. Validate request data
    console.log('🔄 Starting update process...')
    const requestData = await req.json()
    const { projectID, projectRealID }: MigrateRequest = validateMigrateRequest(requestData)
    console.log('✅ Request validation passed')

    // 2. Initialize services
    const payload = await getPayload({ config })
    const migrateService = new MigrateService(payload)

    // 3. Setup RealPad API
    console.log('🌐 Connecting to RealPad API...')
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
            type: 'building',
            error: error instanceof Error ? error.message : 'Failed to fetch RealPad project data',
          },
        ],
        countBuildings: 0,
        countFloors: 0,
        countFlats: 0,
        processingTime: timer.elapsed(),
      }

      await updateProjectLastRun(
        projectID,
        'error',
        error instanceof Error ? error.message : 'Failed to fetch RealPad project data',
      )

      return NextResponse.json(errorResponse, { status: 500 })
    }

    // Check response
    const responseText = await response.text()
    if (responseText.length === 0) {
      const errorResponse: MigrateResponse = {
        success: false,
        imported: 0,
        errors: [{ type: 'building', error: 'API returned empty response' }],
        countBuildings: 0,
        countFloors: 0,
        countFlats: 0,
        processingTime: timer.elapsed(),
      }

      await updateProjectLastRun(projectID, 'error', 'API returned empty response')
      return NextResponse.json(errorResponse, { status: 500 })
    }

    // Validate XML structure
    if (!validateXMLStructure(responseText)) {
      const errorResponse: MigrateResponse = {
        success: false,
        imported: 0,
        errors: [{ type: 'building', error: 'Invalid XML structure received from API' }],
        countBuildings: 0,
        countFloors: 0,
        countFlats: 0,
        processingTime: timer.elapsed(),
      }

      await updateProjectLastRun(projectID, 'error', 'Invalid XML structure received from API')
      return NextResponse.json(errorResponse, { status: 500 })
    }

    // 4. Parse XML in chunks to avoid timeout
    console.log('🔧 Setting up XML parser...')
    const nodeStream = Readable.from([responseText])

    let xmlStream: any
    try {
      xmlStream = setupXMLParser(nodeStream)
      console.log('✅ XML parser ready')
    } catch (error) {
      console.error('❌ Failed to setup XML parser:', error)
      const errorResponse: MigrateResponse = {
        success: false,
        imported: 0,
        errors: [
          {
            type: 'building',
            error: error instanceof Error ? error.message : 'Failed to setup XML parser',
          },
        ],
        countBuildings: 0,
        countFloors: 0,
        countFlats: 0,
        processingTime: timer.elapsed(),
      }

      await updateProjectLastRun(projectID, 'error', 'Failed to setup XML parser')
      return NextResponse.json(errorResponse, { status: 500 })
    }

    // 5. Data collection arrays
    const buildings: NormalizedBuilding[] = []
    const floors: NormalizedFloor[] = []
    const flats: NormalizedFlat[] = []
    let projectData: Record<string, any> = {}
    const buildingDataMap = new Map<string, Record<string, any>>()
    const floorDataMap = new Map<string, Record<string, any>>()

    // 6. Extract all IDs for existence check
    const buildingIds: string[] = []
    const floorIds: string[] = []
    const flatIds: string[] = []

    // 7. Process XML in chunks with progress tracking
    return new Promise<NextResponse>((resolve, reject) => {
      const progress: ProgressState = {
        stage: 'parsing',
        buildingsProcessed: 0,
        floorsProcessed: 0,
        flatsProcessed: 0,
        totalBuildings: 0,
        totalFloors: 0,
        totalFlats: 0,
        startTime: Date.now(),
      }

      // Process project data
      xmlStream.on('tag:project', async (rawProject: Record<string, any>) => {
        try {
          projectData = extractProjectData(rawProject)
        } catch (error) {
          console.error('❌ Error processing project data:', error)
        }
      })

      // Process buildings in chunks
      xmlStream.on('tag:building', async (rawBuilding: Record<string, any>) => {
        try {
          const building = validateXMLBuilding(normalizeXMLData(rawBuilding))
          const normalizedBuilding = buildingToNormalized(building, parseInt(projectID))

          const buildingData = extractBuildingData(rawBuilding)
          buildingDataMap.set(building.$attrs.id, buildingData)
          buildings.push(normalizedBuilding)
          buildingIds.push(building.$attrs.id)

          // Process floors for this building
          const buildingFloors = ensureArray(building.floor)
          for (const floor of buildingFloors) {
            const normalizedFloor = floorToNormalized(
              floor,
              building.$attrs.id,
              building.$attrs.name,
              parseInt(projectID),
            )

            const floorData = extractFloorData(floor)
            floorDataMap.set(floor.$attrs.id, floorData)
            floors.push(normalizedFloor)
            floorIds.push(floor.$attrs.id)

            // Process flats for this floor
            const floorFlats = ensureArray(floor.flat)
            for (const flat of floorFlats) {
              const normalizedFlat = flatToNormalized(
                flat,
                parseInt(projectID),
                building.$attrs.id,
                floor.$attrs.id,
              )
              flats.push(normalizedFlat)
              flatIds.push(flat.$attrs.id)
            }
          }

          progress.buildingsProcessed++
          progress.totalBuildings = buildings.length
          progress.totalFloors = floors.length
          progress.totalFlats = flats.length

          // Log progress every 10 buildings to avoid spam
          if (progress.buildingsProcessed % 10 === 0) {
            console.log(
              `📊 Progress: ${progress.buildingsProcessed}/${progress.totalBuildings} buildings processed`,
            )
          }
        } catch (error) {
          errors.push({
            type: 'building',
            itemId: rawBuilding?.$attrs?.id,
            error: error instanceof Error ? error.message : String(error),
            data: rawBuilding,
          })
        }
      })

      xmlStream.on('end', async () => {
        try {
          console.log(
            `🏁 XML parsing complete: ${buildings.length} buildings, ${floors.length} floors, ${flats.length} flats`,
          )
          progress.stage = 'processing'

          // 8. Bulk existence check
          console.log('🔍 Checking existing items...')
          const existingItems = await migrateService.checkExistence(buildingIds, floorIds, flatIds)

          // 9. Process updates in smaller batches
          progress.stage = 'updating'
          const BATCH_SIZE = 50 // Process 50 items at a time

          // Update buildings in batches
          console.log('🏢 Updating buildings...')
          for (let i = 0; i < buildings.length; i += BATCH_SIZE) {
            const batch = buildings.slice(i, i + BATCH_SIZE)
            await processBuildingBatch(
              batch,
              existingItems,
              buildingDataMap,
              payload,
              errors,
              countBuildings,
            )

            // Small delay between batches to prevent overwhelming the system
            if (i + BATCH_SIZE < buildings.length) {
              await new Promise((resolve) => setTimeout(resolve, 100))
            }
          }

          // Update floors in batches
          console.log('🏗️ Updating floors...')
          for (let i = 0; i < floors.length; i += BATCH_SIZE) {
            const batch = floors.slice(i, i + BATCH_SIZE)
            await processFloorBatch(
              batch,
              existingItems,
              floorDataMap,
              payload,
              errors,
              countFloors,
            )

            if (i + BATCH_SIZE < floors.length) {
              await new Promise((resolve) => setTimeout(resolve, 100))
            }
          }

          // Update flats in batches
          console.log('🏠 Updating flats...')
          for (let i = 0; i < flats.length; i += BATCH_SIZE) {
            const batch = flats.slice(i, i + BATCH_SIZE)
            await processFlatBatch(batch, existingItems, payload, errors, countFlats)

            if (i + BATCH_SIZE < flats.length) {
              await new Promise((resolve) => setTimeout(resolve, 100))
            }
          }

          // Update project data
          if (Object.keys(projectData).length > 0) {
            try {
              const projectResult = await payload.find({
                collection: 'projects',
                where: { realpadid: { equals: projectRealID } },
                limit: 1,
              })

              if (projectResult.docs.length > 0) {
                await payload.update({
                  collection: 'projects',
                  id: projectResult.docs[0].id,
                  data: { realpadProject: projectData },
                })
                console.log(`✅ Updated project ${projectRealID} with RealPad data`)
              }
            } catch (error) {
              const errorMsg = error instanceof Error ? error.message : String(error)
              console.error(`❌ Error updating project ${projectRealID}:`, errorMsg)
              errors.push({
                type: 'building',
                error: `Project update error: ${errorMsg}`,
                data: {},
              })
            }
          }

          // Update project's lastRun timestamp
          await updateProjectLastRun(projectID, 'active', 'Update completed successfully')

          progress.stage = 'complete'
          console.log(`✅ Complete update finished in ${timer.elapsed()}ms`)

          const response: MigrateResponse = {
            success: errors.length === 0,
            imported: updated,
            errors,
            countBuildings,
            countFloors,
            countFlats,
            processingTime: timer.elapsed(),
          }

          resolve(NextResponse.json(response))
        } catch (error) {
          console.error('❌ Update failed during processing:', error)
          await updateProjectLastRun(
            projectID,
            'error',
            error instanceof Error ? error.message : 'Update processing failed',
          )

          reject(
            NextResponse.json(
              {
                success: false,
                error: error instanceof Error ? error.message : 'Update processing failed',
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

      xmlStream.on('error', async (error: Error) => {
        console.error('❌ XML stream error:', error)
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
        if (typeof (nodeStream as any).destroy === 'function') {
          ;(nodeStream as any).destroy()
        }
        if (typeof (xmlStream as any).removeAllListeners === 'function') {
          ;(xmlStream as any).removeAllListeners()
        }
      })
    })
  } catch (error) {
    console.error('❌ Update setup failed:', error)

    try {
      const requestData = await req.json()
      const { projectID } = validateMigrateRequest(requestData)
      await updateProjectLastRun(
        projectID,
        'error',
        error instanceof Error ? error.message : 'Update setup failed',
      )
    } catch (updateError) {
      console.error('❌ Could not update project lastRun:', updateError)
    }

    const errorResponse: MigrateResponse = {
      success: false,
      imported: 0,
      errors: [
        {
          type: 'building',
          error: error instanceof Error ? error.message : 'Update setup failed',
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

// Helper functions to process data in batches
async function processBuildingBatch(
  buildings: NormalizedBuilding[],
  existingItems: any,
  buildingDataMap: Map<string, Record<string, any>>,
  payload: any,
  errors: MigrateError[],
  countBuildings: number,
) {
  for (const buildingData of buildings) {
    if (existingItems.buildings.has(buildingData.realpadid)) {
      try {
        const existingBuildingResult = await payload.find({
          collection: 'buildings',
          where: { realpadid: { equals: buildingData.realpadid } },
          limit: 1,
        })

        if (existingBuildingResult.docs.length > 0) {
          const extractedBuildingData = buildingDataMap.get(buildingData.realpadid)

          await payload.update({
            collection: 'buildings',
            id: existingBuildingResult.docs[0].id,
            data: {
              title: buildingData.title,
              project: buildingData.project,
              ...(extractedBuildingData &&
                Object.keys(extractedBuildingData).length > 0 && {
                  realpadBuilding: extractedBuildingData,
                }),
            },
          })

          await payload.update({
            collection: 'buildings',
            id: existingBuildingResult.docs[0].id,
            locale: 'en',
            data: { title: buildingData.title },
          })

          countBuildings++
          console.log(`✅ Updated building: ${buildingData.realpadid}`)
        }
      } catch (error) {
        errors.push({
          type: 'building',
          itemId: buildingData.realpadid,
          error: error instanceof Error ? error.message : String(error),
          data: buildingData,
        })
      }
    }
  }
}

async function processFloorBatch(
  floors: NormalizedFloor[],
  existingItems: any,
  floorDataMap: Map<string, Record<string, any>>,
  payload: any,
  errors: MigrateError[],
  countFloors: number,
) {
  for (const floorData of floors) {
    if (existingItems.floors.has(floorData.realpadid)) {
      try {
        const existingFloorResult = await payload.find({
          collection: 'floors',
          where: { realpadid: { equals: floorData.realpadid } },
          limit: 1,
        })

        if (existingFloorResult.docs.length > 0) {
          const buildingResult = await payload.find({
            collection: 'buildings',
            where: { realpadid: { equals: floorData.building } },
            limit: 1,
          })

          if (buildingResult.docs.length > 0) {
            const extractedFloorData = floorDataMap.get(floorData.realpadid)

            await payload.update({
              collection: 'floors',
              id: existingFloorResult.docs[0].id,
              data: {
                title: floorData.title,
                project: floorData.project,
                floorNo: floorData.floorNo,
                building: Number(buildingResult.docs[0].id),
                ...(extractedFloorData &&
                  Object.keys(extractedFloorData).length > 0 && {
                    realpadFloor: extractedFloorData,
                  }),
              },
            })

            await payload.update({
              collection: 'floors',
              id: existingFloorResult.docs[0].id,
              locale: 'en',
              data: { title: floorData.title },
            })

            countFloors++
            console.log(`✅ Updated floor: ${floorData.realpadid}`)
          }
        }
      } catch (error) {
        errors.push({
          type: 'floor',
          itemId: floorData.realpadid,
          error: error instanceof Error ? error.message : String(error),
          data: floorData,
        })
      }
    }
  }
}

async function processFlatBatch(
  flats: NormalizedFlat[],
  existingItems: any,
  payload: any,
  errors: MigrateError[],
  countFlats: number,
) {
  for (const flatData of flats) {
    if (existingItems.flats.has(flatData.realpadid)) {
      try {
        const existingFlatResult = await payload.find({
          collection: 'flats',
          where: { realpadid: { equals: flatData.realpadid } },
          limit: 1,
        })

        if (existingFlatResult.docs.length > 0) {
          const buildingResult = await payload.find({
            collection: 'buildings',
            where: { realpadid: { equals: flatData.building } },
            limit: 1,
          })

          const floorResult = await payload.find({
            collection: 'floors',
            where: { realpadid: { equals: flatData.floor } },
            limit: 1,
          })

          if (buildingResult.docs.length > 0 && floorResult.docs.length > 0) {
            await payload.update({
              collection: 'flats',
              id: existingFlatResult.docs[0].id,
              data: {
                title: flatData.title,
                project: flatData.project,
                building: Number(buildingResult.docs[0].id),
                floor: Number(floorResult.docs[0].id),
              },
            })

            await payload.update({
              collection: 'flats',
              id: existingFlatResult.docs[0].id,
              locale: 'en',
              data: { title: flatData.title },
            })

            countFlats++
            console.log(`✅ Updated flat: ${flatData.realpadid}`)
          }
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
}
