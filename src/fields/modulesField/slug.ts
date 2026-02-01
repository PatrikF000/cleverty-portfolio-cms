import { Field } from 'payload'
import deepMerge from './deepMerge'

type Slug = (fieldToUse?: string, overrides?: Partial<Field>, readOnly?: boolean) => Field

export const slugField: Slug = (fieldToUse = 'title', overrides = {}, readOnly = true) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      index: true,
      localized: true,
      admin: {
        // position: 'sidebar',
        readOnly: readOnly,
        description: 'Slug se generuje automaticky z názvu (title).',
      },
      hooks: {
        beforeValidate: [
          ({ value, siblingData, operation }) => {
            // Pokud je operace create, nebo pokud title změněno, vygeneruj slug z title
            if (
              operation === 'create' ||
              operation === 'update' ||
              (siblingData?.[fieldToUse] && siblingData?.[fieldToUse] !== value)
            ) {
              // Pokud je title lokalizované, použij aktuální jazyk (např. cs)
              const sourceFieldValue =
                typeof siblingData?.[fieldToUse] === 'object'
                  ? siblingData?.[fieldToUse].cs || Object.values(siblingData?.[fieldToUse])[0]
                  : siblingData?.[fieldToUse]
              if (sourceFieldValue) {
                // Jednoduchý slugify (můžeš nahradit lepší knihovnou)
                return sourceFieldValue
                  .toString()
                  .toLowerCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/^-+|-+$/g, '')
              }
            }
            return value
          },
        ],
      },
    },
    overrides,
  )
