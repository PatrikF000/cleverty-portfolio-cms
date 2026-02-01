import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "favPage_blocks_hero_hero_slideshow" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_hero_main_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_hero_secondary_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_variable_table_rows_cells" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_variable_table_rows" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_variable_table" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_table_custom" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_draw_editor" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_text_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_banner" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_benefits_benefits_row_item_heading_lines" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_benefits_benefits_row_item2_heading_lines" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_benefits_benefits" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_benefits" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_contact_contact_info_highlighted_contacts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_contact_contact_info_contact_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_contact" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_features_features_with_title" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_features_features_with_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_features_features_uppercase" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_form_slide_out_boxes" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_flats_snippets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_gallery_simple_slider" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_gallery_multi_slider_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_gallery_multi_slider" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_gallery_full_width" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_highlighted_text_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_highlighted_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_img_content_person_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_img_content_accordion_accordion_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_img_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_images_grid_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_images_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_image_pins_pins" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_image_pins" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_map_pins" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_map" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_news_snippets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_numbers_numbers" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_numbers" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_timeline_timeline" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_timeline" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_our_projects_projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_our_projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_prices" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_interactive_picker_extended_views" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_interactive_picker_extended" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_visual_price_list_buildings" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_visual_price_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_step_cards_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_step_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_sticky_slides_slides_slide_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_sticky_slides_slides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_sticky_slides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_multi_gallery_grid_items_complex" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_multi_gallery_grid_items_simple_grid_left_col" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_multi_gallery_grid_items_simple_grid_right_col" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_multi_gallery_grid_items_simple_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_multi_gallery_grid_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_multi_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_blocks_shared_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPagestoone" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "favPage_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "favPage_blocks_hero_hero_slideshow" CASCADE;
  DROP TABLE "favPage_blocks_hero_main_buttons" CASCADE;
  DROP TABLE "favPage_blocks_hero_secondary_buttons" CASCADE;
  DROP TABLE "favPage_blocks_hero" CASCADE;
  DROP TABLE "favPage_blocks_variable_table_rows_cells" CASCADE;
  DROP TABLE "favPage_blocks_variable_table_rows" CASCADE;
  DROP TABLE "favPage_blocks_variable_table" CASCADE;
  DROP TABLE "favPage_blocks_table_custom" CASCADE;
  DROP TABLE "favPage_blocks_draw_editor" CASCADE;
  DROP TABLE "favPage_blocks_text_image" CASCADE;
  DROP TABLE "favPage_blocks_banner" CASCADE;
  DROP TABLE "favPage_blocks_benefits_benefits_row_item_heading_lines" CASCADE;
  DROP TABLE "favPage_blocks_benefits_benefits_row_item2_heading_lines" CASCADE;
  DROP TABLE "favPage_blocks_benefits_benefits" CASCADE;
  DROP TABLE "favPage_blocks_benefits" CASCADE;
  DROP TABLE "favPage_blocks_contact_contact_info_highlighted_contacts" CASCADE;
  DROP TABLE "favPage_blocks_contact_contact_info_contact_items" CASCADE;
  DROP TABLE "favPage_blocks_contact" CASCADE;
  DROP TABLE "favPage_blocks_content" CASCADE;
  DROP TABLE "favPage_blocks_features_features_with_title" CASCADE;
  DROP TABLE "favPage_blocks_features_features_with_image" CASCADE;
  DROP TABLE "favPage_blocks_features_features_uppercase" CASCADE;
  DROP TABLE "favPage_blocks_features" CASCADE;
  DROP TABLE "favPage_blocks_form_slide_out_boxes" CASCADE;
  DROP TABLE "favPage_blocks_form" CASCADE;
  DROP TABLE "favPage_blocks_flats_snippets" CASCADE;
  DROP TABLE "favPage_blocks_gallery_simple_slider" CASCADE;
  DROP TABLE "favPage_blocks_gallery_multi_slider_images" CASCADE;
  DROP TABLE "favPage_blocks_gallery_multi_slider" CASCADE;
  DROP TABLE "favPage_blocks_gallery_full_width" CASCADE;
  DROP TABLE "favPage_blocks_gallery" CASCADE;
  DROP TABLE "favPage_blocks_highlighted_text_buttons" CASCADE;
  DROP TABLE "favPage_blocks_highlighted_text" CASCADE;
  DROP TABLE "favPage_blocks_img_content_person_bullets" CASCADE;
  DROP TABLE "favPage_blocks_img_content_accordion_accordion_items" CASCADE;
  DROP TABLE "favPage_blocks_img_content" CASCADE;
  DROP TABLE "favPage_blocks_images_grid_images" CASCADE;
  DROP TABLE "favPage_blocks_images_grid" CASCADE;
  DROP TABLE "favPage_blocks_image_pins_pins" CASCADE;
  DROP TABLE "favPage_blocks_image_pins" CASCADE;
  DROP TABLE "favPage_blocks_map_pins" CASCADE;
  DROP TABLE "favPage_blocks_map" CASCADE;
  DROP TABLE "favPage_blocks_news_snippets" CASCADE;
  DROP TABLE "favPage_blocks_numbers_numbers" CASCADE;
  DROP TABLE "favPage_blocks_numbers" CASCADE;
  DROP TABLE "favPage_blocks_timeline_timeline" CASCADE;
  DROP TABLE "favPage_blocks_timeline" CASCADE;
  DROP TABLE "favPage_blocks_our_projects_projects" CASCADE;
  DROP TABLE "favPage_blocks_our_projects" CASCADE;
  DROP TABLE "favPage_blocks_prices" CASCADE;
  DROP TABLE "favPage_blocks_interactive_picker_extended_views" CASCADE;
  DROP TABLE "favPage_blocks_interactive_picker_extended" CASCADE;
  DROP TABLE "favPage_blocks_visual_price_list_buildings" CASCADE;
  DROP TABLE "favPage_blocks_visual_price_list" CASCADE;
  DROP TABLE "favPage_blocks_step_cards_steps" CASCADE;
  DROP TABLE "favPage_blocks_step_cards" CASCADE;
  DROP TABLE "favPage_blocks_sticky_slides_slides_slide_images" CASCADE;
  DROP TABLE "favPage_blocks_sticky_slides_slides" CASCADE;
  DROP TABLE "favPage_blocks_sticky_slides" CASCADE;
  DROP TABLE "favPage_blocks_multi_gallery_grid_items_complex" CASCADE;
  DROP TABLE "favPage_blocks_multi_gallery_grid_items_simple_grid_left_col" CASCADE;
  DROP TABLE "favPage_blocks_multi_gallery_grid_items_simple_grid_right_col" CASCADE;
  DROP TABLE "favPage_blocks_multi_gallery_grid_items_simple_grid" CASCADE;
  DROP TABLE "favPage_blocks_multi_gallery_grid_items" CASCADE;
  DROP TABLE "favPage_blocks_multi_gallery" CASCADE;
  DROP TABLE "favPage_blocks_shared_section" CASCADE;
  DROP TABLE "favPage" CASCADE;
  DROP TABLE "favPagestoone" CASCADE;
  DROP TABLE "favPage_rels" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_favourites_page_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_favPage_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "favPage_id";
  DROP TYPE "public"."enum_favPage_blocks_hero_main_buttons_link_type";
  DROP TYPE "public"."enum_favPage_blocks_hero_main_buttons_link_icon";
  DROP TYPE "public"."enum_favPage_blocks_hero_main_buttons_link_relation";
  DROP TYPE "public"."enum_favPage_blocks_hero_main_buttons_link_appearance";
  DROP TYPE "public"."enum_favPage_blocks_hero_secondary_buttons_link_type";
  DROP TYPE "public"."enum_favPage_blocks_hero_secondary_buttons_link_icon";
  DROP TYPE "public"."enum_favPage_blocks_hero_secondary_buttons_link_relation";
  DROP TYPE "public"."enum_favPage_blocks_hero_type";
  DROP TYPE "public"."enum_favPage_blocks_text_image_image_position";
  DROP TYPE "public"."enum_favPage_blocks_banner_banner_settings_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_banner_banner_settings_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_banner_banner_settings_background";
  DROP TYPE "public"."enum_favPage_blocks_banner_flat_form";
  DROP TYPE "public"."enum_favPage_blocks_banner_banner_variant";
  DROP TYPE "public"."enum_favPage_blocks_banner_banner_content_position";
  DROP TYPE "public"."enum_favPage_blocks_banner_banner_button_type";
  DROP TYPE "public"."enum_favPage_blocks_banner_banner_button_icon";
  DROP TYPE "public"."enum_favPage_blocks_banner_banner_button_relation";
  DROP TYPE "public"."enum_favPage_blocks_benefits_benefits_settings_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_benefits_benefits_settings_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_benefits_benefits_settings_background";
  DROP TYPE "public"."enum_favPage_blocks_contact_contact_settings_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_contact_contact_settings_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_contact_contact_settings_background";
  DROP TYPE "public"."enum_favPage_blocks_contact_variant";
  DROP TYPE "public"."enum_favPage_blocks_contact_contact_form_position";
  DROP TYPE "public"."enum_favPage_blocks_content_content_settings_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_content_content_settings_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_content_content_settings_background";
  DROP TYPE "public"."enum_favPage_blocks_content_content_settings_link_type";
  DROP TYPE "public"."enum_favPage_blocks_content_content_settings_link_icon";
  DROP TYPE "public"."enum_favPage_blocks_content_content_settings_link_relation";
  DROP TYPE "public"."enum_favPage_blocks_content_content_settings_link_appearance";
  DROP TYPE "public"."enum_favPage_blocks_content_content_position";
  DROP TYPE "public"."enum_favPage_blocks_features_features_with_title_feature_icon";
  DROP TYPE "public"."enum_favPage_blocks_features_features_with_title_feature_bg";
  DROP TYPE "public"."enum_favPage_blocks_features_features_with_image_feature_bg";
  DROP TYPE "public"."enum_favPage_blocks_features_features_uppercase_feature_icon";
  DROP TYPE "public"."enum_favPage_blocks_features_features_uppercase_feature_bg";
  DROP TYPE "public"."enum_favPage_blocks_features_features_settings_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_features_features_settings_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_features_features_settings_background";
  DROP TYPE "public"."enum_favPage_blocks_features_features_settings_link_type";
  DROP TYPE "public"."enum_favPage_blocks_features_features_settings_link_icon";
  DROP TYPE "public"."enum_favPage_blocks_features_features_settings_link_relation";
  DROP TYPE "public"."enum_favPage_blocks_features_features_settings_link_appearance";
  DROP TYPE "public"."enum_favPage_blocks_features_features_variant";
  DROP TYPE "public"."enum_favPage_blocks_form_form_settings_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_form_form_settings_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_form_form_settings_background";
  DROP TYPE "public"."enum_favPage_blocks_form_layout_variant";
  DROP TYPE "public"."enum_favPage_blocks_form_form_position";
  DROP TYPE "public"."enum_favPage_blocks_flats_snippets_flats_set_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_flats_snippets_flats_set_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_flats_snippets_flats_set_background";
  DROP TYPE "public"."enum_favPage_blocks_flats_snippets_flats_set_link_type";
  DROP TYPE "public"."enum_favPage_blocks_flats_snippets_flats_set_link_icon";
  DROP TYPE "public"."enum_favPage_blocks_flats_snippets_flats_set_link_relation";
  DROP TYPE "public"."enum_favPage_blocks_flats_snippets_flats_set_link_appearance";
  DROP TYPE "public"."enum_favPage_blocks_gallery_simple_slider_slide_width";
  DROP TYPE "public"."enum_favPage_blocks_gallery_multi_slider_images_slide_width";
  DROP TYPE "public"."enum_favPage_blocks_gallery_gallery_settings_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_gallery_gallery_settings_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_gallery_gallery_settings_background";
  DROP TYPE "public"."enum_favPage_blocks_gallery_controls_type";
  DROP TYPE "public"."enum_favPage_blocks_gallery_gallery_variant";
  DROP TYPE "public"."enum_favPage_blocks_gallery_link_type";
  DROP TYPE "public"."enum_favPage_blocks_gallery_link_icon";
  DROP TYPE "public"."enum_favPage_blocks_gallery_link_relation";
  DROP TYPE "public"."enum_favPage_blocks_gallery_link_appearance";
  DROP TYPE "public"."enum_favPage_blocks_highlighted_text_buttons_button_type";
  DROP TYPE "public"."enum_favPage_blocks_highlighted_text_buttons_button_icon";
  DROP TYPE "public"."enum_favPage_blocks_highlighted_text_buttons_button_relation";
  DROP TYPE "public"."enum_favPage_blocks_highlighted_text_buttons_button_appearance";
  DROP TYPE "public"."enum_favPage_blocks_highlighted_text_high_set_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_highlighted_text_high_set_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_highlighted_text_high_set_background";
  DROP TYPE "public"."enum_favPage_blocks_highlighted_text_text_size";
  DROP TYPE "public"."enum_favPage_blocks_img_content_person_bullets_feature_icon";
  DROP TYPE "public"."enum_favPage_blocks_img_content_person_bullets_feature_bg";
  DROP TYPE "public"."enum_favPage_blocks_img_content_img_cont_set_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_img_content_img_cont_set_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_img_content_img_cont_set_background";
  DROP TYPE "public"."enum_favPage_blocks_img_content_content_type";
  DROP TYPE "public"."enum_favPage_blocks_img_content_accordion_link_type";
  DROP TYPE "public"."enum_favPage_blocks_img_content_accordion_link_icon";
  DROP TYPE "public"."enum_favPage_blocks_img_content_accordion_link_relation";
  DROP TYPE "public"."enum_favPage_blocks_img_content_accordion_link_appearance";
  DROP TYPE "public"."enum_favPage_blocks_img_content_image_position";
  DROP TYPE "public"."enum_favPage_blocks_images_grid_images_settings_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_images_grid_images_settings_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_images_grid_images_settings_background";
  DROP TYPE "public"."enum_favPage_blocks_images_grid_layout";
  DROP TYPE "public"."enum_favPage_blocks_images_grid_direction_variant";
  DROP TYPE "public"."enum_favPage_blocks_image_pins_pins_pin_position";
  DROP TYPE "public"."enum_favPage_blocks_image_pins_image_pins_set_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_image_pins_image_pins_set_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_image_pins_image_pins_set_background";
  DROP TYPE "public"."enum_favPage_blocks_image_pins_image_pins_set_link_type";
  DROP TYPE "public"."enum_favPage_blocks_image_pins_image_pins_set_link_icon";
  DROP TYPE "public"."enum_favPage_blocks_image_pins_image_pins_set_link_relation";
  DROP TYPE "public"."enum_favPage_blocks_image_pins_image_pins_set_link_appearance";
  DROP TYPE "public"."enum_favPage_blocks_image_pins_pins_variant";
  DROP TYPE "public"."enum_favPage_blocks_map_pins_icon";
  DROP TYPE "public"."enum_favPage_blocks_map_pins_position";
  DROP TYPE "public"."enum_favPage_blocks_map_pins_color";
  DROP TYPE "public"."enum_favPage_blocks_map_map_settings_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_map_map_settings_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_map_map_settings_background";
  DROP TYPE "public"."enum_favPage_blocks_news_snippets_news_set_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_news_snippets_news_set_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_news_snippets_news_set_background";
  DROP TYPE "public"."enum_favPage_blocks_news_snippets_news_set_link_type";
  DROP TYPE "public"."enum_favPage_blocks_news_snippets_news_set_link_icon";
  DROP TYPE "public"."enum_favPage_blocks_news_snippets_news_set_link_relation";
  DROP TYPE "public"."enum_favPage_blocks_news_snippets_news_set_link_appearance";
  DROP TYPE "public"."enum_favPage_blocks_numbers_numbers_settings_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_numbers_numbers_settings_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_numbers_numbers_settings_background";
  DROP TYPE "public"."enum_favPage_blocks_timeline_timeline_settings_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_timeline_timeline_settings_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_timeline_timeline_settings_background";
  DROP TYPE "public"."enum_favPage_blocks_our_projects_our_proj_set_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_our_projects_our_proj_set_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_our_projects_our_proj_set_background";
  DROP TYPE "public"."enum_favPage_blocks_prices_prices_settings_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_prices_prices_settings_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_prices_prices_settings_background";
  DROP TYPE "public"."enum_favPage_blocks_interactive_picker_extended_views_direct";
  DROP TYPE "public"."enum_favPage_blocks_step_cards_step_cards_set_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_step_cards_step_cards_set_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_step_cards_step_cards_set_background";
  DROP TYPE "public"."enum_favPage_blocks_sticky_slides_sticky_set_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_sticky_slides_sticky_set_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_sticky_slides_sticky_set_background";
  DROP TYPE "public"."enum_favPage_blocks_multi_gallery_grid_items_complex_layout";
  DROP TYPE "public"."enum_favPage_blocks_multi_gallery_grid_items_layout_variant";
  DROP TYPE "public"."enum_favPage_blocks_multi_gallery_multi_g_set_padding_top";
  DROP TYPE "public"."enum_favPage_blocks_multi_gallery_multi_g_set_padding_bottom";
  DROP TYPE "public"."enum_favPage_blocks_multi_gallery_multi_g_set_background";
  DROP TYPE "public"."enum_favPage_meta_twitter_card";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_favPage_blocks_hero_main_buttons_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_favPage_blocks_hero_main_buttons_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_favPage_blocks_hero_main_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'documents', 'anchor');
  CREATE TYPE "public"."enum_favPage_blocks_hero_main_buttons_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_favPage_blocks_hero_secondary_buttons_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_favPage_blocks_hero_secondary_buttons_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_favPage_blocks_hero_secondary_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'documents', 'anchor');
  CREATE TYPE "public"."enum_favPage_blocks_hero_type" AS ENUM('imageOnly', 'slideshow', 'video');
  CREATE TYPE "public"."enum_favPage_blocks_text_image_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_favPage_blocks_banner_banner_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_banner_banner_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_banner_banner_settings_background" AS ENUM('light');
  CREATE TYPE "public"."enum_favPage_blocks_banner_flat_form" AS ENUM('flatForm1');
  CREATE TYPE "public"."enum_favPage_blocks_banner_banner_variant" AS ENUM('large', 'small');
  CREATE TYPE "public"."enum_favPage_blocks_banner_banner_content_position" AS ENUM('center', 'left', 'right');
  CREATE TYPE "public"."enum_favPage_blocks_banner_banner_button_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_favPage_blocks_banner_banner_button_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_favPage_blocks_banner_banner_button_relation" AS ENUM('pages', 'flats', 'news', 'documents', 'anchor');
  CREATE TYPE "public"."enum_favPage_blocks_benefits_benefits_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_benefits_benefits_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_benefits_benefits_settings_background" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_favPage_blocks_contact_contact_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_contact_contact_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_contact_contact_settings_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_favPage_blocks_contact_variant" AS ENUM('withContactInfo', 'onlyForm');
  CREATE TYPE "public"."enum_favPage_blocks_contact_contact_form_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_favPage_blocks_content_content_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_content_content_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_content_content_settings_background" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_favPage_blocks_content_content_settings_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_favPage_blocks_content_content_settings_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_favPage_blocks_content_content_settings_link_relation" AS ENUM('pages', 'flats', 'news', 'documents', 'anchor');
  CREATE TYPE "public"."enum_favPage_blocks_content_content_settings_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_favPage_blocks_content_content_position" AS ENUM('center', 'left', 'right');
  CREATE TYPE "public"."enum_favPage_blocks_features_features_with_title_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_favPage_blocks_features_features_with_title_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_favPage_blocks_features_features_with_image_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_favPage_blocks_features_features_uppercase_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_favPage_blocks_features_features_uppercase_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_favPage_blocks_features_features_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_features_features_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_features_features_settings_background" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_favPage_blocks_features_features_settings_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_favPage_blocks_features_features_settings_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_favPage_blocks_features_features_settings_link_relation" AS ENUM('pages', 'flats', 'news', 'documents', 'anchor');
  CREATE TYPE "public"."enum_favPage_blocks_features_features_settings_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_favPage_blocks_features_features_variant" AS ENUM('uppercase', 'withImage', 'withTitle');
  CREATE TYPE "public"."enum_favPage_blocks_form_form_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_form_form_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_form_form_settings_background" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_favPage_blocks_form_layout_variant" AS ENUM('withContent', 'onlyForm', 'withGallery');
  CREATE TYPE "public"."enum_favPage_blocks_form_form_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_favPage_blocks_flats_snippets_flats_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_flats_snippets_flats_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_flats_snippets_flats_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_favPage_blocks_flats_snippets_flats_set_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_favPage_blocks_flats_snippets_flats_set_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_favPage_blocks_flats_snippets_flats_set_link_relation" AS ENUM('pages', 'flats', 'news', 'documents', 'anchor');
  CREATE TYPE "public"."enum_favPage_blocks_flats_snippets_flats_set_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_favPage_blocks_gallery_simple_slider_slide_width" AS ENUM('square', 'wide', 'tall');
  CREATE TYPE "public"."enum_favPage_blocks_gallery_multi_slider_images_slide_width" AS ENUM('square', 'wide', 'tall');
  CREATE TYPE "public"."enum_favPage_blocks_gallery_gallery_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_gallery_gallery_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_gallery_gallery_settings_background" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_favPage_blocks_gallery_controls_type" AS ENUM('arrows', 'dots', 'dotsAndArrows', 'none');
  CREATE TYPE "public"."enum_favPage_blocks_gallery_gallery_variant" AS ENUM('simpleSlider', 'multipleSliders', 'fullWidth');
  CREATE TYPE "public"."enum_favPage_blocks_gallery_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_favPage_blocks_gallery_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_favPage_blocks_gallery_link_relation" AS ENUM('pages', 'flats', 'news', 'documents', 'anchor');
  CREATE TYPE "public"."enum_favPage_blocks_gallery_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_favPage_blocks_highlighted_text_buttons_button_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_favPage_blocks_highlighted_text_buttons_button_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_favPage_blocks_highlighted_text_buttons_button_relation" AS ENUM('pages', 'flats', 'news', 'documents', 'anchor');
  CREATE TYPE "public"."enum_favPage_blocks_highlighted_text_buttons_button_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_favPage_blocks_highlighted_text_high_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_highlighted_text_high_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_highlighted_text_high_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_favPage_blocks_highlighted_text_text_size" AS ENUM('large', 'medium', 'body');
  CREATE TYPE "public"."enum_favPage_blocks_img_content_person_bullets_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_favPage_blocks_img_content_person_bullets_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_favPage_blocks_img_content_img_cont_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_img_content_img_cont_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_img_content_img_cont_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_favPage_blocks_img_content_content_type" AS ENUM('default', 'person', 'accordion');
  CREATE TYPE "public"."enum_favPage_blocks_img_content_accordion_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_favPage_blocks_img_content_accordion_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_favPage_blocks_img_content_accordion_link_relation" AS ENUM('pages', 'flats', 'news', 'documents', 'anchor');
  CREATE TYPE "public"."enum_favPage_blocks_img_content_accordion_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_favPage_blocks_img_content_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_favPage_blocks_images_grid_images_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_images_grid_images_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_images_grid_images_settings_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_favPage_blocks_images_grid_layout" AS ENUM('withContent', 'onlyImages');
  CREATE TYPE "public"."enum_favPage_blocks_images_grid_direction_variant" AS ENUM('default', 'reverse');
  CREATE TYPE "public"."enum_favPage_blocks_image_pins_pins_pin_position" AS ENUM('left-down', 'left-up', 'right-down', 'right-up');
  CREATE TYPE "public"."enum_favPage_blocks_image_pins_image_pins_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_image_pins_image_pins_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_image_pins_image_pins_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_favPage_blocks_image_pins_image_pins_set_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_favPage_blocks_image_pins_image_pins_set_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_favPage_blocks_image_pins_image_pins_set_link_relation" AS ENUM('pages', 'flats', 'news', 'documents', 'anchor');
  CREATE TYPE "public"."enum_favPage_blocks_image_pins_image_pins_set_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_favPage_blocks_image_pins_pins_variant" AS ENUM('default', 'contentBox');
  CREATE TYPE "public"."enum_favPage_blocks_map_pins_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_favPage_blocks_map_pins_position" AS ENUM('left-down', 'left-up', 'right-down', 'right-up');
  CREATE TYPE "public"."enum_favPage_blocks_map_pins_color" AS ENUM('light', 'dark', 'yellow', 'green');
  CREATE TYPE "public"."enum_favPage_blocks_map_map_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_map_map_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_map_map_settings_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_favPage_blocks_news_snippets_news_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_news_snippets_news_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_news_snippets_news_set_background" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_favPage_blocks_news_snippets_news_set_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_favPage_blocks_news_snippets_news_set_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_favPage_blocks_news_snippets_news_set_link_relation" AS ENUM('pages', 'flats', 'news', 'documents', 'anchor');
  CREATE TYPE "public"."enum_favPage_blocks_news_snippets_news_set_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_favPage_blocks_numbers_numbers_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_numbers_numbers_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_numbers_numbers_settings_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_favPage_blocks_timeline_timeline_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_timeline_timeline_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_timeline_timeline_settings_background" AS ENUM('light');
  CREATE TYPE "public"."enum_favPage_blocks_our_projects_our_proj_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_our_projects_our_proj_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_our_projects_our_proj_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_favPage_blocks_prices_prices_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_prices_prices_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_prices_prices_settings_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_favPage_blocks_interactive_picker_extended_views_direct" AS ENUM('south', 'north', 'east', 'west', 'northwest', 'northeast', 'southeast', 'southwest');
  CREATE TYPE "public"."enum_favPage_blocks_step_cards_step_cards_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_step_cards_step_cards_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_step_cards_step_cards_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_favPage_blocks_sticky_slides_sticky_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_sticky_slides_sticky_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_sticky_slides_sticky_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_favPage_blocks_multi_gallery_grid_items_complex_layout" AS ENUM('a', 'b', 'c');
  CREATE TYPE "public"."enum_favPage_blocks_multi_gallery_grid_items_layout_variant" AS ENUM('complex', 'simple');
  CREATE TYPE "public"."enum_favPage_blocks_multi_gallery_multi_g_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_multi_gallery_multi_g_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_favPage_blocks_multi_gallery_multi_g_set_background" AS ENUM('light');
  CREATE TYPE "public"."enum_favPage_meta_twitter_card" AS ENUM('summary', 'summary_large_image', 'app', 'player');
  CREATE TABLE IF NOT EXISTS "favPage_blocks_hero_hero_slideshow" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_hero_main_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_favPage_blocks_hero_main_buttons_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_icon_only" boolean DEFAULT false,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum_favPage_blocks_hero_main_buttons_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum_favPage_blocks_hero_main_buttons_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar,
  	"link_appearance" "enum_favPage_blocks_hero_main_buttons_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_hero_secondary_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_favPage_blocks_hero_secondary_buttons_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_icon_only" boolean DEFAULT false,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum_favPage_blocks_hero_secondary_buttons_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum_favPage_blocks_hero_secondary_buttons_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_favPage_blocks_hero_type" DEFAULT 'imageOnly',
  	"hero_image_id" integer,
  	"hero_video_id" integer,
  	"content" jsonb,
  	"left_upper_text" varchar,
  	"right_upper_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_variable_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_variable_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"row_index" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_variable_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_table_custom" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_draw_editor" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_picker_id" integer,
  	"picker_value" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb,
  	"image_id" integer,
  	"image_position" "enum_favPage_blocks_text_image_image_position" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"banner_settings_anchor_id" varchar,
  	"banner_settings_padding_top" "enum_favPage_blocks_banner_banner_settings_padding_top" DEFAULT 'medium',
  	"banner_settings_padding_bottom" "enum_favPage_blocks_banner_banner_settings_padding_bottom" DEFAULT 'medium',
  	"banner_settings_has_background_image" boolean DEFAULT false,
  	"banner_settings_background" "enum_favPage_blocks_banner_banner_settings_background" DEFAULT 'light',
  	"banner_settings_background_image_id" integer,
  	"has_flat_form" boolean DEFAULT false,
  	"flat_form" "enum_favPage_blocks_banner_flat_form",
  	"banner_variant" "enum_favPage_blocks_banner_banner_variant" DEFAULT 'small',
  	"banner_content_position" "enum_favPage_blocks_banner_banner_content_position" DEFAULT 'center',
  	"caption" varchar,
  	"content" jsonb,
  	"banner_button_type" "enum_favPage_blocks_banner_banner_button_type" DEFAULT 'internal',
  	"banner_button_new_tab" boolean,
  	"banner_button_has_anchor" boolean,
  	"banner_button_dark_button" boolean,
  	"banner_button_icon_only" boolean DEFAULT false,
  	"banner_button_icon_position" "icnPos" DEFAULT 'left',
  	"banner_button_icon" "enum_favPage_blocks_banner_banner_button_icon",
  	"banner_button_label" varchar,
  	"banner_button_relation" "enum_favPage_blocks_banner_banner_button_relation" DEFAULT 'pages',
  	"banner_button_url" varchar,
  	"banner_button_anchor_to" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_benefits_benefits_row_item_heading_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_benefits_benefits_row_item2_heading_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_benefits_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"row_item_image_id" integer,
  	"row_item_description" jsonb,
  	"row_item2_image_id" integer,
  	"row_item2_description" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"benefits_settings_anchor_id" varchar,
  	"benefits_settings_padding_top" "enum_favPage_blocks_benefits_benefits_settings_padding_top" DEFAULT 'medium',
  	"benefits_settings_padding_bottom" "enum_favPage_blocks_benefits_benefits_settings_padding_bottom" DEFAULT 'medium',
  	"benefits_settings_has_background_image" boolean DEFAULT false,
  	"benefits_settings_background" "enum_favPage_blocks_benefits_benefits_settings_background" DEFAULT 'dark',
  	"benefits_settings_background_image_id" integer,
  	"show_logo" boolean DEFAULT true,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_contact_contact_info_highlighted_contacts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_title" varchar,
  	"item_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_contact_contact_info_contact_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_title" varchar,
  	"item_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"contact_settings_anchor_id" varchar,
  	"contact_settings_padding_top" "enum_favPage_blocks_contact_contact_settings_padding_top" DEFAULT 'medium',
  	"contact_settings_padding_bottom" "enum_favPage_blocks_contact_contact_settings_padding_bottom" DEFAULT 'medium',
  	"contact_settings_has_background_image" boolean DEFAULT false,
  	"contact_settings_background" "enum_favPage_blocks_contact_contact_settings_background" DEFAULT 'dark',
  	"contact_settings_background_image_id" integer,
  	"contact_settings_heading" jsonb,
  	"variant" "enum_favPage_blocks_contact_variant" DEFAULT 'onlyForm',
  	"descfull" jsonb,
  	"contact_form_position" "enum_favPage_blocks_contact_contact_form_position",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_settings_anchor_id" varchar,
  	"content_settings_padding_top" "enum_favPage_blocks_content_content_settings_padding_top" DEFAULT 'medium',
  	"content_settings_padding_bottom" "enum_favPage_blocks_content_content_settings_padding_bottom" DEFAULT 'medium',
  	"content_settings_has_background_image" boolean DEFAULT false,
  	"content_settings_background" "enum_favPage_blocks_content_content_settings_background" DEFAULT 'dark',
  	"content_settings_background_image_id" integer,
  	"content_settings_heading" jsonb,
  	"content_settings_link_type" "enum_favPage_blocks_content_content_settings_link_type" DEFAULT 'internal',
  	"content_settings_link_new_tab" boolean,
  	"content_settings_link_has_anchor" boolean,
  	"content_settings_link_dark_button" boolean,
  	"content_settings_link_icon_only" boolean DEFAULT false,
  	"content_settings_link_icon_position" "icnPos" DEFAULT 'left',
  	"content_settings_link_icon" "enum_favPage_blocks_content_content_settings_link_icon",
  	"content_settings_link_label" varchar,
  	"content_settings_link_relation" "enum_favPage_blocks_content_content_settings_link_relation" DEFAULT 'pages',
  	"content_settings_link_url" varchar,
  	"content_settings_link_anchor_to" varchar,
  	"content_settings_link_appearance" "enum_favPage_blocks_content_content_settings_link_appearance" DEFAULT 'primary',
  	"content_settings_centered_section_header" boolean DEFAULT false,
  	"content_block" jsonb,
  	"wide_content_area" boolean DEFAULT false,
  	"content_position" "enum_favPage_blocks_content_content_position" DEFAULT 'center',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_features_features_with_title" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_icon" "enum_favPage_blocks_features_features_with_title_feature_icon",
  	"feature_title_content" jsonb,
  	"feature_description" jsonb,
  	"feature_bg" "enum_favPage_blocks_features_features_with_title_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_features_features_with_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_image_id" integer,
  	"feature_description" jsonb,
  	"feature_bg" "enum_favPage_blocks_features_features_with_image_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_features_features_uppercase" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_icon" "enum_favPage_blocks_features_features_uppercase_feature_icon",
  	"feature_description" jsonb,
  	"feature_bg" "enum_favPage_blocks_features_features_uppercase_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"features_settings_anchor_id" varchar,
  	"features_settings_padding_top" "enum_favPage_blocks_features_features_settings_padding_top" DEFAULT 'medium',
  	"features_settings_padding_bottom" "enum_favPage_blocks_features_features_settings_padding_bottom" DEFAULT 'medium',
  	"features_settings_has_background_image" boolean DEFAULT false,
  	"features_settings_background" "enum_favPage_blocks_features_features_settings_background" DEFAULT 'dark',
  	"features_settings_background_image_id" integer,
  	"features_settings_heading" jsonb,
  	"features_settings_link_type" "enum_favPage_blocks_features_features_settings_link_type" DEFAULT 'internal',
  	"features_settings_link_new_tab" boolean,
  	"features_settings_link_has_anchor" boolean,
  	"features_settings_link_dark_button" boolean,
  	"features_settings_link_icon_only" boolean DEFAULT false,
  	"features_settings_link_icon_position" "icnPos" DEFAULT 'left',
  	"features_settings_link_icon" "enum_favPage_blocks_features_features_settings_link_icon",
  	"features_settings_link_label" varchar,
  	"features_settings_link_relation" "enum_favPage_blocks_features_features_settings_link_relation" DEFAULT 'pages',
  	"features_settings_link_url" varchar,
  	"features_settings_link_anchor_to" varchar,
  	"features_settings_link_appearance" "enum_favPage_blocks_features_features_settings_link_appearance" DEFAULT 'primary',
  	"features_settings_centered_section_header" boolean DEFAULT false,
  	"content" jsonb,
  	"features_variant" "enum_favPage_blocks_features_features_variant" DEFAULT 'uppercase',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_form_slide_out_boxes" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"column_image_id" integer,
  	"column_image2_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_settings_anchor_id" varchar,
  	"form_settings_padding_top" "enum_favPage_blocks_form_form_settings_padding_top" DEFAULT 'medium',
  	"form_settings_padding_bottom" "enum_favPage_blocks_form_form_settings_padding_bottom" DEFAULT 'medium',
  	"form_settings_has_background_image" boolean DEFAULT false,
  	"form_settings_background" "enum_favPage_blocks_form_form_settings_background" DEFAULT 'light',
  	"form_settings_background_image_id" integer,
  	"form_content" jsonb,
  	"layout_variant" "enum_favPage_blocks_form_layout_variant" DEFAULT 'onlyForm',
  	"form_position" "enum_favPage_blocks_form_form_position",
  	"layout_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_flats_snippets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"flats_set_anchor_id" varchar,
  	"flats_set_padding_top" "enum_favPage_blocks_flats_snippets_flats_set_padding_top" DEFAULT 'medium',
  	"flats_set_padding_bottom" "enum_favPage_blocks_flats_snippets_flats_set_padding_bottom" DEFAULT 'medium',
  	"flats_set_has_background_image" boolean DEFAULT false,
  	"flats_set_background" "enum_favPage_blocks_flats_snippets_flats_set_background" DEFAULT 'dark',
  	"flats_set_background_image_id" integer,
  	"flats_set_heading" jsonb,
  	"flats_set_link_type" "enum_favPage_blocks_flats_snippets_flats_set_link_type" DEFAULT 'internal',
  	"flats_set_link_new_tab" boolean,
  	"flats_set_link_has_anchor" boolean,
  	"flats_set_link_dark_button" boolean,
  	"flats_set_link_icon_only" boolean DEFAULT false,
  	"flats_set_link_icon_position" "icnPos" DEFAULT 'left',
  	"flats_set_link_icon" "enum_favPage_blocks_flats_snippets_flats_set_link_icon",
  	"flats_set_link_label" varchar,
  	"flats_set_link_relation" "enum_favPage_blocks_flats_snippets_flats_set_link_relation" DEFAULT 'pages',
  	"flats_set_link_url" varchar,
  	"flats_set_link_anchor_to" varchar,
  	"flats_set_link_appearance" "enum_favPage_blocks_flats_snippets_flats_set_link_appearance" DEFAULT 'primary',
  	"flats_set_centered_section_header" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_gallery_simple_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"slide_width" "enum_favPage_blocks_gallery_simple_slider_slide_width"
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_gallery_multi_slider_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"slide_width" "enum_favPage_blocks_gallery_multi_slider_images_slide_width"
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_gallery_multi_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab_title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_gallery_full_width" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"gallery_settings_anchor_id" varchar,
  	"gallery_settings_padding_top" "enum_favPage_blocks_gallery_gallery_settings_padding_top" DEFAULT 'medium',
  	"gallery_settings_padding_bottom" "enum_favPage_blocks_gallery_gallery_settings_padding_bottom" DEFAULT 'medium',
  	"gallery_settings_has_background_image" boolean DEFAULT false,
  	"gallery_settings_background" "enum_favPage_blocks_gallery_gallery_settings_background" DEFAULT 'dark',
  	"gallery_settings_background_image_id" integer,
  	"controls_type" "enum_favPage_blocks_gallery_controls_type" DEFAULT 'arrows',
  	"autoplay" boolean DEFAULT false,
  	"content" jsonb,
  	"gallery_variant" "enum_favPage_blocks_gallery_gallery_variant" DEFAULT 'simpleSlider',
  	"link_type" "enum_favPage_blocks_gallery_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_icon_only" boolean DEFAULT false,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum_favPage_blocks_gallery_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum_favPage_blocks_gallery_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar,
  	"link_appearance" "enum_favPage_blocks_gallery_link_appearance" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_highlighted_text_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"button_type" "enum_favPage_blocks_highlighted_text_buttons_button_type" DEFAULT 'internal',
  	"button_new_tab" boolean,
  	"button_has_anchor" boolean,
  	"button_dark_button" boolean,
  	"button_with_icon" boolean DEFAULT false,
  	"button_icon_only" boolean DEFAULT false,
  	"button_icon_position" "icnPos" DEFAULT 'left',
  	"button_icon" "enum_favPage_blocks_highlighted_text_buttons_button_icon",
  	"button_label" varchar,
  	"button_relation" "enum_favPage_blocks_highlighted_text_buttons_button_relation" DEFAULT 'pages',
  	"button_url" varchar,
  	"button_anchor_to" varchar,
  	"button_appearance" "enum_favPage_blocks_highlighted_text_buttons_button_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_highlighted_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"high_set_anchor_id" varchar,
  	"high_set_padding_top" "enum_favPage_blocks_highlighted_text_high_set_padding_top" DEFAULT 'medium',
  	"high_set_padding_bottom" "enum_favPage_blocks_highlighted_text_high_set_padding_bottom" DEFAULT 'medium',
  	"high_set_has_background_image" boolean DEFAULT false,
  	"high_set_background" "enum_favPage_blocks_highlighted_text_high_set_background" DEFAULT 'dark',
  	"high_set_background_image_id" integer,
  	"narrow_container" boolean DEFAULT false,
  	"wide_content_area" boolean DEFAULT false,
  	"title" jsonb,
  	"highlighted_text" varchar,
  	"text_size" "enum_favPage_blocks_highlighted_text_text_size" DEFAULT 'large',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_img_content_person_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_icon" "enum_favPage_blocks_img_content_person_bullets_feature_icon",
  	"feature_description" jsonb,
  	"feature_bg" "enum_favPage_blocks_img_content_person_bullets_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_img_content_accordion_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"accordion_item_title" varchar,
  	"accordion_item_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_img_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"img_cont_set_anchor_id" varchar,
  	"img_cont_set_padding_top" "enum_favPage_blocks_img_content_img_cont_set_padding_top" DEFAULT 'medium',
  	"img_cont_set_padding_bottom" "enum_favPage_blocks_img_content_img_cont_set_padding_bottom" DEFAULT 'medium',
  	"img_cont_set_has_background_image" boolean DEFAULT false,
  	"img_cont_set_background" "enum_favPage_blocks_img_content_img_cont_set_background" DEFAULT 'dark',
  	"img_cont_set_background_image_id" integer,
  	"content_type" "enum_favPage_blocks_img_content_content_type" DEFAULT 'default',
  	"content" jsonb,
  	"upper_title" jsonb,
  	"person_content" jsonb,
  	"person_person_info_name" varchar,
  	"person_person_info_position" varchar,
  	"person_person_info_phone" varchar,
  	"person_person_info_email" varchar,
  	"accordion_link_type" "enum_favPage_blocks_img_content_accordion_link_type" DEFAULT 'internal',
  	"accordion_link_new_tab" boolean,
  	"accordion_link_has_anchor" boolean,
  	"accordion_link_dark_button" boolean,
  	"accordion_link_icon_only" boolean DEFAULT false,
  	"accordion_link_icon_position" "icnPos" DEFAULT 'left',
  	"accordion_link_icon" "enum_favPage_blocks_img_content_accordion_link_icon",
  	"accordion_link_label" varchar,
  	"accordion_link_relation" "enum_favPage_blocks_img_content_accordion_link_relation" DEFAULT 'pages',
  	"accordion_link_url" varchar,
  	"accordion_link_anchor_to" varchar,
  	"accordion_link_appearance" "enum_favPage_blocks_img_content_accordion_link_appearance" DEFAULT 'primary',
  	"image_id" integer,
  	"image_position" "enum_favPage_blocks_img_content_image_position" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_images_grid_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_images_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"images_settings_anchor_id" varchar,
  	"images_settings_padding_top" "enum_favPage_blocks_images_grid_images_settings_padding_top" DEFAULT 'medium',
  	"images_settings_padding_bottom" "enum_favPage_blocks_images_grid_images_settings_padding_bottom" DEFAULT 'medium',
  	"images_settings_has_background_image" boolean DEFAULT false,
  	"images_settings_background" "enum_favPage_blocks_images_grid_images_settings_background" DEFAULT 'dark',
  	"images_settings_background_image_id" integer,
  	"layout" "enum_favPage_blocks_images_grid_layout" DEFAULT 'withContent',
  	"direction_variant" "enum_favPage_blocks_images_grid_direction_variant" DEFAULT 'default',
  	"grid_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_image_pins_pins" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"withlogo" boolean DEFAULT false,
  	"highlighted" boolean DEFAULT false,
  	"reverse_layout" boolean DEFAULT false,
  	"logo_id" integer,
  	"marker_label" jsonb,
  	"pin_position" "enum_favPage_blocks_image_pins_pins_pin_position",
  	"x" numeric,
  	"x_mobile" numeric,
  	"y" numeric,
  	"y_mobile" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_image_pins" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_pins_set_anchor_id" varchar,
  	"image_pins_set_padding_top" "enum_favPage_blocks_image_pins_image_pins_set_padding_top" DEFAULT 'medium',
  	"image_pins_set_padding_bottom" "enum_favPage_blocks_image_pins_image_pins_set_padding_bottom" DEFAULT 'medium',
  	"image_pins_set_has_background_image" boolean DEFAULT false,
  	"image_pins_set_background" "enum_favPage_blocks_image_pins_image_pins_set_background" DEFAULT 'dark',
  	"image_pins_set_background_image_id" integer,
  	"image_pins_set_heading" jsonb,
  	"image_pins_set_link_type" "enum_favPage_blocks_image_pins_image_pins_set_link_type" DEFAULT 'internal',
  	"image_pins_set_link_new_tab" boolean,
  	"image_pins_set_link_has_anchor" boolean,
  	"image_pins_set_link_dark_button" boolean,
  	"image_pins_set_link_icon_only" boolean DEFAULT false,
  	"image_pins_set_link_icon_position" "icnPos" DEFAULT 'left',
  	"image_pins_set_link_icon" "enum_favPage_blocks_image_pins_image_pins_set_link_icon",
  	"image_pins_set_link_label" varchar,
  	"image_pins_set_link_relation" "enum_favPage_blocks_image_pins_image_pins_set_link_relation" DEFAULT 'pages',
  	"image_pins_set_link_url" varchar,
  	"image_pins_set_link_anchor_to" varchar,
  	"image_pins_set_link_appearance" "enum_favPage_blocks_image_pins_image_pins_set_link_appearance" DEFAULT 'primary',
  	"image_pins_set_centered_section_header" boolean DEFAULT false,
  	"background_image_id" integer,
  	"pins_variant" "enum_favPage_blocks_image_pins_pins_variant" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_map_pins" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"withlogo" boolean DEFAULT false,
  	"logo_id" integer,
  	"icon" "enum_favPage_blocks_map_pins_icon",
  	"marker_label" jsonb,
  	"position" "enum_favPage_blocks_map_pins_position",
  	"color" "enum_favPage_blocks_map_pins_color",
  	"x" numeric,
  	"x_mobile" numeric,
  	"y" numeric,
  	"y_mobile" numeric,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"map_settings_anchor_id" varchar,
  	"map_settings_padding_top" "enum_favPage_blocks_map_map_settings_padding_top" DEFAULT 'medium',
  	"map_settings_padding_bottom" "enum_favPage_blocks_map_map_settings_padding_bottom" DEFAULT 'medium',
  	"map_settings_has_background_image" boolean DEFAULT false,
  	"map_settings_background" "enum_favPage_blocks_map_map_settings_background" DEFAULT 'dark',
  	"map_settings_background_image_id" integer,
  	"map_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_news_snippets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"news_set_anchor_id" varchar,
  	"news_set_padding_top" "enum_favPage_blocks_news_snippets_news_set_padding_top" DEFAULT 'medium',
  	"news_set_padding_bottom" "enum_favPage_blocks_news_snippets_news_set_padding_bottom" DEFAULT 'medium',
  	"news_set_has_background_image" boolean DEFAULT false,
  	"news_set_background" "enum_favPage_blocks_news_snippets_news_set_background" DEFAULT 'dark',
  	"news_set_background_image_id" integer,
  	"news_set_heading" jsonb,
  	"news_set_link_type" "enum_favPage_blocks_news_snippets_news_set_link_type" DEFAULT 'internal',
  	"news_set_link_new_tab" boolean,
  	"news_set_link_has_anchor" boolean,
  	"news_set_link_dark_button" boolean,
  	"news_set_link_icon_only" boolean DEFAULT false,
  	"news_set_link_icon_position" "icnPos" DEFAULT 'left',
  	"news_set_link_icon" "enum_favPage_blocks_news_snippets_news_set_link_icon",
  	"news_set_link_label" varchar,
  	"news_set_link_relation" "enum_favPage_blocks_news_snippets_news_set_link_relation" DEFAULT 'pages',
  	"news_set_link_url" varchar,
  	"news_set_link_anchor_to" varchar,
  	"news_set_link_appearance" "enum_favPage_blocks_news_snippets_news_set_link_appearance" DEFAULT 'primary',
  	"news_set_centered_section_header" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_numbers_numbers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" numeric,
  	"description" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_numbers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"numbers_settings_anchor_id" varchar,
  	"numbers_settings_padding_top" "enum_favPage_blocks_numbers_numbers_settings_padding_top" DEFAULT 'medium',
  	"numbers_settings_padding_bottom" "enum_favPage_blocks_numbers_numbers_settings_padding_bottom" DEFAULT 'medium',
  	"numbers_settings_has_background_image" boolean DEFAULT false,
  	"numbers_settings_background" "enum_favPage_blocks_numbers_numbers_settings_background" DEFAULT 'dark',
  	"numbers_settings_background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_timeline_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"descfull" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"timeline_settings_anchor_id" varchar,
  	"timeline_settings_padding_top" "enum_favPage_blocks_timeline_timeline_settings_padding_top" DEFAULT 'medium',
  	"timeline_settings_padding_bottom" "enum_favPage_blocks_timeline_timeline_settings_padding_bottom" DEFAULT 'medium',
  	"timeline_settings_has_background_image" boolean DEFAULT false,
  	"timeline_settings_background" "enum_favPage_blocks_timeline_timeline_settings_background" DEFAULT 'light',
  	"timeline_settings_background_image_id" integer,
  	"timeline_settings_heading" jsonb,
  	"right_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_our_projects_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_our_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"our_proj_set_anchor_id" varchar,
  	"our_proj_set_padding_top" "enum_favPage_blocks_our_projects_our_proj_set_padding_top" DEFAULT 'medium',
  	"our_proj_set_padding_bottom" "enum_favPage_blocks_our_projects_our_proj_set_padding_bottom" DEFAULT 'medium',
  	"our_proj_set_has_background_image" boolean DEFAULT false,
  	"our_proj_set_background" "enum_favPage_blocks_our_projects_our_proj_set_background" DEFAULT 'dark',
  	"our_proj_set_background_image_id" integer,
  	"our_proj_set_heading" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_prices" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"prices_settings_anchor_id" varchar,
  	"prices_settings_padding_top" "enum_favPage_blocks_prices_prices_settings_padding_top" DEFAULT 'medium',
  	"prices_settings_padding_bottom" "enum_favPage_blocks_prices_prices_settings_padding_bottom" DEFAULT 'medium',
  	"prices_settings_has_background_image" boolean DEFAULT false,
  	"prices_settings_background" "enum_favPage_blocks_prices_prices_settings_background" DEFAULT 'dark',
  	"prices_settings_background_image_id" integer,
  	"prices_settings_heading" jsonb,
  	"bottom_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_interactive_picker_extended_views" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"view_name" varchar,
  	"image_id" integer,
  	"direct" "enum_favPage_blocks_interactive_picker_extended_views_direct" DEFAULT 'south'
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_interactive_picker_extended" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"picker_value" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_visual_price_list_buildings" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"building_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_visual_price_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_step_cards_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_step_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step_cards_set_anchor_id" varchar,
  	"step_cards_set_padding_top" "enum_favPage_blocks_step_cards_step_cards_set_padding_top" DEFAULT 'medium',
  	"step_cards_set_padding_bottom" "enum_favPage_blocks_step_cards_step_cards_set_padding_bottom" DEFAULT 'medium',
  	"step_cards_set_has_background_image" boolean DEFAULT false,
  	"step_cards_set_background" "enum_favPage_blocks_step_cards_step_cards_set_background" DEFAULT 'dark',
  	"step_cards_set_background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_sticky_slides_slides_slide_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_sticky_slides_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"slide_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_sticky_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"sticky_set_anchor_id" varchar,
  	"sticky_set_padding_top" "enum_favPage_blocks_sticky_slides_sticky_set_padding_top" DEFAULT 'medium',
  	"sticky_set_padding_bottom" "enum_favPage_blocks_sticky_slides_sticky_set_padding_bottom" DEFAULT 'medium',
  	"sticky_set_has_background_image" boolean DEFAULT false,
  	"sticky_set_background" "enum_favPage_blocks_sticky_slides_sticky_set_background" DEFAULT 'dark',
  	"sticky_set_background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_complex" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_favPage_blocks_multi_gallery_grid_items_complex_layout" DEFAULT 'a',
  	"image_one_id" integer,
  	"image_two_id" integer,
  	"image_three_id" integer,
  	"image_four_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_simple_grid_left_col" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_simple_grid_right_col" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_simple_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab_title" varchar,
  	"layout_variant" "enum_favPage_blocks_multi_gallery_grid_items_layout_variant" DEFAULT 'complex'
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_multi_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"multi_g_set_anchor_id" varchar,
  	"multi_g_set_padding_top" "enum_favPage_blocks_multi_gallery_multi_g_set_padding_top" DEFAULT 'medium',
  	"multi_g_set_padding_bottom" "enum_favPage_blocks_multi_gallery_multi_g_set_padding_bottom" DEFAULT 'medium',
  	"multi_g_set_has_background_image" boolean DEFAULT false,
  	"multi_g_set_background" "enum_favPage_blocks_multi_gallery_multi_g_set_background" DEFAULT 'light',
  	"multi_g_set_background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_blocks_shared_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"shared_section_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "favPage" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"project_id" integer NOT NULL,
  	"meta_og_image_id" integer,
  	"meta_twitter_card" "enum_favPage_meta_twitter_card" DEFAULT 'summary_large_image',
  	"meta_structured_data" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "favPagestoone" (
  	"title" varchar NOT NULL,
  	"content_title" varchar NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_keywords" varchar,
  	"meta_og_title" varchar,
  	"meta_og_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "favPage_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" integer,
  	"flats_id" integer,
  	"news_id" integer,
  	"documents_id" integer
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "favPage_id" integer;
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_hero_hero_slideshow" ADD CONSTRAINT "favPage_blocks_hero_hero_slideshow_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_hero_hero_slideshow" ADD CONSTRAINT "favPage_blocks_hero_hero_slideshow_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_hero_main_buttons" ADD CONSTRAINT "favPage_blocks_hero_main_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_hero_secondary_buttons" ADD CONSTRAINT "favPage_blocks_hero_secondary_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_hero" ADD CONSTRAINT "favPage_blocks_hero_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_hero" ADD CONSTRAINT "favPage_blocks_hero_hero_video_id_media_id_fk" FOREIGN KEY ("hero_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_hero" ADD CONSTRAINT "favPage_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_variable_table_rows_cells" ADD CONSTRAINT "favPage_blocks_variable_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_variable_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_variable_table_rows" ADD CONSTRAINT "favPage_blocks_variable_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_variable_table"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_variable_table" ADD CONSTRAINT "favPage_blocks_variable_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_table_custom" ADD CONSTRAINT "favPage_blocks_table_custom_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_draw_editor" ADD CONSTRAINT "favPage_blocks_draw_editor_image_picker_id_media_id_fk" FOREIGN KEY ("image_picker_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_draw_editor" ADD CONSTRAINT "favPage_blocks_draw_editor_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_text_image" ADD CONSTRAINT "favPage_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_text_image" ADD CONSTRAINT "favPage_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_banner" ADD CONSTRAINT "favPage_blocks_banner_banner_settings_background_image_id_media_id_fk" FOREIGN KEY ("banner_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_banner" ADD CONSTRAINT "favPage_blocks_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_benefits_benefits_row_item_heading_lines" ADD CONSTRAINT "favPage_blocks_benefits_benefits_row_item_heading_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_benefits_benefits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_benefits_benefits_row_item2_heading_lines" ADD CONSTRAINT "favPage_blocks_benefits_benefits_row_item2_heading_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_benefits_benefits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_benefits_benefits" ADD CONSTRAINT "favPage_blocks_benefits_benefits_row_item_image_id_media_id_fk" FOREIGN KEY ("row_item_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_benefits_benefits" ADD CONSTRAINT "favPage_blocks_benefits_benefits_row_item2_image_id_media_id_fk" FOREIGN KEY ("row_item2_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_benefits_benefits" ADD CONSTRAINT "favPage_blocks_benefits_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_benefits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_benefits" ADD CONSTRAINT "favPage_blocks_benefits_benefits_settings_background_image_id_media_id_fk" FOREIGN KEY ("benefits_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_benefits" ADD CONSTRAINT "favPage_blocks_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_contact_contact_info_highlighted_contacts" ADD CONSTRAINT "favPage_blocks_contact_contact_info_highlighted_contacts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_contact_contact_info_contact_items" ADD CONSTRAINT "favPage_blocks_contact_contact_info_contact_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_contact" ADD CONSTRAINT "favPage_blocks_contact_contact_settings_background_image_id_media_id_fk" FOREIGN KEY ("contact_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_contact" ADD CONSTRAINT "favPage_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_content" ADD CONSTRAINT "favPage_blocks_content_content_settings_background_image_id_media_id_fk" FOREIGN KEY ("content_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_content" ADD CONSTRAINT "favPage_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_features_features_with_title" ADD CONSTRAINT "favPage_blocks_features_features_with_title_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_features_features_with_image" ADD CONSTRAINT "favPage_blocks_features_features_with_image_feature_image_id_media_id_fk" FOREIGN KEY ("feature_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_features_features_with_image" ADD CONSTRAINT "favPage_blocks_features_features_with_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_features_features_uppercase" ADD CONSTRAINT "favPage_blocks_features_features_uppercase_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_features" ADD CONSTRAINT "favPage_blocks_features_features_settings_background_image_id_media_id_fk" FOREIGN KEY ("features_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_features" ADD CONSTRAINT "favPage_blocks_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_form_slide_out_boxes" ADD CONSTRAINT "favPage_blocks_form_slide_out_boxes_column_image_id_media_id_fk" FOREIGN KEY ("column_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_form_slide_out_boxes" ADD CONSTRAINT "favPage_blocks_form_slide_out_boxes_column_image2_id_media_id_fk" FOREIGN KEY ("column_image2_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_form_slide_out_boxes" ADD CONSTRAINT "favPage_blocks_form_slide_out_boxes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_form"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_form" ADD CONSTRAINT "favPage_blocks_form_form_settings_background_image_id_media_id_fk" FOREIGN KEY ("form_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_form" ADD CONSTRAINT "favPage_blocks_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_flats_snippets" ADD CONSTRAINT "favPage_blocks_flats_snippets_flats_set_background_image_id_media_id_fk" FOREIGN KEY ("flats_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_flats_snippets" ADD CONSTRAINT "favPage_blocks_flats_snippets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_gallery_simple_slider" ADD CONSTRAINT "favPage_blocks_gallery_simple_slider_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_gallery_simple_slider" ADD CONSTRAINT "favPage_blocks_gallery_simple_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_gallery_multi_slider_images" ADD CONSTRAINT "favPage_blocks_gallery_multi_slider_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_gallery_multi_slider_images" ADD CONSTRAINT "favPage_blocks_gallery_multi_slider_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_gallery_multi_slider"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_gallery_multi_slider" ADD CONSTRAINT "favPage_blocks_gallery_multi_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_gallery_full_width" ADD CONSTRAINT "favPage_blocks_gallery_full_width_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_gallery_full_width" ADD CONSTRAINT "favPage_blocks_gallery_full_width_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_gallery" ADD CONSTRAINT "favPage_blocks_gallery_gallery_settings_background_image_id_media_id_fk" FOREIGN KEY ("gallery_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_gallery" ADD CONSTRAINT "favPage_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_highlighted_text_buttons" ADD CONSTRAINT "favPage_blocks_highlighted_text_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_highlighted_text"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_highlighted_text" ADD CONSTRAINT "favPage_blocks_highlighted_text_high_set_background_image_id_media_id_fk" FOREIGN KEY ("high_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_highlighted_text" ADD CONSTRAINT "favPage_blocks_highlighted_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_img_content_person_bullets" ADD CONSTRAINT "favPage_blocks_img_content_person_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_img_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_img_content_accordion_accordion_items" ADD CONSTRAINT "favPage_blocks_img_content_accordion_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_img_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_img_content" ADD CONSTRAINT "favPage_blocks_img_content_img_cont_set_background_image_id_media_id_fk" FOREIGN KEY ("img_cont_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_img_content" ADD CONSTRAINT "favPage_blocks_img_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_img_content" ADD CONSTRAINT "favPage_blocks_img_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_images_grid_images" ADD CONSTRAINT "favPage_blocks_images_grid_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_images_grid_images" ADD CONSTRAINT "favPage_blocks_images_grid_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_images_grid"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_images_grid" ADD CONSTRAINT "favPage_blocks_images_grid_images_settings_background_image_id_media_id_fk" FOREIGN KEY ("images_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_images_grid" ADD CONSTRAINT "favPage_blocks_images_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_image_pins_pins" ADD CONSTRAINT "favPage_blocks_image_pins_pins_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_image_pins_pins" ADD CONSTRAINT "favPage_blocks_image_pins_pins_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_image_pins"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_image_pins" ADD CONSTRAINT "favPage_blocks_image_pins_image_pins_set_background_image_id_media_id_fk" FOREIGN KEY ("image_pins_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_image_pins" ADD CONSTRAINT "favPage_blocks_image_pins_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_image_pins" ADD CONSTRAINT "favPage_blocks_image_pins_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_map_pins" ADD CONSTRAINT "favPage_blocks_map_pins_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_map_pins" ADD CONSTRAINT "favPage_blocks_map_pins_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_map"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_map" ADD CONSTRAINT "favPage_blocks_map_map_settings_background_image_id_media_id_fk" FOREIGN KEY ("map_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_map" ADD CONSTRAINT "favPage_blocks_map_map_id_media_id_fk" FOREIGN KEY ("map_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_map" ADD CONSTRAINT "favPage_blocks_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_news_snippets" ADD CONSTRAINT "favPage_blocks_news_snippets_news_set_background_image_id_media_id_fk" FOREIGN KEY ("news_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_news_snippets" ADD CONSTRAINT "favPage_blocks_news_snippets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_numbers_numbers" ADD CONSTRAINT "favPage_blocks_numbers_numbers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_numbers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_numbers" ADD CONSTRAINT "favPage_blocks_numbers_numbers_settings_background_image_id_media_id_fk" FOREIGN KEY ("numbers_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_numbers" ADD CONSTRAINT "favPage_blocks_numbers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_timeline_timeline" ADD CONSTRAINT "favPage_blocks_timeline_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_timeline" ADD CONSTRAINT "favPage_blocks_timeline_timeline_settings_background_image_id_media_id_fk" FOREIGN KEY ("timeline_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_timeline" ADD CONSTRAINT "favPage_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_our_projects_projects" ADD CONSTRAINT "favPage_blocks_our_projects_projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_our_projects_projects" ADD CONSTRAINT "favPage_blocks_our_projects_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_our_projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_our_projects" ADD CONSTRAINT "favPage_blocks_our_projects_our_proj_set_background_image_id_media_id_fk" FOREIGN KEY ("our_proj_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_our_projects" ADD CONSTRAINT "favPage_blocks_our_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_prices" ADD CONSTRAINT "favPage_blocks_prices_prices_settings_background_image_id_media_id_fk" FOREIGN KEY ("prices_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_prices" ADD CONSTRAINT "favPage_blocks_prices_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_interactive_picker_extended_views" ADD CONSTRAINT "favPage_blocks_interactive_picker_extended_views_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_interactive_picker_extended_views" ADD CONSTRAINT "favPage_blocks_interactive_picker_extended_views_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_interactive_picker_extended"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_interactive_picker_extended" ADD CONSTRAINT "favPage_blocks_interactive_picker_extended_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_visual_price_list_buildings" ADD CONSTRAINT "favPage_blocks_visual_price_list_buildings_building_id_buildings_id_fk" FOREIGN KEY ("building_id") REFERENCES "public"."buildings"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_visual_price_list_buildings" ADD CONSTRAINT "favPage_blocks_visual_price_list_buildings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_visual_price_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_visual_price_list" ADD CONSTRAINT "favPage_blocks_visual_price_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_step_cards_steps" ADD CONSTRAINT "favPage_blocks_step_cards_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_step_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_step_cards" ADD CONSTRAINT "favPage_blocks_step_cards_step_cards_set_background_image_id_media_id_fk" FOREIGN KEY ("step_cards_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_step_cards" ADD CONSTRAINT "favPage_blocks_step_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_sticky_slides_slides_slide_images" ADD CONSTRAINT "favPage_blocks_sticky_slides_slides_slide_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_sticky_slides_slides_slide_images" ADD CONSTRAINT "favPage_blocks_sticky_slides_slides_slide_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_sticky_slides_slides"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_sticky_slides_slides" ADD CONSTRAINT "favPage_blocks_sticky_slides_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_sticky_slides"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_sticky_slides" ADD CONSTRAINT "favPage_blocks_sticky_slides_sticky_set_background_image_id_media_id_fk" FOREIGN KEY ("sticky_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_sticky_slides" ADD CONSTRAINT "favPage_blocks_sticky_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "favPage_blocks_multi_gallery_grid_items_complex_image_one_id_media_id_fk" FOREIGN KEY ("image_one_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "favPage_blocks_multi_gallery_grid_items_complex_image_two_id_media_id_fk" FOREIGN KEY ("image_two_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "favPage_blocks_multi_gallery_grid_items_complex_image_three_id_media_id_fk" FOREIGN KEY ("image_three_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "favPage_blocks_multi_gallery_grid_items_complex_image_four_id_media_id_fk" FOREIGN KEY ("image_four_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "favPage_blocks_multi_gallery_grid_items_complex_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_multi_gallery_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_multi_gallery_grid_items_simple_grid_left_col" ADD CONSTRAINT "favPage_blocks_multi_gallery_grid_items_simple_grid_left_col_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_multi_gallery_grid_items_simple_grid_left_col" ADD CONSTRAINT "favPage_blocks_multi_gallery_grid_items_simple_grid_left_col_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_multi_gallery_grid_items_simple_grid"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_multi_gallery_grid_items_simple_grid_right_col" ADD CONSTRAINT "favPage_blocks_multi_gallery_grid_items_simple_grid_right_col_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_multi_gallery_grid_items_simple_grid_right_col" ADD CONSTRAINT "favPage_blocks_multi_gallery_grid_items_simple_grid_right_col_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_multi_gallery_grid_items_simple_grid"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_multi_gallery_grid_items_simple_grid" ADD CONSTRAINT "favPage_blocks_multi_gallery_grid_items_simple_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_multi_gallery_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_multi_gallery_grid_items" ADD CONSTRAINT "favPage_blocks_multi_gallery_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage_blocks_multi_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_multi_gallery" ADD CONSTRAINT "favPage_blocks_multi_gallery_multi_g_set_background_image_id_media_id_fk" FOREIGN KEY ("multi_g_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_multi_gallery" ADD CONSTRAINT "favPage_blocks_multi_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_shared_section" ADD CONSTRAINT "favPage_blocks_shared_section_shared_section_id_share_id_fk" FOREIGN KEY ("shared_section_id") REFERENCES "public"."share"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_blocks_shared_section" ADD CONSTRAINT "favPage_blocks_shared_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage" ADD CONSTRAINT "favPage_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage" ADD CONSTRAINT "favPage_meta_og_image_id_media_id_fk" FOREIGN KEY ("meta_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPagestoone" ADD CONSTRAINT "favPagestoone_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_rels" ADD CONSTRAINT "favPage_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_rels" ADD CONSTRAINT "favPage_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_rels" ADD CONSTRAINT "favPage_rels_flats_fk" FOREIGN KEY ("flats_id") REFERENCES "public"."flats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_rels" ADD CONSTRAINT "favPage_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "favPage_rels" ADD CONSTRAINT "favPage_rels_documents_fk" FOREIGN KEY ("documents_id") REFERENCES "public"."documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "favPage_blocks_hero_hero_slideshow_order_idx" ON "favPage_blocks_hero_hero_slideshow" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_hero_hero_slideshow_parent_id_idx" ON "favPage_blocks_hero_hero_slideshow" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_hero_hero_slideshow_locale_idx" ON "favPage_blocks_hero_hero_slideshow" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_hero_hero_slideshow_image_idx" ON "favPage_blocks_hero_hero_slideshow" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_hero_main_buttons_order_idx" ON "favPage_blocks_hero_main_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_hero_main_buttons_parent_id_idx" ON "favPage_blocks_hero_main_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_hero_main_buttons_locale_idx" ON "favPage_blocks_hero_main_buttons" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_hero_secondary_buttons_order_idx" ON "favPage_blocks_hero_secondary_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_hero_secondary_buttons_parent_id_idx" ON "favPage_blocks_hero_secondary_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_hero_secondary_buttons_locale_idx" ON "favPage_blocks_hero_secondary_buttons" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_hero_order_idx" ON "favPage_blocks_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_hero_parent_id_idx" ON "favPage_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_hero_path_idx" ON "favPage_blocks_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_hero_locale_idx" ON "favPage_blocks_hero" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_hero_hero_image_idx" ON "favPage_blocks_hero" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_hero_hero_video_idx" ON "favPage_blocks_hero" USING btree ("hero_video_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_variable_table_rows_cells_order_idx" ON "favPage_blocks_variable_table_rows_cells" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_variable_table_rows_cells_parent_id_idx" ON "favPage_blocks_variable_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_variable_table_rows_cells_locale_idx" ON "favPage_blocks_variable_table_rows_cells" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_variable_table_rows_order_idx" ON "favPage_blocks_variable_table_rows" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_variable_table_rows_parent_id_idx" ON "favPage_blocks_variable_table_rows" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_variable_table_rows_locale_idx" ON "favPage_blocks_variable_table_rows" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_variable_table_order_idx" ON "favPage_blocks_variable_table" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_variable_table_parent_id_idx" ON "favPage_blocks_variable_table" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_variable_table_path_idx" ON "favPage_blocks_variable_table" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_variable_table_locale_idx" ON "favPage_blocks_variable_table" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_table_custom_order_idx" ON "favPage_blocks_table_custom" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_table_custom_parent_id_idx" ON "favPage_blocks_table_custom" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_table_custom_path_idx" ON "favPage_blocks_table_custom" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_table_custom_locale_idx" ON "favPage_blocks_table_custom" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_draw_editor_order_idx" ON "favPage_blocks_draw_editor" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_draw_editor_parent_id_idx" ON "favPage_blocks_draw_editor" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_draw_editor_path_idx" ON "favPage_blocks_draw_editor" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_draw_editor_locale_idx" ON "favPage_blocks_draw_editor" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_draw_editor_image_picker_idx" ON "favPage_blocks_draw_editor" USING btree ("image_picker_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_text_image_order_idx" ON "favPage_blocks_text_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_text_image_parent_id_idx" ON "favPage_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_text_image_path_idx" ON "favPage_blocks_text_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_text_image_locale_idx" ON "favPage_blocks_text_image" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_text_image_image_idx" ON "favPage_blocks_text_image" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_banner_order_idx" ON "favPage_blocks_banner" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_banner_parent_id_idx" ON "favPage_blocks_banner" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_banner_path_idx" ON "favPage_blocks_banner" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_banner_locale_idx" ON "favPage_blocks_banner" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_banner_banner_settings_banner_settings_background_image_idx" ON "favPage_blocks_banner" USING btree ("banner_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_benefits_benefits_row_item_heading_lines_order_idx" ON "favPage_blocks_benefits_benefits_row_item_heading_lines" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_benefits_benefits_row_item_heading_lines_parent_id_idx" ON "favPage_blocks_benefits_benefits_row_item_heading_lines" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_benefits_benefits_row_item_heading_lines_locale_idx" ON "favPage_blocks_benefits_benefits_row_item_heading_lines" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_benefits_benefits_row_item2_heading_lines_order_idx" ON "favPage_blocks_benefits_benefits_row_item2_heading_lines" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_benefits_benefits_row_item2_heading_lines_parent_id_idx" ON "favPage_blocks_benefits_benefits_row_item2_heading_lines" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_benefits_benefits_row_item2_heading_lines_locale_idx" ON "favPage_blocks_benefits_benefits_row_item2_heading_lines" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_benefits_benefits_order_idx" ON "favPage_blocks_benefits_benefits" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_benefits_benefits_parent_id_idx" ON "favPage_blocks_benefits_benefits" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_benefits_benefits_locale_idx" ON "favPage_blocks_benefits_benefits" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_benefits_benefits_row_item_row_item_image_idx" ON "favPage_blocks_benefits_benefits" USING btree ("row_item_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_benefits_benefits_row_item2_row_item2_image_idx" ON "favPage_blocks_benefits_benefits" USING btree ("row_item2_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_benefits_order_idx" ON "favPage_blocks_benefits" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_benefits_parent_id_idx" ON "favPage_blocks_benefits" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_benefits_path_idx" ON "favPage_blocks_benefits" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_benefits_locale_idx" ON "favPage_blocks_benefits" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_benefits_benefits_settings_benefits_settings_background_image_idx" ON "favPage_blocks_benefits" USING btree ("benefits_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_contact_contact_info_highlighted_contacts_order_idx" ON "favPage_blocks_contact_contact_info_highlighted_contacts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_contact_contact_info_highlighted_contacts_parent_id_idx" ON "favPage_blocks_contact_contact_info_highlighted_contacts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_contact_contact_info_highlighted_contacts_locale_idx" ON "favPage_blocks_contact_contact_info_highlighted_contacts" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_contact_contact_info_contact_items_order_idx" ON "favPage_blocks_contact_contact_info_contact_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_contact_contact_info_contact_items_parent_id_idx" ON "favPage_blocks_contact_contact_info_contact_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_contact_contact_info_contact_items_locale_idx" ON "favPage_blocks_contact_contact_info_contact_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_contact_order_idx" ON "favPage_blocks_contact" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_contact_parent_id_idx" ON "favPage_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_contact_path_idx" ON "favPage_blocks_contact" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_contact_locale_idx" ON "favPage_blocks_contact" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_contact_contact_settings_contact_settings_background_image_idx" ON "favPage_blocks_contact" USING btree ("contact_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_content_order_idx" ON "favPage_blocks_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_content_parent_id_idx" ON "favPage_blocks_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_content_path_idx" ON "favPage_blocks_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_content_locale_idx" ON "favPage_blocks_content" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_content_content_settings_content_settings_background_image_idx" ON "favPage_blocks_content" USING btree ("content_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_features_features_with_title_order_idx" ON "favPage_blocks_features_features_with_title" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_features_features_with_title_parent_id_idx" ON "favPage_blocks_features_features_with_title" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_features_features_with_title_locale_idx" ON "favPage_blocks_features_features_with_title" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_features_features_with_image_order_idx" ON "favPage_blocks_features_features_with_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_features_features_with_image_parent_id_idx" ON "favPage_blocks_features_features_with_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_features_features_with_image_locale_idx" ON "favPage_blocks_features_features_with_image" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_features_features_with_image_feature_feature_image_idx" ON "favPage_blocks_features_features_with_image" USING btree ("feature_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_features_features_uppercase_order_idx" ON "favPage_blocks_features_features_uppercase" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_features_features_uppercase_parent_id_idx" ON "favPage_blocks_features_features_uppercase" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_features_features_uppercase_locale_idx" ON "favPage_blocks_features_features_uppercase" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_features_order_idx" ON "favPage_blocks_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_features_parent_id_idx" ON "favPage_blocks_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_features_path_idx" ON "favPage_blocks_features" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_features_locale_idx" ON "favPage_blocks_features" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_features_features_settings_features_settings_background_image_idx" ON "favPage_blocks_features" USING btree ("features_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_form_slide_out_boxes_order_idx" ON "favPage_blocks_form_slide_out_boxes" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_form_slide_out_boxes_parent_id_idx" ON "favPage_blocks_form_slide_out_boxes" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_form_slide_out_boxes_locale_idx" ON "favPage_blocks_form_slide_out_boxes" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_form_slide_out_boxes_column_column_image_idx" ON "favPage_blocks_form_slide_out_boxes" USING btree ("column_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_form_slide_out_boxes_column_column_image2_idx" ON "favPage_blocks_form_slide_out_boxes" USING btree ("column_image2_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_form_order_idx" ON "favPage_blocks_form" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_form_parent_id_idx" ON "favPage_blocks_form" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_form_path_idx" ON "favPage_blocks_form" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_form_locale_idx" ON "favPage_blocks_form" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_form_form_settings_form_settings_background_image_idx" ON "favPage_blocks_form" USING btree ("form_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_flats_snippets_order_idx" ON "favPage_blocks_flats_snippets" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_flats_snippets_parent_id_idx" ON "favPage_blocks_flats_snippets" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_flats_snippets_path_idx" ON "favPage_blocks_flats_snippets" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_flats_snippets_locale_idx" ON "favPage_blocks_flats_snippets" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_flats_snippets_flats_set_flats_set_background_image_idx" ON "favPage_blocks_flats_snippets" USING btree ("flats_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_gallery_simple_slider_order_idx" ON "favPage_blocks_gallery_simple_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_gallery_simple_slider_parent_id_idx" ON "favPage_blocks_gallery_simple_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_gallery_simple_slider_locale_idx" ON "favPage_blocks_gallery_simple_slider" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_gallery_simple_slider_image_idx" ON "favPage_blocks_gallery_simple_slider" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_gallery_multi_slider_images_order_idx" ON "favPage_blocks_gallery_multi_slider_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_gallery_multi_slider_images_parent_id_idx" ON "favPage_blocks_gallery_multi_slider_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_gallery_multi_slider_images_locale_idx" ON "favPage_blocks_gallery_multi_slider_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_gallery_multi_slider_images_image_idx" ON "favPage_blocks_gallery_multi_slider_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_gallery_multi_slider_order_idx" ON "favPage_blocks_gallery_multi_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_gallery_multi_slider_parent_id_idx" ON "favPage_blocks_gallery_multi_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_gallery_multi_slider_locale_idx" ON "favPage_blocks_gallery_multi_slider" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_gallery_full_width_order_idx" ON "favPage_blocks_gallery_full_width" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_gallery_full_width_parent_id_idx" ON "favPage_blocks_gallery_full_width" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_gallery_full_width_locale_idx" ON "favPage_blocks_gallery_full_width" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_gallery_full_width_image_idx" ON "favPage_blocks_gallery_full_width" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_gallery_order_idx" ON "favPage_blocks_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_gallery_parent_id_idx" ON "favPage_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_gallery_path_idx" ON "favPage_blocks_gallery" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_gallery_locale_idx" ON "favPage_blocks_gallery" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_gallery_gallery_settings_gallery_settings_background_image_idx" ON "favPage_blocks_gallery" USING btree ("gallery_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_highlighted_text_buttons_order_idx" ON "favPage_blocks_highlighted_text_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_highlighted_text_buttons_parent_id_idx" ON "favPage_blocks_highlighted_text_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_highlighted_text_buttons_locale_idx" ON "favPage_blocks_highlighted_text_buttons" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_highlighted_text_order_idx" ON "favPage_blocks_highlighted_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_highlighted_text_parent_id_idx" ON "favPage_blocks_highlighted_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_highlighted_text_path_idx" ON "favPage_blocks_highlighted_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_highlighted_text_locale_idx" ON "favPage_blocks_highlighted_text" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_highlighted_text_high_set_high_set_background_image_idx" ON "favPage_blocks_highlighted_text" USING btree ("high_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_img_content_person_bullets_order_idx" ON "favPage_blocks_img_content_person_bullets" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_img_content_person_bullets_parent_id_idx" ON "favPage_blocks_img_content_person_bullets" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_img_content_person_bullets_locale_idx" ON "favPage_blocks_img_content_person_bullets" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_img_content_accordion_accordion_items_order_idx" ON "favPage_blocks_img_content_accordion_accordion_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_img_content_accordion_accordion_items_parent_id_idx" ON "favPage_blocks_img_content_accordion_accordion_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_img_content_accordion_accordion_items_locale_idx" ON "favPage_blocks_img_content_accordion_accordion_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_img_content_order_idx" ON "favPage_blocks_img_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_img_content_parent_id_idx" ON "favPage_blocks_img_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_img_content_path_idx" ON "favPage_blocks_img_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_img_content_locale_idx" ON "favPage_blocks_img_content" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_img_content_img_cont_set_img_cont_set_background_image_idx" ON "favPage_blocks_img_content" USING btree ("img_cont_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_img_content_image_idx" ON "favPage_blocks_img_content" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_images_grid_images_order_idx" ON "favPage_blocks_images_grid_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_images_grid_images_parent_id_idx" ON "favPage_blocks_images_grid_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_images_grid_images_locale_idx" ON "favPage_blocks_images_grid_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_images_grid_images_image_idx" ON "favPage_blocks_images_grid_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_images_grid_order_idx" ON "favPage_blocks_images_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_images_grid_parent_id_idx" ON "favPage_blocks_images_grid" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_images_grid_path_idx" ON "favPage_blocks_images_grid" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_images_grid_locale_idx" ON "favPage_blocks_images_grid" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_images_grid_images_settings_images_settings_background_image_idx" ON "favPage_blocks_images_grid" USING btree ("images_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_image_pins_pins_order_idx" ON "favPage_blocks_image_pins_pins" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_image_pins_pins_parent_id_idx" ON "favPage_blocks_image_pins_pins" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_image_pins_pins_locale_idx" ON "favPage_blocks_image_pins_pins" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_image_pins_pins_logo_idx" ON "favPage_blocks_image_pins_pins" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_image_pins_order_idx" ON "favPage_blocks_image_pins" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_image_pins_parent_id_idx" ON "favPage_blocks_image_pins" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_image_pins_path_idx" ON "favPage_blocks_image_pins" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_image_pins_locale_idx" ON "favPage_blocks_image_pins" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_image_pins_image_pins_set_image_pins_set_background_image_idx" ON "favPage_blocks_image_pins" USING btree ("image_pins_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_image_pins_background_image_idx" ON "favPage_blocks_image_pins" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_map_pins_order_idx" ON "favPage_blocks_map_pins" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_map_pins_parent_id_idx" ON "favPage_blocks_map_pins" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_map_pins_locale_idx" ON "favPage_blocks_map_pins" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_map_pins_logo_idx" ON "favPage_blocks_map_pins" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_map_order_idx" ON "favPage_blocks_map" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_map_parent_id_idx" ON "favPage_blocks_map" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_map_path_idx" ON "favPage_blocks_map" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_map_locale_idx" ON "favPage_blocks_map" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_map_map_settings_map_settings_background_image_idx" ON "favPage_blocks_map" USING btree ("map_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_map_map_idx" ON "favPage_blocks_map" USING btree ("map_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_news_snippets_order_idx" ON "favPage_blocks_news_snippets" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_news_snippets_parent_id_idx" ON "favPage_blocks_news_snippets" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_news_snippets_path_idx" ON "favPage_blocks_news_snippets" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_news_snippets_locale_idx" ON "favPage_blocks_news_snippets" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_news_snippets_news_set_news_set_background_image_idx" ON "favPage_blocks_news_snippets" USING btree ("news_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_numbers_numbers_order_idx" ON "favPage_blocks_numbers_numbers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_numbers_numbers_parent_id_idx" ON "favPage_blocks_numbers_numbers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_numbers_numbers_locale_idx" ON "favPage_blocks_numbers_numbers" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_numbers_order_idx" ON "favPage_blocks_numbers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_numbers_parent_id_idx" ON "favPage_blocks_numbers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_numbers_path_idx" ON "favPage_blocks_numbers" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_numbers_locale_idx" ON "favPage_blocks_numbers" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_numbers_numbers_settings_numbers_settings_background_image_idx" ON "favPage_blocks_numbers" USING btree ("numbers_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_timeline_timeline_order_idx" ON "favPage_blocks_timeline_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_timeline_timeline_parent_id_idx" ON "favPage_blocks_timeline_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_timeline_timeline_locale_idx" ON "favPage_blocks_timeline_timeline" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_timeline_order_idx" ON "favPage_blocks_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_timeline_parent_id_idx" ON "favPage_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_timeline_path_idx" ON "favPage_blocks_timeline" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_timeline_locale_idx" ON "favPage_blocks_timeline" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_timeline_timeline_settings_timeline_settings_background_image_idx" ON "favPage_blocks_timeline" USING btree ("timeline_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_our_projects_projects_order_idx" ON "favPage_blocks_our_projects_projects" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_our_projects_projects_parent_id_idx" ON "favPage_blocks_our_projects_projects" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_our_projects_projects_locale_idx" ON "favPage_blocks_our_projects_projects" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_our_projects_projects_image_idx" ON "favPage_blocks_our_projects_projects" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_our_projects_order_idx" ON "favPage_blocks_our_projects" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_our_projects_parent_id_idx" ON "favPage_blocks_our_projects" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_our_projects_path_idx" ON "favPage_blocks_our_projects" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_our_projects_locale_idx" ON "favPage_blocks_our_projects" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_our_projects_our_proj_set_our_proj_set_background_image_idx" ON "favPage_blocks_our_projects" USING btree ("our_proj_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_prices_order_idx" ON "favPage_blocks_prices" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_prices_parent_id_idx" ON "favPage_blocks_prices" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_prices_path_idx" ON "favPage_blocks_prices" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_prices_locale_idx" ON "favPage_blocks_prices" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_prices_prices_settings_prices_settings_background_image_idx" ON "favPage_blocks_prices" USING btree ("prices_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_interactive_picker_extended_views_order_idx" ON "favPage_blocks_interactive_picker_extended_views" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_interactive_picker_extended_views_parent_id_idx" ON "favPage_blocks_interactive_picker_extended_views" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_interactive_picker_extended_views_locale_idx" ON "favPage_blocks_interactive_picker_extended_views" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_interactive_picker_extended_views_image_idx" ON "favPage_blocks_interactive_picker_extended_views" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_interactive_picker_extended_order_idx" ON "favPage_blocks_interactive_picker_extended" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_interactive_picker_extended_parent_id_idx" ON "favPage_blocks_interactive_picker_extended" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_interactive_picker_extended_path_idx" ON "favPage_blocks_interactive_picker_extended" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_interactive_picker_extended_locale_idx" ON "favPage_blocks_interactive_picker_extended" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_visual_price_list_buildings_order_idx" ON "favPage_blocks_visual_price_list_buildings" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_visual_price_list_buildings_parent_id_idx" ON "favPage_blocks_visual_price_list_buildings" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_visual_price_list_buildings_locale_idx" ON "favPage_blocks_visual_price_list_buildings" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_visual_price_list_buildings_building_idx" ON "favPage_blocks_visual_price_list_buildings" USING btree ("building_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_visual_price_list_order_idx" ON "favPage_blocks_visual_price_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_visual_price_list_parent_id_idx" ON "favPage_blocks_visual_price_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_visual_price_list_path_idx" ON "favPage_blocks_visual_price_list" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_visual_price_list_locale_idx" ON "favPage_blocks_visual_price_list" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_step_cards_steps_order_idx" ON "favPage_blocks_step_cards_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_step_cards_steps_parent_id_idx" ON "favPage_blocks_step_cards_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_step_cards_steps_locale_idx" ON "favPage_blocks_step_cards_steps" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_step_cards_order_idx" ON "favPage_blocks_step_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_step_cards_parent_id_idx" ON "favPage_blocks_step_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_step_cards_path_idx" ON "favPage_blocks_step_cards" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_step_cards_locale_idx" ON "favPage_blocks_step_cards" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_step_cards_step_cards_set_step_cards_set_background_image_idx" ON "favPage_blocks_step_cards" USING btree ("step_cards_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_sticky_slides_slides_slide_images_order_idx" ON "favPage_blocks_sticky_slides_slides_slide_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_sticky_slides_slides_slide_images_parent_id_idx" ON "favPage_blocks_sticky_slides_slides_slide_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_sticky_slides_slides_slide_images_locale_idx" ON "favPage_blocks_sticky_slides_slides_slide_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_sticky_slides_slides_slide_images_image_idx" ON "favPage_blocks_sticky_slides_slides_slide_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_sticky_slides_slides_order_idx" ON "favPage_blocks_sticky_slides_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_sticky_slides_slides_parent_id_idx" ON "favPage_blocks_sticky_slides_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_sticky_slides_slides_locale_idx" ON "favPage_blocks_sticky_slides_slides" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_sticky_slides_order_idx" ON "favPage_blocks_sticky_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_sticky_slides_parent_id_idx" ON "favPage_blocks_sticky_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_sticky_slides_path_idx" ON "favPage_blocks_sticky_slides" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_sticky_slides_locale_idx" ON "favPage_blocks_sticky_slides" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_sticky_slides_sticky_set_sticky_set_background_image_idx" ON "favPage_blocks_sticky_slides" USING btree ("sticky_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_complex_order_idx" ON "favPage_blocks_multi_gallery_grid_items_complex" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_complex_parent_id_idx" ON "favPage_blocks_multi_gallery_grid_items_complex" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_complex_locale_idx" ON "favPage_blocks_multi_gallery_grid_items_complex" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_complex_image_one_idx" ON "favPage_blocks_multi_gallery_grid_items_complex" USING btree ("image_one_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_complex_image_two_idx" ON "favPage_blocks_multi_gallery_grid_items_complex" USING btree ("image_two_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_complex_image_three_idx" ON "favPage_blocks_multi_gallery_grid_items_complex" USING btree ("image_three_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_complex_image_four_idx" ON "favPage_blocks_multi_gallery_grid_items_complex" USING btree ("image_four_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_simple_grid_left_col_order_idx" ON "favPage_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_simple_grid_left_col_parent_id_idx" ON "favPage_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_simple_grid_left_col_locale_idx" ON "favPage_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_simple_grid_left_col_image_idx" ON "favPage_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_simple_grid_right_col_order_idx" ON "favPage_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_simple_grid_right_col_parent_id_idx" ON "favPage_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_simple_grid_right_col_locale_idx" ON "favPage_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_simple_grid_right_col_image_idx" ON "favPage_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_simple_grid_order_idx" ON "favPage_blocks_multi_gallery_grid_items_simple_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_simple_grid_parent_id_idx" ON "favPage_blocks_multi_gallery_grid_items_simple_grid" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_simple_grid_locale_idx" ON "favPage_blocks_multi_gallery_grid_items_simple_grid" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_order_idx" ON "favPage_blocks_multi_gallery_grid_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_parent_id_idx" ON "favPage_blocks_multi_gallery_grid_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_grid_items_locale_idx" ON "favPage_blocks_multi_gallery_grid_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_order_idx" ON "favPage_blocks_multi_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_parent_id_idx" ON "favPage_blocks_multi_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_path_idx" ON "favPage_blocks_multi_gallery" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_locale_idx" ON "favPage_blocks_multi_gallery" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_multi_gallery_multi_g_set_multi_g_set_background_image_idx" ON "favPage_blocks_multi_gallery" USING btree ("multi_g_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_shared_section_order_idx" ON "favPage_blocks_shared_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_shared_section_parent_id_idx" ON "favPage_blocks_shared_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_shared_section_path_idx" ON "favPage_blocks_shared_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_shared_section_locale_idx" ON "favPage_blocks_shared_section" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "favPage_blocks_shared_section_shared_section_idx" ON "favPage_blocks_shared_section" USING btree ("shared_section_id");
  CREATE INDEX IF NOT EXISTS "favPage_project_idx" ON "favPage" USING btree ("project_id");
  CREATE INDEX IF NOT EXISTS "favPage_meta_meta_og_image_idx" ON "favPage" USING btree ("meta_og_image_id");
  CREATE INDEX IF NOT EXISTS "favPage_updated_at_idx" ON "favPage" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "favPage_created_at_idx" ON "favPage" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "favPagestoone_locale_parent_id_unique" ON "favPagestoone" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_rels_order_idx" ON "favPage_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "favPage_rels_parent_idx" ON "favPage_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "favPage_rels_path_idx" ON "favPage_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "favPage_rels_locale_idx" ON "favPage_rels" USING btree ("locale");
  CREATE INDEX IF NOT EXISTS "favPage_rels_pages_id_idx" ON "favPage_rels" USING btree ("pages_id","locale");
  CREATE INDEX IF NOT EXISTS "favPage_rels_flats_id_idx" ON "favPage_rels" USING btree ("flats_id","locale");
  CREATE INDEX IF NOT EXISTS "favPage_rels_news_id_idx" ON "favPage_rels" USING btree ("news_id","locale");
  CREATE INDEX IF NOT EXISTS "favPage_rels_documents_id_idx" ON "favPage_rels" USING btree ("documents_id","locale");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_favourites_page_fk" FOREIGN KEY ("favPage_id") REFERENCES "public"."favPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_favPage_id_idx" ON "payload_locked_documents_rels" USING btree ("favPage_id");`)
}
