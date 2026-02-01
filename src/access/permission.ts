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
  return async ({ req }: AccessArgs<{ user: { role: Role }; payload: Headers }>) => {
    const user = req.user
    const userObject = user?.role as Role
    if (userObject?.id === 1) return true

    const headersAny = req.headers as any
    // Use the .get method for Headers objects, fallback to index signature for plain objects
    let apiKey: string | undefined

    // Simple approach using any type
    if (headersAny?.get && typeof headersAny.get === 'function') {
      apiKey = headersAny.get('x-api-key') ?? undefined
    } else {
      apiKey = headersAny?.['x-api-key']
    }
    if (apiKey === process.env.CMS_API_TOKEN) {
      return true
    }
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
