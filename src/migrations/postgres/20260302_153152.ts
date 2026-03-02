import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "investments" ADD COLUMN "sector_id" integer;
  DO $$ BEGIN
   ALTER TABLE "investments" ADD CONSTRAINT "investments_sector_id_sectors_id_fk" FOREIGN KEY ("sector_id") REFERENCES "public"."sectors"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "investments_sector_idx" ON "investments" USING btree ("sector_id");
  ALTER TABLE "investments" DROP COLUMN IF EXISTS "sector";
  DROP TYPE "public"."enum_investments_sector";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_investments_sector" AS ENUM('komercni-nemovitosti', 'uvery', 'energetika', 'dluhopisy', 'zajistene-pohledavky', 'nezajistene-pohledavky', 'nemovitosti-rezidencni-development', 'development-retail-parku', 'private-equity', 'komercni-i-rezidencni-nemovitosti', 'senior-house', 'hotelnictvi', 'repo-operace', 'akcie-a-dluhopisy', 'akcie', 'obranny-prumysl', 'investicni-nastroje', 'hedge-fondy', 'etf-fondy', 'virtualni-meny', 'rezidencni-nemovitosti', 'nastroje-penezniho-trhu', 'pohledavky', 'kratkodobe-investice', 'financni-sluzby', 'smlouva-o-uveru');
  ALTER TABLE "investments" DROP CONSTRAINT "investments_sector_id_sectors_id_fk";
  
  DROP INDEX IF EXISTS "investments_sector_idx";
  ALTER TABLE "investments" ADD COLUMN "sector" "enum_investments_sector";
  ALTER TABLE "investments" DROP COLUMN IF EXISTS "sector_id";`)
}
