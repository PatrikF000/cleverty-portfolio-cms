import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_investments_sector" AS ENUM('komercni-nemovitosti', 'uvery', 'energetika', 'dluhopisy', 'zajistene-pohledavky', 'nezajistene-pohledavky', 'nemovitosti-rezidencni-development', 'development-retail-parku', 'private-equity', 'komercni-i-rezidencni-nemovitosti', 'senior-house', 'hotelnictvi', 'repo-operace', 'akcie-a-dluhopisy', 'akcie', 'obranny-prumysl', 'investicni-nastroje', 'hedge-fondy', 'etf-fondy', 'virtualni-meny', 'rezidencni-nemovitosti', 'nastroje-penezniho-trhu', 'pohledavky', 'kratkodobe-investice');
  ALTER TABLE "investments" ALTER COLUMN "expected_return" SET DATA TYPE numeric USING CASE WHEN expected_return IS NULL OR expected_return = '' THEN NULL ELSE regexp_replace(expected_return, '[^0-9.]', '', 'g')::numeric END;
  ALTER TABLE "investments" ALTER COLUMN "sector" SET DATA TYPE enum_investments_sector USING sector::enum_investments_sector;
  ALTER TABLE "investments" ADD COLUMN "company_id" integer;
  ALTER TABLE "investments" ADD COLUMN "no_exit_fee" varchar;
  DO $$ BEGIN
   ALTER TABLE "investments" ADD CONSTRAINT "investments_company_id_investment_companies_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."investment_companies"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "investments_company_idx" ON "investments" USING btree ("company_id");
  ALTER TABLE "investments" DROP COLUMN IF EXISTS "company";
  ALTER TABLE "investments" DROP COLUMN IF EXISTS "lockup_period";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "investments" DROP CONSTRAINT "investments_company_id_investment_companies_id_fk";
  
  DROP INDEX IF EXISTS "investments_company_idx";
  ALTER TABLE "investments" ALTER COLUMN "expected_return" SET DATA TYPE varchar;
  ALTER TABLE "investments" ALTER COLUMN "sector" SET DATA TYPE varchar;
  ALTER TABLE "investments" ADD COLUMN "company" varchar;
  ALTER TABLE "investments" ADD COLUMN "lockup_period" varchar;
  ALTER TABLE "investments" DROP COLUMN IF EXISTS "company_id";
  ALTER TABLE "investments" DROP COLUMN IF EXISTS "no_exit_fee";
  DROP TYPE "public"."enum_investments_sector";`)
}
