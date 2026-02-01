import { GroupField } from 'payload'

export const RealpadProject: GroupField = {
  name: 'realpadProject',
  label: 'Realpad data of project',
  type: 'group',
  admin: {
    description: 'Data z RealPad API - automaticky se vyplní při migraci',
  },
  fields: [
    {
      name: 'gps',
      type: 'text',
      admin: {
        readOnly: true,
        description: 'GPS souřadnice projektu',
      },
    },
    {
      name: 'icon',
      type: 'text',
      admin: {
        readOnly: true,
        description: 'ID ikony projektu',
      },
    },
    {
      name: 'plan',
      type: 'text',
      admin: {
        readOnly: true,
        description: 'ID plánu projektu',
      },
    },
    {
      name: 'logo',
      type: 'text',
      admin: {
        readOnly: true,
        description: 'ID loga projektu',
      },
    },
    {
      name: 'standards',
      type: 'text',
      admin: {
        readOnly: true,
        description: 'Standardy projektu',
      },
    },
    {
      name: 'offline-map',
      type: 'text',
      admin: {
        readOnly: true,
        description: 'Offline mapa projektu',
      },
    },
    {
      name: 'pinpoint',
      type: 'text',
      admin: {
        readOnly: true,
        description: 'Pinpoint data',
      },
    },
    {
      name: 'currency',
      type: 'text',
      admin: {
        readOnly: true,
        description: 'Měna projektu',
      },
    },
  ],
}
