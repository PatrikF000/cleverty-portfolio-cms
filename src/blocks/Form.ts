import { Block } from 'payload'
import sectionSettings from '@/fields/modulesField/sectionSettings'
import { richTextBasic, richTextFull } from '@/fields/modulesField/richText'

export const Form: Block = {
  slug: 'form',
  fields: [
    sectionSettings({
      fieldName: 'formSettings',
      backgroundThemeVariants: ['dark', 'light'],
      defaultBackgroundTheme: 'light',
    }),
    richTextFull({
      name: 'formContent',
      required: true,
      localized: true,
    }),
    {
      name: 'layoutVariant',
      type: 'select',
      options: ['withContent', 'onlyForm', 'withGallery'],
      defaultValue: 'onlyForm',
      required: true,
    },
    {
      name: 'formPosition',
      label: 'Form Position',
      type: 'select',
      localized: true,
      options: ['left', 'right'],
      required: true,
      admin: {
        condition: (_, siblingData) => {
          if (!siblingData || typeof siblingData !== 'object') return false
          return (
            siblingData?.layoutVariant === 'withContent' ||
            siblingData?.layoutVariant === 'withGallery'
          )
        },
      },
    },
    richTextBasic({
      name: 'layoutContent',
      required: true,
      localized: true,
      overrides: {
        admin: {
          condition: (_, siblingData) => {
            if (!siblingData || typeof siblingData !== 'object') return false
            return siblingData?.layoutVariant === 'withContent'
          },
        },
      },
    }),
    {
      name: 'slideOutBoxes',
      label: 'Slide Out Boxes',
      type: 'array',
      minRows: 2,
      maxRows: 4,
      fields: [
        {
          type: 'group',
          name: 'column',
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'image2', type: 'upload', relationTo: 'media' },
          ],
        },
      ],
      // { name: 'image', type: 'upload', relationTo: 'media' }],
      admin: {
        condition: (_, siblingData) => {
          if (!siblingData || typeof siblingData !== 'object') return false
          return siblingData?.layoutVariant === 'withGallery'
        },
      },
    },
  ],
}
