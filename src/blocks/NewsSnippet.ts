import { Block } from 'payload'
import sectionSettings from '@/fields/modulesField/sectionSettings'

export const NewsSnippet: Block = {
  slug: 'newsSnippets',
  fields: [
    sectionSettings({
      fieldName: 'newsSet',
      includeHeading: true,
      includeButton: true,
      backgroundThemeVariants: ['dark', 'light'],
    }),
    /*{
      type: 'tabs',
      tabs: [
        {
          label: 'Section Settings',
          fields: [
            sectionSettings({
              fieldName: 'newsSet',
              includeHeading: true,
              includeButton: true,
              backgroundThemeVariants: ['dark', 'light'],
            }),
          ],
        },
        // {
        //   label: 'Content',
        //   fields: [],
        // },
      ],
    },*/
  ],
}
