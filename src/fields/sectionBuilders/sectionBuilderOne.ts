import { Hero } from '@/blocks/Hero'
import { Field } from 'payload'
import { TableCustom } from '../../blocks/TableCustom'
import { Project, Role } from '@/payload-types'
import { DrawEditor } from '../../blocks/DrawEditor'

export const SectionBuilderOne: Field = {
  name: 'sectionBuilder',
  label: 'Section builder',
  type: 'blocks',
  required: false,
  localized: true,
  admin: {
    condition: (data, siblingData, { user }) => {
      const allowProject = user?.allowProject || []
      const role = user?.role as Role
      const roleAllowProject = role?.allowProject || []
      const activeProject = data?.project
      const arrayOfProjectsByRolesAndUsers = [...allowProject, ...roleAllowProject]
      const onlyChildByID = arrayOfProjectsByRolesAndUsers.filter((item, index, arr) => {
        if (!item || typeof item !== 'object') return false
        const project = item as Project
        if (!project?.id) return false
        return (
          arr.findIndex((el) => {
            if (!el || typeof el !== 'object') return false
            const elProject = el as Project
            return elProject?.id === project?.id
          }) === index
        )
      })
      const find = onlyChildByID?.find((find) => {
        if (!find || typeof find !== 'object') return false
        const project = find as Project
        return project?.id === activeProject
      })

      if (!find) {
        return false
      }

      const findProject = find as Project
      const findProjectLevel = findProject?.levelStoone
      return findProjectLevel === 'levelstoone_1'
    },
  },
  blocks: [Hero, /*TextImage,*/ TableCustom, DrawEditor], // přidej další bloky dle potřeby
}
