import { Block } from 'payload'
import { richTextBasic } from '@/fields/modulesField/richText'
import sectionSettings from '@/fields/modulesField/sectionSettings'

export const Prices: Block = {
  slug: 'prices',
  fields: [
    sectionSettings({ fieldName: 'pricesSettings', includeHeading: true }),
    richTextBasic({
      name: 'bottomContent',
      required: true,
      localized: true,
    }),
    /*{
      type: 'tabs',
      tabs: [
        {
          label: 'Section Settings',
          fields: [sectionSettings({ fieldName: 'pricesSettings' })],
        },
        {
          label: 'Content',
          fields: [
            richTextBasic({
              name: 'bottomContent',
              required: true,
              localized: true,
            }),
          ],
        },
      ],
    },*/
  ],
}
