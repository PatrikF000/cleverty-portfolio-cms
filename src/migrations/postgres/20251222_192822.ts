import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "share_blocks_content" ADD COLUMN "content_settings_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "share_blocks_features" ADD COLUMN "features_settings_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "share_blocks_flats_snippets" ADD COLUMN "flats_set_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "share_blocks_image_pins" ADD COLUMN "image_pins_set_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "share_blocks_news_snippets" ADD COLUMN "news_set_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_content" ADD COLUMN "content_settings_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_features" ADD COLUMN "features_settings_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_flats_snippets" ADD COLUMN "flats_set_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_image_pins" ADD COLUMN "image_pins_set_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_news_snippets" ADD COLUMN "news_set_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_content" ADD COLUMN "content_settings_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_features" ADD COLUMN "features_settings_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_flats_snippets" ADD COLUMN "flats_set_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_image_pins" ADD COLUMN "image_pins_set_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_news_snippets" ADD COLUMN "news_set_centered_section_header" boolean DEFAULT false;
  DO $$ BEGIN
   ALTER TABLE "floors" ADD COLUMN "floor_plan_picker_chunks_id" integer;
  EXCEPTION
   WHEN duplicate_column THEN null;
  END $$;
  ALTER TABLE "flDet_blocks_content" ADD COLUMN "content_settings_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "flDet_blocks_features" ADD COLUMN "features_settings_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "flDet_blocks_flats_snippets" ADD COLUMN "flats_set_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "flDet_blocks_image_pins" ADD COLUMN "image_pins_set_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "flDet_blocks_news_snippets" ADD COLUMN "news_set_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "newsDet_blocks_content" ADD COLUMN "content_settings_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "newsDet_blocks_features" ADD COLUMN "features_settings_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "newsDet_blocks_flats_snippets" ADD COLUMN "flats_set_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "newsDet_blocks_image_pins" ADD COLUMN "image_pins_set_centered_section_header" boolean DEFAULT false;
  ALTER TABLE "newsDet_blocks_news_snippets" ADD COLUMN "news_set_centered_section_header" boolean DEFAULT false;
  DO $$ BEGIN
   ALTER TABLE "floors" ADD CONSTRAINT "floors_floor_plan_picker_chunks_id_media_id_fk" FOREIGN KEY ("floor_plan_picker_chunks_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "floors_floor_plan_picker_floor_plan_picker_chunks_idx" ON "floors" USING btree ("floor_plan_picker_chunks_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "floors" DROP CONSTRAINT "floors_floor_plan_picker_chunks_id_media_id_fk";
  
  DROP INDEX IF EXISTS "floors_floor_plan_picker_floor_plan_picker_chunks_idx";
  ALTER TABLE "share_blocks_content" DROP COLUMN IF EXISTS "content_settings_centered_section_header";
  ALTER TABLE "share_blocks_features" DROP COLUMN IF EXISTS "features_settings_centered_section_header";
  ALTER TABLE "share_blocks_flats_snippets" DROP COLUMN IF EXISTS "flats_set_centered_section_header";
  ALTER TABLE "share_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_centered_section_header";
  ALTER TABLE "share_blocks_news_snippets" DROP COLUMN IF EXISTS "news_set_centered_section_header";
  ALTER TABLE "pages_blocks_content" DROP COLUMN IF EXISTS "content_settings_centered_section_header";
  ALTER TABLE "pages_blocks_features" DROP COLUMN IF EXISTS "features_settings_centered_section_header";
  ALTER TABLE "pages_blocks_flats_snippets" DROP COLUMN IF EXISTS "flats_set_centered_section_header";
  ALTER TABLE "pages_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_centered_section_header";
  ALTER TABLE "pages_blocks_news_snippets" DROP COLUMN IF EXISTS "news_set_centered_section_header";
  ALTER TABLE "_pages_v_blocks_content" DROP COLUMN IF EXISTS "content_settings_centered_section_header";
  ALTER TABLE "_pages_v_blocks_features" DROP COLUMN IF EXISTS "features_settings_centered_section_header";
  ALTER TABLE "_pages_v_blocks_flats_snippets" DROP COLUMN IF EXISTS "flats_set_centered_section_header";
  ALTER TABLE "_pages_v_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_centered_section_header";
  ALTER TABLE "_pages_v_blocks_news_snippets" DROP COLUMN IF EXISTS "news_set_centered_section_header";
  ALTER TABLE "floors" DROP COLUMN IF EXISTS "floor_plan_picker_chunks_id";
  ALTER TABLE "flDet_blocks_content" DROP COLUMN IF EXISTS "content_settings_centered_section_header";
  ALTER TABLE "flDet_blocks_features" DROP COLUMN IF EXISTS "features_settings_centered_section_header";
  ALTER TABLE "flDet_blocks_flats_snippets" DROP COLUMN IF EXISTS "flats_set_centered_section_header";
  ALTER TABLE "flDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_centered_section_header";
  ALTER TABLE "flDet_blocks_news_snippets" DROP COLUMN IF EXISTS "news_set_centered_section_header";
  ALTER TABLE "newsDet_blocks_content" DROP COLUMN IF EXISTS "content_settings_centered_section_header";
  ALTER TABLE "newsDet_blocks_features" DROP COLUMN IF EXISTS "features_settings_centered_section_header";
  ALTER TABLE "newsDet_blocks_flats_snippets" DROP COLUMN IF EXISTS "flats_set_centered_section_header";
  ALTER TABLE "newsDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_centered_section_header";
  ALTER TABLE "newsDet_blocks_news_snippets" DROP COLUMN IF EXISTS "news_set_centered_section_header";`)
}
