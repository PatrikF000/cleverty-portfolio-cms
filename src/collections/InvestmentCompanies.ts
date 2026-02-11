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
    read: authenticatedAdmin,
    create: authenticatedAdmin,
    update: authenticatedAdmin,
    delete: authenticatedAdmin,
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
}
