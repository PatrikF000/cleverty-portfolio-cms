import { Block } from 'payload'
import sectionSettings from '@/fields/modulesField/sectionSettings'
import { richTextFull } from '@/fields/modulesField/richText'

export const ImagesGrid: Block = {
  slug: 'imagesGrid',
  fields: [
    sectionSettings({ fieldName: 'imagesSettings' }),
    {
      type: 'select',
      name: 'layout',
      label: 'Layout Variant',
      required: true,
      defaultValue: 'withContent',
      options: [
        {
          label: 'Grid With Content',
          value: 'withContent',
        },
        {
          label: 'Only Row Images',
          value: 'onlyImages',
        },
      ],
    },
    {
      type: 'select',
      name: 'directionVariant',
      label: 'Direction Variant',
      defaultValue: 'default',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Reverse',
          value: 'reverse',
        },
      ],
      admin: {
        condition: (_, siblingData) => {
          if (!siblingData || typeof siblingData !== 'object') return false
          return siblingData?.layout === 'withContent'
        },
      },
    },
    richTextFull({
      name: 'gridContent',
      localized: true,
      overrides: {
        admin: {
          condition: (_, siblingData) => {
            if (!siblingData || typeof siblingData !== 'object') return false
            return siblingData?.layout === 'withContent'
          },
        },
      },
    }),
    {
      name: 'images',
      type: 'array',
      fields: [{ name: 'image', type: 'upload', relationTo: 'media' }],
      minRows: 3,
      maxRows: 3,
    },
  ],
}
