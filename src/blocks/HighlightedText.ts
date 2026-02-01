import { Block } from 'payload'
import { link } from '@/fields/modulesField/link'
import { richTextFull } from '@/fields/modulesField/richText'
import sectionSettings from '@/fields/modulesField/sectionSettings'

export const HighlightedText: Block = {
  slug: 'highlightedText',
  fields: [
    sectionSettings({ fieldName: 'highSet' }),
    {
      name: 'narrowContainer',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'wideContentArea',
      type: 'checkbox',
      defaultValue: false,
    },
    richTextFull({
      name: 'title',
      localized: true,
    }),
    {
      name: 'highlightedText',
      type: 'text',
      localized: true,
    },
    {
      name: 'textSize',
      type: 'select',
      options: ['large', 'medium', 'body'],
      defaultValue: 'large',
    },
    {
      name: 'buttons',
      type: 'array',
      localized: true,
      fields: [
        link({
          name: 'button',
          icon: true,
        }),
      ],
    },
  ],
}
