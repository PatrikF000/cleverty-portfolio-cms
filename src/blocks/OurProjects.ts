import { Block } from 'payload'
import sectionSettings from '@/fields/modulesField/sectionSettings'

export const OurProjects: Block = {
  slug: 'ourProjects',
  fields: [
    sectionSettings({ fieldName: 'ourProjSet', includeHeading: true }),
    {
      name: 'projects',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
