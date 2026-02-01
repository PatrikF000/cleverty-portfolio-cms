import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "investments" ALTER COLUMN "type" DROP NOT NULL;
  ALTER TABLE "investments" ALTER COLUMN "company" DROP NOT NULL;
  ALTER TABLE "investments" ALTER COLUMN "currency" DROP NOT NULL;
  ALTER TABLE "investments" ALTER COLUMN "lockup_period" DROP NOT NULL;
  ALTER TABLE "investments" ALTER COLUMN "sector" DROP NOT NULL;
  ALTER TABLE "investments" ALTER COLUMN "minimum_investment" DROP NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "investments" ALTER COLUMN "type" SET NOT NULL;
  ALTER TABLE "investments" ALTER COLUMN "company" SET NOT NULL;
  ALTER TABLE "investments" ALTER COLUMN "currency" SET NOT NULL;
  ALTER TABLE "investments" ALTER COLUMN "lockup_period" SET NOT NULL;
  ALTER TABLE "investments" ALTER COLUMN "sector" SET NOT NULL;
  ALTER TABLE "investments" ALTER COLUMN "minimum_investment" SET NOT NULL;`)
}
