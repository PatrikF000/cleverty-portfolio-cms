import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "portfolios_items" ADD COLUMN "current_value" numeric;
  ALTER TABLE "portfolios_items" ADD COLUMN "additional_investment" numeric;
  ALTER TABLE "portfolios_items" ADD COLUMN "total_value" numeric;
  ALTER TABLE "portfolios" ADD COLUMN "note" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "portfolios_items" DROP COLUMN IF EXISTS "current_value";
  ALTER TABLE "portfolios_items" DROP COLUMN IF EXISTS "additional_investment";
  ALTER TABLE "portfolios_items" DROP COLUMN IF EXISTS "total_value";
  ALTER TABLE "portfolios" DROP COLUMN IF EXISTS "note";`)
}
