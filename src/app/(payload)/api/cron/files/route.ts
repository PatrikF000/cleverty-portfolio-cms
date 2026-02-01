import { getPayload } from 'payload'
import { NextRequest, NextResponse } from 'next/server'
import config from '@payload-config'
import { formatCzechDateTime } from '@/lib/cronScheduler'
import { revalidateFrontend } from '@/hooks/revalidateFrontend'

interface DownloadResult {
  id: string
  title: string
  type: 'flat' | 'floor' | 'building' | 'project'
  pdfIds: string[]
  planIds: string[]
  pictureIds: string[]
  standardsIds: string[]
  downloaded: string[]
  downloadedPlans: string[]
  downloadedStandards: string[]
  downloadedPictures: string[]
  errors: string[]
  success: boolean
}

// Helper function to extract and validate IDs from a field
function extractAndValidateIds(
  field: string | undefined,
  fieldName: string,
): { ids: string[]; validIds: string[] } {
  //const ids: string[] = []
  const validIds: string[] = []

  if (field && typeof field === 'string') {
    // Split IDs by comma and clean up
    const splitIds = field
      .split(',')
      .map((id) => id.trim())
      .filter((id) => id.length > 0)
      .filter((id) => id !== '') // Remove empty strings
      .filter((id) => id !== 'null') // Remove null values
      .filter((id) => id !== 'undefined') // Remove undefined values
    console.log(`🔍 Split ${fieldName} IDs: [${splitIds.join(', ')}] (${splitIds.length} total)`)
    // Validate IDs format (basic UUID check)
    validIds.push(
      ...splitIds.filter((id) => {
        // Basic UUID validation (8-4-4-4-12 format)
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
        const isValid = uuidRegex.test(id) || id.length >= 8 // Allow other formats too
        if (!isValid) {
          console.log(`⚠️ Invalid ${fieldName} ID format: "${id}"`)
        }
        return isValid
      }),
    )

    if (validIds.length !== splitIds.length) {
      console.log(`⚠️ Filtered out ${splitIds.length - validIds.length} invalid ${fieldName} IDs`)
    }
  }

  return {
    ids: field
      ? field
          .split(',')
          .map((id) => id.trim())
          .filter((id) => id.length > 0)
      : [],
    validIds,
  }
}

// Helper function to get field values based on item type
function getItemFields(item: any): {
  pdfField?: string
  planField?: string
  pictureField?: string
  standardsField?: string
} {
  let pdfField: string | undefined
  let planField: string | undefined
  let standardsField: string | undefined
  let pictureField: string | undefined

  switch (item._type) {
    case 'flat':
      pdfField = item.realpadFlat?.pdf
      planField = item.realpadFlat?.plan
      pictureField = item.realpadFlat?.picture
      break
    case 'floor':
      //pdfField = item.realpadFloor?.pdf
      planField = item.realpadFloor?.plan
      break
    case 'building':
      //pdfField = item.realpadBuilding?.pdf
      planField = item.realpadBuilding?.plan
      break
    case 'project':
      standardsField = item.realpadProject?.standards
      pdfField = item.realpadProject?.pdf
      planField = item.realpadProject?.plan
      break
  }

  return { pdfField, planField, standardsField, pictureField }
}

// Helper function to get collection name and current arrays
function getItemCollections(item: any): {
  collectionName: 'flats' | 'floors' | 'buildings' | 'projects'
  currentDocuments: any[]
  currentPictures: any[]
  currentPlans: any[]
  currentStandards: any[]
} {
  let collectionName: 'flats' | 'floors' | 'buildings' | 'projects' = 'flats'
  let currentDocuments: any[] = []
  let currentPlans: any[] = []
  let currentStandards: any[] = []
  let currentPictures: any[] = []
  switch (item._type) {
    case 'flat':
      currentDocuments = item.documents || []
      currentPlans = item.plans || []
      currentPictures = item.pictures || []
      collectionName = 'flats'
      break
    case 'floor':
      currentDocuments = item.documents || []
      currentPlans = item.plans || []
      collectionName = 'floors'
      break
    case 'building':
      currentDocuments = item.documents || []
      currentPlans = item.plans || []
      collectionName = 'buildings'
      break
    case 'project':
      currentDocuments = item.documents || []
      currentPlans = item.plans || []
      currentStandards = item.standards || []
      collectionName = 'projects'
      break
  }

  return { collectionName, currentDocuments, currentPlans, currentStandards, currentPictures }
}

// Helper function to get project ID from an item
async function getProjectId(payload: any, item: any): Promise<number | undefined> {
  // Direct project reference
  if (item.project && item.project.id) {
    return Number(item.project.id)
  }

  // For floors, get project from parent building
  if (item._type === 'floor' && item.building) {
    try {
      const building = await payload.findByID({
        collection: 'buildings',
        id: Number(item.building),
      })
      if (building && building.project && building.project.id) {
        return Number(building.project.id)
      }
    } catch (error) {
      // Silent fail
    }
  }

  // For flats, get project from parent building or floor
  if (item._type === 'flat') {
    // Then try building reference
    if (item.building) {
      try {
        const building = await payload.findByID({
          collection: 'buildings',
          id: Number(item.building),
        })
        if (building && building.project) {
          return Number(building.project?.id)
        }
      } catch (error) {
        // Silent fail
      }
    }

    // Finally try floor reference
    if (item.floor) {
      try {
        const floor = await payload.findByID({
          collection: 'floors',
          id: Number(item.floor),
        })
        if (floor && floor.project && floor.project.id) {
          return Number(floor.project.id)
        }
        // If floor doesn't have project, try its building
        if (floor && floor.building) {
          const building = await payload.findByID({
            collection: 'buildings',
            id: Number(floor.building),
          })
          if (building && building.project) {
            return Number(building.project?.id)
          }
        }
      } catch (error) {
        // Silent fail
      }
    }
  }

  return undefined
}

// Helper function to process documents for a single item
async function processItemDocuments(payload: any, item: any) {
  const result: DownloadResult = {
    id: String(item.id),
    title: item.title || item.name || 'Unknown',
    type: item._type || 'flat',
    pdfIds: [],
    planIds: [],
    pictureIds: [],
    standardsIds: [],
    downloaded: [],
    downloadedPlans: [],
    downloadedStandards: [],
    downloadedPictures: [],
    errors: [],
    success: false,
  }

  try {
    // Get project ID for this item
    const projectId = await getProjectId(payload, item)

    // Get field values based on item type
    const { pdfField, planField, standardsField, pictureField } = getItemFields(item)

    // Extract and validate IDs
    const { ids: pdfIds, validIds: validPdfIds } = extractAndValidateIds(pdfField, 'PDF')
    const { ids: planIds, validIds: validPlanIds } = extractAndValidateIds(planField, 'plan')
    const { ids: pictureIds, validIds: validPictureIds } = extractAndValidateIds(
      pictureField,
      'picture',
    )
    const { ids: standardsIds, validIds: validStandardsIds } = extractAndValidateIds(
      standardsField,
      'standards',
    )

    result.pdfIds = pdfIds
    result.planIds = planIds
    result.standardsIds = standardsIds
    result.pictureIds = pictureIds

    const totalIds =
      validPdfIds.length + validPlanIds.length + validPictureIds.length + validStandardsIds.length

    if (totalIds > 0) {
      console.log(
        `📄 Zpracovávám ${item._type} "${item.title || item.name}" (ID: ${item.id}) - PDF: ${validPdfIds.length}, Plány: ${validPlanIds.length}, Obrázky: ${validPictureIds.length}, Standardy: ${validStandardsIds.length}`,
      )
    }

    // Get current documents and plans based on item type
    const { collectionName, currentDocuments, currentPlans, currentStandards, currentPictures } =
      getItemCollections(item)

    // Process PDF files
    const documentsUpload = [...currentDocuments] // Start with current documents
    let documentsUpdated = false

    for (const pdfId of validPdfIds) {
      try {
        // Check if document already exists in Documents collection
        const existingDocument = await payload.find({
          collection: 'documents',
          where: {
            realpadid: {
              equals: pdfId,
            },
          },
          limit: 1,
        })

        if (existingDocument.docs.length > 0 && existingDocument.docs[0]?.id) {
          // Update project reference if not set and we have a project ID
          if (projectId && !existingDocument.docs[0].project) {
            await payload.update({
              collection: 'documents',
              id: existingDocument.docs[0].id,
              data: {
                project: projectId,
              },
            })
          }

          // Check if document is already associated with this item
          const documentId = String(existingDocument.docs[0].id)
          const documentExistsInItem = documentsUpload.some((doc: any) => {
            const docId =
              typeof doc.document_file === 'object' && doc.document_file?.id
                ? String(doc.document_file.id)
                : String(doc.document_file)
            return docId === documentId
          })

          if (!documentExistsInItem) {
            documentsUpload.push({
              document_file: Number(documentId),
            })
            documentsUpdated = true
            console.log(
              `✅ Přidán existující dokument ${pdfId} do ${item._type} ${item.title || item.name}`,
            )
          }

          result.downloaded.push(pdfId)
          continue
        }

        // Download and upload document
        const documentUrl = `https://cms.realpad.eu/resource/${pdfId}`
        const response = await fetch(documentUrl, { method: 'GET' })

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }

        const contentType = response.headers.get('content-type') || 'application/octet-stream'
        const contentDisposition = response.headers.get('content-disposition') || ''
        const filenameMatch = contentDisposition.match(/filename="?([^"]+)"?/)
        const filename = filenameMatch ? filenameMatch[1] : `${pdfId}.pdf`

        // Final check - make sure we don't create duplicate
        const finalCheck = await payload.find({
          collection: 'documents',
          where: {
            or: [
              {
                realpadid: {
                  equals: pdfId,
                },
              },
              {
                filename: {
                  equals: filename,
                },
              },
            ],
          },
          limit: 1,
        })

        if (finalCheck.docs.length > 0) {
          result.downloaded.push(pdfId)
          continue
        }

        const arrayBuffer = await response.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        // Create document with project reference
        const documentData: any = {
          alt: `Document ${pdfId}`,
          realpadid: pdfId,
        }

        if (projectId) {
          documentData.project = projectId
        }

        const documentDoc = await payload.create({
          collection: 'documents',
          data: documentData,
          file: {
            name: filename,
            size: buffer.length,
            data: buffer,
            mimetype: contentType,
          },
        })

        if (!documentDoc) {
          throw new Error(`Failed to create document - payload.create returned undefined`)
        }

        if (!documentDoc.id) {
          console.error(`❌ Document created but no ID:`, JSON.stringify(documentDoc, null, 2))
          throw new Error(
            `Failed to create document - no ID returned. Document: ${JSON.stringify(documentDoc)}`,
          )
        }

        console.log(`✅ Stažen a nahrán dokument ${pdfId} (ID: ${documentDoc.id})`)

        result.downloaded.push(pdfId)

        // Add to documents array (accumulate, don't overwrite)
        documentsUpload.push({
          document_file: Number(documentDoc.id),
        })
        documentsUpdated = true
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'Unknown error'
        console.log(`❌ Chyba při stahování dokumentu ${pdfId}: ${errorMsg} ${error}`)
        result.errors.push(`${pdfId}: ${errorMsg}`)
      }
    }

    // Update item with all documents at once (only if there were changes)
    if (documentsUpdated) {
      await payload.update({
        collection: collectionName,
        id: item.id,
        data: {
          documents: documentsUpload,
        },
      })
      console.log(
        `✅ Aktualizován ${item._type} ${item.title || item.name} - ${documentsUpload.length} dokumentů`,
      )
    }

    // Process picture files
    const picturesUpload = [...currentPictures] // Start with current pictures
    let picturesUpdated = false

    for (const pictureId of validPictureIds) {
      try {
        // Check if document already exists in Documents collection
        const existingDocument = await payload.find({
          collection: 'documents',
          where: {
            realpadid: {
              equals: pictureId,
            },
          },
          limit: 1,
        })
        if (existingDocument.docs.length > 0 && existingDocument.docs[0]?.id) {
          // Update project reference if not set and we have a project ID
          if (projectId && !existingDocument.docs[0].project) {
            await payload.update({
              collection: 'documents',
              id: existingDocument.docs[0].id,
              data: {
                project: projectId,
              },
            })
          }

          const documentId = String(existingDocument.docs[0].id)
          const pictureExistsInItem = picturesUpload.some((picture: any) => {
            const pictureFileId =
              typeof picture.picture_file === 'object' && picture.picture_file?.id
                ? String(picture.picture_file.id)
                : String(picture.picture_file)
            return pictureFileId === documentId
          })
          if (!pictureExistsInItem) {
            picturesUpload.push({
              picture_file: Number(documentId),
            })
            picturesUpdated = true
            console.log(
              `✅ Přidán existující obrázek ${pictureId} do ${item._type} ${item.title || item.name}`,
            )
          }
          result.downloadedPictures.push(pictureId)
          continue
        }
        // Download and picture
        const documentUrl = `https://cms.realpad.eu/resource/${pictureId}`
        const response = await fetch(documentUrl, { method: 'GET' })

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }

        const contentType = response.headers.get('content-type') || 'application/octet-stream'
        const contentDisposition = response.headers.get('content-disposition') || ''
        const filenameMatch = contentDisposition.match(/filename="?([^"]+)"?/)
        const filename = filenameMatch ? filenameMatch[1] : `${pictureId}.pdf`

        // Final check - make sure we don't create duplicate
        const finalCheck = await payload.find({
          collection: 'documents',
          where: {
            or: [
              {
                realpadid: {
                  equals: pictureId,
                },
              },
              {
                filename: {
                  equals: filename,
                },
              },
            ],
          },
          limit: 1,
        })

        if (finalCheck.docs.length > 0) {
          result.downloadedPictures.push(pictureId)
          continue
        }

        const arrayBuffer = await response.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        // Create document with project reference
        const documentData: any = {
          alt: `Picture ${pictureId}`,
          realpadid: pictureId,
        }

        if (projectId) {
          documentData.project = projectId
        }

        const documentDoc = await payload.create({
          collection: 'documents',
          data: documentData,
          file: {
            name: filename,
            size: buffer.length,
            data: buffer,
            mimetype: contentType,
          },
        })

        if (!documentDoc) {
          throw new Error(`Failed to create picture - payload.create returned undefined`)
        }

        if (!documentDoc.id) {
          console.error(`❌ Picture created but no ID:`, JSON.stringify(documentDoc, null, 2))
          throw new Error(
            `Failed to create picture - no ID returned. Document: ${JSON.stringify(documentDoc)}`,
          )
        }

        console.log(`✅ Stažen a nahrán obrázek ${pictureId} (ID: ${documentDoc.id})`)

        result.downloadedPictures.push(pictureId)

        // Add to pictures array (accumulate, don't overwrite)
        picturesUpload.push({
          picture_file: Number(documentDoc.id),
        })
        picturesUpdated = true
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'Unknown error'
        console.log(`❌ Chyba při stahování obrázku ${pictureId}: ${errorMsg}`)
        result.errors.push(`${pictureId}: ${errorMsg}`)
      }
    }

    // Update item with all pictures at once (only if there were changes)
    if (picturesUpdated) {
      await payload.update({
        collection: collectionName,
        id: item.id,
        data: {
          pictures: picturesUpload,
        },
      })
      console.log(
        `✅ Aktualizován ${item._type} ${item.title || item.name} - ${picturesUpload.length} obrázků`,
      )
    }

    // Process plan files
    const plansUpload = [...currentPlans] // Start with current plans
    let plansUpdated = false

    for (const planId of validPlanIds) {
      try {
        // Check if document already exists
        const existingDocument = await payload.find({
          collection: 'documents',
          where: {
            realpadid: {
              equals: planId,
            },
          },
          limit: 1,
        })

        if (existingDocument.docs.length > 0 && existingDocument.docs[0]?.id) {
          // Update project reference if not set and we have a project ID
          if (projectId && !existingDocument.docs[0].project) {
            await payload.update({
              collection: 'documents',
              id: existingDocument.docs[0].id,
              data: {
                project: projectId,
              },
            })
          }

          // Check if plan is already associated with this item
          const documentId = String(existingDocument.docs[0].id)
          const planExistsInItem = plansUpload.some((plan: any) => {
            const planFileId =
              typeof plan.plan_file === 'object' && plan.plan_file?.id
                ? String(plan.plan_file.id)
                : String(plan.plan_file)
            return planFileId === documentId
          })

          if (!planExistsInItem) {
            plansUpload.push({
              plan_file: Number(documentId),
            })
            plansUpdated = true
            console.log(
              `✅ Přidán existující plán ${planId} do ${item._type} ${item.title || item.name}`,
            )
          }

          result.downloadedPlans.push(planId)
          continue
        }

        // Download and upload plan
        const documentUrl = `https://cms.realpad.eu/resource/${planId}`
        const response = await fetch(documentUrl, { method: 'GET' })

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }

        const contentType = response.headers.get('content-type') || 'application/octet-stream'
        const contentDisposition = response.headers.get('content-disposition') || ''
        const filenameMatch = contentDisposition.match(/filename="?([^"]+)"?/)
        const filename = filenameMatch ? filenameMatch[1] : `${planId}.pdf`

        // Final check - make sure we don't create duplicate
        const finalCheck = await payload.find({
          collection: 'documents',
          where: {
            or: [
              {
                realpadid: {
                  equals: planId,
                },
              },
              {
                filename: {
                  equals: filename,
                },
              },
            ],
          },
          limit: 1,
        })

        if (finalCheck.docs.length > 0) {
          result.downloadedPlans.push(planId)
          continue
        }

        const arrayBuffer = await response.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        // Create document with project reference
        const documentData: any = {
          alt: `Plan ${planId}`,
          realpadid: planId,
        }

        if (projectId) {
          documentData.project = projectId
        }

        const documentDoc = await payload.create({
          collection: 'documents',
          data: documentData,
          file: {
            name: filename,
            size: buffer.length,
            data: buffer,
            mimetype: contentType,
          },
        })

        if (!documentDoc) {
          throw new Error(`Failed to create plan - payload.create returned undefined`)
        }

        if (!documentDoc.id) {
          console.error(`❌ Plan created but no ID:`, JSON.stringify(documentDoc, null, 2))
          throw new Error(
            `Failed to create plan - no ID returned. Document: ${JSON.stringify(documentDoc)}`,
          )
        }

        console.log(`✅ Stažen a nahrán plán ${planId} (ID: ${documentDoc.id})`)

        result.downloadedPlans.push(planId)

        // Add to plans array (accumulate, don't overwrite)
        plansUpload.push({
          plan_file: Number(documentDoc.id),
        })
        plansUpdated = true
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'Unknown error'
        console.log(`❌ Chyba při stahování plánu ${planId}: ${errorMsg}`)
        result.errors.push(`${planId}: ${errorMsg}`)
      }
    }

    // Update item with all plans at once (only if there were changes)
    if (plansUpdated) {
      await payload.update({
        collection: collectionName,
        id: item.id,
        data: {
          plans: plansUpload,
        },
      })
      console.log(
        `✅ Aktualizován ${item._type} ${item.title || item.name} - ${plansUpload.length} plánů`,
      )
    }

    // Process standards files (only for projects)
    if (item._type === 'project') {
      const standardsUpload = [...currentStandards] // Start with current standards
      let standardsUpdated = false

      for (const standardsId of validStandardsIds) {
        try {
          // Check if document already exists in Documents collection
          const existingDocument = await payload.find({
            collection: 'documents',
            where: {
              realpadid: {
                equals: standardsId,
              },
            },
            limit: 1,
          })

          if (existingDocument.docs.length > 0 && existingDocument.docs[0]?.id) {
            // Update project reference if not set and we have a project ID
            if (projectId && !existingDocument.docs[0].project) {
              await payload.update({
                collection: 'documents',
                id: existingDocument.docs[0].id,
                data: {
                  project: projectId,
                },
              })
            }

            // Check if standards is already associated with this project
            const documentId = String(existingDocument.docs[0].id)
            const standardsExistsInProject = standardsUpload.some((standard: any) => {
              const standardFileId =
                typeof standard.standard_file === 'object' && standard.standard_file?.id
                  ? String(standard.standard_file.id)
                  : String(standard.standard_file)
              return standardFileId === documentId
            })

            if (!standardsExistsInProject) {
              standardsUpload.push({
                standard_file: Number(documentId),
              })
              standardsUpdated = true
              console.log(
                `✅ Přidán existující standard ${standardsId} do ${item._type} ${item.title || item.name}`,
              )
            }

            result.downloadedStandards.push(standardsId)
            continue
          }

          // Download standards from RealPad API
          const documentUrl = `https://cms.realpad.eu/resource/${standardsId}`

          const response = await fetch(documentUrl, {
            method: 'GET',
          })

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`)
          }

          const contentType = response.headers.get('content-type') || 'application/octet-stream'
          const contentDisposition = response.headers.get('content-disposition') || ''
          const filenameMatch = contentDisposition.match(/filename="?([^"]+)"?/)
          const filename = filenameMatch ? filenameMatch[1] : `${standardsId}.pdf`

          // Final check - make sure we don't create duplicate
          const finalCheck = await payload.find({
            collection: 'documents',
            where: {
              or: [
                {
                  realpadid: {
                    equals: standardsId,
                  },
                },
                {
                  filename: {
                    equals: filename,
                  },
                },
              ],
            },
            limit: 1,
          })

          if (finalCheck.docs.length > 0) {
            result.downloadedStandards.push(standardsId)
            continue
          }

          const arrayBuffer = await response.arrayBuffer()
          const buffer = Buffer.from(arrayBuffer)

          // Create document with project reference
          const documentData: any = {
            alt: `Standards ${standardsId}`,
            realpadid: standardsId,
          }

          if (projectId) {
            documentData.project = projectId
          }

          const documentDoc = await payload.create({
            collection: 'documents',
            data: documentData,
            file: {
              name: filename,
              size: buffer.length,
              data: buffer,
              mimetype: contentType,
            },
          })

          if (!documentDoc) {
            throw new Error(`Failed to create standards - payload.create returned undefined`)
          }

          if (!documentDoc.id) {
            console.error(`❌ Standards created but no ID:`, JSON.stringify(documentDoc, null, 2))
            throw new Error(
              `Failed to create standards - no ID returned. Document: ${JSON.stringify(documentDoc)}`,
            )
          }

          console.log(`✅ Stažen a nahrán standard ${standardsId} (ID: ${documentDoc.id})`)
          result.downloadedStandards.push(standardsId)

          // Add standards to project's standards array (accumulate, don't overwrite)
          const standardsExists = standardsUpload.some(
            (standard: any) => standard.standard_file === documentDoc.id,
          )

          if (!standardsExists) {
            standardsUpload.push({
              standard_file: documentDoc.id,
            })
            standardsUpdated = true
          }
        } catch (error) {
          const errorMsg = error instanceof Error ? error.message : 'Unknown error'
          console.log(`❌ Chyba při stahování standardu ${standardsId}: ${errorMsg}`)
          result.errors.push(`${standardsId}: ${errorMsg}`)
        }
      }

      // Update item with all standards at once (only if there were changes)
      if (standardsUpdated) {
        await payload.update({
          collection: collectionName,
          id: item.id,
          data: {
            standards: standardsUpload,
          } as any,
        })
        console.log(
          `✅ Aktualizován ${item._type} ${item.title || item.name} - ${standardsUpload.length} standardů`,
        )
      }
    }

    // Mark as successful if no errors occurred
    result.success = result.errors.length === 0
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown error'
    result.errors.push(errorMsg)
  }

  return result
}

export async function GET(request: NextRequest) {
  // Verify security token
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

  console.log('🔄 Cron job: Starting document download...')

  try {
    const payload = await getPayload({ config })
    const results: DownloadResult[] = []
    let totalDownloaded = 0
    let totalErrors = 0

    // Get all items from different collections that have PDF IDs or plan IDs
    const allItems: any[] = []

    // Get flats
    const { docs: flats } = await payload.find({
      collection: 'flats',
      where: {
        or: [
          {
            'realpadFlat.pdf': {
              exists: true,
            },
          },
          {
            'realpadFlat.plan': {
              exists: true,
            },
          },
          {
            'realpadFlat.picture': {
              exists: true,
            },
          },
        ],
      },
      limit: 1000,
    })

    // Get floors
    const { docs: floors } = await payload.find({
      collection: 'floors',
      where: {
        or: [
          {
            'realpadFloor.pdf': {
              exists: true,
            },
          },
          {
            'realpadFloor.plan': {
              exists: true,
            },
          },
        ],
      },
      limit: 1000,
    })

    // Get buildings
    const { docs: buildings } = await payload.find({
      collection: 'buildings',
      where: {
        or: [
          {
            'realpadBuilding.pdf': {
              exists: true,
            },
          },
          {
            'realpadBuilding.plan': {
              exists: true,
            },
          },
        ],
      },
      limit: 1000,
    })

    // Get projects
    const { docs: projects } = await payload.find({
      collection: 'projects',
      where: {
        or: [
          {
            'realpadProject.pdf': {
              exists: true,
            },
          },
          {
            'realpadProject.plan': {
              exists: true,
            },
          },
          {
            'realpadProject.standards': {
              exists: true,
            },
          },
        ],
      },
      limit: 1000,
    })

    // Add type information to each item
    const typedFlats = flats.map((flat) => ({ ...flat, _type: 'flat' }))
    const typedFloors = floors.map((floor) => ({ ...floor, _type: 'floor' }))
    const typedBuildings = buildings.map((building) => ({ ...building, _type: 'building' }))
    const typedProjects = projects.map((project) => ({ ...project, _type: 'project' }))

    allItems.push(...typedFlats, ...typedFloors, ...typedBuildings, ...typedProjects)

    console.log(
      `📋 Found ${flats.length} flats, ${floors.length} floors, ${buildings.length} buildings, ${projects.length} projects with PDF or plan IDs`,
    )

    for (const item of allItems) {
      const result = await processItemDocuments(payload, item)
      results.push(result)

      if (result.success) {
        totalDownloaded +=
          result.downloaded.length +
          result.downloadedPlans.length +
          result.downloadedStandards.length +
          result.downloadedPictures.length
      }
      totalErrors += result.errors.length
    }

    console.log(
      `✅ Document and plan download completed: ${totalDownloaded} downloaded, ${totalErrors} errors`,
    )

    return NextResponse.json({
      success: true,
      processed: allItems.length,
      downloaded: totalDownloaded,
      errors: totalErrors,
      results,
      timestamp: formatCzechDateTime(new Date()),
    })
  } catch (error) {
    console.error('❌ Document download error:', error)

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

// POST method for manual triggering
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
    const { flatId, projectId } = body

    if (flatId) {
      // Manual trigger for specific flat
      console.log(`🔄 Manual trigger for flat ID: ${flatId}`)

      const payload = await getPayload({ config })

      const flat = await payload.findByID({
        collection: 'flats',
        id: flatId,
      })

      if (!flat) {
        return NextResponse.json({ success: false, message: 'Flat not found' }, { status: 404 })
      }

      // Add type information
      const typedFlat = { ...flat, _type: 'flat' }

      // Process single flat
      const result = await processItemDocuments(payload, typedFlat)

      return NextResponse.json({
        success: result.success,
        flat: {
          id: flat.id,
          title: flat.title,
        },
        result,
        timestamp: formatCzechDateTime(new Date()),
      })
    }

    if (projectId) {
      // Manual trigger for specific project
      console.log(`🔄 Manual trigger for project ID: ${projectId}`)

      const payload = await getPayload({ config })

      // Get all items for the specific project from all collections
      const allItems: any[] = []

      // Get project
      const project = await payload.findByID({
        collection: 'projects',
        id: projectId,
      })

      if (project) {
        const typedProject = { ...project, _type: 'project' }
        allItems.push(typedProject)
      }

      // Get buildings for the project
      const { docs: buildings } = await payload.find({
        collection: 'buildings',
        where: {
          project: { equals: Number(projectId) },
        },
        limit: 1000,
      })

      // Get floors for the project
      const { docs: floors } = await payload.find({
        collection: 'floors',
        where: {
          project: { equals: Number(projectId) },
        },
        limit: 1000,
      })

      // Get flats for the project
      const { docs: flats } = await payload.find({
        collection: 'flats',
        where: {
          project: { equals: Number(projectId) },
        },
        limit: 1000,
      })

      // Add type information to each item
      const typedBuildings = buildings.map((building) => ({ ...building, _type: 'building' }))
      const typedFloors = floors.map((floor) => ({ ...floor, _type: 'floor' }))
      const typedFlats = flats.map((flat) => ({ ...flat, _type: 'flat' }))

      allItems.push(...typedBuildings, ...typedFloors, ...typedFlats)

      console.log(
        `📋 Found ${project ? 1 : 0} project, ${buildings.length} buildings, ${floors.length} floors, ${flats.length} flats for project ${projectId}`,
      )

      const results: DownloadResult[] = []
      let totalDownloaded = 0
      let totalErrors = 0

      for (const item of allItems) {
        const result = await processItemDocuments(payload, item)
        results.push(result)

        if (result.success) {
          totalDownloaded +=
            result.downloaded.length +
            result.downloadedPlans.length +
            result.downloadedStandards.length
        }
        totalErrors += result.errors.length
      }

      //all revalidate to frontend
      await revalidateFrontend({
        collection: 'flat',
        id: projectId,
        locale: 'cs',
        slug: project.slug || '',
        urlProject: project.frontendUrl || '',
      })

      await revalidateFrontend({
        collection: 'floor',
        id: projectId,
        locale: 'cs',
        slug: project.slug || '',
        urlProject: project.frontendUrl || '',
      })

      await revalidateFrontend({
        collection: 'building',
        id: projectId,
        locale: 'cs',
        slug: project.slug || '',
        urlProject: project.frontendUrl || '',
      })

      return NextResponse.json({
        success: true,
        projectId,
        results,
        summary: {
          totalProject: project ? 1 : 0,
          totalBuildings: buildings.length,
          totalFloors: floors.length,
          totalFlats: flats.length,
          totalItems: allItems.length,
          totalDownloaded,
          totalErrors,
        },
        timestamp: formatCzechDateTime(new Date()),
      })
    }

    // No specific flat or project - run all
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
