// import { authenticatedAdminField } from '@/access/field/authenticatedAdminField'
import { GroupField } from 'payload'

export const CronJobSettings: GroupField = {
  name: 'cronSettings',
  type: 'group',
  label: 'Automatická migrace (Cron Job)',
  access: {
    // create: authenticatedAdminField,
    // update: authenticatedAdminField,
    // read: authenticatedAdminField,
  },
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Povolit automatickou migraci',
      defaultValue: false,
    },
    {
      name: 'schedule',
      type: 'select',
      label: 'Frekvence spouštění',
      defaultValue: 'every_6_hours',
      options: [
        { label: 'Každých 5 minut', value: 'every_5_minutes' },
        { label: 'Každých 15 minut', value: 'every_15_minutes' },
        { label: 'Každou hodinu', value: 'every_hour' },
        { label: 'Každých 6 hodin', value: 'every_6_hours' },
        { label: 'Každých 12 hodin', value: 'every_12_hours' },
        { label: 'Denně v půlnoci', value: 'daily_midnight' },
        { label: 'Denně v 6:00', value: 'daily_6am' },
        { label: 'Týdně (neděle v půlnoci)', value: 'weekly_sunday' },
      ],
      admin: {
        condition: (data) => {
          if (!data || typeof data !== 'object') return false
          return data?.cronSettings?.enabled === true
        },
      },
    },
    {
      name: 'customSchedule',
      type: 'text',
      label: 'Vlastní cron pattern',
      admin: {
        condition: (data) => {
          if (!data || typeof data !== 'object') return false
          return data?.cronSettings?.enabled === true
        },
        description:
          'Vlastní cron pattern (např. "0 8,16 * * 1-5" pro 8:00 a 16:00 v pracovní dny). Pokud je vyplněn, má přednost před výběrem výše.',
      },
      hooks: {
        beforeValidate: [
          ({ value }) => {
            if (!value) return value
            // Validate cron pattern format
            const cronRegex =
              /^(\*|([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])|\*\/([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])) (\*|([0-9]|1[0-9]|2[0-3])|\*\/([0-9]|1[0-9]|2[0-3])) (\*|([1-9]|1[0-9]|2[0-9]|3[0-1])|\*\/([1-9]|1[0-9]|2[0-9]|3[0-1])) (\*|([1-9]|1[0-2])|\*\/([1-9]|1[0-2])) (\*|([0-6])|\*\/([0-6]))$/
            if (!cronRegex.test(value)) {
              throw new Error(
                'Neplatný cron pattern. Použijte správný formát (např. "0 */6 * * *")',
              )
            }
            return value
          },
        ],
      },
    },
    {
      name: 'lastRun',
      type: 'text',
      label: 'Poslední spuštění',
      admin: {
        readOnly: true,
        condition: (data) => {
          if (!data || typeof data !== 'object') return false
          return data?.cronSettings?.enabled === true
        },
        description: 'Datum a čas posledního spuštění migrace',
      },
    },
    {
      name: 'nextRun',
      type: 'text',
      label: 'Příští spuštění',
      admin: {
        readOnly: true,
        condition: (data) => {
          if (!data || typeof data !== 'object') return false
          return data?.cronSettings?.enabled === true
        },
        description: 'Datum a čas příštího plánovaného spuštění',
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Stav',
      defaultValue: 'inactive',
      options: [
        { label: 'Neaktivní', value: 'inactive' },
        { label: 'Aktivní', value: 'active' },
        { label: 'Chyba', value: 'error' },
        { label: 'Pozastaveno', value: 'paused' },
      ],
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'lastResult',
      type: 'textarea',
      label: 'Výsledek posledního spuštění',
      admin: {
        readOnly: true,
        condition: (data) => {
          if (!data || typeof data !== 'object') return false
          return data?.cronSettings?.enabled === true
        },
        rows: 3,
      },
    },
  ],
}
