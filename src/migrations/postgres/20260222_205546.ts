import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Add with DEFAULT so existing rows get a value (PostgreSQL rejects NOT NULL otherwise)
  await db.execute(sql`
   ALTER TABLE "portfolios_items" ADD COLUMN "entry_fee" numeric NOT NULL DEFAULT 0;`)
  await db.execute(sql`
   ALTER TABLE "portfolios_items" ALTER COLUMN "entry_fee" DROP DEFAULT;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "portfolios_items" DROP COLUMN IF EXISTS "entry_fee";`)
}
