import type { AccessArgs } from 'payload'

import type { User } from '@/payload-types'

type isAuthenticated = (args: AccessArgs<User>) => boolean

export const authenticated: isAuthenticated = ({ req: { user, headers } }) => {
  // Safe headers access to avoid undici private member issues
  try {
    // Cast headers to any to bypass TypeScript private member restrictions
    const headersAny = headers as any

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
    } else {
      return Boolean(user)
    }
  } catch (error) {
    // Fallback to user check if headers access fails
    console.warn('Headers access failed, falling back to user check:', error)
    return Boolean(user)
  }
}
