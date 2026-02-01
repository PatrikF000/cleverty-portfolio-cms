import { Block } from 'payload'

export const VisualPriceList: Block = {
  slug: 'visualPriceList',
  fields: [
    {
      name: 'buildings',
      label: 'Buildings',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'building',
          type: 'relationship',
          relationTo: 'buildings',
        },
      ],
    },
  ],
}
