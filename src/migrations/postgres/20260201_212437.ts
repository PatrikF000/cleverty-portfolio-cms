import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "fund_administrators" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"password" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "fund_administrators_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"portfolios_id" integer
  );
  
  ALTER TABLE "users_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "users_rels" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "fund_administrators_id" integer;
  ALTER TABLE "payload_preferences_rels" ADD COLUMN "fund_administrators_id" integer;
  DO $$ BEGIN
   ALTER TABLE "fund_administrators_rels" ADD CONSTRAINT "fund_administrators_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."fund_administrators"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "fund_administrators_rels" ADD CONSTRAINT "fund_administrators_rels_portfolios_fk" FOREIGN KEY ("portfolios_id") REFERENCES "public"."portfolios"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "fund_administrators_updated_at_idx" ON "fund_administrators" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "fund_administrators_created_at_idx" ON "fund_administrators" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "fund_administrators_email_idx" ON "fund_administrators" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "fund_administrators_rels_order_idx" ON "fund_administrators_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "fund_administrators_rels_parent_idx" ON "fund_administrators_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "fund_administrators_rels_path_idx" ON "fund_administrators_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "fund_administrators_rels_portfolios_id_idx" ON "fund_administrators_rels" USING btree ("portfolios_id");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_fund_administrators_fk" FOREIGN KEY ("fund_administrators_id") REFERENCES "public"."fund_administrators"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_fund_administrators_fk" FOREIGN KEY ("fund_administrators_id") REFERENCES "public"."fund_administrators"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_fund_administrators_id_idx" ON "payload_locked_documents_rels" USING btree ("fund_administrators_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_fund_administrators_id_idx" ON "payload_preferences_rels" USING btree ("fund_administrators_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "users_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"portfolios_id" integer
  );
  
  ALTER TABLE "fund_administrators" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "fund_administrators_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "fund_administrators" CASCADE;
  DROP TABLE "fund_administrators_rels" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_fund_administrators_fk";
  
  ALTER TABLE "payload_preferences_rels" DROP CONSTRAINT "payload_preferences_rels_fund_administrators_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_fund_administrators_id_idx";
  DROP INDEX IF EXISTS "payload_preferences_rels_fund_administrators_id_idx";
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
  
  CREATE INDEX IF NOT EXISTS "users_rels_order_idx" ON "users_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "users_rels_parent_idx" ON "users_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "users_rels_path_idx" ON "users_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "users_rels_portfolios_id_idx" ON "users_rels" USING btree ("portfolios_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "fund_administrators_id";
  ALTER TABLE "payload_preferences_rels" DROP COLUMN IF EXISTS "fund_administrators_id";`)
}
