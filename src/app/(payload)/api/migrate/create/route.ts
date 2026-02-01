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

// Pagination response interface
interface PaginationResponse extends MigrateResponse {
  pagination: {
    currentPage: number
    totalPages: number
    hasMore: boolean
    totalItems: number
    itemsPerPage: number
    nextPage: number | null
  }
  progress: {
    totalProcessed: number
    totalCreated: number
    totalErrors: number
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  // Verify security token
  const expectedToken = process.env.CRON_SECURITY_TOKEN || ''
  if (!expectedToken) {
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
  let imported = 0
  let countBuildings = 0
  let countFloors = 0
  let countFlats = 0

  try {
    // 1. Validate request data
    console.log('🚀 Starting migration process...')
    const requestData = await req.json()
    const validated: MigrateRequest = validateMigrateRequest(requestData)
    console.log('🔍 Validated request data:', validated)
    const projectID = validated.projectID
    const projectRealID = validated.projectRealID
    const page: number =
      typeof (requestData as any)?.page === 'number'
        ? (requestData as any).page
        : parseInt((requestData as any)?.page ?? '1', 10) || 1
    const limit: number =
      typeof (requestData as any)?.limit === 'number'
        ? (requestData as any).limit
        : parseInt((requestData as any)?.limit ?? '50', 10) || 50

    console.log(`✅ Request validation passed - Page: ${page}, Limit: ${limit}`)

    // 2. Initialize services
    const payload = await getPayload({ config })
    const migrateService = new MigrateService(payload)

    // 3. Setup RealPad API
    console.log('🌐 Connecting to RealPad API...')
    const realpadConfig = createRealPadConfig(projectRealID)
    console.log('📡 Fetching project data...')

    let response: Response
    try {
      response = await fetchRealPadProject(realpadConfig)
    } catch (error) {
      console.error('❌ Failed to fetch RealPad project data:', error)
      const errorResponse: PaginationResponse = {
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
        pagination: {
          currentPage: page,
          totalPages: 0,
          hasMore: false,
          totalItems: 0,
          itemsPerPage: limit,
          nextPage: null,
        },
        progress: {
          totalProcessed: 0,
          totalCreated: 0,
          totalErrors: 1,
        },
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
      const errorResponse: PaginationResponse = {
        success: false,
        imported: 0,
        errors: [{ type: 'building', error: 'API returned empty response' }],
        countBuildings: 0,
        countFloors: 0,
        countFlats: 0,
        processingTime: timer.elapsed(),
        pagination: {
          currentPage: page,
          totalPages: 0,
          hasMore: false,
          totalItems: 0,
          itemsPerPage: limit,
          nextPage: null,
        },
        progress: {
          totalProcessed: 0,
          totalCreated: 0,
          totalErrors: 1,
        },
      }

      await updateProjectLastRun(projectID, 'error', 'API returned empty response')
      return NextResponse.json(errorResponse, { status: 500 })
    }

    // Validate XML structure
    if (!validateXMLStructure(responseText)) {
      const errorResponse: PaginationResponse = {
        success: false,
        imported: 0,
        errors: [{ type: 'building', error: 'Invalid XML structure received from API' }],
        countBuildings: 0,
        countFloors: 0,
        countFlats: 0,
        processingTime: timer.elapsed(),
        pagination: {
          currentPage: page,
          totalPages: 0,
          hasMore: false,
          totalItems: 0,
          itemsPerPage: limit,
          nextPage: null,
        },
        progress: {
          totalProcessed: 0,
          totalCreated: 0,
          totalErrors: 1,
        },
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
      const errorResponse: PaginationResponse = {
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
        pagination: {
          currentPage: page,
          totalPages: 0,
          hasMore: false,
          totalItems: 0,
          itemsPerPage: limit,
          nextPage: null,
        },
        progress: {
          totalProcessed: 0,
          totalCreated: 0,
          totalErrors: 1,
        },
      }

      await updateProjectLastRun(projectID, 'error', 'Failed to setup XML parser')
      return NextResponse.json(errorResponse, { status: 500 })
    }

    // 5. Process XML and collect data for current page only
    return new Promise<NextResponse>((resolve, reject) => {
      // Collect data for current page only
      const pageBuildings: NormalizedBuilding[] = []
      const pageFloors: NormalizedFloor[] = []
      const pageFlats: NormalizedFlat[] = []
      const pageBuildingDataMap = new Map<string, Record<string, any>>()
      const pageFloorDataMap = new Map<string, Record<string, any>>()
      let projectData: Record<string, any> = {}
      let totalItems = 0
      let totalPages = 0

      // Process project data (only on first page)
      if (page === 1) {
        xmlStream.on('tag:project', async (rawProject: Record<string, any>) => {
          try {
            projectData = extractProjectData(rawProject)
          } catch (error) {
            console.error('❌ Error processing project data:', error)
          }
        })
      }

      // Process buildings for current page only
      let buildingCount = 0
      xmlStream.on('tag:building', async (rawBuilding: Record<string, any>) => {
        try {
          // Calculate which buildings belong to current page
          const buildingIndex = buildingCount
          const startIndex = (page - 1) * limit
          const endIndex = startIndex + limit

          // Only process buildings for current page
          if (buildingIndex >= startIndex && buildingIndex < endIndex) {
            const building = validateXMLBuilding(normalizeXMLData(rawBuilding))
            const normalizedBuilding = buildingToNormalized(building, parseInt(projectID))

            const buildingData = extractBuildingData(rawBuilding)
            pageBuildingDataMap.set(building.$attrs.id, buildingData)
            pageBuildings.push(normalizedBuilding)

            // Process floors for this building
            const buildingFloors = ensureArray(building.floor)
            console.log(
              `🏢 Building ${building.$attrs.id} (${building.$attrs.name}): ${buildingFloors.length} floors found`,
            )

            for (const floor of buildingFloors) {
              const normalizedFloor = floorToNormalized(
                floor,
                building.$attrs.id,
                building.$attrs.name,
                parseInt(projectID),
              )

              const floorData = extractFloorData(floor)
              pageFloorDataMap.set(floor.$attrs.id, floorData)
              pageFloors.push(normalizedFloor)

              // Process flats for this floor
              const floorFlats = ensureArray(floor.flat)
              console.log(`  🏗️ Floor ${floor.$attrs.id}: ${floorFlats.length} flats found`)

              for (const flat of floorFlats) {
                const normalizedFlat = flatToNormalized(
                  flat,
                  parseInt(projectID),
                  building.$attrs.id,
                  floor.$attrs.id,
                )
                pageFlats.push(normalizedFlat)
              }
            }
          }

          buildingCount++
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
          console.log('='.repeat(80))
          console.log(`📊 XML PARSING COMPLETE - PAGE ${page} DATA COLLECTED`)
          console.log('='.repeat(80))
          console.log(`🏢 Page ${page} Buildings: ${pageBuildings.length}`)
          console.log(`🏗️ Page ${page} Floors: ${pageFloors.length}`)
          console.log(`🏠 Page ${page} Flats: ${pageFlats.length}`)
          console.log(
            `📊 Page ${page} Total Items: ${pageBuildings.length + pageFloors.length + pageFlats.length}`,
          )
          console.log('='.repeat(80))

          // Calculate total items and pages from XML structure
          // This is a rough estimate based on the building count
          totalItems = buildingCount * 3 // buildings + floors + flats (rough estimate)
          totalPages = Math.ceil(totalItems / limit)

          console.log(
            `📄 Pagination: Page ${page}/${totalPages}, Items ${pageBuildings.length + pageFloors.length + pageFlats.length} of ~${totalItems}`,
          )

          // Extract IDs for existence check
          const buildingIds = pageBuildings.map((b) => b.realpadid).filter(Boolean)
          const floorIds = pageFloors.map((f) => f.realpadid).filter(Boolean)
          const flatIds = pageFlats.map((f) => f.realpadid).filter(Boolean)

          // 6. Bulk existence check for current page
          console.log('🔍 Checking existing items for current page...')
          const existingItems = await migrateService.checkExistence(buildingIds, floorIds, flatIds)

          // Log what was found and what need to be created
          console.log(`📊 Page ${page} existence check results:`)
          console.log(
            `  🏢 Buildings: ${existingItems.buildings.size} existing, ${pageBuildings.length - existingItems.buildings.size} need to be created`,
          )
          console.log(
            `  🏗️ Floors: ${existingItems.floors.size} existing, ${pageFloors.length - existingItems.floors.size} need to be created`,
          )
          console.log(
            `  🏠 Flats: ${existingItems.flats.size} existing, ${pageFlats.length - existingItems.flats.size} need to be created`,
          )

          // 7. Process creation for current page
          const BATCH_SIZE = Math.min(50, limit)

          // Create buildings in batches
          console.log(`🏢 Creating buildings for page ${page}...`)
          const buildingResults = await migrateService.createBuildingsBatch(
            pageBuildings,
            existingItems.buildings,
          )

          countBuildings = buildingResults.created.length
          errors.push(...buildingResults.errors)

          // Create building reference map
          const buildingMap = migrateService.createReferenceMap(
            buildingResults.created.map((b) => ({
              realpadid: b.realpadid ?? '',
              id: String(b.id),
            })),
          )

          // Create floors in batches
          console.log(`🏗️ Creating floors for page ${page}...`)
          const floorResults = await migrateService.createFloorsBatch(
            pageFloors,
            existingItems.floors,
            buildingMap,
          )

          countFloors = floorResults.created.length
          errors.push(...floorResults.errors)

          // Create floor reference map
          const floorMap = migrateService.createReferenceMap(
            floorResults.created.map((f) => ({
              realpadid: f.realpadid ?? '',
              id: String(f.id),
            })),
          )

          // Create flats in batches
          console.log(`🏠 Creating flats for page ${page}...`)
          const flatResults = await migrateService.createFlatsBatch(
            pageFlats,
            existingItems.flats,
            buildingMap,
            floorMap,
          )

          countFlats = flatResults.created.length
          errors.push(...flatResults.errors)

          // Update buildings with extracted data in batches
          console.log(`🔧 Updating buildings with RealPad data for page ${page}...`)
          for (let i = 0; i < buildingResults.created.length; i += BATCH_SIZE) {
            const batch = buildingResults.created.slice(i, i + BATCH_SIZE)
            await processBuildingDataBatch(batch, pageBuildingDataMap, payload, errors)

            if (i + BATCH_SIZE < buildingResults.created.length) {
              await new Promise((resolve) => setTimeout(resolve, 100))
            }
          }

          // Update floors with extracted data in batches
          console.log(`🔧 Updating floors with RealPad data for page ${page}...`)
          for (let i = 0; i < floorResults.created.length; i += BATCH_SIZE) {
            const batch = floorResults.created.slice(i, i + BATCH_SIZE)
            await processFloorDataBatch(batch, pageFloorDataMap, payload, errors)

            if (i + BATCH_SIZE < floorResults.created.length) {
              await new Promise((resolve) => setTimeout(resolve, 100))
            }
          }

          // Count processed items for current page
          const processedItems = pageBuildings.length + pageFloors.length + pageFlats.length
          imported = countBuildings + countFloors + countFlats

          console.log(
            `✅ Page ${page} completed: ${imported} items imported, ${processedItems} items processed in ${timer.elapsed()}ms`,
          )
          console.log(
            `🏢 Buildings: ${countBuildings} created (${pageBuildings.length} processed), 🏗️ Floors: ${countFloors} created (${pageFloors.length} processed), 🏠 Flats: ${countFlats} created (${pageFlats.length} processed)`,
          )

          if (errors.length > 0) {
            console.log('ERRORS', errors)
            console.warn(`⚠️ ${errors.length} errors occurred during page ${page} processing`)
          }

          // Update project with extracted data (only on first page)
          if (page === 1 && Object.keys(projectData).length > 0) {
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
                console.log('✅ Updated project with RealPad data')
              }
            } catch (error) {
              console.error('❌ Failed to update project with RealPad data:', error)
              errors.push({
                type: 'building',
                error: `Failed to update project data: ${error instanceof Error ? error.message : String(error)}`,
                data: {},
              })
            }
          }

          const response: PaginationResponse = {
            success: errors.length === 0,
            imported,
            errors,
            countBuildings,
            countFloors,
            countFlats,
            processingTime: timer.elapsed(),
            pagination: {
              currentPage: page,
              totalPages,
              hasMore: page < totalPages,
              totalItems,
              itemsPerPage: limit,
              nextPage: page < totalPages ? page + 1 : null,
            },
            progress: {
              totalProcessed: processedItems,
              totalCreated: imported,
              totalErrors: errors.length,
            },
          }

          // Update project's lastRun timestamp (only on last page or error)
          if (page === totalPages || errors.length > 0) {
            await updateProjectLastRun(
              projectID,
              errors.length === 0 ? 'active' : 'error',
              JSON.stringify(response, null, 2),
            )
          }

          console.log(`✅ Page ${page}/${totalPages} completed in ${timer.elapsed()}ms`)

          // Simple response - no automatic continuation
          if (page < totalPages) {
            console.log(`🔄 Page ${page} completed. Next page: ${page + 1}/${totalPages}`)
            console.log(`💡 Frontend should call endpoint with page=${page + 1}`)
          } else {
            console.log(`🏁 All pages completed! Total items processed: ${totalItems}`)
          }

          resolve(NextResponse.json(response))
        } catch (error) {
          console.error('❌ Migration failed during processing:', error)

          if (page === 1) {
            await updateProjectLastRun(
              projectID,
              'error',
              error instanceof Error ? error.message : 'Migration processing failed',
            )
          }

          reject(
            NextResponse.json(
              {
                success: false,
                error: error instanceof Error ? error.message : 'Migration processing failed',
                imported: 0,
                errors: [],
                countBuildings: 0,
                countFloors: 0,
                countFlats: 0,
                pagination: {
                  currentPage: page,
                  totalPages: 0,
                  hasMore: false,
                  totalItems: 0,
                  itemsPerPage: limit,
                  nextPage: null,
                },
                progress: {
                  totalProcessed: 0,
                  totalCreated: 0,
                  totalErrors: 1,
                },
              },
              { status: 500 },
            ),
          )
        }
      })

      xmlStream.on('error', async (error: any) => {
        console.error('❌ XML stream error:', error)

        if (page === 1) {
          await updateProjectLastRun(projectID, 'error', `XML parsing failed: ${error.message}`)
        }

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
              pagination: {
                currentPage: page,
                totalPages: 0,
                hasMore: false,
                totalItems: 0,
                itemsPerPage: limit,
                nextPage: null,
              },
              progress: {
                totalProcessed: 0,
                totalCreated: 0,
                totalErrors: 1,
              },
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
    console.error('❌ Migration setup failed:', error)

    try {
      const requestData = await req.json()
      const { projectID, page = 1 /*limit = 50 */ } = requestData
      if (page === 1) {
        await updateProjectLastRun(
          projectID,
          'error',
          error instanceof Error ? error.message : 'Migration setup failed',
        )
      }
    } catch (updateError) {
      console.error('❌ Could not update project lastRun:', updateError)
    }

    const errorResponse: PaginationResponse = {
      success: false,
      imported: 0,
      errors: [
        {
          type: 'building',
          error: error instanceof Error ? error.message : 'Migration setup failed',
        },
      ],
      countBuildings: 0,
      countFloors: 0,
      countFlats: 0,
      processingTime: timer.elapsed(),
      pagination: {
        currentPage: 1,
        totalPages: 0,
        hasMore: false,
        totalItems: 0,
        itemsPerPage: 50,
        nextPage: null,
      },
      progress: {
        totalProcessed: 0,
        totalCreated: 0,
        totalErrors: 1,
      },
    }

    return NextResponse.json(errorResponse, { status: 500 })
  }
}

// Helper functions to process data in batches
async function processBuildingDataBatch(
  buildings: any[],
  buildingDataMap: Map<string, Record<string, any>>,
  payload: any,
  errors: MigrateError[],
) {
  for (const building of buildings) {
    if (building.realpadid) {
      const extractedBuildingData = buildingDataMap.get(building.realpadid)
      if (extractedBuildingData && Object.keys(extractedBuildingData).length > 0) {
        try {
          await payload.update({
            collection: 'buildings',
            id: building.id,
            data: { realpadBuilding: extractedBuildingData },
          })
          console.log(`✅ Updated building ${building.realpadid} with RealPad data`)
        } catch (error) {
          console.error(
            `❌ Failed to update building ${building.realpadid} with RealPad data:`,
            error,
          )
          errors.push({
            type: 'building',
            itemId: building.realpadid,
            error: `Failed to update building data: ${error instanceof Error ? error.message : String(error)}`,
            data: {},
          })
        }
      }
    }
  }
}

async function processFloorDataBatch(
  floors: any[],
  floorDataMap: Map<string, Record<string, any>>,
  payload: any,
  errors: MigrateError[],
) {
  for (const floor of floors) {
    if (floor.realpadid) {
      const extractedFloorData = floorDataMap.get(floor.realpadid)
      if (extractedFloorData && Object.keys(extractedFloorData).length > 0) {
        try {
          await payload.update({
            collection: 'floors',
            id: floor.id,
            data: { realpadFloor: extractedFloorData },
          })
          console.log(`✅ Updated floor ${floor.realpadid} with RealPad data`)
        } catch (error) {
          console.error(`❌ Failed to update floor ${floor.realpadid} with RealPad data:`, error)
          errors.push({
            type: 'floor',
            itemId: floor.realpadid,
            error: `Failed to update floor data: ${error instanceof Error ? error.message : String(error)}`,
            data: {},
          })
        }
      }
    }
  }
}
