import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_roles_permissions_portfolios" AS ENUM('create', 'read');
  CREATE TYPE "public"."enum_roles_permissions_fund_administrators" AS ENUM('create', 'read');
  CREATE TYPE "public"."enum_roles_permissions_investment_companies" AS ENUM('create', 'read');
  CREATE TABLE IF NOT EXISTS "roles_permissions_portfolios" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_roles_permissions_portfolios",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "roles_permissions_fund_administrators" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_roles_permissions_fund_administrators",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "roles_permissions_investment_companies" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_roles_permissions_investment_companies",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  ALTER TABLE "payload_preferences_rels" DROP CONSTRAINT "payload_preferences_rels_fund_administrators_fk";
  
  DROP INDEX IF EXISTS "fund_administrators_email_idx";
  DROP INDEX IF EXISTS "payload_preferences_rels_fund_administrators_id_idx";
  DO $$ BEGIN
   ALTER TABLE "roles_permissions_portfolios" ADD CONSTRAINT "roles_permissions_portfolios_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "roles_permissions_fund_administrators" ADD CONSTRAINT "roles_permissions_fund_administrators_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "roles_permissions_investment_companies" ADD CONSTRAINT "roles_permissions_investment_companies_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "roles_permissions_portfolios_order_idx" ON "roles_permissions_portfolios" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "roles_permissions_portfolios_parent_idx" ON "roles_permissions_portfolios" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "roles_permissions_fund_administrators_order_idx" ON "roles_permissions_fund_administrators" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "roles_permissions_fund_administrators_parent_idx" ON "roles_permissions_fund_administrators" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "roles_permissions_investment_companies_order_idx" ON "roles_permissions_investment_companies" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "roles_permissions_investment_companies_parent_idx" ON "roles_permissions_investment_companies" USING btree ("parent_id");
  ALTER TABLE "fund_administrators" DROP COLUMN IF EXISTS "reset_password_token";
  ALTER TABLE "fund_administrators" DROP COLUMN IF EXISTS "reset_password_expiration";
  ALTER TABLE "fund_administrators" DROP COLUMN IF EXISTS "salt";
  ALTER TABLE "fund_administrators" DROP COLUMN IF EXISTS "hash";
  ALTER TABLE "fund_administrators" DROP COLUMN IF EXISTS "login_attempts";
  ALTER TABLE "fund_administrators" DROP COLUMN IF EXISTS "lock_until";
  ALTER TABLE "payload_preferences_rels" DROP COLUMN IF EXISTS "fund_administrators_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "roles_permissions_portfolios" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "roles_permissions_fund_administrators" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "roles_permissions_investment_companies" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "roles_permissions_portfolios" CASCADE;
  DROP TABLE "roles_permissions_fund_administrators" CASCADE;
  DROP TABLE "roles_permissions_investment_companies" CASCADE;
  ALTER TABLE "fund_administrators" ADD COLUMN "reset_password_token" varchar;
  ALTER TABLE "fund_administrators" ADD COLUMN "reset_password_expiration" timestamp(3) with time zone;
  ALTER TABLE "fund_administrators" ADD COLUMN "salt" varchar;
  ALTER TABLE "fund_administrators" ADD COLUMN "hash" varchar;
  ALTER TABLE "fund_administrators" ADD COLUMN "login_attempts" numeric DEFAULT 0;
  ALTER TABLE "fund_administrators" ADD COLUMN "lock_until" timestamp(3) with time zone;
  ALTER TABLE "payload_preferences_rels" ADD COLUMN "fund_administrators_id" integer;
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_fund_administrators_fk" FOREIGN KEY ("fund_administrators_id") REFERENCES "public"."fund_administrators"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE UNIQUE INDEX IF NOT EXISTS "fund_administrators_email_idx" ON "fund_administrators" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_fund_administrators_id_idx" ON "payload_preferences_rels" USING btree ("fund_administrators_id");
  DROP TYPE "public"."enum_roles_permissions_portfolios";
  DROP TYPE "public"."enum_roles_permissions_fund_administrators";
  DROP TYPE "public"."enum_roles_permissions_investment_companies";`)
}
