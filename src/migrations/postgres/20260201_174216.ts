import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "investment_companies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "investment_companies_id" integer;
  CREATE INDEX IF NOT EXISTS "investment_companies_updated_at_idx" ON "investment_companies" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "investment_companies_created_at_idx" ON "investment_companies" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_investment_companies_fk" FOREIGN KEY ("investment_companies_id") REFERENCES "public"."investment_companies"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_investment_companies_id_idx" ON "payload_locked_documents_rels" USING btree ("investment_companies_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "investment_companies" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "investment_companies" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_investment_companies_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_investment_companies_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "investment_companies_id";`)
}
