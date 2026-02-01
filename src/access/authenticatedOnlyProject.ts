import { Project, Role } from '@/payload-types'
import { Access, User } from 'payload'

export const authenticatedOnlyProject: Access = ({ req: { user } }) => {
  const currentUser = user as User
  if (!user || user.collection !== 'users') {
    return true
  }
  const role = currentUser?.role as Role
  const allowProjectRole = role?.allowProject as Project[]
  const allowProject = currentUser?.allowProject as Project[]
  const testAllowedProjects = [...allowProject, ...allowProjectRole]?.map((item) => {
    return item?.id
  })
  if (currentUser?.role?.id === 1) return true

  if (testAllowedProjects?.length !== 0)
    return {
      id: {
        in: testAllowedProjects,
      },
    }
  return false
}
