import { MigrationJob } from '@/lib/jobQueue'
import { MigrateService } from '@/services/migrateService'
import { getPayload } from 'payload'
import config from '@payload-config'
import {
  createRealPadConfig,
  fetchRealPadProject,
  setupXMLParser,
  PerformanceTimer,
} from '@/utils/realpadApi'
import {
  validateXMLStructure,
  validateXMLBuilding,
  normalizeXMLData,
  ensureArray,
  buildingToNormalized,
  floorToNormalized,
  flatToNormalized,
  extractProjectData,
  extractBuildingData,
  extractFloorData,
} from '@/utils/xmlProcessing'
import { updateProjectLastRun } from '@/lib/cronScheduler'
import { Readable } from 'stream'
import { NormalizedBuilding, NormalizedFloor, NormalizedFlat } from '@/types/migrate'

// Progress callback type
type ProgressCallback = (progress: {
  currentPage: number
  totalPages: number
  percentage: number
  message: string
  stats: {
    buildings: number
    floors: number
    flats: number
    imported: number
  }
}) => void

// Migration result type
interface MigrationResult {
  success: boolean
  imported: number
  countBuildings: number
  countFloors: number
  countFlats: number
  errors: any[]
  processingTime: number
}

// Start migration job
export async function startMigrationJob(
  job: MigrationJob,
  progressCallback: ProgressCallback,
): Promise<MigrationResult> {
  const timer = new PerformanceTimer()
  const errors: any[] = []
  let imported = 0
  let countBuildings = 0
  let countFloors = 0
  let countFlats = 0

  try {
    console.log(`🚀 Starting migration job ${job.id} for project ${job.projectName}`)

    // Update progress
    progressCallback({
      currentPage: 0,
      totalPages: 0,
      percentage: 0,
      message: 'Initializing migration...',
      stats: { buildings: 0, floors: 0, flats: 0, imported: 0 },
    })

    // Initialize services
    const payload = await getPayload({ config })
    const migrateService = new MigrateService(payload)

    // Setup RealPad API
    progressCallback({
      currentPage: 0,
      totalPages: 0,
      percentage: 5,
      message: 'Connecting to RealPad API...',
      stats: { buildings: 0, floors: 0, flats: 0, imported: 0 },
    })

    const realpadConfig = createRealPadConfig(job.projectRealID)
    const response = await fetchRealPadProject(realpadConfig)

    // Check response
    const responseText = await response.text()
    if (responseText.length === 0) {
      throw new Error('API returned empty response')
    }

    // Validate XML structure
    if (!validateXMLStructure(responseText)) {
      throw new Error('Invalid XML structure received from API')
    }

    // Parse XML
    progressCallback({
      currentPage: 0,
      totalPages: 0,
      percentage: 10,
      message: 'Parsing XML data...',
      stats: { buildings: 0, floors: 0, flats: 0, imported: 0 },
    })

    const nodeStream = Readable.from([responseText])
    const xmlStream = setupXMLParser(nodeStream)

    // Collect all data from XML
    const allBuildings: NormalizedBuilding[] = []
    const allFloors: NormalizedFloor[] = []
    const allFlats: NormalizedFlat[] = []
    const allBuildingDataMap = new Map<string, Record<string, any>>()
    const allFloorDataMap = new Map<string, Record<string, any>>()
    let projectData: Record<string, any> = {}

    // Process XML data
    return new Promise<MigrationResult>((resolve, reject) => {
      xmlStream.on('tag:project', async (rawProject: Record<string, any>) => {
        try {
          projectData = extractProjectData(rawProject)
        } catch (error) {
          console.error('❌ Error processing project data:', error)
        }
      })

      xmlStream.on('tag:building', async (rawBuilding: Record<string, any>) => {
        try {
          const building = validateXMLBuilding(normalizeXMLData(rawBuilding))
          const normalizedBuilding = buildingToNormalized(building, parseInt(job.projectID))

          const buildingData = extractBuildingData(rawBuilding)
          allBuildingDataMap.set(building.$attrs.id, buildingData)
          allBuildings.push(normalizedBuilding)

          // Process floors for this building
          const buildingFloors = ensureArray(building.floor)
          for (const floor of buildingFloors) {
            const normalizedFloor = floorToNormalized(
              floor,
              building.$attrs.id,
              building.$attrs.name,
              parseInt(job.projectID),
            )

            const floorData = extractFloorData(floor)
            allFloorDataMap.set(floor.$attrs.id, floorData)
            allFloors.push(normalizedFloor)

            // Process flats for this floor
            const floorFlats = ensureArray(floor.flat)
            for (const flat of floorFlats) {
              const normalizedFlat = flatToNormalized(
                flat,
                parseInt(job.projectID),
                building.$attrs.id,
                floor.$attrs.id,
              )
              allFlats.push(normalizedFlat)
            }
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
          const totalItems = allBuildings.length + allFloors.length + allFlats.length
          const limit = 50
          const totalPages = Math.ceil(totalItems / limit)

          console.log(`📊 XML parsing complete: ${totalItems} items, ${totalPages} pages`)

          // Process all pages
          for (let page = 1; page <= totalPages; page++) {
            //const pageProgress = Math.round((page / totalPages) * 100)
            const startIndex = (page - 1) * limit
            const endIndex = startIndex + limit

            // Update progress for current page
            progressCallback({
              currentPage: page,
              totalPages,
              percentage: 15 + Math.round((page / totalPages) * 80), // 15% to 95%
              message: `Processing page ${page}/${totalPages}...`,
              stats: {
                buildings: countBuildings,
                floors: countFloors,
                flats: countFlats,
                imported,
              },
            })

            // Get items for current page
            const pageBuildings = allBuildings.slice(startIndex, endIndex)
            const pageFloors = allFloors.slice(startIndex, endIndex)
            const pageFlats = allFlats.slice(startIndex, endIndex)

            // Extract IDs for existence check
            const buildingIds = pageBuildings.map((b) => b.realpadid).filter(Boolean)
            const floorIds = pageFloors.map((f) => f.realpadid).filter(Boolean)
            const flatIds = pageFlats.map((f) => f.realpadid).filter(Boolean)

            // Check existence
            const existingItems = await migrateService.checkExistence(
              buildingIds,
              floorIds,
              flatIds,
            )

            // Create buildings
            progressCallback({
              currentPage: page,
              totalPages,
              percentage: 15 + Math.round((page / totalPages) * 80),
              message: `Creating buildings for page ${page}/${totalPages}...`,
              stats: {
                buildings: countBuildings,
                floors: countFloors,
                flats: countFlats,
                imported,
              },
            })

            const buildingResults = await migrateService.createBuildingsBatch(
              pageBuildings,
              existingItems.buildings,
            )

            countBuildings += buildingResults.created.length
            errors.push(...buildingResults.errors)

            // Create building reference map
            const buildingMap = migrateService.createReferenceMap(
              buildingResults.created.map((b) => ({
                realpadid: b.realpadid ?? '',
                id: String(b.id),
              })),
            )

            // Create floors
            progressCallback({
              currentPage: page,
              totalPages,
              percentage: 15 + Math.round((page / totalPages) * 80),
              message: `Creating floors for page ${page}/${totalPages}...`,
              stats: {
                buildings: countBuildings,
                floors: countFloors,
                flats: countFlats,
                imported,
              },
            })

            const floorResults = await migrateService.createFloorsBatch(
              pageFloors,
              existingItems.floors,
              buildingMap,
            )

            countFloors += floorResults.created.length
            errors.push(...floorResults.errors)

            // Create floor reference map
            const floorMap = migrateService.createReferenceMap(
              floorResults.created.map((f) => ({
                realpadid: f.realpadid ?? '',
                id: String(f.id),
              })),
            )

            // Create flats
            progressCallback({
              currentPage: page,
              totalPages,
              percentage: 15 + Math.round((page / totalPages) * 80),
              message: `Creating flats for page ${page}/${totalPages}...`,
              stats: {
                buildings: countBuildings,
                floors: countFloors,
                flats: countFlats,
                imported,
              },
            })

            const flatResults = await migrateService.createFlatsBatch(
              pageFlats,
              existingItems.flats,
              buildingMap,
              floorMap,
            )

            countFlats += flatResults.created.length
            errors.push(...flatResults.errors)

            // Update with RealPad data
            await updateBuildingDataBatch(
              buildingResults.created,
              allBuildingDataMap,
              payload,
              errors,
            )
            await updateFloorDataBatch(floorResults.created, allFloorDataMap, payload, errors)

            imported = countBuildings + countFloors + countFlats

            // Page complete progress
            progressCallback({
              currentPage: page,
              totalPages,
              percentage: 15 + Math.round((page / totalPages) * 80),
              message: `Page ${page}/${totalPages} completed`,
              stats: {
                buildings: countBuildings,
                floors: countFloors,
                flats: countFlats,
                imported,
              },
            })
          }

          // Update project with RealPad data
          if (Object.keys(projectData).length > 0) {
            try {
              const projectResult = await payload.find({
                collection: 'projects',
                where: { realpadid: { equals: job.projectRealID } },
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
            }
          }

          // Update project last run
          await updateProjectLastRun(
            job.projectID,
            errors.length === 0 ? 'active' : 'error',
            `Migration completed: ${imported} items imported`,
          )

          // Final progress
          progressCallback({
            currentPage: totalPages,
            totalPages,
            percentage: 100,
            message: 'Migration completed successfully!',
            stats: { buildings: countBuildings, floors: countFloors, flats: countFlats, imported },
          })

          const result: MigrationResult = {
            success: errors.length === 0,
            imported,
            countBuildings,
            countFloors,
            countFlats,
            errors,
            processingTime: timer.elapsed(),
          }

          resolve(result)
        } catch (error) {
          console.error('❌ Migration failed:', error)
          reject(error)
        }
      })

      xmlStream.on('error', (error: any) => {
        console.error('❌ XML stream error:', error)
        reject(error)
      })
    })
  } catch (error) {
    console.error('❌ Migration job failed:', error)
    throw error
  }
}

// Helper functions
async function updateBuildingDataBatch(
  buildings: any[],
  buildingDataMap: Map<string, Record<string, any>>,
  payload: any,
  errors: any[],
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
        } catch (error) {
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

async function updateFloorDataBatch(
  floors: any[],
  floorDataMap: Map<string, Record<string, any>>,
  payload: any,
  errors: any[],
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
        } catch (error) {
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
