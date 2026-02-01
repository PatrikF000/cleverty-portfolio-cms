import { cookies } from 'next/headers'
import { PayloadRequest } from 'payload'

export const projectBasedAccess = async (req: PayloadRequest) => {
  // Payload CMS req.headers je objekt, ne Request API
  const headersCookies = await cookies()
  const activeProjectId = headersCookies.get('activeProject')
  if (!activeProjectId) return false
  return activeProjectId.value
}
