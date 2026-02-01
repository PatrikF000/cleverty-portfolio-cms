import { Role } from '@/payload-types'
import { FieldAccess } from 'payload'

export const authenticatedAdminField: FieldAccess = ({ req }) => {
  const { user } = req
  const userRole = user?.role as Role
  const isAdmin = userRole?.id === 1
  if (req.url?.includes('/api/graphql')) {
    return true // Return early to skip all filtering for GraphQL
  }
  return isAdmin
}
