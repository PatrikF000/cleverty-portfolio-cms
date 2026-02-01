import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_share_blocks_map_map_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_share_blocks_map_map_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_share_blocks_map_map_settings_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_pages_blocks_map_map_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_pages_blocks_map_map_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_pages_blocks_map_map_settings_background" AS ENUM('dark');
  CREATE TYPE "public"."enum__pages_v_blocks_map_map_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum__pages_v_blocks_map_map_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum__pages_v_blocks_map_map_settings_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_flDet_blocks_map_map_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_flDet_blocks_map_map_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_flDet_blocks_map_map_settings_background" AS ENUM('dark');
  CREATE TYPE "public"."enum__news_v_published_locale" AS ENUM('en', 'cs');
  ALTER TYPE "public"."icnPos" ADD VALUE 'center';
  CREATE TABLE IF NOT EXISTS "share_blocks_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"map_settings_anchor_id" varchar,
  	"map_settings_padding_top" "enum_share_blocks_map_map_settings_padding_top" DEFAULT 'medium',
  	"map_settings_padding_bottom" "enum_share_blocks_map_map_settings_padding_bottom" DEFAULT 'medium',
  	"map_settings_has_background_image" boolean DEFAULT false,
  	"map_settings_background" "enum_share_blocks_map_map_settings_background" DEFAULT 'dark',
  	"map_settings_background_image_id" integer,
  	"map_id" integer,
  	"map_link" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"map_settings_anchor_id" varchar,
  	"map_settings_padding_top" "enum_pages_blocks_map_map_settings_padding_top" DEFAULT 'medium',
  	"map_settings_padding_bottom" "enum_pages_blocks_map_map_settings_padding_bottom" DEFAULT 'medium',
  	"map_settings_has_background_image" boolean DEFAULT false,
  	"map_settings_background" "enum_pages_blocks_map_map_settings_background" DEFAULT 'dark',
  	"map_settings_background_image_id" integer,
  	"map_id" integer,
  	"map_link" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"map_settings_anchor_id" varchar,
  	"map_settings_padding_top" "enum__pages_v_blocks_map_map_settings_padding_top" DEFAULT 'medium',
  	"map_settings_padding_bottom" "enum__pages_v_blocks_map_map_settings_padding_bottom" DEFAULT 'medium',
  	"map_settings_has_background_image" boolean DEFAULT false,
  	"map_settings_background" "enum__pages_v_blocks_map_map_settings_background" DEFAULT 'dark',
  	"map_settings_background_image_id" integer,
  	"map_id" integer,
  	"map_link" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"map_settings_anchor_id" varchar,
  	"map_settings_padding_top" "enum_flDet_blocks_map_map_settings_padding_top" DEFAULT 'medium',
  	"map_settings_padding_bottom" "enum_flDet_blocks_map_map_settings_padding_bottom" DEFAULT 'medium',
  	"map_settings_has_background_image" boolean DEFAULT false,
  	"map_settings_background" "enum_flDet_blocks_map_map_settings_background" DEFAULT 'dark',
  	"map_settings_background_image_id" integer,
  	"map_id" integer,
  	"map_link" varchar,
  	"block_name" varchar
  );
  
  DROP INDEX IF EXISTS "_pages_v_autosave_idx";
  ALTER TABLE "news" ALTER COLUMN "cover_image_id" DROP NOT NULL;
  ALTER TABLE "newsstoone" ALTER COLUMN "title" DROP NOT NULL;
  ALTER TABLE "newsstoone" ALTER COLUMN "perex" DROP NOT NULL;
  ALTER TABLE "newsstoone" ALTER COLUMN "content" DROP NOT NULL;
  ALTER TABLE "_news_v" ALTER COLUMN "version_cover_image_id" DROP NOT NULL;
  ALTER TABLE "_news_vstoone" ALTER COLUMN "version_title" DROP NOT NULL;
  ALTER TABLE "_news_vstoone" ALTER COLUMN "version_perex" DROP NOT NULL;
  ALTER TABLE "_news_vstoone" ALTER COLUMN "version_content" DROP NOT NULL;
  ALTER TABLE "share_blocks_banner" ADD COLUMN "banner_button_icon_only" boolean DEFAULT false;
  ALTER TABLE "share_blocks_features" ADD COLUMN "features_settings_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_label" varchar DEFAULT 'I agree to receive newsletters';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_content" jsonb;
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "share_blocks_flats_snippets" ADD COLUMN "flats_set_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "share_blocks_gallery" ADD COLUMN "link_icon_only" boolean DEFAULT false;
  ALTER TABLE "share_blocks_hero_main_buttons" ADD COLUMN "link_icon_only" boolean DEFAULT false;
  ALTER TABLE "share_blocks_hero_secondary_buttons" ADD COLUMN "link_icon_only" boolean DEFAULT false;
  ALTER TABLE "share_blocks_highlighted_text" ADD COLUMN "highlighted_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "imgContent" ADD COLUMN "accordion_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "share_blocks_image_pins_pins" ADD COLUMN "x_mobile" numeric;
  ALTER TABLE "share_blocks_image_pins_pins" ADD COLUMN "y_mobile" numeric;
  ALTER TABLE "share_blocks_news_snippets" ADD COLUMN "news_set_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_hero_main_buttons" ADD COLUMN "link_icon_only" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_hero_secondary_buttons" ADD COLUMN "link_icon_only" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_banner" ADD COLUMN "banner_button_icon_only" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_features" ADD COLUMN "features_settings_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_label" varchar DEFAULT 'I agree to receive newsletters';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_content" jsonb;
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "pages_blocks_flats_snippets" ADD COLUMN "flats_set_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_gallery" ADD COLUMN "link_icon_only" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_highlighted_text" ADD COLUMN "highlighted_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_image_pins_pins" ADD COLUMN "x_mobile" numeric;
  ALTER TABLE "pages_blocks_image_pins_pins" ADD COLUMN "y_mobile" numeric;
  ALTER TABLE "pages_blocks_news_snippets" ADD COLUMN "news_set_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_hero_main_buttons" ADD COLUMN "link_icon_only" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_hero_secondary_buttons" ADD COLUMN "link_icon_only" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_banner" ADD COLUMN "banner_button_icon_only" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_features" ADD COLUMN "features_settings_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_label" varchar DEFAULT 'I agree to receive newsletters';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_content" jsonb;
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "_pages_v_blocks_flats_snippets" ADD COLUMN "flats_set_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_gallery" ADD COLUMN "link_icon_only" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_highlighted_text" ADD COLUMN "highlighted_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "_imgContent_v" ADD COLUMN "accordion_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_image_pins_pins" ADD COLUMN "x_mobile" numeric;
  ALTER TABLE "_pages_v_blocks_image_pins_pins" ADD COLUMN "y_mobile" numeric;
  ALTER TABLE "_pages_v_blocks_news_snippets" ADD COLUMN "news_set_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "globalheader_nav_items" ADD COLUMN "link_icon_only" boolean DEFAULT false;
  ALTER TABLE "globalheader_cta_buttons" ADD COLUMN "link_icon_only" boolean DEFAULT false;
  ALTER TABLE "globalfooter_bottom_links" ADD COLUMN "link_icon_only" boolean DEFAULT false;
  ALTER TABLE "flatsstoone" ADD COLUMN "gallery_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "project_global_settingsstoone" ADD COLUMN "content" jsonb;
  ALTER TABLE "project_global_settingsstoone" ADD COLUMN "back_button_label" varchar;
  ALTER TABLE "flDet_blocks_hero_main_buttons" ADD COLUMN "link_icon_only" boolean DEFAULT false;
  ALTER TABLE "flDet_blocks_hero_secondary_buttons" ADD COLUMN "link_icon_only" boolean DEFAULT false;
  ALTER TABLE "flDet_blocks_banner" ADD COLUMN "banner_button_icon_only" boolean DEFAULT false;
  ALTER TABLE "flDet_blocks_features" ADD COLUMN "features_settings_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_label" varchar DEFAULT 'I agree to receive newsletters';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_content" jsonb;
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "flDet_blocks_flats_snippets" ADD COLUMN "flats_set_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "flDet_blocks_gallery" ADD COLUMN "link_icon_only" boolean DEFAULT false;
  ALTER TABLE "flDet_blocks_highlighted_text" ADD COLUMN "highlighted_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "flDet_blocks_image_pins_pins" ADD COLUMN "x_mobile" numeric;
  ALTER TABLE "flDet_blocks_image_pins_pins" ADD COLUMN "y_mobile" numeric;
  ALTER TABLE "flDet_blocks_news_snippets" ADD COLUMN "news_set_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "news" ADD COLUMN "_status" "enum_news_status" DEFAULT 'draft';
  ALTER TABLE "_news_v" ADD COLUMN "version__status" "enum__news_v_version_status" DEFAULT 'draft';
  ALTER TABLE "_news_v" ADD COLUMN "snapshot" boolean;
  ALTER TABLE "_news_v" ADD COLUMN "published_locale" "enum__news_v_published_locale";
  ALTER TABLE "_news_v" ADD COLUMN "latest" boolean;
  DO $$ BEGIN
   ALTER TABLE "share_blocks_map" ADD CONSTRAINT "share_blocks_map_map_settings_background_image_id_media_id_fk" FOREIGN KEY ("map_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_map" ADD CONSTRAINT "share_blocks_map_map_id_media_id_fk" FOREIGN KEY ("map_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_map" ADD CONSTRAINT "share_blocks_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_map" ADD CONSTRAINT "pages_blocks_map_map_settings_background_image_id_media_id_fk" FOREIGN KEY ("map_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_map" ADD CONSTRAINT "pages_blocks_map_map_id_media_id_fk" FOREIGN KEY ("map_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_map" ADD CONSTRAINT "pages_blocks_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_map" ADD CONSTRAINT "_pages_v_blocks_map_map_settings_background_image_id_media_id_fk" FOREIGN KEY ("map_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_map" ADD CONSTRAINT "_pages_v_blocks_map_map_id_media_id_fk" FOREIGN KEY ("map_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_map" ADD CONSTRAINT "_pages_v_blocks_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_map" ADD CONSTRAINT "flDet_blocks_map_map_settings_background_image_id_media_id_fk" FOREIGN KEY ("map_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_map" ADD CONSTRAINT "flDet_blocks_map_map_id_media_id_fk" FOREIGN KEY ("map_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_map" ADD CONSTRAINT "flDet_blocks_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "share_blocks_map_order_idx" ON "share_blocks_map" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_map_parent_id_idx" ON "share_blocks_map" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_map_path_idx" ON "share_blocks_map" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_map_locale_idx" ON "share_blocks_map" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_map_map_settings_map_settings_background_image_idx" ON "share_blocks_map" USING btree ("map_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_map_map_idx" ON "share_blocks_map" USING btree ("map_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_map_order_idx" ON "pages_blocks_map" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_map_parent_id_idx" ON "pages_blocks_map" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_map_path_idx" ON "pages_blocks_map" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_map_locale_idx" ON "pages_blocks_map" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_map_map_settings_map_settings_background_image_idx" ON "pages_blocks_map" USING btree ("map_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_map_map_idx" ON "pages_blocks_map" USING btree ("map_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_map_order_idx" ON "_pages_v_blocks_map" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_map_parent_id_idx" ON "_pages_v_blocks_map" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_map_path_idx" ON "_pages_v_blocks_map" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_map_locale_idx" ON "_pages_v_blocks_map" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_map_map_settings_map_settings_background_image_idx" ON "_pages_v_blocks_map" USING btree ("map_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_map_map_idx" ON "_pages_v_blocks_map" USING btree ("map_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_map_order_idx" ON "flDet_blocks_map" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_map_parent_id_idx" ON "flDet_blocks_map" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_map_path_idx" ON "flDet_blocks_map" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_map_locale_idx" ON "flDet_blocks_map" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_map_map_settings_map_settings_background_image_idx" ON "flDet_blocks_map" USING btree ("map_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_map_map_idx" ON "flDet_blocks_map" USING btree ("map_id");
  CREATE INDEX IF NOT EXISTS "news__status_idx" ON "news" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "_news_v_version_version__status_idx" ON "_news_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_news_v_snapshot_idx" ON "_news_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_news_v_published_locale_idx" ON "_news_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_news_v_latest_idx" ON "_news_v" USING btree ("latest");
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "autosave";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "share_blocks_map" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_map" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_map" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_map" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "share_blocks_map" CASCADE;
  DROP TABLE "pages_blocks_map" CASCADE;
  DROP TABLE "_pages_v_blocks_map" CASCADE;
  DROP TABLE "flDet_blocks_map" CASCADE;
  DROP INDEX IF EXISTS "news__status_idx";
  DROP INDEX IF EXISTS "_news_v_version_version__status_idx";
  DROP INDEX IF EXISTS "_news_v_snapshot_idx";
  DROP INDEX IF EXISTS "_news_v_published_locale_idx";
  DROP INDEX IF EXISTS "_news_v_latest_idx";
  ALTER TABLE "news" ALTER COLUMN "cover_image_id" SET NOT NULL;
  ALTER TABLE "newsstoone" ALTER COLUMN "title" SET NOT NULL;
  ALTER TABLE "newsstoone" ALTER COLUMN "perex" SET NOT NULL;
  ALTER TABLE "newsstoone" ALTER COLUMN "content" SET NOT NULL;
  ALTER TABLE "_news_v" ALTER COLUMN "version_cover_image_id" SET NOT NULL;
  ALTER TABLE "_news_vstoone" ALTER COLUMN "version_title" SET NOT NULL;
  ALTER TABLE "_news_vstoone" ALTER COLUMN "version_perex" SET NOT NULL;
  ALTER TABLE "_news_vstoone" ALTER COLUMN "version_content" SET NOT NULL;
  ALTER TABLE "_pages_v" ADD COLUMN "autosave" boolean;
  CREATE INDEX IF NOT EXISTS "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  ALTER TABLE "share_blocks_banner" DROP COLUMN IF EXISTS "banner_button_icon_only";
  ALTER TABLE "share_blocks_features" DROP COLUMN IF EXISTS "features_settings_link_icon_only";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_label";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_content";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_validation_required_message";
  ALTER TABLE "share_blocks_flats_snippets" DROP COLUMN IF EXISTS "flats_set_link_icon_only";
  ALTER TABLE "share_blocks_gallery" DROP COLUMN IF EXISTS "link_icon_only";
  ALTER TABLE "share_blocks_hero_main_buttons" DROP COLUMN IF EXISTS "link_icon_only";
  ALTER TABLE "share_blocks_hero_secondary_buttons" DROP COLUMN IF EXISTS "link_icon_only";
  ALTER TABLE "share_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_icon_only";
  ALTER TABLE "imgContent" DROP COLUMN IF EXISTS "accordion_link_icon_only";
  ALTER TABLE "share_blocks_image_pins_pins" DROP COLUMN IF EXISTS "x_mobile";
  ALTER TABLE "share_blocks_image_pins_pins" DROP COLUMN IF EXISTS "y_mobile";
  ALTER TABLE "share_blocks_news_snippets" DROP COLUMN IF EXISTS "news_set_link_icon_only";
  ALTER TABLE "pages_blocks_hero_main_buttons" DROP COLUMN IF EXISTS "link_icon_only";
  ALTER TABLE "pages_blocks_hero_secondary_buttons" DROP COLUMN IF EXISTS "link_icon_only";
  ALTER TABLE "pages_blocks_banner" DROP COLUMN IF EXISTS "banner_button_icon_only";
  ALTER TABLE "pages_blocks_features" DROP COLUMN IF EXISTS "features_settings_link_icon_only";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_label";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_content";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_validation_required_message";
  ALTER TABLE "pages_blocks_flats_snippets" DROP COLUMN IF EXISTS "flats_set_link_icon_only";
  ALTER TABLE "pages_blocks_gallery" DROP COLUMN IF EXISTS "link_icon_only";
  ALTER TABLE "pages_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_icon_only";
  ALTER TABLE "pages_blocks_image_pins_pins" DROP COLUMN IF EXISTS "x_mobile";
  ALTER TABLE "pages_blocks_image_pins_pins" DROP COLUMN IF EXISTS "y_mobile";
  ALTER TABLE "pages_blocks_news_snippets" DROP COLUMN IF EXISTS "news_set_link_icon_only";
  ALTER TABLE "_pages_v_blocks_hero_main_buttons" DROP COLUMN IF EXISTS "link_icon_only";
  ALTER TABLE "_pages_v_blocks_hero_secondary_buttons" DROP COLUMN IF EXISTS "link_icon_only";
  ALTER TABLE "_pages_v_blocks_banner" DROP COLUMN IF EXISTS "banner_button_icon_only";
  ALTER TABLE "_pages_v_blocks_features" DROP COLUMN IF EXISTS "features_settings_link_icon_only";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_label";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_content";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_validation_required_message";
  ALTER TABLE "_pages_v_blocks_flats_snippets" DROP COLUMN IF EXISTS "flats_set_link_icon_only";
  ALTER TABLE "_pages_v_blocks_gallery" DROP COLUMN IF EXISTS "link_icon_only";
  ALTER TABLE "_pages_v_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_icon_only";
  ALTER TABLE "_imgContent_v" DROP COLUMN IF EXISTS "accordion_link_icon_only";
  ALTER TABLE "_pages_v_blocks_image_pins_pins" DROP COLUMN IF EXISTS "x_mobile";
  ALTER TABLE "_pages_v_blocks_image_pins_pins" DROP COLUMN IF EXISTS "y_mobile";
  ALTER TABLE "_pages_v_blocks_news_snippets" DROP COLUMN IF EXISTS "news_set_link_icon_only";
  ALTER TABLE "globalheader_nav_items" DROP COLUMN IF EXISTS "link_icon_only";
  ALTER TABLE "globalheader_cta_buttons" DROP COLUMN IF EXISTS "link_icon_only";
  ALTER TABLE "globalfooter_bottom_links" DROP COLUMN IF EXISTS "link_icon_only";
  ALTER TABLE "flatsstoone" DROP COLUMN IF EXISTS "gallery_link_icon_only";
  ALTER TABLE "project_global_settingsstoone" DROP COLUMN IF EXISTS "content";
  ALTER TABLE "project_global_settingsstoone" DROP COLUMN IF EXISTS "back_button_label";
  ALTER TABLE "flDet_blocks_hero_main_buttons" DROP COLUMN IF EXISTS "link_icon_only";
  ALTER TABLE "flDet_blocks_hero_secondary_buttons" DROP COLUMN IF EXISTS "link_icon_only";
  ALTER TABLE "flDet_blocks_banner" DROP COLUMN IF EXISTS "banner_button_icon_only";
  ALTER TABLE "flDet_blocks_features" DROP COLUMN IF EXISTS "features_settings_link_icon_only";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_label";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_content";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_validation_required_message";
  ALTER TABLE "flDet_blocks_flats_snippets" DROP COLUMN IF EXISTS "flats_set_link_icon_only";
  ALTER TABLE "flDet_blocks_gallery" DROP COLUMN IF EXISTS "link_icon_only";
  ALTER TABLE "flDet_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_icon_only";
  ALTER TABLE "flDet_blocks_image_pins_pins" DROP COLUMN IF EXISTS "x_mobile";
  ALTER TABLE "flDet_blocks_image_pins_pins" DROP COLUMN IF EXISTS "y_mobile";
  ALTER TABLE "flDet_blocks_news_snippets" DROP COLUMN IF EXISTS "news_set_link_icon_only";
  ALTER TABLE "news" DROP COLUMN IF EXISTS "_status";
  ALTER TABLE "_news_v" DROP COLUMN IF EXISTS "version__status";
  ALTER TABLE "_news_v" DROP COLUMN IF EXISTS "snapshot";
  ALTER TABLE "_news_v" DROP COLUMN IF EXISTS "published_locale";
  ALTER TABLE "_news_v" DROP COLUMN IF EXISTS "latest";
  ALTER TABLE "public"."share_blocks_banner" ALTER COLUMN "banner_button_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."share_blocks_features" ALTER COLUMN "features_settings_link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."share_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."share_blocks_gallery" ALTER COLUMN "link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."share_blocks_hero_main_buttons" ALTER COLUMN "link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."share_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."share_blocks_highlighted_text" ALTER COLUMN "highlighted_link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."imgContent" ALTER COLUMN "accordion_link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."share_blocks_news_snippets" ALTER COLUMN "news_set_link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_hero_main_buttons" ALTER COLUMN "link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_banner" ALTER COLUMN "banner_button_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_features" ALTER COLUMN "features_settings_link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_gallery" ALTER COLUMN "link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_highlighted_text" ALTER COLUMN "highlighted_link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_news_snippets" ALTER COLUMN "news_set_link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_hero_main_buttons" ALTER COLUMN "link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_banner" ALTER COLUMN "banner_button_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_features" ALTER COLUMN "features_settings_link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_gallery" ALTER COLUMN "link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_highlighted_text" ALTER COLUMN "highlighted_link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."_imgContent_v" ALTER COLUMN "accordion_link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_news_snippets" ALTER COLUMN "news_set_link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."globalheader_nav_items" ALTER COLUMN "link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."globalheader_cta_buttons" ALTER COLUMN "link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."globalfooter_bottom_links" ALTER COLUMN "link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."flatsstoone" ALTER COLUMN "gallery_link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."flDet_blocks_hero_main_buttons" ALTER COLUMN "link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."flDet_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."flDet_blocks_banner" ALTER COLUMN "banner_button_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."flDet_blocks_features" ALTER COLUMN "features_settings_link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."flDet_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."flDet_blocks_gallery" ALTER COLUMN "link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."flDet_blocks_highlighted_text" ALTER COLUMN "highlighted_link_icon_position" SET DATA TYPE text;
  ALTER TABLE "public"."flDet_blocks_news_snippets" ALTER COLUMN "news_set_link_icon_position" SET DATA TYPE text;
  DROP TYPE "public"."icnPos";
  CREATE TYPE "public"."icnPos" AS ENUM('left', 'right');
  ALTER TABLE "public"."share_blocks_banner" ALTER COLUMN "banner_button_icon_position" SET DATA TYPE "public"."icnPos" USING "banner_button_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."share_blocks_features" ALTER COLUMN "features_settings_link_icon_position" SET DATA TYPE "public"."icnPos" USING "features_settings_link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."share_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon_position" SET DATA TYPE "public"."icnPos" USING "flats_set_link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."share_blocks_gallery" ALTER COLUMN "link_icon_position" SET DATA TYPE "public"."icnPos" USING "link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."share_blocks_hero_main_buttons" ALTER COLUMN "link_icon_position" SET DATA TYPE "public"."icnPos" USING "link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."share_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon_position" SET DATA TYPE "public"."icnPos" USING "link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."share_blocks_highlighted_text" ALTER COLUMN "highlighted_link_icon_position" SET DATA TYPE "public"."icnPos" USING "highlighted_link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."imgContent" ALTER COLUMN "accordion_link_icon_position" SET DATA TYPE "public"."icnPos" USING "accordion_link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."share_blocks_news_snippets" ALTER COLUMN "news_set_link_icon_position" SET DATA TYPE "public"."icnPos" USING "news_set_link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."pages_blocks_hero_main_buttons" ALTER COLUMN "link_icon_position" SET DATA TYPE "public"."icnPos" USING "link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."pages_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon_position" SET DATA TYPE "public"."icnPos" USING "link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."pages_blocks_banner" ALTER COLUMN "banner_button_icon_position" SET DATA TYPE "public"."icnPos" USING "banner_button_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."pages_blocks_features" ALTER COLUMN "features_settings_link_icon_position" SET DATA TYPE "public"."icnPos" USING "features_settings_link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."pages_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon_position" SET DATA TYPE "public"."icnPos" USING "flats_set_link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."pages_blocks_gallery" ALTER COLUMN "link_icon_position" SET DATA TYPE "public"."icnPos" USING "link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."pages_blocks_highlighted_text" ALTER COLUMN "highlighted_link_icon_position" SET DATA TYPE "public"."icnPos" USING "highlighted_link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."pages_blocks_news_snippets" ALTER COLUMN "news_set_link_icon_position" SET DATA TYPE "public"."icnPos" USING "news_set_link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."_pages_v_blocks_hero_main_buttons" ALTER COLUMN "link_icon_position" SET DATA TYPE "public"."icnPos" USING "link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."_pages_v_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon_position" SET DATA TYPE "public"."icnPos" USING "link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."_pages_v_blocks_banner" ALTER COLUMN "banner_button_icon_position" SET DATA TYPE "public"."icnPos" USING "banner_button_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."_pages_v_blocks_features" ALTER COLUMN "features_settings_link_icon_position" SET DATA TYPE "public"."icnPos" USING "features_settings_link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."_pages_v_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon_position" SET DATA TYPE "public"."icnPos" USING "flats_set_link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."_pages_v_blocks_gallery" ALTER COLUMN "link_icon_position" SET DATA TYPE "public"."icnPos" USING "link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."_pages_v_blocks_highlighted_text" ALTER COLUMN "highlighted_link_icon_position" SET DATA TYPE "public"."icnPos" USING "highlighted_link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."_imgContent_v" ALTER COLUMN "accordion_link_icon_position" SET DATA TYPE "public"."icnPos" USING "accordion_link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."_pages_v_blocks_news_snippets" ALTER COLUMN "news_set_link_icon_position" SET DATA TYPE "public"."icnPos" USING "news_set_link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."globalheader_nav_items" ALTER COLUMN "link_icon_position" SET DATA TYPE "public"."icnPos" USING "link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."globalheader_cta_buttons" ALTER COLUMN "link_icon_position" SET DATA TYPE "public"."icnPos" USING "link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."globalfooter_bottom_links" ALTER COLUMN "link_icon_position" SET DATA TYPE "public"."icnPos" USING "link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."flatsstoone" ALTER COLUMN "gallery_link_icon_position" SET DATA TYPE "public"."icnPos" USING "gallery_link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."flDet_blocks_hero_main_buttons" ALTER COLUMN "link_icon_position" SET DATA TYPE "public"."icnPos" USING "link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."flDet_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon_position" SET DATA TYPE "public"."icnPos" USING "link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."flDet_blocks_banner" ALTER COLUMN "banner_button_icon_position" SET DATA TYPE "public"."icnPos" USING "banner_button_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."flDet_blocks_features" ALTER COLUMN "features_settings_link_icon_position" SET DATA TYPE "public"."icnPos" USING "features_settings_link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."flDet_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon_position" SET DATA TYPE "public"."icnPos" USING "flats_set_link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."flDet_blocks_gallery" ALTER COLUMN "link_icon_position" SET DATA TYPE "public"."icnPos" USING "link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."flDet_blocks_highlighted_text" ALTER COLUMN "highlighted_link_icon_position" SET DATA TYPE "public"."icnPos" USING "highlighted_link_icon_position"::"public"."icnPos";
  ALTER TABLE "public"."flDet_blocks_news_snippets" ALTER COLUMN "news_set_link_icon_position" SET DATA TYPE "public"."icnPos" USING "news_set_link_icon_position"::"public"."icnPos";
  DROP TYPE "public"."enum_share_blocks_map_map_settings_padding_top";
  DROP TYPE "public"."enum_share_blocks_map_map_settings_padding_bottom";
  DROP TYPE "public"."enum_share_blocks_map_map_settings_background";
  DROP TYPE "public"."enum_pages_blocks_map_map_settings_padding_top";
  DROP TYPE "public"."enum_pages_blocks_map_map_settings_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_map_map_settings_background";
  DROP TYPE "public"."enum__pages_v_blocks_map_map_settings_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_map_map_settings_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_map_map_settings_background";
  DROP TYPE "public"."enum_flDet_blocks_map_map_settings_padding_top";
  DROP TYPE "public"."enum_flDet_blocks_map_map_settings_padding_bottom";
  DROP TYPE "public"."enum_flDet_blocks_map_map_settings_background";
  DROP TYPE "public"."enum__news_v_published_locale";`)
}
