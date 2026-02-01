import { Block } from 'payload'
import sectionSettings from '@/fields/modulesField/sectionSettings'

export const FlatsSnippet: Block = {
  slug: 'flatsSnippets',
  fields: [
    sectionSettings({
      fieldName: 'flatsSet',
      includeHeading: true,
      includeButton: true,
    }),
    /*{
      type: 'tabs',
      tabs: [
        {
          label: 'Section Settings',
          fields: [
            sectionSettings({
              fieldName: 'flatsSet',
              includeHeading: true,
              includeButton: true,
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
