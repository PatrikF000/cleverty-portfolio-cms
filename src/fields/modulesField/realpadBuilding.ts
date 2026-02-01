import { GroupField } from 'payload'

export const RealpadBuilding: GroupField = {
  type: 'group',
  name: 'realpadBuilding',
  label: 'Realpad data of building',
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
