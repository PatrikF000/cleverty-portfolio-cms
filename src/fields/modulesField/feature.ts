import { Field } from 'payload'
import iconPicker from './iconPicker'
import { richTextBasic, richTextMinimal } from './richText'

const feature = (
  options: {
    name?: string
    label?: string
    showTitle?: boolean
    showImage?: boolean
  } = {},
): Field => {
  const { name = 'feature', label = 'Feature', showTitle = true, showImage = false } = options

  return {
    type: 'group',
    name,
    label,
    fields: [
      ...(showImage
        ? [
            {
              name: 'image',
              type: 'upload' as const,
              relationTo: 'media' as const,
              required: true,
            },
          ]
        : [
            iconPicker({
              required: true,
            }),
          ]),

      ...(showTitle
        ? [
            richTextBasic({
              name: 'titleContent',
              localized: true,
            }),
          ]
        : []),

      richTextMinimal({
        name: 'description',
        required: true,
      }),
      {
        name: 'bg',
        label: 'Icon Background on Hover',
        type: 'select',
        options: ['none', 'cream', 'jungle', 'mindaro'],
        defaultValue: 'cream',
        admin: {
          condition: (_, siblingData) => {
            if (!siblingData || typeof siblingData !== 'object') return false
            return siblingData?.featuresVariant === 'uppercase'
          },
        },
      },
    ],
  }
}

export default feature
