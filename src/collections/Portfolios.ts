import {
    authenticatedAdminOrOwnPortfolio,
    authenticatedAdminOrOwnPortfolioCreate,
    authenticatedAdminOrOwnPortfolioUpdate,
  } from '@/access/authenticatedAdminOrOwnPortfolio'
  import type { CollectionConfig } from 'payload'
  
  export const Portfolios: CollectionConfig = {
    slug: 'portfolios',
    labels: {
      singular: {
        cs: 'Portfolio',
        en: 'Portfolio',
      },
      plural: {
        cs: 'Portfolia',
        en: 'Portfolios',
      },
    },
    access: {
      read: () => true,
      create: () => true,
      update: () => true,
      delete: () => true,
      // read: authenticatedAdminOrOwnPortfolio,
      // create: authenticatedAdminOrOwnPortfolioCreate, // Users can create their own portfolios
      // update: authenticatedAdminOrOwnPortfolioUpdate, // Users can update their own portfolios
      // delete: authenticatedAdminOrOwnPortfolioUpdate, // Users can delete their own portfolios
    },
    admin: {
      useAsTitle: 'name',
      defaultColumns: ['name', 'user', 'items', 'totalInvestment', 'createdAt'],
    },
    fields: [
      {
        name: 'name',
        type: 'text',
        required: true,
        label: {
          cs: 'Název',
          en: 'Name',
        },
      },
      {
        name: 'user',
        type: 'relationship',
        relationTo: 'fundAdministrators',
        required: true,
        hasMany: false,
        label: {
          cs: 'Administrátor fondu',
          en: 'Fund Administrator',
        },
      },
      {
        name: 'items',
        type: 'array',
        label: {
          cs: 'Investice v portfoliu',
          en: 'Portfolio Items',
        },
        admin: {
          description: {
            cs: 'Seznam investic v portfoliu s výší vkladu pro každou investici',
            en: 'List of investments in the portfolio with deposit amount for each investment',
          },
        },
        fields: [
          {
            name: 'investment',
            type: 'relationship',
            relationTo: 'investments',
            required: true,
            hasMany: false,
            label: {
              cs: 'Investice',
              en: 'Investment',
            },
          },
          {
            name: 'depositAmount',
            type: 'number',
            required: true,
            min: 0,
            admin: {
              step: 0.01,
              description: {
                cs: 'Výše vkladu pro tuto investici',
                en: 'Deposit amount for this investment',
              },
            },
            label: {
              cs: 'Výše vkladu',
              en: 'Deposit Amount',
            },
          },
          {
            name: 'currency',
            type: 'text',
            required: true,
            defaultValue: 'CZK',
            label: {
              cs: 'Měna',
              en: 'Currency',
            },
          },
        ],
        minRows: 0,
      },
      {
        name: 'totalInvestment',
        type: 'number',
        admin: {
          readOnly: true,
          description: {
            cs: 'Celková investice (vypočítáno automaticky)',
            en: 'Total investment (calculated automatically)',
          },
        },
        label: {
          cs: 'Celková investice',
          en: 'Total Investment',
        },
        hooks: {
          beforeValidate: [
            async ({ data, operation }) => {
              if (!data) return undefined
              const portfolioData = data
              if (operation === 'create' || operation === 'update') {
                if (portfolioData.items && Array.isArray(portfolioData.items)) {
                  const total = portfolioData.items.reduce((sum: number, item: any) => {
                    return sum + (item.depositAmount || 0)
                  }, 0)
                  return total
                }
              }
              return portfolioData.totalInvestment
            },
          ],
        },
      },
      {
        name: 'averageReturn',
        type: 'number',
        admin: {
          readOnly: true,
          description: {
            cs: 'Průměrný výnos (vypočítáno automaticky)',
            en: 'Average return (calculated automatically)',
          },
        },
        label: {
          cs: 'Průměrný výnos',
          en: 'Average Return',
        },
        hooks: {
          beforeValidate: [
            async ({ data, operation, req }) => {
              if (!data) return undefined
              const portfolioData = data
              if (operation === 'create' || operation === 'update') {
                if (portfolioData.items && Array.isArray(portfolioData.items)) {
                  // Fetch investment details to get expectedReturn
                  const investmentIds = portfolioData.items
                    .map((item: any) => item.investment)
                    .filter(Boolean)
  
                  if (investmentIds.length > 0) {
                    const investments = await req.payload.find({
                      collection: 'investments',
                      where: {
                        id: {
                          in: investmentIds,
                        },
                      },
                    })
  
                    const investmentMap = new Map(
                      investments.docs.map((inv: any) => [inv.id, inv])
                    )
  
                    let weightedSum = 0
                    let totalAmount = 0
  
                    portfolioData.items.forEach((item: any) => {
                      const investment = investmentMap.get(item.investment)
                      if (investment && item.depositAmount) {
                        // expectedReturn is a number, not a string
                        const returnValue = typeof investment.expectedReturn === 'number' 
                          ? investment.expectedReturn 
                          : parseFloat(String(investment.expectedReturn || '0'))
                        weightedSum += (returnValue * item.depositAmount) / 100
                        totalAmount += item.depositAmount
                      }
                    })
  
                    return totalAmount > 0
                      ? parseFloat(((weightedSum / totalAmount) * 100).toFixed(2))
                      : 0
                  }
                }
              }
              return portfolioData.averageReturn || 0
            },
          ],
        },
      },
      {
        name: 'investmentCount',
        type: 'number',
        admin: {
          readOnly: true,
          description: {
            cs: 'Počet investic (vypočítáno automaticky)',
            en: 'Number of investments (calculated automatically)',
          },
        },
        label: {
          cs: 'Počet investic',
          en: 'Investment Count',
        },
        hooks: {
          beforeValidate: [
            async ({ data, operation }) => {
              if (!data) return undefined
              const portfolioData = data
              if (operation === 'create' || operation === 'update') {
                if (portfolioData.items && Array.isArray(portfolioData.items)) {
                  return portfolioData.items.length
                }
              }
              return portfolioData.investmentCount || 0
            },
          ],
        },
      },
    ],
    timestamps: true,
  }
  