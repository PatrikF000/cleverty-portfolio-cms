import { authenticatedAdmin, isAdminFieldLevel } from '@/access/authenticatedAdmin'
import { CollectionConfig } from 'payload'

export const Roles: CollectionConfig = {
  slug: 'roles',
  labels: {
    singular: 'Role',
    plural: 'Roles',
  },
  access: {
    create: authenticatedAdmin,
    update: authenticatedAdmin,
    delete: authenticatedAdmin,
    read: () => true, //authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'createdAt', 'updatedAt'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'permissions',
      type: 'group',
      fields: [
        {
          name: 'investments',
          type: 'select',
          hasMany: true,
          options: [
            { label: 'Create', value: 'create' },
            { label: 'Read', value: 'read' },
          ],
        },
        {
          name: 'media',
          type: 'select',
          hasMany: true,
          options: [
            { label: 'Create', value: 'create' },
            { label: 'Read', value: 'read' },
            { label: 'Update', value: 'update' },
            { label: 'Delete', value: 'delete' },
          ],
        },
      
        // {
        //   name: 'pages',
        //   type: 'select',
        //   hasMany: true,
        //   options: [
        //     { label: 'Create', value: 'create' },
        //     { label: 'Read', value: 'read' },
        //     { label: 'Update', value: 'update' },
        //     { label: 'Delete', value: 'delete' },
        //   ],
        // },
        // {
        //   name: 'globalheader',
        //   type: 'select',
        //   hasMany: true,
        //   options: [
        //     { label: 'Create', value: 'create' },
        //     { label: 'Read', value: 'read' },
        //     { label: 'Update', value: 'update' },
        //     { label: 'Delete', value: 'delete' },
        //   ],
        // },
        // {
        //   name: 'globalfooter',
        //   type: 'select',
        //   hasMany: true,
        //   options: [
        //     { label: 'Create', value: 'create' },
        //     { label: 'Read', value: 'read' },
        //     { label: 'Update', value: 'update' },
        //     { label: 'Delete', value: 'delete' },
        //   ],
        // },
        // {
        //   name: 'projectGlobalSettings',
        //   type: 'select',
        //   hasMany: true,
        //   options: [
        //     { label: 'Create', value: 'create' },
        //     { label: 'Read', value: 'read' },
        //     { label: 'Update', value: 'update' },
        //     { label: 'Delete', value: 'delete' },
        //   ],
        // },
        // {
        //   name: 'buildings',
        //   type: 'select',
        //   hasMany: true,
        //   options: [
        //     { label: 'Create', value: 'create' },
        //     { label: 'Read', value: 'read' },
        //     { label: 'Update', value: 'update' },
        //     { label: 'Delete', value: 'delete' },
        //   ],
        // },
        // {
        //   name: 'flats',
        //   type: 'select',
        //   hasMany: true,
        //   options: [
        //     { label: 'Create', value: 'create' },
        //     { label: 'Read', value: 'read' },
        //     { label: 'Update', value: 'update' },
        //     { label: 'Delete', value: 'delete' },
        //   ],
        // },
        // {
        //   name: 'flatDetailPage',
        //   type: 'select',
        //   hasMany: true,
        //   options: [
        //     { label: 'Create', value: 'create' },
        //     { label: 'Read', value: 'read' },
        //     { label: 'Update', value: 'update' },
        //     { label: 'Delete', value: 'delete' },
        //   ],
        // },
        // {
        //   name: 'sectors',
        //   type: 'select',
        //   hasMany: true,
        //   options: [
        //     { label: 'Create', value: 'create' },
        //     { label: 'Read', value: 'read' },
        //     { label: 'Update', value: 'update' },
        //     { label: 'Delete', value: 'delete' },
        //   ],
        // },
        // {
        //   name: 'floors',
        //   type: 'select',
        //   hasMany: true,
        //   options: [
        //     { label: 'Create', value: 'create' },
        //     { label: 'Read', value: 'read' },
        //     { label: 'Update', value: 'update' },
        //     { label: 'Delete', value: 'delete' },
        //   ],
        // },
        // {
        //   name: 'news',
        //   type: 'select',
        //   hasMany: true,
        //   options: [
        //     { label: 'Create', value: 'create' },
        //     { label: 'Read', value: 'read' },
        //     { label: 'Update', value: 'update' },
        //     { label: 'Delete', value: 'delete' },
        //   ],
        // },
        
        // {
        //   name: 'documents',
        //   type: 'select',
        //   hasMany: true,
        //   options: [
        //     { label: 'Create', value: 'create' },
        //     { label: 'Read', value: 'read' },
        //     { label: 'Update', value: 'update' },
        //     { label: 'Delete', value: 'delete' },
        //   ],
        // },
        // {
        //   name: 'share',
        //   type: 'select',
        //   hasMany: true,
        //   options: [
        //     { label: 'Create', value: 'create' },
        //     { label: 'Read', value: 'read' },
        //     { label: 'Update', value: 'update' },
        //     { label: 'Delete', value: 'delete' },
        //   ],
        // },
      ],
    },
  ],
}
