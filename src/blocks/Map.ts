import { Block } from 'payload'
import sectionSettings from '@/fields/modulesField/sectionSettings'
import iconPicker from '@/fields/modulesField/iconPicker'
import { richTextBodyOnly } from '@/fields/modulesField/richText'

export const Map: Block = {
  slug: 'map',
  fields: [
    sectionSettings({ fieldName: 'mapSettings' }),
    {
      name: 'map',
      type: 'upload',
      relationTo: 'media',
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
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: false,
          admin: {
            condition: (_: any, siblingData: any) => {
              if (!siblingData || typeof siblingData !== 'object') return false
              return siblingData?.withlogo === true
            },
          },
        },
        {
          type: 'row',
          fields: [
            iconPicker({
              name: 'icon',
              required: false,
              overrides: {
                admin: {
                  condition: (_: any, siblingData: any) => {
                    if (!siblingData || typeof siblingData !== 'object') return false
                    return siblingData?.withlogo === false
                  },
                },
              },
            }),
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
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'position',
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
            {
              name: 'color',
              type: 'select',
              options: ['light', 'dark', 'yellow', 'green'],
              admin: {
                description: 'Color of the marker',
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
        {
          name: 'link',
          type: 'text',
          label: 'Link',
          required: false,
          localized: true,
        },
      ],
    },
  ],
}
