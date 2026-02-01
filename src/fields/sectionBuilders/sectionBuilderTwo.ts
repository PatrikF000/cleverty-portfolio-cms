import { Hero } from '@/blocks/Hero'
import { TextImage } from '@/blocks/TextImage'
import { Field } from 'payload'
import { Project, Role } from '@/payload-types'

export const SectionBuilderTwo: Field = {
  name: 'sectionBuilderTwo',
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
      return findProjectLevel === 'levelstoone_2'
    },
  },
  blocks: [Hero, TextImage], // přidej další bloky dle potřeby
}
