import { GroupField } from 'payload'

export const RealpadFloor: GroupField = {
  type: 'group',
  name: 'realpadFloor',
  label: 'Realpad data of floor',
  fields: [
    {
      name: 'plan',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'arrow-direction',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
  ],
}
