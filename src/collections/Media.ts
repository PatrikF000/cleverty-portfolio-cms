import { authenticated } from '@/access/authenticated'
import { accessByDomain } from '@/access/domains/domainsAccess'
import { projectBasedAccess } from '@/access/projectBasedAccess'
import { cookies } from 'next/headers'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: accessByDomain, // accessByDomain,
    create: authenticated,
    delete: authenticated,
    update: authenticated,
  },
  upload: {
    staticDir: 'media',
    focalPoint: true,
    adminThumbnail: (doc) => {
      if (process.env.NODE_ENV === 'production' || process.env.RENDER === 'true') {
        return `${process.env.S3_DOMAIN}/${process.env.S3_BUCKET}/${(doc as any)?.doc?.filename}`
      }
      return (doc as any)?.url || ''
    },
    formatOptions: {
      format: 'webp',
      options: { quality: 90 }, // uprav dle potřeby
    },
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
      },
      {
        name: 'square',
        width: 500,
        height: 500,
      },
      {
        name: 'small',
        width: 600,
      },
      {
        name: 'medium',
        width: 900,
      },
      {
        name: 'large',
        width: 1400,
      },
      {
        name: 'xlarge',
        width: 1920,
      },
      {
        name: 'og',
        width: 1200,
        height: 630,
        crop: 'center',
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
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
