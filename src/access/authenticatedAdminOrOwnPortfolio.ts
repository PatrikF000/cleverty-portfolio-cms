import { Access, User } from 'payload'

/**
 * Access control for portfolios:
 * - Admins can see all portfolios
 * - Users can only see their own portfolios
 */
export const authenticatedAdminOrOwnPortfolio: Access = ({ req: { user } }) => {
  const currentUser = user as User
  if (currentUser) {
    // Admins can see all portfolios
    if (currentUser?.role?.id === 1) {
      return true
    }

    // Regular users can only see portfolios where they are the owner
    return {
      user: {
        equals: user?.id,
      },
    }
  }

  return false
}

/**
 * Access control for creating portfolios:
 * - Admins can create portfolios for any user
 * - Users can only create portfolios for themselves
 */
export const authenticatedAdminOrOwnPortfolioCreate: Access = ({ req: { user }, data }) => {
  const currentUser = user as User
  if (currentUser) {
    // Admins can create portfolios for any user
    if (currentUser?.role?.id === 1) {
      return true
    }

    // Regular users can only create portfolios for themselves
    // Ensure the user field matches the current user
    if (data?.user === currentUser.id || data?.user?.id === currentUser.id) {
      return true
    }

    // If no user is specified, auto-assign to current user
    if (!data?.user) {
      return true
    }
  }

  return false
}

/**
 * Access control for updating/deleting portfolios:
 * - Admins can update/delete any portfolio
 * - Users can only update/delete their own portfolios
 */
export const authenticatedAdminOrOwnPortfolioUpdate: Access = async ({ req: { user, payload }, id }) => {
  const currentUser = user as User
  if (currentUser) {
    // Admins can update/delete any portfolio
    if (currentUser?.role?.id === 1) {
      return true
    }

    // For regular users, check if the portfolio belongs to them
    if (id && payload) {
      try {
        const portfolio = await payload.findByID({
          collection: 'portfolios',
          id: typeof id === 'string' ? id : String(id),
        })
        
        if (portfolio && portfolio.user) {
          const userId = typeof portfolio.user === 'object' ? portfolio.user.id : portfolio.user
          return userId === currentUser.id
        }
      } catch (error) {
        // If portfolio doesn't exist or error occurs, deny access
        return false
      }
    }

    // Fallback: filter by user
    return {
      user: {
        equals: user?.id,
      },
    }
  }

  return false
}
