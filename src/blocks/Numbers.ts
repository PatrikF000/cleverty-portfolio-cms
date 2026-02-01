import { Block } from 'payload'
import { richTextBodyOnly } from '@/fields/modulesField/richText'
import sectionSettings from '@/fields/modulesField/sectionSettings'

export const Numbers: Block = {
  slug: 'numbers',
  fields: [
    sectionSettings({ fieldName: 'numbersSettings' }),
    {
      name: 'numbers',
      type: 'array',
      fields: [
        {
          name: 'number',
          type: 'number',
          required: true,
        },
        richTextBodyOnly({
          name: 'description',
          required: true,
          localized: true,
        }),
      ],
    },
    /*{
      type: 'tabs',
      tabs: [
        {
          label: 'Section Settings',
          fields: [sectionSettings({ fieldName: 'numbersSettings' })],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'numbers',
              type: 'array',
              fields: [
                {
                  name: 'number',
                  type: 'number',
                  required: true,
                },
                richTextBodyOnly({
                  name: 'description',
                  required: true,
                  localized: true,
                }),
              ],
            },
          ],
        },
      ],
    },*/
  ],
}
