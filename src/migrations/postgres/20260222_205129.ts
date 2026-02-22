import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Add column with DEFAULT so existing rows get a value (PostgreSQL rejects NOT NULL otherwise)
  await db.execute(sql`
   ALTER TABLE "portfolios_items" ADD COLUMN "entry_fee" varchar NOT NULL DEFAULT '';`)
  // Remove default so new rows must supply a value if required by schema
  await db.execute(sql`
   ALTER TABLE "portfolios_items" ALTER COLUMN "entry_fee" DROP DEFAULT;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "portfolios_items" DROP COLUMN IF EXISTS "entry_fee";`)
}
