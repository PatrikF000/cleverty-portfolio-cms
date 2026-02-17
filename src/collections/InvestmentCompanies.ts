import { revalidateFrontend } from '@/hooks/revalidateFrontend'
import { authenticatedAdmin } from '../access/authenticatedAdmin'
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
    // read: authenticatedAdmin,
    // create: authenticatedAdmin,
    // update: authenticatedAdmin,
    // delete: authenticatedAdmin,
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
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
