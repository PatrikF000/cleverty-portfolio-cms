import { Block } from 'payload'

export const VariableTable: Block = {
  slug: 'variableTable',
  labels: {
    singular: 'Tabulka',
    plural: 'Tabulky',
  },
  fields: [
    {
      name: 'rows',
      label: 'Řádky',
      type: 'array',
      required: false,
      fields: [
        {
          name: 'rowIndex',
          type: 'number',
          label: 'Row index',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'cells',
          label: 'Cells',
          type: 'array',
          required: false,
          fields: [
            {
              name: 'value',
              label: 'Cell',
              type: 'text', // nebo 'richText' pokud chceš formátování
              required: false,
            },
          ],
        },
      ],
    },
  ],
}
