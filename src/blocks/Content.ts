import { Block } from 'payload'
import { richTextFull } from '@/fields/modulesField/richText'
import sectionSettings from '@/fields/modulesField/sectionSettings'
import { BlocksFeature, lexicalEditor, LinkFeature } from '@payloadcms/richtext-lexical'
import { Buttons } from '@/fields/modulesField/buttons'
import { AnimatedHeading } from '@/fields/modulesField/animatedHeading'
import { LeadParagraph } from '@/fields/modulesField/leadParagraph'

export const Content: Block = {
  slug: 'content',
  fields: [
    sectionSettings({
      fieldName: 'contentSettings',
      backgroundThemeVariants: ['dark', 'light'],
      includeHeading: true,
      includeButton: true,
    }),
    richTextFull({
      name: 'contentBlock',
      required: false,
      localized: true,
      overrides: {
        editor: lexicalEditor({
          features: ({ defaultFeatures }: { defaultFeatures: any }) => [
            ...defaultFeatures,
            BlocksFeature({ blocks: [Buttons, AnimatedHeading, LeadParagraph] }),
            LinkFeature({
              fields: ({ defaultFields }) => [
                ...defaultFields,
                {
                  name: 'cookieConsentButton',
                  type: 'checkbox',
                  label: 'Cookie Consent Button',
                },
              ],
            }),
          ],
        }),
      },
    }),
    {
      name: 'wideContentArea',
      type: 'checkbox',
      label: 'Wide Content Area',
      defaultValue: false,
    },
    {
      type: 'select',
      name: 'contentPosition',
      label: 'Content Position',
      required: true,
      localized: true,
      defaultValue: 'center',
      options: [
        {
          label: 'Center',
          value: 'center',
        },
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
    },
  ],
}
