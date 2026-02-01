import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "portfolios_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"investment_id" integer NOT NULL,
  	"deposit_amount" numeric NOT NULL,
  	"currency" varchar DEFAULT 'CZK' NOT NULL
  );
  
  DROP TABLE "portfolios_rels" CASCADE;
  ALTER TABLE "portfolios" ADD COLUMN "total_investment" numeric;
  ALTER TABLE "portfolios" ADD COLUMN "average_return" numeric;
  ALTER TABLE "portfolios" ADD COLUMN "investment_count" numeric;
  DO $$ BEGIN
   ALTER TABLE "portfolios_items" ADD CONSTRAINT "portfolios_items_investment_id_investments_id_fk" FOREIGN KEY ("investment_id") REFERENCES "public"."investments"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "portfolios_items" ADD CONSTRAINT "portfolios_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolios"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "portfolios_items_order_idx" ON "portfolios_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolios_items_parent_id_idx" ON "portfolios_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolios_items_investment_idx" ON "portfolios_items" USING btree ("investment_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "portfolios_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"investments_id" integer
  );
  
  DROP TABLE "portfolios_items" CASCADE;
  DO $$ BEGIN
   ALTER TABLE "portfolios_rels" ADD CONSTRAINT "portfolios_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."portfolios"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "portfolios_rels" ADD CONSTRAINT "portfolios_rels_investments_fk" FOREIGN KEY ("investments_id") REFERENCES "public"."investments"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "portfolios_rels_order_idx" ON "portfolios_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "portfolios_rels_parent_idx" ON "portfolios_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "portfolios_rels_path_idx" ON "portfolios_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "portfolios_rels_investments_id_idx" ON "portfolios_rels" USING btree ("investments_id");
  ALTER TABLE "portfolios" DROP COLUMN IF EXISTS "total_investment";
  ALTER TABLE "portfolios" DROP COLUMN IF EXISTS "average_return";
  ALTER TABLE "portfolios" DROP COLUMN IF EXISTS "investment_count";`)
}
