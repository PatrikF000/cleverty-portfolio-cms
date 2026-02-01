import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_share_blocks_features_features_with_image_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_share_blocks_highlighted_text_text_size" AS ENUM('large', 'medium');
  CREATE TYPE "public"."enum_share_blocks_img_content_person_bullets_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_share_blocks_img_content_person_bullets_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_share_blocks_img_content_img_cont_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_share_blocks_img_content_img_cont_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_share_blocks_img_content_img_cont_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_share_blocks_img_content_content_type" AS ENUM('default', 'person', 'accordion');
  CREATE TYPE "public"."enum_share_blocks_img_content_accordion_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_share_blocks_img_content_accordion_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_share_blocks_img_content_accordion_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_share_blocks_img_content_accordion_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_share_blocks_img_content_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_share_blocks_images_grid_layout" AS ENUM('withContent', 'onlyImages');
  CREATE TYPE "public"."enum_share_blocks_our_projects_our_proj_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_share_blocks_our_projects_our_proj_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_share_blocks_our_projects_our_proj_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_share_blocks_step_cards_step_cards_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_share_blocks_step_cards_step_cards_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_share_blocks_step_cards_step_cards_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_pages_blocks_features_features_with_image_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_pages_blocks_highlighted_text_text_size" AS ENUM('large', 'medium');
  CREATE TYPE "public"."enum_pages_blocks_img_content_person_bullets_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_pages_blocks_img_content_person_bullets_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_pages_blocks_img_content_img_cont_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_pages_blocks_img_content_img_cont_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_pages_blocks_img_content_img_cont_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_pages_blocks_img_content_content_type" AS ENUM('default', 'person', 'accordion');
  CREATE TYPE "public"."enum_pages_blocks_img_content_accordion_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_pages_blocks_img_content_accordion_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_pages_blocks_img_content_accordion_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_pages_blocks_img_content_accordion_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_img_content_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_images_grid_layout" AS ENUM('withContent', 'onlyImages');
  CREATE TYPE "public"."enum_pages_blocks_our_projects_our_proj_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_pages_blocks_our_projects_our_proj_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_pages_blocks_our_projects_our_proj_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_pages_blocks_step_cards_step_cards_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_pages_blocks_step_cards_step_cards_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_pages_blocks_step_cards_step_cards_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_with_image_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum__pages_v_blocks_highlighted_text_text_size" AS ENUM('large', 'medium');
  CREATE TYPE "public"."enum__pages_v_blocks_img_content_person_bullets_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum__pages_v_blocks_img_content_person_bullets_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum__pages_v_blocks_img_content_img_cont_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum__pages_v_blocks_img_content_img_cont_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum__pages_v_blocks_img_content_img_cont_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum__pages_v_blocks_img_content_content_type" AS ENUM('default', 'person', 'accordion');
  CREATE TYPE "public"."enum__pages_v_blocks_img_content_accordion_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum__pages_v_blocks_img_content_accordion_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum__pages_v_blocks_img_content_accordion_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum__pages_v_blocks_img_content_accordion_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_img_content_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_images_grid_layout" AS ENUM('withContent', 'onlyImages');
  CREATE TYPE "public"."enum__pages_v_blocks_our_projects_our_proj_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum__pages_v_blocks_our_projects_our_proj_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum__pages_v_blocks_our_projects_our_proj_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum__pages_v_blocks_step_cards_step_cards_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum__pages_v_blocks_step_cards_step_cards_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum__pages_v_blocks_step_cards_step_cards_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_flDet_blocks_features_features_with_image_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_flDet_blocks_highlighted_text_text_size" AS ENUM('large', 'medium');
  CREATE TYPE "public"."enum_flDet_blocks_img_content_person_bullets_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_flDet_blocks_img_content_person_bullets_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_flDet_blocks_img_content_img_cont_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_flDet_blocks_img_content_img_cont_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_flDet_blocks_img_content_img_cont_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_flDet_blocks_img_content_content_type" AS ENUM('default', 'person', 'accordion');
  CREATE TYPE "public"."enum_flDet_blocks_img_content_accordion_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_flDet_blocks_img_content_accordion_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_flDet_blocks_img_content_accordion_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_flDet_blocks_img_content_accordion_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_flDet_blocks_img_content_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_flDet_blocks_images_grid_layout" AS ENUM('withContent', 'onlyImages');
  CREATE TYPE "public"."enum_flDet_blocks_our_projects_our_proj_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_flDet_blocks_our_projects_our_proj_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_flDet_blocks_our_projects_our_proj_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_flDet_blocks_step_cards_step_cards_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_flDet_blocks_step_cards_step_cards_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_flDet_blocks_step_cards_step_cards_set_background" AS ENUM('dark');
  CREATE TABLE IF NOT EXISTS "share_blocks_contact_contact_form_config_disposition_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_features_features_with_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_image_id" integer,
  	"feature_description" jsonb,
  	"feature_bg" "enum_share_blocks_features_features_with_image_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_img_content_person_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_icon" "enum_share_blocks_img_content_person_bullets_feature_icon",
  	"feature_description" jsonb,
  	"feature_bg" "enum_share_blocks_img_content_person_bullets_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_img_content_accordion_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"accordion_item_title" varchar,
  	"accordion_item_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_img_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"img_cont_set_anchor_id" varchar,
  	"img_cont_set_padding_top" "enum_share_blocks_img_content_img_cont_set_padding_top" DEFAULT 'medium',
  	"img_cont_set_padding_bottom" "enum_share_blocks_img_content_img_cont_set_padding_bottom" DEFAULT 'medium',
  	"img_cont_set_has_background_image" boolean DEFAULT false,
  	"img_cont_set_background" "enum_share_blocks_img_content_img_cont_set_background" DEFAULT 'dark',
  	"img_cont_set_background_image_id" integer,
  	"content_type" "enum_share_blocks_img_content_content_type" DEFAULT 'default',
  	"content" jsonb,
  	"upper_title" jsonb,
  	"person_content" jsonb,
  	"person_person_info_name" varchar,
  	"person_person_info_position" varchar,
  	"person_person_info_phone" varchar,
  	"person_person_info_email" varchar,
  	"accordion_link_type" "enum_share_blocks_img_content_accordion_link_type" DEFAULT 'internal',
  	"accordion_link_new_tab" boolean,
  	"accordion_link_has_anchor" boolean,
  	"accordion_link_dark_button" boolean,
  	"accordion_link_icon_only" boolean DEFAULT false,
  	"accordion_link_icon_position" "icnPos" DEFAULT 'left',
  	"accordion_link_icon" "enum_share_blocks_img_content_accordion_link_icon",
  	"accordion_link_label" varchar,
  	"accordion_link_relation" "enum_share_blocks_img_content_accordion_link_relation" DEFAULT 'pages',
  	"accordion_link_url" varchar,
  	"accordion_link_anchor_to" varchar,
  	"accordion_link_appearance" "enum_share_blocks_img_content_accordion_link_appearance" DEFAULT 'primary',
  	"image_id" integer,
  	"image_position" "enum_share_blocks_img_content_image_position" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_our_projects_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_our_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"our_proj_set_anchor_id" varchar,
  	"our_proj_set_padding_top" "enum_share_blocks_our_projects_our_proj_set_padding_top" DEFAULT 'medium',
  	"our_proj_set_padding_bottom" "enum_share_blocks_our_projects_our_proj_set_padding_bottom" DEFAULT 'medium',
  	"our_proj_set_has_background_image" boolean DEFAULT false,
  	"our_proj_set_background" "enum_share_blocks_our_projects_our_proj_set_background" DEFAULT 'dark',
  	"our_proj_set_background_image_id" integer,
  	"our_proj_set_heading" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_step_cards_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_step_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step_cards_set_anchor_id" varchar,
  	"step_cards_set_padding_top" "enum_share_blocks_step_cards_step_cards_set_padding_top" DEFAULT 'medium',
  	"step_cards_set_padding_bottom" "enum_share_blocks_step_cards_step_cards_set_padding_bottom" DEFAULT 'medium',
  	"step_cards_set_has_background_image" boolean DEFAULT false,
  	"step_cards_set_background" "enum_share_blocks_step_cards_step_cards_set_background" DEFAULT 'dark',
  	"step_cards_set_background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_contact_contact_form_config_disposition_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_features_features_with_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_image_id" integer,
  	"feature_description" jsonb,
  	"feature_bg" "enum_pages_blocks_features_features_with_image_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_img_content_person_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_icon" "enum_pages_blocks_img_content_person_bullets_feature_icon",
  	"feature_description" jsonb,
  	"feature_bg" "enum_pages_blocks_img_content_person_bullets_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_img_content_accordion_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"accordion_item_title" varchar,
  	"accordion_item_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_img_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"img_cont_set_anchor_id" varchar,
  	"img_cont_set_padding_top" "enum_pages_blocks_img_content_img_cont_set_padding_top" DEFAULT 'medium',
  	"img_cont_set_padding_bottom" "enum_pages_blocks_img_content_img_cont_set_padding_bottom" DEFAULT 'medium',
  	"img_cont_set_has_background_image" boolean DEFAULT false,
  	"img_cont_set_background" "enum_pages_blocks_img_content_img_cont_set_background" DEFAULT 'dark',
  	"img_cont_set_background_image_id" integer,
  	"content_type" "enum_pages_blocks_img_content_content_type" DEFAULT 'default',
  	"content" jsonb,
  	"upper_title" jsonb,
  	"person_content" jsonb,
  	"person_person_info_name" varchar,
  	"person_person_info_position" varchar,
  	"person_person_info_phone" varchar,
  	"person_person_info_email" varchar,
  	"accordion_link_type" "enum_pages_blocks_img_content_accordion_link_type" DEFAULT 'internal',
  	"accordion_link_new_tab" boolean,
  	"accordion_link_has_anchor" boolean,
  	"accordion_link_dark_button" boolean,
  	"accordion_link_icon_only" boolean DEFAULT false,
  	"accordion_link_icon_position" "icnPos" DEFAULT 'left',
  	"accordion_link_icon" "enum_pages_blocks_img_content_accordion_link_icon",
  	"accordion_link_label" varchar,
  	"accordion_link_relation" "enum_pages_blocks_img_content_accordion_link_relation" DEFAULT 'pages',
  	"accordion_link_url" varchar,
  	"accordion_link_anchor_to" varchar,
  	"accordion_link_appearance" "enum_pages_blocks_img_content_accordion_link_appearance" DEFAULT 'primary',
  	"image_id" integer,
  	"image_position" "enum_pages_blocks_img_content_image_position" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_our_projects_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_our_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"our_proj_set_anchor_id" varchar,
  	"our_proj_set_padding_top" "enum_pages_blocks_our_projects_our_proj_set_padding_top" DEFAULT 'medium',
  	"our_proj_set_padding_bottom" "enum_pages_blocks_our_projects_our_proj_set_padding_bottom" DEFAULT 'medium',
  	"our_proj_set_has_background_image" boolean DEFAULT false,
  	"our_proj_set_background" "enum_pages_blocks_our_projects_our_proj_set_background" DEFAULT 'dark',
  	"our_proj_set_background_image_id" integer,
  	"our_proj_set_heading" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_step_cards_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_step_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step_cards_set_anchor_id" varchar,
  	"step_cards_set_padding_top" "enum_pages_blocks_step_cards_step_cards_set_padding_top" DEFAULT 'medium',
  	"step_cards_set_padding_bottom" "enum_pages_blocks_step_cards_step_cards_set_padding_bottom" DEFAULT 'medium',
  	"step_cards_set_has_background_image" boolean DEFAULT false,
  	"step_cards_set_background" "enum_pages_blocks_step_cards_step_cards_set_background" DEFAULT 'dark',
  	"step_cards_set_background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_contact_contact_form_config_disposition_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_features_features_with_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature_image_id" integer,
  	"feature_description" jsonb,
  	"feature_bg" "enum__pages_v_blocks_features_features_with_image_feature_bg" DEFAULT 'cream',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_img_content_person_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature_icon" "enum__pages_v_blocks_img_content_person_bullets_feature_icon",
  	"feature_description" jsonb,
  	"feature_bg" "enum__pages_v_blocks_img_content_person_bullets_feature_bg" DEFAULT 'cream',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_img_content_accordion_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"accordion_item_title" varchar,
  	"accordion_item_content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_img_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"img_cont_set_anchor_id" varchar,
  	"img_cont_set_padding_top" "enum__pages_v_blocks_img_content_img_cont_set_padding_top" DEFAULT 'medium',
  	"img_cont_set_padding_bottom" "enum__pages_v_blocks_img_content_img_cont_set_padding_bottom" DEFAULT 'medium',
  	"img_cont_set_has_background_image" boolean DEFAULT false,
  	"img_cont_set_background" "enum__pages_v_blocks_img_content_img_cont_set_background" DEFAULT 'dark',
  	"img_cont_set_background_image_id" integer,
  	"content_type" "enum__pages_v_blocks_img_content_content_type" DEFAULT 'default',
  	"content" jsonb,
  	"upper_title" jsonb,
  	"person_content" jsonb,
  	"person_person_info_name" varchar,
  	"person_person_info_position" varchar,
  	"person_person_info_phone" varchar,
  	"person_person_info_email" varchar,
  	"accordion_link_type" "enum__pages_v_blocks_img_content_accordion_link_type" DEFAULT 'internal',
  	"accordion_link_new_tab" boolean,
  	"accordion_link_has_anchor" boolean,
  	"accordion_link_dark_button" boolean,
  	"accordion_link_icon_only" boolean DEFAULT false,
  	"accordion_link_icon_position" "icnPos" DEFAULT 'left',
  	"accordion_link_icon" "enum__pages_v_blocks_img_content_accordion_link_icon",
  	"accordion_link_label" varchar,
  	"accordion_link_relation" "enum__pages_v_blocks_img_content_accordion_link_relation" DEFAULT 'pages',
  	"accordion_link_url" varchar,
  	"accordion_link_anchor_to" varchar,
  	"accordion_link_appearance" "enum__pages_v_blocks_img_content_accordion_link_appearance" DEFAULT 'primary',
  	"image_id" integer,
  	"image_position" "enum__pages_v_blocks_img_content_image_position" DEFAULT 'right',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_our_projects_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_our_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"our_proj_set_anchor_id" varchar,
  	"our_proj_set_padding_top" "enum__pages_v_blocks_our_projects_our_proj_set_padding_top" DEFAULT 'medium',
  	"our_proj_set_padding_bottom" "enum__pages_v_blocks_our_projects_our_proj_set_padding_bottom" DEFAULT 'medium',
  	"our_proj_set_has_background_image" boolean DEFAULT false,
  	"our_proj_set_background" "enum__pages_v_blocks_our_projects_our_proj_set_background" DEFAULT 'dark',
  	"our_proj_set_background_image_id" integer,
  	"our_proj_set_heading" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_step_cards_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_step_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"step_cards_set_anchor_id" varchar,
  	"step_cards_set_padding_top" "enum__pages_v_blocks_step_cards_step_cards_set_padding_top" DEFAULT 'medium',
  	"step_cards_set_padding_bottom" "enum__pages_v_blocks_step_cards_step_cards_set_padding_bottom" DEFAULT 'medium',
  	"step_cards_set_has_background_image" boolean DEFAULT false,
  	"step_cards_set_background" "enum__pages_v_blocks_step_cards_step_cards_set_background" DEFAULT 'dark',
  	"step_cards_set_background_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_contact_contact_form_config_disposition_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_features_features_with_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_image_id" integer,
  	"feature_description" jsonb,
  	"feature_bg" "enum_flDet_blocks_features_features_with_image_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_img_content_person_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_icon" "enum_flDet_blocks_img_content_person_bullets_feature_icon",
  	"feature_description" jsonb,
  	"feature_bg" "enum_flDet_blocks_img_content_person_bullets_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_img_content_accordion_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"accordion_item_title" varchar,
  	"accordion_item_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_img_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"img_cont_set_anchor_id" varchar,
  	"img_cont_set_padding_top" "enum_flDet_blocks_img_content_img_cont_set_padding_top" DEFAULT 'medium',
  	"img_cont_set_padding_bottom" "enum_flDet_blocks_img_content_img_cont_set_padding_bottom" DEFAULT 'medium',
  	"img_cont_set_has_background_image" boolean DEFAULT false,
  	"img_cont_set_background" "enum_flDet_blocks_img_content_img_cont_set_background" DEFAULT 'dark',
  	"img_cont_set_background_image_id" integer,
  	"content_type" "enum_flDet_blocks_img_content_content_type" DEFAULT 'default',
  	"content" jsonb,
  	"upper_title" jsonb,
  	"person_content" jsonb,
  	"person_person_info_name" varchar,
  	"person_person_info_position" varchar,
  	"person_person_info_phone" varchar,
  	"person_person_info_email" varchar,
  	"accordion_link_type" "enum_flDet_blocks_img_content_accordion_link_type" DEFAULT 'internal',
  	"accordion_link_new_tab" boolean,
  	"accordion_link_has_anchor" boolean,
  	"accordion_link_dark_button" boolean,
  	"accordion_link_icon_only" boolean DEFAULT false,
  	"accordion_link_icon_position" "icnPos" DEFAULT 'left',
  	"accordion_link_icon" "enum_flDet_blocks_img_content_accordion_link_icon",
  	"accordion_link_label" varchar,
  	"accordion_link_relation" "enum_flDet_blocks_img_content_accordion_link_relation" DEFAULT 'pages',
  	"accordion_link_url" varchar,
  	"accordion_link_anchor_to" varchar,
  	"accordion_link_appearance" "enum_flDet_blocks_img_content_accordion_link_appearance" DEFAULT 'primary',
  	"image_id" integer,
  	"image_position" "enum_flDet_blocks_img_content_image_position" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_our_projects_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_our_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"our_proj_set_anchor_id" varchar,
  	"our_proj_set_padding_top" "enum_flDet_blocks_our_projects_our_proj_set_padding_top" DEFAULT 'medium',
  	"our_proj_set_padding_bottom" "enum_flDet_blocks_our_projects_our_proj_set_padding_bottom" DEFAULT 'medium',
  	"our_proj_set_has_background_image" boolean DEFAULT false,
  	"our_proj_set_background" "enum_flDet_blocks_our_projects_our_proj_set_background" DEFAULT 'dark',
  	"our_proj_set_background_image_id" integer,
  	"our_proj_set_heading" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_step_cards_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_step_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step_cards_set_anchor_id" varchar,
  	"step_cards_set_padding_top" "enum_flDet_blocks_step_cards_step_cards_set_padding_top" DEFAULT 'medium',
  	"step_cards_set_padding_bottom" "enum_flDet_blocks_step_cards_step_cards_set_padding_bottom" DEFAULT 'medium',
  	"step_cards_set_has_background_image" boolean DEFAULT false,
  	"step_cards_set_background" "enum_flDet_blocks_step_cards_step_cards_set_background" DEFAULT 'dark',
  	"step_cards_set_background_image_id" integer,
  	"block_name" varchar
  );
  
  ALTER TABLE "imgContent_person_bullet_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "imgContent_accordion_accordion_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "imgContent" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_imgContent_v_person_bullet_points" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_imgContent_v_accordion_accordion_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_imgContent_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "imgContent_person_bullet_points" CASCADE;
  DROP TABLE "imgContent_accordion_accordion_items" CASCADE;
  DROP TABLE "imgContent" CASCADE;
  DROP TABLE "_imgContent_v_person_bullet_points" CASCADE;
  DROP TABLE "_imgContent_v_accordion_accordion_items" CASCADE;
  DROP TABLE "_imgContent_v" CASCADE;
  ALTER TABLE "share_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DEFAULT 'light';
  ALTER TABLE "pages_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DEFAULT 'light';
  ALTER TABLE "_pages_v_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DEFAULT 'light';
  ALTER TABLE "flDet_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DEFAULT 'light';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "descfull" jsonb;
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_disposition_label" varchar DEFAULT 'Flat Disposition';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_disposition_placeholder" varchar DEFAULT 'Select flat disposition';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_disposition_validation_required_message" varchar DEFAULT 'Please select a flat disposition';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_bottom_content" jsonb;
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_label" varchar DEFAULT 'I agree to the terms and conditions';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_content" jsonb;
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "share_blocks_highlighted_text" ADD COLUMN "text_size" "enum_share_blocks_highlighted_text_text_size" DEFAULT 'large';
  ALTER TABLE "share_blocks_images_grid" ADD COLUMN "layout" "enum_share_blocks_images_grid_layout" DEFAULT 'withContent';
  ALTER TABLE "share_blocks_images_grid" ADD COLUMN "grid_content" jsonb;
  ALTER TABLE "share_blocks_timeline_timeline" ADD COLUMN "descfull" jsonb;
  ALTER TABLE "share_blocks_timeline" ADD COLUMN "timeline_settings_heading" jsonb;
  ALTER TABLE "share_blocks_timeline" ADD COLUMN "right_content" jsonb;
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "descfull" jsonb;
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_disposition_label" varchar DEFAULT 'Flat Disposition';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_disposition_placeholder" varchar DEFAULT 'Select flat disposition';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_disposition_validation_required_message" varchar DEFAULT 'Please select a flat disposition';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_bottom_content" jsonb;
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_label" varchar DEFAULT 'I agree to the terms and conditions';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_content" jsonb;
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "pages_blocks_highlighted_text" ADD COLUMN "text_size" "enum_pages_blocks_highlighted_text_text_size" DEFAULT 'large';
  ALTER TABLE "pages_blocks_images_grid" ADD COLUMN "layout" "enum_pages_blocks_images_grid_layout" DEFAULT 'withContent';
  ALTER TABLE "pages_blocks_images_grid" ADD COLUMN "grid_content" jsonb;
  ALTER TABLE "pages_blocks_timeline_timeline" ADD COLUMN "descfull" jsonb;
  ALTER TABLE "pages_blocks_timeline" ADD COLUMN "timeline_settings_heading" jsonb;
  ALTER TABLE "pages_blocks_timeline" ADD COLUMN "right_content" jsonb;
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "descfull" jsonb;
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_disposition_label" varchar DEFAULT 'Flat Disposition';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_disposition_placeholder" varchar DEFAULT 'Select flat disposition';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_disposition_validation_required_message" varchar DEFAULT 'Please select a flat disposition';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_bottom_content" jsonb;
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_label" varchar DEFAULT 'I agree to the terms and conditions';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_content" jsonb;
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "_pages_v_blocks_highlighted_text" ADD COLUMN "text_size" "enum__pages_v_blocks_highlighted_text_text_size" DEFAULT 'large';
  ALTER TABLE "_pages_v_blocks_images_grid" ADD COLUMN "layout" "enum__pages_v_blocks_images_grid_layout" DEFAULT 'withContent';
  ALTER TABLE "_pages_v_blocks_images_grid" ADD COLUMN "grid_content" jsonb;
  ALTER TABLE "_pages_v_blocks_timeline_timeline" ADD COLUMN "descfull" jsonb;
  ALTER TABLE "_pages_v_blocks_timeline" ADD COLUMN "timeline_settings_heading" jsonb;
  ALTER TABLE "_pages_v_blocks_timeline" ADD COLUMN "right_content" jsonb;
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "descfull" jsonb;
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_disposition_label" varchar DEFAULT 'Flat Disposition';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_disposition_placeholder" varchar DEFAULT 'Select flat disposition';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_disposition_validation_required_message" varchar DEFAULT 'Please select a flat disposition';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_bottom_content" jsonb;
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_label" varchar DEFAULT 'I agree to the terms and conditions';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_content" jsonb;
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "flDet_blocks_highlighted_text" ADD COLUMN "text_size" "enum_flDet_blocks_highlighted_text_text_size" DEFAULT 'large';
  ALTER TABLE "flDet_blocks_images_grid" ADD COLUMN "layout" "enum_flDet_blocks_images_grid_layout" DEFAULT 'withContent';
  ALTER TABLE "flDet_blocks_images_grid" ADD COLUMN "grid_content" jsonb;
  ALTER TABLE "flDet_blocks_timeline_timeline" ADD COLUMN "descfull" jsonb;
  ALTER TABLE "flDet_blocks_timeline" ADD COLUMN "timeline_settings_heading" jsonb;
  ALTER TABLE "flDet_blocks_timeline" ADD COLUMN "right_content" jsonb;
  DO $$ BEGIN
   ALTER TABLE "share_blocks_contact_contact_form_config_disposition_options" ADD CONSTRAINT "share_blocks_contact_contact_form_config_disposition_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_features_features_with_image" ADD CONSTRAINT "share_blocks_features_features_with_image_feature_image_id_media_id_fk" FOREIGN KEY ("feature_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_features_features_with_image" ADD CONSTRAINT "share_blocks_features_features_with_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_img_content_person_bullets" ADD CONSTRAINT "share_blocks_img_content_person_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_img_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_img_content_accordion_accordion_items" ADD CONSTRAINT "share_blocks_img_content_accordion_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_img_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_img_content" ADD CONSTRAINT "share_blocks_img_content_img_cont_set_background_image_id_media_id_fk" FOREIGN KEY ("img_cont_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_img_content" ADD CONSTRAINT "share_blocks_img_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_img_content" ADD CONSTRAINT "share_blocks_img_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_our_projects_projects" ADD CONSTRAINT "share_blocks_our_projects_projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_our_projects_projects" ADD CONSTRAINT "share_blocks_our_projects_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_our_projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_our_projects" ADD CONSTRAINT "share_blocks_our_projects_our_proj_set_background_image_id_media_id_fk" FOREIGN KEY ("our_proj_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_our_projects" ADD CONSTRAINT "share_blocks_our_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_step_cards_steps" ADD CONSTRAINT "share_blocks_step_cards_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_step_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_step_cards" ADD CONSTRAINT "share_blocks_step_cards_step_cards_set_background_image_id_media_id_fk" FOREIGN KEY ("step_cards_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_step_cards" ADD CONSTRAINT "share_blocks_step_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_contact_contact_form_config_disposition_options" ADD CONSTRAINT "pages_blocks_contact_contact_form_config_disposition_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_features_features_with_image" ADD CONSTRAINT "pages_blocks_features_features_with_image_feature_image_id_media_id_fk" FOREIGN KEY ("feature_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_features_features_with_image" ADD CONSTRAINT "pages_blocks_features_features_with_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_img_content_person_bullets" ADD CONSTRAINT "pages_blocks_img_content_person_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_img_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_img_content_accordion_accordion_items" ADD CONSTRAINT "pages_blocks_img_content_accordion_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_img_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_img_content" ADD CONSTRAINT "pages_blocks_img_content_img_cont_set_background_image_id_media_id_fk" FOREIGN KEY ("img_cont_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_img_content" ADD CONSTRAINT "pages_blocks_img_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_img_content" ADD CONSTRAINT "pages_blocks_img_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_our_projects_projects" ADD CONSTRAINT "pages_blocks_our_projects_projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_our_projects_projects" ADD CONSTRAINT "pages_blocks_our_projects_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_our_projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_our_projects" ADD CONSTRAINT "pages_blocks_our_projects_our_proj_set_background_image_id_media_id_fk" FOREIGN KEY ("our_proj_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_our_projects" ADD CONSTRAINT "pages_blocks_our_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_step_cards_steps" ADD CONSTRAINT "pages_blocks_step_cards_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_step_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_step_cards" ADD CONSTRAINT "pages_blocks_step_cards_step_cards_set_background_image_id_media_id_fk" FOREIGN KEY ("step_cards_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_step_cards" ADD CONSTRAINT "pages_blocks_step_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_contact_contact_form_config_disposition_options" ADD CONSTRAINT "_pages_v_blocks_contact_contact_form_config_disposition_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_features_features_with_image" ADD CONSTRAINT "_pages_v_blocks_features_features_with_image_feature_image_id_media_id_fk" FOREIGN KEY ("feature_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_features_features_with_image" ADD CONSTRAINT "_pages_v_blocks_features_features_with_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_img_content_person_bullets" ADD CONSTRAINT "_pages_v_blocks_img_content_person_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_img_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_img_content_accordion_accordion_items" ADD CONSTRAINT "_pages_v_blocks_img_content_accordion_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_img_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_img_content" ADD CONSTRAINT "_pages_v_blocks_img_content_img_cont_set_background_image_id_media_id_fk" FOREIGN KEY ("img_cont_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_img_content" ADD CONSTRAINT "_pages_v_blocks_img_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_img_content" ADD CONSTRAINT "_pages_v_blocks_img_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_our_projects_projects" ADD CONSTRAINT "_pages_v_blocks_our_projects_projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_our_projects_projects" ADD CONSTRAINT "_pages_v_blocks_our_projects_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_our_projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_our_projects" ADD CONSTRAINT "_pages_v_blocks_our_projects_our_proj_set_background_image_id_media_id_fk" FOREIGN KEY ("our_proj_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_our_projects" ADD CONSTRAINT "_pages_v_blocks_our_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_step_cards_steps" ADD CONSTRAINT "_pages_v_blocks_step_cards_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_step_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_step_cards" ADD CONSTRAINT "_pages_v_blocks_step_cards_step_cards_set_background_image_id_media_id_fk" FOREIGN KEY ("step_cards_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_step_cards" ADD CONSTRAINT "_pages_v_blocks_step_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_contact_contact_form_config_disposition_options" ADD CONSTRAINT "flDet_blocks_contact_contact_form_config_disposition_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_features_features_with_image" ADD CONSTRAINT "flDet_blocks_features_features_with_image_feature_image_id_media_id_fk" FOREIGN KEY ("feature_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_features_features_with_image" ADD CONSTRAINT "flDet_blocks_features_features_with_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_img_content_person_bullets" ADD CONSTRAINT "flDet_blocks_img_content_person_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_img_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_img_content_accordion_accordion_items" ADD CONSTRAINT "flDet_blocks_img_content_accordion_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_img_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_img_content" ADD CONSTRAINT "flDet_blocks_img_content_img_cont_set_background_image_id_media_id_fk" FOREIGN KEY ("img_cont_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_img_content" ADD CONSTRAINT "flDet_blocks_img_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_img_content" ADD CONSTRAINT "flDet_blocks_img_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_our_projects_projects" ADD CONSTRAINT "flDet_blocks_our_projects_projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_our_projects_projects" ADD CONSTRAINT "flDet_blocks_our_projects_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_our_projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_our_projects" ADD CONSTRAINT "flDet_blocks_our_projects_our_proj_set_background_image_id_media_id_fk" FOREIGN KEY ("our_proj_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_our_projects" ADD CONSTRAINT "flDet_blocks_our_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_step_cards_steps" ADD CONSTRAINT "flDet_blocks_step_cards_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_step_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_step_cards" ADD CONSTRAINT "flDet_blocks_step_cards_step_cards_set_background_image_id_media_id_fk" FOREIGN KEY ("step_cards_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_step_cards" ADD CONSTRAINT "flDet_blocks_step_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "share_blocks_contact_contact_form_config_disposition_options_order_idx" ON "share_blocks_contact_contact_form_config_disposition_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_contact_contact_form_config_disposition_options_parent_id_idx" ON "share_blocks_contact_contact_form_config_disposition_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_contact_contact_form_config_disposition_options_locale_idx" ON "share_blocks_contact_contact_form_config_disposition_options" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_features_features_with_image_order_idx" ON "share_blocks_features_features_with_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_features_features_with_image_parent_id_idx" ON "share_blocks_features_features_with_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_features_features_with_image_locale_idx" ON "share_blocks_features_features_with_image" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_features_features_with_image_feature_feature_image_idx" ON "share_blocks_features_features_with_image" USING btree ("feature_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_img_content_person_bullets_order_idx" ON "share_blocks_img_content_person_bullets" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_img_content_person_bullets_parent_id_idx" ON "share_blocks_img_content_person_bullets" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_img_content_person_bullets_locale_idx" ON "share_blocks_img_content_person_bullets" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_img_content_accordion_accordion_items_order_idx" ON "share_blocks_img_content_accordion_accordion_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_img_content_accordion_accordion_items_parent_id_idx" ON "share_blocks_img_content_accordion_accordion_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_img_content_accordion_accordion_items_locale_idx" ON "share_blocks_img_content_accordion_accordion_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_img_content_order_idx" ON "share_blocks_img_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_img_content_parent_id_idx" ON "share_blocks_img_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_img_content_path_idx" ON "share_blocks_img_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_img_content_locale_idx" ON "share_blocks_img_content" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_img_content_img_cont_set_img_cont_set_background_image_idx" ON "share_blocks_img_content" USING btree ("img_cont_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_img_content_image_idx" ON "share_blocks_img_content" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_our_projects_projects_order_idx" ON "share_blocks_our_projects_projects" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_our_projects_projects_parent_id_idx" ON "share_blocks_our_projects_projects" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_our_projects_projects_locale_idx" ON "share_blocks_our_projects_projects" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_our_projects_projects_image_idx" ON "share_blocks_our_projects_projects" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_our_projects_order_idx" ON "share_blocks_our_projects" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_our_projects_parent_id_idx" ON "share_blocks_our_projects" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_our_projects_path_idx" ON "share_blocks_our_projects" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_our_projects_locale_idx" ON "share_blocks_our_projects" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_our_projects_our_proj_set_our_proj_set_background_image_idx" ON "share_blocks_our_projects" USING btree ("our_proj_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_step_cards_steps_order_idx" ON "share_blocks_step_cards_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_step_cards_steps_parent_id_idx" ON "share_blocks_step_cards_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_step_cards_steps_locale_idx" ON "share_blocks_step_cards_steps" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_step_cards_order_idx" ON "share_blocks_step_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_step_cards_parent_id_idx" ON "share_blocks_step_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_step_cards_path_idx" ON "share_blocks_step_cards" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_step_cards_locale_idx" ON "share_blocks_step_cards" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_step_cards_step_cards_set_step_cards_set_background_image_idx" ON "share_blocks_step_cards" USING btree ("step_cards_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_contact_form_config_disposition_options_order_idx" ON "pages_blocks_contact_contact_form_config_disposition_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_contact_form_config_disposition_options_parent_id_idx" ON "pages_blocks_contact_contact_form_config_disposition_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_contact_form_config_disposition_options_locale_idx" ON "pages_blocks_contact_contact_form_config_disposition_options" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_features_features_with_image_order_idx" ON "pages_blocks_features_features_with_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_features_features_with_image_parent_id_idx" ON "pages_blocks_features_features_with_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_features_features_with_image_locale_idx" ON "pages_blocks_features_features_with_image" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_features_features_with_image_feature_feature_image_idx" ON "pages_blocks_features_features_with_image" USING btree ("feature_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_img_content_person_bullets_order_idx" ON "pages_blocks_img_content_person_bullets" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_img_content_person_bullets_parent_id_idx" ON "pages_blocks_img_content_person_bullets" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_img_content_person_bullets_locale_idx" ON "pages_blocks_img_content_person_bullets" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_img_content_accordion_accordion_items_order_idx" ON "pages_blocks_img_content_accordion_accordion_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_img_content_accordion_accordion_items_parent_id_idx" ON "pages_blocks_img_content_accordion_accordion_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_img_content_accordion_accordion_items_locale_idx" ON "pages_blocks_img_content_accordion_accordion_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_img_content_order_idx" ON "pages_blocks_img_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_img_content_parent_id_idx" ON "pages_blocks_img_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_img_content_path_idx" ON "pages_blocks_img_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_img_content_locale_idx" ON "pages_blocks_img_content" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_img_content_img_cont_set_img_cont_set_background_image_idx" ON "pages_blocks_img_content" USING btree ("img_cont_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_img_content_image_idx" ON "pages_blocks_img_content" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_our_projects_projects_order_idx" ON "pages_blocks_our_projects_projects" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_our_projects_projects_parent_id_idx" ON "pages_blocks_our_projects_projects" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_our_projects_projects_locale_idx" ON "pages_blocks_our_projects_projects" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_our_projects_projects_image_idx" ON "pages_blocks_our_projects_projects" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_our_projects_order_idx" ON "pages_blocks_our_projects" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_our_projects_parent_id_idx" ON "pages_blocks_our_projects" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_our_projects_path_idx" ON "pages_blocks_our_projects" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_our_projects_locale_idx" ON "pages_blocks_our_projects" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_our_projects_our_proj_set_our_proj_set_background_image_idx" ON "pages_blocks_our_projects" USING btree ("our_proj_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_step_cards_steps_order_idx" ON "pages_blocks_step_cards_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_step_cards_steps_parent_id_idx" ON "pages_blocks_step_cards_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_step_cards_steps_locale_idx" ON "pages_blocks_step_cards_steps" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_step_cards_order_idx" ON "pages_blocks_step_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_step_cards_parent_id_idx" ON "pages_blocks_step_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_step_cards_path_idx" ON "pages_blocks_step_cards" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_step_cards_locale_idx" ON "pages_blocks_step_cards" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_step_cards_step_cards_set_step_cards_set_background_image_idx" ON "pages_blocks_step_cards" USING btree ("step_cards_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact_contact_form_config_disposition_options_order_idx" ON "_pages_v_blocks_contact_contact_form_config_disposition_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact_contact_form_config_disposition_options_parent_id_idx" ON "_pages_v_blocks_contact_contact_form_config_disposition_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact_contact_form_config_disposition_options_locale_idx" ON "_pages_v_blocks_contact_contact_form_config_disposition_options" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_features_features_with_image_order_idx" ON "_pages_v_blocks_features_features_with_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_features_features_with_image_parent_id_idx" ON "_pages_v_blocks_features_features_with_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_features_features_with_image_locale_idx" ON "_pages_v_blocks_features_features_with_image" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_features_features_with_image_feature_feature_image_idx" ON "_pages_v_blocks_features_features_with_image" USING btree ("feature_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_img_content_person_bullets_order_idx" ON "_pages_v_blocks_img_content_person_bullets" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_img_content_person_bullets_parent_id_idx" ON "_pages_v_blocks_img_content_person_bullets" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_img_content_person_bullets_locale_idx" ON "_pages_v_blocks_img_content_person_bullets" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_img_content_accordion_accordion_items_order_idx" ON "_pages_v_blocks_img_content_accordion_accordion_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_img_content_accordion_accordion_items_parent_id_idx" ON "_pages_v_blocks_img_content_accordion_accordion_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_img_content_accordion_accordion_items_locale_idx" ON "_pages_v_blocks_img_content_accordion_accordion_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_img_content_order_idx" ON "_pages_v_blocks_img_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_img_content_parent_id_idx" ON "_pages_v_blocks_img_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_img_content_path_idx" ON "_pages_v_blocks_img_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_img_content_locale_idx" ON "_pages_v_blocks_img_content" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_img_content_img_cont_set_img_cont_set_background_image_idx" ON "_pages_v_blocks_img_content" USING btree ("img_cont_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_img_content_image_idx" ON "_pages_v_blocks_img_content" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_our_projects_projects_order_idx" ON "_pages_v_blocks_our_projects_projects" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_our_projects_projects_parent_id_idx" ON "_pages_v_blocks_our_projects_projects" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_our_projects_projects_locale_idx" ON "_pages_v_blocks_our_projects_projects" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_our_projects_projects_image_idx" ON "_pages_v_blocks_our_projects_projects" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_our_projects_order_idx" ON "_pages_v_blocks_our_projects" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_our_projects_parent_id_idx" ON "_pages_v_blocks_our_projects" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_our_projects_path_idx" ON "_pages_v_blocks_our_projects" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_our_projects_locale_idx" ON "_pages_v_blocks_our_projects" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_our_projects_our_proj_set_our_proj_set_background_image_idx" ON "_pages_v_blocks_our_projects" USING btree ("our_proj_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_step_cards_steps_order_idx" ON "_pages_v_blocks_step_cards_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_step_cards_steps_parent_id_idx" ON "_pages_v_blocks_step_cards_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_step_cards_steps_locale_idx" ON "_pages_v_blocks_step_cards_steps" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_step_cards_order_idx" ON "_pages_v_blocks_step_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_step_cards_parent_id_idx" ON "_pages_v_blocks_step_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_step_cards_path_idx" ON "_pages_v_blocks_step_cards" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_step_cards_locale_idx" ON "_pages_v_blocks_step_cards" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_step_cards_step_cards_set_step_cards_set_background_image_idx" ON "_pages_v_blocks_step_cards" USING btree ("step_cards_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_contact_contact_form_config_disposition_options_order_idx" ON "flDet_blocks_contact_contact_form_config_disposition_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_contact_contact_form_config_disposition_options_parent_id_idx" ON "flDet_blocks_contact_contact_form_config_disposition_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_contact_contact_form_config_disposition_options_locale_idx" ON "flDet_blocks_contact_contact_form_config_disposition_options" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_features_features_with_image_order_idx" ON "flDet_blocks_features_features_with_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_features_features_with_image_parent_id_idx" ON "flDet_blocks_features_features_with_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_features_features_with_image_locale_idx" ON "flDet_blocks_features_features_with_image" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_features_features_with_image_feature_feature_image_idx" ON "flDet_blocks_features_features_with_image" USING btree ("feature_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_img_content_person_bullets_order_idx" ON "flDet_blocks_img_content_person_bullets" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_img_content_person_bullets_parent_id_idx" ON "flDet_blocks_img_content_person_bullets" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_img_content_person_bullets_locale_idx" ON "flDet_blocks_img_content_person_bullets" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_img_content_accordion_accordion_items_order_idx" ON "flDet_blocks_img_content_accordion_accordion_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_img_content_accordion_accordion_items_parent_id_idx" ON "flDet_blocks_img_content_accordion_accordion_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_img_content_accordion_accordion_items_locale_idx" ON "flDet_blocks_img_content_accordion_accordion_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_img_content_order_idx" ON "flDet_blocks_img_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_img_content_parent_id_idx" ON "flDet_blocks_img_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_img_content_path_idx" ON "flDet_blocks_img_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_img_content_locale_idx" ON "flDet_blocks_img_content" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_img_content_img_cont_set_img_cont_set_background_image_idx" ON "flDet_blocks_img_content" USING btree ("img_cont_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_img_content_image_idx" ON "flDet_blocks_img_content" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_our_projects_projects_order_idx" ON "flDet_blocks_our_projects_projects" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_our_projects_projects_parent_id_idx" ON "flDet_blocks_our_projects_projects" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_our_projects_projects_locale_idx" ON "flDet_blocks_our_projects_projects" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_our_projects_projects_image_idx" ON "flDet_blocks_our_projects_projects" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_our_projects_order_idx" ON "flDet_blocks_our_projects" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_our_projects_parent_id_idx" ON "flDet_blocks_our_projects" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_our_projects_path_idx" ON "flDet_blocks_our_projects" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_our_projects_locale_idx" ON "flDet_blocks_our_projects" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_our_projects_our_proj_set_our_proj_set_background_image_idx" ON "flDet_blocks_our_projects" USING btree ("our_proj_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_step_cards_steps_order_idx" ON "flDet_blocks_step_cards_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_step_cards_steps_parent_id_idx" ON "flDet_blocks_step_cards_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_step_cards_steps_locale_idx" ON "flDet_blocks_step_cards_steps" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_step_cards_order_idx" ON "flDet_blocks_step_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_step_cards_parent_id_idx" ON "flDet_blocks_step_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_step_cards_path_idx" ON "flDet_blocks_step_cards" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_step_cards_locale_idx" ON "flDet_blocks_step_cards" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_step_cards_step_cards_set_step_cards_set_background_image_idx" ON "flDet_blocks_step_cards" USING btree ("step_cards_set_background_image_id");
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_with_text_label";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_with_text_content";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_with_text_validation_required_message";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_title";
  ALTER TABLE "share_blocks_timeline_timeline" DROP COLUMN IF EXISTS "description";
  ALTER TABLE "share_blocks_timeline" DROP COLUMN IF EXISTS "content";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_with_text_label";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_with_text_content";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_with_text_validation_required_message";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_title";
  ALTER TABLE "pages_blocks_timeline_timeline" DROP COLUMN IF EXISTS "description";
  ALTER TABLE "pages_blocks_timeline" DROP COLUMN IF EXISTS "content";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_with_text_label";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_with_text_content";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_with_text_validation_required_message";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_title";
  ALTER TABLE "_pages_v_blocks_timeline_timeline" DROP COLUMN IF EXISTS "description";
  ALTER TABLE "_pages_v_blocks_timeline" DROP COLUMN IF EXISTS "content";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_with_text_label";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_with_text_content";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_with_text_validation_required_message";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_title";
  ALTER TABLE "flDet_blocks_timeline_timeline" DROP COLUMN IF EXISTS "description";
  ALTER TABLE "flDet_blocks_timeline" DROP COLUMN IF EXISTS "content";
  ALTER TABLE "public"."share_blocks_features" ALTER COLUMN "features_variant" SET DATA TYPE text;
  ALTER TABLE "public"."share_blocks_features" ALTER COLUMN "features_variant" SET DATA TYPE "public"."enum_share_blocks_features_features_variant" USING "features_variant"::"public"."enum_share_blocks_features_features_variant";
  ALTER TABLE "public"."share_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DATA TYPE text;
  ALTER TABLE "public"."share_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DATA TYPE "public"."enum_share_blocks_timeline_timeline_settings_background" USING "timeline_settings_background"::"public"."enum_share_blocks_timeline_timeline_settings_background";
  ALTER TABLE "public"."pages_blocks_features" ALTER COLUMN "features_variant" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_features_features_variant" CASCADE;
  CREATE TYPE "public"."enum_pages_blocks_features_features_variant" AS ENUM('uppercase', 'withImage', 'withTitle');
  ALTER TABLE "public"."pages_blocks_features" ALTER COLUMN "features_variant" SET DATA TYPE "public"."enum_pages_blocks_features_features_variant" USING "features_variant"::"public"."enum_pages_blocks_features_features_variant";
  ALTER TABLE "public"."pages_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_timeline_timeline_settings_background" CASCADE;
  CREATE TYPE "public"."enum_pages_blocks_timeline_timeline_settings_background" AS ENUM('light');
  ALTER TABLE "public"."pages_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DATA TYPE "public"."enum_pages_blocks_timeline_timeline_settings_background" USING "timeline_settings_background"::"public"."enum_pages_blocks_timeline_timeline_settings_background";
  ALTER TABLE "public"."_pages_v_blocks_features" ALTER COLUMN "features_variant" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_features_features_variant" CASCADE;
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_variant" AS ENUM('uppercase', 'withImage', 'withTitle');
  ALTER TABLE "public"."_pages_v_blocks_features" ALTER COLUMN "features_variant" SET DATA TYPE "public"."enum__pages_v_blocks_features_features_variant" USING "features_variant"::"public"."enum__pages_v_blocks_features_features_variant";
  ALTER TABLE "public"."_pages_v_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_timeline_timeline_settings_background" CASCADE;
  CREATE TYPE "public"."enum__pages_v_blocks_timeline_timeline_settings_background" AS ENUM('light');
  ALTER TABLE "public"."_pages_v_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DATA TYPE "public"."enum__pages_v_blocks_timeline_timeline_settings_background" USING "timeline_settings_background"::"public"."enum__pages_v_blocks_timeline_timeline_settings_background";
  ALTER TABLE "public"."flDet_blocks_features" ALTER COLUMN "features_variant" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_features_features_variant" CASCADE;
  CREATE TYPE "public"."enum_flDet_blocks_features_features_variant" AS ENUM('uppercase', 'withImage', 'withTitle');
  ALTER TABLE "public"."flDet_blocks_features" ALTER COLUMN "features_variant" SET DATA TYPE "public"."enum_flDet_blocks_features_features_variant" USING "features_variant"::"public"."enum_flDet_blocks_features_features_variant";
  ALTER TABLE "public"."flDet_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_timeline_timeline_settings_background" CASCADE;
  CREATE TYPE "public"."enum_flDet_blocks_timeline_timeline_settings_background" AS ENUM('light');
  ALTER TABLE "public"."flDet_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DATA TYPE "public"."enum_flDet_blocks_timeline_timeline_settings_background" USING "timeline_settings_background"::"public"."enum_flDet_blocks_timeline_timeline_settings_background";
  DROP TYPE "public"."enum_imgContent_person_bullet_points_feature_icon" CASCADE;
  DROP TYPE "public"."enum_imgContent_person_bullet_points_feature_bg" CASCADE;
  DROP TYPE "public"."enum_imgContent_image_content_settings_padding_top" CASCADE;
  DROP TYPE "public"."enum_imgContent_image_content_settings_padding_bottom" CASCADE;
  DROP TYPE "public"."enum_imgContent_image_content_settings_background" CASCADE;
  DROP TYPE "public"."enum_imgContent_content_type" CASCADE;
  DROP TYPE "public"."enum_imgContent_accordion_link_type" CASCADE;
  DROP TYPE "public"."enum_imgContent_accordion_link_icon" CASCADE;
  DROP TYPE "public"."enum_imgContent_accordion_link_relation" CASCADE;
  DROP TYPE "public"."enum_imgContent_accordion_link_appearance" CASCADE;
  DROP TYPE "public"."enum_imgContent_image_position" CASCADE;
  DROP TYPE "public"."enum_imgContent_image_size" CASCADE;
  DROP TYPE "public"."enum__imgContent_v_person_bullet_points_feature_icon" CASCADE;
  DROP TYPE "public"."enum__imgContent_v_person_bullet_points_feature_bg" CASCADE;
  DROP TYPE "public"."enum__imgContent_v_image_content_settings_padding_top" CASCADE;
  DROP TYPE "public"."enum__imgContent_v_image_content_settings_padding_bottom" CASCADE;
  DROP TYPE "public"."enum__imgContent_v_image_content_settings_background" CASCADE;
  DROP TYPE "public"."enum__imgContent_v_content_type" CASCADE;
  DROP TYPE "public"."enum__imgContent_v_accordion_link_type" CASCADE;
  DROP TYPE "public"."enum__imgContent_v_accordion_link_icon" CASCADE;
  DROP TYPE "public"."enum__imgContent_v_accordion_link_relation" CASCADE;
  DROP TYPE "public"."enum__imgContent_v_accordion_link_appearance" CASCADE;
  DROP TYPE "public"."enum__imgContent_v_image_position" CASCADE;
  DROP TYPE "public"."enum__imgContent_v_image_size" CASCADE;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_imgContent_person_bullet_points_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_imgContent_person_bullet_points_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_imgContent_image_content_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_imgContent_image_content_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_imgContent_image_content_settings_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_imgContent_content_type" AS ENUM('default', 'person', 'accordion');
  CREATE TYPE "public"."enum_imgContent_accordion_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_imgContent_accordion_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_imgContent_accordion_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_imgContent_accordion_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_imgContent_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_imgContent_image_size" AS ENUM('small', 'medium');
  CREATE TYPE "public"."enum__imgContent_v_person_bullet_points_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum__imgContent_v_person_bullet_points_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum__imgContent_v_image_content_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum__imgContent_v_image_content_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum__imgContent_v_image_content_settings_background" AS ENUM('dark');
  CREATE TYPE "public"."enum__imgContent_v_content_type" AS ENUM('default', 'person', 'accordion');
  CREATE TYPE "public"."enum__imgContent_v_accordion_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum__imgContent_v_accordion_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum__imgContent_v_accordion_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum__imgContent_v_accordion_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__imgContent_v_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__imgContent_v_image_size" AS ENUM('small', 'medium');
  CREATE TABLE IF NOT EXISTS "imgContent_person_bullet_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_icon" "enum_imgContent_person_bullet_points_feature_icon",
  	"feature_description" jsonb,
  	"feature_bg" "enum_imgContent_person_bullet_points_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "imgContent_accordion_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"accordion_item_title" varchar,
  	"accordion_item_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "imgContent" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_content_settings_anchor_id" varchar,
  	"image_content_settings_padding_top" "enum_imgContent_image_content_settings_padding_top" DEFAULT 'medium',
  	"image_content_settings_padding_bottom" "enum_imgContent_image_content_settings_padding_bottom" DEFAULT 'medium',
  	"image_content_settings_has_background_image" boolean DEFAULT false,
  	"image_content_settings_background" "enum_imgContent_image_content_settings_background" DEFAULT 'dark',
  	"image_content_settings_background_image_id" integer,
  	"content_type" "enum_imgContent_content_type" DEFAULT 'default',
  	"content" jsonb,
  	"person_content" jsonb,
  	"accordion_link_type" "enum_imgContent_accordion_link_type" DEFAULT 'internal',
  	"accordion_link_new_tab" boolean,
  	"accordion_link_has_anchor" boolean,
  	"accordion_link_dark_button" boolean,
  	"accordion_link_icon_only" boolean DEFAULT false,
  	"accordion_link_icon_position" "icnPos" DEFAULT 'left',
  	"accordion_link_icon" "enum_imgContent_accordion_link_icon",
  	"accordion_link_label" varchar,
  	"accordion_link_relation" "enum_imgContent_accordion_link_relation" DEFAULT 'pages',
  	"accordion_link_url" varchar,
  	"accordion_link_anchor_to" varchar,
  	"accordion_link_appearance" "enum_imgContent_accordion_link_appearance" DEFAULT 'primary',
  	"image_id" integer,
  	"image_position" "enum_imgContent_image_position" DEFAULT 'right',
  	"image_size" "enum_imgContent_image_size" DEFAULT 'medium',
  	"image_bottom_content_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_imgContent_v_person_bullet_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature_icon" "enum__imgContent_v_person_bullet_points_feature_icon",
  	"feature_description" jsonb,
  	"feature_bg" "enum__imgContent_v_person_bullet_points_feature_bg" DEFAULT 'cream',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_imgContent_v_accordion_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"accordion_item_title" varchar,
  	"accordion_item_content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_imgContent_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_content_settings_anchor_id" varchar,
  	"image_content_settings_padding_top" "enum__imgContent_v_image_content_settings_padding_top" DEFAULT 'medium',
  	"image_content_settings_padding_bottom" "enum__imgContent_v_image_content_settings_padding_bottom" DEFAULT 'medium',
  	"image_content_settings_has_background_image" boolean DEFAULT false,
  	"image_content_settings_background" "enum__imgContent_v_image_content_settings_background" DEFAULT 'dark',
  	"image_content_settings_background_image_id" integer,
  	"content_type" "enum__imgContent_v_content_type" DEFAULT 'default',
  	"content" jsonb,
  	"person_content" jsonb,
  	"accordion_link_type" "enum__imgContent_v_accordion_link_type" DEFAULT 'internal',
  	"accordion_link_new_tab" boolean,
  	"accordion_link_has_anchor" boolean,
  	"accordion_link_dark_button" boolean,
  	"accordion_link_icon_only" boolean DEFAULT false,
  	"accordion_link_icon_position" "icnPos" DEFAULT 'left',
  	"accordion_link_icon" "enum__imgContent_v_accordion_link_icon",
  	"accordion_link_label" varchar,
  	"accordion_link_relation" "enum__imgContent_v_accordion_link_relation" DEFAULT 'pages',
  	"accordion_link_url" varchar,
  	"accordion_link_anchor_to" varchar,
  	"accordion_link_appearance" "enum__imgContent_v_accordion_link_appearance" DEFAULT 'primary',
  	"image_id" integer,
  	"image_position" "enum__imgContent_v_image_position" DEFAULT 'right',
  	"image_size" "enum__imgContent_v_image_size" DEFAULT 'medium',
  	"image_bottom_content_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "share_blocks_contact_contact_form_config_disposition_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "share_blocks_features_features_with_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "share_blocks_img_content_person_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "share_blocks_img_content_accordion_accordion_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "share_blocks_img_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "share_blocks_our_projects_projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "share_blocks_our_projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "share_blocks_step_cards_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "share_blocks_step_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_contact_contact_form_config_disposition_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_features_features_with_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_img_content_person_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_img_content_accordion_accordion_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_img_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_our_projects_projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_our_projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_step_cards_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_step_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_contact_contact_form_config_disposition_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_features_features_with_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_img_content_person_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_img_content_accordion_accordion_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_img_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_our_projects_projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_our_projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_step_cards_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_step_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_contact_contact_form_config_disposition_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_features_features_with_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_img_content_person_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_img_content_accordion_accordion_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_img_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_our_projects_projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_our_projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_step_cards_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_step_cards" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "share_blocks_contact_contact_form_config_disposition_options" CASCADE;
  DROP TABLE "share_blocks_features_features_with_image" CASCADE;
  DROP TABLE "share_blocks_img_content_person_bullets" CASCADE;
  DROP TABLE "share_blocks_img_content_accordion_accordion_items" CASCADE;
  DROP TABLE "share_blocks_img_content" CASCADE;
  DROP TABLE "share_blocks_our_projects_projects" CASCADE;
  DROP TABLE "share_blocks_our_projects" CASCADE;
  DROP TABLE "share_blocks_step_cards_steps" CASCADE;
  DROP TABLE "share_blocks_step_cards" CASCADE;
  DROP TABLE "pages_blocks_contact_contact_form_config_disposition_options" CASCADE;
  DROP TABLE "pages_blocks_features_features_with_image" CASCADE;
  DROP TABLE "pages_blocks_img_content_person_bullets" CASCADE;
  DROP TABLE "pages_blocks_img_content_accordion_accordion_items" CASCADE;
  DROP TABLE "pages_blocks_img_content" CASCADE;
  DROP TABLE "pages_blocks_our_projects_projects" CASCADE;
  DROP TABLE "pages_blocks_our_projects" CASCADE;
  DROP TABLE "pages_blocks_step_cards_steps" CASCADE;
  DROP TABLE "pages_blocks_step_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_contact_form_config_disposition_options" CASCADE;
  DROP TABLE "_pages_v_blocks_features_features_with_image" CASCADE;
  DROP TABLE "_pages_v_blocks_img_content_person_bullets" CASCADE;
  DROP TABLE "_pages_v_blocks_img_content_accordion_accordion_items" CASCADE;
  DROP TABLE "_pages_v_blocks_img_content" CASCADE;
  DROP TABLE "_pages_v_blocks_our_projects_projects" CASCADE;
  DROP TABLE "_pages_v_blocks_our_projects" CASCADE;
  DROP TABLE "_pages_v_blocks_step_cards_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_step_cards" CASCADE;
  DROP TABLE "flDet_blocks_contact_contact_form_config_disposition_options" CASCADE;
  DROP TABLE "flDet_blocks_features_features_with_image" CASCADE;
  DROP TABLE "flDet_blocks_img_content_person_bullets" CASCADE;
  DROP TABLE "flDet_blocks_img_content_accordion_accordion_items" CASCADE;
  DROP TABLE "flDet_blocks_img_content" CASCADE;
  DROP TABLE "flDet_blocks_our_projects_projects" CASCADE;
  DROP TABLE "flDet_blocks_our_projects" CASCADE;
  DROP TABLE "flDet_blocks_step_cards_steps" CASCADE;
  DROP TABLE "flDet_blocks_step_cards" CASCADE;
  ALTER TABLE "share_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DEFAULT 'dark';
  ALTER TABLE "pages_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DEFAULT 'dark';
  ALTER TABLE "_pages_v_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DEFAULT 'dark';
  ALTER TABLE "flDet_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DEFAULT 'dark';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_checkbox_with_text_label" varchar DEFAULT 'I agree to the terms and conditions';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_checkbox_with_text_content" jsonb;
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_checkbox_with_text_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_title" varchar;
  ALTER TABLE "share_blocks_timeline_timeline" ADD COLUMN "description" varchar;
  ALTER TABLE "share_blocks_timeline" ADD COLUMN "content" jsonb;
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_checkbox_with_text_label" varchar DEFAULT 'I agree to the terms and conditions';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_checkbox_with_text_content" jsonb;
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_checkbox_with_text_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_title" varchar;
  ALTER TABLE "pages_blocks_timeline_timeline" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_blocks_timeline" ADD COLUMN "content" jsonb;
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_checkbox_with_text_label" varchar DEFAULT 'I agree to the terms and conditions';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_checkbox_with_text_content" jsonb;
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_checkbox_with_text_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_title" varchar;
  ALTER TABLE "_pages_v_blocks_timeline_timeline" ADD COLUMN "description" varchar;
  ALTER TABLE "_pages_v_blocks_timeline" ADD COLUMN "content" jsonb;
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_checkbox_with_text_label" varchar DEFAULT 'I agree to the terms and conditions';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_checkbox_with_text_content" jsonb;
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_checkbox_with_text_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_title" varchar;
  ALTER TABLE "flDet_blocks_timeline_timeline" ADD COLUMN "description" varchar;
  ALTER TABLE "flDet_blocks_timeline" ADD COLUMN "content" jsonb;
  DO $$ BEGIN
   ALTER TABLE "imgContent_person_bullet_points" ADD CONSTRAINT "imgContent_person_bullet_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."imgContent"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "imgContent_accordion_accordion_items" ADD CONSTRAINT "imgContent_accordion_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."imgContent"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "imgContent" ADD CONSTRAINT "imgContent_image_content_settings_background_image_id_media_id_fk" FOREIGN KEY ("image_content_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "imgContent" ADD CONSTRAINT "imgContent_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "imgContent" ADD CONSTRAINT "imgContent_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_imgContent_v_person_bullet_points" ADD CONSTRAINT "_imgContent_v_person_bullet_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_imgContent_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_imgContent_v_accordion_accordion_items" ADD CONSTRAINT "_imgContent_v_accordion_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_imgContent_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_imgContent_v" ADD CONSTRAINT "_imgContent_v_image_content_settings_background_image_id_media_id_fk" FOREIGN KEY ("image_content_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_imgContent_v" ADD CONSTRAINT "_imgContent_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_imgContent_v" ADD CONSTRAINT "_imgContent_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "imgContent_person_bullet_points_order_idx" ON "imgContent_person_bullet_points" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "imgContent_person_bullet_points_parent_id_idx" ON "imgContent_person_bullet_points" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "imgContent_person_bullet_points_locale_idx" ON "imgContent_person_bullet_points" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "imgContent_accordion_accordion_items_order_idx" ON "imgContent_accordion_accordion_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "imgContent_accordion_accordion_items_parent_id_idx" ON "imgContent_accordion_accordion_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "imgContent_accordion_accordion_items_locale_idx" ON "imgContent_accordion_accordion_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "imgContent_order_idx" ON "imgContent" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "imgContent_parent_id_idx" ON "imgContent" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "imgContent_path_idx" ON "imgContent" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "imgContent_locale_idx" ON "imgContent" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "imgContent_image_content_settings_image_content_settings_background_image_idx" ON "imgContent" USING btree ("image_content_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "imgContent_image_idx" ON "imgContent" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_imgContent_v_person_bullet_points_order_idx" ON "_imgContent_v_person_bullet_points" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_imgContent_v_person_bullet_points_parent_id_idx" ON "_imgContent_v_person_bullet_points" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_imgContent_v_person_bullet_points_locale_idx" ON "_imgContent_v_person_bullet_points" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_imgContent_v_accordion_accordion_items_order_idx" ON "_imgContent_v_accordion_accordion_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_imgContent_v_accordion_accordion_items_parent_id_idx" ON "_imgContent_v_accordion_accordion_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_imgContent_v_accordion_accordion_items_locale_idx" ON "_imgContent_v_accordion_accordion_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_imgContent_v_order_idx" ON "_imgContent_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_imgContent_v_parent_id_idx" ON "_imgContent_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_imgContent_v_path_idx" ON "_imgContent_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_imgContent_v_locale_idx" ON "_imgContent_v" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_imgContent_v_image_content_settings_image_content_settings_background_image_idx" ON "_imgContent_v" USING btree ("image_content_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "_imgContent_v_image_idx" ON "_imgContent_v" USING btree ("image_id");
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "descfull";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_label";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_placeholder";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_validation_required_message";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_bottom_content";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_label";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_content";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_validation_required_message";
  ALTER TABLE "share_blocks_highlighted_text" DROP COLUMN IF EXISTS "text_size";
  ALTER TABLE "share_blocks_images_grid" DROP COLUMN IF EXISTS "layout";
  ALTER TABLE "share_blocks_images_grid" DROP COLUMN IF EXISTS "grid_content";
  ALTER TABLE "share_blocks_timeline_timeline" DROP COLUMN IF EXISTS "descfull";
  ALTER TABLE "share_blocks_timeline" DROP COLUMN IF EXISTS "timeline_settings_heading";
  ALTER TABLE "share_blocks_timeline" DROP COLUMN IF EXISTS "right_content";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "descfull";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_label";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_placeholder";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_validation_required_message";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_bottom_content";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_label";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_content";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_validation_required_message";
  ALTER TABLE "pages_blocks_highlighted_text" DROP COLUMN IF EXISTS "text_size";
  ALTER TABLE "pages_blocks_images_grid" DROP COLUMN IF EXISTS "layout";
  ALTER TABLE "pages_blocks_images_grid" DROP COLUMN IF EXISTS "grid_content";
  ALTER TABLE "pages_blocks_timeline_timeline" DROP COLUMN IF EXISTS "descfull";
  ALTER TABLE "pages_blocks_timeline" DROP COLUMN IF EXISTS "timeline_settings_heading";
  ALTER TABLE "pages_blocks_timeline" DROP COLUMN IF EXISTS "right_content";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "descfull";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_label";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_placeholder";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_validation_required_message";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_bottom_content";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_label";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_content";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_validation_required_message";
  ALTER TABLE "_pages_v_blocks_highlighted_text" DROP COLUMN IF EXISTS "text_size";
  ALTER TABLE "_pages_v_blocks_images_grid" DROP COLUMN IF EXISTS "layout";
  ALTER TABLE "_pages_v_blocks_images_grid" DROP COLUMN IF EXISTS "grid_content";
  ALTER TABLE "_pages_v_blocks_timeline_timeline" DROP COLUMN IF EXISTS "descfull";
  ALTER TABLE "_pages_v_blocks_timeline" DROP COLUMN IF EXISTS "timeline_settings_heading";
  ALTER TABLE "_pages_v_blocks_timeline" DROP COLUMN IF EXISTS "right_content";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "descfull";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_label";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_placeholder";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_validation_required_message";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_bottom_content";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_label";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_content";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_validation_required_message";
  ALTER TABLE "flDet_blocks_highlighted_text" DROP COLUMN IF EXISTS "text_size";
  ALTER TABLE "flDet_blocks_images_grid" DROP COLUMN IF EXISTS "layout";
  ALTER TABLE "flDet_blocks_images_grid" DROP COLUMN IF EXISTS "grid_content";
  ALTER TABLE "flDet_blocks_timeline_timeline" DROP COLUMN IF EXISTS "descfull";
  ALTER TABLE "flDet_blocks_timeline" DROP COLUMN IF EXISTS "timeline_settings_heading";
  ALTER TABLE "flDet_blocks_timeline" DROP COLUMN IF EXISTS "right_content";
  ALTER TABLE "public"."share_blocks_features" ALTER COLUMN "features_variant" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_features_features_variant" CASCADE;
  CREATE TYPE "public"."enum_share_blocks_features_features_variant" AS ENUM('withTitle', 'uppercase');
  ALTER TABLE "public"."share_blocks_features" ALTER COLUMN "features_variant" SET DATA TYPE "public"."enum_share_blocks_features_features_variant" USING "features_variant"::"public"."enum_share_blocks_features_features_variant";
  ALTER TABLE "public"."share_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_timeline_timeline_settings_background" CASCADE;
  CREATE TYPE "public"."enum_share_blocks_timeline_timeline_settings_background" AS ENUM('dark');
  ALTER TABLE "public"."share_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DATA TYPE "public"."enum_share_blocks_timeline_timeline_settings_background" USING "timeline_settings_background"::"public"."enum_share_blocks_timeline_timeline_settings_background";
  ALTER TABLE "public"."pages_blocks_features" ALTER COLUMN "features_variant" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_features_features_variant" CASCADE;
  CREATE TYPE "public"."enum_pages_blocks_features_features_variant" AS ENUM('withTitle', 'uppercase');
  ALTER TABLE "public"."pages_blocks_features" ALTER COLUMN "features_variant" SET DATA TYPE "public"."enum_pages_blocks_features_features_variant" USING "features_variant"::"public"."enum_pages_blocks_features_features_variant";
  ALTER TABLE "public"."pages_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_timeline_timeline_settings_background" CASCADE;
  CREATE TYPE "public"."enum_pages_blocks_timeline_timeline_settings_background" AS ENUM('dark');
  ALTER TABLE "public"."pages_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DATA TYPE "public"."enum_pages_blocks_timeline_timeline_settings_background" USING "timeline_settings_background"::"public"."enum_pages_blocks_timeline_timeline_settings_background";
  ALTER TABLE "public"."_pages_v_blocks_features" ALTER COLUMN "features_variant" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_features_features_variant" CASCADE;
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_variant" AS ENUM('withTitle', 'uppercase');
  ALTER TABLE "public"."_pages_v_blocks_features" ALTER COLUMN "features_variant" SET DATA TYPE "public"."enum__pages_v_blocks_features_features_variant" USING "features_variant"::"public"."enum__pages_v_blocks_features_features_variant";
  ALTER TABLE "public"."_pages_v_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_timeline_timeline_settings_background" CASCADE;
  CREATE TYPE "public"."enum__pages_v_blocks_timeline_timeline_settings_background" AS ENUM('dark');
  ALTER TABLE "public"."_pages_v_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DATA TYPE "public"."enum__pages_v_blocks_timeline_timeline_settings_background" USING "timeline_settings_background"::"public"."enum__pages_v_blocks_timeline_timeline_settings_background";
  ALTER TABLE "public"."flDet_blocks_features" ALTER COLUMN "features_variant" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_features_features_variant" CASCADE;
  CREATE TYPE "public"."enum_flDet_blocks_features_features_variant" AS ENUM('withTitle', 'uppercase');
  ALTER TABLE "public"."flDet_blocks_features" ALTER COLUMN "features_variant" SET DATA TYPE "public"."enum_flDet_blocks_features_features_variant" USING "features_variant"::"public"."enum_flDet_blocks_features_features_variant";
  ALTER TABLE "public"."flDet_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_timeline_timeline_settings_background" CASCADE;
  CREATE TYPE "public"."enum_flDet_blocks_timeline_timeline_settings_background" AS ENUM('dark');
  ALTER TABLE "public"."flDet_blocks_timeline" ALTER COLUMN "timeline_settings_background" SET DATA TYPE "public"."enum_flDet_blocks_timeline_timeline_settings_background" USING "timeline_settings_background"::"public"."enum_flDet_blocks_timeline_timeline_settings_background";
  DROP TYPE "public"."enum_share_blocks_features_features_with_image_feature_bg" CASCADE;
  DROP TYPE "public"."enum_share_blocks_highlighted_text_text_size" CASCADE;
  DROP TYPE "public"."enum_share_blocks_img_content_person_bullets_feature_icon" CASCADE;
  DROP TYPE "public"."enum_share_blocks_img_content_person_bullets_feature_bg" CASCADE;
  DROP TYPE "public"."enum_share_blocks_img_content_img_cont_set_padding_top" CASCADE;
  DROP TYPE "public"."enum_share_blocks_img_content_img_cont_set_padding_bottom" CASCADE;
  DROP TYPE "public"."enum_share_blocks_img_content_img_cont_set_background" CASCADE;
  DROP TYPE "public"."enum_share_blocks_img_content_content_type" CASCADE;
  DROP TYPE "public"."enum_share_blocks_img_content_accordion_link_type" CASCADE;
  DROP TYPE "public"."enum_share_blocks_img_content_accordion_link_icon" CASCADE;
  DROP TYPE "public"."enum_share_blocks_img_content_accordion_link_relation" CASCADE;
  DROP TYPE "public"."enum_share_blocks_img_content_accordion_link_appearance" CASCADE;
  DROP TYPE "public"."enum_share_blocks_img_content_image_position" CASCADE;
  DROP TYPE "public"."enum_share_blocks_images_grid_layout" CASCADE;
  DROP TYPE "public"."enum_share_blocks_our_projects_our_proj_set_padding_top" CASCADE;
  DROP TYPE "public"."enum_share_blocks_our_projects_our_proj_set_padding_bottom" CASCADE;
  DROP TYPE "public"."enum_share_blocks_our_projects_our_proj_set_background" CASCADE;
  DROP TYPE "public"."enum_share_blocks_step_cards_step_cards_set_padding_top" CASCADE;
  DROP TYPE "public"."enum_share_blocks_step_cards_step_cards_set_padding_bottom" CASCADE;
  DROP TYPE "public"."enum_share_blocks_step_cards_step_cards_set_background" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_features_features_with_image_feature_bg" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_highlighted_text_text_size" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_img_content_person_bullets_feature_icon" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_img_content_person_bullets_feature_bg" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_img_content_img_cont_set_padding_top" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_img_content_img_cont_set_padding_bottom" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_img_content_img_cont_set_background" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_img_content_content_type" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_img_content_accordion_link_type" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_img_content_accordion_link_icon" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_img_content_accordion_link_relation" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_img_content_accordion_link_appearance" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_img_content_image_position" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_images_grid_layout" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_our_projects_our_proj_set_padding_top" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_our_projects_our_proj_set_padding_bottom" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_our_projects_our_proj_set_background" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_step_cards_step_cards_set_padding_top" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_step_cards_step_cards_set_padding_bottom" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_step_cards_step_cards_set_background" CASCADE;
  DROP TYPE "public"."enum__pages_v_blocks_features_features_with_image_feature_bg" CASCADE;
  DROP TYPE "public"."enum__pages_v_blocks_highlighted_text_text_size" CASCADE;
  DROP TYPE "public"."enum__pages_v_blocks_img_content_person_bullets_feature_icon" CASCADE;
  DROP TYPE "public"."enum__pages_v_blocks_img_content_person_bullets_feature_bg" CASCADE;
  DROP TYPE "public"."enum__pages_v_blocks_img_content_img_cont_set_padding_top" CASCADE;
  DROP TYPE "public"."enum__pages_v_blocks_img_content_img_cont_set_padding_bottom" CASCADE;
  DROP TYPE "public"."enum__pages_v_blocks_img_content_img_cont_set_background" CASCADE;
  DROP TYPE "public"."enum__pages_v_blocks_img_content_content_type" CASCADE;
  DROP TYPE "public"."enum__pages_v_blocks_img_content_accordion_link_type" CASCADE;
  DROP TYPE "public"."enum__pages_v_blocks_img_content_accordion_link_icon" CASCADE;
  DROP TYPE "public"."enum__pages_v_blocks_img_content_accordion_link_relation" CASCADE;
  DROP TYPE "public"."enum__pages_v_blocks_img_content_accordion_link_appearance" CASCADE;
  DROP TYPE "public"."enum__pages_v_blocks_img_content_image_position" CASCADE;
  DROP TYPE "public"."enum__pages_v_blocks_images_grid_layout" CASCADE;
  DROP TYPE "public"."enum__pages_v_blocks_our_projects_our_proj_set_padding_top" CASCADE;
  DROP TYPE "public"."enum__pages_v_blocks_our_projects_our_proj_set_padding_bottom" CASCADE;
  DROP TYPE "public"."enum__pages_v_blocks_our_projects_our_proj_set_background" CASCADE;
  DROP TYPE "public"."enum__pages_v_blocks_step_cards_step_cards_set_padding_top" CASCADE;
  DROP TYPE "public"."enum__pages_v_blocks_step_cards_step_cards_set_padding_bottom" CASCADE;
  DROP TYPE "public"."enum__pages_v_blocks_step_cards_step_cards_set_background" CASCADE;
  DROP TYPE "public"."enum_flDet_blocks_features_features_with_image_feature_bg" CASCADE;
  DROP TYPE "public"."enum_flDet_blocks_highlighted_text_text_size" CASCADE;
  DROP TYPE "public"."enum_flDet_blocks_img_content_person_bullets_feature_icon" CASCADE;
  DROP TYPE "public"."enum_flDet_blocks_img_content_person_bullets_feature_bg" CASCADE;
  DROP TYPE "public"."enum_flDet_blocks_img_content_img_cont_set_padding_top" CASCADE;
  DROP TYPE "public"."enum_flDet_blocks_img_content_img_cont_set_padding_bottom" CASCADE;
  DROP TYPE "public"."enum_flDet_blocks_img_content_img_cont_set_background" CASCADE;
  DROP TYPE "public"."enum_flDet_blocks_img_content_content_type" CASCADE;
  DROP TYPE "public"."enum_flDet_blocks_img_content_accordion_link_type" CASCADE;
  DROP TYPE "public"."enum_flDet_blocks_img_content_accordion_link_icon" CASCADE;
  DROP TYPE "public"."enum_flDet_blocks_img_content_accordion_link_relation" CASCADE;
  DROP TYPE "public"."enum_flDet_blocks_img_content_accordion_link_appearance" CASCADE;
  DROP TYPE "public"."enum_flDet_blocks_img_content_image_position" CASCADE;
  DROP TYPE "public"."enum_flDet_blocks_images_grid_layout" CASCADE;
  DROP TYPE "public"."enum_flDet_blocks_our_projects_our_proj_set_padding_top" CASCADE;
  DROP TYPE "public"."enum_flDet_blocks_our_projects_our_proj_set_padding_bottom" CASCADE;
  DROP TYPE "public"."enum_flDet_blocks_our_projects_our_proj_set_background" CASCADE;
  DROP TYPE "public"."enum_flDet_blocks_step_cards_step_cards_set_padding_top" CASCADE;
  DROP TYPE "public"."enum_flDet_blocks_step_cards_step_cards_set_padding_bottom" CASCADE;
  DROP TYPE "public"."enum_flDet_blocks_step_cards_step_cards_set_background" CASCADE;`)
}
