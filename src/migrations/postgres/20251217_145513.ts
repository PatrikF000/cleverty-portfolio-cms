import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload: _payload, req: _req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_share_blocks_image_pins_image_pins_set_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_share_blocks_image_pins_image_pins_set_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_share_blocks_image_pins_image_pins_set_link_relation" AS ENUM('pages', 'flats', 'news', 'documents', 'anchor');
  CREATE TYPE "public"."enum_share_blocks_image_pins_image_pins_set_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_image_pins_image_pins_set_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_pages_blocks_image_pins_image_pins_set_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_pages_blocks_image_pins_image_pins_set_link_relation" AS ENUM('pages', 'flats', 'news', 'documents', 'anchor');
  CREATE TYPE "public"."enum_pages_blocks_image_pins_image_pins_set_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_image_pins_image_pins_set_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum__pages_v_blocks_image_pins_image_pins_set_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum__pages_v_blocks_image_pins_image_pins_set_link_relation" AS ENUM('pages', 'flats', 'news', 'documents', 'anchor');
  CREATE TYPE "public"."enum__pages_v_blocks_image_pins_image_pins_set_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_flDet_blocks_image_pins_image_pins_set_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_flDet_blocks_image_pins_image_pins_set_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_flDet_blocks_image_pins_image_pins_set_link_relation" AS ENUM('pages', 'flats', 'news', 'documents', 'anchor');
  CREATE TYPE "public"."enum_flDet_blocks_image_pins_image_pins_set_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_newsDet_blocks_image_pins_image_pins_set_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_newsDet_blocks_image_pins_image_pins_set_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_newsDet_blocks_image_pins_image_pins_set_link_relation" AS ENUM('pages', 'flats', 'news', 'documents', 'anchor');
  CREATE TYPE "public"."enum_newsDet_blocks_image_pins_image_pins_set_link_appearance" AS ENUM('primary', 'secondary');
  DO $$
  BEGIN
    IF NOT EXISTS (
      SELECT 1 FROM pg_enum e
      JOIN pg_type t ON e.enumtypid = t.oid
      WHERE t.typname = 'enum_share_blocks_content_content_settings_background'
      AND e.enumlabel = 'light'
    ) THEN
      ALTER TYPE "public"."enum_share_blocks_content_content_settings_background" ADD VALUE 'light';
    END IF;
  END $$;
  DO $$
  BEGIN
    IF NOT EXISTS (
      SELECT 1 FROM pg_enum e
      JOIN pg_type t ON e.enumtypid = t.oid
      WHERE t.typname = 'enum_pages_blocks_content_content_settings_background'
      AND e.enumlabel = 'light'
    ) THEN
      ALTER TYPE "public"."enum_pages_blocks_content_content_settings_background" ADD VALUE 'light';
    END IF;
  END $$;
  DO $$
  BEGIN
    IF NOT EXISTS (
      SELECT 1 FROM pg_enum e
      JOIN pg_type t ON e.enumtypid = t.oid
      WHERE t.typname = 'enum__pages_v_blocks_content_content_settings_background'
      AND e.enumlabel = 'light'
    ) THEN
      ALTER TYPE "public"."enum__pages_v_blocks_content_content_settings_background" ADD VALUE 'light';
    END IF;
  END $$;
  DO $$
  BEGIN
    IF NOT EXISTS (
      SELECT 1 FROM pg_enum e
      JOIN pg_type t ON e.enumtypid = t.oid
      WHERE t.typname = 'enum_flDet_blocks_content_content_settings_background'
      AND e.enumlabel = 'light'
    ) THEN
      ALTER TYPE "public"."enum_flDet_blocks_content_content_settings_background" ADD VALUE 'light';
    END IF;
  END $$;
  DO $$
  BEGIN
    IF NOT EXISTS (
      SELECT 1 FROM pg_enum e
      JOIN pg_type t ON e.enumtypid = t.oid
      WHERE t.typname = 'enum_newsDet_blocks_content_content_settings_background'
      AND e.enumlabel = 'light'
    ) THEN
      ALTER TYPE "public"."enum_newsDet_blocks_content_content_settings_background" ADD VALUE 'light';
    END IF;
  END $$;
  ALTER TABLE "share_blocks_image_pins" ADD COLUMN "image_pins_set_heading" jsonb;
  ALTER TABLE "share_blocks_image_pins" ADD COLUMN "image_pins_set_link_type" "enum_share_blocks_image_pins_image_pins_set_link_type" DEFAULT 'internal';
  ALTER TABLE "share_blocks_image_pins" ADD COLUMN "image_pins_set_link_new_tab" boolean;
  ALTER TABLE "share_blocks_image_pins" ADD COLUMN "image_pins_set_link_has_anchor" boolean;
  ALTER TABLE "share_blocks_image_pins" ADD COLUMN "image_pins_set_link_dark_button" boolean;
  ALTER TABLE "share_blocks_image_pins" ADD COLUMN "image_pins_set_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "share_blocks_image_pins" ADD COLUMN "image_pins_set_link_icon_position" "icnPos" DEFAULT 'left';
  ALTER TABLE "share_blocks_image_pins" ADD COLUMN "image_pins_set_link_icon" "enum_share_blocks_image_pins_image_pins_set_link_icon";
  ALTER TABLE "share_blocks_image_pins" ADD COLUMN "image_pins_set_link_label" varchar;
  ALTER TABLE "share_blocks_image_pins" ADD COLUMN "image_pins_set_link_relation" "enum_share_blocks_image_pins_image_pins_set_link_relation" DEFAULT 'pages';
  ALTER TABLE "share_blocks_image_pins" ADD COLUMN "image_pins_set_link_url" varchar;
  ALTER TABLE "share_blocks_image_pins" ADD COLUMN "image_pins_set_link_anchor_to" varchar;
  ALTER TABLE "share_blocks_image_pins" ADD COLUMN "image_pins_set_link_appearance" "enum_share_blocks_image_pins_image_pins_set_link_appearance" DEFAULT 'primary';
  ALTER TABLE "pages_blocks_image_pins" ADD COLUMN "image_pins_set_heading" jsonb;
  ALTER TABLE "pages_blocks_image_pins" ADD COLUMN "image_pins_set_link_type" "enum_pages_blocks_image_pins_image_pins_set_link_type" DEFAULT 'internal';
  ALTER TABLE "pages_blocks_image_pins" ADD COLUMN "image_pins_set_link_new_tab" boolean;
  ALTER TABLE "pages_blocks_image_pins" ADD COLUMN "image_pins_set_link_has_anchor" boolean;
  ALTER TABLE "pages_blocks_image_pins" ADD COLUMN "image_pins_set_link_dark_button" boolean;
  ALTER TABLE "pages_blocks_image_pins" ADD COLUMN "image_pins_set_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_image_pins" ADD COLUMN "image_pins_set_link_icon_position" "icnPos" DEFAULT 'left';
  ALTER TABLE "pages_blocks_image_pins" ADD COLUMN "image_pins_set_link_icon" "enum_pages_blocks_image_pins_image_pins_set_link_icon";
  ALTER TABLE "pages_blocks_image_pins" ADD COLUMN "image_pins_set_link_label" varchar;
  ALTER TABLE "pages_blocks_image_pins" ADD COLUMN "image_pins_set_link_relation" "enum_pages_blocks_image_pins_image_pins_set_link_relation" DEFAULT 'pages';
  ALTER TABLE "pages_blocks_image_pins" ADD COLUMN "image_pins_set_link_url" varchar;
  ALTER TABLE "pages_blocks_image_pins" ADD COLUMN "image_pins_set_link_anchor_to" varchar;
  ALTER TABLE "pages_blocks_image_pins" ADD COLUMN "image_pins_set_link_appearance" "enum_pages_blocks_image_pins_image_pins_set_link_appearance" DEFAULT 'primary';
  ALTER TABLE "_pages_v_blocks_image_pins" ADD COLUMN "image_pins_set_heading" jsonb;
  ALTER TABLE "_pages_v_blocks_image_pins" ADD COLUMN "image_pins_set_link_type" "enum__pages_v_blocks_image_pins_image_pins_set_link_type" DEFAULT 'internal';
  ALTER TABLE "_pages_v_blocks_image_pins" ADD COLUMN "image_pins_set_link_new_tab" boolean;
  ALTER TABLE "_pages_v_blocks_image_pins" ADD COLUMN "image_pins_set_link_has_anchor" boolean;
  ALTER TABLE "_pages_v_blocks_image_pins" ADD COLUMN "image_pins_set_link_dark_button" boolean;
  ALTER TABLE "_pages_v_blocks_image_pins" ADD COLUMN "image_pins_set_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_image_pins" ADD COLUMN "image_pins_set_link_icon_position" "icnPos" DEFAULT 'left';
  ALTER TABLE "_pages_v_blocks_image_pins" ADD COLUMN "image_pins_set_link_icon" "enum__pages_v_blocks_image_pins_image_pins_set_link_icon";
  ALTER TABLE "_pages_v_blocks_image_pins" ADD COLUMN "image_pins_set_link_label" varchar;
  ALTER TABLE "_pages_v_blocks_image_pins" ADD COLUMN "image_pins_set_link_relation" "enum__pages_v_blocks_image_pins_image_pins_set_link_relation" DEFAULT 'pages';
  ALTER TABLE "_pages_v_blocks_image_pins" ADD COLUMN "image_pins_set_link_url" varchar;
  ALTER TABLE "_pages_v_blocks_image_pins" ADD COLUMN "image_pins_set_link_anchor_to" varchar;
  ALTER TABLE "_pages_v_blocks_image_pins" ADD COLUMN "image_pins_set_link_appearance" "enum__pages_v_blocks_image_pins_image_pins_set_link_appearance" DEFAULT 'primary';
  ALTER TABLE "flDet_blocks_image_pins" ADD COLUMN "image_pins_set_heading" jsonb;
  ALTER TABLE "flDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_type" "enum_flDet_blocks_image_pins_image_pins_set_link_type" DEFAULT 'internal';
  ALTER TABLE "flDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_new_tab" boolean;
  ALTER TABLE "flDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_has_anchor" boolean;
  ALTER TABLE "flDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_dark_button" boolean;
  ALTER TABLE "flDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "flDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_icon_position" "icnPos" DEFAULT 'left';
  ALTER TABLE "flDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_icon" "enum_flDet_blocks_image_pins_image_pins_set_link_icon";
  ALTER TABLE "flDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_label" varchar;
  ALTER TABLE "flDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_relation" "enum_flDet_blocks_image_pins_image_pins_set_link_relation" DEFAULT 'pages';
  ALTER TABLE "flDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_url" varchar;
  ALTER TABLE "flDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_anchor_to" varchar;
  ALTER TABLE "flDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_appearance" "enum_flDet_blocks_image_pins_image_pins_set_link_appearance" DEFAULT 'primary';
  ALTER TABLE "newsDet_blocks_image_pins" ADD COLUMN "image_pins_set_heading" jsonb;
  ALTER TABLE "newsDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_type" "enum_newsDet_blocks_image_pins_image_pins_set_link_type" DEFAULT 'internal';
  ALTER TABLE "newsDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_new_tab" boolean;
  ALTER TABLE "newsDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_has_anchor" boolean;
  ALTER TABLE "newsDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_dark_button" boolean;
  ALTER TABLE "newsDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "newsDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_icon_position" "icnPos" DEFAULT 'left';
  ALTER TABLE "newsDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_icon" "enum_newsDet_blocks_image_pins_image_pins_set_link_icon";
  ALTER TABLE "newsDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_label" varchar;
  ALTER TABLE "newsDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_relation" "enum_newsDet_blocks_image_pins_image_pins_set_link_relation" DEFAULT 'pages';
  ALTER TABLE "newsDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_url" varchar;
  ALTER TABLE "newsDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_anchor_to" varchar;
  ALTER TABLE "newsDet_blocks_image_pins" ADD COLUMN "image_pins_set_link_appearance" "enum_newsDet_blocks_image_pins_image_pins_set_link_appearance" DEFAULT 'primary';
  ALTER TABLE "share_blocks_image_pins" DROP COLUMN IF EXISTS "text";
  ALTER TABLE "pages_blocks_image_pins" DROP COLUMN IF EXISTS "text";
  ALTER TABLE "_pages_v_blocks_image_pins" DROP COLUMN IF EXISTS "text";
  ALTER TABLE "flDet_blocks_image_pins" DROP COLUMN IF EXISTS "text";
  ALTER TABLE "newsDet_blocks_image_pins" DROP COLUMN IF EXISTS "text";`)
}

export async function down({ db, payload: _payload, req: _req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "share_blocks_image_pins" ADD COLUMN "text" jsonb;
  ALTER TABLE "pages_blocks_image_pins" ADD COLUMN "text" jsonb;
  ALTER TABLE "_pages_v_blocks_image_pins" ADD COLUMN "text" jsonb;
  ALTER TABLE "flDet_blocks_image_pins" ADD COLUMN "text" jsonb;
  ALTER TABLE "newsDet_blocks_image_pins" ADD COLUMN "text" jsonb;
  ALTER TABLE "share_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_heading";
  ALTER TABLE "share_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_type";
  ALTER TABLE "share_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_new_tab";
  ALTER TABLE "share_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_has_anchor";
  ALTER TABLE "share_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_dark_button";
  ALTER TABLE "share_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_icon_only";
  ALTER TABLE "share_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_icon_position";
  ALTER TABLE "share_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_icon";
  ALTER TABLE "share_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_label";
  ALTER TABLE "share_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_relation";
  ALTER TABLE "share_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_url";
  ALTER TABLE "share_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_anchor_to";
  ALTER TABLE "share_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_appearance";
  ALTER TABLE "pages_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_heading";
  ALTER TABLE "pages_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_type";
  ALTER TABLE "pages_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_new_tab";
  ALTER TABLE "pages_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_has_anchor";
  ALTER TABLE "pages_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_dark_button";
  ALTER TABLE "pages_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_icon_only";
  ALTER TABLE "pages_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_icon_position";
  ALTER TABLE "pages_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_icon";
  ALTER TABLE "pages_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_label";
  ALTER TABLE "pages_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_relation";
  ALTER TABLE "pages_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_url";
  ALTER TABLE "pages_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_anchor_to";
  ALTER TABLE "pages_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_appearance";
  ALTER TABLE "_pages_v_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_heading";
  ALTER TABLE "_pages_v_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_type";
  ALTER TABLE "_pages_v_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_new_tab";
  ALTER TABLE "_pages_v_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_has_anchor";
  ALTER TABLE "_pages_v_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_dark_button";
  ALTER TABLE "_pages_v_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_icon_only";
  ALTER TABLE "_pages_v_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_icon_position";
  ALTER TABLE "_pages_v_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_icon";
  ALTER TABLE "_pages_v_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_label";
  ALTER TABLE "_pages_v_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_relation";
  ALTER TABLE "_pages_v_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_url";
  ALTER TABLE "_pages_v_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_anchor_to";
  ALTER TABLE "_pages_v_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_appearance";
  ALTER TABLE "flDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_heading";
  ALTER TABLE "flDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_type";
  ALTER TABLE "flDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_new_tab";
  ALTER TABLE "flDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_has_anchor";
  ALTER TABLE "flDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_dark_button";
  ALTER TABLE "flDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_icon_only";
  ALTER TABLE "flDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_icon_position";
  ALTER TABLE "flDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_icon";
  ALTER TABLE "flDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_label";
  ALTER TABLE "flDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_relation";
  ALTER TABLE "flDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_url";
  ALTER TABLE "flDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_anchor_to";
  ALTER TABLE "flDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_appearance";
  ALTER TABLE "newsDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_heading";
  ALTER TABLE "newsDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_type";
  ALTER TABLE "newsDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_new_tab";
  ALTER TABLE "newsDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_has_anchor";
  ALTER TABLE "newsDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_dark_button";
  ALTER TABLE "newsDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_icon_only";
  ALTER TABLE "newsDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_icon_position";
  ALTER TABLE "newsDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_icon";
  ALTER TABLE "newsDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_label";
  ALTER TABLE "newsDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_relation";
  ALTER TABLE "newsDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_url";
  ALTER TABLE "newsDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_anchor_to";
  ALTER TABLE "newsDet_blocks_image_pins" DROP COLUMN IF EXISTS "image_pins_set_link_appearance";
  ALTER TABLE "public"."share_blocks_content" ALTER COLUMN "content_settings_background" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_content_content_settings_background";
  CREATE TYPE "public"."enum_share_blocks_content_content_settings_background" AS ENUM('dark');
  ALTER TABLE "public"."share_blocks_content" ALTER COLUMN "content_settings_background" SET DATA TYPE "public"."enum_share_blocks_content_content_settings_background" USING "content_settings_background"::"public"."enum_share_blocks_content_content_settings_background";
  ALTER TABLE "public"."pages_blocks_content" ALTER COLUMN "content_settings_background" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_content_content_settings_background";
  CREATE TYPE "public"."enum_pages_blocks_content_content_settings_background" AS ENUM('dark');
  ALTER TABLE "public"."pages_blocks_content" ALTER COLUMN "content_settings_background" SET DATA TYPE "public"."enum_pages_blocks_content_content_settings_background" USING "content_settings_background"::"public"."enum_pages_blocks_content_content_settings_background";
  ALTER TABLE "public"."_pages_v_blocks_content" ALTER COLUMN "content_settings_background" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_content_content_settings_background";
  CREATE TYPE "public"."enum__pages_v_blocks_content_content_settings_background" AS ENUM('dark');
  ALTER TABLE "public"."_pages_v_blocks_content" ALTER COLUMN "content_settings_background" SET DATA TYPE "public"."enum__pages_v_blocks_content_content_settings_background" USING "content_settings_background"::"public"."enum__pages_v_blocks_content_content_settings_background";
  ALTER TABLE "public"."flDet_blocks_content" ALTER COLUMN "content_settings_background" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_content_content_settings_background";
  CREATE TYPE "public"."enum_flDet_blocks_content_content_settings_background" AS ENUM('dark');
  ALTER TABLE "public"."flDet_blocks_content" ALTER COLUMN "content_settings_background" SET DATA TYPE "public"."enum_flDet_blocks_content_content_settings_background" USING "content_settings_background"::"public"."enum_flDet_blocks_content_content_settings_background";
  ALTER TABLE "public"."newsDet_blocks_content" ALTER COLUMN "content_settings_background" SET DATA TYPE text;
  DROP TYPE "public"."enum_newsDet_blocks_content_content_settings_background";
  CREATE TYPE "public"."enum_newsDet_blocks_content_content_settings_background" AS ENUM('dark');
  ALTER TABLE "public"."newsDet_blocks_content" ALTER COLUMN "content_settings_background" SET DATA TYPE "public"."enum_newsDet_blocks_content_content_settings_background" USING "content_settings_background"::"public"."enum_newsDet_blocks_content_content_settings_background";
  DROP TYPE "public"."enum_share_blocks_image_pins_image_pins_set_link_type";
  DROP TYPE "public"."enum_share_blocks_image_pins_image_pins_set_link_icon";
  DROP TYPE "public"."enum_share_blocks_image_pins_image_pins_set_link_relation";
  DROP TYPE "public"."enum_share_blocks_image_pins_image_pins_set_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_image_pins_image_pins_set_link_type";
  DROP TYPE "public"."enum_pages_blocks_image_pins_image_pins_set_link_icon";
  DROP TYPE "public"."enum_pages_blocks_image_pins_image_pins_set_link_relation";
  DROP TYPE "public"."enum_pages_blocks_image_pins_image_pins_set_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_image_pins_image_pins_set_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_image_pins_image_pins_set_link_icon";
  DROP TYPE "public"."enum__pages_v_blocks_image_pins_image_pins_set_link_relation";
  DROP TYPE "public"."enum__pages_v_blocks_image_pins_image_pins_set_link_appearance";
  DROP TYPE "public"."enum_flDet_blocks_image_pins_image_pins_set_link_type";
  DROP TYPE "public"."enum_flDet_blocks_image_pins_image_pins_set_link_icon";
  DROP TYPE "public"."enum_flDet_blocks_image_pins_image_pins_set_link_relation";
  DROP TYPE "public"."enum_flDet_blocks_image_pins_image_pins_set_link_appearance";
  DROP TYPE "public"."enum_newsDet_blocks_image_pins_image_pins_set_link_type";
  DROP TYPE "public"."enum_newsDet_blocks_image_pins_image_pins_set_link_icon";
  DROP TYPE "public"."enum_newsDet_blocks_image_pins_image_pins_set_link_relation";
  DROP TYPE "public"."enum_newsDet_blocks_image_pins_image_pins_set_link_appearance";`)
}
