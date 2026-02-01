import { authenticated } from '@/access/authenticated'
import { accessByDomain } from '@/access/domains/domainsAccess'
import { projectBasedAccess } from '@/access/projectBasedAccess'
// import { cookies } from 'next/headers'
import type { CollectionConfig } from 'payload'

export const Documents: CollectionConfig = {
  slug: 'documents',
  access: {
    read: accessByDomain,
    create: authenticated,
    delete: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'filename',
    defaultColumns: ['filename', 'realpadid', 'createdAt'],
    description: 'Documents uploaded from RealPad API',
    pagination: {
      defaultLimit: 50,
      limits: [10, 25, 50, 100],
    },
  },
  upload: {
    //mimeTypes: ['application/pdf', 'application/octet-stream'],
    adminThumbnail: (doc) => {
      if (process.env.NODE_ENV === 'production' || process.env.RENDER === 'true') {
        return `${process.env.S3_DOMAIN}/${process.env.S3_BUCKET}/${(doc as any)?.doc?.filename}`
      }
      return (doc as any)?.url || ''
    },
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    // {
    //   name: 'realpadid',
    //   type: 'text',
    //   label: 'Realpad ID',
    //   admin: {
    //     description: 'ID of the document in Realpad',
    //     readOnly: true,
    //   },
    // },
    // {
    //   name: 'project',
    //   type: 'relationship',
    //   relationTo: 'projects',
    //   required: false, // Pro kompatibilitu s existujícími obrázky
    //   defaultValue: async () => {
    //     // V Payload CMS je req.headers.cookie string, ne Headers objekt
    //     const cookie = await cookies()
    //     const activeProjectId = cookie.get('activeProject')?.value
    //     if (!activeProjectId) return undefined
    //     return {
    //       id: Number.parseInt(activeProjectId),
    //     }
    //   },
    // },
  ],
  hooks: {
    // beforeOperation: [
    //   async ({ operation, args, req }) => {
    //     if (operation === 'read' && req.user && req?.user?.role !== 1) {
    //       if (req.url?.includes('/api/graphql')) {
    //         return // Return early to skip all filtering for GraphQL
    //       }
    //       const project = await projectBasedAccess(req)
    //       if (!args.where) args.where = {}
    //       args.where = {
    //         and: [
    //           args.where,
    //           {
    //             project: {
    //               equals: project as string,
    //             },
    //           },
    //         ],
    //       }
    //     }
    //   },
    // ],
  },
}
