import {  Role } from '@/payload-types'
import { Payload } from 'payload'

export const seedAdminUser = async (payload: Payload): Promise<void> => {
  try {
    // Check if database tables exist by attempting to query roles
    const result = await payload.find({
      collection: 'roles',
      //limit: 1,
    })
    let role: Role | null = null
    if (result.docs.length === 0) {
      role = await payload.create({
        collection: 'roles',
        data: {
          name: 'SuperAdmin',
          permissions: {
            investments: ['create', 'read', 'update', 'delete'],
            investmentCompanies: ['create', 'read', 'update', 'delete'],
            fundAdministrators: ['create', 'read', 'update', 'delete'],
            portfolios: ['create', 'read', 'update', 'delete'],
            media: ['create', 'read', 'update', 'delete'],
          },
        },
      })
      console.log('✅ Role user seeded')
    }
    const existingAdmins = await payload.find({
      collection: 'users',
      limit: 1,
    })
    if (existingAdmins.totalDocs === 0) {
      await payload.create({
        collection: 'users',
        data: {
          email: process.env.DEFAULT_ADMIN_EMAIL || '',
          password: process.env.DEFAULT_ADMIN_PW,
          name: process.env.DEFAULT_ADMIN_NAME,
          role: role?.id || 1, // musí odpovídat tvému select fieldu
        },
      })
      console.log('✅ Admin user seeded')
    } else {
      console.log('ℹ️ Admin user already exists')
    }
  } catch (error: any) {
    // Handle case where database tables don't exist yet
    if (
      error?.code === '42P01' ||
      error?.message?.includes('does not exist') ||
      error?.message?.includes('relation')
    ) {
      console.warn(
        '⚠️  Database tables not found. Please run migrations first: pnpm migrate',
      )
      console.warn('   Skipping admin user seeding until migrations are complete.')
      return
    }
    // Re-throw other errors
    console.error('❌ Error seeding admin user:', error)
    throw error
  }

  return
}
