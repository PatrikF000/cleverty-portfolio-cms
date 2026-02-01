import { authenticatedAdmin } from '../access/authenticatedAdmin'
import type { CollectionConfig } from 'payload'

export const Investments: CollectionConfig = {
  slug: 'investments',
  labels: {
    singular: {
      cs: 'Investice',
      en: 'Investment',
    },
    plural: {
      cs: 'Investice',
      en: 'Investments',
    },
  },
  access: {
    read: () => true, // Allow public read access
    create: authenticatedAdmin,
    update: authenticatedAdmin,
    delete: authenticatedAdmin,
  },
  admin: {
    useAsTitle: 'investmentName',
    defaultColumns: [ 'company','investmentName', 'isin' ],
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'type',
          type: 'select',
          // required: true,
          options: [
            { label: 'FKI', value: 'FKI' },
            { label: 'OPF', value: 'OPF' },
            { label: 'DVKF', value: 'DVKF' },
            { label: 'SUUV', value: 'SUUV' },
            { label: 'SUVC', value: 'SUVC' },
          ],
          label: {
            cs: 'Typ',
            en: 'Type',
          },
          admin: {
            width: '50%',
            description: {
              cs: 'Typ investice (např. FKI, OPF, DVKF, SUUV, SUVC)',
              en: 'Investment type (e.g. FKI, OPF, DVKF, SUUV, SUVC)',
            },
          },
        },
        {
          name: 'company',
          type: 'relationship',
          relationTo: 'investmentCompanies',
          // required: true,
          label: {
            cs: 'Investiční společnost',
            en: 'Investment Company',
          },
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'investmentName',
          type: 'text',
          label: {
            cs: 'Název investice',
            en: 'Investment Name',
          },
          admin: {
            width: '50%',
          },
        },
        {
          name: 'isin',
          type: 'text',
          // required: false,
          label: {
            cs: 'ISIN',
            en: 'ISIN',
          },
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'currency',
          type: 'select',
          // required: true,
          options: [
            { label: 'CZK', value: 'CZK' },
            { label: 'EUR', value: 'EUR' },
            { label: 'USD', value: 'USD' },
          ],
          defaultValue: 'CZK',
          label: {
            cs: 'Měna',
            en: 'Currency',
          },
          admin: {
            width: '50%',
          },
        },
        {
          name: 'nav',
          type: 'text',
          // required: false,
          label: {
            cs: 'NAV',
            en: 'NAV',
          },
          admin: {
            width: '50%',
            description: {
              cs: 'Čistá hodnota aktiv (např. "do 250 mil Kč", "nad 1 mil Kč")',
              en: 'Net Asset Value (e.g. "up to 250 mil CZK", "over 1 mil CZK")',
            },
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'category',
          type: 'select',
          // required: true,
          options: [
            { label: 'A+', value: 'A_PLUS' },
            { label: 'A', value: 'A' },
            { label: 'B+', value: 'B_PLUS' },
            { label: 'B', value: 'B' },
            { label: 'C', value: 'C' },
          ],
          label: {
            cs: 'Kategorie',
            en: 'Category',
          },
          admin: {
            width: '50%',
          },
        },
        {
          name: 'noExitFee',
          type: 'text',
          // required: true,
          label: {
            cs: 'Horizont bez výstupního poplatku',
            en: 'No redemption fee',
          },
          admin: {
            width: '50%',
            description: {
              cs: 'Počet let nebo procento (např. "5" pro roky, "vždy 0,25 %" pro procento)',
              en: 'Number of years or percentage (e.g. "5" for years, "always 0.25%" for percentage)',
            },
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'expectedReturn',
          type: 'number',
          // required: false,
          label: {
            cs: 'Očekávaný výnos',
            en: 'Expected Return',
          },
          admin: {
            width: '50%',
            description: {
              cs: 'Očekávaný výnos (např. "8.50%", "12.00%")',
              en: 'Expected return (e.g. "8.50%", "12.00%")',
            },
          },
        },
        {
          name: 'liquidity',
          type: 'text',
          // required: false,
          label: {
            cs: 'Likvidita',
            en: 'Liquidity',
          },
          admin: {
            width: '50%',
            description: {
              cs: 'Likvidita investice (např. "max. 4 měsíce", "Do 1 měsíce")',
              en: 'Investment liquidity (e.g. "max. 4 months", "Within 1 month")',
            },
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'standardLiquidity',
          type: 'text',
          // required: false,
          label: {
            cs: 'Standardní likvidita',
            en: 'Standard Liquidity',
          },
          admin: {
            width: '50%',
            description: {
              cs: 'Standardní doba likvidace (např. "Do 1 měsíce od určení ceny", "Do 5 dnů")',
              en: 'Standard liquidity period (e.g. "Within 1 month of price determination", "Within 5 days")',
            },
          },
        },
        {
          name: 'sector',
          type: 'select',
          // required: true,
          options: [
            { label: 'Komerční nemovitosti', value: 'komercni-nemovitosti' },
            { label: 'Úvěry', value: 'uvery' },
            { label: 'Energetika', value: 'energetika' },
            { label: 'Dluhopisy', value: 'dluhopisy' },
            { label: 'Zajištěné pohledávky', value: 'zajistene-pohledavky' },
            { label: 'Nezajištěné pohledávky', value: 'nezajistene-pohledavky' },
            { label: 'Nemovitosti, rezidenční development', value: 'nemovitosti-rezidencni-development' },
            { label: 'Development Retail parků', value: 'development-retail-parku' },
            { label: 'Private Equity', value: 'private-equity' },
            { label: 'Komerční i residenční nemovitosti', value: 'komercni-i-rezidencni-nemovitosti' },
            { label: 'Senior house', value: 'senior-house' },
            { label: 'Hotelnictví', value: 'hotelnictvi' },
            { label: 'Repo operace', value: 'repo-operace' },
            { label: 'Akcie a dluhopisy', value: 'akcie-a-dluhopisy' },
            { label: 'Akcie', value: 'akcie' },
            { label: 'Obranný průmysl', value: 'obranny-prumysl' },
            { label: 'Investiční nástroje', value: 'investicni-nastroje' },
            { label: 'Hedge fondy', value: 'hedge-fondy' },
            { label: 'ETF fondy', value: 'etf-fondy' },
            { label: 'Virtuální měny', value: 'virtualni-meny' },
            { label: 'Residenční nemovitosti', value: 'rezidencni-nemovitosti' },
            { label: 'Nástroje peněžního trhu', value: 'nastroje-penezniho-trhu' },
            { label: 'Pohledávky', value: 'pohledavky' },
            { label: 'Krátkodobé investice', value: 'kratkodobe-investice' },
          ],
          label: {
            cs: 'Sektor',
            en: 'Sector',
          },
          admin: {
            width: '50%',
            description: {
              cs: 'Investiční sektor',
              en: 'Investment sector',
            },
          },
        },
      ],
    },
    {
      name: 'minimumInvestment',
      type: 'text',
      // required: true,
      label: {
        cs: 'Minimální investice',
        en: 'Minimum Investment',
      },
      admin: {
        description: {
          cs: 'Minimální částka investice (např. "1 000 000 Kč", "100 Kč")',
          en: 'Minimum investment amount (e.g. "1,000,000 CZK", "100 CZK")',
        },
      },
    },
  ],
  timestamps: true,
}
