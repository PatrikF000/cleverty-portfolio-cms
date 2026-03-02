// storage-adapter-import-placeholder
// import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import dns from 'node:dns'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

// Force IPv4 for DNS resolution (Render free tier doesn't support IPv6 outbound)
dns.setDefaultResultOrder('ipv4first')

import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

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

// const isProduction = process.env.NODE_ENV === 'production'

import { migrations as POSTGRESMIG } from './migrations/postgres'
//import { migrations as SQLITEMIG } from './migrations/sqlite'
import { Roles } from './collections/Roles'

// import { resendAdapter } from '@payloadcms/email-resend'
import { seedAdminUser } from './scripts/seedAdmin'
import { seedSectors } from './scripts/seedSectors'
import { Investments } from './collections/Investments'
import { InvestmentCompanies } from './collections/InvestmentCompanies'
import { Portfolios } from './collections/Portfolios'
import { FundAdministrators } from './collections/FundAdministrators'
import { Documents } from './collections/Documents'
import { Sectors } from './collections/Sectors'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const isProduction = process.env.NODE_ENV === 'production'

export default buildConfig({
  jobs: {
    tasks: [],
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
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
      'https://cleverty-portfolio-cms-1.onrender.com',
      'https://cleverty-portfolio-creator.vercel.app',
      process.env.NEXT_PUBLIC_PAYLOAD_URL || '',
    ].filter(Boolean),
  } as CORSConfig,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
      // Use SSL only for remote/cloud databases, not for local development
      ssl:
        process.env.DATABASE_URI?.includes('localhost') ||
        process.env.DATABASE_URI?.includes('127.0.0.1')
          ? false
          : { rejectUnauthorized: false },
    },
    push: false, //isProduction && process.env.RENDER === 'true' ? false : false, // false on production vypne auto-push v produkci
    migrationDir: 'src/migrations/postgres', // kam Payload ukládá migrace
    disableCreateDatabase: true,
    // localesSuffix: 'stoone',
    prodMigrations: POSTGRESMIG,
  }),
  collections: [
    FundAdministrators,
    InvestmentCompanies,
    Sectors,
    Investments,
    Roles,
    Users,
    Media,
    Documents,
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
    await seedSectors(payload)
  },
  plugins: [
    ...(isProduction || process.env.RENDER === 'true'
      ? [
          vercelBlobStorage({
            enabled: true,
            collections: {
              media: true,
              documents: true,
            } as Record<string, true>,
            token: process.env.BLOB_READ_WRITE_TOKEN,
          }),
        ]
      : []),
  ],
})
