import { Access, User } from 'payload'

export const authenticatedAdminOrSelf: Access = ({ req: { user } }) => {
  const currentUser = user as User
  if (currentUser) {
    if (currentUser?.role?.id === 1) {
      return true
    }

    return {
      id: {
        equals: user?.id,
      },
    }
  }

  return false
}
