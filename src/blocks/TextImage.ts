import { Block } from 'payload'

export const TextImage: Block = {
  slug: 'textImage',
  fields: [
    {
      name: 'text',
      type: 'richText',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'imagePosition',
      type: 'select',
      options: ['left', 'right'],
      defaultValue: 'right',
    },
  ],
}
