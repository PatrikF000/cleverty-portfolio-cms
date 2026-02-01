import { Block } from 'payload'

export const DrawEditor: Block = {
  slug: 'drawEditor',
  labels: {
    singular: 'Draw editor',
    plural: 'Draw editor',
  },
  fields: [
    {
      type: 'upload',
      name: 'imagePicker',
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
    {
      type: 'ui',
      name: 'picker',
      admin: {
        components: {
          Field: '/components/payload/drawEditor/DrawEditor',
        },
      },
    },
    {
      type: 'json',
      name: 'pickerValue',
      label: 'PickerValue',
    },
  ],
}
