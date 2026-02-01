import { withPayload } from '@payloadcms/next/withPayload'
//import path from 'node:path'
//import { fileURLToPath } from 'node:url'

// __dirname náhrada v ESM:
//const __filename = fileURLToPath(import.meta.url)
//const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  //output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  /* webpack: (config) => {
    // Přidáme aliasy
    config.resolve.alias['@payload-config'] = path.resolve(__dirname, 'src/payload.config.ts')
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')
    return config
  },*/
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
