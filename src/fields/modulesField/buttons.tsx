import { Block } from 'payload'
import { link } from './link'

export const Buttons: Block = {
  slug: 'buttons',
  labels: {
    singular: 'Buttons',
    plural: 'Buttons',
  },
  fields: [
    {
      name: 'buttons',
      type: 'array',
      localized: true,
      fields: [
        link({
          // appearances: false,
        }),
      ],
    },
  ],
}
