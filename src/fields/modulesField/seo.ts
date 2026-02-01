import { GroupField } from 'payload'

export const Seo: GroupField = {
  name: 'seo',
  label: 'SEO',
  type: 'group',
  admin: {
    description: 'Nastavení pro optimalizaci pro vyhledávače (SEO)',
  },
  fields: [
    {
      name: 'title',
      label: 'Meta Title',
      type: 'text',
      localized: true,
      admin: {
        description:
          'Název stránky, který se zobrazí v záložce prohlížeče a ve výsledcích vyhledávání (doporučeno 50-60 znaků)',
      },
    },
    {
      name: 'description',
      label: 'Meta Description',
      type: 'textarea',
      localized: true,
      admin: {
        description:
          'Krátký popis stránky, který se zobrazí ve výsledcích vyhledávání (doporučeno 150-160 znaků)',
        rows: 3,
      },
    },
    {
      name: 'keywords',
      label: 'Meta Keywords',
      type: 'text',
      localized: true,
      admin: {
        description: 'Klíčová slova oddělená čárkami (méně důležité pro moderní SEO)',
      },
    },
    {
      name: 'ogTitle',
      label: 'Open Graph Title',
      type: 'text',
      localized: true,
      admin: {
        description:
          'Název pro sociální sítě (Facebook, Twitter) - pokud není vyplněno, použije se Meta Title',
      },
    },
    {
      name: 'ogDescription',
      label: 'Open Graph Description',
      type: 'textarea',
      localized: true,
      admin: {
        description: 'Popis pro sociální sítě - pokud není vyplněno, použije se Meta Description',
        rows: 3,
      },
    },
    {
      name: 'ogImage',
      label: 'Open Graph Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Obrázek pro sociální sítě (doporučeno 1200x630px)',
      },
    },
    {
      name: 'twitterCard',
      label: 'Twitter Card Type',
      type: 'select',
      options: [
        { label: 'Summary', value: 'summary' },
        { label: 'Summary Large Image', value: 'summary_large_image' },
        { label: 'App', value: 'app' },
        { label: 'Player', value: 'player' },
      ],
      defaultValue: 'summary_large_image',
      admin: {
        description: 'Typ Twitter karty',
      },
    },
    {
      name: 'structuredData',
      label: 'Structured Data (JSON-LD)',
      type: 'textarea',
      admin: {
        description: 'JSON-LD strukturovaná data pro lepší indexování',
        rows: 8,
      },
    },
  ],
}
