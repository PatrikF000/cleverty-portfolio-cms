import { Access, AccessArgs } from 'payload'
import { Role } from '@/payload-types'
import { cookies } from 'next/headers'
//import { cookies } from 'next/headers'

/*
 * Metoda pro kontrolu, jestli uživatel má práva pro správu kolekce
 * Použití: Pages, Flats, Buildings
 * Popis:
 */

type Operation = 'create' | 'read' | 'update' | 'delete'
type CollectionPermissionKey = keyof Role['permissions']
export const hasPermission = (collection: string, operation: Operation): Access => {
  return async ({ req }: AccessArgs) => {
    // Check API key first (works for any user type)
    const headersAny = req.headers as any
    let apiKey: string | undefined
    if (headersAny?.get && typeof headersAny.get === 'function') {
      apiKey = headersAny.get('x-api-key') ?? undefined
    } else {
      apiKey = headersAny?.['x-api-key']
    }
    if (apiKey === process.env.CMS_API_TOKEN) {
      return true
    }

    // Only users (not fundAdministrators) have role-based permissions
    const user = req.user
    if (!user || user.collection !== 'users') return false
    const userObject = user.role as Role
    if (userObject?.id === 1) return true
    //const reqCookies = req?.context?.cookie
    //console.log('test', reqCookies)
    const headersCookies = await cookies()
    const activeProject = headersCookies.get('activeProject')
    if (!activeProject) return false

    // Načteme roli s jejím polem permissions
    const rolePermissions = userObject?.permissions //(user.role as any)?.permissions
    if (!rolePermissions) return false
    const key = collection as CollectionPermissionKey
    const perms = (rolePermissions?.[key] || []) as Operation[]
    //const perms = (rolePermissions?.[collection] as Operation[]) || []
    return perms?.includes(operation)
  }
}
