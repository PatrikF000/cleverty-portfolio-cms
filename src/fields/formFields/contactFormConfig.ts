import type { Field } from 'payload'
import { richTextBasic } from '../modulesField/richText'
import { toastConfig } from './toasts'
import { createCheckboxField, createSelectField, createTextField } from './fieldBuilders'

export const contactFormConfig: Field = {
  name: 'contactFormConfig',
  type: 'group',
  label: 'Contact Form Configuration',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Inputs',
          fields: [
            {
              type: 'row',
              admin: {
                style: {
                  display: 'row',
                  gap: '1rem',
                  borderBottom: '2px solid var(--color-border)',
                  marginBottom: '1rem',
                },
              },
              fields: [
                createTextField('firstName', 'First Name', 'Enter your first name', {
                  minLength: 2,
                  minLengthMessage: 'First Name must be at least 2 characters long',
                  requiredMessage: 'First Name is required',
                }),
                createTextField('lastName', 'Last Name', 'Enter your last name', {
                  minLength: 2,
                  minLengthMessage: 'Last Name must be at least 2 characters long',
                  requiredMessage: 'Last Name is required',
                }),
              ],
            },

            {
              type: 'row',
              admin: {
                style: {
                  display: 'row',
                  gap: '1rem',
                  borderBottom: '2px solid var(--color-border)',
                  marginBottom: '1rem',
                },
              },
              fields: [
                createTextField('phone', 'Phone', 'Enter your phone number', {
                  requiredMessage: 'Phone is required',
                }),
                createTextField('email', 'Email', 'Enter your email address', {
                  invalidMessage: 'Please enter a valid email address',
                  requiredMessage: 'Email is required',
                }),
              ],
            },
            {
              type: 'row',
              admin: {
                style: {
                  display: 'row',
                  gap: '1rem',
                  borderBottom: '2px solid var(--color-border)',
                  marginBottom: '1rem',
                },
              },
              fields: [
                createSelectField(
                  'disposition',
                  'Flat Disposition',
                  'Select flat disposition',
                  [
                    { value: '1-bedroom', label: '1 Bedroom' },
                    { value: '2-bedroom', label: '2 Bedroom' },
                    { value: '3-bedroom', label: '3 Bedroom' },
                    { value: '4-bedroom', label: '4+ Bedroom' },
                  ],
                  {
                    requiredMessage: 'Please select a flat disposition',
                  },
                  '45%',
                ),
                // Message field
                createTextField('message', 'Message', 'Enter your message', {
                  requiredMessage: 'Message is required',
                }),
              ],
            },
          ],
        },
        {
          label: 'Setup',
          fields: [
            richTextBasic({
              name: 'bottomContent',
              label: 'Bottom Content',
              required: false,
            }),
            createCheckboxField(
              'checkboxNewsletter',
              'I agree to the terms and conditions',
              richTextBasic({
                name: 'content',
                label: 'Content',
                required: true,
              }),
              'You must agree to the terms and conditions',
            ),
            {
              name: 'submitButton',
              type: 'text',
              label: 'Submit Button',
              defaultValue: 'Send Message',
              required: true,
            },
            toastConfig,
          ],
        },
      ],
    },
  ],
}
