import { authenticatedAdmin } from '@/access/authenticatedAdmin'
import type { CollectionConfig } from 'payload'

export const FundAdministrators: CollectionConfig = {
  slug: 'fundAdministrators',
  labels: {
    singular: {
      cs: 'Administrátor fondu',
      en: 'FundAdministrator',
    },
    plural: {
      cs: 'Administrátoři fondů',
      en: 'Fund Administrators',
    },
  },
  access: {
    read: () => true,
    // create: authenticatedAdmin,
    // delete: authenticatedAdmin,
    // update: authenticatedAdmin,
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    tokenExpiration: 7200, // How many seconds to keep the user logged in
    //verify: true, // Require email verification before being allowed to authenticate
    maxLoginAttempts: 7, // Automatically lock a user out after X amount of failed logins
    lockTime: 60 * 60, // Time period to allow the max login attempts
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'portfolios',
      type: 'relationship',
      relationTo: 'portfolios', 
      hasMany: true,
      label: {
        cs: 'Portfolia',
        en: 'Portfolios',
      },
      admin: {
        description: {
          cs: 'Portfolia uživatele zaslaná z externí aplikace',
          en: 'User portfolios sent from external application',
        },
      },
    },
  ],
  timestamps: true,
}
