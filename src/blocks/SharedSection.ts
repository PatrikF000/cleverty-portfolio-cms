import { Block } from 'payload'

export const SharedSection: Block = {
  slug: 'sharedSection',
  fields: [
    {
      name: 'sharedSection',
      type: 'relationship',
      relationTo: 'share',
      required: true,
    },
  ],
}
