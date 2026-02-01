import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "users_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"portfolios_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "portfolios" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"user_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "portfolios_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"investments_id" integer
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "portfolios_id" integer;
  DO $$ BEGIN
   ALTER TABLE "users_rels" ADD CONSTRAINT "users_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "users_rels" ADD CONSTRAINT "users_rels_portfolios_fk" FOREIGN KEY ("portfolios_id") REFERENCES "public"."portfolios"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "portfolios" ADD CONSTRAINT "portfolios_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
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
  
  CREATE INDEX IF NOT EXISTS "users_rels_order_idx" ON "users_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "users_rels_parent_idx" ON "users_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "users_rels_path_idx" ON "users_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "users_rels_portfolios_id_idx" ON "users_rels" USING btree ("portfolios_id");
  CREATE INDEX IF NOT EXISTS "portfolios_user_idx" ON "portfolios" USING btree ("user_id");
  CREATE INDEX IF NOT EXISTS "portfolios_updated_at_idx" ON "portfolios" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "portfolios_created_at_idx" ON "portfolios" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "portfolios_rels_order_idx" ON "portfolios_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "portfolios_rels_parent_idx" ON "portfolios_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "portfolios_rels_path_idx" ON "portfolios_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "portfolios_rels_investments_id_idx" ON "portfolios_rels" USING btree ("investments_id");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_portfolios_fk" FOREIGN KEY ("portfolios_id") REFERENCES "public"."portfolios"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_portfolios_id_idx" ON "payload_locked_documents_rels" USING btree ("portfolios_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "users_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "portfolios" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "portfolios_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "users_rels" CASCADE;
  DROP TABLE "portfolios" CASCADE;
  DROP TABLE "portfolios_rels" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_portfolios_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_portfolios_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "portfolios_id";`)
}
