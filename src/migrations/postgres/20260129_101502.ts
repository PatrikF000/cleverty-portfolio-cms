import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_favPage_meta_twitter_card" AS ENUM('summary', 'summary_large_image', 'app', 'player');
  ALTER TABLE "favPage" ADD COLUMN "meta_og_image_id" integer;
  ALTER TABLE "favPage" ADD COLUMN "meta_twitter_card" "enum_favPage_meta_twitter_card" DEFAULT 'summary_large_image';
  ALTER TABLE "favPage" ADD COLUMN "meta_structured_data" varchar;
  ALTER TABLE "favPagestoone" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "favPagestoone" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "favPagestoone" ADD COLUMN "meta_keywords" varchar;
  ALTER TABLE "favPagestoone" ADD COLUMN "meta_og_title" varchar;
  ALTER TABLE "favPagestoone" ADD COLUMN "meta_og_description" varchar;
  DO $$ BEGIN
   ALTER TABLE "favPage" ADD CONSTRAINT "favPage_meta_og_image_id_media_id_fk" FOREIGN KEY ("meta_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "favPage_meta_meta_og_image_idx" ON "favPage" USING btree ("meta_og_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "favPage" DROP CONSTRAINT "favPage_meta_og_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "favPage_meta_meta_og_image_idx";
  ALTER TABLE "favPage" DROP COLUMN IF EXISTS "meta_og_image_id";
  ALTER TABLE "favPage" DROP COLUMN IF EXISTS "meta_twitter_card";
  ALTER TABLE "favPage" DROP COLUMN IF EXISTS "meta_structured_data";
  ALTER TABLE "favPagestoone" DROP COLUMN IF EXISTS "meta_title";
  ALTER TABLE "favPagestoone" DROP COLUMN IF EXISTS "meta_description";
  ALTER TABLE "favPagestoone" DROP COLUMN IF EXISTS "meta_keywords";
  ALTER TABLE "favPagestoone" DROP COLUMN IF EXISTS "meta_og_title";
  ALTER TABLE "favPagestoone" DROP COLUMN IF EXISTS "meta_og_description";
  DROP TYPE "public"."enum_favPage_meta_twitter_card";`)
}
