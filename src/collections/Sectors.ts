import { revalidateFrontend } from '@/hooks/revalidateFrontend'
import { accessByDomain } from '@/access/domains/domainsAccess'
import { authenticated } from '@/access/authenticated'
import type { CollectionConfig } from 'payload'

export const Sectors: CollectionConfig = {
  slug: 'sectors',
  labels: {
    singular: {
      cs: 'Sektor',
      en: 'Sector',
    },
    plural: {
      cs: 'Sektory',
      en: 'Sectors',
    },
  },
  access: {
    read: accessByDomain,
    create: authenticated,
    delete: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'order'],
    description: {
      cs: 'Investiční sektory pro přiřazení k investicím',
      en: 'Investment sectors for assignment to investments',
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: {
        cs: 'Název',
        en: 'Name',
      },
      admin: {
        description: {
          cs: 'Zobrazovaný název sektoru (např. "Komerční nemovitosti")',
          en: 'Display name of the sector (e.g. "Commercial real estate")',
        },
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: {
        cs: 'Slug',
        en: 'Slug',
      },
      admin: {
        description: {
          cs: 'URL-safe identifikátor (např. "komercni-nemovitosti")',
          en: 'URL-safe identifier (e.g. "komercni-nemovitosti")',
        },
      },
    },
    {
      name: 'order',
      type: 'number',
      label: {
        cs: 'Pořadí',
        en: 'Order',
      },
      admin: {
        description: {
          cs: 'Pořadí zobrazení v seznamu (nižší číslo = výše)',
          en: 'Display order in list (lower number = higher)',
        },
      },
    },
  ],
  timestamps: true,
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === 'create' || operation === 'update') {
          await revalidateFrontend({ collection: 'sectors', id: doc.id })
        }
      },
    ],
  },
}
