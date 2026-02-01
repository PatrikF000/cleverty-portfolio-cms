import { Block } from 'payload'
import sectionSettings from '@/fields/modulesField/sectionSettings'
import { contactItems } from '@/fields/modulesField/contactItem'
import { richTextFull } from '@/fields/modulesField/richText'

export const Contact: Block = {
  slug: 'contact',

  fields: [
    sectionSettings({ fieldName: 'contactSettings', includeHeading: true }),
    {
      name: 'variant',
      type: 'select',
      options: ['withContactInfo', 'onlyForm'],
      defaultValue: 'onlyForm',
      required: true,
    },
    /*richTextFull({
      name: 'description',
      localized: true,
    }),*/
    richTextFull({
      name: 'descfull',
      localized: true,
    }),
    {
      name: 'contactInfo',
      type: 'group',
      localized: true,
      fields: [
        contactItems({
          name: 'highlightedContacts',
          label: 'Highlighted Contact Items',
          required: true,
        }),
        contactItems({
          name: 'contactItems',
          label: 'Contact Items',
          required: true,
        }),
      ],
      admin: {
        condition: (_, siblingData) => {
          if (!siblingData || typeof siblingData !== 'object') return false
          return siblingData?.variant === 'withContactInfo'
        },
      },
    },
    {
      name: 'contactFormPosition',
      type: 'select',
      options: ['left', 'right'],
    },
    // contactFormConfig,
  ],
}
