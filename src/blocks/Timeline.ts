import { Block } from 'payload'
import { richTextBodyOnly, richTextFull } from '@/fields/modulesField/richText'
import sectionSettings from '@/fields/modulesField/sectionSettings'

export const Timeline: Block = {
  slug: 'timeline',
  fields: [
    sectionSettings({
      fieldName: 'timelineSettings',
      includeHeading: true,
      backgroundThemeVariants: ['light'],
      defaultBackgroundTheme: 'light',
    }),
    richTextFull({
      name: 'rightContent',
      label: 'Right Content',
      localized: true,
    }),
    {
      name: 'timeline',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        richTextBodyOnly({
          name: 'descfull',
          localized: true,
        }),
        /*richTextBodyOnly({
          name: 'description',
          localized: true,
        }),*/
      ],
    },
  ],
}
