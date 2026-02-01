import { Project } from '@/payload-types'
import { cookies } from 'next/headers'
import { FieldAccess } from 'payload'

export const authenticatedByLevelProjectField: FieldAccess = async ({
  req,
  /*doc,
  data,
  blockData,*/
}) => {
  const { user } = req
  const allowProject = user?.allowProject
  const headersCookies = await cookies()
  const activeProject = headersCookies.get('activeProject')
  const find = allowProject?.find((find) => {
    const project = find as Project
    const id = project?.id || 0
    return id === parseInt(activeProject?.value || '')
  })
  const findProject = find as Project
  const findProjectLevel = findProject?.levelStoone
  console.log('Project level:', findProjectLevel)
  // udělat 4 section buildery, které jsou vázané na level stoone
  return true
}
