import { Payload } from 'payload'

const DEFAULT_SECTORS = [
  { name: 'Komerční nemovitosti', slug: 'komercni-nemovitosti' },
  { name: 'Úvěry', slug: 'uvery' },
  { name: 'Energetika', slug: 'energetika' },
  { name: 'Dluhopisy', slug: 'dluhopisy' },
  { name: 'Zajištěné pohledávky', slug: 'zajistene-pohledavky' },
  { name: 'Nezajištěné pohledávky', slug: 'nezajistene-pohledavky' },
  { name: 'Nemovitosti, rezidenční development', slug: 'nemovitosti-rezidencni-development' },
  { name: 'Development Retail parků', slug: 'development-retail-parku' },
  { name: 'Private Equity', slug: 'private-equity' },
  { name: 'Komerční i residenční nemovitosti', slug: 'komercni-i-rezidencni-nemovitosti' },
  { name: 'Senior house', slug: 'senior-house' },
  { name: 'Hotelnictví', slug: 'hotelnictvi' },
  { name: 'Repo operace', slug: 'repo-operace' },
  { name: 'Akcie a dluhopisy', slug: 'akcie-a-dluhopisy' },
  { name: 'Akcie', slug: 'akcie' },
  { name: 'Obranný průmysl', slug: 'obranny-prumysl' },
  { name: 'Investiční nástroje', slug: 'investicni-nastroje' },
  { name: 'Hedge fondy', slug: 'hedge-fondy' },
  { name: 'ETF fondy', slug: 'etf-fondy' },
  { name: 'Virtuální měny', slug: 'virtualni-meny' },
  { name: 'Residenční nemovitosti', slug: 'rezidencni-nemovitosti' },
  { name: 'Nástroje peněžního trhu', slug: 'nastroje-penezniho-trhu' },
  { name: 'Pohledávky', slug: 'pohledavky' },
  { name: 'Krátkodobé investice', slug: 'kratkodobe-investice' },
  { name: 'Finanční služby', slug: 'financni-sluzby' },
  { name: 'Smlouva o úvěru.', slug: 'smlouva-o-uveru' },
]

export const seedSectors = async (payload: Payload): Promise<void> => {
  try {
    const result = await payload.find({
      collection: 'sectors',
      limit: 1,
    })

    if (result.totalDocs > 0) {
      console.log('ℹ️ Sectors already seeded')
      return
    }

    for (let i = 0; i < DEFAULT_SECTORS.length; i++) {
      await payload.create({
        collection: 'sectors',
        data: {
          ...DEFAULT_SECTORS[i],
          order: i + 1,
        },
      })
    }

    console.log(`✅ Seeded ${DEFAULT_SECTORS.length} sectors`)
  } catch (error: unknown) {
    if (
      error &&
      typeof error === 'object' &&
      ('code' in error || 'message' in error) &&
      (String((error as { code?: string }).code) === '42P01' ||
        String((error as { message?: string }).message).includes('does not exist') ||
        String((error as { message?: string }).message).includes('relation'))
    ) {
      console.warn('⚠️ Sectors table not found. Run migrations first: pnpm payload migrate')
      return
    }
    console.error('❌ Error seeding sectors:', error)
    throw error
  }
}
