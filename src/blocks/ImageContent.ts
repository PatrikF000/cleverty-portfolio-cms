import { Block } from 'payload'
import { richTextBasic, richTextFull } from '@/fields/modulesField/richText'
import sectionSettings from '@/fields/modulesField/sectionSettings'
import feature from '@/fields/modulesField/feature'
import link from '@/fields/modulesField/link'

export const ImageContent: Block = {
  slug: 'imgContent',
  fields: [
    sectionSettings({ fieldName: 'imgContSet' }),
    {
      type: 'select',
      name: 'contentType',
      label: 'Select Content Type',
      required: true,
      defaultValue: 'default',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Person',
          value: 'person',
        },
        {
          label: 'Accordion',
          value: 'accordion',
        },
      ],
    },
    richTextFull({
      name: 'content',
      required: true,
      localized: true,
      overrides: {
        admin: {
          condition: (_, siblingData) => {
            if (!siblingData || typeof siblingData !== 'object') return false
            return siblingData?.contentType === 'default'
          },
        },
      },
    }),
    richTextBasic({
      name: 'upperTitle',
      label: 'Upper Title',
      localized: true,
      overrides: {
        admin: {
          condition: (_, siblingData) => {
            if (!siblingData || typeof siblingData !== 'object') return false
            return siblingData?.contentType !== 'default'
          },
        },
      },
    }),
    {
      name: 'person',
      type: 'group',
      admin: {
        condition: (_, siblingData) => {
          if (!siblingData || typeof siblingData !== 'object') return false
          return siblingData?.contentType === 'person'
        },
      },
      fields: [
        richTextFull({
          name: 'content',
          required: true,
          localized: true,
        }),
        {
          type: 'array',
          name: 'bullets',
          label: 'Bullet Points',
          localized: true,
          fields: [
            feature({
              label: 'Bullet Point',
              showTitle: false,
            }),
          ],
        },
        {
          name: 'personInfo',
          type: 'group',
          fields: [
            {
              name: 'name',
              type: 'text',
            },
            {
              name: 'position',
              type: 'text',
              localized: true,
            },
            {
              name: 'phone',
              type: 'text',
            },

            {
              name: 'email',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'accordion',
      type: 'group',
      admin: {
        condition: (_, siblingData) => {
          if (!siblingData || typeof siblingData !== 'object') return false
          return siblingData?.contentType === 'accordion'
        },
      },
      fields: [
        {
          type: 'array',
          name: 'accordionItems',
          label: 'Accordion Items',
          localized: true,
          fields: [
            {
              type: 'group',
              name: 'accordionItem',
              label: 'Accordion Item',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                richTextBasic({
                  name: 'content',
                  required: true,
                }),
              ],
            },
          ],
        },
        link({
          localized: true,
        }),
      ],
    },

    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'imagePosition',
      type: 'select',
      options: ['left', 'right'],
      defaultValue: 'right',
    },
    // {
    //   name: 'imageSize',
    //   type: 'select',
    //   options: ['small', 'medium'],
    //   defaultValue: 'medium',
    // },
    // {
    //   name: 'imageBottomContent',
    //   type: 'group',
    //   fields: [
    //     richTextBasic({
    //       name: 'content',
    //       localized: true,
    //     }),
    //   ],
    // },
  ],
}
