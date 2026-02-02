import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
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
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_fund_administrators_id_idx" ON "payload_preferences_rels" USING btree ("fund_administrators_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "payload_preferences_rels" DROP CONSTRAINT "payload_preferences_rels_fund_administrators_fk";
  
  DROP INDEX IF EXISTS "fund_administrators_email_idx";
  DROP INDEX IF EXISTS "payload_preferences_rels_fund_administrators_id_idx";
  ALTER TABLE "fund_administrators" DROP COLUMN IF EXISTS "reset_password_token";
  ALTER TABLE "fund_administrators" DROP COLUMN IF EXISTS "reset_password_expiration";
  ALTER TABLE "fund_administrators" DROP COLUMN IF EXISTS "salt";
  ALTER TABLE "fund_administrators" DROP COLUMN IF EXISTS "hash";
  ALTER TABLE "fund_administrators" DROP COLUMN IF EXISTS "login_attempts";
  ALTER TABLE "fund_administrators" DROP COLUMN IF EXISTS "lock_until";
  ALTER TABLE "payload_preferences_rels" DROP COLUMN IF EXISTS "fund_administrators_id";`)
}
