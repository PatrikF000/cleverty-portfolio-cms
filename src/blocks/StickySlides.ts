import { Block } from 'payload'
import { richTextFull } from '@/fields/modulesField/richText'
import sectionSettings from '@/fields/modulesField/sectionSettings'

export const StickySlides: Block = {
  slug: 'stickySlides',
  labels: {
    singular: 'Sticky Slides',
    plural: 'Sticky Slides',
  },
  fields: [
    sectionSettings({ fieldName: 'stickySet' }),
    {
      name: 'slides',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'slide',
          type: 'group',
          fields: [
            richTextFull({
              name: 'content',
              localized: true,
            }),
            {
              name: 'images',
              type: 'array',
              fields: [{ name: 'image', type: 'upload', relationTo: 'media' }],
              minRows: 1,
              maxRows: 4,
            },
          ],
        },
      ],
    },
  ],
}
