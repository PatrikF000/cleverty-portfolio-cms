import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_share_blocks_banner_banner_button_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_share_blocks_features_features_settings_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_share_blocks_flats_snippets_flats_set_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_share_blocks_gallery_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_share_blocks_hero_main_buttons_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_share_blocks_hero_secondary_buttons_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_share_blocks_highlighted_text_buttons_button_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_share_blocks_img_content_accordion_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_share_blocks_news_snippets_news_set_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_pages_blocks_banner_banner_button_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_pages_blocks_features_features_settings_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_pages_blocks_gallery_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_pages_blocks_hero_main_buttons_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_pages_blocks_hero_secondary_buttons_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_pages_blocks_highlighted_text_buttons_button_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_pages_blocks_img_content_accordion_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_pages_blocks_news_snippets_news_set_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum__pages_v_blocks_banner_banner_button_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum__pages_v_blocks_features_features_settings_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum__pages_v_blocks_gallery_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum__pages_v_blocks_hero_main_buttons_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum__pages_v_blocks_hero_secondary_buttons_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum__pages_v_blocks_highlighted_text_buttons_button_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum__pages_v_blocks_img_content_accordion_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_globalheader_nav_items_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_globalheader_cta_buttons_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_globalfooter_bottom_links_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_flats_gallery_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_flDet_blocks_hero_secondary_buttons_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_flDet_blocks_banner_banner_button_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_flDet_blocks_features_features_settings_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_flDet_blocks_gallery_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_flDet_blocks_highlighted_text_buttons_button_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_flDet_blocks_img_content_accordion_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_flDet_blocks_news_snippets_news_set_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_newsDet_blocks_banner_banner_button_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_newsDet_blocks_features_features_settings_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_newsDet_blocks_flats_snippets_flats_set_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_newsDet_blocks_gallery_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_newsDet_blocks_hero_main_buttons_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_newsDet_blocks_hero_secondary_buttons_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_newsDet_blocks_highlighted_text_buttons_button_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_newsDet_blocks_img_content_accordion_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TYPE "public"."enum_newsDet_blocks_news_snippets_news_set_link_relation" ADD VALUE 'documents' BEFORE 'anchor';
  ALTER TABLE "share_rels" ADD COLUMN "documents_id" integer;
  ALTER TABLE "pages_rels" ADD COLUMN "documents_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "documents_id" integer;
  ALTER TABLE "globalheader_rels" ADD COLUMN "documents_id" integer;
  ALTER TABLE "globalfooter_rels" ADD COLUMN "documents_id" integer;
  ALTER TABLE "flats_rels" ADD COLUMN "documents_id" integer;
  ALTER TABLE "flDet_rels" ADD COLUMN "documents_id" integer;
  ALTER TABLE "newsDet_rels" ADD COLUMN "documents_id" integer;
  DO $$ BEGIN
   ALTER TABLE "share_rels" ADD CONSTRAINT "share_rels_documents_fk" FOREIGN KEY ("documents_id") REFERENCES "public"."documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_documents_fk" FOREIGN KEY ("documents_id") REFERENCES "public"."documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_documents_fk" FOREIGN KEY ("documents_id") REFERENCES "public"."documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "globalheader_rels" ADD CONSTRAINT "globalheader_rels_documents_fk" FOREIGN KEY ("documents_id") REFERENCES "public"."documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "globalfooter_rels" ADD CONSTRAINT "globalfooter_rels_documents_fk" FOREIGN KEY ("documents_id") REFERENCES "public"."documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_rels" ADD CONSTRAINT "flats_rels_documents_fk" FOREIGN KEY ("documents_id") REFERENCES "public"."documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_rels" ADD CONSTRAINT "flDet_rels_documents_fk" FOREIGN KEY ("documents_id") REFERENCES "public"."documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_rels" ADD CONSTRAINT "newsDet_rels_documents_fk" FOREIGN KEY ("documents_id") REFERENCES "public"."documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "share_rels_documents_id_idx" ON "share_rels" USING btree ("documents_id","locale");
  CREATE INDEX IF NOT EXISTS "pages_rels_documents_id_idx" ON "pages_rels" USING btree ("documents_id","locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_documents_id_idx" ON "_pages_v_rels" USING btree ("documents_id","locale");
  CREATE INDEX IF NOT EXISTS "globalheader_rels_documents_id_idx" ON "globalheader_rels" USING btree ("documents_id","locale");
  CREATE INDEX IF NOT EXISTS "globalfooter_rels_documents_id_idx" ON "globalfooter_rels" USING btree ("documents_id");
  CREATE INDEX IF NOT EXISTS "flats_rels_documents_id_idx" ON "flats_rels" USING btree ("documents_id","locale");
  CREATE INDEX IF NOT EXISTS "flDet_rels_documents_id_idx" ON "flDet_rels" USING btree ("documents_id","locale");
  CREATE INDEX IF NOT EXISTS "newsDet_rels_documents_id_idx" ON "newsDet_rels" USING btree ("documents_id","locale");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "share_rels" DROP CONSTRAINT "share_rels_documents_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_documents_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_documents_fk";
  
  ALTER TABLE "globalheader_rels" DROP CONSTRAINT "globalheader_rels_documents_fk";
  
  ALTER TABLE "globalfooter_rels" DROP CONSTRAINT "globalfooter_rels_documents_fk";
  
  ALTER TABLE "flats_rels" DROP CONSTRAINT "flats_rels_documents_fk";
  
  ALTER TABLE "flDet_rels" DROP CONSTRAINT "flDet_rels_documents_fk";
  
  ALTER TABLE "newsDet_rels" DROP CONSTRAINT "newsDet_rels_documents_fk";
  
  DROP INDEX IF EXISTS "share_rels_documents_id_idx";
  DROP INDEX IF EXISTS "pages_rels_documents_id_idx";
  DROP INDEX IF EXISTS "_pages_v_rels_documents_id_idx";
  DROP INDEX IF EXISTS "globalheader_rels_documents_id_idx";
  DROP INDEX IF EXISTS "globalfooter_rels_documents_id_idx";
  DROP INDEX IF EXISTS "flats_rels_documents_id_idx";
  DROP INDEX IF EXISTS "flDet_rels_documents_id_idx";
  DROP INDEX IF EXISTS "newsDet_rels_documents_id_idx";
  ALTER TABLE "share_rels" DROP COLUMN IF EXISTS "documents_id";
  ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "documents_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "documents_id";
  ALTER TABLE "globalheader_rels" DROP COLUMN IF EXISTS "documents_id";
  ALTER TABLE "globalfooter_rels" DROP COLUMN IF EXISTS "documents_id";
  ALTER TABLE "flats_rels" DROP COLUMN IF EXISTS "documents_id";
  ALTER TABLE "flDet_rels" DROP COLUMN IF EXISTS "documents_id";
  ALTER TABLE "newsDet_rels" DROP COLUMN IF EXISTS "documents_id";
  ALTER TABLE "public"."share_blocks_banner" ALTER COLUMN "banner_button_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_banner_banner_button_relation";
  CREATE TYPE "public"."enum_share_blocks_banner_banner_button_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."share_blocks_banner" ALTER COLUMN "banner_button_relation" SET DATA TYPE "public"."enum_share_blocks_banner_banner_button_relation" USING "banner_button_relation"::"public"."enum_share_blocks_banner_banner_button_relation";
  ALTER TABLE "public"."share_blocks_features" ALTER COLUMN "features_settings_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_features_features_settings_link_relation";
  CREATE TYPE "public"."enum_share_blocks_features_features_settings_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."share_blocks_features" ALTER COLUMN "features_settings_link_relation" SET DATA TYPE "public"."enum_share_blocks_features_features_settings_link_relation" USING "features_settings_link_relation"::"public"."enum_share_blocks_features_features_settings_link_relation";
  ALTER TABLE "public"."share_blocks_flats_snippets" ALTER COLUMN "flats_set_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_flats_snippets_flats_set_link_relation";
  CREATE TYPE "public"."enum_share_blocks_flats_snippets_flats_set_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."share_blocks_flats_snippets" ALTER COLUMN "flats_set_link_relation" SET DATA TYPE "public"."enum_share_blocks_flats_snippets_flats_set_link_relation" USING "flats_set_link_relation"::"public"."enum_share_blocks_flats_snippets_flats_set_link_relation";
  ALTER TABLE "public"."share_blocks_gallery" ALTER COLUMN "link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_gallery_link_relation";
  CREATE TYPE "public"."enum_share_blocks_gallery_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."share_blocks_gallery" ALTER COLUMN "link_relation" SET DATA TYPE "public"."enum_share_blocks_gallery_link_relation" USING "link_relation"::"public"."enum_share_blocks_gallery_link_relation";
  ALTER TABLE "public"."share_blocks_hero_main_buttons" ALTER COLUMN "link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_hero_main_buttons_link_relation";
  CREATE TYPE "public"."enum_share_blocks_hero_main_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."share_blocks_hero_main_buttons" ALTER COLUMN "link_relation" SET DATA TYPE "public"."enum_share_blocks_hero_main_buttons_link_relation" USING "link_relation"::"public"."enum_share_blocks_hero_main_buttons_link_relation";
  ALTER TABLE "public"."share_blocks_hero_secondary_buttons" ALTER COLUMN "link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_hero_secondary_buttons_link_relation";
  CREATE TYPE "public"."enum_share_blocks_hero_secondary_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."share_blocks_hero_secondary_buttons" ALTER COLUMN "link_relation" SET DATA TYPE "public"."enum_share_blocks_hero_secondary_buttons_link_relation" USING "link_relation"::"public"."enum_share_blocks_hero_secondary_buttons_link_relation";
  ALTER TABLE "public"."share_blocks_highlighted_text_buttons" ALTER COLUMN "button_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_highlighted_text_buttons_button_relation";
  CREATE TYPE "public"."enum_share_blocks_highlighted_text_buttons_button_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."share_blocks_highlighted_text_buttons" ALTER COLUMN "button_relation" SET DATA TYPE "public"."enum_share_blocks_highlighted_text_buttons_button_relation" USING "button_relation"::"public"."enum_share_blocks_highlighted_text_buttons_button_relation";
  ALTER TABLE "public"."share_blocks_img_content" ALTER COLUMN "accordion_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_img_content_accordion_link_relation";
  CREATE TYPE "public"."enum_share_blocks_img_content_accordion_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."share_blocks_img_content" ALTER COLUMN "accordion_link_relation" SET DATA TYPE "public"."enum_share_blocks_img_content_accordion_link_relation" USING "accordion_link_relation"::"public"."enum_share_blocks_img_content_accordion_link_relation";
  ALTER TABLE "public"."share_blocks_news_snippets" ALTER COLUMN "news_set_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_news_snippets_news_set_link_relation";
  CREATE TYPE "public"."enum_share_blocks_news_snippets_news_set_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."share_blocks_news_snippets" ALTER COLUMN "news_set_link_relation" SET DATA TYPE "public"."enum_share_blocks_news_snippets_news_set_link_relation" USING "news_set_link_relation"::"public"."enum_share_blocks_news_snippets_news_set_link_relation";
  ALTER TABLE "public"."pages_blocks_banner" ALTER COLUMN "banner_button_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_banner_banner_button_relation";
  CREATE TYPE "public"."enum_pages_blocks_banner_banner_button_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."pages_blocks_banner" ALTER COLUMN "banner_button_relation" SET DATA TYPE "public"."enum_pages_blocks_banner_banner_button_relation" USING "banner_button_relation"::"public"."enum_pages_blocks_banner_banner_button_relation";
  ALTER TABLE "public"."pages_blocks_features" ALTER COLUMN "features_settings_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_features_features_settings_link_relation";
  CREATE TYPE "public"."enum_pages_blocks_features_features_settings_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."pages_blocks_features" ALTER COLUMN "features_settings_link_relation" SET DATA TYPE "public"."enum_pages_blocks_features_features_settings_link_relation" USING "features_settings_link_relation"::"public"."enum_pages_blocks_features_features_settings_link_relation";
  ALTER TABLE "public"."pages_blocks_flats_snippets" ALTER COLUMN "flats_set_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_link_relation";
  CREATE TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."pages_blocks_flats_snippets" ALTER COLUMN "flats_set_link_relation" SET DATA TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_link_relation" USING "flats_set_link_relation"::"public"."enum_pages_blocks_flats_snippets_flats_set_link_relation";
  ALTER TABLE "public"."pages_blocks_gallery" ALTER COLUMN "link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_gallery_link_relation";
  CREATE TYPE "public"."enum_pages_blocks_gallery_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."pages_blocks_gallery" ALTER COLUMN "link_relation" SET DATA TYPE "public"."enum_pages_blocks_gallery_link_relation" USING "link_relation"::"public"."enum_pages_blocks_gallery_link_relation";
  ALTER TABLE "public"."pages_blocks_hero_main_buttons" ALTER COLUMN "link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_hero_main_buttons_link_relation";
  CREATE TYPE "public"."enum_pages_blocks_hero_main_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."pages_blocks_hero_main_buttons" ALTER COLUMN "link_relation" SET DATA TYPE "public"."enum_pages_blocks_hero_main_buttons_link_relation" USING "link_relation"::"public"."enum_pages_blocks_hero_main_buttons_link_relation";
  ALTER TABLE "public"."pages_blocks_hero_secondary_buttons" ALTER COLUMN "link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_hero_secondary_buttons_link_relation";
  CREATE TYPE "public"."enum_pages_blocks_hero_secondary_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."pages_blocks_hero_secondary_buttons" ALTER COLUMN "link_relation" SET DATA TYPE "public"."enum_pages_blocks_hero_secondary_buttons_link_relation" USING "link_relation"::"public"."enum_pages_blocks_hero_secondary_buttons_link_relation";
  ALTER TABLE "public"."pages_blocks_highlighted_text_buttons" ALTER COLUMN "button_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_highlighted_text_buttons_button_relation";
  CREATE TYPE "public"."enum_pages_blocks_highlighted_text_buttons_button_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."pages_blocks_highlighted_text_buttons" ALTER COLUMN "button_relation" SET DATA TYPE "public"."enum_pages_blocks_highlighted_text_buttons_button_relation" USING "button_relation"::"public"."enum_pages_blocks_highlighted_text_buttons_button_relation";
  ALTER TABLE "public"."pages_blocks_img_content" ALTER COLUMN "accordion_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_img_content_accordion_link_relation";
  CREATE TYPE "public"."enum_pages_blocks_img_content_accordion_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."pages_blocks_img_content" ALTER COLUMN "accordion_link_relation" SET DATA TYPE "public"."enum_pages_blocks_img_content_accordion_link_relation" USING "accordion_link_relation"::"public"."enum_pages_blocks_img_content_accordion_link_relation";
  ALTER TABLE "public"."pages_blocks_news_snippets" ALTER COLUMN "news_set_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_news_snippets_news_set_link_relation";
  CREATE TYPE "public"."enum_pages_blocks_news_snippets_news_set_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."pages_blocks_news_snippets" ALTER COLUMN "news_set_link_relation" SET DATA TYPE "public"."enum_pages_blocks_news_snippets_news_set_link_relation" USING "news_set_link_relation"::"public"."enum_pages_blocks_news_snippets_news_set_link_relation";
  ALTER TABLE "public"."_pages_v_blocks_banner" ALTER COLUMN "banner_button_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_banner_banner_button_relation";
  CREATE TYPE "public"."enum__pages_v_blocks_banner_banner_button_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."_pages_v_blocks_banner" ALTER COLUMN "banner_button_relation" SET DATA TYPE "public"."enum__pages_v_blocks_banner_banner_button_relation" USING "banner_button_relation"::"public"."enum__pages_v_blocks_banner_banner_button_relation";
  ALTER TABLE "public"."_pages_v_blocks_features" ALTER COLUMN "features_settings_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_features_features_settings_link_relation";
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_settings_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."_pages_v_blocks_features" ALTER COLUMN "features_settings_link_relation" SET DATA TYPE "public"."enum__pages_v_blocks_features_features_settings_link_relation" USING "features_settings_link_relation"::"public"."enum__pages_v_blocks_features_features_settings_link_relation";
  ALTER TABLE "public"."_pages_v_blocks_flats_snippets" ALTER COLUMN "flats_set_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_link_relation";
  CREATE TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."_pages_v_blocks_flats_snippets" ALTER COLUMN "flats_set_link_relation" SET DATA TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_link_relation" USING "flats_set_link_relation"::"public"."enum__pages_v_blocks_flats_snippets_flats_set_link_relation";
  ALTER TABLE "public"."_pages_v_blocks_gallery" ALTER COLUMN "link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_gallery_link_relation";
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."_pages_v_blocks_gallery" ALTER COLUMN "link_relation" SET DATA TYPE "public"."enum__pages_v_blocks_gallery_link_relation" USING "link_relation"::"public"."enum__pages_v_blocks_gallery_link_relation";
  ALTER TABLE "public"."_pages_v_blocks_hero_main_buttons" ALTER COLUMN "link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_hero_main_buttons_link_relation";
  CREATE TYPE "public"."enum__pages_v_blocks_hero_main_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."_pages_v_blocks_hero_main_buttons" ALTER COLUMN "link_relation" SET DATA TYPE "public"."enum__pages_v_blocks_hero_main_buttons_link_relation" USING "link_relation"::"public"."enum__pages_v_blocks_hero_main_buttons_link_relation";
  ALTER TABLE "public"."_pages_v_blocks_hero_secondary_buttons" ALTER COLUMN "link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_hero_secondary_buttons_link_relation";
  CREATE TYPE "public"."enum__pages_v_blocks_hero_secondary_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."_pages_v_blocks_hero_secondary_buttons" ALTER COLUMN "link_relation" SET DATA TYPE "public"."enum__pages_v_blocks_hero_secondary_buttons_link_relation" USING "link_relation"::"public"."enum__pages_v_blocks_hero_secondary_buttons_link_relation";
  ALTER TABLE "public"."_pages_v_blocks_highlighted_text_buttons" ALTER COLUMN "button_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_highlighted_text_buttons_button_relation";
  CREATE TYPE "public"."enum__pages_v_blocks_highlighted_text_buttons_button_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."_pages_v_blocks_highlighted_text_buttons" ALTER COLUMN "button_relation" SET DATA TYPE "public"."enum__pages_v_blocks_highlighted_text_buttons_button_relation" USING "button_relation"::"public"."enum__pages_v_blocks_highlighted_text_buttons_button_relation";
  ALTER TABLE "public"."_pages_v_blocks_img_content" ALTER COLUMN "accordion_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_img_content_accordion_link_relation";
  CREATE TYPE "public"."enum__pages_v_blocks_img_content_accordion_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."_pages_v_blocks_img_content" ALTER COLUMN "accordion_link_relation" SET DATA TYPE "public"."enum__pages_v_blocks_img_content_accordion_link_relation" USING "accordion_link_relation"::"public"."enum__pages_v_blocks_img_content_accordion_link_relation";
  ALTER TABLE "public"."_pages_v_blocks_news_snippets" ALTER COLUMN "news_set_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_link_relation";
  CREATE TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."_pages_v_blocks_news_snippets" ALTER COLUMN "news_set_link_relation" SET DATA TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_link_relation" USING "news_set_link_relation"::"public"."enum__pages_v_blocks_news_snippets_news_set_link_relation";
  ALTER TABLE "public"."globalheader_nav_items" ALTER COLUMN "link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_globalheader_nav_items_link_relation";
  CREATE TYPE "public"."enum_globalheader_nav_items_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."globalheader_nav_items" ALTER COLUMN "link_relation" SET DATA TYPE "public"."enum_globalheader_nav_items_link_relation" USING "link_relation"::"public"."enum_globalheader_nav_items_link_relation";
  ALTER TABLE "public"."globalheader_cta_buttons" ALTER COLUMN "link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_globalheader_cta_buttons_link_relation";
  CREATE TYPE "public"."enum_globalheader_cta_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."globalheader_cta_buttons" ALTER COLUMN "link_relation" SET DATA TYPE "public"."enum_globalheader_cta_buttons_link_relation" USING "link_relation"::"public"."enum_globalheader_cta_buttons_link_relation";
  ALTER TABLE "public"."globalfooter_bottom_links" ALTER COLUMN "link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_globalfooter_bottom_links_link_relation";
  CREATE TYPE "public"."enum_globalfooter_bottom_links_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."globalfooter_bottom_links" ALTER COLUMN "link_relation" SET DATA TYPE "public"."enum_globalfooter_bottom_links_link_relation" USING "link_relation"::"public"."enum_globalfooter_bottom_links_link_relation";
  ALTER TABLE "public"."flatsstoone" ALTER COLUMN "gallery_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_flats_gallery_link_relation";
  CREATE TYPE "public"."enum_flats_gallery_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."flatsstoone" ALTER COLUMN "gallery_link_relation" SET DATA TYPE "public"."enum_flats_gallery_link_relation" USING "gallery_link_relation"::"public"."enum_flats_gallery_link_relation";
  ALTER TABLE "public"."flDet_blocks_hero_main_buttons" ALTER COLUMN "link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_relation";
  CREATE TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."flDet_blocks_hero_main_buttons" ALTER COLUMN "link_relation" SET DATA TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_relation" USING "link_relation"::"public"."enum_flDet_blocks_hero_main_buttons_link_relation";
  ALTER TABLE "public"."flDet_blocks_hero_secondary_buttons" ALTER COLUMN "link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_hero_secondary_buttons_link_relation";
  CREATE TYPE "public"."enum_flDet_blocks_hero_secondary_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."flDet_blocks_hero_secondary_buttons" ALTER COLUMN "link_relation" SET DATA TYPE "public"."enum_flDet_blocks_hero_secondary_buttons_link_relation" USING "link_relation"::"public"."enum_flDet_blocks_hero_secondary_buttons_link_relation";
  ALTER TABLE "public"."flDet_blocks_banner" ALTER COLUMN "banner_button_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_banner_banner_button_relation";
  CREATE TYPE "public"."enum_flDet_blocks_banner_banner_button_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."flDet_blocks_banner" ALTER COLUMN "banner_button_relation" SET DATA TYPE "public"."enum_flDet_blocks_banner_banner_button_relation" USING "banner_button_relation"::"public"."enum_flDet_blocks_banner_banner_button_relation";
  ALTER TABLE "public"."flDet_blocks_features" ALTER COLUMN "features_settings_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_features_features_settings_link_relation";
  CREATE TYPE "public"."enum_flDet_blocks_features_features_settings_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."flDet_blocks_features" ALTER COLUMN "features_settings_link_relation" SET DATA TYPE "public"."enum_flDet_blocks_features_features_settings_link_relation" USING "features_settings_link_relation"::"public"."enum_flDet_blocks_features_features_settings_link_relation";
  ALTER TABLE "public"."flDet_blocks_flats_snippets" ALTER COLUMN "flats_set_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_relation";
  CREATE TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."flDet_blocks_flats_snippets" ALTER COLUMN "flats_set_link_relation" SET DATA TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_relation" USING "flats_set_link_relation"::"public"."enum_flDet_blocks_flats_snippets_flats_set_link_relation";
  ALTER TABLE "public"."flDet_blocks_gallery" ALTER COLUMN "link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_gallery_link_relation";
  CREATE TYPE "public"."enum_flDet_blocks_gallery_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."flDet_blocks_gallery" ALTER COLUMN "link_relation" SET DATA TYPE "public"."enum_flDet_blocks_gallery_link_relation" USING "link_relation"::"public"."enum_flDet_blocks_gallery_link_relation";
  ALTER TABLE "public"."flDet_blocks_highlighted_text_buttons" ALTER COLUMN "button_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_highlighted_text_buttons_button_relation";
  CREATE TYPE "public"."enum_flDet_blocks_highlighted_text_buttons_button_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."flDet_blocks_highlighted_text_buttons" ALTER COLUMN "button_relation" SET DATA TYPE "public"."enum_flDet_blocks_highlighted_text_buttons_button_relation" USING "button_relation"::"public"."enum_flDet_blocks_highlighted_text_buttons_button_relation";
  ALTER TABLE "public"."flDet_blocks_img_content" ALTER COLUMN "accordion_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_img_content_accordion_link_relation";
  CREATE TYPE "public"."enum_flDet_blocks_img_content_accordion_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."flDet_blocks_img_content" ALTER COLUMN "accordion_link_relation" SET DATA TYPE "public"."enum_flDet_blocks_img_content_accordion_link_relation" USING "accordion_link_relation"::"public"."enum_flDet_blocks_img_content_accordion_link_relation";
  ALTER TABLE "public"."flDet_blocks_news_snippets" ALTER COLUMN "news_set_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_news_snippets_news_set_link_relation";
  CREATE TYPE "public"."enum_flDet_blocks_news_snippets_news_set_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."flDet_blocks_news_snippets" ALTER COLUMN "news_set_link_relation" SET DATA TYPE "public"."enum_flDet_blocks_news_snippets_news_set_link_relation" USING "news_set_link_relation"::"public"."enum_flDet_blocks_news_snippets_news_set_link_relation";
  ALTER TABLE "public"."newsDet_blocks_banner" ALTER COLUMN "banner_button_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_newsDet_blocks_banner_banner_button_relation";
  CREATE TYPE "public"."enum_newsDet_blocks_banner_banner_button_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."newsDet_blocks_banner" ALTER COLUMN "banner_button_relation" SET DATA TYPE "public"."enum_newsDet_blocks_banner_banner_button_relation" USING "banner_button_relation"::"public"."enum_newsDet_blocks_banner_banner_button_relation";
  ALTER TABLE "public"."newsDet_blocks_features" ALTER COLUMN "features_settings_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_newsDet_blocks_features_features_settings_link_relation";
  CREATE TYPE "public"."enum_newsDet_blocks_features_features_settings_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."newsDet_blocks_features" ALTER COLUMN "features_settings_link_relation" SET DATA TYPE "public"."enum_newsDet_blocks_features_features_settings_link_relation" USING "features_settings_link_relation"::"public"."enum_newsDet_blocks_features_features_settings_link_relation";
  ALTER TABLE "public"."newsDet_blocks_flats_snippets" ALTER COLUMN "flats_set_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_newsDet_blocks_flats_snippets_flats_set_link_relation";
  CREATE TYPE "public"."enum_newsDet_blocks_flats_snippets_flats_set_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."newsDet_blocks_flats_snippets" ALTER COLUMN "flats_set_link_relation" SET DATA TYPE "public"."enum_newsDet_blocks_flats_snippets_flats_set_link_relation" USING "flats_set_link_relation"::"public"."enum_newsDet_blocks_flats_snippets_flats_set_link_relation";
  ALTER TABLE "public"."newsDet_blocks_gallery" ALTER COLUMN "link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_newsDet_blocks_gallery_link_relation";
  CREATE TYPE "public"."enum_newsDet_blocks_gallery_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."newsDet_blocks_gallery" ALTER COLUMN "link_relation" SET DATA TYPE "public"."enum_newsDet_blocks_gallery_link_relation" USING "link_relation"::"public"."enum_newsDet_blocks_gallery_link_relation";
  ALTER TABLE "public"."newsDet_blocks_hero_main_buttons" ALTER COLUMN "link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_newsDet_blocks_hero_main_buttons_link_relation";
  CREATE TYPE "public"."enum_newsDet_blocks_hero_main_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."newsDet_blocks_hero_main_buttons" ALTER COLUMN "link_relation" SET DATA TYPE "public"."enum_newsDet_blocks_hero_main_buttons_link_relation" USING "link_relation"::"public"."enum_newsDet_blocks_hero_main_buttons_link_relation";
  ALTER TABLE "public"."newsDet_blocks_hero_secondary_buttons" ALTER COLUMN "link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_newsDet_blocks_hero_secondary_buttons_link_relation";
  CREATE TYPE "public"."enum_newsDet_blocks_hero_secondary_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."newsDet_blocks_hero_secondary_buttons" ALTER COLUMN "link_relation" SET DATA TYPE "public"."enum_newsDet_blocks_hero_secondary_buttons_link_relation" USING "link_relation"::"public"."enum_newsDet_blocks_hero_secondary_buttons_link_relation";
  ALTER TABLE "public"."newsDet_blocks_highlighted_text_buttons" ALTER COLUMN "button_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_newsDet_blocks_highlighted_text_buttons_button_relation";
  CREATE TYPE "public"."enum_newsDet_blocks_highlighted_text_buttons_button_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."newsDet_blocks_highlighted_text_buttons" ALTER COLUMN "button_relation" SET DATA TYPE "public"."enum_newsDet_blocks_highlighted_text_buttons_button_relation" USING "button_relation"::"public"."enum_newsDet_blocks_highlighted_text_buttons_button_relation";
  ALTER TABLE "public"."newsDet_blocks_img_content" ALTER COLUMN "accordion_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_newsDet_blocks_img_content_accordion_link_relation";
  CREATE TYPE "public"."enum_newsDet_blocks_img_content_accordion_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."newsDet_blocks_img_content" ALTER COLUMN "accordion_link_relation" SET DATA TYPE "public"."enum_newsDet_blocks_img_content_accordion_link_relation" USING "accordion_link_relation"::"public"."enum_newsDet_blocks_img_content_accordion_link_relation";
  ALTER TABLE "public"."newsDet_blocks_news_snippets" ALTER COLUMN "news_set_link_relation" SET DATA TYPE text;
  DROP TYPE "public"."enum_newsDet_blocks_news_snippets_news_set_link_relation";
  CREATE TYPE "public"."enum_newsDet_blocks_news_snippets_news_set_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "public"."newsDet_blocks_news_snippets" ALTER COLUMN "news_set_link_relation" SET DATA TYPE "public"."enum_newsDet_blocks_news_snippets_news_set_link_relation" USING "news_set_link_relation"::"public"."enum_newsDet_blocks_news_snippets_news_set_link_relation";`)
}
