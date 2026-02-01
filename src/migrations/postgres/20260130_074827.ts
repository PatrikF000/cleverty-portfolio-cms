import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_investments_type" AS ENUM('FKI', 'OPF', 'DVKF', 'SUUV', 'SUVC');
  CREATE TABLE IF NOT EXISTS "investments" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum_investments_type" NOT NULL,
  	"company" varchar NOT NULL,
  	"investment_name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "investments_id" integer;
  CREATE INDEX IF NOT EXISTS "investments_updated_at_idx" ON "investments" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "investments_created_at_idx" ON "investments" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_investments_fk" FOREIGN KEY ("investments_id") REFERENCES "public"."investments"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_investments_id_idx" ON "payload_locked_documents_rels" USING btree ("investments_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "investments" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "investments" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_investments_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_investments_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "investments_id";
  DROP TYPE "public"."enum_investments_type";`)
}
