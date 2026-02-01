import { Block, Field } from 'payload'

// Reusable field function for animated heading
export const animatedHeadingField = (
  options: {
    name?: string
    label?: string
    required?: boolean
    localized?: boolean
    setHeadingType?: boolean
  } = {},
): Field => ({
  name: options.name || 'heading',
  type: 'group',
  label: options.label || 'Animated Heading',
  ...(options.setHeadingType && {
    fields: [
      {
        name: 'headingType',
        type: 'select',
        label: 'Heading Type',
        defaultValue: 'h1',
        required: true,
        options: [
          { value: 'h1', label: 'H1' },
          { value: 'h2', label: 'H2' },
          { value: 'h3', label: 'H3' },
          { value: 'h4', label: 'H4' },
          { value: 'h5', label: 'H5' },
          { value: 'h6', label: 'H6' },
          { value: 'heroTitle', label: 'Hero Title' },
        ],
      },
    ],
  }),
  fields: [
    {
      name: 'lines',
      type: 'array',
      label: 'Heading Lines',
      required: options.required !== false,
      localized: options.localized || false,
      defaultValue: [{ text: 'Line 1' }],
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Line Text',
          required: true,
        },
      ],
    },
  ],
})

// Block version for standalone use
export const AnimatedHeading: Block = {
  slug: 'animatedHeading',
  labels: {
    singular: 'Animated Heading',
    plural: 'Animated Heading',
  },
  fields: [
    {
      name: 'lines',
      type: 'array',
      label: 'Heading Lines',
      required: true,
      localized: true,
      defaultValue: [{ text: 'Line 1' }],
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Line Text',
          required: true,
        },
      ],
    },
    {
      name: 'headingType',
      type: 'select',
      label: 'Heading Type',
      defaultValue: 'h1',
      required: true,
      options: [
        { value: 'h1', label: 'H1' },
        { value: 'h2', label: 'H2' },
        { value: 'h3', label: 'H3' },
        { value: 'h4', label: 'H4' },
        { value: 'h5', label: 'H5' },
        { value: 'h6', label: 'H6' },
        { value: 'heroTitle', label: 'Hero Title' },
      ],
    },
  ],
}
