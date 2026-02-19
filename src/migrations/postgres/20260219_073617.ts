import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_investments_sector" ADD VALUE 'financni-sluzby';
  ALTER TYPE "public"."enum_investments_sector" ADD VALUE 'smlouva-o-uveru';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "public"."investments" ALTER COLUMN "sector" SET DATA TYPE text;
  DROP TYPE "public"."enum_investments_sector";
  CREATE TYPE "public"."enum_investments_sector" AS ENUM('komercni-nemovitosti', 'uvery', 'energetika', 'dluhopisy', 'zajistene-pohledavky', 'nezajistene-pohledavky', 'nemovitosti-rezidencni-development', 'development-retail-parku', 'private-equity', 'komercni-i-rezidencni-nemovitosti', 'senior-house', 'hotelnictvi', 'repo-operace', 'akcie-a-dluhopisy', 'akcie', 'obranny-prumysl', 'investicni-nastroje', 'hedge-fondy', 'etf-fondy', 'virtualni-meny', 'rezidencni-nemovitosti', 'nastroje-penezniho-trhu', 'pohledavky', 'kratkodobe-investice');
  ALTER TABLE "public"."investments" ALTER COLUMN "sector" SET DATA TYPE "public"."enum_investments_sector" USING "sector"::"public"."enum_investments_sector";`)
}
