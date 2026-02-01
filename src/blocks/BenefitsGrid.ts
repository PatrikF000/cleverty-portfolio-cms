import { Block } from 'payload'
import { richTextBodyOnly, richTextFull } from '@/fields/modulesField/richText'
import sectionSettings from '@/fields/modulesField/sectionSettings'
import { animatedHeadingField } from '@/fields/modulesField/animatedHeading'
import { Field } from 'payload'

// Extract the repeated benefit item fields into a reusable function
const benefitItemField = (): Field[] => [
  {
    name: 'image',
    type: 'upload',
    relationTo: 'media',
    required: true,
  },
  animatedHeadingField({
    name: 'heading',
    label: 'Benefit Heading',
    localized: true,
    setHeadingType: false,
  }),
  richTextBodyOnly({
    name: 'description',
    required: true,
    localized: true,
  }),
]

export const BenefitsGrid: Block = {
  slug: 'benefits',
  fields: [
    sectionSettings({
      fieldName: 'benefitsSettings',
      backgroundThemeVariants: ['dark', 'light'],
    }),
    {
      name: 'showLogo',
      type: 'checkbox',
      defaultValue: true,
    },
    richTextFull({
      name: 'content',
      required: true,
      localized: true,
    }),
    {
      name: 'benefits',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      localized: true,
      fields: [
        {
          type: 'group',
          name: 'row',
          fields: [
            {
              type: 'group',
              name: 'item',
              fields: benefitItemField(),
            },
            {
              type: 'group',
              name: 'item2',
              fields: benefitItemField(),
            },
          ],
        },
      ],
    },
    /*{
      type: 'tabs',
      tabs: [
        {
          label: 'Section Settings',
          fields: [
            sectionSettings({
              fieldName: 'benefitsSettings',
              backgroundThemeVariants: ['dark', 'light'],
            }),
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'showLogo',
              type: 'checkbox',
              defaultValue: true,
            },
            richTextFull({
              name: 'content',
              required: true,
              localized: true,
            }),
            {
              name: 'benefits',
              type: 'array',
              minRows: 1,
              maxRows: 3,
              localized: true,
              fields: [
                {
                  type: 'group',
                  name: 'row',
                  fields: [
                    {
                      type: 'group',
                      name: 'item',
                      fields: benefitItemField(),
                    },
                    {
                      type: 'group',
                      name: 'item2',
                      fields: benefitItemField(),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },*/
  ],
}
