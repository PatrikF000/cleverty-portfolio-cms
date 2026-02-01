import type { Field } from 'payload'
import { richTextBasic } from '../modulesField/richText'
import { toastConfig } from './toasts'
import { createCheckboxField, createTextField, createSelectField } from './fieldBuilders'
export const formConfig: Field = {
  name: 'formCfg',
  type: 'group',
  label: 'Form Configuration',
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
                // Name field
                createTextField('firstName', 'First Name', 'Enter your first name', {
                  minLength: 2,
                  minLengthMessage: 'First name must be at least 2 characters long',
                  requiredMessage: 'First name is required',
                }),

                // Last Name field
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
                // Phone field
                createTextField('phone', 'Phone', 'Enter your phone number', {
                  requiredMessage: 'Phone is required',
                }),

                // Email field
                createTextField('email', 'Email', 'Enter your email address', {
                  invalidMessage: 'Please enter a valid email address',
                  requiredMessage: 'Email is required',
                }),
                // Message field
                createTextField('message', 'Message', 'Enter your message', {
                  requiredMessage: 'Message is required',
                }),
              ],
            },

            // Flat Disposition field
            createSelectField(
              'flatDisposition',
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
            ),
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
            // Checkbox with Text field
            createCheckboxField(
              'checkboxWithText',
              '',
              richTextBasic({
                name: 'content',
                label: 'Content',
                required: false,
              }),
              'You must agree to the terms and conditions',
            ),

            // Checkbox with Text field - newsletter
            createCheckboxField(
              'checkboxWithTextNewsletter',
              'I agree to receive newsletters',
              richTextBasic({
                name: 'content',
                label: 'Content',
                required: false,
              }),
              'You must agree to the terms and conditions',
              false,
            ),
            // Submit Button field
            {
              name: 'submitButton',
              type: 'text',
              label: 'Submit Button',
              defaultValue: 'Send Message',
              required: true,
            },
            // Toast configuration
            toastConfig,
          ],
        },
      ],
    },
  ],
}
