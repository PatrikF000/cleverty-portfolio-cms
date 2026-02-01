import { Block } from 'payload'
import sectionSettings from '@/fields/modulesField/sectionSettings'
import { richTextFull } from '@/fields/modulesField/richText'

export const StepCards: Block = {
  slug: 'stepCards',
  labels: {
    singular: 'Step Cards',
    plural: 'Step Cards',
  },
  fields: [
    sectionSettings({ fieldName: 'stepCardsSet' }),
    {
      name: 'steps',
      type: 'array',
      maxRows: 3,
      fields: [
        richTextFull({
          name: 'content',
          localized: true,
        }),
      ],
    },
  ],
}
