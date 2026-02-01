import { Block } from 'payload'

export const InteractivePickerExtended: Block = {
  slug: 'interactivePickerExtended',
  labels: {
    singular: 'Interactive picker rozšířený',
    plural: 'Interactive picker rozšířený',
  },
  fields: [
    {
      type: 'array',
      name: 'views',
      label: 'Pohledy',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          type: 'text',
          name: 'viewName',
          label: 'Název pohledu',
          required: true,
        },
        {
          type: 'upload',
          name: 'image',
          label: 'Obrázek pro tento pohled',
          relationTo: 'media',
          filterOptions: {
            mimeType: { contains: 'image' },
          },
        },
        {
          name: 'direct',
          label: 'Směr pohledu',
          type: 'select',
          defaultValue: 'south',
          required: false,
          options: [
            {
              label: 'Jih',
              value: 'south',
            },
            {
              label: 'Sever',
              value: 'north',
            },
            {
              label: 'Východ',
              value: 'east',
            },
            {
              label: 'Západ',
              value: 'west',
            },
            {
              label: 'SeveroZápad',
              value: 'northwest',
            },
            {
              label: 'Severovýchod',
              value: 'northeast',
            },
            {
              label: 'Jihovýchod',
              value: 'southeast',
            },
            {
              label: 'Jihozápad',
              value: 'southwest',
            },
          ],
        },
      ],
    },
    {
      type: 'ui',
      name: 'picker',
      admin: {
        components: {
          Field: './components/payload/drawEditorInteractiveExtended/DrawEditorInteractiveExtended',
        },
        custom: {
          addCustomLabel: true,
        },
      },
    },
    {
      type: 'json',
      name: 'pickerValue',
      label: 'PickerValue (rozšířený s pohledy)',
    },
  ],
}
