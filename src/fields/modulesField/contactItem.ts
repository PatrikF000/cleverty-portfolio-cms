import type { ArrayField, Field } from 'payload'
import { richTextBasic } from './richText'

export const contactItem = (
  options: {
    name?: string
    label?: string
    required?: boolean
  } = {},
): Field => {
  const { name = 'contactItem', label = 'Contact Item' } = options

  return {
    name,
    label,
    type: 'group',
    fields: [
      {
        name: 'title',
        type: 'text',
        label: 'Title',
        required: true,
      },
      richTextBasic({
        name: 'content',
        label: 'Content',
        required: true,
      }),
    ],
  }
}

// Array field for multiple contact items
export const contactItems = (
  options: {
    name?: string
    label?: string
    required?: boolean
    minRows?: number
    maxRows?: number
  } = {},
  overrides: Partial<ArrayField> = {},
): Field => {
  const {
    name = 'contactItems',
    label = 'Contact Items',
    required = false,
    minRows = 1,
    maxRows,
  } = options

  return {
    name,
    label,
    type: 'array',
    required,
    minRows,
    ...(maxRows && { maxRows }),
    fields: [
      contactItem({
        name: 'item',
        label: 'Contact Item',
        required: true,
      }),
    ],
    ...overrides,
  }
}
