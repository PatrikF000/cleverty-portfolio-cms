import { Block } from 'payload'
import sectionSettings from '@/fields/modulesField/sectionSettings'

export const MultiGridGallery: Block = {
  slug: 'multiGallery',
  fields: [
    sectionSettings({
      fieldName: 'multiGSet',
      backgroundThemeVariants: ['light'],
      defaultBackgroundTheme: 'light',
    }),
    {
      name: 'gridItems',
      label: {
        singular: 'Grid Item',
        plural: 'Grid Items',
      },
      type: 'array',
      fields: [
        { name: 'tabTitle', type: 'text' },
        {
          name: 'layoutVariant',
          type: 'select',
          options: ['complex', 'simple'],
          defaultValue: 'complex',
        },

        {
          name: 'complex',
          label: 'Complex Blocks Grid',
          type: 'array',
          fields: [
            // {
            //   name: 'row',
            //   type: 'group',
            //   fields: [
            {
              name: 'layout',
              type: 'select',
              options: [
                {
                  label: 'A - 4 images (two large, two small)',
                  value: 'a',
                },
                {
                  label: 'B - 4 images (two small, one large, one tall)',
                  value: 'b',
                },
                {
                  label: 'C - 2 images',
                  value: 'c',
                },
              ],
              defaultValue: 'a',
            },
            {
              name: 'imageOne',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'imageTwo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'imageThree',
              type: 'upload',
              relationTo: 'media',
              admin: {
                condition: (_: any, siblingData: any) => {
                  if (!siblingData || typeof siblingData !== 'object') return false
                  return siblingData?.layout === 'a' || siblingData?.layout === 'b'
                },
              },
            },
            {
              name: 'imageFour',
              type: 'upload',
              relationTo: 'media',
              admin: {
                condition: (_: any, siblingData: any) => {
                  if (!siblingData || typeof siblingData !== 'object') return false
                  return siblingData?.layout === 'a' || siblingData?.layout === 'b'
                },
              },
            },
            //   ],
            // },
          ],
          admin: {
            condition: (_: any, siblingData: any) => {
              if (!siblingData || typeof siblingData !== 'object') return false
              return siblingData?.layoutVariant === 'complex'
            },
          },
        },

        {
          name: 'simpleGrid',
          label: 'Simple Blocks Grid',
          type: 'array',
          fields: [
            {
              name: 'leftCol',
              type: 'array',
              minRows: 3,
              maxRows: 3,
              fields: [{ name: 'image', type: 'upload', relationTo: 'media' }],
              admin: {
                style: {
                  width: '50%',
                },
              },
            },
            {
              name: 'rightCol',
              type: 'array',
              minRows: 2,
              maxRows: 2,
              fields: [{ name: 'image', type: 'upload', relationTo: 'media' }],
              admin: {
                style: {
                  width: '50%',
                },
              },
            },
          ],
          admin: {
            condition: (_: any, siblingData: any) => {
              if (!siblingData || typeof siblingData !== 'object') return false
              return siblingData?.layoutVariant === 'simple'
            },
          },
        },
      ],
    },
  ],
}
