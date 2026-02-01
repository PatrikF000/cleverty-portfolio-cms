import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_investments_currency" AS ENUM('CZK', 'EUR', 'USD');
  CREATE TYPE "public"."enum_investments_category" AS ENUM('A+', 'A', 'B+', 'B', 'C');
  ALTER TABLE "investments" ADD COLUMN "isin" varchar;
  ALTER TABLE "investments" ADD COLUMN "currency" "enum_investments_currency" DEFAULT 'CZK' NOT NULL;
  ALTER TABLE "investments" ADD COLUMN "nav" varchar;
  ALTER TABLE "investments" ADD COLUMN "category" "enum_investments_category" NOT NULL;
  ALTER TABLE "investments" ADD COLUMN "lockup_period" varchar NOT NULL;
  ALTER TABLE "investments" ADD COLUMN "expected_return" varchar;
  ALTER TABLE "investments" ADD COLUMN "liquidity" varchar;
  ALTER TABLE "investments" ADD COLUMN "standard_liquidity" varchar;
  ALTER TABLE "investments" ADD COLUMN "sector" varchar NOT NULL;
  ALTER TABLE "investments" ADD COLUMN "minimum_investment" varchar NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "investments" DROP COLUMN IF EXISTS "isin";
  ALTER TABLE "investments" DROP COLUMN IF EXISTS "currency";
  ALTER TABLE "investments" DROP COLUMN IF EXISTS "nav";
  ALTER TABLE "investments" DROP COLUMN IF EXISTS "category";
  ALTER TABLE "investments" DROP COLUMN IF EXISTS "lockup_period";
  ALTER TABLE "investments" DROP COLUMN IF EXISTS "expected_return";
  ALTER TABLE "investments" DROP COLUMN IF EXISTS "liquidity";
  ALTER TABLE "investments" DROP COLUMN IF EXISTS "standard_liquidity";
  ALTER TABLE "investments" DROP COLUMN IF EXISTS "sector";
  ALTER TABLE "investments" DROP COLUMN IF EXISTS "minimum_investment";
  DROP TYPE "public"."enum_investments_currency";
  DROP TYPE "public"."enum_investments_category";`)
}
