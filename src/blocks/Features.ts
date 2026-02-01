import { Block } from 'payload'
import { richTextFull } from '@/fields/modulesField/richText'
import sectionSettings from '@/fields/modulesField/sectionSettings'
import feature from '@/fields/modulesField/feature'

export const Features: Block = {
  slug: 'features',
  fields: [
    sectionSettings({
      fieldName: 'featuresSettings',
      includeHeading: true,
      includeButton: true,
      backgroundThemeVariants: ['dark', 'light'],
    }),
    richTextFull({
      name: 'content',
      localized: true,
    }),
    {
      type: 'select',
      name: 'featuresVariant',
      label: 'Variant',
      required: true,
      options: [
        { value: 'uppercase', label: 'Uppercase ' },
        { value: 'withImage', label: 'With Image' },
        { value: 'withTitle', label: 'With Title (for ESG)' },
      ],
      defaultValue: 'uppercase',
    },
    {
      type: 'array',
      name: 'featuresWithTitle',
      label: 'Features',
      fields: [
        feature({
          showTitle: true,
        }),
      ],
      admin: {
        condition: (_, siblingData) => {
          if (!siblingData || typeof siblingData !== 'object') return false
          return siblingData?.featuresVariant === 'withTitle'
        },
      },
    },
    {
      name: 'featuresWithImage',
      type: 'array',
      label: 'Features',
      fields: [
        feature({
          showTitle: false,
          showImage: true,
        }),
      ],
      admin: {
        condition: (_, siblingData) => {
          if (!siblingData || typeof siblingData !== 'object') return false
          return siblingData?.featuresVariant === 'withImage'
        },
      },
    },
    {
      type: 'array',
      name: 'featuresUppercase',
      label: 'Features',
      fields: [
        feature({
          showTitle: false,
          showImage: false,
        }),
      ],
      admin: {
        condition: (_, siblingData) => {
          if (!siblingData || typeof siblingData !== 'object') return true
          return siblingData?.featuresVariant === 'uppercase'
        },
      },
    },
  ],
}
