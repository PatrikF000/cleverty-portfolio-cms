import { Block, Field } from 'payload'

// Reusable field function for lead paragraph
export const leadParagraphField = (
  options: {
    name?: string
    label?: string
    required?: boolean
    localized?: boolean
  } = {},
): Field => ({
  name: options.name || 'leadParagraph',
  type: 'textarea',
  label: options.label || 'Lead Paragraph',
  required: options.required !== false,
  localized: options.localized !== false,
})

// Block version for use in BlocksFeature
export const LeadParagraph: Block = {
  slug: 'leadParagraph',
  labels: {
    singular: 'Lead Paragraph',
    plural: 'Lead Paragraphs',
  },
  fields: [
    {
      name: 'text',
      type: 'textarea',
      label: 'Text',
      required: true,
      localized: true,
    },
  ],
}
