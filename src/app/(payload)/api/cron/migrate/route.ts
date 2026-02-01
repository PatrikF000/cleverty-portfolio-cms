import { getPayload } from 'payload'
import { NextRequest, NextResponse } from 'next/server'
import config from '@payload-config'
import { Project } from '@/payload-types'
import { formatCzechDateTime, parseCzechDateTime } from '@/lib/cronScheduler'
import {
  validateMigrateRequest,
  validateXMLBuilding,
  normalizeXMLData,
  ensureArray,
  flatToNormalized,
  buildingToNormalized,
  floorToNormalized,
  extractProjectData,
  extractBuildingData,
  extractFloorData,
  validateXMLStructure,
} from '@/utils/xmlProcessing'
import { MigrateService } from '@/services/migrateService'
import {
  createRealPadConfig,
  fetchRealPadProject,
  setupXMLParser,
  PerformanceTimer,
} from '@/utils/realpadApi'
import { Readable } from 'stream'
import { sanitizeRealpadFlatData } from '@/utils/sanitizeRealpadFlat'

interface CompleteMigrationResult {
  projectId: string
  projectName?: string
  buildings: {
    processed: number
    updated: number
    errors: number
  }
  floors: {
    processed: number
    updated: number
    errors: number
  }
  flats: {
    processed: number
    updated: number
    errors: number
  }
  errors: string[]
  success: boolean
}

// Helper function for complete project migration
async function runCompleteProjectMigration(
  payload: any,
  projectId: string,
  projectRealId: string,
  projectName?: string,
): Promise<CompleteMigrationResult> {
  const timer = new PerformanceTimer()
  const errors: string[] = []
  let buildingsProcessed = 0
  let buildingsUpdated = 0
  let buildingsErrors = 0
  let floorsProcessed = 0
  let floorsUpdated = 0
  let floorsErrors = 0
  let flatsProcessed = 0
  let flatsUpdated = 0
  let flatsErrors = 0

  try {
    console.log(`🔄 Starting complete project migration for: ${projectName || projectId}`)

    // Validate request data
    const { projectID, projectRealID }: any = validateMigrateRequest({
      projectID: projectId,
      projectRealID: projectRealId,
      projectName,
    })

    // Initialize services
    const migrateService = new MigrateService(payload)

    // Setup RealPad API
    const realpadConfig = createRealPadConfig(projectRealID)

    let response: Response
    try {
      response = await fetchRealPadProject(realpadConfig)
    } catch (error) {
      const errorMsg =
        error instanceof Error ? error.message : 'Failed to fetch RealPad project data'
      console.error('❌ Failed to fetch RealPad project data:', error)
      errors.push(errorMsg)
      return {
        projectId,
        projectName,
        buildings: { processed: 0, updated: 0, errors: 1 },
        floors: { processed: 0, updated: 0, errors: 1 },
        flats: { processed: 0, updated: 0, errors: 1 },
        errors: [errorMsg],
        success: false,
      }
    }

    // Get response text
    const responseText = await response.text()

    if (responseText.length === 0) {
      const errorMsg = 'API returned empty response'
      errors.push(errorMsg)
      return {
        projectId,
        projectName,
        buildings: { processed: 0, updated: 0, errors: 1 },
        floors: { processed: 0, updated: 0, errors: 1 },
        flats: { processed: 0, updated: 0, errors: 1 },
        errors: [errorMsg],
        success: false,
      }
    }

    // Validate XML structure
    if (!validateXMLStructure(responseText)) {
      const errorMsg = 'Invalid XML structure received from API'
      errors.push(errorMsg)
      return {
        projectId,
        projectName,
        buildings: { processed: 0, updated: 0, errors: 1 },
        floors: { processed: 0, updated: 0, errors: 1 },
        flats: { processed: 0, updated: 0, errors: 1 },
        errors: [errorMsg],
        success: false,
      }
    }

    // Convert text to readable stream
    const nodeStream = Readable.from([responseText])

    let xmlStream: any
    try {
      xmlStream = setupXMLParser(nodeStream)
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Failed to setup XML parser'
      console.error('❌ Failed to setup XML parser:', error)
      errors.push(errorMsg)
      return {
        projectId,
        projectName,
        buildings: { processed: 0, updated: 0, errors: 1 },
        floors: { processed: 0, updated: 0, errors: 1 },
        flats: { processed: 0, updated: 0, errors: 1 },
        errors: [errorMsg],
        success: false,
      }
    }

    // Data collection arrays
    const buildings: any[] = []
    const floors: any[] = []
    const flats: any[] = []
    const buildingIds: string[] = []
    const floorIds: string[] = []
    const flatIds: string[] = []
    let projectData: Record<string, any> = {}
    const buildingDataMap = new Map<string, Record<string, any>>()
    const floorDataMap = new Map<string, Record<string, any>>()
    //const flatDataMap = new Map<string, Record<string, any>>()

    // Return a promise to handle the stream processing
    return new Promise<CompleteMigrationResult>((resolve, reject) => {
      // Process project data
      xmlStream.on('tag:project', async (rawProject: Record<string, any>) => {
        try {
          projectData = extractProjectData(rawProject)
          console.log('📋 Extracted project data:', Object.keys(projectData))
        } catch (error) {
          console.error('❌ Error processing project data:', error)
          errors.push(
            `Project data error: ${error instanceof Error ? error.message : String(error)}`,
          )
        }
      })

      // Process buildings
      xmlStream.on('tag:building', async (rawBuilding: Record<string, any>) => {
        try {
          const building = validateXMLBuilding(normalizeXMLData(rawBuilding))
          const normalizedBuilding = buildingToNormalized(building, parseInt(projectID))

          // Extract building data from XML attributes
          const buildingData = extractBuildingData(rawBuilding)
          buildingDataMap.set(building.$attrs.id, buildingData)

          buildings.push(normalizedBuilding)
          buildingIds.push(building.$attrs.id)
          buildingsProcessed++

          // Process floors
          const buildingFloors = ensureArray(building.floor)
          for (const floor of buildingFloors) {
            const normalizedFloor = floorToNormalized(
              floor,
              building.$attrs.id,
              building.$attrs.name,
              parseInt(projectID),
            )

            // Extract floor data from XML attributes
            const floorData = extractFloorData(floor)
            floorDataMap.set(floor.$attrs.id, floorData)

            floors.push(normalizedFloor)
            floorIds.push(floor.$attrs.id)
            floorsProcessed++

            // Process flats
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
              flatsProcessed++
            }
          }
        } catch (error) {
          const errorMsg = error instanceof Error ? error.message : String(error)
          console.error('❌ Error processing building:', errorMsg)
          errors.push(`Building error: ${errorMsg}`)
          buildingsErrors++
        }
      })

      xmlStream.on('end', async () => {
        try {
          console.log(
            `📊 Collected data: ${buildings.length} buildings, ${floors.length} floors, ${flats.length} flats`,
          )

          // Bulk existence check
          const existingItems = await migrateService.checkExistence(buildingIds, floorIds, flatIds)

          // Update existing buildings
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
                    data: {
                      title: buildingData.title,
                    },
                  })
                  buildingsUpdated++
                  console.log(`✅ Updated building: ${buildingData.realpadid}`)
                }
              } catch (error) {
                const errorMsg = error instanceof Error ? error.message : String(error)
                console.error(`❌ Error updating building ${buildingData.realpadid}:`, errorMsg)
                errors.push(`Building update error: ${errorMsg}`)
                buildingsErrors++
              }
            } else {
              try {
                const extractedBuildingData = buildingDataMap.get(buildingData.realpadid)
                const createdBuilding = await payload.create({
                  collection: 'buildings',
                  data: {
                    realpadBuilding: extractedBuildingData,
                    title: buildingData.title,
                    project: buildingData.project,
                    realpadid: buildingData.realpadid,
                    ...(extractedBuildingData &&
                      Object.keys(extractedBuildingData).length > 0 && {
                        realpadBuilding: extractedBuildingData,
                      }),
                  },
                })
                await payload.update({
                  collection: 'buildings',
                  id: createdBuilding.id,
                  locale: 'en',
                  data: {
                    title: buildingData.title,
                  },
                })
                buildingsUpdated++
                console.log(`✅ Created building: ${buildingData.realpadid}`)
              } catch (error) {
                const errorMsg = error instanceof Error ? error.message : String(error)
                console.error(`❌ Error creating building ${buildingData.realpadid}:`, errorMsg)
                errors.push(`Building creation error: ${errorMsg}`)
                buildingsErrors++
              }
            }
          }

          // Update existing floors
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
                      data: {
                        title: floorData.title,
                      },
                    })
                    floorsUpdated++
                    console.log(`✅ Updated floor: ${floorData.realpadid}`)
                  }
                }
              } catch (error) {
                const errorMsg = error instanceof Error ? error.message : String(error)
                console.error(`❌ Error updating floor ${floorData.realpadid}:`, errorMsg)
                errors.push(`Floor update error: ${errorMsg}`)
                floorsErrors++
              }
            } else {
              try {
                const extractedFloorData = floorDataMap.get(floorData.realpadid)
                const [buildingResult] = await Promise.all([
                  payload.find({
                    collection: 'buildings',
                    where: { realpadid: { equals: floorData.building } },
                    limit: 1,
                  }),
                ])
                const createdFloor = await payload.create({
                  collection: 'floors',
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
                  id: createdFloor.id,
                  locale: 'en',
                  data: {
                    title: floorData.title,
                  },
                })
                floorsUpdated++
                console.log(`✅ Created floor: ${floorData.realpadid}`)
              } catch (error) {
                const errorMsg = error instanceof Error ? error.message : String(error)
                console.error(`❌ Error creating floor ${floorData.realpadid}:`, errorMsg)
                errors.push(`Floor creation error: ${errorMsg}`)
                floorsErrors++
              }
            }
          }

          // Update existing flats
          for (const flatData of flats) {
            if (existingItems.flats.has(flatData.realpadid)) {
              try {
                const existingFlatResult = await payload.find({
                  collection: 'flats',
                  where: { realpadid: { equals: flatData.realpadid } },
                  limit: 1,
                })

                if (existingFlatResult.docs.length > 0) {
                  const extractedFlatData = flats?.find((f) => f.realpadid === flatData.realpadid)
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
                  if (buildingResult.docs.length > 0 && floorResult.docs.length > 0) {
                    await payload.update({
                      collection: 'flats',
                      id: existingFlatResult.docs[0].id,
                      data: {
                        realpadFlat: sanitizeRealpadFlatData(extractedFlatData.realpadFlat),
                        title: flatData.title,
                        slug: flatData.slug,
                        project: flatData.project,
                        building: Number(buildingResult.docs[0].id),
                        floor: Number(floorResult.docs[0].id),
                      },
                    })
                    await payload.update({
                      collection: 'flats',
                      id: existingFlatResult.docs[0].id,
                      locale: 'en',
                      data: {
                        title: flatData.title,
                      },
                    })
                    flatsUpdated++
                    console.log(`✅ Updated flat: ${flatData.realpadid}`)
                  }
                }
              } catch (error) {
                const errorMsg = error instanceof Error ? error.message : String(error)
                console.error(`❌ Error updating flat ${flatData.realpadid}:`, errorMsg)
                errors.push(`Flat update error: ${errorMsg}`)
                flatsErrors++
              }
            } else {
              try {
                const extractedFlatData = flats?.find((f) => f.realpadid === flatData.realpadid)
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
                const createdFlat = await payload.create({
                  collection: 'flats',
                  data: {
                    realpadFlat: sanitizeRealpadFlatData(extractedFlatData.realpadFlat),
                    title: flatData.title,
                    slug: flatData.slug,
                    project: flatData.project,
                    building: Number(buildingResult.docs[0].id),
                    floor: Number(floorResult.docs[0].id),
                  },
                })
                await payload.update({
                  collection: 'flats',
                  id: createdFlat.id,
                  locale: 'en',
                  data: {
                    title: flatData.title,
                  },
                })
                console.log(`✅ Created flat: ${flatData.realpadid}`)
                flatsUpdated++
              } catch (error) {
                const errorMsg = error instanceof Error ? error.message : String(error)
                console.error(`❌ Error creating flat ${flatData.realpadid}:`, errorMsg)
                errors.push(`Flat creation error: ${errorMsg}`)
                flatsErrors++
              }
            }
          }

          // Update project with extracted data if available
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
                  data: {
                    realpadProject: projectData,
                  },
                })
                console.log(`✅ Updated project ${projectRealID} with RealPad data`)
              }
            } catch (error) {
              const errorMsg = error instanceof Error ? error.message : String(error)
              console.error(`❌ Error updating project ${projectRealID}:`, errorMsg)
              errors.push(`Project update error: ${errorMsg}`)
            }
          }

          console.log(`✅ Complete project migration completed in ${timer.elapsed()}ms`)

          const result: CompleteMigrationResult = {
            projectId,
            projectName,
            buildings: {
              processed: buildingsProcessed,
              updated: buildingsUpdated,
              errors: buildingsErrors,
            },
            floors: {
              processed: floorsProcessed,
              updated: floorsUpdated,
              errors: floorsErrors,
            },
            flats: {
              processed: flatsProcessed,
              updated: flatsUpdated,
              errors: flatsErrors,
            },
            errors,
            success: errors.length === 0,
          }

          resolve(result)
        } catch (error) {
          const errorMsg = error instanceof Error ? error.message : String(error)
          console.error('❌ Complete project migration failed during processing:', errorMsg)
          errors.push(`Processing error: ${errorMsg}`)
          reject(new Error(errorMsg))
        }
      })

      xmlStream.on('error', async (error: any) => {
        const errorMsg = `XML parsing failed: ${error.message}`
        console.error('❌ XML stream error:', error)
        errors.push(errorMsg)
        reject(new Error(errorMsg))
      })
    })
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error)
    console.error('❌ Complete project migration setup failed:', errorMsg)
    errors.push(`Setup error: ${errorMsg}`)

    return {
      projectId,
      projectName,
      buildings: { processed: 0, updated: 0, errors: 1 },
      floors: { processed: 0, updated: 0, errors: 1 },
      flats: { processed: 0, updated: 0, errors: 1 },
      errors: [errorMsg],
      success: false,
    }
  }
}

export async function GET(request: NextRequest) {
  console.log('🔄 Cron job: Checking for scheduled migrations...')
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token') || request.headers.get('x-cron-token')
  const expectedToken = process.env.CRON_SECURITY_TOKEN || ''

  if (!token || token !== expectedToken) {
    console.log('❌ Unauthorized access attempt to cron endpoint')
    return NextResponse.json(
      {
        success: false,
        error: 'Unauthorized',
        timestamp: formatCzechDateTime(new Date()),
      },
      { status: 401 },
    )
  }
  try {
    const payload = await getPayload({ config })

    // Get all projects with enabled cron jobs
    const { docs: projects } = await payload.find({
      collection: 'projects',
      where: {
        'cronSettings.enabled': {
          equals: true,
        },
        'cronSettings.status': {
          not_equals: 'paused',
        },
      },
      limit: 100,
    })

    if (!projects.length) {
      console.log('❌ No projects with enabled cron jobs found')
      return NextResponse.json(
        { success: true, message: 'No enabled cron jobs found', processed: 0 },
        { status: 200 },
      )
    }

    console.log(`📋 Found ${projects.length} projects with enabled cron jobs`)

    const results = []

    // Process each project
    for (const project of projects) {
      try {
        // Check if it's time to run using advanced cron logic
        const shouldRun = shouldProjectRunNow(project, new Date())

        if (!shouldRun) {
          console.log(`⏭️ Skipping ${project.name} - not scheduled to run now`)
          continue
        }

        console.log(`🚀 Running migration for project: ${project.name} (ID: ${project.realpadid})`)

        // Check if project has realpadid
        if (!project.realpadid) {
          console.error(`❌ Project ${project.name} has no realpadid`)
          results.push({
            projectId: project.id,
            projectName: project.name,
            success: false,
            error: 'Project has no realpadid',
          })
          continue
        }

        // Always run complete project migration
        console.log(`🔄 Running complete project migration for: ${project.name}`)

        // Call complete migration function
        const completeResult = await runCompleteProjectMigration(
          payload,
          String(project.id),
          project.realpadid,
          project.name,
        )

        console.log(`✅ Complete migration completed for ${project.name}:`, completeResult)

        results.push({
          projectId: project.id,
          projectName: project.name,
          success: completeResult.success,
          result: completeResult,
          type: 'complete',
        })
      } catch (projectError) {
        console.error(`❌ Error processing ${project.name}:`, projectError)

        results.push({
          projectId: project.id,
          projectName: project.name,
          success: false,
          error: String(projectError),
        })
      }
    }

    return NextResponse.json({
      success: true,
      processed: results.length,
      results,
      timestamp: formatCzechDateTime(new Date()),
    })
  } catch (error) {
    console.error('❌ Scheduled migration error:', error)

    return NextResponse.json(
      {
        success: false,
        error: String(error),
        timestamp: formatCzechDateTime(new Date()),
      },
      { status: 500 },
    )
  }
}

// Advanced function to determine if a project should run now based on its cron settings
function shouldProjectRunNow(project: Project, now: Date): boolean {
  const cronSettings = project.cronSettings
  if (!cronSettings?.enabled) return false

  const cronExpression = cronSettings.customSchedule || cronSettings.schedule
  const lastRun = cronSettings.lastRun ? parseCzechDateTime(cronSettings.lastRun) : null

  // If never ran, run it once
  if (!lastRun) {
    console.log(`✅ ${project.name} - Never ran before, will run now`)
    return true
  }

  const minutesSinceLastRun = Math.floor((now.getTime() - lastRun.getTime()) / (1000 * 60))

  // Check different cron patterns
  switch (cronExpression) {
    case '*/5 * * * *': // Every 5 minutes
      return minutesSinceLastRun >= 5

    case '*/15 * * * *': // Every 15 minutes
      return minutesSinceLastRun >= 15

    case '0 * * * *': // Every hour
      return minutesSinceLastRun >= 60 && now.getMinutes() === 0

    case '0 */6 * * *': // Every 6 hours
      return minutesSinceLastRun >= 360 && now.getMinutes() === 0 && now.getHours() % 6 === 0

    case '0 */12 * * *': // Every 12 hours
      return minutesSinceLastRun >= 720 && now.getMinutes() === 0 && now.getHours() % 12 === 0

    case '0 0 * * *': // Daily at midnight
      return minutesSinceLastRun >= 1440 && now.getHours() === 0 && now.getMinutes() === 0

    case '0 6 * * *': // Daily at 6 AM
      return minutesSinceLastRun >= 1440 && now.getHours() === 6 && now.getMinutes() === 0

    case '0 0 * * 0': // Weekly on Sunday
      return (
        minutesSinceLastRun >= 10080 &&
        now.getDay() === 0 &&
        now.getHours() === 0 &&
        now.getMinutes() === 0
      )

    default:
      // For custom expressions, use a simple 5-minute fallback
      console.log(`⚠️ Unknown cron pattern for ${project.name}: ${cronExpression}`)
      return minutesSinceLastRun >= 5
  }
}

// POST method for manual triggering or specific project
export async function POST(request: NextRequest) {
  // Verify security token
  const token = request.headers.get('x-cron-token')
  const expectedToken = process.env.CRON_SECURITY_TOKEN || ''

  if (!token || token !== expectedToken) {
    console.log('❌ Unauthorized access attempt to cron endpoint')
    return NextResponse.json(
      {
        success: false,
        error: 'Unauthorized',
        timestamp: formatCzechDateTime(new Date()),
      },
      { status: 401 },
    )
  }

  try {
    const body = await request.json()
    const { projectId } = body

    if (projectId) {
      // Manual trigger for specific project
      console.log(`🔄 Manual trigger for project ID: ${projectId}`)

      const payload = await getPayload({ config })

      const project = await payload.findByID({
        collection: 'projects',
        id: projectId,
      })

      if (!project) {
        return NextResponse.json({ success: false, message: 'Project not found' }, { status: 404 })
      }

      console.log(`🚀 Running manual migration for project: ${project.name}`)

      // Check if project has realpadid
      if (!project.realpadid) {
        return NextResponse.json(
          { success: false, message: 'Project has no realpadid' },
          { status: 400 },
        )
      }

      // Always run complete project migration
      console.log(`🔄 Running complete project migration for: ${project.name}`)

      // Call complete migration function
      const result = await runCompleteProjectMigration(
        payload,
        String(project.id),
        project.realpadid,
        project.name,
      )

      console.log(`✅ Complete migration completed for ${project.name}:`, result)

      return NextResponse.json({
        success: result.success,
        project: {
          id: project.id,
          name: project.name,
          realpadid: project.realpadid,
        },
        migration: result,
        type: 'complete',
        timestamp: formatCzechDateTime(new Date()),
      })
    }

    // No specific project - run all scheduled
    return GET(request)
  } catch (error) {
    console.error('❌ Manual trigger error:', error)

    return NextResponse.json(
      {
        success: false,
        error: String(error),
        timestamp: formatCzechDateTime(new Date()),
      },
      { status: 500 },
    )
  }
}
