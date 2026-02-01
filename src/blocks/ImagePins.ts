import { Block } from 'payload'
import { richTextBodyOnly } from '@/fields/modulesField/richText'
import sectionSettings from '@/fields/modulesField/sectionSettings'

export const ImagePins: Block = {
  slug: 'imagePins',
  fields: [
    sectionSettings({ fieldName: 'imagePinsSet', includeHeading: true, includeButton: true }),
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'pinsVariant',
      type: 'select',
      options: ['default', 'contentBox'],
      defaultValue: 'default',
    },
    {
      name: 'pins',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'withlogo',
          label: 'With Logo',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            condition: (_, siblingData) => {
              if (!siblingData || typeof siblingData !== 'object') return false
              return siblingData?.highlighted === false
            },
          },
        },
        {
          name: 'highlighted',
          label: 'Highlighted',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            condition: (_, siblingData) => {
              if (!siblingData || typeof siblingData !== 'object') return false
              return siblingData?.withlogo === false
            },
          },
        },
        {
          name: 'reverseLayout',
          label: 'Reverse Layout',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Reverse layout of the pins only for content box variant',
          },
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: false,
          admin: {
            condition: (_, siblingData) => {
              if (!siblingData || typeof siblingData !== 'object') return false
              return siblingData?.withlogo === true
            },
          },
        },
        {
          type: 'row',
          fields: [
            richTextBodyOnly({
              name: 'markerLabel',
              localized: true,
              required: false,
              overrides: {
                admin: {
                  condition: (_, siblingData) => {
                    if (!siblingData || typeof siblingData !== 'object') return true
                    return siblingData?.withlogo === false
                  },
                },
              },
            }),
            {
              name: 'pinPosition',
              type: 'select',
              options: [
                { label: 'Left Down ', value: 'left-down' },
                { label: 'Left Up', value: 'left-up' },
                { label: 'Right Down', value: 'right-down' },
                { label: 'Right Up', value: 'right-up' },
              ],
              admin: {
                description: 'Position of the marker',
                width: '50%',
                condition: (_, siblingData) => {
                  if (!siblingData || typeof siblingData !== 'object') return false
                  return siblingData?.withlogo === false
                },
              },
            },
          ],
        },

        {
          type: 'row',
          fields: [
            {
              name: 'x',
              type: 'number',
              required: false,
              admin: {
                description: 'Hodnota 0-100%',
                width: '50%',
              },
            },
            {
              name: 'x-mobile',
              type: 'number',
              admin: {
                description: 'Hodnota 0-100%',
                width: '50%',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'y',
              type: 'number',
              required: false,
              admin: {
                description: 'Hodnota 0-100%',
                width: '50%',
              },
            },
            {
              name: 'y-mobile',
              type: 'number',
              admin: {
                description: 'Hodnota 0-100%',
                width: '50%',
              },
            },
          ],
        },
      ],
    },
  ],
}
