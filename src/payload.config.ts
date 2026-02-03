// storage-adapter-import-placeholder
// import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import dns from 'node:dns'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

// Force IPv4 for DNS resolution (Render free tier doesn't support IPv6 outbound)
dns.setDefaultResultOrder('ipv4first')
import path from 'path'
import { buildConfig, CORSConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'

import { en } from '@payloadcms/translations/languages/en'
import { cs } from '@payloadcms/translations/languages/cs'
import { postgresAdapter } from '@payloadcms/db-postgres'
// import { s3Storage } from '@payloadcms/storage-s3'
// import { seoPlugin } from '@payloadcms/plugin-seo'

const isProduction = process.env.NODE_ENV === 'production'

// Conditional SQLite import
/*let sqliteAdapter: any = null
if (!isProduction && process.env.RENDER !== 'true') {
  try {
    const sqliteModule = await import('@payloadcms/db-sqlite')
    sqliteAdapter = sqliteModule.sqliteAdapter
  } catch (error) {
    console.warn('SQLite adapter not available:', error)
  }
}*/

import { migrations as POSTGRESMIG } from './migrations/postgres'
//import { migrations as SQLITEMIG } from './migrations/sqlite'
import { Roles } from './collections/Roles'

// import { resendAdapter } from '@payloadcms/email-resend'
import { seedAdminUser } from './scripts/seedAdmin'
import { Investments } from './collections/Investments'
import { InvestmentCompanies } from './collections/InvestmentCompanies'
import { Portfolios } from './collections/Portfolios'
import { FundAdministrators } from './collections/FundAdministrators'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
export default buildConfig({
  jobs: {
    tasks: [],
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    // Volitelně přidáš do levého menu:
    // nav: [{ label: 'Moje stránka', path: '/custom' }]
    // components: {
    //   graphics: {
    //     Icon: '/components/payload/logo/Logo',
    //     Logo: '/components/payload/logo/Logo',
    //   },
    //   views: {
    //     migratePage: {
    //       Component: '/components/pages/migratePage/MigratePage',
    //       path: '/migrate-page',
    //       meta: {
    //         title: 'Migrace dat',
    //         description: 'Import a aktualizace dat z RealPad API',
    //         openGraph: {
    //           title: 'Migrace dat',
    //         },
    //       },
    //     },
    //     dashboard: {
    //       Component: '/components/payload/dashboard/Dashboard',
    //     },
    //   },
    //   Nav: ['/components/payload/navbar/Navbar'] as unknown as CustomComponent<Record<string, any>>,
    //   header: ['/components/payload/header/Header'],
    // },
  },
  // email: resendAdapter({
  //   defaultFromAddress: 'hello@artstay.co',
  //   defaultFromName: 'Stoone',
  //   apiKey: process.env.RESEND_API_KEY || '',
  // }),
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  graphQL: {
    disablePlaygroundInProduction: false,
    maxComplexity: 1000, // Optionally set a high complexity if you want to allow deeper queries
  },
  cors: {
    headers: ['Content-Type', 'Authorization', 'x-api-key', 'x-cron-token'], //'x-cron-token'
    origins: [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://cleverty-portfolio-cms.onrender.com',
      // 'https://dev-stoone.artstay.co',
      // 'https://stoone.artstay.co',
      process.env.NEXT_PUBLIC_PAYLOAD_URL || '',
    ].filter(Boolean),
  } as CORSConfig,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
      // Always use SSL with rejectUnauthorized: false for cloud databases
      ssl: { rejectUnauthorized: false },
    },
    push: false, //isProduction && process.env.RENDER === 'true' ? false : false, // false on production vypne auto-push v produkci
    migrationDir: 'src/migrations/postgres', // kam Payload ukládá migrace
    disableCreateDatabase: true,
    // localesSuffix: 'stoone',
    prodMigrations: POSTGRESMIG,
  }),
  /* isProduction || process.env.RENDER === 'true'
      ? postgresAdapter({
          pool: {
            connectionString: process.env.DATABASE_URI,
            ssl: {
              rejectUnauthorized: false,
            },
          },
          push: false, // vypne auto-push v produkci
          migrationDir: 'src/migrations/postgres', // kam Payload ukládá migrace
          disableCreateDatabase: true,
          localesSuffix: 'stoone',
          prodMigrations: POSTGRESMIG,
        })
      : sqliteAdapter
        ? sqliteAdapter({
            client: {
              url: 'file:./payload-cms.db',
            },
            push: true, // vypne auto-push i na lokálu, spoléháme pouze na migrace
            migrationDir: 'src/migrations/sqlite',
            prodMigrations: SQLITEMIG,
          })
        : postgresAdapter({
            pool: {
              connectionString: process.env.DATABASE_URI,
              ssl: {
                rejectUnauthorized: false,
              },
            },
            push: false, // vypne auto-push v produkci
            migrationDir: 'src/migrations/postgres', // kam Payload ukládá migrace
            disableCreateDatabase: true,
            localesSuffix: 'stoone',
            prodMigrations: POSTGRESMIG,
          })*/
    collections: [
      FundAdministrators,
      InvestmentCompanies,
      Investments,
      Roles,
      Users,
      Media,
      Portfolios,
    ],
  i18n: {
    fallbackLanguage: 'cs', // default
    supportedLanguages: { cs, en },
  },
  localization: {
    locales: [
      {
        label: 'English',
        code: 'en',
      },
      {
        label: 'Czech',
        code: 'cs',
        // opt-in to setting default text-alignment on Input fields to rtl (right-to-left)
        // when current locale is rtl
      },
    ],
    defaultLocale: 'cs', // required
    fallback: true, // defaults to true
  },
  sharp,
  onInit: async (payload) => {
    await seedAdminUser(payload)
  },
  // plugins:
  //   isProduction || process.env.RENDER === 'true'
  //     ? ([
  //         payloadCloudPlugin(),
  //         /*uploadthingStorage({
  //         collections: {
  //           media: true,
  //         },
  //         options: {
  //           token: process.env.UPLOADTHING_TOKEN || '',
  //           acl: 'public-read',
  //         },
  //       }),*/
  //         // storage-adapter-placeholder
  //         /*cloudinaryStorage({
  //         config: {
  //           cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
  //           api_key: process.env.CLOUDINARY_API_KEY || '',
  //           api_secret: process.env.CLOUDINARY_API_SECRET || '',
  //         },
  //         collections: {
  //           media: true, // Enable for media collection
  //           // Add more collections as needed
  //         },
  //         folder: 'media', // Optional, defaults to 'payload-media'
  //         disableLocalStorage: true, // Optional, defaults to true
  //         enabled: true, // Optional, defaults to true
  //       }),*/

  //         s3Storage({
  //           collections: {
  //             media: true,
  //             documents: true,
  //           },
  //           bucket: process.env.S3_BUCKET || '',
  //           config: {
  //             credentials: {
  //               accessKeyId: process.env.S3_ACCESSKEY || '',
  //               secretAccessKey: process.env.S3_SECRETKEY || '',
  //             },
  //             region: 'auto',
  //             endpoint: process.env.S3_ENDPOINT || '',
  //           },
  //         }),
  //       ] as Plugin[])
  //     : ([
  //         payloadCloudPlugin(),
  //         /*s3Storage({
  //           collections: {
  //             media: true,
  //             documents: true,
  //           },
  //           bucket: process.env.S3_BUCKET || '',
  //           config: {
  //             credentials: {
  //               accessKeyId: process.env.S3_ACCESSKEY || '',
  //               secretAccessKey: process.env.S3_SECRETKEY || '',
  //             },
  //             region: 'auto',
  //             endpoint: process.env.S3_ENDPOINT || '',
  //           },
  //         }),*/
  //       ] as Plugin[]),
  plugins: [

    // ...(isProduction || process.env.RENDER === 'true'
    //   ? [
    //       payloadCloudPlugin(),
    //       /*uploadthingStorage({
    //       collections: {
    //         media: true,
    //       },
    //       options: {
    //         token: process.env.UPLOADTHING_TOKEN || '',
    //         acl: 'public-read',
    //       },
    //     }),*/
    //       // storage-adapter-placeholder
    //       /*cloudinaryStorage({
    //       config: {
    //         cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
    //         api_key: process.env.CLOUDINARY_API_KEY || '',
    //         api_secret: process.env.CLOUDINARY_API_SECRET || '',
    //       },
    //       collections: {
    //         media: true, // Enable for media collection
    //         // Add more collections as needed
    //       },
    //       folder: 'media', // Optional, defaults to 'payload-media'
    //       disableLocalStorage: true, // Optional, defaults to true
    //       enabled: true, // Optional, defaults to true
    //     }),*/

    //       s3Storage({
    //         collections: {
    //           media: true,
    //           // documents: true,
    //         },
    //         bucket: process.env.S3_BUCKET || '',
    //         config: {
    //           credentials: {
    //             accessKeyId: process.env.S3_ACCESSKEY || '',
    //             secretAccessKey: process.env.S3_SECRETKEY || '',
    //           },
    //           region: 'auto',
    //           endpoint: process.env.S3_ENDPOINT || '',
    //         },
    //         disableLocalStorage: true,
    //         acl: 'public-read',
    //       }),
    //     ]
    //   : [
    //       payloadCloudPlugin(),
    //       /*s3Storage({
    //         collections: {
    //           media: true,
    //           documents: true,
    //         },
    //         bucket: process.env.S3_BUCKET || '',
    //         config: {
    //           credentials: {
    //             accessKeyId: process.env.S3_ACCESSKEY || '',
    //             secretAccessKey: process.env.S3_SECRETKEY || '',
    //           },
    //           region: 'auto',
    //           endpoint: process.env.S3_ENDPOINT || '',
    //         },
    //       }),*/
    //     ]),
  ],
})
