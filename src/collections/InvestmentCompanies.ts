import { revalidateFrontend } from '@/hooks/revalidateFrontend'
import { accessByDomain } from '@/access/domains/domainsAccess'
import { authenticated } from '@/access/authenticated'
import type { CollectionConfig } from 'payload'

export const InvestmentCompanies: CollectionConfig = {
  slug: 'investmentCompanies',
  labels: {
    singular: {
      cs: 'Investiční společnost',
      en: 'Investment Company',
    },
    plural: {
      cs: 'Investiční společnosti',
      en: 'Investment Companies',
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
    defaultColumns: ['name'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: {
        cs: 'Název společnosti',
        en: 'Company Name',
      },
    },
  ],
  timestamps: true,
  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        if (operation === 'create' || operation === 'update') {
          await revalidateFrontend({ collection: 'investmentCompanies', id: doc.id })
        }
      },
    ],
  },
}
