import { authenticatedAdmin, isAdminFieldLevel } from '@/access/authenticatedAdmin'
import { authenticatedAdminOrSelf } from '@/access/authenticatedAdminOrSelf'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: {
      cs: 'Uživatel',
      en: 'User',
    },
    plural: {
      cs: 'Uživatelé',
      en: 'Users',
    },
  },
  access: {
    read: authenticatedAdminOrSelf,
    create: authenticatedAdmin,
    delete: authenticatedAdmin,
    update: authenticatedAdminOrSelf,
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
      name: 'role',
      type: 'relationship',
      relationTo: 'roles',
      hasMany: false,
      required: true,
      access: {
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
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
