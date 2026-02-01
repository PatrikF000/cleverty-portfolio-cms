import { CollectionAfterDeleteHook } from 'payload'
import Cookies from 'js-cookie'
export const CollectionAfterDeleteProject: CollectionAfterDeleteHook = async ({}) => {
  Cookies.set('activeProject', '')
  Cookies.set('activeProjectName', '')
}
