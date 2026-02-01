import type { Field } from 'payload'

export const toastConfig: Field = {
  name: 'toast',
  type: 'group',
  label: 'Toast Messages',
  admin: {
    style: {
      display: 'row',

      gap: '1rem',
    },
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'success',
          type: 'group',
          label: 'Success Toast',
          admin: {
            style: {
              width: '45%',
            },
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Title',
              defaultValue: 'Message Sent!',
              required: true,
            },
            {
              name: 'message',
              type: 'text',
              label: 'Message',
              defaultValue: 'Thank you for your message. We will get back to you soon.',
              required: true,
            },
          ],
        },
        {
          name: 'error',
          type: 'group',
          label: 'Error Toast',
          admin: {
            style: {
              width: '45%',
            },
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Title',
              defaultValue: 'Error',
              required: true,
            },
            {
              name: 'message',
              type: 'text',
              label: 'Message',
              defaultValue: 'There was an error sending your message. Please try again.',
              required: true,
            },
            {
              name: 'fallbackMessage',
              type: 'text',
              label: 'Fallback Message',
              defaultValue: 'An unexpected error occurred. Please try again later.',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
