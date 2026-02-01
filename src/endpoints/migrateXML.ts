import { PayloadRequest } from 'payload'
import { NextResponse } from 'next/server'
import { Readable } from 'stream'
import xmlFlow from 'xml-flow'

// Pomocná funkce pro převod prázdných hodnot na null
function emptyToNull(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(emptyToNull)
  } else if (obj && typeof obj === 'object') {
    // Pokud objekt obsahuje _attr, sloučím jeho klíče do hlavního objektu
    if (obj._attr && typeof obj._attr === 'object') {
      for (const attrKey in obj._attr) {
        if (!Object.prototype.hasOwnProperty.call(obj, attrKey)) continue
        obj[attrKey] = obj._attr[attrKey]
      }
      delete obj._attr
    }
    const result: any = {}
    for (const key in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, key)) continue
      const value = obj[key]
      if (typeof value === 'string') {
        result[key] = value.trim() === '' ? null : value
      } else if (value === undefined) {
        result[key] = null
      } else {
        result[key] = emptyToNull(value)
      }
    }
    return result
  }
  return obj
}

export const downloadXMLAndParseJSON = async (req: PayloadRequest): Promise<any> => {
  const projectID = req?.data?.projectID
  console.log('TEST API', projectID)
  if (!projectID) {
    return NextResponse.json({ error: 'Není vybrán projekt' }, { status: 500 })
  }
  const BATCH_SIZE = 1
  let buildingsBatch: any[] = []
  let imported = 0
  const errors: any[] = []

  const baseUrl = `${process.env.REALPAD_API_URL}/v10/get-project`

  try {
    const login = process.env.REALPAD_LOGIN || ''
    const password = process.env.REALPAD_PW || ''
    const screenid = process.env.REALPAD_SCREENID || ''
    const developerid = process.env.REALPAD_DEVELOPERID || ''
    const projectid = process.env.TEST_PROJECT_ID || ''

    const params = new URLSearchParams({
      login,
      password,
      screenid,
      developerid,
      projectid: projectid.toString(),
    })

    const urlWithParams = `${baseUrl}?${params.toString()}`
    const response = await fetch(urlWithParams, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    // Převod na Node.js stream
    // @ts-ignore
    const nodeStream = Readable.fromWeb(response.body)
    // Parsuj XML po částech
    const xmlStream = xmlFlow(nodeStream)
    // Výsledky budeme ukládat do pole (POZOR: pro velké XML použij dávkové zpracování!)
    // const projects: any[] = [] // Toto pole je nyní zastaralé

    // Vracíme Promise, která se vyřeší po dokončení streamu
    return new Promise<NextResponse>((resolve, reject) => {
      xmlStream.on('tag:building', async (building: Record<string, any>) => {
        const normalized = emptyToNull(building)
        buildingsBatch.push(normalized)
        //console.log(batch)
        console.log('batch', buildingsBatch.length, normalized?.$name)
        if (buildingsBatch.length >= BATCH_SIZE) {
          nodeStream.pause()
          try {
            // Zde zpracuj dávku (např. ulož do DB nebo Payload CMS)
            // await saveBatchToDB(batch);
            imported += buildingsBatch.length
            buildingsBatch = []
          } catch (err: any) {
            errors.push({ buildingsBatch, error: err?.message })
          }
          nodeStream.resume()
        }
      })

      xmlStream.on('end', async () => {
        if (buildingsBatch.length > 0) {
          try {
            // await saveBatchToDB(batch);
            imported += buildingsBatch.length
          } catch (err: any) {
            errors.push({ buildingsBatch, error: err?.message })
          }
        }
        // Nelze znovu číst response.body, protože stream už byl spotřebován
        // Vracíme pouze imported a errors
        resolve(NextResponse.json({ imported, errors }))
      })

      xmlStream.on('error', (err: any) => {
        reject(NextResponse.json({ error: err.message }, { status: 500 }))
      })
    })
  } catch (error) {
    console.error('Chyba při migraci:', error)
    return NextResponse.json({ error: 'Migrace selhala' }, { status: 500 })
  }
}
