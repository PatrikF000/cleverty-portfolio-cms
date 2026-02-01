import { Role } from '@/payload-types'
import { cookies } from 'next/headers'
import { Access, CollectionSlug } from 'payload'

/*
 * Metoda pro kontrolu, jestli uživatel je admin a zároveň, jestli existují záznamy v dané kolekci
 * Použití: globalheader, globalfooter, globalsettings
 * Popis: U každého projektu je žádané, aby existoval jenom jeden záznam v mutaci, na webu přece neexistuje více hlaviček nebo patiček
 *
 */

export const checkRelationUniqueAccess =
  (targetCollection: CollectionSlug, relationField: string): Access =>
  async ({ req }) => {
    const user = req.user
    const userRole = user?.role as Role
    const headersCookies = await cookies()
    const activeProject = headersCookies.get('activeProject')
    const existing = await req.payload.find({
      collection: targetCollection,
      where: {
        [relationField]: {
          equals: activeProject?.value || '',
        },
      },
    })

    const alreadyExists = existing.totalDocs > 0

    return !alreadyExists && userRole?.id === 1
  }
