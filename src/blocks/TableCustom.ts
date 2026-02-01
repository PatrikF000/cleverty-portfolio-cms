import { VariableTable } from '@/fields/modulesField/tableField'
import { Block } from 'payload'

export const TableCustom: Block = {
  slug: 'tableCustom',
  fields: [
    {
      name: 'title',
      type: 'richText',
    },
    {
      name: 'content',
      label: 'Content',
      type: 'blocks',
      required: false,
      blocks: [
        VariableTable,
        // sem můžeš přidat další bloky jako richText, image, gallery atd.
      ],
    },
  ],
}
