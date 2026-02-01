import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en', 'cs');
  CREATE TYPE "public"."enum_share_blocks_banner_banner_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_banner_banner_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_banner_banner_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_share_blocks_banner_banner_variant" AS ENUM('large', 'small');
  CREATE TYPE "public"."enum_share_blocks_banner_banner_content_position" AS ENUM('center', 'left', 'right');
  CREATE TYPE "public"."enum_share_blocks_banner_banner_button_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."icnPos" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_share_blocks_banner_banner_button_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_share_blocks_banner_banner_button_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_share_blocks_benefits_benefits_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_benefits_benefits_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_benefits_benefits_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_share_blocks_contact_contact_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_contact_contact_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_contact_contact_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_share_blocks_contact_contact_form_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_share_blocks_contact_variant" AS ENUM('withContactInfo', 'onlyForm');
  CREATE TYPE "public"."enum_share_blocks_content_content_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_content_content_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_content_content_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_share_blocks_content_content_position" AS ENUM('center', 'left', 'right');
  CREATE TYPE "public"."enum_share_blocks_features_features_with_title_feature_icon" AS ENUM('phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat', 'testicon', 'testicon2');
  CREATE TYPE "public"."enum_share_blocks_features_features_with_title_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_share_blocks_features_features_uppercase_feature_icon" AS ENUM('phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat', 'testicon', 'testicon2');
  CREATE TYPE "public"."enum_share_blocks_features_features_uppercase_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_share_blocks_features_features_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_features_features_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_features_features_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_share_blocks_features_features_settings_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_share_blocks_features_features_settings_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_share_blocks_features_features_settings_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_share_blocks_features_features_settings_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_share_blocks_features_features_variant" AS ENUM('withTitle', 'uppercase');
  CREATE TYPE "public"."enum_share_blocks_form_form_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_form_form_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_form_form_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_share_blocks_form_layout_variant" AS ENUM('withContent', 'onlyForm', 'withGallery');
  CREATE TYPE "public"."enum_share_blocks_form_form_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_share_blocks_flats_snippets_flats_set_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_flats_snippets_flats_set_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_flats_snippets_flats_set_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_share_blocks_flats_snippets_flats_set_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_share_blocks_flats_snippets_flats_set_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_share_blocks_flats_snippets_flats_set_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_share_blocks_flats_snippets_flats_set_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_share_blocks_gallery_simple_slider_slide_width" AS ENUM('square', 'wide', 'tall');
  CREATE TYPE "public"."enum_share_blocks_gallery_multi_slider_images_slide_width" AS ENUM('square', 'wide', 'tall');
  CREATE TYPE "public"."enum_share_blocks_gallery_gallery_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_gallery_gallery_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_gallery_gallery_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_share_blocks_gallery_controls_type" AS ENUM('arrows', 'dots', 'dotsAndArrows', 'none');
  CREATE TYPE "public"."enum_share_blocks_gallery_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_share_blocks_gallery_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_share_blocks_gallery_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_share_blocks_gallery_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_share_blocks_gallery_gallery_variant" AS ENUM('simpleSlider', 'multipleSliders', 'fullWidth');
  CREATE TYPE "public"."enum_share_blocks_hero_main_buttons_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_share_blocks_hero_main_buttons_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_share_blocks_hero_main_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_share_blocks_hero_main_buttons_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_share_blocks_hero_secondary_buttons_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_share_blocks_hero_secondary_buttons_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_share_blocks_hero_secondary_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_share_blocks_hero_type" AS ENUM('imageOnly', 'slideshow', 'video');
  CREATE TYPE "public"."enum_share_blocks_highlighted_text_high_set_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_highlighted_text_high_set_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_highlighted_text_high_set_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_share_blocks_highlighted_text_highlighted_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_share_blocks_highlighted_text_highlighted_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_share_blocks_highlighted_text_highlighted_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_imgContent_person_bullet_points_feature_icon" AS ENUM('phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat', 'testicon', 'testicon2');
  CREATE TYPE "public"."enum_imgContent_person_bullet_points_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_imgContent_image_content_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_imgContent_image_content_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_imgContent_image_content_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_imgContent_content_type" AS ENUM('default', 'person', 'accordion');
  CREATE TYPE "public"."enum_imgContent_accordion_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_imgContent_accordion_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_imgContent_accordion_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_imgContent_accordion_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_imgContent_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_imgContent_image_size" AS ENUM('small', 'medium');
  CREATE TYPE "public"."enum_share_blocks_images_grid_images_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_images_grid_images_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_images_grid_images_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_share_blocks_images_grid_direction_variant" AS ENUM('default', 'reverse');
  CREATE TYPE "public"."enum_share_blocks_image_pins_image_pins_set_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_image_pins_image_pins_set_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_image_pins_image_pins_set_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_share_blocks_news_snippets_news_set_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_news_snippets_news_set_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_news_snippets_news_set_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_share_blocks_news_snippets_news_set_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_share_blocks_news_snippets_news_set_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_share_blocks_news_snippets_news_set_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_share_blocks_news_snippets_news_set_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_share_blocks_numbers_numbers_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_numbers_numbers_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_numbers_numbers_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_share_blocks_timeline_timeline_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_timeline_timeline_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_timeline_timeline_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_share_blocks_prices_prices_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_prices_prices_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_share_blocks_prices_prices_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_share_blocks_interactive_picker_extended_views_direct" AS ENUM('south', 'north', 'east', 'west', 'northwest', 'northeast', 'southeast', 'southwest');
  CREATE TYPE "public"."enum_share_blocks_text_image_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_roles_permissions_projects" AS ENUM('create', 'read', 'update', 'delete');
  CREATE TYPE "public"."enum_roles_permissions_pages" AS ENUM('create', 'read', 'update', 'delete');
  CREATE TYPE "public"."enum_roles_permissions_globalheader" AS ENUM('create', 'read', 'update', 'delete');
  CREATE TYPE "public"."enum_roles_permissions_globalfooter" AS ENUM('create', 'read', 'update', 'delete');
  CREATE TYPE "public"."enum_roles_permissions_project_global_settings" AS ENUM('create', 'read', 'update', 'delete');
  CREATE TYPE "public"."enum_roles_permissions_buildings" AS ENUM('create', 'read', 'update', 'delete');
  CREATE TYPE "public"."enum_roles_permissions_flats" AS ENUM('create', 'read', 'update', 'delete');
  CREATE TYPE "public"."enum_roles_permissions_flat_detail_page" AS ENUM('create', 'read', 'update', 'delete');
  CREATE TYPE "public"."enum_roles_permissions_sectors" AS ENUM('create', 'read', 'update', 'delete');
  CREATE TYPE "public"."enum_roles_permissions_floors" AS ENUM('create', 'read', 'update', 'delete');
  CREATE TYPE "public"."enum_roles_permissions_news" AS ENUM('create', 'read', 'update', 'delete');
  CREATE TYPE "public"."enum_roles_permissions_media" AS ENUM('create', 'read', 'update', 'delete');
  CREATE TYPE "public"."enum_roles_permissions_documents" AS ENUM('create', 'read', 'update', 'delete');
  CREATE TYPE "public"."enum_roles_permissions_share" AS ENUM('create', 'read', 'update', 'delete');
  CREATE TYPE "public"."enum_projects_level_stoone" AS ENUM('levelstoone_1', 'levelstoone_2', 'levelstoone_3', 'levelstoone_4');
  CREATE TYPE "public"."enum_projects_cron_settings_schedule" AS ENUM('every_5_minutes', 'every_15_minutes', 'every_hour', 'every_6_hours', 'every_12_hours', 'daily_midnight', 'daily_6am', 'weekly_sunday');
  CREATE TYPE "public"."enum_projects_cron_settings_status" AS ENUM('inactive', 'active', 'error', 'paused');
  CREATE TYPE "public"."enum_pages_blocks_hero_main_buttons_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_pages_blocks_hero_main_buttons_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_pages_blocks_hero_main_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_pages_blocks_hero_main_buttons_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_hero_secondary_buttons_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_pages_blocks_hero_secondary_buttons_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_pages_blocks_hero_secondary_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_pages_blocks_hero_type" AS ENUM('imageOnly', 'slideshow', 'video');
  CREATE TYPE "public"."enum_pages_blocks_text_image_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_banner_banner_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_banner_banner_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_banner_banner_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_banner_banner_variant" AS ENUM('large', 'small');
  CREATE TYPE "public"."enum_pages_blocks_banner_banner_content_position" AS ENUM('center', 'left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_banner_banner_button_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_pages_blocks_banner_banner_button_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_pages_blocks_banner_banner_button_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_pages_blocks_benefits_benefits_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_benefits_benefits_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_benefits_benefits_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_contact_contact_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_contact_contact_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_contact_contact_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_contact_contact_form_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_contact_variant" AS ENUM('withContactInfo', 'onlyForm');
  CREATE TYPE "public"."enum_pages_blocks_content_content_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_content_content_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_content_content_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_content_content_position" AS ENUM('center', 'left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_features_features_with_title_feature_icon" AS ENUM('phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat', 'testicon', 'testicon2');
  CREATE TYPE "public"."enum_pages_blocks_features_features_with_title_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_icon" AS ENUM('phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat', 'testicon', 'testicon2');
  CREATE TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_pages_blocks_features_features_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_features_features_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_features_features_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_features_features_settings_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_pages_blocks_features_features_settings_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_pages_blocks_features_features_settings_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_pages_blocks_features_features_settings_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_features_features_variant" AS ENUM('withTitle', 'uppercase');
  CREATE TYPE "public"."enum_pages_blocks_form_form_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_form_form_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_form_form_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_form_layout_variant" AS ENUM('withContent', 'onlyForm', 'withGallery');
  CREATE TYPE "public"."enum_pages_blocks_form_form_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_gallery_simple_slider_slide_width" AS ENUM('square', 'wide', 'tall');
  CREATE TYPE "public"."enum_pages_blocks_gallery_multi_slider_images_slide_width" AS ENUM('square', 'wide', 'tall');
  CREATE TYPE "public"."enum_pages_blocks_gallery_gallery_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_gallery_gallery_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_gallery_gallery_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_gallery_controls_type" AS ENUM('arrows', 'dots', 'dotsAndArrows', 'none');
  CREATE TYPE "public"."enum_pages_blocks_gallery_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_pages_blocks_gallery_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_pages_blocks_gallery_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_pages_blocks_gallery_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_gallery_gallery_variant" AS ENUM('simpleSlider', 'multipleSliders', 'fullWidth');
  CREATE TYPE "public"."enum_pages_blocks_highlighted_text_high_set_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_highlighted_text_high_set_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_highlighted_text_high_set_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_highlighted_text_highlighted_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_pages_blocks_highlighted_text_highlighted_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_pages_blocks_highlighted_text_highlighted_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_pages_blocks_images_grid_images_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_images_grid_images_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_images_grid_images_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_images_grid_direction_variant" AS ENUM('default', 'reverse');
  CREATE TYPE "public"."enum_pages_blocks_image_pins_image_pins_set_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_image_pins_image_pins_set_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_image_pins_image_pins_set_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_news_snippets_news_set_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_news_snippets_news_set_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_news_snippets_news_set_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_news_snippets_news_set_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_pages_blocks_news_snippets_news_set_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_pages_blocks_news_snippets_news_set_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_pages_blocks_news_snippets_news_set_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_numbers_numbers_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_numbers_numbers_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_numbers_numbers_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_timeline_timeline_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_timeline_timeline_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_timeline_timeline_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_prices_prices_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_prices_prices_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_prices_prices_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_interactive_picker_extended_views_direct" AS ENUM('south', 'north', 'east', 'west', 'northwest', 'northeast', 'southeast', 'southwest');
  CREATE TYPE "public"."enum_pages_meta_twitter_card" AS ENUM('summary', 'summary_large_image', 'app', 'player');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_main_buttons_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_main_buttons_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_main_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_main_buttons_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_secondary_buttons_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_secondary_buttons_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_secondary_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_type" AS ENUM('imageOnly', 'slideshow', 'video');
  CREATE TYPE "public"."enum__pages_v_blocks_text_image_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_banner_banner_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_banner_banner_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_banner_banner_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_banner_banner_variant" AS ENUM('large', 'small');
  CREATE TYPE "public"."enum__pages_v_blocks_banner_banner_content_position" AS ENUM('center', 'left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_banner_banner_button_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum__pages_v_blocks_banner_banner_button_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum__pages_v_blocks_banner_banner_button_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum__pages_v_blocks_benefits_benefits_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_benefits_benefits_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_benefits_benefits_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_contact_contact_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_contact_contact_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_contact_contact_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_contact_contact_form_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_contact_variant" AS ENUM('withContactInfo', 'onlyForm');
  CREATE TYPE "public"."enum__pages_v_blocks_content_content_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_content_content_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_content_content_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_content_content_position" AS ENUM('center', 'left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_icon" AS ENUM('phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat', 'testicon', 'testicon2');
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_icon" AS ENUM('phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat', 'testicon', 'testicon2');
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_settings_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_settings_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_settings_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_settings_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_variant" AS ENUM('withTitle', 'uppercase');
  CREATE TYPE "public"."enum__pages_v_blocks_form_form_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_form_form_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_form_form_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_form_layout_variant" AS ENUM('withContent', 'onlyForm', 'withGallery');
  CREATE TYPE "public"."enum__pages_v_blocks_form_form_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_simple_slider_slide_width" AS ENUM('square', 'wide', 'tall');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_multi_slider_images_slide_width" AS ENUM('square', 'wide', 'tall');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_gallery_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_gallery_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_gallery_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_controls_type" AS ENUM('arrows', 'dots', 'dotsAndArrows', 'none');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_gallery_variant" AS ENUM('simpleSlider', 'multipleSliders', 'fullWidth');
  CREATE TYPE "public"."enum__pages_v_blocks_highlighted_text_high_set_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_highlighted_text_high_set_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_highlighted_text_high_set_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_highlighted_text_highlighted_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum__pages_v_blocks_highlighted_text_highlighted_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum__pages_v_blocks_highlighted_text_highlighted_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum__imgContent_v_person_bullet_points_feature_icon" AS ENUM('phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat', 'testicon', 'testicon2');
  CREATE TYPE "public"."enum__imgContent_v_person_bullet_points_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum__imgContent_v_image_content_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__imgContent_v_image_content_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__imgContent_v_image_content_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum__imgContent_v_content_type" AS ENUM('default', 'person', 'accordion');
  CREATE TYPE "public"."enum__imgContent_v_accordion_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum__imgContent_v_accordion_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum__imgContent_v_accordion_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum__imgContent_v_accordion_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__imgContent_v_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__imgContent_v_image_size" AS ENUM('small', 'medium');
  CREATE TYPE "public"."enum__pages_v_blocks_images_grid_images_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_images_grid_images_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_images_grid_images_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_images_grid_direction_variant" AS ENUM('default', 'reverse');
  CREATE TYPE "public"."enum__pages_v_blocks_image_pins_image_pins_set_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_image_pins_image_pins_set_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_image_pins_image_pins_set_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_numbers_numbers_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_numbers_numbers_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_numbers_numbers_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline_timeline_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline_timeline_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline_timeline_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_prices_prices_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_prices_prices_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_prices_prices_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum__pages_v_blocks_interactive_picker_extended_views_direct" AS ENUM('south', 'north', 'east', 'west', 'northwest', 'northeast', 'southeast', 'southwest');
  CREATE TYPE "public"."enum__pages_v_version_meta_twitter_card" AS ENUM('summary', 'summary_large_image', 'app', 'player');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM('en', 'cs');
  CREATE TYPE "public"."enum_globalheader_nav_items_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_globalheader_nav_items_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_globalheader_nav_items_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_globalheader_cta_buttons_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_globalheader_cta_buttons_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_globalheader_cta_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_globalfooter_highlighted_contacts_type" AS ENUM('phone', 'mail');
  CREATE TYPE "public"."enum_globalfooter_social_links_icon_type" AS ENUM('facebook', 'xPlatform', 'instagram', 'linkedIn', 'youtube', 'tiktok');
  CREATE TYPE "public"."enum_globalfooter_bottom_links_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_globalfooter_bottom_links_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_globalfooter_bottom_links_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_flats_gallery_simple_slider_slide_width" AS ENUM('square', 'wide', 'tall');
  CREATE TYPE "public"."enum_flats_gallery_multi_slider_images_slide_width" AS ENUM('square', 'wide', 'tall');
  CREATE TYPE "public"."enum_flats_gallery_gallery_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flats_gallery_gallery_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flats_gallery_gallery_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_flats_gallery_controls_type" AS ENUM('arrows', 'dots', 'dotsAndArrows', 'none');
  CREATE TYPE "public"."enum_flats_gallery_gallery_variant" AS ENUM('simpleSlider', 'multipleSliders');
  CREATE TYPE "public"."enum_flats_meta_twitter_card" AS ENUM('summary', 'summary_large_image', 'app', 'player');
  CREATE TYPE "public"."enum_flats_gallery_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_flats_gallery_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_flats_gallery_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_flats_gallery_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_project_global_settings_meta_twitter_card" AS ENUM('summary', 'summary_large_image', 'app', 'player');
  CREATE TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_flDet_blocks_hero_secondary_buttons_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_flDet_blocks_hero_secondary_buttons_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_flDet_blocks_hero_secondary_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_flDet_blocks_hero_type" AS ENUM('imageOnly', 'slideshow', 'video');
  CREATE TYPE "public"."enum_flDet_blocks_text_image_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_flDet_blocks_banner_banner_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_banner_banner_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_banner_banner_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_flDet_blocks_banner_banner_variant" AS ENUM('large', 'small');
  CREATE TYPE "public"."enum_flDet_blocks_banner_banner_content_position" AS ENUM('center', 'left', 'right');
  CREATE TYPE "public"."enum_flDet_blocks_banner_banner_button_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_flDet_blocks_banner_banner_button_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_flDet_blocks_banner_banner_button_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_flDet_blocks_benefits_benefits_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_benefits_benefits_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_benefits_benefits_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_flDet_blocks_contact_contact_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_contact_contact_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_contact_contact_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_flDet_blocks_contact_contact_form_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_flDet_blocks_contact_variant" AS ENUM('withContactInfo', 'onlyForm');
  CREATE TYPE "public"."enum_flDet_blocks_content_content_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_content_content_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_content_content_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_flDet_blocks_content_content_position" AS ENUM('center', 'left', 'right');
  CREATE TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_icon" AS ENUM('phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat', 'testicon', 'testicon2');
  CREATE TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_icon" AS ENUM('phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat', 'testicon', 'testicon2');
  CREATE TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_flDet_blocks_features_features_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_features_features_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_features_features_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_flDet_blocks_features_features_settings_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_flDet_blocks_features_features_settings_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_flDet_blocks_features_features_settings_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_flDet_blocks_features_features_settings_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_flDet_blocks_features_features_variant" AS ENUM('withTitle', 'uppercase');
  CREATE TYPE "public"."enum_flDet_blocks_form_form_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_form_form_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_form_form_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_flDet_blocks_form_layout_variant" AS ENUM('withContent', 'onlyForm', 'withGallery');
  CREATE TYPE "public"."enum_flDet_blocks_form_form_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_flDet_blocks_gallery_simple_slider_slide_width" AS ENUM('square', 'wide', 'tall');
  CREATE TYPE "public"."enum_flDet_blocks_gallery_multi_slider_images_slide_width" AS ENUM('square', 'wide', 'tall');
  CREATE TYPE "public"."enum_flDet_blocks_gallery_gallery_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_gallery_gallery_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_gallery_gallery_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_flDet_blocks_gallery_controls_type" AS ENUM('arrows', 'dots', 'dotsAndArrows', 'none');
  CREATE TYPE "public"."enum_flDet_blocks_gallery_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_flDet_blocks_gallery_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_flDet_blocks_gallery_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_flDet_blocks_gallery_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_flDet_blocks_gallery_gallery_variant" AS ENUM('simpleSlider', 'multipleSliders', 'fullWidth');
  CREATE TYPE "public"."enum_flDet_blocks_highlighted_text_high_set_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_highlighted_text_high_set_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_highlighted_text_high_set_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_flDet_blocks_highlighted_text_highlighted_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_flDet_blocks_highlighted_text_highlighted_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_flDet_blocks_highlighted_text_highlighted_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_flDet_blocks_images_grid_images_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_images_grid_images_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_images_grid_images_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_flDet_blocks_images_grid_direction_variant" AS ENUM('default', 'reverse');
  CREATE TYPE "public"."enum_flDet_blocks_image_pins_image_pins_set_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_image_pins_image_pins_set_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_image_pins_image_pins_set_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_flDet_blocks_news_snippets_news_set_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_news_snippets_news_set_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_news_snippets_news_set_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_flDet_blocks_news_snippets_news_set_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_flDet_blocks_news_snippets_news_set_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_flDet_blocks_news_snippets_news_set_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_flDet_blocks_news_snippets_news_set_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_flDet_blocks_numbers_numbers_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_numbers_numbers_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_numbers_numbers_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_flDet_blocks_timeline_timeline_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_timeline_timeline_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_timeline_timeline_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_flDet_blocks_prices_prices_settings_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_prices_prices_settings_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_flDet_blocks_prices_prices_settings_background" AS ENUM('none', 'light', 'dark');
  CREATE TYPE "public"."enum_flDet_blocks_interactive_picker_extended_views_direct" AS ENUM('south', 'north', 'east', 'west', 'northwest', 'northeast', 'southeast', 'southwest');
  CREATE TYPE "public"."enum_flDet_meta_twitter_card" AS ENUM('summary', 'summary_large_image', 'app', 'player');
  CREATE TYPE "public"."enum_news_meta_twitter_card" AS ENUM('summary', 'summary_large_image', 'app', 'player');
  CREATE TYPE "public"."enum_news_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__news_v_version_meta_twitter_card" AS ENUM('summary', 'summary_large_image', 'app', 'player');
  CREATE TYPE "public"."enum__news_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE IF NOT EXISTS "share_blocks_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"banner_settings_anchor_id" varchar,
  	"banner_settings_padding_top" "enum_share_blocks_banner_banner_settings_padding_top" DEFAULT 'medium',
  	"banner_settings_padding_bottom" "enum_share_blocks_banner_banner_settings_padding_bottom" DEFAULT 'medium',
  	"banner_settings_has_background_image" boolean DEFAULT false,
  	"banner_settings_background" "enum_share_blocks_banner_banner_settings_background" DEFAULT 'none',
  	"banner_settings_background_image_id" integer,
  	"banner_variant" "enum_share_blocks_banner_banner_variant" DEFAULT 'small',
  	"banner_content_position" "enum_share_blocks_banner_banner_content_position" DEFAULT 'center',
  	"caption" varchar,
  	"content" jsonb,
  	"banner_button_type" "enum_share_blocks_banner_banner_button_type" DEFAULT 'internal',
  	"banner_button_new_tab" boolean,
  	"banner_button_has_anchor" boolean,
  	"banner_button_dark_button" boolean,
  	"banner_button_icon_position" "icnPos" DEFAULT 'left',
  	"banner_button_icon" "enum_share_blocks_banner_banner_button_icon",
  	"banner_button_label" varchar,
  	"banner_button_relation" "enum_share_blocks_banner_banner_button_relation" DEFAULT 'pages',
  	"banner_button_url" varchar,
  	"banner_button_anchor_to" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_benefits_benefits_row_item_heading_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_benefits_benefits_row_item2_heading_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_benefits_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"row_item_image_id" integer,
  	"row_item_description" jsonb,
  	"row_item2_image_id" integer,
  	"row_item2_description" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"benefits_settings_anchor_id" varchar,
  	"benefits_settings_padding_top" "enum_share_blocks_benefits_benefits_settings_padding_top" DEFAULT 'medium',
  	"benefits_settings_padding_bottom" "enum_share_blocks_benefits_benefits_settings_padding_bottom" DEFAULT 'medium',
  	"benefits_settings_has_background_image" boolean DEFAULT false,
  	"benefits_settings_background" "enum_share_blocks_benefits_benefits_settings_background" DEFAULT 'none',
  	"benefits_settings_background_image_id" integer,
  	"show_logo" boolean DEFAULT true,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_contact_contact_info_highlighted_contacts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_title" varchar,
  	"item_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_contact_contact_info_contact_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_title" varchar,
  	"item_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"contact_settings_anchor_id" varchar,
  	"contact_settings_padding_top" "enum_share_blocks_contact_contact_settings_padding_top" DEFAULT 'medium',
  	"contact_settings_padding_bottom" "enum_share_blocks_contact_contact_settings_padding_bottom" DEFAULT 'medium',
  	"contact_settings_has_background_image" boolean DEFAULT false,
  	"contact_settings_background" "enum_share_blocks_contact_contact_settings_background" DEFAULT 'none',
  	"contact_settings_background_image_id" integer,
  	"contact_settings_heading" jsonb,
  	"contact_form_config_first_name_label" varchar DEFAULT 'First Name',
  	"contact_form_config_first_name_placeholder" varchar DEFAULT 'Enter your first name',
  	"contact_form_config_first_name_validation_min_length" numeric DEFAULT 2,
  	"contact_form_config_first_name_validation_min_length_message" varchar DEFAULT 'First Name must be at least 2 characters long',
  	"contact_form_config_first_name_validation_required_message" varchar DEFAULT 'First Name is required',
  	"contact_form_config_last_name_label" varchar DEFAULT 'Last Name',
  	"contact_form_config_last_name_placeholder" varchar DEFAULT 'Enter your last name',
  	"contact_form_config_last_name_validation_min_length" numeric DEFAULT 2,
  	"contact_form_config_last_name_validation_min_length_message" varchar DEFAULT 'Last Name must be at least 2 characters long',
  	"contact_form_config_last_name_validation_required_message" varchar DEFAULT 'Last Name is required',
  	"contact_form_config_phone_label" varchar DEFAULT 'Phone',
  	"contact_form_config_phone_placeholder" varchar DEFAULT 'Enter your phone number',
  	"contact_form_config_phone_validation_required_message" varchar DEFAULT 'Phone is required',
  	"contact_form_config_email_label" varchar DEFAULT 'Email',
  	"contact_form_config_email_placeholder" varchar DEFAULT 'Enter your email address',
  	"contact_form_config_email_validation_invalid_message" varchar DEFAULT 'Please enter a valid email address',
  	"contact_form_config_email_validation_required_message" varchar DEFAULT 'Email is required',
  	"contact_form_config_message_label" varchar DEFAULT 'Message',
  	"contact_form_config_message_placeholder" varchar DEFAULT 'Enter your message',
  	"contact_form_config_message_validation_required_message" varchar DEFAULT 'Message is required',
  	"contact_form_config_checkbox_with_text_label" varchar DEFAULT 'I agree to the terms and conditions',
  	"contact_form_config_checkbox_with_text_content" jsonb,
  	"contact_form_config_checkbox_with_text_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions',
  	"contact_form_config_submit_button" varchar DEFAULT 'Send Message',
  	"contact_form_config_toast_success_title" varchar DEFAULT 'Message Sent!',
  	"contact_form_config_toast_success_message" varchar DEFAULT 'Thank you for your message. We will get back to you soon.',
  	"contact_form_config_toast_error_title" varchar DEFAULT 'Error',
  	"contact_form_config_toast_error_message" varchar DEFAULT 'There was an error sending your message. Please try again.',
  	"contact_form_config_toast_error_fallback_message" varchar DEFAULT 'An unexpected error occurred. Please try again later.',
  	"contact_form_position" "enum_share_blocks_contact_contact_form_position",
  	"contact_form_title" varchar,
  	"variant" "enum_share_blocks_contact_variant" DEFAULT 'onlyForm',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_settings_anchor_id" varchar,
  	"content_settings_padding_top" "enum_share_blocks_content_content_settings_padding_top" DEFAULT 'medium',
  	"content_settings_padding_bottom" "enum_share_blocks_content_content_settings_padding_bottom" DEFAULT 'medium',
  	"content_settings_has_background_image" boolean DEFAULT false,
  	"content_settings_background" "enum_share_blocks_content_content_settings_background" DEFAULT 'none',
  	"content_settings_background_image_id" integer,
  	"content" jsonb,
  	"content_position" "enum_share_blocks_content_content_position" DEFAULT 'center',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_draw_editor" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_picker_id" integer,
  	"picker_value" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_features_features_with_title" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_icon" "enum_share_blocks_features_features_with_title_feature_icon",
  	"feature_title" varchar,
  	"feature_description" jsonb,
  	"feature_bg" "enum_share_blocks_features_features_with_title_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_features_features_uppercase" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_icon" "enum_share_blocks_features_features_uppercase_feature_icon",
  	"feature_description" jsonb,
  	"feature_bg" "enum_share_blocks_features_features_uppercase_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"features_settings_anchor_id" varchar,
  	"features_settings_padding_top" "enum_share_blocks_features_features_settings_padding_top" DEFAULT 'medium',
  	"features_settings_padding_bottom" "enum_share_blocks_features_features_settings_padding_bottom" DEFAULT 'medium',
  	"features_settings_has_background_image" boolean DEFAULT false,
  	"features_settings_background" "enum_share_blocks_features_features_settings_background" DEFAULT 'none',
  	"features_settings_background_image_id" integer,
  	"features_settings_heading" jsonb,
  	"features_settings_link_type" "enum_share_blocks_features_features_settings_link_type" DEFAULT 'internal',
  	"features_settings_link_new_tab" boolean,
  	"features_settings_link_has_anchor" boolean,
  	"features_settings_link_dark_button" boolean,
  	"features_settings_link_icon_position" "icnPos" DEFAULT 'left',
  	"features_settings_link_icon" "enum_share_blocks_features_features_settings_link_icon",
  	"features_settings_link_label" varchar,
  	"features_settings_link_relation" "enum_share_blocks_features_features_settings_link_relation" DEFAULT 'pages',
  	"features_settings_link_url" varchar,
  	"features_settings_link_anchor_to" varchar,
  	"features_settings_link_appearance" "enum_share_blocks_features_features_settings_link_appearance" DEFAULT 'primary',
  	"content" jsonb,
  	"features_variant" "enum_share_blocks_features_features_variant" DEFAULT 'uppercase',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_form_form_cfg_flat_disposition_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_form_slide_out_boxes" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"column_image_id" integer,
  	"column_image2_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_settings_anchor_id" varchar,
  	"form_settings_padding_top" "enum_share_blocks_form_form_settings_padding_top" DEFAULT 'medium',
  	"form_settings_padding_bottom" "enum_share_blocks_form_form_settings_padding_bottom" DEFAULT 'medium',
  	"form_settings_has_background_image" boolean DEFAULT false,
  	"form_settings_background" "enum_share_blocks_form_form_settings_background" DEFAULT 'none',
  	"form_settings_background_image_id" integer,
  	"form_cfg_first_name_label" varchar DEFAULT 'First Name',
  	"form_cfg_first_name_placeholder" varchar DEFAULT 'Enter your first name',
  	"form_cfg_first_name_validation_min_length" numeric DEFAULT 2,
  	"form_cfg_first_name_validation_min_length_message" varchar DEFAULT 'First name must be at least 2 characters long',
  	"form_cfg_first_name_validation_required_message" varchar DEFAULT 'First name is required',
  	"form_cfg_last_name_label" varchar DEFAULT 'Last Name',
  	"form_cfg_last_name_placeholder" varchar DEFAULT 'Enter your last name',
  	"form_cfg_last_name_validation_min_length" numeric DEFAULT 2,
  	"form_cfg_last_name_validation_min_length_message" varchar DEFAULT 'Last Name must be at least 2 characters long',
  	"form_cfg_last_name_validation_required_message" varchar DEFAULT 'Last Name is required',
  	"form_cfg_phone_label" varchar DEFAULT 'Phone',
  	"form_cfg_phone_placeholder" varchar DEFAULT 'Enter your phone number',
  	"form_cfg_phone_validation_required_message" varchar DEFAULT 'Phone is required',
  	"form_cfg_email_label" varchar DEFAULT 'Email',
  	"form_cfg_email_placeholder" varchar DEFAULT 'Enter your email address',
  	"form_cfg_email_validation_invalid_message" varchar DEFAULT 'Please enter a valid email address',
  	"form_cfg_email_validation_required_message" varchar DEFAULT 'Email is required',
  	"form_cfg_message_label" varchar DEFAULT 'Message',
  	"form_cfg_message_placeholder" varchar DEFAULT 'Enter your message',
  	"form_cfg_message_validation_required_message" varchar DEFAULT 'Message is required',
  	"form_cfg_flat_disposition_label" varchar DEFAULT 'Flat Disposition',
  	"form_cfg_flat_disposition_placeholder" varchar DEFAULT 'Select flat disposition',
  	"form_cfg_flat_disposition_validation_required_message" varchar DEFAULT 'Please select a flat disposition',
  	"form_cfg_checkbox_with_text_label" varchar DEFAULT 'I agree to the terms and conditions',
  	"form_cfg_checkbox_with_text_content" jsonb,
  	"form_cfg_checkbox_with_text_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions',
  	"form_cfg_submit_button" varchar DEFAULT 'Send Message',
  	"form_cfg_toast_success_title" varchar DEFAULT 'Message Sent!',
  	"form_cfg_toast_success_message" varchar DEFAULT 'Thank you for your message. We will get back to you soon.',
  	"form_cfg_toast_error_title" varchar DEFAULT 'Error',
  	"form_cfg_toast_error_message" varchar DEFAULT 'There was an error sending your message. Please try again.',
  	"form_cfg_toast_error_fallback_message" varchar DEFAULT 'An unexpected error occurred. Please try again later.',
  	"form_content" jsonb,
  	"layout_variant" "enum_share_blocks_form_layout_variant" DEFAULT 'onlyForm',
  	"form_position" "enum_share_blocks_form_form_position",
  	"layout_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_flats_snippets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"flats_set_anchor_id" varchar,
  	"flats_set_padding_top" "enum_share_blocks_flats_snippets_flats_set_padding_top" DEFAULT 'medium',
  	"flats_set_padding_bottom" "enum_share_blocks_flats_snippets_flats_set_padding_bottom" DEFAULT 'medium',
  	"flats_set_has_background_image" boolean DEFAULT false,
  	"flats_set_background" "enum_share_blocks_flats_snippets_flats_set_background" DEFAULT 'none',
  	"flats_set_background_image_id" integer,
  	"flats_set_heading" jsonb,
  	"flats_set_link_type" "enum_share_blocks_flats_snippets_flats_set_link_type" DEFAULT 'internal',
  	"flats_set_link_new_tab" boolean,
  	"flats_set_link_has_anchor" boolean,
  	"flats_set_link_dark_button" boolean,
  	"flats_set_link_icon_position" "icnPos" DEFAULT 'left',
  	"flats_set_link_icon" "enum_share_blocks_flats_snippets_flats_set_link_icon",
  	"flats_set_link_label" varchar,
  	"flats_set_link_relation" "enum_share_blocks_flats_snippets_flats_set_link_relation" DEFAULT 'pages',
  	"flats_set_link_url" varchar,
  	"flats_set_link_anchor_to" varchar,
  	"flats_set_link_appearance" "enum_share_blocks_flats_snippets_flats_set_link_appearance" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_gallery_simple_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"slide_width" "enum_share_blocks_gallery_simple_slider_slide_width"
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_gallery_multi_slider_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"slide_width" "enum_share_blocks_gallery_multi_slider_images_slide_width"
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_gallery_multi_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab_title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_gallery_full_width" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"gallery_settings_anchor_id" varchar,
  	"gallery_settings_padding_top" "enum_share_blocks_gallery_gallery_settings_padding_top" DEFAULT 'medium',
  	"gallery_settings_padding_bottom" "enum_share_blocks_gallery_gallery_settings_padding_bottom" DEFAULT 'medium',
  	"gallery_settings_has_background_image" boolean DEFAULT false,
  	"gallery_settings_background" "enum_share_blocks_gallery_gallery_settings_background" DEFAULT 'none',
  	"gallery_settings_background_image_id" integer,
  	"controls_type" "enum_share_blocks_gallery_controls_type" DEFAULT 'arrows',
  	"autoplay" boolean DEFAULT false,
  	"content" jsonb,
  	"link_type" "enum_share_blocks_gallery_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum_share_blocks_gallery_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum_share_blocks_gallery_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar,
  	"link_appearance" "enum_share_blocks_gallery_link_appearance" DEFAULT 'primary',
  	"gallery_variant" "enum_share_blocks_gallery_gallery_variant" DEFAULT 'simpleSlider',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_hero_hero_slideshow" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_hero_main_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_share_blocks_hero_main_buttons_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum_share_blocks_hero_main_buttons_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum_share_blocks_hero_main_buttons_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar,
  	"link_appearance" "enum_share_blocks_hero_main_buttons_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_hero_secondary_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_share_blocks_hero_secondary_buttons_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum_share_blocks_hero_secondary_buttons_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum_share_blocks_hero_secondary_buttons_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_share_blocks_hero_type" DEFAULT 'imageOnly',
  	"content" jsonb,
  	"hero_image_id" integer,
  	"hero_video_id" integer,
  	"left_upper_text" varchar,
  	"right_upper_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_highlighted_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"high_set_anchor_id" varchar,
  	"high_set_padding_top" "enum_share_blocks_highlighted_text_high_set_padding_top" DEFAULT 'medium',
  	"high_set_padding_bottom" "enum_share_blocks_highlighted_text_high_set_padding_bottom" DEFAULT 'medium',
  	"high_set_has_background_image" boolean DEFAULT false,
  	"high_set_background" "enum_share_blocks_highlighted_text_high_set_background" DEFAULT 'none',
  	"high_set_background_image_id" integer,
  	"title" jsonb,
  	"highlighted_text" varchar,
  	"highlighted_link_type" "enum_share_blocks_highlighted_text_highlighted_link_type" DEFAULT 'internal',
  	"highlighted_link_new_tab" boolean,
  	"highlighted_link_has_anchor" boolean,
  	"highlighted_link_dark_button" boolean,
  	"highlighted_link_icon_position" "icnPos" DEFAULT 'left',
  	"highlighted_link_icon" "enum_share_blocks_highlighted_text_highlighted_link_icon",
  	"highlighted_link_label" varchar,
  	"highlighted_link_relation" "enum_share_blocks_highlighted_text_highlighted_link_relation" DEFAULT 'pages',
  	"highlighted_link_url" varchar,
  	"highlighted_link_anchor_to" varchar,
  	"block_name" varchar
  );
  
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
  	"image_content_settings_background" "enum_imgContent_image_content_settings_background" DEFAULT 'none',
  	"image_content_settings_background_image_id" integer,
  	"content_type" "enum_imgContent_content_type" DEFAULT 'default',
  	"content" jsonb,
  	"person_content" jsonb,
  	"accordion_link_type" "enum_imgContent_accordion_link_type" DEFAULT 'internal',
  	"accordion_link_new_tab" boolean,
  	"accordion_link_has_anchor" boolean,
  	"accordion_link_dark_button" boolean,
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
  
  CREATE TABLE IF NOT EXISTS "share_blocks_images_grid_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_images_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"images_settings_anchor_id" varchar,
  	"images_settings_padding_top" "enum_share_blocks_images_grid_images_settings_padding_top" DEFAULT 'medium',
  	"images_settings_padding_bottom" "enum_share_blocks_images_grid_images_settings_padding_bottom" DEFAULT 'medium',
  	"images_settings_has_background_image" boolean DEFAULT false,
  	"images_settings_background" "enum_share_blocks_images_grid_images_settings_background" DEFAULT 'none',
  	"images_settings_background_image_id" integer,
  	"direction_variant" "enum_share_blocks_images_grid_direction_variant" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_image_pins_pins" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"withlogo" boolean DEFAULT false,
  	"reverse_layout" boolean DEFAULT false,
  	"highlighted" boolean DEFAULT false,
  	"logo_id" integer,
  	"marker_label" jsonb,
  	"x" numeric,
  	"y" numeric,
  	"pin_height" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_image_pins" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_pins_set_anchor_id" varchar,
  	"image_pins_set_padding_top" "enum_share_blocks_image_pins_image_pins_set_padding_top" DEFAULT 'medium',
  	"image_pins_set_padding_bottom" "enum_share_blocks_image_pins_image_pins_set_padding_bottom" DEFAULT 'medium',
  	"image_pins_set_has_background_image" boolean DEFAULT false,
  	"image_pins_set_background" "enum_share_blocks_image_pins_image_pins_set_background" DEFAULT 'none',
  	"image_pins_set_background_image_id" integer,
  	"text" jsonb,
  	"background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_news_snippets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"news_set_anchor_id" varchar,
  	"news_set_padding_top" "enum_share_blocks_news_snippets_news_set_padding_top" DEFAULT 'medium',
  	"news_set_padding_bottom" "enum_share_blocks_news_snippets_news_set_padding_bottom" DEFAULT 'medium',
  	"news_set_has_background_image" boolean DEFAULT false,
  	"news_set_background" "enum_share_blocks_news_snippets_news_set_background" DEFAULT 'none',
  	"news_set_background_image_id" integer,
  	"news_set_heading" jsonb,
  	"news_set_link_type" "enum_share_blocks_news_snippets_news_set_link_type" DEFAULT 'internal',
  	"news_set_link_new_tab" boolean,
  	"news_set_link_has_anchor" boolean,
  	"news_set_link_dark_button" boolean,
  	"news_set_link_icon_position" "icnPos" DEFAULT 'left',
  	"news_set_link_icon" "enum_share_blocks_news_snippets_news_set_link_icon",
  	"news_set_link_label" varchar,
  	"news_set_link_relation" "enum_share_blocks_news_snippets_news_set_link_relation" DEFAULT 'pages',
  	"news_set_link_url" varchar,
  	"news_set_link_anchor_to" varchar,
  	"news_set_link_appearance" "enum_share_blocks_news_snippets_news_set_link_appearance" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_numbers_numbers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" numeric,
  	"description" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_numbers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"numbers_settings_anchor_id" varchar,
  	"numbers_settings_padding_top" "enum_share_blocks_numbers_numbers_settings_padding_top" DEFAULT 'medium',
  	"numbers_settings_padding_bottom" "enum_share_blocks_numbers_numbers_settings_padding_bottom" DEFAULT 'medium',
  	"numbers_settings_has_background_image" boolean DEFAULT false,
  	"numbers_settings_background" "enum_share_blocks_numbers_numbers_settings_background" DEFAULT 'none',
  	"numbers_settings_background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_timeline_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"timeline_settings_anchor_id" varchar,
  	"timeline_settings_padding_top" "enum_share_blocks_timeline_timeline_settings_padding_top" DEFAULT 'medium',
  	"timeline_settings_padding_bottom" "enum_share_blocks_timeline_timeline_settings_padding_bottom" DEFAULT 'medium',
  	"timeline_settings_has_background_image" boolean DEFAULT false,
  	"timeline_settings_background" "enum_share_blocks_timeline_timeline_settings_background" DEFAULT 'none',
  	"timeline_settings_background_image_id" integer,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_prices" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"prices_settings_anchor_id" varchar,
  	"prices_settings_padding_top" "enum_share_blocks_prices_prices_settings_padding_top" DEFAULT 'medium',
  	"prices_settings_padding_bottom" "enum_share_blocks_prices_prices_settings_padding_bottom" DEFAULT 'medium',
  	"prices_settings_has_background_image" boolean DEFAULT false,
  	"prices_settings_background" "enum_share_blocks_prices_prices_settings_background" DEFAULT 'none',
  	"prices_settings_background_image_id" integer,
  	"bottom_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_interactive_picker_extended_views" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"view_name" varchar,
  	"image_id" integer,
  	"direct" "enum_share_blocks_interactive_picker_extended_views_direct" DEFAULT 'south'
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_interactive_picker_extended" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"picker_value" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_visual_price_list_buildings" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"building_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_visual_price_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_variable_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_variable_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"row_index" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_variable_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_table_custom" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb,
  	"image_id" integer,
  	"image_position" "enum_share_blocks_text_image_image_position" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_shared_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"shared_section_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"project_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "sharestoone" (
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "share_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" integer,
  	"flats_id" integer,
  	"news_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "roles_permissions_projects" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_roles_permissions_projects",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "roles_permissions_pages" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_roles_permissions_pages",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "roles_permissions_globalheader" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_roles_permissions_globalheader",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "roles_permissions_globalfooter" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_roles_permissions_globalfooter",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "roles_permissions_project_global_settings" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_roles_permissions_project_global_settings",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "roles_permissions_buildings" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_roles_permissions_buildings",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "roles_permissions_flats" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_roles_permissions_flats",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "roles_permissions_flat_detail_page" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_roles_permissions_flat_detail_page",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "roles_permissions_sectors" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_roles_permissions_sectors",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "roles_permissions_floors" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_roles_permissions_floors",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "roles_permissions_news" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_roles_permissions_news",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "roles_permissions_media" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_roles_permissions_media",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "roles_permissions_documents" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_roles_permissions_documents",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "roles_permissions_share" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_roles_permissions_share",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "roles" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "roles_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role_id" integer NOT NULL,
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
  
  CREATE TABLE IF NOT EXISTS "users_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"projects_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"project_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "projects_standards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"standard_file_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "projects_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"plan_file_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "projects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar,
  	"realpadid" varchar,
  	"level_stoone" "enum_projects_level_stoone" DEFAULT 'levelstoone_1' NOT NULL,
  	"project_price_module_price_hidden" boolean DEFAULT false,
  	"frontend_url" varchar,
  	"realpad_project_gps" varchar,
  	"realpad_project_icon" varchar,
  	"realpad_project_plan" varchar,
  	"realpad_project_logo" varchar,
  	"realpad_project_standards" varchar,
  	"realpad_project_offline_map" varchar,
  	"realpad_project_pinpoint" varchar,
  	"realpad_project_currency" varchar,
  	"cron_settings_enabled" boolean DEFAULT false,
  	"cron_settings_schedule" "enum_projects_cron_settings_schedule" DEFAULT 'every_6_hours',
  	"cron_settings_custom_schedule" varchar,
  	"cron_settings_last_run" varchar,
  	"cron_settings_next_run" varchar,
  	"cron_settings_status" "enum_projects_cron_settings_status" DEFAULT 'inactive',
  	"cron_settings_last_result" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_hero_hero_slideshow" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_hero_main_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_hero_main_buttons_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum_pages_blocks_hero_main_buttons_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum_pages_blocks_hero_main_buttons_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar,
  	"link_appearance" "enum_pages_blocks_hero_main_buttons_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_hero_secondary_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_hero_secondary_buttons_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum_pages_blocks_hero_secondary_buttons_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum_pages_blocks_hero_secondary_buttons_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_hero_type" DEFAULT 'imageOnly',
  	"content" jsonb,
  	"hero_image_id" integer,
  	"hero_video_id" integer,
  	"left_upper_text" varchar,
  	"right_upper_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_variable_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_variable_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"row_index" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_variable_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_table_custom" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_draw_editor" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_picker_id" integer,
  	"picker_value" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb,
  	"image_id" integer,
  	"image_position" "enum_pages_blocks_text_image_image_position" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"banner_settings_anchor_id" varchar,
  	"banner_settings_padding_top" "enum_pages_blocks_banner_banner_settings_padding_top" DEFAULT 'medium',
  	"banner_settings_padding_bottom" "enum_pages_blocks_banner_banner_settings_padding_bottom" DEFAULT 'medium',
  	"banner_settings_has_background_image" boolean DEFAULT false,
  	"banner_settings_background" "enum_pages_blocks_banner_banner_settings_background" DEFAULT 'none',
  	"banner_settings_background_image_id" integer,
  	"banner_variant" "enum_pages_blocks_banner_banner_variant" DEFAULT 'small',
  	"banner_content_position" "enum_pages_blocks_banner_banner_content_position" DEFAULT 'center',
  	"caption" varchar,
  	"content" jsonb,
  	"banner_button_type" "enum_pages_blocks_banner_banner_button_type" DEFAULT 'internal',
  	"banner_button_new_tab" boolean,
  	"banner_button_has_anchor" boolean,
  	"banner_button_dark_button" boolean,
  	"banner_button_icon_position" "icnPos" DEFAULT 'left',
  	"banner_button_icon" "enum_pages_blocks_banner_banner_button_icon",
  	"banner_button_label" varchar,
  	"banner_button_relation" "enum_pages_blocks_banner_banner_button_relation" DEFAULT 'pages',
  	"banner_button_url" varchar,
  	"banner_button_anchor_to" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_benefits_benefits_row_item_heading_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_benefits_benefits_row_item2_heading_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_benefits_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"row_item_image_id" integer,
  	"row_item_description" jsonb,
  	"row_item2_image_id" integer,
  	"row_item2_description" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"benefits_settings_anchor_id" varchar,
  	"benefits_settings_padding_top" "enum_pages_blocks_benefits_benefits_settings_padding_top" DEFAULT 'medium',
  	"benefits_settings_padding_bottom" "enum_pages_blocks_benefits_benefits_settings_padding_bottom" DEFAULT 'medium',
  	"benefits_settings_has_background_image" boolean DEFAULT false,
  	"benefits_settings_background" "enum_pages_blocks_benefits_benefits_settings_background" DEFAULT 'none',
  	"benefits_settings_background_image_id" integer,
  	"show_logo" boolean DEFAULT true,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_contact_contact_info_highlighted_contacts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_title" varchar,
  	"item_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_contact_contact_info_contact_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_title" varchar,
  	"item_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"contact_settings_anchor_id" varchar,
  	"contact_settings_padding_top" "enum_pages_blocks_contact_contact_settings_padding_top" DEFAULT 'medium',
  	"contact_settings_padding_bottom" "enum_pages_blocks_contact_contact_settings_padding_bottom" DEFAULT 'medium',
  	"contact_settings_has_background_image" boolean DEFAULT false,
  	"contact_settings_background" "enum_pages_blocks_contact_contact_settings_background" DEFAULT 'none',
  	"contact_settings_background_image_id" integer,
  	"contact_settings_heading" jsonb,
  	"contact_form_config_first_name_label" varchar DEFAULT 'First Name',
  	"contact_form_config_first_name_placeholder" varchar DEFAULT 'Enter your first name',
  	"contact_form_config_first_name_validation_min_length" numeric DEFAULT 2,
  	"contact_form_config_first_name_validation_min_length_message" varchar DEFAULT 'First Name must be at least 2 characters long',
  	"contact_form_config_first_name_validation_required_message" varchar DEFAULT 'First Name is required',
  	"contact_form_config_last_name_label" varchar DEFAULT 'Last Name',
  	"contact_form_config_last_name_placeholder" varchar DEFAULT 'Enter your last name',
  	"contact_form_config_last_name_validation_min_length" numeric DEFAULT 2,
  	"contact_form_config_last_name_validation_min_length_message" varchar DEFAULT 'Last Name must be at least 2 characters long',
  	"contact_form_config_last_name_validation_required_message" varchar DEFAULT 'Last Name is required',
  	"contact_form_config_phone_label" varchar DEFAULT 'Phone',
  	"contact_form_config_phone_placeholder" varchar DEFAULT 'Enter your phone number',
  	"contact_form_config_phone_validation_required_message" varchar DEFAULT 'Phone is required',
  	"contact_form_config_email_label" varchar DEFAULT 'Email',
  	"contact_form_config_email_placeholder" varchar DEFAULT 'Enter your email address',
  	"contact_form_config_email_validation_invalid_message" varchar DEFAULT 'Please enter a valid email address',
  	"contact_form_config_email_validation_required_message" varchar DEFAULT 'Email is required',
  	"contact_form_config_message_label" varchar DEFAULT 'Message',
  	"contact_form_config_message_placeholder" varchar DEFAULT 'Enter your message',
  	"contact_form_config_message_validation_required_message" varchar DEFAULT 'Message is required',
  	"contact_form_config_checkbox_with_text_label" varchar DEFAULT 'I agree to the terms and conditions',
  	"contact_form_config_checkbox_with_text_content" jsonb,
  	"contact_form_config_checkbox_with_text_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions',
  	"contact_form_config_submit_button" varchar DEFAULT 'Send Message',
  	"contact_form_config_toast_success_title" varchar DEFAULT 'Message Sent!',
  	"contact_form_config_toast_success_message" varchar DEFAULT 'Thank you for your message. We will get back to you soon.',
  	"contact_form_config_toast_error_title" varchar DEFAULT 'Error',
  	"contact_form_config_toast_error_message" varchar DEFAULT 'There was an error sending your message. Please try again.',
  	"contact_form_config_toast_error_fallback_message" varchar DEFAULT 'An unexpected error occurred. Please try again later.',
  	"contact_form_position" "enum_pages_blocks_contact_contact_form_position",
  	"contact_form_title" varchar,
  	"variant" "enum_pages_blocks_contact_variant" DEFAULT 'onlyForm',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_settings_anchor_id" varchar,
  	"content_settings_padding_top" "enum_pages_blocks_content_content_settings_padding_top" DEFAULT 'medium',
  	"content_settings_padding_bottom" "enum_pages_blocks_content_content_settings_padding_bottom" DEFAULT 'medium',
  	"content_settings_has_background_image" boolean DEFAULT false,
  	"content_settings_background" "enum_pages_blocks_content_content_settings_background" DEFAULT 'none',
  	"content_settings_background_image_id" integer,
  	"content" jsonb,
  	"content_position" "enum_pages_blocks_content_content_position" DEFAULT 'center',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_features_features_with_title" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_icon" "enum_pages_blocks_features_features_with_title_feature_icon",
  	"feature_title" varchar,
  	"feature_description" jsonb,
  	"feature_bg" "enum_pages_blocks_features_features_with_title_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_features_features_uppercase" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_icon" "enum_pages_blocks_features_features_uppercase_feature_icon",
  	"feature_description" jsonb,
  	"feature_bg" "enum_pages_blocks_features_features_uppercase_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"features_settings_anchor_id" varchar,
  	"features_settings_padding_top" "enum_pages_blocks_features_features_settings_padding_top" DEFAULT 'medium',
  	"features_settings_padding_bottom" "enum_pages_blocks_features_features_settings_padding_bottom" DEFAULT 'medium',
  	"features_settings_has_background_image" boolean DEFAULT false,
  	"features_settings_background" "enum_pages_blocks_features_features_settings_background" DEFAULT 'none',
  	"features_settings_background_image_id" integer,
  	"features_settings_heading" jsonb,
  	"features_settings_link_type" "enum_pages_blocks_features_features_settings_link_type" DEFAULT 'internal',
  	"features_settings_link_new_tab" boolean,
  	"features_settings_link_has_anchor" boolean,
  	"features_settings_link_dark_button" boolean,
  	"features_settings_link_icon_position" "icnPos" DEFAULT 'left',
  	"features_settings_link_icon" "enum_pages_blocks_features_features_settings_link_icon",
  	"features_settings_link_label" varchar,
  	"features_settings_link_relation" "enum_pages_blocks_features_features_settings_link_relation" DEFAULT 'pages',
  	"features_settings_link_url" varchar,
  	"features_settings_link_anchor_to" varchar,
  	"features_settings_link_appearance" "enum_pages_blocks_features_features_settings_link_appearance" DEFAULT 'primary',
  	"content" jsonb,
  	"features_variant" "enum_pages_blocks_features_features_variant" DEFAULT 'uppercase',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_form_form_cfg_flat_disposition_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_form_slide_out_boxes" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"column_image_id" integer,
  	"column_image2_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_settings_anchor_id" varchar,
  	"form_settings_padding_top" "enum_pages_blocks_form_form_settings_padding_top" DEFAULT 'medium',
  	"form_settings_padding_bottom" "enum_pages_blocks_form_form_settings_padding_bottom" DEFAULT 'medium',
  	"form_settings_has_background_image" boolean DEFAULT false,
  	"form_settings_background" "enum_pages_blocks_form_form_settings_background" DEFAULT 'none',
  	"form_settings_background_image_id" integer,
  	"form_cfg_first_name_label" varchar DEFAULT 'First Name',
  	"form_cfg_first_name_placeholder" varchar DEFAULT 'Enter your first name',
  	"form_cfg_first_name_validation_min_length" numeric DEFAULT 2,
  	"form_cfg_first_name_validation_min_length_message" varchar DEFAULT 'First name must be at least 2 characters long',
  	"form_cfg_first_name_validation_required_message" varchar DEFAULT 'First name is required',
  	"form_cfg_last_name_label" varchar DEFAULT 'Last Name',
  	"form_cfg_last_name_placeholder" varchar DEFAULT 'Enter your last name',
  	"form_cfg_last_name_validation_min_length" numeric DEFAULT 2,
  	"form_cfg_last_name_validation_min_length_message" varchar DEFAULT 'Last Name must be at least 2 characters long',
  	"form_cfg_last_name_validation_required_message" varchar DEFAULT 'Last Name is required',
  	"form_cfg_phone_label" varchar DEFAULT 'Phone',
  	"form_cfg_phone_placeholder" varchar DEFAULT 'Enter your phone number',
  	"form_cfg_phone_validation_required_message" varchar DEFAULT 'Phone is required',
  	"form_cfg_email_label" varchar DEFAULT 'Email',
  	"form_cfg_email_placeholder" varchar DEFAULT 'Enter your email address',
  	"form_cfg_email_validation_invalid_message" varchar DEFAULT 'Please enter a valid email address',
  	"form_cfg_email_validation_required_message" varchar DEFAULT 'Email is required',
  	"form_cfg_message_label" varchar DEFAULT 'Message',
  	"form_cfg_message_placeholder" varchar DEFAULT 'Enter your message',
  	"form_cfg_message_validation_required_message" varchar DEFAULT 'Message is required',
  	"form_cfg_flat_disposition_label" varchar DEFAULT 'Flat Disposition',
  	"form_cfg_flat_disposition_placeholder" varchar DEFAULT 'Select flat disposition',
  	"form_cfg_flat_disposition_validation_required_message" varchar DEFAULT 'Please select a flat disposition',
  	"form_cfg_checkbox_with_text_label" varchar DEFAULT 'I agree to the terms and conditions',
  	"form_cfg_checkbox_with_text_content" jsonb,
  	"form_cfg_checkbox_with_text_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions',
  	"form_cfg_submit_button" varchar DEFAULT 'Send Message',
  	"form_cfg_toast_success_title" varchar DEFAULT 'Message Sent!',
  	"form_cfg_toast_success_message" varchar DEFAULT 'Thank you for your message. We will get back to you soon.',
  	"form_cfg_toast_error_title" varchar DEFAULT 'Error',
  	"form_cfg_toast_error_message" varchar DEFAULT 'There was an error sending your message. Please try again.',
  	"form_cfg_toast_error_fallback_message" varchar DEFAULT 'An unexpected error occurred. Please try again later.',
  	"form_content" jsonb,
  	"layout_variant" "enum_pages_blocks_form_layout_variant" DEFAULT 'onlyForm',
  	"form_position" "enum_pages_blocks_form_form_position",
  	"layout_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_flats_snippets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"flats_set_anchor_id" varchar,
  	"flats_set_padding_top" "enum_pages_blocks_flats_snippets_flats_set_padding_top" DEFAULT 'medium',
  	"flats_set_padding_bottom" "enum_pages_blocks_flats_snippets_flats_set_padding_bottom" DEFAULT 'medium',
  	"flats_set_has_background_image" boolean DEFAULT false,
  	"flats_set_background" "enum_pages_blocks_flats_snippets_flats_set_background" DEFAULT 'none',
  	"flats_set_background_image_id" integer,
  	"flats_set_heading" jsonb,
  	"flats_set_link_type" "enum_pages_blocks_flats_snippets_flats_set_link_type" DEFAULT 'internal',
  	"flats_set_link_new_tab" boolean,
  	"flats_set_link_has_anchor" boolean,
  	"flats_set_link_dark_button" boolean,
  	"flats_set_link_icon_position" "icnPos" DEFAULT 'left',
  	"flats_set_link_icon" "enum_pages_blocks_flats_snippets_flats_set_link_icon",
  	"flats_set_link_label" varchar,
  	"flats_set_link_relation" "enum_pages_blocks_flats_snippets_flats_set_link_relation" DEFAULT 'pages',
  	"flats_set_link_url" varchar,
  	"flats_set_link_anchor_to" varchar,
  	"flats_set_link_appearance" "enum_pages_blocks_flats_snippets_flats_set_link_appearance" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_gallery_simple_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"slide_width" "enum_pages_blocks_gallery_simple_slider_slide_width"
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_gallery_multi_slider_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"slide_width" "enum_pages_blocks_gallery_multi_slider_images_slide_width"
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_gallery_multi_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab_title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_gallery_full_width" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"gallery_settings_anchor_id" varchar,
  	"gallery_settings_padding_top" "enum_pages_blocks_gallery_gallery_settings_padding_top" DEFAULT 'medium',
  	"gallery_settings_padding_bottom" "enum_pages_blocks_gallery_gallery_settings_padding_bottom" DEFAULT 'medium',
  	"gallery_settings_has_background_image" boolean DEFAULT false,
  	"gallery_settings_background" "enum_pages_blocks_gallery_gallery_settings_background" DEFAULT 'none',
  	"gallery_settings_background_image_id" integer,
  	"controls_type" "enum_pages_blocks_gallery_controls_type" DEFAULT 'arrows',
  	"autoplay" boolean DEFAULT false,
  	"content" jsonb,
  	"link_type" "enum_pages_blocks_gallery_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum_pages_blocks_gallery_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum_pages_blocks_gallery_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar,
  	"link_appearance" "enum_pages_blocks_gallery_link_appearance" DEFAULT 'primary',
  	"gallery_variant" "enum_pages_blocks_gallery_gallery_variant" DEFAULT 'simpleSlider',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_highlighted_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"high_set_anchor_id" varchar,
  	"high_set_padding_top" "enum_pages_blocks_highlighted_text_high_set_padding_top" DEFAULT 'medium',
  	"high_set_padding_bottom" "enum_pages_blocks_highlighted_text_high_set_padding_bottom" DEFAULT 'medium',
  	"high_set_has_background_image" boolean DEFAULT false,
  	"high_set_background" "enum_pages_blocks_highlighted_text_high_set_background" DEFAULT 'none',
  	"high_set_background_image_id" integer,
  	"title" jsonb,
  	"highlighted_text" varchar,
  	"highlighted_link_type" "enum_pages_blocks_highlighted_text_highlighted_link_type" DEFAULT 'internal',
  	"highlighted_link_new_tab" boolean,
  	"highlighted_link_has_anchor" boolean,
  	"highlighted_link_dark_button" boolean,
  	"highlighted_link_icon_position" "icnPos" DEFAULT 'left',
  	"highlighted_link_icon" "enum_pages_blocks_highlighted_text_highlighted_link_icon",
  	"highlighted_link_label" varchar,
  	"highlighted_link_relation" "enum_pages_blocks_highlighted_text_highlighted_link_relation" DEFAULT 'pages',
  	"highlighted_link_url" varchar,
  	"highlighted_link_anchor_to" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_images_grid_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_images_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"images_settings_anchor_id" varchar,
  	"images_settings_padding_top" "enum_pages_blocks_images_grid_images_settings_padding_top" DEFAULT 'medium',
  	"images_settings_padding_bottom" "enum_pages_blocks_images_grid_images_settings_padding_bottom" DEFAULT 'medium',
  	"images_settings_has_background_image" boolean DEFAULT false,
  	"images_settings_background" "enum_pages_blocks_images_grid_images_settings_background" DEFAULT 'none',
  	"images_settings_background_image_id" integer,
  	"direction_variant" "enum_pages_blocks_images_grid_direction_variant" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_image_pins_pins" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"withlogo" boolean DEFAULT false,
  	"reverse_layout" boolean DEFAULT false,
  	"highlighted" boolean DEFAULT false,
  	"logo_id" integer,
  	"marker_label" jsonb,
  	"x" numeric,
  	"y" numeric,
  	"pin_height" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_image_pins" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_pins_set_anchor_id" varchar,
  	"image_pins_set_padding_top" "enum_pages_blocks_image_pins_image_pins_set_padding_top" DEFAULT 'medium',
  	"image_pins_set_padding_bottom" "enum_pages_blocks_image_pins_image_pins_set_padding_bottom" DEFAULT 'medium',
  	"image_pins_set_has_background_image" boolean DEFAULT false,
  	"image_pins_set_background" "enum_pages_blocks_image_pins_image_pins_set_background" DEFAULT 'none',
  	"image_pins_set_background_image_id" integer,
  	"text" jsonb,
  	"background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_news_snippets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"news_set_anchor_id" varchar,
  	"news_set_padding_top" "enum_pages_blocks_news_snippets_news_set_padding_top" DEFAULT 'medium',
  	"news_set_padding_bottom" "enum_pages_blocks_news_snippets_news_set_padding_bottom" DEFAULT 'medium',
  	"news_set_has_background_image" boolean DEFAULT false,
  	"news_set_background" "enum_pages_blocks_news_snippets_news_set_background" DEFAULT 'none',
  	"news_set_background_image_id" integer,
  	"news_set_heading" jsonb,
  	"news_set_link_type" "enum_pages_blocks_news_snippets_news_set_link_type" DEFAULT 'internal',
  	"news_set_link_new_tab" boolean,
  	"news_set_link_has_anchor" boolean,
  	"news_set_link_dark_button" boolean,
  	"news_set_link_icon_position" "icnPos" DEFAULT 'left',
  	"news_set_link_icon" "enum_pages_blocks_news_snippets_news_set_link_icon",
  	"news_set_link_label" varchar,
  	"news_set_link_relation" "enum_pages_blocks_news_snippets_news_set_link_relation" DEFAULT 'pages',
  	"news_set_link_url" varchar,
  	"news_set_link_anchor_to" varchar,
  	"news_set_link_appearance" "enum_pages_blocks_news_snippets_news_set_link_appearance" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_numbers_numbers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" numeric,
  	"description" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_numbers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"numbers_settings_anchor_id" varchar,
  	"numbers_settings_padding_top" "enum_pages_blocks_numbers_numbers_settings_padding_top" DEFAULT 'medium',
  	"numbers_settings_padding_bottom" "enum_pages_blocks_numbers_numbers_settings_padding_bottom" DEFAULT 'medium',
  	"numbers_settings_has_background_image" boolean DEFAULT false,
  	"numbers_settings_background" "enum_pages_blocks_numbers_numbers_settings_background" DEFAULT 'none',
  	"numbers_settings_background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_timeline_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"timeline_settings_anchor_id" varchar,
  	"timeline_settings_padding_top" "enum_pages_blocks_timeline_timeline_settings_padding_top" DEFAULT 'medium',
  	"timeline_settings_padding_bottom" "enum_pages_blocks_timeline_timeline_settings_padding_bottom" DEFAULT 'medium',
  	"timeline_settings_has_background_image" boolean DEFAULT false,
  	"timeline_settings_background" "enum_pages_blocks_timeline_timeline_settings_background" DEFAULT 'none',
  	"timeline_settings_background_image_id" integer,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_prices" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"prices_settings_anchor_id" varchar,
  	"prices_settings_padding_top" "enum_pages_blocks_prices_prices_settings_padding_top" DEFAULT 'medium',
  	"prices_settings_padding_bottom" "enum_pages_blocks_prices_prices_settings_padding_bottom" DEFAULT 'medium',
  	"prices_settings_has_background_image" boolean DEFAULT false,
  	"prices_settings_background" "enum_pages_blocks_prices_prices_settings_background" DEFAULT 'none',
  	"prices_settings_background_image_id" integer,
  	"bottom_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_interactive_picker_extended_views" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"view_name" varchar,
  	"image_id" integer,
  	"direct" "enum_pages_blocks_interactive_picker_extended_views_direct" DEFAULT 'south'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_interactive_picker_extended" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"picker_value" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_visual_price_list_buildings" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"building_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_visual_price_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_shared_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"shared_section_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"project_id" integer,
  	"meta_og_image_id" integer,
  	"meta_twitter_card" "enum_pages_meta_twitter_card" DEFAULT 'summary_large_image',
  	"meta_structured_data" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "pagesstoone" (
  	"title" varchar,
  	"slug" varchar,
  	"news_page_header" jsonb,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_keywords" varchar,
  	"meta_og_title" varchar,
  	"meta_og_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" integer,
  	"flats_id" integer,
  	"news_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hero_hero_slideshow" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hero_main_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_hero_main_buttons_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum__pages_v_blocks_hero_main_buttons_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum__pages_v_blocks_hero_main_buttons_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar,
  	"link_appearance" "enum__pages_v_blocks_hero_main_buttons_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hero_secondary_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_hero_secondary_buttons_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum__pages_v_blocks_hero_secondary_buttons_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum__pages_v_blocks_hero_secondary_buttons_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_hero_type" DEFAULT 'imageOnly',
  	"content" jsonb,
  	"hero_image_id" integer,
  	"hero_video_id" integer,
  	"left_upper_text" varchar,
  	"right_upper_text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_variable_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_variable_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"row_index" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_variable_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_table_custom" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_draw_editor" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_picker_id" integer,
  	"picker_value" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" jsonb,
  	"image_id" integer,
  	"image_position" "enum__pages_v_blocks_text_image_image_position" DEFAULT 'right',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"banner_settings_anchor_id" varchar,
  	"banner_settings_padding_top" "enum__pages_v_blocks_banner_banner_settings_padding_top" DEFAULT 'medium',
  	"banner_settings_padding_bottom" "enum__pages_v_blocks_banner_banner_settings_padding_bottom" DEFAULT 'medium',
  	"banner_settings_has_background_image" boolean DEFAULT false,
  	"banner_settings_background" "enum__pages_v_blocks_banner_banner_settings_background" DEFAULT 'none',
  	"banner_settings_background_image_id" integer,
  	"banner_variant" "enum__pages_v_blocks_banner_banner_variant" DEFAULT 'small',
  	"banner_content_position" "enum__pages_v_blocks_banner_banner_content_position" DEFAULT 'center',
  	"caption" varchar,
  	"content" jsonb,
  	"banner_button_type" "enum__pages_v_blocks_banner_banner_button_type" DEFAULT 'internal',
  	"banner_button_new_tab" boolean,
  	"banner_button_has_anchor" boolean,
  	"banner_button_dark_button" boolean,
  	"banner_button_icon_position" "icnPos" DEFAULT 'left',
  	"banner_button_icon" "enum__pages_v_blocks_banner_banner_button_icon",
  	"banner_button_label" varchar,
  	"banner_button_relation" "enum__pages_v_blocks_banner_banner_button_relation" DEFAULT 'pages',
  	"banner_button_url" varchar,
  	"banner_button_anchor_to" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_benefits_benefits_row_item_heading_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_benefits_benefits_row_item2_heading_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_benefits_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"row_item_image_id" integer,
  	"row_item_description" jsonb,
  	"row_item2_image_id" integer,
  	"row_item2_description" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"benefits_settings_anchor_id" varchar,
  	"benefits_settings_padding_top" "enum__pages_v_blocks_benefits_benefits_settings_padding_top" DEFAULT 'medium',
  	"benefits_settings_padding_bottom" "enum__pages_v_blocks_benefits_benefits_settings_padding_bottom" DEFAULT 'medium',
  	"benefits_settings_has_background_image" boolean DEFAULT false,
  	"benefits_settings_background" "enum__pages_v_blocks_benefits_benefits_settings_background" DEFAULT 'none',
  	"benefits_settings_background_image_id" integer,
  	"show_logo" boolean DEFAULT true,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_contact_contact_info_highlighted_contacts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"item_title" varchar,
  	"item_content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_contact_contact_info_contact_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"item_title" varchar,
  	"item_content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"contact_settings_anchor_id" varchar,
  	"contact_settings_padding_top" "enum__pages_v_blocks_contact_contact_settings_padding_top" DEFAULT 'medium',
  	"contact_settings_padding_bottom" "enum__pages_v_blocks_contact_contact_settings_padding_bottom" DEFAULT 'medium',
  	"contact_settings_has_background_image" boolean DEFAULT false,
  	"contact_settings_background" "enum__pages_v_blocks_contact_contact_settings_background" DEFAULT 'none',
  	"contact_settings_background_image_id" integer,
  	"contact_settings_heading" jsonb,
  	"contact_form_config_first_name_label" varchar DEFAULT 'First Name',
  	"contact_form_config_first_name_placeholder" varchar DEFAULT 'Enter your first name',
  	"contact_form_config_first_name_validation_min_length" numeric DEFAULT 2,
  	"contact_form_config_first_name_validation_min_length_message" varchar DEFAULT 'First Name must be at least 2 characters long',
  	"contact_form_config_first_name_validation_required_message" varchar DEFAULT 'First Name is required',
  	"contact_form_config_last_name_label" varchar DEFAULT 'Last Name',
  	"contact_form_config_last_name_placeholder" varchar DEFAULT 'Enter your last name',
  	"contact_form_config_last_name_validation_min_length" numeric DEFAULT 2,
  	"contact_form_config_last_name_validation_min_length_message" varchar DEFAULT 'Last Name must be at least 2 characters long',
  	"contact_form_config_last_name_validation_required_message" varchar DEFAULT 'Last Name is required',
  	"contact_form_config_phone_label" varchar DEFAULT 'Phone',
  	"contact_form_config_phone_placeholder" varchar DEFAULT 'Enter your phone number',
  	"contact_form_config_phone_validation_required_message" varchar DEFAULT 'Phone is required',
  	"contact_form_config_email_label" varchar DEFAULT 'Email',
  	"contact_form_config_email_placeholder" varchar DEFAULT 'Enter your email address',
  	"contact_form_config_email_validation_invalid_message" varchar DEFAULT 'Please enter a valid email address',
  	"contact_form_config_email_validation_required_message" varchar DEFAULT 'Email is required',
  	"contact_form_config_message_label" varchar DEFAULT 'Message',
  	"contact_form_config_message_placeholder" varchar DEFAULT 'Enter your message',
  	"contact_form_config_message_validation_required_message" varchar DEFAULT 'Message is required',
  	"contact_form_config_checkbox_with_text_label" varchar DEFAULT 'I agree to the terms and conditions',
  	"contact_form_config_checkbox_with_text_content" jsonb,
  	"contact_form_config_checkbox_with_text_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions',
  	"contact_form_config_submit_button" varchar DEFAULT 'Send Message',
  	"contact_form_config_toast_success_title" varchar DEFAULT 'Message Sent!',
  	"contact_form_config_toast_success_message" varchar DEFAULT 'Thank you for your message. We will get back to you soon.',
  	"contact_form_config_toast_error_title" varchar DEFAULT 'Error',
  	"contact_form_config_toast_error_message" varchar DEFAULT 'There was an error sending your message. Please try again.',
  	"contact_form_config_toast_error_fallback_message" varchar DEFAULT 'An unexpected error occurred. Please try again later.',
  	"contact_form_position" "enum__pages_v_blocks_contact_contact_form_position",
  	"contact_form_title" varchar,
  	"variant" "enum__pages_v_blocks_contact_variant" DEFAULT 'onlyForm',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content_settings_anchor_id" varchar,
  	"content_settings_padding_top" "enum__pages_v_blocks_content_content_settings_padding_top" DEFAULT 'medium',
  	"content_settings_padding_bottom" "enum__pages_v_blocks_content_content_settings_padding_bottom" DEFAULT 'medium',
  	"content_settings_has_background_image" boolean DEFAULT false,
  	"content_settings_background" "enum__pages_v_blocks_content_content_settings_background" DEFAULT 'none',
  	"content_settings_background_image_id" integer,
  	"content" jsonb,
  	"content_position" "enum__pages_v_blocks_content_content_position" DEFAULT 'center',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_features_features_with_title" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature_icon" "enum__pages_v_blocks_features_features_with_title_feature_icon",
  	"feature_title" varchar,
  	"feature_description" jsonb,
  	"feature_bg" "enum__pages_v_blocks_features_features_with_title_feature_bg" DEFAULT 'cream',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_features_features_uppercase" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature_icon" "enum__pages_v_blocks_features_features_uppercase_feature_icon",
  	"feature_description" jsonb,
  	"feature_bg" "enum__pages_v_blocks_features_features_uppercase_feature_bg" DEFAULT 'cream',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"features_settings_anchor_id" varchar,
  	"features_settings_padding_top" "enum__pages_v_blocks_features_features_settings_padding_top" DEFAULT 'medium',
  	"features_settings_padding_bottom" "enum__pages_v_blocks_features_features_settings_padding_bottom" DEFAULT 'medium',
  	"features_settings_has_background_image" boolean DEFAULT false,
  	"features_settings_background" "enum__pages_v_blocks_features_features_settings_background" DEFAULT 'none',
  	"features_settings_background_image_id" integer,
  	"features_settings_heading" jsonb,
  	"features_settings_link_type" "enum__pages_v_blocks_features_features_settings_link_type" DEFAULT 'internal',
  	"features_settings_link_new_tab" boolean,
  	"features_settings_link_has_anchor" boolean,
  	"features_settings_link_dark_button" boolean,
  	"features_settings_link_icon_position" "icnPos" DEFAULT 'left',
  	"features_settings_link_icon" "enum__pages_v_blocks_features_features_settings_link_icon",
  	"features_settings_link_label" varchar,
  	"features_settings_link_relation" "enum__pages_v_blocks_features_features_settings_link_relation" DEFAULT 'pages',
  	"features_settings_link_url" varchar,
  	"features_settings_link_anchor_to" varchar,
  	"features_settings_link_appearance" "enum__pages_v_blocks_features_features_settings_link_appearance" DEFAULT 'primary',
  	"content" jsonb,
  	"features_variant" "enum__pages_v_blocks_features_features_variant" DEFAULT 'uppercase',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_form_form_cfg_flat_disposition_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_form_slide_out_boxes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"column_image_id" integer,
  	"column_image2_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_settings_anchor_id" varchar,
  	"form_settings_padding_top" "enum__pages_v_blocks_form_form_settings_padding_top" DEFAULT 'medium',
  	"form_settings_padding_bottom" "enum__pages_v_blocks_form_form_settings_padding_bottom" DEFAULT 'medium',
  	"form_settings_has_background_image" boolean DEFAULT false,
  	"form_settings_background" "enum__pages_v_blocks_form_form_settings_background" DEFAULT 'none',
  	"form_settings_background_image_id" integer,
  	"form_cfg_first_name_label" varchar DEFAULT 'First Name',
  	"form_cfg_first_name_placeholder" varchar DEFAULT 'Enter your first name',
  	"form_cfg_first_name_validation_min_length" numeric DEFAULT 2,
  	"form_cfg_first_name_validation_min_length_message" varchar DEFAULT 'First name must be at least 2 characters long',
  	"form_cfg_first_name_validation_required_message" varchar DEFAULT 'First name is required',
  	"form_cfg_last_name_label" varchar DEFAULT 'Last Name',
  	"form_cfg_last_name_placeholder" varchar DEFAULT 'Enter your last name',
  	"form_cfg_last_name_validation_min_length" numeric DEFAULT 2,
  	"form_cfg_last_name_validation_min_length_message" varchar DEFAULT 'Last Name must be at least 2 characters long',
  	"form_cfg_last_name_validation_required_message" varchar DEFAULT 'Last Name is required',
  	"form_cfg_phone_label" varchar DEFAULT 'Phone',
  	"form_cfg_phone_placeholder" varchar DEFAULT 'Enter your phone number',
  	"form_cfg_phone_validation_required_message" varchar DEFAULT 'Phone is required',
  	"form_cfg_email_label" varchar DEFAULT 'Email',
  	"form_cfg_email_placeholder" varchar DEFAULT 'Enter your email address',
  	"form_cfg_email_validation_invalid_message" varchar DEFAULT 'Please enter a valid email address',
  	"form_cfg_email_validation_required_message" varchar DEFAULT 'Email is required',
  	"form_cfg_message_label" varchar DEFAULT 'Message',
  	"form_cfg_message_placeholder" varchar DEFAULT 'Enter your message',
  	"form_cfg_message_validation_required_message" varchar DEFAULT 'Message is required',
  	"form_cfg_flat_disposition_label" varchar DEFAULT 'Flat Disposition',
  	"form_cfg_flat_disposition_placeholder" varchar DEFAULT 'Select flat disposition',
  	"form_cfg_flat_disposition_validation_required_message" varchar DEFAULT 'Please select a flat disposition',
  	"form_cfg_checkbox_with_text_label" varchar DEFAULT 'I agree to the terms and conditions',
  	"form_cfg_checkbox_with_text_content" jsonb,
  	"form_cfg_checkbox_with_text_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions',
  	"form_cfg_submit_button" varchar DEFAULT 'Send Message',
  	"form_cfg_toast_success_title" varchar DEFAULT 'Message Sent!',
  	"form_cfg_toast_success_message" varchar DEFAULT 'Thank you for your message. We will get back to you soon.',
  	"form_cfg_toast_error_title" varchar DEFAULT 'Error',
  	"form_cfg_toast_error_message" varchar DEFAULT 'There was an error sending your message. Please try again.',
  	"form_cfg_toast_error_fallback_message" varchar DEFAULT 'An unexpected error occurred. Please try again later.',
  	"form_content" jsonb,
  	"layout_variant" "enum__pages_v_blocks_form_layout_variant" DEFAULT 'onlyForm',
  	"form_position" "enum__pages_v_blocks_form_form_position",
  	"layout_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_flats_snippets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"flats_set_anchor_id" varchar,
  	"flats_set_padding_top" "enum__pages_v_blocks_flats_snippets_flats_set_padding_top" DEFAULT 'medium',
  	"flats_set_padding_bottom" "enum__pages_v_blocks_flats_snippets_flats_set_padding_bottom" DEFAULT 'medium',
  	"flats_set_has_background_image" boolean DEFAULT false,
  	"flats_set_background" "enum__pages_v_blocks_flats_snippets_flats_set_background" DEFAULT 'none',
  	"flats_set_background_image_id" integer,
  	"flats_set_heading" jsonb,
  	"flats_set_link_type" "enum__pages_v_blocks_flats_snippets_flats_set_link_type" DEFAULT 'internal',
  	"flats_set_link_new_tab" boolean,
  	"flats_set_link_has_anchor" boolean,
  	"flats_set_link_dark_button" boolean,
  	"flats_set_link_icon_position" "icnPos" DEFAULT 'left',
  	"flats_set_link_icon" "enum__pages_v_blocks_flats_snippets_flats_set_link_icon",
  	"flats_set_link_label" varchar,
  	"flats_set_link_relation" "enum__pages_v_blocks_flats_snippets_flats_set_link_relation" DEFAULT 'pages',
  	"flats_set_link_url" varchar,
  	"flats_set_link_anchor_to" varchar,
  	"flats_set_link_appearance" "enum__pages_v_blocks_flats_snippets_flats_set_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gallery_simple_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"slide_width" "enum__pages_v_blocks_gallery_simple_slider_slide_width",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gallery_multi_slider_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"slide_width" "enum__pages_v_blocks_gallery_multi_slider_images_slide_width",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gallery_multi_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tab_title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gallery_full_width" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"gallery_settings_anchor_id" varchar,
  	"gallery_settings_padding_top" "enum__pages_v_blocks_gallery_gallery_settings_padding_top" DEFAULT 'medium',
  	"gallery_settings_padding_bottom" "enum__pages_v_blocks_gallery_gallery_settings_padding_bottom" DEFAULT 'medium',
  	"gallery_settings_has_background_image" boolean DEFAULT false,
  	"gallery_settings_background" "enum__pages_v_blocks_gallery_gallery_settings_background" DEFAULT 'none',
  	"gallery_settings_background_image_id" integer,
  	"controls_type" "enum__pages_v_blocks_gallery_controls_type" DEFAULT 'arrows',
  	"autoplay" boolean DEFAULT false,
  	"content" jsonb,
  	"link_type" "enum__pages_v_blocks_gallery_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum__pages_v_blocks_gallery_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum__pages_v_blocks_gallery_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar,
  	"link_appearance" "enum__pages_v_blocks_gallery_link_appearance" DEFAULT 'primary',
  	"gallery_variant" "enum__pages_v_blocks_gallery_gallery_variant" DEFAULT 'simpleSlider',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_highlighted_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"high_set_anchor_id" varchar,
  	"high_set_padding_top" "enum__pages_v_blocks_highlighted_text_high_set_padding_top" DEFAULT 'medium',
  	"high_set_padding_bottom" "enum__pages_v_blocks_highlighted_text_high_set_padding_bottom" DEFAULT 'medium',
  	"high_set_has_background_image" boolean DEFAULT false,
  	"high_set_background" "enum__pages_v_blocks_highlighted_text_high_set_background" DEFAULT 'none',
  	"high_set_background_image_id" integer,
  	"title" jsonb,
  	"highlighted_text" varchar,
  	"highlighted_link_type" "enum__pages_v_blocks_highlighted_text_highlighted_link_type" DEFAULT 'internal',
  	"highlighted_link_new_tab" boolean,
  	"highlighted_link_has_anchor" boolean,
  	"highlighted_link_dark_button" boolean,
  	"highlighted_link_icon_position" "icnPos" DEFAULT 'left',
  	"highlighted_link_icon" "enum__pages_v_blocks_highlighted_text_highlighted_link_icon",
  	"highlighted_link_label" varchar,
  	"highlighted_link_relation" "enum__pages_v_blocks_highlighted_text_highlighted_link_relation" DEFAULT 'pages',
  	"highlighted_link_url" varchar,
  	"highlighted_link_anchor_to" varchar,
  	"_uuid" varchar,
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
  	"image_content_settings_background" "enum__imgContent_v_image_content_settings_background" DEFAULT 'none',
  	"image_content_settings_background_image_id" integer,
  	"content_type" "enum__imgContent_v_content_type" DEFAULT 'default',
  	"content" jsonb,
  	"person_content" jsonb,
  	"accordion_link_type" "enum__imgContent_v_accordion_link_type" DEFAULT 'internal',
  	"accordion_link_new_tab" boolean,
  	"accordion_link_has_anchor" boolean,
  	"accordion_link_dark_button" boolean,
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_images_grid_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_images_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"images_settings_anchor_id" varchar,
  	"images_settings_padding_top" "enum__pages_v_blocks_images_grid_images_settings_padding_top" DEFAULT 'medium',
  	"images_settings_padding_bottom" "enum__pages_v_blocks_images_grid_images_settings_padding_bottom" DEFAULT 'medium',
  	"images_settings_has_background_image" boolean DEFAULT false,
  	"images_settings_background" "enum__pages_v_blocks_images_grid_images_settings_background" DEFAULT 'none',
  	"images_settings_background_image_id" integer,
  	"direction_variant" "enum__pages_v_blocks_images_grid_direction_variant" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_image_pins_pins" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"withlogo" boolean DEFAULT false,
  	"reverse_layout" boolean DEFAULT false,
  	"highlighted" boolean DEFAULT false,
  	"logo_id" integer,
  	"marker_label" jsonb,
  	"x" numeric,
  	"y" numeric,
  	"pin_height" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_image_pins" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_pins_set_anchor_id" varchar,
  	"image_pins_set_padding_top" "enum__pages_v_blocks_image_pins_image_pins_set_padding_top" DEFAULT 'medium',
  	"image_pins_set_padding_bottom" "enum__pages_v_blocks_image_pins_image_pins_set_padding_bottom" DEFAULT 'medium',
  	"image_pins_set_has_background_image" boolean DEFAULT false,
  	"image_pins_set_background" "enum__pages_v_blocks_image_pins_image_pins_set_background" DEFAULT 'none',
  	"image_pins_set_background_image_id" integer,
  	"text" jsonb,
  	"background_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_news_snippets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"news_set_anchor_id" varchar,
  	"news_set_padding_top" "enum__pages_v_blocks_news_snippets_news_set_padding_top" DEFAULT 'medium',
  	"news_set_padding_bottom" "enum__pages_v_blocks_news_snippets_news_set_padding_bottom" DEFAULT 'medium',
  	"news_set_has_background_image" boolean DEFAULT false,
  	"news_set_background" "enum__pages_v_blocks_news_snippets_news_set_background" DEFAULT 'none',
  	"news_set_background_image_id" integer,
  	"news_set_heading" jsonb,
  	"news_set_link_type" "enum__pages_v_blocks_news_snippets_news_set_link_type" DEFAULT 'internal',
  	"news_set_link_new_tab" boolean,
  	"news_set_link_has_anchor" boolean,
  	"news_set_link_dark_button" boolean,
  	"news_set_link_icon_position" "icnPos" DEFAULT 'left',
  	"news_set_link_icon" "enum__pages_v_blocks_news_snippets_news_set_link_icon",
  	"news_set_link_label" varchar,
  	"news_set_link_relation" "enum__pages_v_blocks_news_snippets_news_set_link_relation" DEFAULT 'pages',
  	"news_set_link_url" varchar,
  	"news_set_link_anchor_to" varchar,
  	"news_set_link_appearance" "enum__pages_v_blocks_news_snippets_news_set_link_appearance" DEFAULT 'primary',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_numbers_numbers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" numeric,
  	"description" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_numbers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"numbers_settings_anchor_id" varchar,
  	"numbers_settings_padding_top" "enum__pages_v_blocks_numbers_numbers_settings_padding_top" DEFAULT 'medium',
  	"numbers_settings_padding_bottom" "enum__pages_v_blocks_numbers_numbers_settings_padding_bottom" DEFAULT 'medium',
  	"numbers_settings_has_background_image" boolean DEFAULT false,
  	"numbers_settings_background" "enum__pages_v_blocks_numbers_numbers_settings_background" DEFAULT 'none',
  	"numbers_settings_background_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_timeline_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"timeline_settings_anchor_id" varchar,
  	"timeline_settings_padding_top" "enum__pages_v_blocks_timeline_timeline_settings_padding_top" DEFAULT 'medium',
  	"timeline_settings_padding_bottom" "enum__pages_v_blocks_timeline_timeline_settings_padding_bottom" DEFAULT 'medium',
  	"timeline_settings_has_background_image" boolean DEFAULT false,
  	"timeline_settings_background" "enum__pages_v_blocks_timeline_timeline_settings_background" DEFAULT 'none',
  	"timeline_settings_background_image_id" integer,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_prices" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"prices_settings_anchor_id" varchar,
  	"prices_settings_padding_top" "enum__pages_v_blocks_prices_prices_settings_padding_top" DEFAULT 'medium',
  	"prices_settings_padding_bottom" "enum__pages_v_blocks_prices_prices_settings_padding_bottom" DEFAULT 'medium',
  	"prices_settings_has_background_image" boolean DEFAULT false,
  	"prices_settings_background" "enum__pages_v_blocks_prices_prices_settings_background" DEFAULT 'none',
  	"prices_settings_background_image_id" integer,
  	"bottom_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_interactive_picker_extended_views" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"view_name" varchar,
  	"image_id" integer,
  	"direct" "enum__pages_v_blocks_interactive_picker_extended_views_direct" DEFAULT 'south',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_interactive_picker_extended" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"picker_value" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_visual_price_list_buildings" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"building_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_visual_price_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_shared_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"shared_section_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_project_id" integer,
  	"version_meta_og_image_id" integer,
  	"version_meta_twitter_card" "enum__pages_v_version_meta_twitter_card" DEFAULT 'summary_large_image',
  	"version_meta_structured_data" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__pages_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_vstoone" (
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_news_page_header" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_keywords" varchar,
  	"version_meta_og_title" varchar,
  	"version_meta_og_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" integer,
  	"flats_id" integer,
  	"news_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "globalheader_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_globalheader_nav_items_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum_globalheader_nav_items_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum_globalheader_nav_items_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "globalheader_cta_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_globalheader_cta_buttons_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_with_icon" boolean DEFAULT false,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum_globalheader_cta_buttons_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum_globalheader_cta_buttons_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "globalheader" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"project_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "globalheaderstoone" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "globalheader_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" integer,
  	"flats_id" integer,
  	"news_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "globalfooter_highlighted_contacts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_globalfooter_highlighted_contacts_type",
  	"icon" boolean DEFAULT false,
  	"label" varchar,
  	"href" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "globalfooter_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link" varchar,
  	"icon_type" "enum_globalfooter_social_links_icon_type"
  );
  
  CREATE TABLE IF NOT EXISTS "globalfooter_contact_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"contact_item_title" varchar NOT NULL,
  	"contact_item_content" jsonb NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "globalfooter_bottom_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_globalfooter_bottom_links_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum_globalfooter_bottom_links_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum_globalfooter_bottom_links_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "globalfooter" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"project_id" integer NOT NULL,
  	"bottom_text" jsonb NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "globalfooterstoone" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "globalfooter_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"flats_id" integer,
  	"news_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "buildings_documents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"document_file_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "buildings_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"plan_file_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "buildings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"project_id" integer,
  	"realpadid" varchar,
  	"building_plan_picker_image_picker_id" integer,
  	"building_plan_picker_picker_value" jsonb,
  	"realpad_building_plan" varchar,
  	"realpad_building_arrow_direction" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "buildingsstoone" (
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "floors_documents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"document_file_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "floors_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"plan_file_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "floors" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"project_id" integer,
  	"realpadid" varchar,
  	"building_id" integer,
  	"floor_no" numeric,
  	"floor_plan_picker_image_picker_id" integer,
  	"floor_plan_picker_picker_value" jsonb,
  	"realpad_floor_plan" varchar,
  	"realpad_floor_arrow_direction" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "floorsstoone" (
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "flats_documents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"document_file_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "flats_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"plan_file_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "flats_pictures" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"picture_file_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "flats_manual_documents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"document_file_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "flats_manual_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"plan_file_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "flats_flat_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "flats_gallery_simple_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"slide_width" "enum_flats_gallery_simple_slider_slide_width"
  );
  
  CREATE TABLE IF NOT EXISTS "flats_gallery_multi_slider_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"slide_width" "enum_flats_gallery_multi_slider_images_slide_width"
  );
  
  CREATE TABLE IF NOT EXISTS "flats_gallery_multi_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab_title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flats" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"project_id" integer,
  	"realpadid" varchar,
  	"building_id" integer,
  	"floor_id" integer,
  	"realpad_flat_flat_internal_id" varchar,
  	"realpad_flat_associated_unit_ids" varchar,
  	"realpad_flat_plan" varchar,
  	"realpad_flat_pdf" varchar,
  	"realpad_flat_picture" varchar,
  	"realpad_flat_flat_disposition" varchar,
  	"realpad_flat_flat_area" numeric,
  	"realpad_flat_flat_area_living" numeric,
  	"realpad_flat_flat_area_balcony" numeric,
  	"realpad_flat_flat_area_terrace" numeric,
  	"realpad_flat_flat_area_loggia" numeric,
  	"realpad_flat_flat_area_garden" numeric,
  	"realpad_flat_flat_price" numeric,
  	"realpad_flat_flat_price_without_vat" numeric,
  	"realpad_flat_flat_discount_vat" numeric,
  	"realpad_flat_flat_discount_without_vat" numeric,
  	"realpad_flat_flat_price_before_discount_vat" numeric,
  	"realpad_flat_flat_price_before_discount_without_vat" numeric,
  	"realpad_flat_flat_status" varchar,
  	"realpad_flat_flat_orientation" varchar,
  	"realpad_flat_flat_type" varchar,
  	"realpad_flat_associatedunits_internal_ids" varchar,
  	"realpad_flat_associatedunits_totalprice_novat" numeric,
  	"realpad_flat_associatedunits_totalprice_vat" numeric,
  	"realpad_flat_flat_category" varchar,
  	"gallery_gallery_settings_anchor_id" varchar,
  	"gallery_gallery_settings_padding_top" "enum_flats_gallery_gallery_settings_padding_top" DEFAULT 'medium',
  	"gallery_gallery_settings_padding_bottom" "enum_flats_gallery_gallery_settings_padding_bottom" DEFAULT 'medium',
  	"gallery_gallery_settings_has_background_image" boolean DEFAULT false,
  	"gallery_gallery_settings_background" "enum_flats_gallery_gallery_settings_background" DEFAULT 'none',
  	"gallery_gallery_settings_background_image_id" integer,
  	"gallery_controls_type" "enum_flats_gallery_controls_type" DEFAULT 'arrows',
  	"gallery_autoplay" boolean DEFAULT false,
  	"gallery_gallery_variant" "enum_flats_gallery_gallery_variant" DEFAULT 'simpleSlider',
  	"meta_og_image_id" integer,
  	"meta_twitter_card" "enum_flats_meta_twitter_card" DEFAULT 'summary_large_image',
  	"meta_structured_data" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "flatsstoone" (
  	"title" varchar NOT NULL,
  	"gallery_content" jsonb,
  	"gallery_link_type" "enum_flats_gallery_link_type" DEFAULT 'internal',
  	"gallery_link_new_tab" boolean,
  	"gallery_link_has_anchor" boolean,
  	"gallery_link_dark_button" boolean,
  	"gallery_link_icon_position" "icnPos" DEFAULT 'left',
  	"gallery_link_icon" "enum_flats_gallery_link_icon",
  	"gallery_link_label" varchar,
  	"gallery_link_relation" "enum_flats_gallery_link_relation" DEFAULT 'pages',
  	"gallery_link_url" varchar,
  	"gallery_link_anchor_to" varchar,
  	"gallery_link_appearance" "enum_flats_gallery_link_appearance" DEFAULT 'primary',
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_keywords" varchar,
  	"meta_og_title" varchar,
  	"meta_og_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "flats_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" integer,
  	"flats_id" integer,
  	"news_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "project_global_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"project_id" integer NOT NULL,
  	"meta_og_image_id" integer,
  	"meta_twitter_card" "enum_project_global_settings_meta_twitter_card" DEFAULT 'summary_large_image',
  	"meta_structured_data" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "project_global_settingsstoone" (
  	"title" varchar NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_keywords" varchar,
  	"meta_og_title" varchar,
  	"meta_og_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_hero_hero_slideshow" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_hero_main_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_flDet_blocks_hero_main_buttons_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum_flDet_blocks_hero_main_buttons_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum_flDet_blocks_hero_main_buttons_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar,
  	"link_appearance" "enum_flDet_blocks_hero_main_buttons_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_hero_secondary_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_flDet_blocks_hero_secondary_buttons_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum_flDet_blocks_hero_secondary_buttons_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum_flDet_blocks_hero_secondary_buttons_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_flDet_blocks_hero_type" DEFAULT 'imageOnly',
  	"content" jsonb,
  	"hero_image_id" integer,
  	"hero_video_id" integer,
  	"left_upper_text" varchar,
  	"right_upper_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_variable_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_variable_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"row_index" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_variable_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_table_custom" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_draw_editor" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_picker_id" integer,
  	"picker_value" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb,
  	"image_id" integer,
  	"image_position" "enum_flDet_blocks_text_image_image_position" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"banner_settings_anchor_id" varchar,
  	"banner_settings_padding_top" "enum_flDet_blocks_banner_banner_settings_padding_top" DEFAULT 'medium',
  	"banner_settings_padding_bottom" "enum_flDet_blocks_banner_banner_settings_padding_bottom" DEFAULT 'medium',
  	"banner_settings_has_background_image" boolean DEFAULT false,
  	"banner_settings_background" "enum_flDet_blocks_banner_banner_settings_background" DEFAULT 'none',
  	"banner_settings_background_image_id" integer,
  	"banner_variant" "enum_flDet_blocks_banner_banner_variant" DEFAULT 'small',
  	"banner_content_position" "enum_flDet_blocks_banner_banner_content_position" DEFAULT 'center',
  	"caption" varchar,
  	"content" jsonb,
  	"banner_button_type" "enum_flDet_blocks_banner_banner_button_type" DEFAULT 'internal',
  	"banner_button_new_tab" boolean,
  	"banner_button_has_anchor" boolean,
  	"banner_button_dark_button" boolean,
  	"banner_button_icon_position" "icnPos" DEFAULT 'left',
  	"banner_button_icon" "enum_flDet_blocks_banner_banner_button_icon",
  	"banner_button_label" varchar,
  	"banner_button_relation" "enum_flDet_blocks_banner_banner_button_relation" DEFAULT 'pages',
  	"banner_button_url" varchar,
  	"banner_button_anchor_to" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_benefits_benefits_row_item_heading_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_benefits_benefits_row_item2_heading_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_benefits_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"row_item_image_id" integer,
  	"row_item_description" jsonb,
  	"row_item2_image_id" integer,
  	"row_item2_description" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"benefits_settings_anchor_id" varchar,
  	"benefits_settings_padding_top" "enum_flDet_blocks_benefits_benefits_settings_padding_top" DEFAULT 'medium',
  	"benefits_settings_padding_bottom" "enum_flDet_blocks_benefits_benefits_settings_padding_bottom" DEFAULT 'medium',
  	"benefits_settings_has_background_image" boolean DEFAULT false,
  	"benefits_settings_background" "enum_flDet_blocks_benefits_benefits_settings_background" DEFAULT 'none',
  	"benefits_settings_background_image_id" integer,
  	"show_logo" boolean DEFAULT true,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_contact_contact_info_highlighted_contacts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_title" varchar,
  	"item_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_contact_contact_info_contact_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_title" varchar,
  	"item_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"contact_settings_anchor_id" varchar,
  	"contact_settings_padding_top" "enum_flDet_blocks_contact_contact_settings_padding_top" DEFAULT 'medium',
  	"contact_settings_padding_bottom" "enum_flDet_blocks_contact_contact_settings_padding_bottom" DEFAULT 'medium',
  	"contact_settings_has_background_image" boolean DEFAULT false,
  	"contact_settings_background" "enum_flDet_blocks_contact_contact_settings_background" DEFAULT 'none',
  	"contact_settings_background_image_id" integer,
  	"contact_settings_heading" jsonb,
  	"contact_form_config_first_name_label" varchar DEFAULT 'First Name',
  	"contact_form_config_first_name_placeholder" varchar DEFAULT 'Enter your first name',
  	"contact_form_config_first_name_validation_min_length" numeric DEFAULT 2,
  	"contact_form_config_first_name_validation_min_length_message" varchar DEFAULT 'First Name must be at least 2 characters long',
  	"contact_form_config_first_name_validation_required_message" varchar DEFAULT 'First Name is required',
  	"contact_form_config_last_name_label" varchar DEFAULT 'Last Name',
  	"contact_form_config_last_name_placeholder" varchar DEFAULT 'Enter your last name',
  	"contact_form_config_last_name_validation_min_length" numeric DEFAULT 2,
  	"contact_form_config_last_name_validation_min_length_message" varchar DEFAULT 'Last Name must be at least 2 characters long',
  	"contact_form_config_last_name_validation_required_message" varchar DEFAULT 'Last Name is required',
  	"contact_form_config_phone_label" varchar DEFAULT 'Phone',
  	"contact_form_config_phone_placeholder" varchar DEFAULT 'Enter your phone number',
  	"contact_form_config_phone_validation_required_message" varchar DEFAULT 'Phone is required',
  	"contact_form_config_email_label" varchar DEFAULT 'Email',
  	"contact_form_config_email_placeholder" varchar DEFAULT 'Enter your email address',
  	"contact_form_config_email_validation_invalid_message" varchar DEFAULT 'Please enter a valid email address',
  	"contact_form_config_email_validation_required_message" varchar DEFAULT 'Email is required',
  	"contact_form_config_message_label" varchar DEFAULT 'Message',
  	"contact_form_config_message_placeholder" varchar DEFAULT 'Enter your message',
  	"contact_form_config_message_validation_required_message" varchar DEFAULT 'Message is required',
  	"contact_form_config_checkbox_with_text_label" varchar DEFAULT 'I agree to the terms and conditions',
  	"contact_form_config_checkbox_with_text_content" jsonb,
  	"contact_form_config_checkbox_with_text_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions',
  	"contact_form_config_submit_button" varchar DEFAULT 'Send Message',
  	"contact_form_config_toast_success_title" varchar DEFAULT 'Message Sent!',
  	"contact_form_config_toast_success_message" varchar DEFAULT 'Thank you for your message. We will get back to you soon.',
  	"contact_form_config_toast_error_title" varchar DEFAULT 'Error',
  	"contact_form_config_toast_error_message" varchar DEFAULT 'There was an error sending your message. Please try again.',
  	"contact_form_config_toast_error_fallback_message" varchar DEFAULT 'An unexpected error occurred. Please try again later.',
  	"contact_form_position" "enum_flDet_blocks_contact_contact_form_position",
  	"contact_form_title" varchar,
  	"variant" "enum_flDet_blocks_contact_variant" DEFAULT 'onlyForm',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_settings_anchor_id" varchar,
  	"content_settings_padding_top" "enum_flDet_blocks_content_content_settings_padding_top" DEFAULT 'medium',
  	"content_settings_padding_bottom" "enum_flDet_blocks_content_content_settings_padding_bottom" DEFAULT 'medium',
  	"content_settings_has_background_image" boolean DEFAULT false,
  	"content_settings_background" "enum_flDet_blocks_content_content_settings_background" DEFAULT 'none',
  	"content_settings_background_image_id" integer,
  	"content" jsonb,
  	"content_position" "enum_flDet_blocks_content_content_position" DEFAULT 'center',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_features_features_with_title" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_icon" "enum_flDet_blocks_features_features_with_title_feature_icon",
  	"feature_title" varchar,
  	"feature_description" jsonb,
  	"feature_bg" "enum_flDet_blocks_features_features_with_title_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_features_features_uppercase" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_icon" "enum_flDet_blocks_features_features_uppercase_feature_icon",
  	"feature_description" jsonb,
  	"feature_bg" "enum_flDet_blocks_features_features_uppercase_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"features_settings_anchor_id" varchar,
  	"features_settings_padding_top" "enum_flDet_blocks_features_features_settings_padding_top" DEFAULT 'medium',
  	"features_settings_padding_bottom" "enum_flDet_blocks_features_features_settings_padding_bottom" DEFAULT 'medium',
  	"features_settings_has_background_image" boolean DEFAULT false,
  	"features_settings_background" "enum_flDet_blocks_features_features_settings_background" DEFAULT 'none',
  	"features_settings_background_image_id" integer,
  	"features_settings_heading" jsonb,
  	"features_settings_link_type" "enum_flDet_blocks_features_features_settings_link_type" DEFAULT 'internal',
  	"features_settings_link_new_tab" boolean,
  	"features_settings_link_has_anchor" boolean,
  	"features_settings_link_dark_button" boolean,
  	"features_settings_link_icon_position" "icnPos" DEFAULT 'left',
  	"features_settings_link_icon" "enum_flDet_blocks_features_features_settings_link_icon",
  	"features_settings_link_label" varchar,
  	"features_settings_link_relation" "enum_flDet_blocks_features_features_settings_link_relation" DEFAULT 'pages',
  	"features_settings_link_url" varchar,
  	"features_settings_link_anchor_to" varchar,
  	"features_settings_link_appearance" "enum_flDet_blocks_features_features_settings_link_appearance" DEFAULT 'primary',
  	"content" jsonb,
  	"features_variant" "enum_flDet_blocks_features_features_variant" DEFAULT 'uppercase',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_form_form_cfg_flat_disposition_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_form_slide_out_boxes" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"column_image_id" integer,
  	"column_image2_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_settings_anchor_id" varchar,
  	"form_settings_padding_top" "enum_flDet_blocks_form_form_settings_padding_top" DEFAULT 'medium',
  	"form_settings_padding_bottom" "enum_flDet_blocks_form_form_settings_padding_bottom" DEFAULT 'medium',
  	"form_settings_has_background_image" boolean DEFAULT false,
  	"form_settings_background" "enum_flDet_blocks_form_form_settings_background" DEFAULT 'none',
  	"form_settings_background_image_id" integer,
  	"form_cfg_first_name_label" varchar DEFAULT 'First Name',
  	"form_cfg_first_name_placeholder" varchar DEFAULT 'Enter your first name',
  	"form_cfg_first_name_validation_min_length" numeric DEFAULT 2,
  	"form_cfg_first_name_validation_min_length_message" varchar DEFAULT 'First name must be at least 2 characters long',
  	"form_cfg_first_name_validation_required_message" varchar DEFAULT 'First name is required',
  	"form_cfg_last_name_label" varchar DEFAULT 'Last Name',
  	"form_cfg_last_name_placeholder" varchar DEFAULT 'Enter your last name',
  	"form_cfg_last_name_validation_min_length" numeric DEFAULT 2,
  	"form_cfg_last_name_validation_min_length_message" varchar DEFAULT 'Last Name must be at least 2 characters long',
  	"form_cfg_last_name_validation_required_message" varchar DEFAULT 'Last Name is required',
  	"form_cfg_phone_label" varchar DEFAULT 'Phone',
  	"form_cfg_phone_placeholder" varchar DEFAULT 'Enter your phone number',
  	"form_cfg_phone_validation_required_message" varchar DEFAULT 'Phone is required',
  	"form_cfg_email_label" varchar DEFAULT 'Email',
  	"form_cfg_email_placeholder" varchar DEFAULT 'Enter your email address',
  	"form_cfg_email_validation_invalid_message" varchar DEFAULT 'Please enter a valid email address',
  	"form_cfg_email_validation_required_message" varchar DEFAULT 'Email is required',
  	"form_cfg_message_label" varchar DEFAULT 'Message',
  	"form_cfg_message_placeholder" varchar DEFAULT 'Enter your message',
  	"form_cfg_message_validation_required_message" varchar DEFAULT 'Message is required',
  	"form_cfg_flat_disposition_label" varchar DEFAULT 'Flat Disposition',
  	"form_cfg_flat_disposition_placeholder" varchar DEFAULT 'Select flat disposition',
  	"form_cfg_flat_disposition_validation_required_message" varchar DEFAULT 'Please select a flat disposition',
  	"form_cfg_checkbox_with_text_label" varchar DEFAULT 'I agree to the terms and conditions',
  	"form_cfg_checkbox_with_text_content" jsonb,
  	"form_cfg_checkbox_with_text_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions',
  	"form_cfg_submit_button" varchar DEFAULT 'Send Message',
  	"form_cfg_toast_success_title" varchar DEFAULT 'Message Sent!',
  	"form_cfg_toast_success_message" varchar DEFAULT 'Thank you for your message. We will get back to you soon.',
  	"form_cfg_toast_error_title" varchar DEFAULT 'Error',
  	"form_cfg_toast_error_message" varchar DEFAULT 'There was an error sending your message. Please try again.',
  	"form_cfg_toast_error_fallback_message" varchar DEFAULT 'An unexpected error occurred. Please try again later.',
  	"form_content" jsonb,
  	"layout_variant" "enum_flDet_blocks_form_layout_variant" DEFAULT 'onlyForm',
  	"form_position" "enum_flDet_blocks_form_form_position",
  	"layout_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_flats_snippets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"flats_set_anchor_id" varchar,
  	"flats_set_padding_top" "enum_flDet_blocks_flats_snippets_flats_set_padding_top" DEFAULT 'medium',
  	"flats_set_padding_bottom" "enum_flDet_blocks_flats_snippets_flats_set_padding_bottom" DEFAULT 'medium',
  	"flats_set_has_background_image" boolean DEFAULT false,
  	"flats_set_background" "enum_flDet_blocks_flats_snippets_flats_set_background" DEFAULT 'none',
  	"flats_set_background_image_id" integer,
  	"flats_set_heading" jsonb,
  	"flats_set_link_type" "enum_flDet_blocks_flats_snippets_flats_set_link_type" DEFAULT 'internal',
  	"flats_set_link_new_tab" boolean,
  	"flats_set_link_has_anchor" boolean,
  	"flats_set_link_dark_button" boolean,
  	"flats_set_link_icon_position" "icnPos" DEFAULT 'left',
  	"flats_set_link_icon" "enum_flDet_blocks_flats_snippets_flats_set_link_icon",
  	"flats_set_link_label" varchar,
  	"flats_set_link_relation" "enum_flDet_blocks_flats_snippets_flats_set_link_relation" DEFAULT 'pages',
  	"flats_set_link_url" varchar,
  	"flats_set_link_anchor_to" varchar,
  	"flats_set_link_appearance" "enum_flDet_blocks_flats_snippets_flats_set_link_appearance" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_gallery_simple_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"slide_width" "enum_flDet_blocks_gallery_simple_slider_slide_width"
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_gallery_multi_slider_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"slide_width" "enum_flDet_blocks_gallery_multi_slider_images_slide_width"
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_gallery_multi_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab_title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_gallery_full_width" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"gallery_settings_anchor_id" varchar,
  	"gallery_settings_padding_top" "enum_flDet_blocks_gallery_gallery_settings_padding_top" DEFAULT 'medium',
  	"gallery_settings_padding_bottom" "enum_flDet_blocks_gallery_gallery_settings_padding_bottom" DEFAULT 'medium',
  	"gallery_settings_has_background_image" boolean DEFAULT false,
  	"gallery_settings_background" "enum_flDet_blocks_gallery_gallery_settings_background" DEFAULT 'none',
  	"gallery_settings_background_image_id" integer,
  	"controls_type" "enum_flDet_blocks_gallery_controls_type" DEFAULT 'arrows',
  	"autoplay" boolean DEFAULT false,
  	"content" jsonb,
  	"link_type" "enum_flDet_blocks_gallery_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum_flDet_blocks_gallery_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum_flDet_blocks_gallery_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar,
  	"link_appearance" "enum_flDet_blocks_gallery_link_appearance" DEFAULT 'primary',
  	"gallery_variant" "enum_flDet_blocks_gallery_gallery_variant" DEFAULT 'simpleSlider',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_highlighted_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"high_set_anchor_id" varchar,
  	"high_set_padding_top" "enum_flDet_blocks_highlighted_text_high_set_padding_top" DEFAULT 'medium',
  	"high_set_padding_bottom" "enum_flDet_blocks_highlighted_text_high_set_padding_bottom" DEFAULT 'medium',
  	"high_set_has_background_image" boolean DEFAULT false,
  	"high_set_background" "enum_flDet_blocks_highlighted_text_high_set_background" DEFAULT 'none',
  	"high_set_background_image_id" integer,
  	"title" jsonb,
  	"highlighted_text" varchar,
  	"highlighted_link_type" "enum_flDet_blocks_highlighted_text_highlighted_link_type" DEFAULT 'internal',
  	"highlighted_link_new_tab" boolean,
  	"highlighted_link_has_anchor" boolean,
  	"highlighted_link_dark_button" boolean,
  	"highlighted_link_icon_position" "icnPos" DEFAULT 'left',
  	"highlighted_link_icon" "enum_flDet_blocks_highlighted_text_highlighted_link_icon",
  	"highlighted_link_label" varchar,
  	"highlighted_link_relation" "enum_flDet_blocks_highlighted_text_highlighted_link_relation" DEFAULT 'pages',
  	"highlighted_link_url" varchar,
  	"highlighted_link_anchor_to" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_images_grid_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_images_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"images_settings_anchor_id" varchar,
  	"images_settings_padding_top" "enum_flDet_blocks_images_grid_images_settings_padding_top" DEFAULT 'medium',
  	"images_settings_padding_bottom" "enum_flDet_blocks_images_grid_images_settings_padding_bottom" DEFAULT 'medium',
  	"images_settings_has_background_image" boolean DEFAULT false,
  	"images_settings_background" "enum_flDet_blocks_images_grid_images_settings_background" DEFAULT 'none',
  	"images_settings_background_image_id" integer,
  	"direction_variant" "enum_flDet_blocks_images_grid_direction_variant" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_image_pins_pins" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"withlogo" boolean DEFAULT false,
  	"reverse_layout" boolean DEFAULT false,
  	"highlighted" boolean DEFAULT false,
  	"logo_id" integer,
  	"marker_label" jsonb,
  	"x" numeric,
  	"y" numeric,
  	"pin_height" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_image_pins" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_pins_set_anchor_id" varchar,
  	"image_pins_set_padding_top" "enum_flDet_blocks_image_pins_image_pins_set_padding_top" DEFAULT 'medium',
  	"image_pins_set_padding_bottom" "enum_flDet_blocks_image_pins_image_pins_set_padding_bottom" DEFAULT 'medium',
  	"image_pins_set_has_background_image" boolean DEFAULT false,
  	"image_pins_set_background" "enum_flDet_blocks_image_pins_image_pins_set_background" DEFAULT 'none',
  	"image_pins_set_background_image_id" integer,
  	"text" jsonb,
  	"background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_news_snippets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"news_set_anchor_id" varchar,
  	"news_set_padding_top" "enum_flDet_blocks_news_snippets_news_set_padding_top" DEFAULT 'medium',
  	"news_set_padding_bottom" "enum_flDet_blocks_news_snippets_news_set_padding_bottom" DEFAULT 'medium',
  	"news_set_has_background_image" boolean DEFAULT false,
  	"news_set_background" "enum_flDet_blocks_news_snippets_news_set_background" DEFAULT 'none',
  	"news_set_background_image_id" integer,
  	"news_set_heading" jsonb,
  	"news_set_link_type" "enum_flDet_blocks_news_snippets_news_set_link_type" DEFAULT 'internal',
  	"news_set_link_new_tab" boolean,
  	"news_set_link_has_anchor" boolean,
  	"news_set_link_dark_button" boolean,
  	"news_set_link_icon_position" "icnPos" DEFAULT 'left',
  	"news_set_link_icon" "enum_flDet_blocks_news_snippets_news_set_link_icon",
  	"news_set_link_label" varchar,
  	"news_set_link_relation" "enum_flDet_blocks_news_snippets_news_set_link_relation" DEFAULT 'pages',
  	"news_set_link_url" varchar,
  	"news_set_link_anchor_to" varchar,
  	"news_set_link_appearance" "enum_flDet_blocks_news_snippets_news_set_link_appearance" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_numbers_numbers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" numeric,
  	"description" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_numbers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"numbers_settings_anchor_id" varchar,
  	"numbers_settings_padding_top" "enum_flDet_blocks_numbers_numbers_settings_padding_top" DEFAULT 'medium',
  	"numbers_settings_padding_bottom" "enum_flDet_blocks_numbers_numbers_settings_padding_bottom" DEFAULT 'medium',
  	"numbers_settings_has_background_image" boolean DEFAULT false,
  	"numbers_settings_background" "enum_flDet_blocks_numbers_numbers_settings_background" DEFAULT 'none',
  	"numbers_settings_background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_timeline_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"timeline_settings_anchor_id" varchar,
  	"timeline_settings_padding_top" "enum_flDet_blocks_timeline_timeline_settings_padding_top" DEFAULT 'medium',
  	"timeline_settings_padding_bottom" "enum_flDet_blocks_timeline_timeline_settings_padding_bottom" DEFAULT 'medium',
  	"timeline_settings_has_background_image" boolean DEFAULT false,
  	"timeline_settings_background" "enum_flDet_blocks_timeline_timeline_settings_background" DEFAULT 'none',
  	"timeline_settings_background_image_id" integer,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_prices" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"prices_settings_anchor_id" varchar,
  	"prices_settings_padding_top" "enum_flDet_blocks_prices_prices_settings_padding_top" DEFAULT 'medium',
  	"prices_settings_padding_bottom" "enum_flDet_blocks_prices_prices_settings_padding_bottom" DEFAULT 'medium',
  	"prices_settings_has_background_image" boolean DEFAULT false,
  	"prices_settings_background" "enum_flDet_blocks_prices_prices_settings_background" DEFAULT 'none',
  	"prices_settings_background_image_id" integer,
  	"bottom_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_interactive_picker_extended_views" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"view_name" varchar,
  	"image_id" integer,
  	"direct" "enum_flDet_blocks_interactive_picker_extended_views_direct" DEFAULT 'south'
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_interactive_picker_extended" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"picker_value" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_visual_price_list_buildings" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"building_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_visual_price_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_shared_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"shared_section_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"project_id" integer NOT NULL,
  	"meta_og_image_id" integer,
  	"meta_twitter_card" "enum_flDet_meta_twitter_card" DEFAULT 'summary_large_image',
  	"meta_structured_data" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "flDetstoone" (
  	"title" varchar NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_keywords" varchar,
  	"meta_og_title" varchar,
  	"meta_og_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" integer,
  	"flats_id" integer,
  	"news_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"realpadid" varchar,
  	"project_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "news" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"published_at" timestamp(3) with time zone,
  	"read_time" numeric,
  	"project_id" integer,
  	"cover_image_id" integer NOT NULL,
  	"meta_og_image_id" integer,
  	"meta_twitter_card" "enum_news_meta_twitter_card" DEFAULT 'summary_large_image',
  	"meta_structured_data" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "newsstoone" (
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"status" "enum_news_status" DEFAULT 'draft',
  	"perex" varchar NOT NULL,
  	"content" jsonb NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_keywords" varchar,
  	"meta_og_title" varchar,
  	"meta_og_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "news_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_news_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_published_at" timestamp(3) with time zone,
  	"version_read_time" numeric,
  	"version_project_id" integer,
  	"version_cover_image_id" integer NOT NULL,
  	"version_meta_og_image_id" integer,
  	"version_meta_twitter_card" "enum__news_v_version_meta_twitter_card" DEFAULT 'summary_large_image',
  	"version_meta_structured_data" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_news_vstoone" (
  	"version_title" varchar NOT NULL,
  	"version_slug" varchar,
  	"version_status" "enum__news_v_version_status" DEFAULT 'draft',
  	"version_perex" varchar NOT NULL,
  	"version_content" jsonb NOT NULL,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_keywords" varchar,
  	"version_meta_og_title" varchar,
  	"version_meta_og_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_news_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"share_id" integer,
  	"roles_id" integer,
  	"users_id" integer,
  	"media_id" integer,
  	"projects_id" integer,
  	"pages_id" integer,
  	"globalheader_id" integer,
  	"globalfooter_id" integer,
  	"buildings_id" integer,
  	"floors_id" integer,
  	"flats_id" integer,
  	"project_global_settings_id" integer,
  	"flDet_id" integer,
  	"documents_id" integer,
  	"news_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_banner" ADD CONSTRAINT "share_blocks_banner_banner_settings_background_image_id_media_id_fk" FOREIGN KEY ("banner_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_banner" ADD CONSTRAINT "share_blocks_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_benefits_benefits_row_item_heading_lines" ADD CONSTRAINT "share_blocks_benefits_benefits_row_item_heading_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_benefits_benefits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_benefits_benefits_row_item2_heading_lines" ADD CONSTRAINT "share_blocks_benefits_benefits_row_item2_heading_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_benefits_benefits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_benefits_benefits" ADD CONSTRAINT "share_blocks_benefits_benefits_row_item_image_id_media_id_fk" FOREIGN KEY ("row_item_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_benefits_benefits" ADD CONSTRAINT "share_blocks_benefits_benefits_row_item2_image_id_media_id_fk" FOREIGN KEY ("row_item2_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_benefits_benefits" ADD CONSTRAINT "share_blocks_benefits_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_benefits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_benefits" ADD CONSTRAINT "share_blocks_benefits_benefits_settings_background_image_id_media_id_fk" FOREIGN KEY ("benefits_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_benefits" ADD CONSTRAINT "share_blocks_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_contact_contact_info_highlighted_contacts" ADD CONSTRAINT "share_blocks_contact_contact_info_highlighted_contacts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_contact_contact_info_contact_items" ADD CONSTRAINT "share_blocks_contact_contact_info_contact_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_contact" ADD CONSTRAINT "share_blocks_contact_contact_settings_background_image_id_media_id_fk" FOREIGN KEY ("contact_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_contact" ADD CONSTRAINT "share_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_content" ADD CONSTRAINT "share_blocks_content_content_settings_background_image_id_media_id_fk" FOREIGN KEY ("content_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_content" ADD CONSTRAINT "share_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_draw_editor" ADD CONSTRAINT "share_blocks_draw_editor_image_picker_id_media_id_fk" FOREIGN KEY ("image_picker_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_draw_editor" ADD CONSTRAINT "share_blocks_draw_editor_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_features_features_with_title" ADD CONSTRAINT "share_blocks_features_features_with_title_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_features_features_uppercase" ADD CONSTRAINT "share_blocks_features_features_uppercase_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_features" ADD CONSTRAINT "share_blocks_features_features_settings_background_image_id_media_id_fk" FOREIGN KEY ("features_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_features" ADD CONSTRAINT "share_blocks_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_form_form_cfg_flat_disposition_options" ADD CONSTRAINT "share_blocks_form_form_cfg_flat_disposition_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_form"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_form_slide_out_boxes" ADD CONSTRAINT "share_blocks_form_slide_out_boxes_column_image_id_media_id_fk" FOREIGN KEY ("column_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_form_slide_out_boxes" ADD CONSTRAINT "share_blocks_form_slide_out_boxes_column_image2_id_media_id_fk" FOREIGN KEY ("column_image2_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_form_slide_out_boxes" ADD CONSTRAINT "share_blocks_form_slide_out_boxes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_form"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_form" ADD CONSTRAINT "share_blocks_form_form_settings_background_image_id_media_id_fk" FOREIGN KEY ("form_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_form" ADD CONSTRAINT "share_blocks_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_flats_snippets" ADD CONSTRAINT "share_blocks_flats_snippets_flats_set_background_image_id_media_id_fk" FOREIGN KEY ("flats_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_flats_snippets" ADD CONSTRAINT "share_blocks_flats_snippets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_gallery_simple_slider" ADD CONSTRAINT "share_blocks_gallery_simple_slider_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_gallery_simple_slider" ADD CONSTRAINT "share_blocks_gallery_simple_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_gallery_multi_slider_images" ADD CONSTRAINT "share_blocks_gallery_multi_slider_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_gallery_multi_slider_images" ADD CONSTRAINT "share_blocks_gallery_multi_slider_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_gallery_multi_slider"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_gallery_multi_slider" ADD CONSTRAINT "share_blocks_gallery_multi_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_gallery_full_width" ADD CONSTRAINT "share_blocks_gallery_full_width_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_gallery_full_width" ADD CONSTRAINT "share_blocks_gallery_full_width_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_gallery" ADD CONSTRAINT "share_blocks_gallery_gallery_settings_background_image_id_media_id_fk" FOREIGN KEY ("gallery_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_gallery" ADD CONSTRAINT "share_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_hero_hero_slideshow" ADD CONSTRAINT "share_blocks_hero_hero_slideshow_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_hero_hero_slideshow" ADD CONSTRAINT "share_blocks_hero_hero_slideshow_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_hero_main_buttons" ADD CONSTRAINT "share_blocks_hero_main_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_hero_secondary_buttons" ADD CONSTRAINT "share_blocks_hero_secondary_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_hero" ADD CONSTRAINT "share_blocks_hero_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_hero" ADD CONSTRAINT "share_blocks_hero_hero_video_id_media_id_fk" FOREIGN KEY ("hero_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_hero" ADD CONSTRAINT "share_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_highlighted_text" ADD CONSTRAINT "share_blocks_highlighted_text_high_set_background_image_id_media_id_fk" FOREIGN KEY ("high_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_highlighted_text" ADD CONSTRAINT "share_blocks_highlighted_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
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
   ALTER TABLE "share_blocks_images_grid_images" ADD CONSTRAINT "share_blocks_images_grid_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_images_grid_images" ADD CONSTRAINT "share_blocks_images_grid_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_images_grid"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_images_grid" ADD CONSTRAINT "share_blocks_images_grid_images_settings_background_image_id_media_id_fk" FOREIGN KEY ("images_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_images_grid" ADD CONSTRAINT "share_blocks_images_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_image_pins_pins" ADD CONSTRAINT "share_blocks_image_pins_pins_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_image_pins_pins" ADD CONSTRAINT "share_blocks_image_pins_pins_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_image_pins"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_image_pins" ADD CONSTRAINT "share_blocks_image_pins_image_pins_set_background_image_id_media_id_fk" FOREIGN KEY ("image_pins_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_image_pins" ADD CONSTRAINT "share_blocks_image_pins_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_image_pins" ADD CONSTRAINT "share_blocks_image_pins_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_news_snippets" ADD CONSTRAINT "share_blocks_news_snippets_news_set_background_image_id_media_id_fk" FOREIGN KEY ("news_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_news_snippets" ADD CONSTRAINT "share_blocks_news_snippets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_numbers_numbers" ADD CONSTRAINT "share_blocks_numbers_numbers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_numbers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_numbers" ADD CONSTRAINT "share_blocks_numbers_numbers_settings_background_image_id_media_id_fk" FOREIGN KEY ("numbers_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_numbers" ADD CONSTRAINT "share_blocks_numbers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_timeline_timeline" ADD CONSTRAINT "share_blocks_timeline_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_timeline" ADD CONSTRAINT "share_blocks_timeline_timeline_settings_background_image_id_media_id_fk" FOREIGN KEY ("timeline_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_timeline" ADD CONSTRAINT "share_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_prices" ADD CONSTRAINT "share_blocks_prices_prices_settings_background_image_id_media_id_fk" FOREIGN KEY ("prices_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_prices" ADD CONSTRAINT "share_blocks_prices_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_interactive_picker_extended_views" ADD CONSTRAINT "share_blocks_interactive_picker_extended_views_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_interactive_picker_extended_views" ADD CONSTRAINT "share_blocks_interactive_picker_extended_views_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_interactive_picker_extended"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_interactive_picker_extended" ADD CONSTRAINT "share_blocks_interactive_picker_extended_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_visual_price_list_buildings" ADD CONSTRAINT "share_blocks_visual_price_list_buildings_building_id_buildings_id_fk" FOREIGN KEY ("building_id") REFERENCES "public"."buildings"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_visual_price_list_buildings" ADD CONSTRAINT "share_blocks_visual_price_list_buildings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_visual_price_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_visual_price_list" ADD CONSTRAINT "share_blocks_visual_price_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_variable_table_rows_cells" ADD CONSTRAINT "share_blocks_variable_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_variable_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_variable_table_rows" ADD CONSTRAINT "share_blocks_variable_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_variable_table"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_variable_table" ADD CONSTRAINT "share_blocks_variable_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_table_custom" ADD CONSTRAINT "share_blocks_table_custom_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_text_image" ADD CONSTRAINT "share_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_text_image" ADD CONSTRAINT "share_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_shared_section" ADD CONSTRAINT "share_blocks_shared_section_shared_section_id_share_id_fk" FOREIGN KEY ("shared_section_id") REFERENCES "public"."share"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_shared_section" ADD CONSTRAINT "share_blocks_shared_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share" ADD CONSTRAINT "share_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "sharestoone" ADD CONSTRAINT "sharestoone_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_rels" ADD CONSTRAINT "share_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_rels" ADD CONSTRAINT "share_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_rels" ADD CONSTRAINT "share_rels_flats_fk" FOREIGN KEY ("flats_id") REFERENCES "public"."flats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_rels" ADD CONSTRAINT "share_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "roles_permissions_projects" ADD CONSTRAINT "roles_permissions_projects_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "roles_permissions_pages" ADD CONSTRAINT "roles_permissions_pages_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "roles_permissions_globalheader" ADD CONSTRAINT "roles_permissions_globalheader_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "roles_permissions_globalfooter" ADD CONSTRAINT "roles_permissions_globalfooter_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "roles_permissions_project_global_settings" ADD CONSTRAINT "roles_permissions_project_global_settings_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "roles_permissions_buildings" ADD CONSTRAINT "roles_permissions_buildings_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "roles_permissions_flats" ADD CONSTRAINT "roles_permissions_flats_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "roles_permissions_flat_detail_page" ADD CONSTRAINT "roles_permissions_flat_detail_page_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "roles_permissions_sectors" ADD CONSTRAINT "roles_permissions_sectors_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "roles_permissions_floors" ADD CONSTRAINT "roles_permissions_floors_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "roles_permissions_news" ADD CONSTRAINT "roles_permissions_news_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "roles_permissions_media" ADD CONSTRAINT "roles_permissions_media_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "roles_permissions_documents" ADD CONSTRAINT "roles_permissions_documents_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "roles_permissions_share" ADD CONSTRAINT "roles_permissions_share_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "roles_rels" ADD CONSTRAINT "roles_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "roles_rels" ADD CONSTRAINT "roles_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "users" ADD CONSTRAINT "users_role_id_roles_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "users_rels" ADD CONSTRAINT "users_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "users_rels" ADD CONSTRAINT "users_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "media" ADD CONSTRAINT "media_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "projects_standards" ADD CONSTRAINT "projects_standards_standard_file_id_documents_id_fk" FOREIGN KEY ("standard_file_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "projects_standards" ADD CONSTRAINT "projects_standards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "projects_plans" ADD CONSTRAINT "projects_plans_plan_file_id_documents_id_fk" FOREIGN KEY ("plan_file_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "projects_plans" ADD CONSTRAINT "projects_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_hero_slideshow" ADD CONSTRAINT "pages_blocks_hero_hero_slideshow_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_hero_slideshow" ADD CONSTRAINT "pages_blocks_hero_hero_slideshow_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_main_buttons" ADD CONSTRAINT "pages_blocks_hero_main_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_secondary_buttons" ADD CONSTRAINT "pages_blocks_hero_secondary_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_hero_video_id_media_id_fk" FOREIGN KEY ("hero_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_variable_table_rows_cells" ADD CONSTRAINT "pages_blocks_variable_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_variable_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_variable_table_rows" ADD CONSTRAINT "pages_blocks_variable_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_variable_table"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_variable_table" ADD CONSTRAINT "pages_blocks_variable_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_table_custom" ADD CONSTRAINT "pages_blocks_table_custom_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_draw_editor" ADD CONSTRAINT "pages_blocks_draw_editor_image_picker_id_media_id_fk" FOREIGN KEY ("image_picker_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_draw_editor" ADD CONSTRAINT "pages_blocks_draw_editor_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_image" ADD CONSTRAINT "pages_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_image" ADD CONSTRAINT "pages_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_banner" ADD CONSTRAINT "pages_blocks_banner_banner_settings_background_image_id_media_id_fk" FOREIGN KEY ("banner_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_banner" ADD CONSTRAINT "pages_blocks_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_benefits_benefits_row_item_heading_lines" ADD CONSTRAINT "pages_blocks_benefits_benefits_row_item_heading_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_benefits_benefits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_benefits_benefits_row_item2_heading_lines" ADD CONSTRAINT "pages_blocks_benefits_benefits_row_item2_heading_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_benefits_benefits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_benefits_benefits" ADD CONSTRAINT "pages_blocks_benefits_benefits_row_item_image_id_media_id_fk" FOREIGN KEY ("row_item_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_benefits_benefits" ADD CONSTRAINT "pages_blocks_benefits_benefits_row_item2_image_id_media_id_fk" FOREIGN KEY ("row_item2_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_benefits_benefits" ADD CONSTRAINT "pages_blocks_benefits_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_benefits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_benefits" ADD CONSTRAINT "pages_blocks_benefits_benefits_settings_background_image_id_media_id_fk" FOREIGN KEY ("benefits_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_benefits" ADD CONSTRAINT "pages_blocks_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_contact_contact_info_highlighted_contacts" ADD CONSTRAINT "pages_blocks_contact_contact_info_highlighted_contacts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_contact_contact_info_contact_items" ADD CONSTRAINT "pages_blocks_contact_contact_info_contact_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_contact" ADD CONSTRAINT "pages_blocks_contact_contact_settings_background_image_id_media_id_fk" FOREIGN KEY ("contact_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_contact" ADD CONSTRAINT "pages_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_content_settings_background_image_id_media_id_fk" FOREIGN KEY ("content_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_features_features_with_title" ADD CONSTRAINT "pages_blocks_features_features_with_title_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_features_features_uppercase" ADD CONSTRAINT "pages_blocks_features_features_uppercase_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_features" ADD CONSTRAINT "pages_blocks_features_features_settings_background_image_id_media_id_fk" FOREIGN KEY ("features_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_features" ADD CONSTRAINT "pages_blocks_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form_form_cfg_flat_disposition_options" ADD CONSTRAINT "pages_blocks_form_form_cfg_flat_disposition_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form_slide_out_boxes" ADD CONSTRAINT "pages_blocks_form_slide_out_boxes_column_image_id_media_id_fk" FOREIGN KEY ("column_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form_slide_out_boxes" ADD CONSTRAINT "pages_blocks_form_slide_out_boxes_column_image2_id_media_id_fk" FOREIGN KEY ("column_image2_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form_slide_out_boxes" ADD CONSTRAINT "pages_blocks_form_slide_out_boxes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form" ADD CONSTRAINT "pages_blocks_form_form_settings_background_image_id_media_id_fk" FOREIGN KEY ("form_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form" ADD CONSTRAINT "pages_blocks_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_flats_snippets" ADD CONSTRAINT "pages_blocks_flats_snippets_flats_set_background_image_id_media_id_fk" FOREIGN KEY ("flats_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_flats_snippets" ADD CONSTRAINT "pages_blocks_flats_snippets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_gallery_simple_slider" ADD CONSTRAINT "pages_blocks_gallery_simple_slider_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_gallery_simple_slider" ADD CONSTRAINT "pages_blocks_gallery_simple_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_gallery_multi_slider_images" ADD CONSTRAINT "pages_blocks_gallery_multi_slider_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_gallery_multi_slider_images" ADD CONSTRAINT "pages_blocks_gallery_multi_slider_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery_multi_slider"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_gallery_multi_slider" ADD CONSTRAINT "pages_blocks_gallery_multi_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_gallery_full_width" ADD CONSTRAINT "pages_blocks_gallery_full_width_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_gallery_full_width" ADD CONSTRAINT "pages_blocks_gallery_full_width_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_gallery" ADD CONSTRAINT "pages_blocks_gallery_gallery_settings_background_image_id_media_id_fk" FOREIGN KEY ("gallery_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_gallery" ADD CONSTRAINT "pages_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_highlighted_text" ADD CONSTRAINT "pages_blocks_highlighted_text_high_set_background_image_id_media_id_fk" FOREIGN KEY ("high_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_highlighted_text" ADD CONSTRAINT "pages_blocks_highlighted_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_images_grid_images" ADD CONSTRAINT "pages_blocks_images_grid_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_images_grid_images" ADD CONSTRAINT "pages_blocks_images_grid_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_images_grid"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_images_grid" ADD CONSTRAINT "pages_blocks_images_grid_images_settings_background_image_id_media_id_fk" FOREIGN KEY ("images_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_images_grid" ADD CONSTRAINT "pages_blocks_images_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_image_pins_pins" ADD CONSTRAINT "pages_blocks_image_pins_pins_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_image_pins_pins" ADD CONSTRAINT "pages_blocks_image_pins_pins_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_image_pins"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_image_pins" ADD CONSTRAINT "pages_blocks_image_pins_image_pins_set_background_image_id_media_id_fk" FOREIGN KEY ("image_pins_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_image_pins" ADD CONSTRAINT "pages_blocks_image_pins_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_image_pins" ADD CONSTRAINT "pages_blocks_image_pins_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_news_snippets" ADD CONSTRAINT "pages_blocks_news_snippets_news_set_background_image_id_media_id_fk" FOREIGN KEY ("news_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_news_snippets" ADD CONSTRAINT "pages_blocks_news_snippets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_numbers_numbers" ADD CONSTRAINT "pages_blocks_numbers_numbers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_numbers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_numbers" ADD CONSTRAINT "pages_blocks_numbers_numbers_settings_background_image_id_media_id_fk" FOREIGN KEY ("numbers_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_numbers" ADD CONSTRAINT "pages_blocks_numbers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_timeline_timeline" ADD CONSTRAINT "pages_blocks_timeline_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_timeline" ADD CONSTRAINT "pages_blocks_timeline_timeline_settings_background_image_id_media_id_fk" FOREIGN KEY ("timeline_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_timeline" ADD CONSTRAINT "pages_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_prices" ADD CONSTRAINT "pages_blocks_prices_prices_settings_background_image_id_media_id_fk" FOREIGN KEY ("prices_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_prices" ADD CONSTRAINT "pages_blocks_prices_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_interactive_picker_extended_views" ADD CONSTRAINT "pages_blocks_interactive_picker_extended_views_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_interactive_picker_extended_views" ADD CONSTRAINT "pages_blocks_interactive_picker_extended_views_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_interactive_picker_extended"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_interactive_picker_extended" ADD CONSTRAINT "pages_blocks_interactive_picker_extended_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_visual_price_list_buildings" ADD CONSTRAINT "pages_blocks_visual_price_list_buildings_building_id_buildings_id_fk" FOREIGN KEY ("building_id") REFERENCES "public"."buildings"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_visual_price_list_buildings" ADD CONSTRAINT "pages_blocks_visual_price_list_buildings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_visual_price_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_visual_price_list" ADD CONSTRAINT "pages_blocks_visual_price_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_shared_section" ADD CONSTRAINT "pages_blocks_shared_section_shared_section_id_share_id_fk" FOREIGN KEY ("shared_section_id") REFERENCES "public"."share"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_shared_section" ADD CONSTRAINT "pages_blocks_shared_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_og_image_id_media_id_fk" FOREIGN KEY ("meta_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pagesstoone" ADD CONSTRAINT "pagesstoone_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_flats_fk" FOREIGN KEY ("flats_id") REFERENCES "public"."flats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_hero_slideshow" ADD CONSTRAINT "_pages_v_blocks_hero_hero_slideshow_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_hero_slideshow" ADD CONSTRAINT "_pages_v_blocks_hero_hero_slideshow_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_main_buttons" ADD CONSTRAINT "_pages_v_blocks_hero_main_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_secondary_buttons" ADD CONSTRAINT "_pages_v_blocks_hero_secondary_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_hero_video_id_media_id_fk" FOREIGN KEY ("hero_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero" ADD CONSTRAINT "_pages_v_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_variable_table_rows_cells" ADD CONSTRAINT "_pages_v_blocks_variable_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_variable_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_variable_table_rows" ADD CONSTRAINT "_pages_v_blocks_variable_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_variable_table"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_variable_table" ADD CONSTRAINT "_pages_v_blocks_variable_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_table_custom" ADD CONSTRAINT "_pages_v_blocks_table_custom_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_draw_editor" ADD CONSTRAINT "_pages_v_blocks_draw_editor_image_picker_id_media_id_fk" FOREIGN KEY ("image_picker_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_draw_editor" ADD CONSTRAINT "_pages_v_blocks_draw_editor_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_image" ADD CONSTRAINT "_pages_v_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_image" ADD CONSTRAINT "_pages_v_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_banner" ADD CONSTRAINT "_pages_v_blocks_banner_banner_settings_background_image_id_media_id_fk" FOREIGN KEY ("banner_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_banner" ADD CONSTRAINT "_pages_v_blocks_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_benefits_benefits_row_item_heading_lines" ADD CONSTRAINT "_pages_v_blocks_benefits_benefits_row_item_heading_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_benefits_benefits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_benefits_benefits_row_item2_heading_lines" ADD CONSTRAINT "_pages_v_blocks_benefits_benefits_row_item2_heading_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_benefits_benefits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_benefits_benefits" ADD CONSTRAINT "_pages_v_blocks_benefits_benefits_row_item_image_id_media_id_fk" FOREIGN KEY ("row_item_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_benefits_benefits" ADD CONSTRAINT "_pages_v_blocks_benefits_benefits_row_item2_image_id_media_id_fk" FOREIGN KEY ("row_item2_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_benefits_benefits" ADD CONSTRAINT "_pages_v_blocks_benefits_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_benefits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_benefits" ADD CONSTRAINT "_pages_v_blocks_benefits_benefits_settings_background_image_id_media_id_fk" FOREIGN KEY ("benefits_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_benefits" ADD CONSTRAINT "_pages_v_blocks_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_contact_contact_info_highlighted_contacts" ADD CONSTRAINT "_pages_v_blocks_contact_contact_info_highlighted_contacts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_contact_contact_info_contact_items" ADD CONSTRAINT "_pages_v_blocks_contact_contact_info_contact_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_contact" ADD CONSTRAINT "_pages_v_blocks_contact_contact_settings_background_image_id_media_id_fk" FOREIGN KEY ("contact_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_contact" ADD CONSTRAINT "_pages_v_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_content_settings_background_image_id_media_id_fk" FOREIGN KEY ("content_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_features_features_with_title" ADD CONSTRAINT "_pages_v_blocks_features_features_with_title_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_features_features_uppercase" ADD CONSTRAINT "_pages_v_blocks_features_features_uppercase_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_features" ADD CONSTRAINT "_pages_v_blocks_features_features_settings_background_image_id_media_id_fk" FOREIGN KEY ("features_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_features" ADD CONSTRAINT "_pages_v_blocks_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form_form_cfg_flat_disposition_options" ADD CONSTRAINT "_pages_v_blocks_form_form_cfg_flat_disposition_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_form"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form_slide_out_boxes" ADD CONSTRAINT "_pages_v_blocks_form_slide_out_boxes_column_image_id_media_id_fk" FOREIGN KEY ("column_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form_slide_out_boxes" ADD CONSTRAINT "_pages_v_blocks_form_slide_out_boxes_column_image2_id_media_id_fk" FOREIGN KEY ("column_image2_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form_slide_out_boxes" ADD CONSTRAINT "_pages_v_blocks_form_slide_out_boxes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_form"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form" ADD CONSTRAINT "_pages_v_blocks_form_form_settings_background_image_id_media_id_fk" FOREIGN KEY ("form_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form" ADD CONSTRAINT "_pages_v_blocks_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_flats_snippets" ADD CONSTRAINT "_pages_v_blocks_flats_snippets_flats_set_background_image_id_media_id_fk" FOREIGN KEY ("flats_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_flats_snippets" ADD CONSTRAINT "_pages_v_blocks_flats_snippets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_gallery_simple_slider" ADD CONSTRAINT "_pages_v_blocks_gallery_simple_slider_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_gallery_simple_slider" ADD CONSTRAINT "_pages_v_blocks_gallery_simple_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_gallery_multi_slider_images" ADD CONSTRAINT "_pages_v_blocks_gallery_multi_slider_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_gallery_multi_slider_images" ADD CONSTRAINT "_pages_v_blocks_gallery_multi_slider_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery_multi_slider"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_gallery_multi_slider" ADD CONSTRAINT "_pages_v_blocks_gallery_multi_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_gallery_full_width" ADD CONSTRAINT "_pages_v_blocks_gallery_full_width_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_gallery_full_width" ADD CONSTRAINT "_pages_v_blocks_gallery_full_width_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_gallery" ADD CONSTRAINT "_pages_v_blocks_gallery_gallery_settings_background_image_id_media_id_fk" FOREIGN KEY ("gallery_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_gallery" ADD CONSTRAINT "_pages_v_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_highlighted_text" ADD CONSTRAINT "_pages_v_blocks_highlighted_text_high_set_background_image_id_media_id_fk" FOREIGN KEY ("high_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_highlighted_text" ADD CONSTRAINT "_pages_v_blocks_highlighted_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
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
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_images_grid_images" ADD CONSTRAINT "_pages_v_blocks_images_grid_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_images_grid_images" ADD CONSTRAINT "_pages_v_blocks_images_grid_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_images_grid"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_images_grid" ADD CONSTRAINT "_pages_v_blocks_images_grid_images_settings_background_image_id_media_id_fk" FOREIGN KEY ("images_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_images_grid" ADD CONSTRAINT "_pages_v_blocks_images_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_image_pins_pins" ADD CONSTRAINT "_pages_v_blocks_image_pins_pins_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_image_pins_pins" ADD CONSTRAINT "_pages_v_blocks_image_pins_pins_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_image_pins"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_image_pins" ADD CONSTRAINT "_pages_v_blocks_image_pins_image_pins_set_background_image_id_media_id_fk" FOREIGN KEY ("image_pins_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_image_pins" ADD CONSTRAINT "_pages_v_blocks_image_pins_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_image_pins" ADD CONSTRAINT "_pages_v_blocks_image_pins_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_news_snippets" ADD CONSTRAINT "_pages_v_blocks_news_snippets_news_set_background_image_id_media_id_fk" FOREIGN KEY ("news_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_news_snippets" ADD CONSTRAINT "_pages_v_blocks_news_snippets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_numbers_numbers" ADD CONSTRAINT "_pages_v_blocks_numbers_numbers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_numbers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_numbers" ADD CONSTRAINT "_pages_v_blocks_numbers_numbers_settings_background_image_id_media_id_fk" FOREIGN KEY ("numbers_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_numbers" ADD CONSTRAINT "_pages_v_blocks_numbers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_timeline_timeline" ADD CONSTRAINT "_pages_v_blocks_timeline_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_timeline" ADD CONSTRAINT "_pages_v_blocks_timeline_timeline_settings_background_image_id_media_id_fk" FOREIGN KEY ("timeline_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_timeline" ADD CONSTRAINT "_pages_v_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_prices" ADD CONSTRAINT "_pages_v_blocks_prices_prices_settings_background_image_id_media_id_fk" FOREIGN KEY ("prices_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_prices" ADD CONSTRAINT "_pages_v_blocks_prices_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_interactive_picker_extended_views" ADD CONSTRAINT "_pages_v_blocks_interactive_picker_extended_views_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_interactive_picker_extended_views" ADD CONSTRAINT "_pages_v_blocks_interactive_picker_extended_views_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_interactive_picker_extended"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_interactive_picker_extended" ADD CONSTRAINT "_pages_v_blocks_interactive_picker_extended_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_visual_price_list_buildings" ADD CONSTRAINT "_pages_v_blocks_visual_price_list_buildings_building_id_buildings_id_fk" FOREIGN KEY ("building_id") REFERENCES "public"."buildings"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_visual_price_list_buildings" ADD CONSTRAINT "_pages_v_blocks_visual_price_list_buildings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_visual_price_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_visual_price_list" ADD CONSTRAINT "_pages_v_blocks_visual_price_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_shared_section" ADD CONSTRAINT "_pages_v_blocks_shared_section_shared_section_id_share_id_fk" FOREIGN KEY ("shared_section_id") REFERENCES "public"."share"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_shared_section" ADD CONSTRAINT "_pages_v_blocks_shared_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_project_id_projects_id_fk" FOREIGN KEY ("version_project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_og_image_id_media_id_fk" FOREIGN KEY ("version_meta_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_vstoone" ADD CONSTRAINT "_pages_vstoone_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_flats_fk" FOREIGN KEY ("flats_id") REFERENCES "public"."flats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "globalheader_nav_items" ADD CONSTRAINT "globalheader_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."globalheader"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "globalheader_cta_buttons" ADD CONSTRAINT "globalheader_cta_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."globalheader"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "globalheader" ADD CONSTRAINT "globalheader_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "globalheaderstoone" ADD CONSTRAINT "globalheaderstoone_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."globalheader"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "globalheader_rels" ADD CONSTRAINT "globalheader_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."globalheader"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "globalheader_rels" ADD CONSTRAINT "globalheader_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "globalheader_rels" ADD CONSTRAINT "globalheader_rels_flats_fk" FOREIGN KEY ("flats_id") REFERENCES "public"."flats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "globalheader_rels" ADD CONSTRAINT "globalheader_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "globalfooter_highlighted_contacts" ADD CONSTRAINT "globalfooter_highlighted_contacts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."globalfooter"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "globalfooter_social_links" ADD CONSTRAINT "globalfooter_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."globalfooter"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "globalfooter_contact_items" ADD CONSTRAINT "globalfooter_contact_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."globalfooter"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "globalfooter_bottom_links" ADD CONSTRAINT "globalfooter_bottom_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."globalfooter"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "globalfooter" ADD CONSTRAINT "globalfooter_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "globalfooterstoone" ADD CONSTRAINT "globalfooterstoone_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."globalfooter"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "globalfooter_rels" ADD CONSTRAINT "globalfooter_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."globalfooter"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "globalfooter_rels" ADD CONSTRAINT "globalfooter_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "globalfooter_rels" ADD CONSTRAINT "globalfooter_rels_flats_fk" FOREIGN KEY ("flats_id") REFERENCES "public"."flats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "globalfooter_rels" ADD CONSTRAINT "globalfooter_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "buildings_documents" ADD CONSTRAINT "buildings_documents_document_file_id_documents_id_fk" FOREIGN KEY ("document_file_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "buildings_documents" ADD CONSTRAINT "buildings_documents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."buildings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "buildings_plans" ADD CONSTRAINT "buildings_plans_plan_file_id_documents_id_fk" FOREIGN KEY ("plan_file_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "buildings_plans" ADD CONSTRAINT "buildings_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."buildings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "buildings" ADD CONSTRAINT "buildings_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "buildings" ADD CONSTRAINT "buildings_building_plan_picker_image_picker_id_media_id_fk" FOREIGN KEY ("building_plan_picker_image_picker_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "buildingsstoone" ADD CONSTRAINT "buildingsstoone_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."buildings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "floors_documents" ADD CONSTRAINT "floors_documents_document_file_id_documents_id_fk" FOREIGN KEY ("document_file_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "floors_documents" ADD CONSTRAINT "floors_documents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."floors"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "floors_plans" ADD CONSTRAINT "floors_plans_plan_file_id_documents_id_fk" FOREIGN KEY ("plan_file_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "floors_plans" ADD CONSTRAINT "floors_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."floors"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "floors" ADD CONSTRAINT "floors_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "floors" ADD CONSTRAINT "floors_building_id_buildings_id_fk" FOREIGN KEY ("building_id") REFERENCES "public"."buildings"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "floors" ADD CONSTRAINT "floors_floor_plan_picker_image_picker_id_media_id_fk" FOREIGN KEY ("floor_plan_picker_image_picker_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "floorsstoone" ADD CONSTRAINT "floorsstoone_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."floors"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_documents" ADD CONSTRAINT "flats_documents_document_file_id_documents_id_fk" FOREIGN KEY ("document_file_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_documents" ADD CONSTRAINT "flats_documents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_plans" ADD CONSTRAINT "flats_plans_plan_file_id_documents_id_fk" FOREIGN KEY ("plan_file_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_plans" ADD CONSTRAINT "flats_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_pictures" ADD CONSTRAINT "flats_pictures_picture_file_id_documents_id_fk" FOREIGN KEY ("picture_file_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_pictures" ADD CONSTRAINT "flats_pictures_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_manual_documents" ADD CONSTRAINT "flats_manual_documents_document_file_id_documents_id_fk" FOREIGN KEY ("document_file_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_manual_documents" ADD CONSTRAINT "flats_manual_documents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_manual_plans" ADD CONSTRAINT "flats_manual_plans_plan_file_id_media_id_fk" FOREIGN KEY ("plan_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_manual_plans" ADD CONSTRAINT "flats_manual_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_flat_plans" ADD CONSTRAINT "flats_flat_plans_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_flat_plans" ADD CONSTRAINT "flats_flat_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_gallery_simple_slider" ADD CONSTRAINT "flats_gallery_simple_slider_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_gallery_simple_slider" ADD CONSTRAINT "flats_gallery_simple_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_gallery_multi_slider_images" ADD CONSTRAINT "flats_gallery_multi_slider_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_gallery_multi_slider_images" ADD CONSTRAINT "flats_gallery_multi_slider_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flats_gallery_multi_slider"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_gallery_multi_slider" ADD CONSTRAINT "flats_gallery_multi_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats" ADD CONSTRAINT "flats_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats" ADD CONSTRAINT "flats_building_id_buildings_id_fk" FOREIGN KEY ("building_id") REFERENCES "public"."buildings"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats" ADD CONSTRAINT "flats_floor_id_floors_id_fk" FOREIGN KEY ("floor_id") REFERENCES "public"."floors"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats" ADD CONSTRAINT "flats_gallery_gallery_settings_background_image_id_media_id_fk" FOREIGN KEY ("gallery_gallery_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats" ADD CONSTRAINT "flats_meta_og_image_id_media_id_fk" FOREIGN KEY ("meta_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flatsstoone" ADD CONSTRAINT "flatsstoone_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_rels" ADD CONSTRAINT "flats_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."flats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_rels" ADD CONSTRAINT "flats_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_rels" ADD CONSTRAINT "flats_rels_flats_fk" FOREIGN KEY ("flats_id") REFERENCES "public"."flats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flats_rels" ADD CONSTRAINT "flats_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_global_settings" ADD CONSTRAINT "project_global_settings_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_global_settings" ADD CONSTRAINT "project_global_settings_meta_og_image_id_media_id_fk" FOREIGN KEY ("meta_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "project_global_settingsstoone" ADD CONSTRAINT "project_global_settingsstoone_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."project_global_settings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_hero_hero_slideshow" ADD CONSTRAINT "flDet_blocks_hero_hero_slideshow_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_hero_hero_slideshow" ADD CONSTRAINT "flDet_blocks_hero_hero_slideshow_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_hero_main_buttons" ADD CONSTRAINT "flDet_blocks_hero_main_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_hero_secondary_buttons" ADD CONSTRAINT "flDet_blocks_hero_secondary_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_hero" ADD CONSTRAINT "flDet_blocks_hero_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_hero" ADD CONSTRAINT "flDet_blocks_hero_hero_video_id_media_id_fk" FOREIGN KEY ("hero_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_hero" ADD CONSTRAINT "flDet_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_variable_table_rows_cells" ADD CONSTRAINT "flDet_blocks_variable_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_variable_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_variable_table_rows" ADD CONSTRAINT "flDet_blocks_variable_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_variable_table"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_variable_table" ADD CONSTRAINT "flDet_blocks_variable_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_table_custom" ADD CONSTRAINT "flDet_blocks_table_custom_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_draw_editor" ADD CONSTRAINT "flDet_blocks_draw_editor_image_picker_id_media_id_fk" FOREIGN KEY ("image_picker_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_draw_editor" ADD CONSTRAINT "flDet_blocks_draw_editor_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_text_image" ADD CONSTRAINT "flDet_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_text_image" ADD CONSTRAINT "flDet_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_banner" ADD CONSTRAINT "flDet_blocks_banner_banner_settings_background_image_id_media_id_fk" FOREIGN KEY ("banner_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_banner" ADD CONSTRAINT "flDet_blocks_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_benefits_benefits_row_item_heading_lines" ADD CONSTRAINT "flDet_blocks_benefits_benefits_row_item_heading_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_benefits_benefits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_benefits_benefits_row_item2_heading_lines" ADD CONSTRAINT "flDet_blocks_benefits_benefits_row_item2_heading_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_benefits_benefits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_benefits_benefits" ADD CONSTRAINT "flDet_blocks_benefits_benefits_row_item_image_id_media_id_fk" FOREIGN KEY ("row_item_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_benefits_benefits" ADD CONSTRAINT "flDet_blocks_benefits_benefits_row_item2_image_id_media_id_fk" FOREIGN KEY ("row_item2_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_benefits_benefits" ADD CONSTRAINT "flDet_blocks_benefits_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_benefits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_benefits" ADD CONSTRAINT "flDet_blocks_benefits_benefits_settings_background_image_id_media_id_fk" FOREIGN KEY ("benefits_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_benefits" ADD CONSTRAINT "flDet_blocks_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_contact_contact_info_highlighted_contacts" ADD CONSTRAINT "flDet_blocks_contact_contact_info_highlighted_contacts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_contact_contact_info_contact_items" ADD CONSTRAINT "flDet_blocks_contact_contact_info_contact_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_contact" ADD CONSTRAINT "flDet_blocks_contact_contact_settings_background_image_id_media_id_fk" FOREIGN KEY ("contact_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_contact" ADD CONSTRAINT "flDet_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_content" ADD CONSTRAINT "flDet_blocks_content_content_settings_background_image_id_media_id_fk" FOREIGN KEY ("content_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_content" ADD CONSTRAINT "flDet_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_features_features_with_title" ADD CONSTRAINT "flDet_blocks_features_features_with_title_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_features_features_uppercase" ADD CONSTRAINT "flDet_blocks_features_features_uppercase_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_features" ADD CONSTRAINT "flDet_blocks_features_features_settings_background_image_id_media_id_fk" FOREIGN KEY ("features_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_features" ADD CONSTRAINT "flDet_blocks_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_form_form_cfg_flat_disposition_options" ADD CONSTRAINT "flDet_blocks_form_form_cfg_flat_disposition_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_form"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_form_slide_out_boxes" ADD CONSTRAINT "flDet_blocks_form_slide_out_boxes_column_image_id_media_id_fk" FOREIGN KEY ("column_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_form_slide_out_boxes" ADD CONSTRAINT "flDet_blocks_form_slide_out_boxes_column_image2_id_media_id_fk" FOREIGN KEY ("column_image2_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_form_slide_out_boxes" ADD CONSTRAINT "flDet_blocks_form_slide_out_boxes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_form"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_form" ADD CONSTRAINT "flDet_blocks_form_form_settings_background_image_id_media_id_fk" FOREIGN KEY ("form_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_form" ADD CONSTRAINT "flDet_blocks_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_flats_snippets" ADD CONSTRAINT "flDet_blocks_flats_snippets_flats_set_background_image_id_media_id_fk" FOREIGN KEY ("flats_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_flats_snippets" ADD CONSTRAINT "flDet_blocks_flats_snippets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_gallery_simple_slider" ADD CONSTRAINT "flDet_blocks_gallery_simple_slider_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_gallery_simple_slider" ADD CONSTRAINT "flDet_blocks_gallery_simple_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_gallery_multi_slider_images" ADD CONSTRAINT "flDet_blocks_gallery_multi_slider_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_gallery_multi_slider_images" ADD CONSTRAINT "flDet_blocks_gallery_multi_slider_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_gallery_multi_slider"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_gallery_multi_slider" ADD CONSTRAINT "flDet_blocks_gallery_multi_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_gallery_full_width" ADD CONSTRAINT "flDet_blocks_gallery_full_width_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_gallery_full_width" ADD CONSTRAINT "flDet_blocks_gallery_full_width_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_gallery" ADD CONSTRAINT "flDet_blocks_gallery_gallery_settings_background_image_id_media_id_fk" FOREIGN KEY ("gallery_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_gallery" ADD CONSTRAINT "flDet_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_highlighted_text" ADD CONSTRAINT "flDet_blocks_highlighted_text_high_set_background_image_id_media_id_fk" FOREIGN KEY ("high_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_highlighted_text" ADD CONSTRAINT "flDet_blocks_highlighted_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_images_grid_images" ADD CONSTRAINT "flDet_blocks_images_grid_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_images_grid_images" ADD CONSTRAINT "flDet_blocks_images_grid_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_images_grid"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_images_grid" ADD CONSTRAINT "flDet_blocks_images_grid_images_settings_background_image_id_media_id_fk" FOREIGN KEY ("images_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_images_grid" ADD CONSTRAINT "flDet_blocks_images_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_image_pins_pins" ADD CONSTRAINT "flDet_blocks_image_pins_pins_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_image_pins_pins" ADD CONSTRAINT "flDet_blocks_image_pins_pins_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_image_pins"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_image_pins" ADD CONSTRAINT "flDet_blocks_image_pins_image_pins_set_background_image_id_media_id_fk" FOREIGN KEY ("image_pins_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_image_pins" ADD CONSTRAINT "flDet_blocks_image_pins_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_image_pins" ADD CONSTRAINT "flDet_blocks_image_pins_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_news_snippets" ADD CONSTRAINT "flDet_blocks_news_snippets_news_set_background_image_id_media_id_fk" FOREIGN KEY ("news_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_news_snippets" ADD CONSTRAINT "flDet_blocks_news_snippets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_numbers_numbers" ADD CONSTRAINT "flDet_blocks_numbers_numbers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_numbers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_numbers" ADD CONSTRAINT "flDet_blocks_numbers_numbers_settings_background_image_id_media_id_fk" FOREIGN KEY ("numbers_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_numbers" ADD CONSTRAINT "flDet_blocks_numbers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_timeline_timeline" ADD CONSTRAINT "flDet_blocks_timeline_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_timeline" ADD CONSTRAINT "flDet_blocks_timeline_timeline_settings_background_image_id_media_id_fk" FOREIGN KEY ("timeline_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_timeline" ADD CONSTRAINT "flDet_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_prices" ADD CONSTRAINT "flDet_blocks_prices_prices_settings_background_image_id_media_id_fk" FOREIGN KEY ("prices_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_prices" ADD CONSTRAINT "flDet_blocks_prices_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_interactive_picker_extended_views" ADD CONSTRAINT "flDet_blocks_interactive_picker_extended_views_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_interactive_picker_extended_views" ADD CONSTRAINT "flDet_blocks_interactive_picker_extended_views_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_interactive_picker_extended"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_interactive_picker_extended" ADD CONSTRAINT "flDet_blocks_interactive_picker_extended_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_visual_price_list_buildings" ADD CONSTRAINT "flDet_blocks_visual_price_list_buildings_building_id_buildings_id_fk" FOREIGN KEY ("building_id") REFERENCES "public"."buildings"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_visual_price_list_buildings" ADD CONSTRAINT "flDet_blocks_visual_price_list_buildings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_visual_price_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_visual_price_list" ADD CONSTRAINT "flDet_blocks_visual_price_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_shared_section" ADD CONSTRAINT "flDet_blocks_shared_section_shared_section_id_share_id_fk" FOREIGN KEY ("shared_section_id") REFERENCES "public"."share"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_shared_section" ADD CONSTRAINT "flDet_blocks_shared_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet" ADD CONSTRAINT "flDet_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet" ADD CONSTRAINT "flDet_meta_og_image_id_media_id_fk" FOREIGN KEY ("meta_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDetstoone" ADD CONSTRAINT "flDetstoone_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_rels" ADD CONSTRAINT "flDet_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_rels" ADD CONSTRAINT "flDet_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_rels" ADD CONSTRAINT "flDet_rels_flats_fk" FOREIGN KEY ("flats_id") REFERENCES "public"."flats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_rels" ADD CONSTRAINT "flDet_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "documents" ADD CONSTRAINT "documents_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "news" ADD CONSTRAINT "news_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "news" ADD CONSTRAINT "news_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "news" ADD CONSTRAINT "news_meta_og_image_id_media_id_fk" FOREIGN KEY ("meta_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsstoone" ADD CONSTRAINT "newsstoone_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "news_rels" ADD CONSTRAINT "news_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "news_rels" ADD CONSTRAINT "news_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_news_v" ADD CONSTRAINT "_news_v_parent_id_news_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."news"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_news_v" ADD CONSTRAINT "_news_v_version_project_id_projects_id_fk" FOREIGN KEY ("version_project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_news_v" ADD CONSTRAINT "_news_v_version_cover_image_id_media_id_fk" FOREIGN KEY ("version_cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_news_v" ADD CONSTRAINT "_news_v_version_meta_og_image_id_media_id_fk" FOREIGN KEY ("version_meta_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_news_vstoone" ADD CONSTRAINT "_news_vstoone_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_news_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_news_v_rels" ADD CONSTRAINT "_news_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_news_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_news_v_rels" ADD CONSTRAINT "_news_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_share_fk" FOREIGN KEY ("share_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_roles_fk" FOREIGN KEY ("roles_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_projects_fk" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_globalheader_fk" FOREIGN KEY ("globalheader_id") REFERENCES "public"."globalheader"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_globalfooter_fk" FOREIGN KEY ("globalfooter_id") REFERENCES "public"."globalfooter"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_buildings_fk" FOREIGN KEY ("buildings_id") REFERENCES "public"."buildings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_floors_fk" FOREIGN KEY ("floors_id") REFERENCES "public"."floors"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_flats_fk" FOREIGN KEY ("flats_id") REFERENCES "public"."flats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_project_global_settings_fk" FOREIGN KEY ("project_global_settings_id") REFERENCES "public"."project_global_settings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_flat_detail_page_fk" FOREIGN KEY ("flDet_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_documents_fk" FOREIGN KEY ("documents_id") REFERENCES "public"."documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "share_blocks_banner_order_idx" ON "share_blocks_banner" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_banner_parent_id_idx" ON "share_blocks_banner" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_banner_path_idx" ON "share_blocks_banner" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_banner_locale_idx" ON "share_blocks_banner" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_banner_banner_settings_banner_settings_background_image_idx" ON "share_blocks_banner" USING btree ("banner_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_benefits_benefits_row_item_heading_lines_order_idx" ON "share_blocks_benefits_benefits_row_item_heading_lines" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_benefits_benefits_row_item_heading_lines_parent_id_idx" ON "share_blocks_benefits_benefits_row_item_heading_lines" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_benefits_benefits_row_item_heading_lines_locale_idx" ON "share_blocks_benefits_benefits_row_item_heading_lines" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_benefits_benefits_row_item2_heading_lines_order_idx" ON "share_blocks_benefits_benefits_row_item2_heading_lines" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_benefits_benefits_row_item2_heading_lines_parent_id_idx" ON "share_blocks_benefits_benefits_row_item2_heading_lines" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_benefits_benefits_row_item2_heading_lines_locale_idx" ON "share_blocks_benefits_benefits_row_item2_heading_lines" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_benefits_benefits_order_idx" ON "share_blocks_benefits_benefits" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_benefits_benefits_parent_id_idx" ON "share_blocks_benefits_benefits" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_benefits_benefits_locale_idx" ON "share_blocks_benefits_benefits" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_benefits_benefits_row_item_row_item_image_idx" ON "share_blocks_benefits_benefits" USING btree ("row_item_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_benefits_benefits_row_item2_row_item2_image_idx" ON "share_blocks_benefits_benefits" USING btree ("row_item2_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_benefits_order_idx" ON "share_blocks_benefits" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_benefits_parent_id_idx" ON "share_blocks_benefits" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_benefits_path_idx" ON "share_blocks_benefits" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_benefits_locale_idx" ON "share_blocks_benefits" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_benefits_benefits_settings_benefits_settings_background_image_idx" ON "share_blocks_benefits" USING btree ("benefits_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_contact_contact_info_highlighted_contacts_order_idx" ON "share_blocks_contact_contact_info_highlighted_contacts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_contact_contact_info_highlighted_contacts_parent_id_idx" ON "share_blocks_contact_contact_info_highlighted_contacts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_contact_contact_info_highlighted_contacts_locale_idx" ON "share_blocks_contact_contact_info_highlighted_contacts" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_contact_contact_info_contact_items_order_idx" ON "share_blocks_contact_contact_info_contact_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_contact_contact_info_contact_items_parent_id_idx" ON "share_blocks_contact_contact_info_contact_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_contact_contact_info_contact_items_locale_idx" ON "share_blocks_contact_contact_info_contact_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_contact_order_idx" ON "share_blocks_contact" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_contact_parent_id_idx" ON "share_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_contact_path_idx" ON "share_blocks_contact" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_contact_locale_idx" ON "share_blocks_contact" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_contact_contact_settings_contact_settings_background_image_idx" ON "share_blocks_contact" USING btree ("contact_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_content_order_idx" ON "share_blocks_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_content_parent_id_idx" ON "share_blocks_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_content_path_idx" ON "share_blocks_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_content_locale_idx" ON "share_blocks_content" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_content_content_settings_content_settings_background_image_idx" ON "share_blocks_content" USING btree ("content_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_draw_editor_order_idx" ON "share_blocks_draw_editor" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_draw_editor_parent_id_idx" ON "share_blocks_draw_editor" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_draw_editor_path_idx" ON "share_blocks_draw_editor" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_draw_editor_locale_idx" ON "share_blocks_draw_editor" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_draw_editor_image_picker_idx" ON "share_blocks_draw_editor" USING btree ("image_picker_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_features_features_with_title_order_idx" ON "share_blocks_features_features_with_title" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_features_features_with_title_parent_id_idx" ON "share_blocks_features_features_with_title" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_features_features_with_title_locale_idx" ON "share_blocks_features_features_with_title" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_features_features_uppercase_order_idx" ON "share_blocks_features_features_uppercase" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_features_features_uppercase_parent_id_idx" ON "share_blocks_features_features_uppercase" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_features_features_uppercase_locale_idx" ON "share_blocks_features_features_uppercase" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_features_order_idx" ON "share_blocks_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_features_parent_id_idx" ON "share_blocks_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_features_path_idx" ON "share_blocks_features" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_features_locale_idx" ON "share_blocks_features" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_features_features_settings_features_settings_background_image_idx" ON "share_blocks_features" USING btree ("features_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_form_form_cfg_flat_disposition_options_order_idx" ON "share_blocks_form_form_cfg_flat_disposition_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_form_form_cfg_flat_disposition_options_parent_id_idx" ON "share_blocks_form_form_cfg_flat_disposition_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_form_form_cfg_flat_disposition_options_locale_idx" ON "share_blocks_form_form_cfg_flat_disposition_options" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_form_slide_out_boxes_order_idx" ON "share_blocks_form_slide_out_boxes" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_form_slide_out_boxes_parent_id_idx" ON "share_blocks_form_slide_out_boxes" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_form_slide_out_boxes_locale_idx" ON "share_blocks_form_slide_out_boxes" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_form_slide_out_boxes_column_column_image_idx" ON "share_blocks_form_slide_out_boxes" USING btree ("column_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_form_slide_out_boxes_column_column_image2_idx" ON "share_blocks_form_slide_out_boxes" USING btree ("column_image2_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_form_order_idx" ON "share_blocks_form" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_form_parent_id_idx" ON "share_blocks_form" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_form_path_idx" ON "share_blocks_form" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_form_locale_idx" ON "share_blocks_form" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_form_form_settings_form_settings_background_image_idx" ON "share_blocks_form" USING btree ("form_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_flats_snippets_order_idx" ON "share_blocks_flats_snippets" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_flats_snippets_parent_id_idx" ON "share_blocks_flats_snippets" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_flats_snippets_path_idx" ON "share_blocks_flats_snippets" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_flats_snippets_locale_idx" ON "share_blocks_flats_snippets" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_flats_snippets_flats_set_flats_set_background_image_idx" ON "share_blocks_flats_snippets" USING btree ("flats_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_gallery_simple_slider_order_idx" ON "share_blocks_gallery_simple_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_gallery_simple_slider_parent_id_idx" ON "share_blocks_gallery_simple_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_gallery_simple_slider_locale_idx" ON "share_blocks_gallery_simple_slider" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_gallery_simple_slider_image_idx" ON "share_blocks_gallery_simple_slider" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_gallery_multi_slider_images_order_idx" ON "share_blocks_gallery_multi_slider_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_gallery_multi_slider_images_parent_id_idx" ON "share_blocks_gallery_multi_slider_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_gallery_multi_slider_images_locale_idx" ON "share_blocks_gallery_multi_slider_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_gallery_multi_slider_images_image_idx" ON "share_blocks_gallery_multi_slider_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_gallery_multi_slider_order_idx" ON "share_blocks_gallery_multi_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_gallery_multi_slider_parent_id_idx" ON "share_blocks_gallery_multi_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_gallery_multi_slider_locale_idx" ON "share_blocks_gallery_multi_slider" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_gallery_full_width_order_idx" ON "share_blocks_gallery_full_width" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_gallery_full_width_parent_id_idx" ON "share_blocks_gallery_full_width" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_gallery_full_width_locale_idx" ON "share_blocks_gallery_full_width" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_gallery_full_width_image_idx" ON "share_blocks_gallery_full_width" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_gallery_order_idx" ON "share_blocks_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_gallery_parent_id_idx" ON "share_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_gallery_path_idx" ON "share_blocks_gallery" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_gallery_locale_idx" ON "share_blocks_gallery" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_gallery_gallery_settings_gallery_settings_background_image_idx" ON "share_blocks_gallery" USING btree ("gallery_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_hero_hero_slideshow_order_idx" ON "share_blocks_hero_hero_slideshow" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_hero_hero_slideshow_parent_id_idx" ON "share_blocks_hero_hero_slideshow" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_hero_hero_slideshow_locale_idx" ON "share_blocks_hero_hero_slideshow" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_hero_hero_slideshow_image_idx" ON "share_blocks_hero_hero_slideshow" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_hero_main_buttons_order_idx" ON "share_blocks_hero_main_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_hero_main_buttons_parent_id_idx" ON "share_blocks_hero_main_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_hero_main_buttons_locale_idx" ON "share_blocks_hero_main_buttons" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_hero_secondary_buttons_order_idx" ON "share_blocks_hero_secondary_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_hero_secondary_buttons_parent_id_idx" ON "share_blocks_hero_secondary_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_hero_secondary_buttons_locale_idx" ON "share_blocks_hero_secondary_buttons" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_hero_order_idx" ON "share_blocks_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_hero_parent_id_idx" ON "share_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_hero_path_idx" ON "share_blocks_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_hero_locale_idx" ON "share_blocks_hero" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_hero_hero_image_idx" ON "share_blocks_hero" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_hero_hero_video_idx" ON "share_blocks_hero" USING btree ("hero_video_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_highlighted_text_order_idx" ON "share_blocks_highlighted_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_highlighted_text_parent_id_idx" ON "share_blocks_highlighted_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_highlighted_text_path_idx" ON "share_blocks_highlighted_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_highlighted_text_locale_idx" ON "share_blocks_highlighted_text" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_highlighted_text_high_set_high_set_background_image_idx" ON "share_blocks_highlighted_text" USING btree ("high_set_background_image_id");
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
  CREATE INDEX IF NOT EXISTS "share_blocks_images_grid_images_order_idx" ON "share_blocks_images_grid_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_images_grid_images_parent_id_idx" ON "share_blocks_images_grid_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_images_grid_images_locale_idx" ON "share_blocks_images_grid_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_images_grid_images_image_idx" ON "share_blocks_images_grid_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_images_grid_order_idx" ON "share_blocks_images_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_images_grid_parent_id_idx" ON "share_blocks_images_grid" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_images_grid_path_idx" ON "share_blocks_images_grid" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_images_grid_locale_idx" ON "share_blocks_images_grid" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_images_grid_images_settings_images_settings_background_image_idx" ON "share_blocks_images_grid" USING btree ("images_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_image_pins_pins_order_idx" ON "share_blocks_image_pins_pins" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_image_pins_pins_parent_id_idx" ON "share_blocks_image_pins_pins" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_image_pins_pins_locale_idx" ON "share_blocks_image_pins_pins" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_image_pins_pins_logo_idx" ON "share_blocks_image_pins_pins" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_image_pins_order_idx" ON "share_blocks_image_pins" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_image_pins_parent_id_idx" ON "share_blocks_image_pins" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_image_pins_path_idx" ON "share_blocks_image_pins" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_image_pins_locale_idx" ON "share_blocks_image_pins" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_image_pins_image_pins_set_image_pins_set_background_image_idx" ON "share_blocks_image_pins" USING btree ("image_pins_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_image_pins_background_image_idx" ON "share_blocks_image_pins" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_news_snippets_order_idx" ON "share_blocks_news_snippets" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_news_snippets_parent_id_idx" ON "share_blocks_news_snippets" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_news_snippets_path_idx" ON "share_blocks_news_snippets" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_news_snippets_locale_idx" ON "share_blocks_news_snippets" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_news_snippets_news_set_news_set_background_image_idx" ON "share_blocks_news_snippets" USING btree ("news_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_numbers_numbers_order_idx" ON "share_blocks_numbers_numbers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_numbers_numbers_parent_id_idx" ON "share_blocks_numbers_numbers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_numbers_numbers_locale_idx" ON "share_blocks_numbers_numbers" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_numbers_order_idx" ON "share_blocks_numbers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_numbers_parent_id_idx" ON "share_blocks_numbers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_numbers_path_idx" ON "share_blocks_numbers" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_numbers_locale_idx" ON "share_blocks_numbers" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_numbers_numbers_settings_numbers_settings_background_image_idx" ON "share_blocks_numbers" USING btree ("numbers_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_timeline_timeline_order_idx" ON "share_blocks_timeline_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_timeline_timeline_parent_id_idx" ON "share_blocks_timeline_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_timeline_timeline_locale_idx" ON "share_blocks_timeline_timeline" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_timeline_order_idx" ON "share_blocks_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_timeline_parent_id_idx" ON "share_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_timeline_path_idx" ON "share_blocks_timeline" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_timeline_locale_idx" ON "share_blocks_timeline" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_timeline_timeline_settings_timeline_settings_background_image_idx" ON "share_blocks_timeline" USING btree ("timeline_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_prices_order_idx" ON "share_blocks_prices" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_prices_parent_id_idx" ON "share_blocks_prices" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_prices_path_idx" ON "share_blocks_prices" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_prices_locale_idx" ON "share_blocks_prices" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_prices_prices_settings_prices_settings_background_image_idx" ON "share_blocks_prices" USING btree ("prices_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_interactive_picker_extended_views_order_idx" ON "share_blocks_interactive_picker_extended_views" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_interactive_picker_extended_views_parent_id_idx" ON "share_blocks_interactive_picker_extended_views" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_interactive_picker_extended_views_locale_idx" ON "share_blocks_interactive_picker_extended_views" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_interactive_picker_extended_views_image_idx" ON "share_blocks_interactive_picker_extended_views" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_interactive_picker_extended_order_idx" ON "share_blocks_interactive_picker_extended" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_interactive_picker_extended_parent_id_idx" ON "share_blocks_interactive_picker_extended" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_interactive_picker_extended_path_idx" ON "share_blocks_interactive_picker_extended" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_interactive_picker_extended_locale_idx" ON "share_blocks_interactive_picker_extended" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_visual_price_list_buildings_order_idx" ON "share_blocks_visual_price_list_buildings" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_visual_price_list_buildings_parent_id_idx" ON "share_blocks_visual_price_list_buildings" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_visual_price_list_buildings_locale_idx" ON "share_blocks_visual_price_list_buildings" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_visual_price_list_buildings_building_idx" ON "share_blocks_visual_price_list_buildings" USING btree ("building_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_visual_price_list_order_idx" ON "share_blocks_visual_price_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_visual_price_list_parent_id_idx" ON "share_blocks_visual_price_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_visual_price_list_path_idx" ON "share_blocks_visual_price_list" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_visual_price_list_locale_idx" ON "share_blocks_visual_price_list" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_variable_table_rows_cells_order_idx" ON "share_blocks_variable_table_rows_cells" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_variable_table_rows_cells_parent_id_idx" ON "share_blocks_variable_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_variable_table_rows_cells_locale_idx" ON "share_blocks_variable_table_rows_cells" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_variable_table_rows_order_idx" ON "share_blocks_variable_table_rows" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_variable_table_rows_parent_id_idx" ON "share_blocks_variable_table_rows" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_variable_table_rows_locale_idx" ON "share_blocks_variable_table_rows" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_variable_table_order_idx" ON "share_blocks_variable_table" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_variable_table_parent_id_idx" ON "share_blocks_variable_table" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_variable_table_path_idx" ON "share_blocks_variable_table" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_variable_table_locale_idx" ON "share_blocks_variable_table" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_table_custom_order_idx" ON "share_blocks_table_custom" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_table_custom_parent_id_idx" ON "share_blocks_table_custom" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_table_custom_path_idx" ON "share_blocks_table_custom" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_table_custom_locale_idx" ON "share_blocks_table_custom" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_text_image_order_idx" ON "share_blocks_text_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_text_image_parent_id_idx" ON "share_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_text_image_path_idx" ON "share_blocks_text_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_text_image_locale_idx" ON "share_blocks_text_image" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_text_image_image_idx" ON "share_blocks_text_image" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_shared_section_order_idx" ON "share_blocks_shared_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_shared_section_parent_id_idx" ON "share_blocks_shared_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_shared_section_path_idx" ON "share_blocks_shared_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_shared_section_locale_idx" ON "share_blocks_shared_section" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_shared_section_shared_section_idx" ON "share_blocks_shared_section" USING btree ("shared_section_id");
  CREATE INDEX IF NOT EXISTS "share_project_idx" ON "share" USING btree ("project_id");
  CREATE INDEX IF NOT EXISTS "share_updated_at_idx" ON "share" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "share_created_at_idx" ON "share" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "share_slug_idx" ON "sharestoone" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "sharestoone_locale_parent_id_unique" ON "sharestoone" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "share_rels_order_idx" ON "share_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "share_rels_parent_idx" ON "share_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "share_rels_path_idx" ON "share_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "share_rels_locale_idx" ON "share_rels" USING btree ("locale");
  CREATE INDEX IF NOT EXISTS "share_rels_pages_id_idx" ON "share_rels" USING btree ("pages_id","locale");
  CREATE INDEX IF NOT EXISTS "share_rels_flats_id_idx" ON "share_rels" USING btree ("flats_id","locale");
  CREATE INDEX IF NOT EXISTS "share_rels_news_id_idx" ON "share_rels" USING btree ("news_id","locale");
  CREATE INDEX IF NOT EXISTS "roles_permissions_projects_order_idx" ON "roles_permissions_projects" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "roles_permissions_projects_parent_idx" ON "roles_permissions_projects" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "roles_permissions_pages_order_idx" ON "roles_permissions_pages" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "roles_permissions_pages_parent_idx" ON "roles_permissions_pages" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "roles_permissions_globalheader_order_idx" ON "roles_permissions_globalheader" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "roles_permissions_globalheader_parent_idx" ON "roles_permissions_globalheader" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "roles_permissions_globalfooter_order_idx" ON "roles_permissions_globalfooter" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "roles_permissions_globalfooter_parent_idx" ON "roles_permissions_globalfooter" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "roles_permissions_project_global_settings_order_idx" ON "roles_permissions_project_global_settings" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "roles_permissions_project_global_settings_parent_idx" ON "roles_permissions_project_global_settings" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "roles_permissions_buildings_order_idx" ON "roles_permissions_buildings" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "roles_permissions_buildings_parent_idx" ON "roles_permissions_buildings" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "roles_permissions_flats_order_idx" ON "roles_permissions_flats" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "roles_permissions_flats_parent_idx" ON "roles_permissions_flats" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "roles_permissions_flat_detail_page_order_idx" ON "roles_permissions_flat_detail_page" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "roles_permissions_flat_detail_page_parent_idx" ON "roles_permissions_flat_detail_page" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "roles_permissions_sectors_order_idx" ON "roles_permissions_sectors" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "roles_permissions_sectors_parent_idx" ON "roles_permissions_sectors" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "roles_permissions_floors_order_idx" ON "roles_permissions_floors" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "roles_permissions_floors_parent_idx" ON "roles_permissions_floors" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "roles_permissions_news_order_idx" ON "roles_permissions_news" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "roles_permissions_news_parent_idx" ON "roles_permissions_news" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "roles_permissions_media_order_idx" ON "roles_permissions_media" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "roles_permissions_media_parent_idx" ON "roles_permissions_media" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "roles_permissions_documents_order_idx" ON "roles_permissions_documents" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "roles_permissions_documents_parent_idx" ON "roles_permissions_documents" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "roles_permissions_share_order_idx" ON "roles_permissions_share" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "roles_permissions_share_parent_idx" ON "roles_permissions_share" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "roles_updated_at_idx" ON "roles" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "roles_created_at_idx" ON "roles" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "roles_rels_order_idx" ON "roles_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "roles_rels_parent_idx" ON "roles_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "roles_rels_path_idx" ON "roles_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "roles_rels_projects_id_idx" ON "roles_rels" USING btree ("projects_id");
  CREATE INDEX IF NOT EXISTS "users_role_idx" ON "users" USING btree ("role_id");
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "users_rels_order_idx" ON "users_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "users_rels_parent_idx" ON "users_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "users_rels_path_idx" ON "users_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "users_rels_projects_id_idx" ON "users_rels" USING btree ("projects_id");
  CREATE INDEX IF NOT EXISTS "media_project_idx" ON "media" USING btree ("project_id");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "projects_standards_order_idx" ON "projects_standards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "projects_standards_parent_id_idx" ON "projects_standards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "projects_standards_standard_file_idx" ON "projects_standards" USING btree ("standard_file_id");
  CREATE INDEX IF NOT EXISTS "projects_plans_order_idx" ON "projects_plans" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "projects_plans_parent_id_idx" ON "projects_plans" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "projects_plans_plan_file_idx" ON "projects_plans" USING btree ("plan_file_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "projects_slug_idx" ON "projects" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "projects_updated_at_idx" ON "projects" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "projects_created_at_idx" ON "projects" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_hero_slideshow_order_idx" ON "pages_blocks_hero_hero_slideshow" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_hero_slideshow_parent_id_idx" ON "pages_blocks_hero_hero_slideshow" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_hero_slideshow_locale_idx" ON "pages_blocks_hero_hero_slideshow" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_hero_slideshow_image_idx" ON "pages_blocks_hero_hero_slideshow" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_main_buttons_order_idx" ON "pages_blocks_hero_main_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_main_buttons_parent_id_idx" ON "pages_blocks_hero_main_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_main_buttons_locale_idx" ON "pages_blocks_hero_main_buttons" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_secondary_buttons_order_idx" ON "pages_blocks_hero_secondary_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_secondary_buttons_parent_id_idx" ON "pages_blocks_hero_secondary_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_secondary_buttons_locale_idx" ON "pages_blocks_hero_secondary_buttons" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_locale_idx" ON "pages_blocks_hero" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_hero_image_idx" ON "pages_blocks_hero" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_hero_video_idx" ON "pages_blocks_hero" USING btree ("hero_video_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_variable_table_rows_cells_order_idx" ON "pages_blocks_variable_table_rows_cells" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_variable_table_rows_cells_parent_id_idx" ON "pages_blocks_variable_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_variable_table_rows_cells_locale_idx" ON "pages_blocks_variable_table_rows_cells" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_variable_table_rows_order_idx" ON "pages_blocks_variable_table_rows" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_variable_table_rows_parent_id_idx" ON "pages_blocks_variable_table_rows" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_variable_table_rows_locale_idx" ON "pages_blocks_variable_table_rows" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_variable_table_order_idx" ON "pages_blocks_variable_table" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_variable_table_parent_id_idx" ON "pages_blocks_variable_table" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_variable_table_path_idx" ON "pages_blocks_variable_table" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_variable_table_locale_idx" ON "pages_blocks_variable_table" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_table_custom_order_idx" ON "pages_blocks_table_custom" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_table_custom_parent_id_idx" ON "pages_blocks_table_custom" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_table_custom_path_idx" ON "pages_blocks_table_custom" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_table_custom_locale_idx" ON "pages_blocks_table_custom" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_draw_editor_order_idx" ON "pages_blocks_draw_editor" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_draw_editor_parent_id_idx" ON "pages_blocks_draw_editor" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_draw_editor_path_idx" ON "pages_blocks_draw_editor" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_draw_editor_locale_idx" ON "pages_blocks_draw_editor" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_draw_editor_image_picker_idx" ON "pages_blocks_draw_editor" USING btree ("image_picker_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_order_idx" ON "pages_blocks_text_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_parent_id_idx" ON "pages_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_path_idx" ON "pages_blocks_text_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_locale_idx" ON "pages_blocks_text_image" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_image_image_idx" ON "pages_blocks_text_image" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner_order_idx" ON "pages_blocks_banner" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner_parent_id_idx" ON "pages_blocks_banner" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner_path_idx" ON "pages_blocks_banner" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner_locale_idx" ON "pages_blocks_banner" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner_banner_settings_banner_settings_background_image_idx" ON "pages_blocks_banner" USING btree ("banner_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_benefits_benefits_row_item_heading_lines_order_idx" ON "pages_blocks_benefits_benefits_row_item_heading_lines" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_benefits_benefits_row_item_heading_lines_parent_id_idx" ON "pages_blocks_benefits_benefits_row_item_heading_lines" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_benefits_benefits_row_item_heading_lines_locale_idx" ON "pages_blocks_benefits_benefits_row_item_heading_lines" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_benefits_benefits_row_item2_heading_lines_order_idx" ON "pages_blocks_benefits_benefits_row_item2_heading_lines" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_benefits_benefits_row_item2_heading_lines_parent_id_idx" ON "pages_blocks_benefits_benefits_row_item2_heading_lines" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_benefits_benefits_row_item2_heading_lines_locale_idx" ON "pages_blocks_benefits_benefits_row_item2_heading_lines" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_benefits_benefits_order_idx" ON "pages_blocks_benefits_benefits" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_benefits_benefits_parent_id_idx" ON "pages_blocks_benefits_benefits" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_benefits_benefits_locale_idx" ON "pages_blocks_benefits_benefits" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_benefits_benefits_row_item_row_item_image_idx" ON "pages_blocks_benefits_benefits" USING btree ("row_item_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_benefits_benefits_row_item2_row_item2_image_idx" ON "pages_blocks_benefits_benefits" USING btree ("row_item2_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_benefits_order_idx" ON "pages_blocks_benefits" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_benefits_parent_id_idx" ON "pages_blocks_benefits" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_benefits_path_idx" ON "pages_blocks_benefits" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_benefits_locale_idx" ON "pages_blocks_benefits" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_benefits_benefits_settings_benefits_settings_background_image_idx" ON "pages_blocks_benefits" USING btree ("benefits_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_contact_info_highlighted_contacts_order_idx" ON "pages_blocks_contact_contact_info_highlighted_contacts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_contact_info_highlighted_contacts_parent_id_idx" ON "pages_blocks_contact_contact_info_highlighted_contacts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_contact_info_highlighted_contacts_locale_idx" ON "pages_blocks_contact_contact_info_highlighted_contacts" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_contact_info_contact_items_order_idx" ON "pages_blocks_contact_contact_info_contact_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_contact_info_contact_items_parent_id_idx" ON "pages_blocks_contact_contact_info_contact_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_contact_info_contact_items_locale_idx" ON "pages_blocks_contact_contact_info_contact_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_order_idx" ON "pages_blocks_contact" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_parent_id_idx" ON "pages_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_path_idx" ON "pages_blocks_contact" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_locale_idx" ON "pages_blocks_contact" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_contact_settings_contact_settings_background_image_idx" ON "pages_blocks_contact" USING btree ("contact_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_order_idx" ON "pages_blocks_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_path_idx" ON "pages_blocks_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_locale_idx" ON "pages_blocks_content" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_content_settings_content_settings_background_image_idx" ON "pages_blocks_content" USING btree ("content_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_features_features_with_title_order_idx" ON "pages_blocks_features_features_with_title" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_features_features_with_title_parent_id_idx" ON "pages_blocks_features_features_with_title" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_features_features_with_title_locale_idx" ON "pages_blocks_features_features_with_title" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_features_features_uppercase_order_idx" ON "pages_blocks_features_features_uppercase" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_features_features_uppercase_parent_id_idx" ON "pages_blocks_features_features_uppercase" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_features_features_uppercase_locale_idx" ON "pages_blocks_features_features_uppercase" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_features_order_idx" ON "pages_blocks_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_features_parent_id_idx" ON "pages_blocks_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_features_path_idx" ON "pages_blocks_features" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_features_locale_idx" ON "pages_blocks_features" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_features_features_settings_features_settings_background_image_idx" ON "pages_blocks_features" USING btree ("features_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_form_cfg_flat_disposition_options_order_idx" ON "pages_blocks_form_form_cfg_flat_disposition_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_form_cfg_flat_disposition_options_parent_id_idx" ON "pages_blocks_form_form_cfg_flat_disposition_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_form_cfg_flat_disposition_options_locale_idx" ON "pages_blocks_form_form_cfg_flat_disposition_options" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_slide_out_boxes_order_idx" ON "pages_blocks_form_slide_out_boxes" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_slide_out_boxes_parent_id_idx" ON "pages_blocks_form_slide_out_boxes" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_slide_out_boxes_locale_idx" ON "pages_blocks_form_slide_out_boxes" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_slide_out_boxes_column_column_image_idx" ON "pages_blocks_form_slide_out_boxes" USING btree ("column_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_slide_out_boxes_column_column_image2_idx" ON "pages_blocks_form_slide_out_boxes" USING btree ("column_image2_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_order_idx" ON "pages_blocks_form" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_parent_id_idx" ON "pages_blocks_form" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_path_idx" ON "pages_blocks_form" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_locale_idx" ON "pages_blocks_form" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_form_settings_form_settings_background_image_idx" ON "pages_blocks_form" USING btree ("form_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_flats_snippets_order_idx" ON "pages_blocks_flats_snippets" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_flats_snippets_parent_id_idx" ON "pages_blocks_flats_snippets" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_flats_snippets_path_idx" ON "pages_blocks_flats_snippets" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_flats_snippets_locale_idx" ON "pages_blocks_flats_snippets" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_flats_snippets_flats_set_flats_set_background_image_idx" ON "pages_blocks_flats_snippets" USING btree ("flats_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_simple_slider_order_idx" ON "pages_blocks_gallery_simple_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_simple_slider_parent_id_idx" ON "pages_blocks_gallery_simple_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_simple_slider_locale_idx" ON "pages_blocks_gallery_simple_slider" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_simple_slider_image_idx" ON "pages_blocks_gallery_simple_slider" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_multi_slider_images_order_idx" ON "pages_blocks_gallery_multi_slider_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_multi_slider_images_parent_id_idx" ON "pages_blocks_gallery_multi_slider_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_multi_slider_images_locale_idx" ON "pages_blocks_gallery_multi_slider_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_multi_slider_images_image_idx" ON "pages_blocks_gallery_multi_slider_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_multi_slider_order_idx" ON "pages_blocks_gallery_multi_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_multi_slider_parent_id_idx" ON "pages_blocks_gallery_multi_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_multi_slider_locale_idx" ON "pages_blocks_gallery_multi_slider" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_full_width_order_idx" ON "pages_blocks_gallery_full_width" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_full_width_parent_id_idx" ON "pages_blocks_gallery_full_width" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_full_width_locale_idx" ON "pages_blocks_gallery_full_width" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_full_width_image_idx" ON "pages_blocks_gallery_full_width" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_order_idx" ON "pages_blocks_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_parent_id_idx" ON "pages_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_path_idx" ON "pages_blocks_gallery" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_locale_idx" ON "pages_blocks_gallery" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_gallery_settings_gallery_settings_background_image_idx" ON "pages_blocks_gallery" USING btree ("gallery_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_highlighted_text_order_idx" ON "pages_blocks_highlighted_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_highlighted_text_parent_id_idx" ON "pages_blocks_highlighted_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_highlighted_text_path_idx" ON "pages_blocks_highlighted_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_highlighted_text_locale_idx" ON "pages_blocks_highlighted_text" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_highlighted_text_high_set_high_set_background_image_idx" ON "pages_blocks_highlighted_text" USING btree ("high_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_images_grid_images_order_idx" ON "pages_blocks_images_grid_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_images_grid_images_parent_id_idx" ON "pages_blocks_images_grid_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_images_grid_images_locale_idx" ON "pages_blocks_images_grid_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_images_grid_images_image_idx" ON "pages_blocks_images_grid_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_images_grid_order_idx" ON "pages_blocks_images_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_images_grid_parent_id_idx" ON "pages_blocks_images_grid" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_images_grid_path_idx" ON "pages_blocks_images_grid" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_images_grid_locale_idx" ON "pages_blocks_images_grid" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_images_grid_images_settings_images_settings_background_image_idx" ON "pages_blocks_images_grid" USING btree ("images_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_pins_pins_order_idx" ON "pages_blocks_image_pins_pins" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_pins_pins_parent_id_idx" ON "pages_blocks_image_pins_pins" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_pins_pins_locale_idx" ON "pages_blocks_image_pins_pins" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_pins_pins_logo_idx" ON "pages_blocks_image_pins_pins" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_pins_order_idx" ON "pages_blocks_image_pins" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_pins_parent_id_idx" ON "pages_blocks_image_pins" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_pins_path_idx" ON "pages_blocks_image_pins" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_pins_locale_idx" ON "pages_blocks_image_pins" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_pins_image_pins_set_image_pins_set_background_image_idx" ON "pages_blocks_image_pins" USING btree ("image_pins_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_pins_background_image_idx" ON "pages_blocks_image_pins" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_news_snippets_order_idx" ON "pages_blocks_news_snippets" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_news_snippets_parent_id_idx" ON "pages_blocks_news_snippets" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_news_snippets_path_idx" ON "pages_blocks_news_snippets" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_news_snippets_locale_idx" ON "pages_blocks_news_snippets" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_news_snippets_news_set_news_set_background_image_idx" ON "pages_blocks_news_snippets" USING btree ("news_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_numbers_numbers_order_idx" ON "pages_blocks_numbers_numbers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_numbers_numbers_parent_id_idx" ON "pages_blocks_numbers_numbers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_numbers_numbers_locale_idx" ON "pages_blocks_numbers_numbers" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_numbers_order_idx" ON "pages_blocks_numbers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_numbers_parent_id_idx" ON "pages_blocks_numbers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_numbers_path_idx" ON "pages_blocks_numbers" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_numbers_locale_idx" ON "pages_blocks_numbers" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_numbers_numbers_settings_numbers_settings_background_image_idx" ON "pages_blocks_numbers" USING btree ("numbers_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline_timeline_order_idx" ON "pages_blocks_timeline_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline_timeline_parent_id_idx" ON "pages_blocks_timeline_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline_timeline_locale_idx" ON "pages_blocks_timeline_timeline" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline_order_idx" ON "pages_blocks_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline_parent_id_idx" ON "pages_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline_path_idx" ON "pages_blocks_timeline" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline_locale_idx" ON "pages_blocks_timeline" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline_timeline_settings_timeline_settings_background_image_idx" ON "pages_blocks_timeline" USING btree ("timeline_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_prices_order_idx" ON "pages_blocks_prices" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_prices_parent_id_idx" ON "pages_blocks_prices" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_prices_path_idx" ON "pages_blocks_prices" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_prices_locale_idx" ON "pages_blocks_prices" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_prices_prices_settings_prices_settings_background_image_idx" ON "pages_blocks_prices" USING btree ("prices_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_interactive_picker_extended_views_order_idx" ON "pages_blocks_interactive_picker_extended_views" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_interactive_picker_extended_views_parent_id_idx" ON "pages_blocks_interactive_picker_extended_views" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_interactive_picker_extended_views_locale_idx" ON "pages_blocks_interactive_picker_extended_views" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_interactive_picker_extended_views_image_idx" ON "pages_blocks_interactive_picker_extended_views" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_interactive_picker_extended_order_idx" ON "pages_blocks_interactive_picker_extended" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_interactive_picker_extended_parent_id_idx" ON "pages_blocks_interactive_picker_extended" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_interactive_picker_extended_path_idx" ON "pages_blocks_interactive_picker_extended" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_interactive_picker_extended_locale_idx" ON "pages_blocks_interactive_picker_extended" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_visual_price_list_buildings_order_idx" ON "pages_blocks_visual_price_list_buildings" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_visual_price_list_buildings_parent_id_idx" ON "pages_blocks_visual_price_list_buildings" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_visual_price_list_buildings_locale_idx" ON "pages_blocks_visual_price_list_buildings" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_visual_price_list_buildings_building_idx" ON "pages_blocks_visual_price_list_buildings" USING btree ("building_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_visual_price_list_order_idx" ON "pages_blocks_visual_price_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_visual_price_list_parent_id_idx" ON "pages_blocks_visual_price_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_visual_price_list_path_idx" ON "pages_blocks_visual_price_list" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_visual_price_list_locale_idx" ON "pages_blocks_visual_price_list" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_shared_section_order_idx" ON "pages_blocks_shared_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_shared_section_parent_id_idx" ON "pages_blocks_shared_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_shared_section_path_idx" ON "pages_blocks_shared_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_shared_section_locale_idx" ON "pages_blocks_shared_section" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_shared_section_shared_section_idx" ON "pages_blocks_shared_section" USING btree ("shared_section_id");
  CREATE INDEX IF NOT EXISTS "pages_project_idx" ON "pages" USING btree ("project_id");
  CREATE INDEX IF NOT EXISTS "pages_meta_meta_og_image_idx" ON "pages" USING btree ("meta_og_image_id");
  CREATE INDEX IF NOT EXISTS "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "pages_slug_idx" ON "pagesstoone" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "pagesstoone_locale_parent_id_unique" ON "pagesstoone" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "pages_rels_locale_idx" ON "pages_rels" USING btree ("locale");
  CREATE INDEX IF NOT EXISTS "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id","locale");
  CREATE INDEX IF NOT EXISTS "pages_rels_flats_id_idx" ON "pages_rels" USING btree ("flats_id","locale");
  CREATE INDEX IF NOT EXISTS "pages_rels_news_id_idx" ON "pages_rels" USING btree ("news_id","locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_hero_slideshow_order_idx" ON "_pages_v_blocks_hero_hero_slideshow" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_hero_slideshow_parent_id_idx" ON "_pages_v_blocks_hero_hero_slideshow" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_hero_slideshow_locale_idx" ON "_pages_v_blocks_hero_hero_slideshow" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_hero_slideshow_image_idx" ON "_pages_v_blocks_hero_hero_slideshow" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_main_buttons_order_idx" ON "_pages_v_blocks_hero_main_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_main_buttons_parent_id_idx" ON "_pages_v_blocks_hero_main_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_main_buttons_locale_idx" ON "_pages_v_blocks_hero_main_buttons" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_secondary_buttons_order_idx" ON "_pages_v_blocks_hero_secondary_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_secondary_buttons_parent_id_idx" ON "_pages_v_blocks_hero_secondary_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_secondary_buttons_locale_idx" ON "_pages_v_blocks_hero_secondary_buttons" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_order_idx" ON "_pages_v_blocks_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_parent_id_idx" ON "_pages_v_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_path_idx" ON "_pages_v_blocks_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_locale_idx" ON "_pages_v_blocks_hero" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_hero_image_idx" ON "_pages_v_blocks_hero" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_hero_video_idx" ON "_pages_v_blocks_hero" USING btree ("hero_video_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_variable_table_rows_cells_order_idx" ON "_pages_v_blocks_variable_table_rows_cells" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_variable_table_rows_cells_parent_id_idx" ON "_pages_v_blocks_variable_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_variable_table_rows_cells_locale_idx" ON "_pages_v_blocks_variable_table_rows_cells" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_variable_table_rows_order_idx" ON "_pages_v_blocks_variable_table_rows" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_variable_table_rows_parent_id_idx" ON "_pages_v_blocks_variable_table_rows" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_variable_table_rows_locale_idx" ON "_pages_v_blocks_variable_table_rows" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_variable_table_order_idx" ON "_pages_v_blocks_variable_table" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_variable_table_parent_id_idx" ON "_pages_v_blocks_variable_table" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_variable_table_path_idx" ON "_pages_v_blocks_variable_table" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_variable_table_locale_idx" ON "_pages_v_blocks_variable_table" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_table_custom_order_idx" ON "_pages_v_blocks_table_custom" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_table_custom_parent_id_idx" ON "_pages_v_blocks_table_custom" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_table_custom_path_idx" ON "_pages_v_blocks_table_custom" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_table_custom_locale_idx" ON "_pages_v_blocks_table_custom" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_draw_editor_order_idx" ON "_pages_v_blocks_draw_editor" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_draw_editor_parent_id_idx" ON "_pages_v_blocks_draw_editor" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_draw_editor_path_idx" ON "_pages_v_blocks_draw_editor" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_draw_editor_locale_idx" ON "_pages_v_blocks_draw_editor" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_draw_editor_image_picker_idx" ON "_pages_v_blocks_draw_editor" USING btree ("image_picker_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_order_idx" ON "_pages_v_blocks_text_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_parent_id_idx" ON "_pages_v_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_path_idx" ON "_pages_v_blocks_text_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_locale_idx" ON "_pages_v_blocks_text_image" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_image_image_idx" ON "_pages_v_blocks_text_image" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner_order_idx" ON "_pages_v_blocks_banner" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner_parent_id_idx" ON "_pages_v_blocks_banner" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner_path_idx" ON "_pages_v_blocks_banner" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner_locale_idx" ON "_pages_v_blocks_banner" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner_banner_settings_banner_settings_background_image_idx" ON "_pages_v_blocks_banner" USING btree ("banner_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_benefits_benefits_row_item_heading_lines_order_idx" ON "_pages_v_blocks_benefits_benefits_row_item_heading_lines" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_benefits_benefits_row_item_heading_lines_parent_id_idx" ON "_pages_v_blocks_benefits_benefits_row_item_heading_lines" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_benefits_benefits_row_item_heading_lines_locale_idx" ON "_pages_v_blocks_benefits_benefits_row_item_heading_lines" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_benefits_benefits_row_item2_heading_lines_order_idx" ON "_pages_v_blocks_benefits_benefits_row_item2_heading_lines" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_benefits_benefits_row_item2_heading_lines_parent_id_idx" ON "_pages_v_blocks_benefits_benefits_row_item2_heading_lines" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_benefits_benefits_row_item2_heading_lines_locale_idx" ON "_pages_v_blocks_benefits_benefits_row_item2_heading_lines" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_benefits_benefits_order_idx" ON "_pages_v_blocks_benefits_benefits" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_benefits_benefits_parent_id_idx" ON "_pages_v_blocks_benefits_benefits" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_benefits_benefits_locale_idx" ON "_pages_v_blocks_benefits_benefits" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_benefits_benefits_row_item_row_item_image_idx" ON "_pages_v_blocks_benefits_benefits" USING btree ("row_item_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_benefits_benefits_row_item2_row_item2_image_idx" ON "_pages_v_blocks_benefits_benefits" USING btree ("row_item2_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_benefits_order_idx" ON "_pages_v_blocks_benefits" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_benefits_parent_id_idx" ON "_pages_v_blocks_benefits" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_benefits_path_idx" ON "_pages_v_blocks_benefits" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_benefits_locale_idx" ON "_pages_v_blocks_benefits" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_benefits_benefits_settings_benefits_settings_background_image_idx" ON "_pages_v_blocks_benefits" USING btree ("benefits_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact_contact_info_highlighted_contacts_order_idx" ON "_pages_v_blocks_contact_contact_info_highlighted_contacts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact_contact_info_highlighted_contacts_parent_id_idx" ON "_pages_v_blocks_contact_contact_info_highlighted_contacts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact_contact_info_highlighted_contacts_locale_idx" ON "_pages_v_blocks_contact_contact_info_highlighted_contacts" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact_contact_info_contact_items_order_idx" ON "_pages_v_blocks_contact_contact_info_contact_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact_contact_info_contact_items_parent_id_idx" ON "_pages_v_blocks_contact_contact_info_contact_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact_contact_info_contact_items_locale_idx" ON "_pages_v_blocks_contact_contact_info_contact_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact_order_idx" ON "_pages_v_blocks_contact" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact_parent_id_idx" ON "_pages_v_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact_path_idx" ON "_pages_v_blocks_contact" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact_locale_idx" ON "_pages_v_blocks_contact" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact_contact_settings_contact_settings_background_image_idx" ON "_pages_v_blocks_contact" USING btree ("contact_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_locale_idx" ON "_pages_v_blocks_content" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_content_settings_content_settings_background_image_idx" ON "_pages_v_blocks_content" USING btree ("content_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_features_features_with_title_order_idx" ON "_pages_v_blocks_features_features_with_title" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_features_features_with_title_parent_id_idx" ON "_pages_v_blocks_features_features_with_title" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_features_features_with_title_locale_idx" ON "_pages_v_blocks_features_features_with_title" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_features_features_uppercase_order_idx" ON "_pages_v_blocks_features_features_uppercase" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_features_features_uppercase_parent_id_idx" ON "_pages_v_blocks_features_features_uppercase" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_features_features_uppercase_locale_idx" ON "_pages_v_blocks_features_features_uppercase" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_features_order_idx" ON "_pages_v_blocks_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_features_parent_id_idx" ON "_pages_v_blocks_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_features_path_idx" ON "_pages_v_blocks_features" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_features_locale_idx" ON "_pages_v_blocks_features" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_features_features_settings_features_settings_background_image_idx" ON "_pages_v_blocks_features" USING btree ("features_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_form_cfg_flat_disposition_options_order_idx" ON "_pages_v_blocks_form_form_cfg_flat_disposition_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_form_cfg_flat_disposition_options_parent_id_idx" ON "_pages_v_blocks_form_form_cfg_flat_disposition_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_form_cfg_flat_disposition_options_locale_idx" ON "_pages_v_blocks_form_form_cfg_flat_disposition_options" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_slide_out_boxes_order_idx" ON "_pages_v_blocks_form_slide_out_boxes" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_slide_out_boxes_parent_id_idx" ON "_pages_v_blocks_form_slide_out_boxes" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_slide_out_boxes_locale_idx" ON "_pages_v_blocks_form_slide_out_boxes" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_slide_out_boxes_column_column_image_idx" ON "_pages_v_blocks_form_slide_out_boxes" USING btree ("column_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_slide_out_boxes_column_column_image2_idx" ON "_pages_v_blocks_form_slide_out_boxes" USING btree ("column_image2_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_order_idx" ON "_pages_v_blocks_form" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_parent_id_idx" ON "_pages_v_blocks_form" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_path_idx" ON "_pages_v_blocks_form" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_locale_idx" ON "_pages_v_blocks_form" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_form_settings_form_settings_background_image_idx" ON "_pages_v_blocks_form" USING btree ("form_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_flats_snippets_order_idx" ON "_pages_v_blocks_flats_snippets" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_flats_snippets_parent_id_idx" ON "_pages_v_blocks_flats_snippets" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_flats_snippets_path_idx" ON "_pages_v_blocks_flats_snippets" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_flats_snippets_locale_idx" ON "_pages_v_blocks_flats_snippets" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_flats_snippets_flats_set_flats_set_background_image_idx" ON "_pages_v_blocks_flats_snippets" USING btree ("flats_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_simple_slider_order_idx" ON "_pages_v_blocks_gallery_simple_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_simple_slider_parent_id_idx" ON "_pages_v_blocks_gallery_simple_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_simple_slider_locale_idx" ON "_pages_v_blocks_gallery_simple_slider" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_simple_slider_image_idx" ON "_pages_v_blocks_gallery_simple_slider" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_multi_slider_images_order_idx" ON "_pages_v_blocks_gallery_multi_slider_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_multi_slider_images_parent_id_idx" ON "_pages_v_blocks_gallery_multi_slider_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_multi_slider_images_locale_idx" ON "_pages_v_blocks_gallery_multi_slider_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_multi_slider_images_image_idx" ON "_pages_v_blocks_gallery_multi_slider_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_multi_slider_order_idx" ON "_pages_v_blocks_gallery_multi_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_multi_slider_parent_id_idx" ON "_pages_v_blocks_gallery_multi_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_multi_slider_locale_idx" ON "_pages_v_blocks_gallery_multi_slider" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_full_width_order_idx" ON "_pages_v_blocks_gallery_full_width" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_full_width_parent_id_idx" ON "_pages_v_blocks_gallery_full_width" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_full_width_locale_idx" ON "_pages_v_blocks_gallery_full_width" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_full_width_image_idx" ON "_pages_v_blocks_gallery_full_width" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_order_idx" ON "_pages_v_blocks_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_parent_id_idx" ON "_pages_v_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_path_idx" ON "_pages_v_blocks_gallery" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_locale_idx" ON "_pages_v_blocks_gallery" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_gallery_settings_gallery_settings_background_image_idx" ON "_pages_v_blocks_gallery" USING btree ("gallery_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_highlighted_text_order_idx" ON "_pages_v_blocks_highlighted_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_highlighted_text_parent_id_idx" ON "_pages_v_blocks_highlighted_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_highlighted_text_path_idx" ON "_pages_v_blocks_highlighted_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_highlighted_text_locale_idx" ON "_pages_v_blocks_highlighted_text" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_highlighted_text_high_set_high_set_background_image_idx" ON "_pages_v_blocks_highlighted_text" USING btree ("high_set_background_image_id");
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
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_images_grid_images_order_idx" ON "_pages_v_blocks_images_grid_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_images_grid_images_parent_id_idx" ON "_pages_v_blocks_images_grid_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_images_grid_images_locale_idx" ON "_pages_v_blocks_images_grid_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_images_grid_images_image_idx" ON "_pages_v_blocks_images_grid_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_images_grid_order_idx" ON "_pages_v_blocks_images_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_images_grid_parent_id_idx" ON "_pages_v_blocks_images_grid" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_images_grid_path_idx" ON "_pages_v_blocks_images_grid" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_images_grid_locale_idx" ON "_pages_v_blocks_images_grid" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_images_grid_images_settings_images_settings_background_image_idx" ON "_pages_v_blocks_images_grid" USING btree ("images_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_pins_pins_order_idx" ON "_pages_v_blocks_image_pins_pins" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_pins_pins_parent_id_idx" ON "_pages_v_blocks_image_pins_pins" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_pins_pins_locale_idx" ON "_pages_v_blocks_image_pins_pins" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_pins_pins_logo_idx" ON "_pages_v_blocks_image_pins_pins" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_pins_order_idx" ON "_pages_v_blocks_image_pins" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_pins_parent_id_idx" ON "_pages_v_blocks_image_pins" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_pins_path_idx" ON "_pages_v_blocks_image_pins" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_pins_locale_idx" ON "_pages_v_blocks_image_pins" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_pins_image_pins_set_image_pins_set_background_image_idx" ON "_pages_v_blocks_image_pins" USING btree ("image_pins_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_pins_background_image_idx" ON "_pages_v_blocks_image_pins" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_news_snippets_order_idx" ON "_pages_v_blocks_news_snippets" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_news_snippets_parent_id_idx" ON "_pages_v_blocks_news_snippets" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_news_snippets_path_idx" ON "_pages_v_blocks_news_snippets" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_news_snippets_locale_idx" ON "_pages_v_blocks_news_snippets" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_news_snippets_news_set_news_set_background_image_idx" ON "_pages_v_blocks_news_snippets" USING btree ("news_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_numbers_numbers_order_idx" ON "_pages_v_blocks_numbers_numbers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_numbers_numbers_parent_id_idx" ON "_pages_v_blocks_numbers_numbers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_numbers_numbers_locale_idx" ON "_pages_v_blocks_numbers_numbers" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_numbers_order_idx" ON "_pages_v_blocks_numbers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_numbers_parent_id_idx" ON "_pages_v_blocks_numbers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_numbers_path_idx" ON "_pages_v_blocks_numbers" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_numbers_locale_idx" ON "_pages_v_blocks_numbers" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_numbers_numbers_settings_numbers_settings_background_image_idx" ON "_pages_v_blocks_numbers" USING btree ("numbers_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline_timeline_order_idx" ON "_pages_v_blocks_timeline_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline_timeline_parent_id_idx" ON "_pages_v_blocks_timeline_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline_timeline_locale_idx" ON "_pages_v_blocks_timeline_timeline" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline_order_idx" ON "_pages_v_blocks_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline_parent_id_idx" ON "_pages_v_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline_path_idx" ON "_pages_v_blocks_timeline" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline_locale_idx" ON "_pages_v_blocks_timeline" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline_timeline_settings_timeline_settings_background_image_idx" ON "_pages_v_blocks_timeline" USING btree ("timeline_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_prices_order_idx" ON "_pages_v_blocks_prices" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_prices_parent_id_idx" ON "_pages_v_blocks_prices" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_prices_path_idx" ON "_pages_v_blocks_prices" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_prices_locale_idx" ON "_pages_v_blocks_prices" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_prices_prices_settings_prices_settings_background_image_idx" ON "_pages_v_blocks_prices" USING btree ("prices_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_interactive_picker_extended_views_order_idx" ON "_pages_v_blocks_interactive_picker_extended_views" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_interactive_picker_extended_views_parent_id_idx" ON "_pages_v_blocks_interactive_picker_extended_views" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_interactive_picker_extended_views_locale_idx" ON "_pages_v_blocks_interactive_picker_extended_views" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_interactive_picker_extended_views_image_idx" ON "_pages_v_blocks_interactive_picker_extended_views" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_interactive_picker_extended_order_idx" ON "_pages_v_blocks_interactive_picker_extended" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_interactive_picker_extended_parent_id_idx" ON "_pages_v_blocks_interactive_picker_extended" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_interactive_picker_extended_path_idx" ON "_pages_v_blocks_interactive_picker_extended" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_interactive_picker_extended_locale_idx" ON "_pages_v_blocks_interactive_picker_extended" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_visual_price_list_buildings_order_idx" ON "_pages_v_blocks_visual_price_list_buildings" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_visual_price_list_buildings_parent_id_idx" ON "_pages_v_blocks_visual_price_list_buildings" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_visual_price_list_buildings_locale_idx" ON "_pages_v_blocks_visual_price_list_buildings" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_visual_price_list_buildings_building_idx" ON "_pages_v_blocks_visual_price_list_buildings" USING btree ("building_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_visual_price_list_order_idx" ON "_pages_v_blocks_visual_price_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_visual_price_list_parent_id_idx" ON "_pages_v_blocks_visual_price_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_visual_price_list_path_idx" ON "_pages_v_blocks_visual_price_list" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_visual_price_list_locale_idx" ON "_pages_v_blocks_visual_price_list" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_shared_section_order_idx" ON "_pages_v_blocks_shared_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_shared_section_parent_id_idx" ON "_pages_v_blocks_shared_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_shared_section_path_idx" ON "_pages_v_blocks_shared_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_shared_section_locale_idx" ON "_pages_v_blocks_shared_section" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_shared_section_shared_section_idx" ON "_pages_v_blocks_shared_section" USING btree ("shared_section_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_project_idx" ON "_pages_v" USING btree ("version_project_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_meta_version_meta_og_image_idx" ON "_pages_v" USING btree ("version_meta_og_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_snapshot_idx" ON "_pages_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_pages_v_published_locale_idx" ON "_pages_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_slug_idx" ON "_pages_vstoone" USING btree ("version_slug","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_vstoone_locale_parent_id_unique" ON "_pages_vstoone" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_locale_idx" ON "_pages_v_rels" USING btree ("locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id","locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_flats_id_idx" ON "_pages_v_rels" USING btree ("flats_id","locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_news_id_idx" ON "_pages_v_rels" USING btree ("news_id","locale");
  CREATE INDEX IF NOT EXISTS "globalheader_nav_items_order_idx" ON "globalheader_nav_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "globalheader_nav_items_parent_id_idx" ON "globalheader_nav_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "globalheader_nav_items_locale_idx" ON "globalheader_nav_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "globalheader_cta_buttons_order_idx" ON "globalheader_cta_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "globalheader_cta_buttons_parent_id_idx" ON "globalheader_cta_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "globalheader_cta_buttons_locale_idx" ON "globalheader_cta_buttons" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "globalheader_project_idx" ON "globalheader" USING btree ("project_id");
  CREATE INDEX IF NOT EXISTS "globalheader_updated_at_idx" ON "globalheader" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "globalheader_created_at_idx" ON "globalheader" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "globalheaderstoone_locale_parent_id_unique" ON "globalheaderstoone" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "globalheader_rels_order_idx" ON "globalheader_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "globalheader_rels_parent_idx" ON "globalheader_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "globalheader_rels_path_idx" ON "globalheader_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "globalheader_rels_locale_idx" ON "globalheader_rels" USING btree ("locale");
  CREATE INDEX IF NOT EXISTS "globalheader_rels_pages_id_idx" ON "globalheader_rels" USING btree ("pages_id","locale");
  CREATE INDEX IF NOT EXISTS "globalheader_rels_flats_id_idx" ON "globalheader_rels" USING btree ("flats_id","locale");
  CREATE INDEX IF NOT EXISTS "globalheader_rels_news_id_idx" ON "globalheader_rels" USING btree ("news_id","locale");
  CREATE INDEX IF NOT EXISTS "globalfooter_highlighted_contacts_order_idx" ON "globalfooter_highlighted_contacts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "globalfooter_highlighted_contacts_parent_id_idx" ON "globalfooter_highlighted_contacts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "globalfooter_social_links_order_idx" ON "globalfooter_social_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "globalfooter_social_links_parent_id_idx" ON "globalfooter_social_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "globalfooter_contact_items_order_idx" ON "globalfooter_contact_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "globalfooter_contact_items_parent_id_idx" ON "globalfooter_contact_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "globalfooter_bottom_links_order_idx" ON "globalfooter_bottom_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "globalfooter_bottom_links_parent_id_idx" ON "globalfooter_bottom_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "globalfooter_project_idx" ON "globalfooter" USING btree ("project_id");
  CREATE INDEX IF NOT EXISTS "globalfooter_updated_at_idx" ON "globalfooter" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "globalfooter_created_at_idx" ON "globalfooter" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "globalfooterstoone_locale_parent_id_unique" ON "globalfooterstoone" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "globalfooter_rels_order_idx" ON "globalfooter_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "globalfooter_rels_parent_idx" ON "globalfooter_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "globalfooter_rels_path_idx" ON "globalfooter_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "globalfooter_rels_pages_id_idx" ON "globalfooter_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "globalfooter_rels_flats_id_idx" ON "globalfooter_rels" USING btree ("flats_id");
  CREATE INDEX IF NOT EXISTS "globalfooter_rels_news_id_idx" ON "globalfooter_rels" USING btree ("news_id");
  CREATE INDEX IF NOT EXISTS "buildings_documents_order_idx" ON "buildings_documents" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "buildings_documents_parent_id_idx" ON "buildings_documents" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "buildings_documents_document_file_idx" ON "buildings_documents" USING btree ("document_file_id");
  CREATE INDEX IF NOT EXISTS "buildings_plans_order_idx" ON "buildings_plans" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "buildings_plans_parent_id_idx" ON "buildings_plans" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "buildings_plans_plan_file_idx" ON "buildings_plans" USING btree ("plan_file_id");
  CREATE INDEX IF NOT EXISTS "buildings_project_idx" ON "buildings" USING btree ("project_id");
  CREATE INDEX IF NOT EXISTS "buildings_building_plan_picker_building_plan_picker_image_picker_idx" ON "buildings" USING btree ("building_plan_picker_image_picker_id");
  CREATE INDEX IF NOT EXISTS "buildings_updated_at_idx" ON "buildings" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "buildings_created_at_idx" ON "buildings" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "buildings_slug_idx" ON "buildingsstoone" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "buildingsstoone_locale_parent_id_unique" ON "buildingsstoone" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "floors_documents_order_idx" ON "floors_documents" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "floors_documents_parent_id_idx" ON "floors_documents" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "floors_documents_document_file_idx" ON "floors_documents" USING btree ("document_file_id");
  CREATE INDEX IF NOT EXISTS "floors_plans_order_idx" ON "floors_plans" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "floors_plans_parent_id_idx" ON "floors_plans" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "floors_plans_plan_file_idx" ON "floors_plans" USING btree ("plan_file_id");
  CREATE INDEX IF NOT EXISTS "floors_project_idx" ON "floors" USING btree ("project_id");
  CREATE INDEX IF NOT EXISTS "floors_building_idx" ON "floors" USING btree ("building_id");
  CREATE INDEX IF NOT EXISTS "floors_floor_plan_picker_floor_plan_picker_image_picker_idx" ON "floors" USING btree ("floor_plan_picker_image_picker_id");
  CREATE INDEX IF NOT EXISTS "floors_updated_at_idx" ON "floors" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "floors_created_at_idx" ON "floors" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "floors_slug_idx" ON "floorsstoone" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "floorsstoone_locale_parent_id_unique" ON "floorsstoone" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "flats_documents_order_idx" ON "flats_documents" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flats_documents_parent_id_idx" ON "flats_documents" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flats_documents_document_file_idx" ON "flats_documents" USING btree ("document_file_id");
  CREATE INDEX IF NOT EXISTS "flats_plans_order_idx" ON "flats_plans" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flats_plans_parent_id_idx" ON "flats_plans" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flats_plans_plan_file_idx" ON "flats_plans" USING btree ("plan_file_id");
  CREATE INDEX IF NOT EXISTS "flats_pictures_order_idx" ON "flats_pictures" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flats_pictures_parent_id_idx" ON "flats_pictures" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flats_pictures_picture_file_idx" ON "flats_pictures" USING btree ("picture_file_id");
  CREATE INDEX IF NOT EXISTS "flats_manual_documents_order_idx" ON "flats_manual_documents" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flats_manual_documents_parent_id_idx" ON "flats_manual_documents" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flats_manual_documents_document_file_idx" ON "flats_manual_documents" USING btree ("document_file_id");
  CREATE INDEX IF NOT EXISTS "flats_manual_plans_order_idx" ON "flats_manual_plans" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flats_manual_plans_parent_id_idx" ON "flats_manual_plans" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flats_manual_plans_plan_file_idx" ON "flats_manual_plans" USING btree ("plan_file_id");
  CREATE INDEX IF NOT EXISTS "flats_flat_plans_order_idx" ON "flats_flat_plans" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flats_flat_plans_parent_id_idx" ON "flats_flat_plans" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flats_flat_plans_locale_idx" ON "flats_flat_plans" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flats_flat_plans_image_idx" ON "flats_flat_plans" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "flats_gallery_simple_slider_order_idx" ON "flats_gallery_simple_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flats_gallery_simple_slider_parent_id_idx" ON "flats_gallery_simple_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flats_gallery_simple_slider_locale_idx" ON "flats_gallery_simple_slider" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flats_gallery_simple_slider_image_idx" ON "flats_gallery_simple_slider" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "flats_gallery_multi_slider_images_order_idx" ON "flats_gallery_multi_slider_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flats_gallery_multi_slider_images_parent_id_idx" ON "flats_gallery_multi_slider_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flats_gallery_multi_slider_images_locale_idx" ON "flats_gallery_multi_slider_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flats_gallery_multi_slider_images_image_idx" ON "flats_gallery_multi_slider_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "flats_gallery_multi_slider_order_idx" ON "flats_gallery_multi_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flats_gallery_multi_slider_parent_id_idx" ON "flats_gallery_multi_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flats_gallery_multi_slider_locale_idx" ON "flats_gallery_multi_slider" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flats_project_idx" ON "flats" USING btree ("project_id");
  CREATE INDEX IF NOT EXISTS "flats_building_idx" ON "flats" USING btree ("building_id");
  CREATE INDEX IF NOT EXISTS "flats_floor_idx" ON "flats" USING btree ("floor_id");
  CREATE INDEX IF NOT EXISTS "flats_gallery_gallery_settings_gallery_gallery_settings_background_image_idx" ON "flats" USING btree ("gallery_gallery_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "flats_meta_meta_og_image_idx" ON "flats" USING btree ("meta_og_image_id");
  CREATE INDEX IF NOT EXISTS "flats_updated_at_idx" ON "flats" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "flats_created_at_idx" ON "flats" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "flatsstoone_locale_parent_id_unique" ON "flatsstoone" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "flats_rels_order_idx" ON "flats_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "flats_rels_parent_idx" ON "flats_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "flats_rels_path_idx" ON "flats_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "flats_rels_locale_idx" ON "flats_rels" USING btree ("locale");
  CREATE INDEX IF NOT EXISTS "flats_rels_pages_id_idx" ON "flats_rels" USING btree ("pages_id","locale");
  CREATE INDEX IF NOT EXISTS "flats_rels_flats_id_idx" ON "flats_rels" USING btree ("flats_id","locale");
  CREATE INDEX IF NOT EXISTS "flats_rels_news_id_idx" ON "flats_rels" USING btree ("news_id","locale");
  CREATE INDEX IF NOT EXISTS "project_global_settings_project_idx" ON "project_global_settings" USING btree ("project_id");
  CREATE INDEX IF NOT EXISTS "project_global_settings_meta_meta_og_image_idx" ON "project_global_settings" USING btree ("meta_og_image_id");
  CREATE INDEX IF NOT EXISTS "project_global_settings_updated_at_idx" ON "project_global_settings" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "project_global_settings_created_at_idx" ON "project_global_settings" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "project_global_settingsstoone_locale_parent_id_unique" ON "project_global_settingsstoone" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_hero_hero_slideshow_order_idx" ON "flDet_blocks_hero_hero_slideshow" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_hero_hero_slideshow_parent_id_idx" ON "flDet_blocks_hero_hero_slideshow" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_hero_hero_slideshow_locale_idx" ON "flDet_blocks_hero_hero_slideshow" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_hero_hero_slideshow_image_idx" ON "flDet_blocks_hero_hero_slideshow" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_hero_main_buttons_order_idx" ON "flDet_blocks_hero_main_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_hero_main_buttons_parent_id_idx" ON "flDet_blocks_hero_main_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_hero_main_buttons_locale_idx" ON "flDet_blocks_hero_main_buttons" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_hero_secondary_buttons_order_idx" ON "flDet_blocks_hero_secondary_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_hero_secondary_buttons_parent_id_idx" ON "flDet_blocks_hero_secondary_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_hero_secondary_buttons_locale_idx" ON "flDet_blocks_hero_secondary_buttons" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_hero_order_idx" ON "flDet_blocks_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_hero_parent_id_idx" ON "flDet_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_hero_path_idx" ON "flDet_blocks_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_hero_locale_idx" ON "flDet_blocks_hero" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_hero_hero_image_idx" ON "flDet_blocks_hero" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_hero_hero_video_idx" ON "flDet_blocks_hero" USING btree ("hero_video_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_variable_table_rows_cells_order_idx" ON "flDet_blocks_variable_table_rows_cells" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_variable_table_rows_cells_parent_id_idx" ON "flDet_blocks_variable_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_variable_table_rows_cells_locale_idx" ON "flDet_blocks_variable_table_rows_cells" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_variable_table_rows_order_idx" ON "flDet_blocks_variable_table_rows" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_variable_table_rows_parent_id_idx" ON "flDet_blocks_variable_table_rows" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_variable_table_rows_locale_idx" ON "flDet_blocks_variable_table_rows" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_variable_table_order_idx" ON "flDet_blocks_variable_table" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_variable_table_parent_id_idx" ON "flDet_blocks_variable_table" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_variable_table_path_idx" ON "flDet_blocks_variable_table" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_variable_table_locale_idx" ON "flDet_blocks_variable_table" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_table_custom_order_idx" ON "flDet_blocks_table_custom" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_table_custom_parent_id_idx" ON "flDet_blocks_table_custom" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_table_custom_path_idx" ON "flDet_blocks_table_custom" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_table_custom_locale_idx" ON "flDet_blocks_table_custom" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_draw_editor_order_idx" ON "flDet_blocks_draw_editor" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_draw_editor_parent_id_idx" ON "flDet_blocks_draw_editor" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_draw_editor_path_idx" ON "flDet_blocks_draw_editor" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_draw_editor_locale_idx" ON "flDet_blocks_draw_editor" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_draw_editor_image_picker_idx" ON "flDet_blocks_draw_editor" USING btree ("image_picker_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_text_image_order_idx" ON "flDet_blocks_text_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_text_image_parent_id_idx" ON "flDet_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_text_image_path_idx" ON "flDet_blocks_text_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_text_image_locale_idx" ON "flDet_blocks_text_image" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_text_image_image_idx" ON "flDet_blocks_text_image" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_banner_order_idx" ON "flDet_blocks_banner" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_banner_parent_id_idx" ON "flDet_blocks_banner" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_banner_path_idx" ON "flDet_blocks_banner" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_banner_locale_idx" ON "flDet_blocks_banner" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_banner_banner_settings_banner_settings_background_image_idx" ON "flDet_blocks_banner" USING btree ("banner_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_benefits_benefits_row_item_heading_lines_order_idx" ON "flDet_blocks_benefits_benefits_row_item_heading_lines" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_benefits_benefits_row_item_heading_lines_parent_id_idx" ON "flDet_blocks_benefits_benefits_row_item_heading_lines" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_benefits_benefits_row_item_heading_lines_locale_idx" ON "flDet_blocks_benefits_benefits_row_item_heading_lines" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_benefits_benefits_row_item2_heading_lines_order_idx" ON "flDet_blocks_benefits_benefits_row_item2_heading_lines" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_benefits_benefits_row_item2_heading_lines_parent_id_idx" ON "flDet_blocks_benefits_benefits_row_item2_heading_lines" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_benefits_benefits_row_item2_heading_lines_locale_idx" ON "flDet_blocks_benefits_benefits_row_item2_heading_lines" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_benefits_benefits_order_idx" ON "flDet_blocks_benefits_benefits" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_benefits_benefits_parent_id_idx" ON "flDet_blocks_benefits_benefits" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_benefits_benefits_locale_idx" ON "flDet_blocks_benefits_benefits" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_benefits_benefits_row_item_row_item_image_idx" ON "flDet_blocks_benefits_benefits" USING btree ("row_item_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_benefits_benefits_row_item2_row_item2_image_idx" ON "flDet_blocks_benefits_benefits" USING btree ("row_item2_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_benefits_order_idx" ON "flDet_blocks_benefits" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_benefits_parent_id_idx" ON "flDet_blocks_benefits" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_benefits_path_idx" ON "flDet_blocks_benefits" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_benefits_locale_idx" ON "flDet_blocks_benefits" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_benefits_benefits_settings_benefits_settings_background_image_idx" ON "flDet_blocks_benefits" USING btree ("benefits_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_contact_contact_info_highlighted_contacts_order_idx" ON "flDet_blocks_contact_contact_info_highlighted_contacts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_contact_contact_info_highlighted_contacts_parent_id_idx" ON "flDet_blocks_contact_contact_info_highlighted_contacts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_contact_contact_info_highlighted_contacts_locale_idx" ON "flDet_blocks_contact_contact_info_highlighted_contacts" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_contact_contact_info_contact_items_order_idx" ON "flDet_blocks_contact_contact_info_contact_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_contact_contact_info_contact_items_parent_id_idx" ON "flDet_blocks_contact_contact_info_contact_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_contact_contact_info_contact_items_locale_idx" ON "flDet_blocks_contact_contact_info_contact_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_contact_order_idx" ON "flDet_blocks_contact" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_contact_parent_id_idx" ON "flDet_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_contact_path_idx" ON "flDet_blocks_contact" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_contact_locale_idx" ON "flDet_blocks_contact" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_contact_contact_settings_contact_settings_background_image_idx" ON "flDet_blocks_contact" USING btree ("contact_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_content_order_idx" ON "flDet_blocks_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_content_parent_id_idx" ON "flDet_blocks_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_content_path_idx" ON "flDet_blocks_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_content_locale_idx" ON "flDet_blocks_content" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_content_content_settings_content_settings_background_image_idx" ON "flDet_blocks_content" USING btree ("content_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_features_features_with_title_order_idx" ON "flDet_blocks_features_features_with_title" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_features_features_with_title_parent_id_idx" ON "flDet_blocks_features_features_with_title" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_features_features_with_title_locale_idx" ON "flDet_blocks_features_features_with_title" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_features_features_uppercase_order_idx" ON "flDet_blocks_features_features_uppercase" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_features_features_uppercase_parent_id_idx" ON "flDet_blocks_features_features_uppercase" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_features_features_uppercase_locale_idx" ON "flDet_blocks_features_features_uppercase" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_features_order_idx" ON "flDet_blocks_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_features_parent_id_idx" ON "flDet_blocks_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_features_path_idx" ON "flDet_blocks_features" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_features_locale_idx" ON "flDet_blocks_features" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_features_features_settings_features_settings_background_image_idx" ON "flDet_blocks_features" USING btree ("features_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_form_form_cfg_flat_disposition_options_order_idx" ON "flDet_blocks_form_form_cfg_flat_disposition_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_form_form_cfg_flat_disposition_options_parent_id_idx" ON "flDet_blocks_form_form_cfg_flat_disposition_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_form_form_cfg_flat_disposition_options_locale_idx" ON "flDet_blocks_form_form_cfg_flat_disposition_options" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_form_slide_out_boxes_order_idx" ON "flDet_blocks_form_slide_out_boxes" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_form_slide_out_boxes_parent_id_idx" ON "flDet_blocks_form_slide_out_boxes" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_form_slide_out_boxes_locale_idx" ON "flDet_blocks_form_slide_out_boxes" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_form_slide_out_boxes_column_column_image_idx" ON "flDet_blocks_form_slide_out_boxes" USING btree ("column_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_form_slide_out_boxes_column_column_image2_idx" ON "flDet_blocks_form_slide_out_boxes" USING btree ("column_image2_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_form_order_idx" ON "flDet_blocks_form" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_form_parent_id_idx" ON "flDet_blocks_form" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_form_path_idx" ON "flDet_blocks_form" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_form_locale_idx" ON "flDet_blocks_form" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_form_form_settings_form_settings_background_image_idx" ON "flDet_blocks_form" USING btree ("form_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_flats_snippets_order_idx" ON "flDet_blocks_flats_snippets" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_flats_snippets_parent_id_idx" ON "flDet_blocks_flats_snippets" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_flats_snippets_path_idx" ON "flDet_blocks_flats_snippets" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_flats_snippets_locale_idx" ON "flDet_blocks_flats_snippets" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_flats_snippets_flats_set_flats_set_background_image_idx" ON "flDet_blocks_flats_snippets" USING btree ("flats_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_gallery_simple_slider_order_idx" ON "flDet_blocks_gallery_simple_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_gallery_simple_slider_parent_id_idx" ON "flDet_blocks_gallery_simple_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_gallery_simple_slider_locale_idx" ON "flDet_blocks_gallery_simple_slider" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_gallery_simple_slider_image_idx" ON "flDet_blocks_gallery_simple_slider" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_gallery_multi_slider_images_order_idx" ON "flDet_blocks_gallery_multi_slider_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_gallery_multi_slider_images_parent_id_idx" ON "flDet_blocks_gallery_multi_slider_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_gallery_multi_slider_images_locale_idx" ON "flDet_blocks_gallery_multi_slider_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_gallery_multi_slider_images_image_idx" ON "flDet_blocks_gallery_multi_slider_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_gallery_multi_slider_order_idx" ON "flDet_blocks_gallery_multi_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_gallery_multi_slider_parent_id_idx" ON "flDet_blocks_gallery_multi_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_gallery_multi_slider_locale_idx" ON "flDet_blocks_gallery_multi_slider" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_gallery_full_width_order_idx" ON "flDet_blocks_gallery_full_width" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_gallery_full_width_parent_id_idx" ON "flDet_blocks_gallery_full_width" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_gallery_full_width_locale_idx" ON "flDet_blocks_gallery_full_width" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_gallery_full_width_image_idx" ON "flDet_blocks_gallery_full_width" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_gallery_order_idx" ON "flDet_blocks_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_gallery_parent_id_idx" ON "flDet_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_gallery_path_idx" ON "flDet_blocks_gallery" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_gallery_locale_idx" ON "flDet_blocks_gallery" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_gallery_gallery_settings_gallery_settings_background_image_idx" ON "flDet_blocks_gallery" USING btree ("gallery_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_highlighted_text_order_idx" ON "flDet_blocks_highlighted_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_highlighted_text_parent_id_idx" ON "flDet_blocks_highlighted_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_highlighted_text_path_idx" ON "flDet_blocks_highlighted_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_highlighted_text_locale_idx" ON "flDet_blocks_highlighted_text" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_highlighted_text_high_set_high_set_background_image_idx" ON "flDet_blocks_highlighted_text" USING btree ("high_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_images_grid_images_order_idx" ON "flDet_blocks_images_grid_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_images_grid_images_parent_id_idx" ON "flDet_blocks_images_grid_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_images_grid_images_locale_idx" ON "flDet_blocks_images_grid_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_images_grid_images_image_idx" ON "flDet_blocks_images_grid_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_images_grid_order_idx" ON "flDet_blocks_images_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_images_grid_parent_id_idx" ON "flDet_blocks_images_grid" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_images_grid_path_idx" ON "flDet_blocks_images_grid" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_images_grid_locale_idx" ON "flDet_blocks_images_grid" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_images_grid_images_settings_images_settings_background_image_idx" ON "flDet_blocks_images_grid" USING btree ("images_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_image_pins_pins_order_idx" ON "flDet_blocks_image_pins_pins" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_image_pins_pins_parent_id_idx" ON "flDet_blocks_image_pins_pins" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_image_pins_pins_locale_idx" ON "flDet_blocks_image_pins_pins" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_image_pins_pins_logo_idx" ON "flDet_blocks_image_pins_pins" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_image_pins_order_idx" ON "flDet_blocks_image_pins" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_image_pins_parent_id_idx" ON "flDet_blocks_image_pins" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_image_pins_path_idx" ON "flDet_blocks_image_pins" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_image_pins_locale_idx" ON "flDet_blocks_image_pins" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_image_pins_image_pins_set_image_pins_set_background_image_idx" ON "flDet_blocks_image_pins" USING btree ("image_pins_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_image_pins_background_image_idx" ON "flDet_blocks_image_pins" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_news_snippets_order_idx" ON "flDet_blocks_news_snippets" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_news_snippets_parent_id_idx" ON "flDet_blocks_news_snippets" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_news_snippets_path_idx" ON "flDet_blocks_news_snippets" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_news_snippets_locale_idx" ON "flDet_blocks_news_snippets" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_news_snippets_news_set_news_set_background_image_idx" ON "flDet_blocks_news_snippets" USING btree ("news_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_numbers_numbers_order_idx" ON "flDet_blocks_numbers_numbers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_numbers_numbers_parent_id_idx" ON "flDet_blocks_numbers_numbers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_numbers_numbers_locale_idx" ON "flDet_blocks_numbers_numbers" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_numbers_order_idx" ON "flDet_blocks_numbers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_numbers_parent_id_idx" ON "flDet_blocks_numbers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_numbers_path_idx" ON "flDet_blocks_numbers" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_numbers_locale_idx" ON "flDet_blocks_numbers" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_numbers_numbers_settings_numbers_settings_background_image_idx" ON "flDet_blocks_numbers" USING btree ("numbers_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_timeline_timeline_order_idx" ON "flDet_blocks_timeline_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_timeline_timeline_parent_id_idx" ON "flDet_blocks_timeline_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_timeline_timeline_locale_idx" ON "flDet_blocks_timeline_timeline" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_timeline_order_idx" ON "flDet_blocks_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_timeline_parent_id_idx" ON "flDet_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_timeline_path_idx" ON "flDet_blocks_timeline" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_timeline_locale_idx" ON "flDet_blocks_timeline" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_timeline_timeline_settings_timeline_settings_background_image_idx" ON "flDet_blocks_timeline" USING btree ("timeline_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_prices_order_idx" ON "flDet_blocks_prices" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_prices_parent_id_idx" ON "flDet_blocks_prices" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_prices_path_idx" ON "flDet_blocks_prices" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_prices_locale_idx" ON "flDet_blocks_prices" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_prices_prices_settings_prices_settings_background_image_idx" ON "flDet_blocks_prices" USING btree ("prices_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_interactive_picker_extended_views_order_idx" ON "flDet_blocks_interactive_picker_extended_views" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_interactive_picker_extended_views_parent_id_idx" ON "flDet_blocks_interactive_picker_extended_views" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_interactive_picker_extended_views_locale_idx" ON "flDet_blocks_interactive_picker_extended_views" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_interactive_picker_extended_views_image_idx" ON "flDet_blocks_interactive_picker_extended_views" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_interactive_picker_extended_order_idx" ON "flDet_blocks_interactive_picker_extended" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_interactive_picker_extended_parent_id_idx" ON "flDet_blocks_interactive_picker_extended" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_interactive_picker_extended_path_idx" ON "flDet_blocks_interactive_picker_extended" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_interactive_picker_extended_locale_idx" ON "flDet_blocks_interactive_picker_extended" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_visual_price_list_buildings_order_idx" ON "flDet_blocks_visual_price_list_buildings" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_visual_price_list_buildings_parent_id_idx" ON "flDet_blocks_visual_price_list_buildings" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_visual_price_list_buildings_locale_idx" ON "flDet_blocks_visual_price_list_buildings" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_visual_price_list_buildings_building_idx" ON "flDet_blocks_visual_price_list_buildings" USING btree ("building_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_visual_price_list_order_idx" ON "flDet_blocks_visual_price_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_visual_price_list_parent_id_idx" ON "flDet_blocks_visual_price_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_visual_price_list_path_idx" ON "flDet_blocks_visual_price_list" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_visual_price_list_locale_idx" ON "flDet_blocks_visual_price_list" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_shared_section_order_idx" ON "flDet_blocks_shared_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_shared_section_parent_id_idx" ON "flDet_blocks_shared_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_shared_section_path_idx" ON "flDet_blocks_shared_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_shared_section_locale_idx" ON "flDet_blocks_shared_section" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_shared_section_shared_section_idx" ON "flDet_blocks_shared_section" USING btree ("shared_section_id");
  CREATE INDEX IF NOT EXISTS "flDet_project_idx" ON "flDet" USING btree ("project_id");
  CREATE INDEX IF NOT EXISTS "flDet_meta_meta_og_image_idx" ON "flDet" USING btree ("meta_og_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_updated_at_idx" ON "flDet" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "flDet_created_at_idx" ON "flDet" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "flDetstoone_locale_parent_id_unique" ON "flDetstoone" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_rels_order_idx" ON "flDet_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "flDet_rels_parent_idx" ON "flDet_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_rels_path_idx" ON "flDet_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "flDet_rels_locale_idx" ON "flDet_rels" USING btree ("locale");
  CREATE INDEX IF NOT EXISTS "flDet_rels_pages_id_idx" ON "flDet_rels" USING btree ("pages_id","locale");
  CREATE INDEX IF NOT EXISTS "flDet_rels_flats_id_idx" ON "flDet_rels" USING btree ("flats_id","locale");
  CREATE INDEX IF NOT EXISTS "flDet_rels_news_id_idx" ON "flDet_rels" USING btree ("news_id","locale");
  CREATE INDEX IF NOT EXISTS "documents_project_idx" ON "documents" USING btree ("project_id");
  CREATE INDEX IF NOT EXISTS "documents_updated_at_idx" ON "documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "documents_created_at_idx" ON "documents" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "documents_filename_idx" ON "documents" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "news_project_idx" ON "news" USING btree ("project_id");
  CREATE INDEX IF NOT EXISTS "news_cover_image_idx" ON "news" USING btree ("cover_image_id");
  CREATE INDEX IF NOT EXISTS "news_meta_meta_og_image_idx" ON "news" USING btree ("meta_og_image_id");
  CREATE INDEX IF NOT EXISTS "news_updated_at_idx" ON "news" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "news_created_at_idx" ON "news" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "news_slug_idx" ON "newsstoone" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "newsstoone_locale_parent_id_unique" ON "newsstoone" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "news_rels_order_idx" ON "news_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "news_rels_parent_idx" ON "news_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "news_rels_path_idx" ON "news_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "news_rels_users_id_idx" ON "news_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_news_v_parent_idx" ON "_news_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_news_v_version_version_project_idx" ON "_news_v" USING btree ("version_project_id");
  CREATE INDEX IF NOT EXISTS "_news_v_version_version_cover_image_idx" ON "_news_v" USING btree ("version_cover_image_id");
  CREATE INDEX IF NOT EXISTS "_news_v_version_meta_version_meta_og_image_idx" ON "_news_v" USING btree ("version_meta_og_image_id");
  CREATE INDEX IF NOT EXISTS "_news_v_version_version_updated_at_idx" ON "_news_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_news_v_version_version_created_at_idx" ON "_news_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_news_v_created_at_idx" ON "_news_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_news_v_updated_at_idx" ON "_news_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_news_v_version_version_slug_idx" ON "_news_vstoone" USING btree ("version_slug","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "_news_vstoone_locale_parent_id_unique" ON "_news_vstoone" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_news_v_rels_order_idx" ON "_news_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_news_v_rels_parent_idx" ON "_news_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_news_v_rels_path_idx" ON "_news_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_news_v_rels_users_id_idx" ON "_news_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_share_id_idx" ON "payload_locked_documents_rels" USING btree ("share_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_roles_id_idx" ON "payload_locked_documents_rels" USING btree ("roles_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_projects_id_idx" ON "payload_locked_documents_rels" USING btree ("projects_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_globalheader_id_idx" ON "payload_locked_documents_rels" USING btree ("globalheader_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_globalfooter_id_idx" ON "payload_locked_documents_rels" USING btree ("globalfooter_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_buildings_id_idx" ON "payload_locked_documents_rels" USING btree ("buildings_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_floors_id_idx" ON "payload_locked_documents_rels" USING btree ("floors_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_flats_id_idx" ON "payload_locked_documents_rels" USING btree ("flats_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_project_global_settings_id_idx" ON "payload_locked_documents_rels" USING btree ("project_global_settings_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_flDet_id_idx" ON "payload_locked_documents_rels" USING btree ("flDet_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_documents_id_idx" ON "payload_locked_documents_rels" USING btree ("documents_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_news_id_idx" ON "payload_locked_documents_rels" USING btree ("news_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "share_blocks_banner" CASCADE;
  DROP TABLE "share_blocks_benefits_benefits_row_item_heading_lines" CASCADE;
  DROP TABLE "share_blocks_benefits_benefits_row_item2_heading_lines" CASCADE;
  DROP TABLE "share_blocks_benefits_benefits" CASCADE;
  DROP TABLE "share_blocks_benefits" CASCADE;
  DROP TABLE "share_blocks_contact_contact_info_highlighted_contacts" CASCADE;
  DROP TABLE "share_blocks_contact_contact_info_contact_items" CASCADE;
  DROP TABLE "share_blocks_contact" CASCADE;
  DROP TABLE "share_blocks_content" CASCADE;
  DROP TABLE "share_blocks_draw_editor" CASCADE;
  DROP TABLE "share_blocks_features_features_with_title" CASCADE;
  DROP TABLE "share_blocks_features_features_uppercase" CASCADE;
  DROP TABLE "share_blocks_features" CASCADE;
  DROP TABLE "share_blocks_form_form_cfg_flat_disposition_options" CASCADE;
  DROP TABLE "share_blocks_form_slide_out_boxes" CASCADE;
  DROP TABLE "share_blocks_form" CASCADE;
  DROP TABLE "share_blocks_flats_snippets" CASCADE;
  DROP TABLE "share_blocks_gallery_simple_slider" CASCADE;
  DROP TABLE "share_blocks_gallery_multi_slider_images" CASCADE;
  DROP TABLE "share_blocks_gallery_multi_slider" CASCADE;
  DROP TABLE "share_blocks_gallery_full_width" CASCADE;
  DROP TABLE "share_blocks_gallery" CASCADE;
  DROP TABLE "share_blocks_hero_hero_slideshow" CASCADE;
  DROP TABLE "share_blocks_hero_main_buttons" CASCADE;
  DROP TABLE "share_blocks_hero_secondary_buttons" CASCADE;
  DROP TABLE "share_blocks_hero" CASCADE;
  DROP TABLE "share_blocks_highlighted_text" CASCADE;
  DROP TABLE "imgContent_person_bullet_points" CASCADE;
  DROP TABLE "imgContent_accordion_accordion_items" CASCADE;
  DROP TABLE "imgContent" CASCADE;
  DROP TABLE "share_blocks_images_grid_images" CASCADE;
  DROP TABLE "share_blocks_images_grid" CASCADE;
  DROP TABLE "share_blocks_image_pins_pins" CASCADE;
  DROP TABLE "share_blocks_image_pins" CASCADE;
  DROP TABLE "share_blocks_news_snippets" CASCADE;
  DROP TABLE "share_blocks_numbers_numbers" CASCADE;
  DROP TABLE "share_blocks_numbers" CASCADE;
  DROP TABLE "share_blocks_timeline_timeline" CASCADE;
  DROP TABLE "share_blocks_timeline" CASCADE;
  DROP TABLE "share_blocks_prices" CASCADE;
  DROP TABLE "share_blocks_interactive_picker_extended_views" CASCADE;
  DROP TABLE "share_blocks_interactive_picker_extended" CASCADE;
  DROP TABLE "share_blocks_visual_price_list_buildings" CASCADE;
  DROP TABLE "share_blocks_visual_price_list" CASCADE;
  DROP TABLE "share_blocks_variable_table_rows_cells" CASCADE;
  DROP TABLE "share_blocks_variable_table_rows" CASCADE;
  DROP TABLE "share_blocks_variable_table" CASCADE;
  DROP TABLE "share_blocks_table_custom" CASCADE;
  DROP TABLE "share_blocks_text_image" CASCADE;
  DROP TABLE "share_blocks_shared_section" CASCADE;
  DROP TABLE "share" CASCADE;
  DROP TABLE "sharestoone" CASCADE;
  DROP TABLE "share_rels" CASCADE;
  DROP TABLE "roles_permissions_projects" CASCADE;
  DROP TABLE "roles_permissions_pages" CASCADE;
  DROP TABLE "roles_permissions_globalheader" CASCADE;
  DROP TABLE "roles_permissions_globalfooter" CASCADE;
  DROP TABLE "roles_permissions_project_global_settings" CASCADE;
  DROP TABLE "roles_permissions_buildings" CASCADE;
  DROP TABLE "roles_permissions_flats" CASCADE;
  DROP TABLE "roles_permissions_flat_detail_page" CASCADE;
  DROP TABLE "roles_permissions_sectors" CASCADE;
  DROP TABLE "roles_permissions_floors" CASCADE;
  DROP TABLE "roles_permissions_news" CASCADE;
  DROP TABLE "roles_permissions_media" CASCADE;
  DROP TABLE "roles_permissions_documents" CASCADE;
  DROP TABLE "roles_permissions_share" CASCADE;
  DROP TABLE "roles" CASCADE;
  DROP TABLE "roles_rels" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "users_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "projects_standards" CASCADE;
  DROP TABLE "projects_plans" CASCADE;
  DROP TABLE "projects" CASCADE;
  DROP TABLE "pages_blocks_hero_hero_slideshow" CASCADE;
  DROP TABLE "pages_blocks_hero_main_buttons" CASCADE;
  DROP TABLE "pages_blocks_hero_secondary_buttons" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_variable_table_rows_cells" CASCADE;
  DROP TABLE "pages_blocks_variable_table_rows" CASCADE;
  DROP TABLE "pages_blocks_variable_table" CASCADE;
  DROP TABLE "pages_blocks_table_custom" CASCADE;
  DROP TABLE "pages_blocks_draw_editor" CASCADE;
  DROP TABLE "pages_blocks_text_image" CASCADE;
  DROP TABLE "pages_blocks_banner" CASCADE;
  DROP TABLE "pages_blocks_benefits_benefits_row_item_heading_lines" CASCADE;
  DROP TABLE "pages_blocks_benefits_benefits_row_item2_heading_lines" CASCADE;
  DROP TABLE "pages_blocks_benefits_benefits" CASCADE;
  DROP TABLE "pages_blocks_benefits" CASCADE;
  DROP TABLE "pages_blocks_contact_contact_info_highlighted_contacts" CASCADE;
  DROP TABLE "pages_blocks_contact_contact_info_contact_items" CASCADE;
  DROP TABLE "pages_blocks_contact" CASCADE;
  DROP TABLE "pages_blocks_content" CASCADE;
  DROP TABLE "pages_blocks_features_features_with_title" CASCADE;
  DROP TABLE "pages_blocks_features_features_uppercase" CASCADE;
  DROP TABLE "pages_blocks_features" CASCADE;
  DROP TABLE "pages_blocks_form_form_cfg_flat_disposition_options" CASCADE;
  DROP TABLE "pages_blocks_form_slide_out_boxes" CASCADE;
  DROP TABLE "pages_blocks_form" CASCADE;
  DROP TABLE "pages_blocks_flats_snippets" CASCADE;
  DROP TABLE "pages_blocks_gallery_simple_slider" CASCADE;
  DROP TABLE "pages_blocks_gallery_multi_slider_images" CASCADE;
  DROP TABLE "pages_blocks_gallery_multi_slider" CASCADE;
  DROP TABLE "pages_blocks_gallery_full_width" CASCADE;
  DROP TABLE "pages_blocks_gallery" CASCADE;
  DROP TABLE "pages_blocks_highlighted_text" CASCADE;
  DROP TABLE "pages_blocks_images_grid_images" CASCADE;
  DROP TABLE "pages_blocks_images_grid" CASCADE;
  DROP TABLE "pages_blocks_image_pins_pins" CASCADE;
  DROP TABLE "pages_blocks_image_pins" CASCADE;
  DROP TABLE "pages_blocks_news_snippets" CASCADE;
  DROP TABLE "pages_blocks_numbers_numbers" CASCADE;
  DROP TABLE "pages_blocks_numbers" CASCADE;
  DROP TABLE "pages_blocks_timeline_timeline" CASCADE;
  DROP TABLE "pages_blocks_timeline" CASCADE;
  DROP TABLE "pages_blocks_prices" CASCADE;
  DROP TABLE "pages_blocks_interactive_picker_extended_views" CASCADE;
  DROP TABLE "pages_blocks_interactive_picker_extended" CASCADE;
  DROP TABLE "pages_blocks_visual_price_list_buildings" CASCADE;
  DROP TABLE "pages_blocks_visual_price_list" CASCADE;
  DROP TABLE "pages_blocks_shared_section" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pagesstoone" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_hero_slideshow" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_main_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_secondary_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_variable_table_rows_cells" CASCADE;
  DROP TABLE "_pages_v_blocks_variable_table_rows" CASCADE;
  DROP TABLE "_pages_v_blocks_variable_table" CASCADE;
  DROP TABLE "_pages_v_blocks_table_custom" CASCADE;
  DROP TABLE "_pages_v_blocks_draw_editor" CASCADE;
  DROP TABLE "_pages_v_blocks_text_image" CASCADE;
  DROP TABLE "_pages_v_blocks_banner" CASCADE;
  DROP TABLE "_pages_v_blocks_benefits_benefits_row_item_heading_lines" CASCADE;
  DROP TABLE "_pages_v_blocks_benefits_benefits_row_item2_heading_lines" CASCADE;
  DROP TABLE "_pages_v_blocks_benefits_benefits" CASCADE;
  DROP TABLE "_pages_v_blocks_benefits" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_contact_info_highlighted_contacts" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_contact_info_contact_items" CASCADE;
  DROP TABLE "_pages_v_blocks_contact" CASCADE;
  DROP TABLE "_pages_v_blocks_content" CASCADE;
  DROP TABLE "_pages_v_blocks_features_features_with_title" CASCADE;
  DROP TABLE "_pages_v_blocks_features_features_uppercase" CASCADE;
  DROP TABLE "_pages_v_blocks_features" CASCADE;
  DROP TABLE "_pages_v_blocks_form_form_cfg_flat_disposition_options" CASCADE;
  DROP TABLE "_pages_v_blocks_form_slide_out_boxes" CASCADE;
  DROP TABLE "_pages_v_blocks_form" CASCADE;
  DROP TABLE "_pages_v_blocks_flats_snippets" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery_simple_slider" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery_multi_slider_images" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery_multi_slider" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery_full_width" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery" CASCADE;
  DROP TABLE "_pages_v_blocks_highlighted_text" CASCADE;
  DROP TABLE "_imgContent_v_person_bullet_points" CASCADE;
  DROP TABLE "_imgContent_v_accordion_accordion_items" CASCADE;
  DROP TABLE "_imgContent_v" CASCADE;
  DROP TABLE "_pages_v_blocks_images_grid_images" CASCADE;
  DROP TABLE "_pages_v_blocks_images_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_image_pins_pins" CASCADE;
  DROP TABLE "_pages_v_blocks_image_pins" CASCADE;
  DROP TABLE "_pages_v_blocks_news_snippets" CASCADE;
  DROP TABLE "_pages_v_blocks_numbers_numbers" CASCADE;
  DROP TABLE "_pages_v_blocks_numbers" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline_timeline" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline" CASCADE;
  DROP TABLE "_pages_v_blocks_prices" CASCADE;
  DROP TABLE "_pages_v_blocks_interactive_picker_extended_views" CASCADE;
  DROP TABLE "_pages_v_blocks_interactive_picker_extended" CASCADE;
  DROP TABLE "_pages_v_blocks_visual_price_list_buildings" CASCADE;
  DROP TABLE "_pages_v_blocks_visual_price_list" CASCADE;
  DROP TABLE "_pages_v_blocks_shared_section" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_vstoone" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "globalheader_nav_items" CASCADE;
  DROP TABLE "globalheader_cta_buttons" CASCADE;
  DROP TABLE "globalheader" CASCADE;
  DROP TABLE "globalheaderstoone" CASCADE;
  DROP TABLE "globalheader_rels" CASCADE;
  DROP TABLE "globalfooter_highlighted_contacts" CASCADE;
  DROP TABLE "globalfooter_social_links" CASCADE;
  DROP TABLE "globalfooter_contact_items" CASCADE;
  DROP TABLE "globalfooter_bottom_links" CASCADE;
  DROP TABLE "globalfooter" CASCADE;
  DROP TABLE "globalfooterstoone" CASCADE;
  DROP TABLE "globalfooter_rels" CASCADE;
  DROP TABLE "buildings_documents" CASCADE;
  DROP TABLE "buildings_plans" CASCADE;
  DROP TABLE "buildings" CASCADE;
  DROP TABLE "buildingsstoone" CASCADE;
  DROP TABLE "floors_documents" CASCADE;
  DROP TABLE "floors_plans" CASCADE;
  DROP TABLE "floors" CASCADE;
  DROP TABLE "floorsstoone" CASCADE;
  DROP TABLE "flats_documents" CASCADE;
  DROP TABLE "flats_plans" CASCADE;
  DROP TABLE "flats_pictures" CASCADE;
  DROP TABLE "flats_manual_documents" CASCADE;
  DROP TABLE "flats_manual_plans" CASCADE;
  DROP TABLE "flats_flat_plans" CASCADE;
  DROP TABLE "flats_gallery_simple_slider" CASCADE;
  DROP TABLE "flats_gallery_multi_slider_images" CASCADE;
  DROP TABLE "flats_gallery_multi_slider" CASCADE;
  DROP TABLE "flats" CASCADE;
  DROP TABLE "flatsstoone" CASCADE;
  DROP TABLE "flats_rels" CASCADE;
  DROP TABLE "project_global_settings" CASCADE;
  DROP TABLE "project_global_settingsstoone" CASCADE;
  DROP TABLE "flDet_blocks_hero_hero_slideshow" CASCADE;
  DROP TABLE "flDet_blocks_hero_main_buttons" CASCADE;
  DROP TABLE "flDet_blocks_hero_secondary_buttons" CASCADE;
  DROP TABLE "flDet_blocks_hero" CASCADE;
  DROP TABLE "flDet_blocks_variable_table_rows_cells" CASCADE;
  DROP TABLE "flDet_blocks_variable_table_rows" CASCADE;
  DROP TABLE "flDet_blocks_variable_table" CASCADE;
  DROP TABLE "flDet_blocks_table_custom" CASCADE;
  DROP TABLE "flDet_blocks_draw_editor" CASCADE;
  DROP TABLE "flDet_blocks_text_image" CASCADE;
  DROP TABLE "flDet_blocks_banner" CASCADE;
  DROP TABLE "flDet_blocks_benefits_benefits_row_item_heading_lines" CASCADE;
  DROP TABLE "flDet_blocks_benefits_benefits_row_item2_heading_lines" CASCADE;
  DROP TABLE "flDet_blocks_benefits_benefits" CASCADE;
  DROP TABLE "flDet_blocks_benefits" CASCADE;
  DROP TABLE "flDet_blocks_contact_contact_info_highlighted_contacts" CASCADE;
  DROP TABLE "flDet_blocks_contact_contact_info_contact_items" CASCADE;
  DROP TABLE "flDet_blocks_contact" CASCADE;
  DROP TABLE "flDet_blocks_content" CASCADE;
  DROP TABLE "flDet_blocks_features_features_with_title" CASCADE;
  DROP TABLE "flDet_blocks_features_features_uppercase" CASCADE;
  DROP TABLE "flDet_blocks_features" CASCADE;
  DROP TABLE "flDet_blocks_form_form_cfg_flat_disposition_options" CASCADE;
  DROP TABLE "flDet_blocks_form_slide_out_boxes" CASCADE;
  DROP TABLE "flDet_blocks_form" CASCADE;
  DROP TABLE "flDet_blocks_flats_snippets" CASCADE;
  DROP TABLE "flDet_blocks_gallery_simple_slider" CASCADE;
  DROP TABLE "flDet_blocks_gallery_multi_slider_images" CASCADE;
  DROP TABLE "flDet_blocks_gallery_multi_slider" CASCADE;
  DROP TABLE "flDet_blocks_gallery_full_width" CASCADE;
  DROP TABLE "flDet_blocks_gallery" CASCADE;
  DROP TABLE "flDet_blocks_highlighted_text" CASCADE;
  DROP TABLE "flDet_blocks_images_grid_images" CASCADE;
  DROP TABLE "flDet_blocks_images_grid" CASCADE;
  DROP TABLE "flDet_blocks_image_pins_pins" CASCADE;
  DROP TABLE "flDet_blocks_image_pins" CASCADE;
  DROP TABLE "flDet_blocks_news_snippets" CASCADE;
  DROP TABLE "flDet_blocks_numbers_numbers" CASCADE;
  DROP TABLE "flDet_blocks_numbers" CASCADE;
  DROP TABLE "flDet_blocks_timeline_timeline" CASCADE;
  DROP TABLE "flDet_blocks_timeline" CASCADE;
  DROP TABLE "flDet_blocks_prices" CASCADE;
  DROP TABLE "flDet_blocks_interactive_picker_extended_views" CASCADE;
  DROP TABLE "flDet_blocks_interactive_picker_extended" CASCADE;
  DROP TABLE "flDet_blocks_visual_price_list_buildings" CASCADE;
  DROP TABLE "flDet_blocks_visual_price_list" CASCADE;
  DROP TABLE "flDet_blocks_shared_section" CASCADE;
  DROP TABLE "flDet" CASCADE;
  DROP TABLE "flDetstoone" CASCADE;
  DROP TABLE "flDet_rels" CASCADE;
  DROP TABLE "documents" CASCADE;
  DROP TABLE "news" CASCADE;
  DROP TABLE "newsstoone" CASCADE;
  DROP TABLE "news_rels" CASCADE;
  DROP TABLE "_news_v" CASCADE;
  DROP TABLE "_news_vstoone" CASCADE;
  DROP TABLE "_news_v_rels" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_share_blocks_banner_banner_settings_padding_top";
  DROP TYPE "public"."enum_share_blocks_banner_banner_settings_padding_bottom";
  DROP TYPE "public"."enum_share_blocks_banner_banner_settings_background";
  DROP TYPE "public"."enum_share_blocks_banner_banner_variant";
  DROP TYPE "public"."enum_share_blocks_banner_banner_content_position";
  DROP TYPE "public"."enum_share_blocks_banner_banner_button_type";
  DROP TYPE "public"."icnPos";
  DROP TYPE "public"."enum_share_blocks_banner_banner_button_icon";
  DROP TYPE "public"."enum_share_blocks_banner_banner_button_relation";
  DROP TYPE "public"."enum_share_blocks_benefits_benefits_settings_padding_top";
  DROP TYPE "public"."enum_share_blocks_benefits_benefits_settings_padding_bottom";
  DROP TYPE "public"."enum_share_blocks_benefits_benefits_settings_background";
  DROP TYPE "public"."enum_share_blocks_contact_contact_settings_padding_top";
  DROP TYPE "public"."enum_share_blocks_contact_contact_settings_padding_bottom";
  DROP TYPE "public"."enum_share_blocks_contact_contact_settings_background";
  DROP TYPE "public"."enum_share_blocks_contact_contact_form_position";
  DROP TYPE "public"."enum_share_blocks_contact_variant";
  DROP TYPE "public"."enum_share_blocks_content_content_settings_padding_top";
  DROP TYPE "public"."enum_share_blocks_content_content_settings_padding_bottom";
  DROP TYPE "public"."enum_share_blocks_content_content_settings_background";
  DROP TYPE "public"."enum_share_blocks_content_content_position";
  DROP TYPE "public"."enum_share_blocks_features_features_with_title_feature_icon";
  DROP TYPE "public"."enum_share_blocks_features_features_with_title_feature_bg";
  DROP TYPE "public"."enum_share_blocks_features_features_uppercase_feature_icon";
  DROP TYPE "public"."enum_share_blocks_features_features_uppercase_feature_bg";
  DROP TYPE "public"."enum_share_blocks_features_features_settings_padding_top";
  DROP TYPE "public"."enum_share_blocks_features_features_settings_padding_bottom";
  DROP TYPE "public"."enum_share_blocks_features_features_settings_background";
  DROP TYPE "public"."enum_share_blocks_features_features_settings_link_type";
  DROP TYPE "public"."enum_share_blocks_features_features_settings_link_icon";
  DROP TYPE "public"."enum_share_blocks_features_features_settings_link_relation";
  DROP TYPE "public"."enum_share_blocks_features_features_settings_link_appearance";
  DROP TYPE "public"."enum_share_blocks_features_features_variant";
  DROP TYPE "public"."enum_share_blocks_form_form_settings_padding_top";
  DROP TYPE "public"."enum_share_blocks_form_form_settings_padding_bottom";
  DROP TYPE "public"."enum_share_blocks_form_form_settings_background";
  DROP TYPE "public"."enum_share_blocks_form_layout_variant";
  DROP TYPE "public"."enum_share_blocks_form_form_position";
  DROP TYPE "public"."enum_share_blocks_flats_snippets_flats_set_padding_top";
  DROP TYPE "public"."enum_share_blocks_flats_snippets_flats_set_padding_bottom";
  DROP TYPE "public"."enum_share_blocks_flats_snippets_flats_set_background";
  DROP TYPE "public"."enum_share_blocks_flats_snippets_flats_set_link_type";
  DROP TYPE "public"."enum_share_blocks_flats_snippets_flats_set_link_icon";
  DROP TYPE "public"."enum_share_blocks_flats_snippets_flats_set_link_relation";
  DROP TYPE "public"."enum_share_blocks_flats_snippets_flats_set_link_appearance";
  DROP TYPE "public"."enum_share_blocks_gallery_simple_slider_slide_width";
  DROP TYPE "public"."enum_share_blocks_gallery_multi_slider_images_slide_width";
  DROP TYPE "public"."enum_share_blocks_gallery_gallery_settings_padding_top";
  DROP TYPE "public"."enum_share_blocks_gallery_gallery_settings_padding_bottom";
  DROP TYPE "public"."enum_share_blocks_gallery_gallery_settings_background";
  DROP TYPE "public"."enum_share_blocks_gallery_controls_type";
  DROP TYPE "public"."enum_share_blocks_gallery_link_type";
  DROP TYPE "public"."enum_share_blocks_gallery_link_icon";
  DROP TYPE "public"."enum_share_blocks_gallery_link_relation";
  DROP TYPE "public"."enum_share_blocks_gallery_link_appearance";
  DROP TYPE "public"."enum_share_blocks_gallery_gallery_variant";
  DROP TYPE "public"."enum_share_blocks_hero_main_buttons_link_type";
  DROP TYPE "public"."enum_share_blocks_hero_main_buttons_link_icon";
  DROP TYPE "public"."enum_share_blocks_hero_main_buttons_link_relation";
  DROP TYPE "public"."enum_share_blocks_hero_main_buttons_link_appearance";
  DROP TYPE "public"."enum_share_blocks_hero_secondary_buttons_link_type";
  DROP TYPE "public"."enum_share_blocks_hero_secondary_buttons_link_icon";
  DROP TYPE "public"."enum_share_blocks_hero_secondary_buttons_link_relation";
  DROP TYPE "public"."enum_share_blocks_hero_type";
  DROP TYPE "public"."enum_share_blocks_highlighted_text_high_set_padding_top";
  DROP TYPE "public"."enum_share_blocks_highlighted_text_high_set_padding_bottom";
  DROP TYPE "public"."enum_share_blocks_highlighted_text_high_set_background";
  DROP TYPE "public"."enum_share_blocks_highlighted_text_highlighted_link_type";
  DROP TYPE "public"."enum_share_blocks_highlighted_text_highlighted_link_icon";
  DROP TYPE "public"."enum_share_blocks_highlighted_text_highlighted_link_relation";
  DROP TYPE "public"."enum_imgContent_person_bullet_points_feature_icon";
  DROP TYPE "public"."enum_imgContent_person_bullet_points_feature_bg";
  DROP TYPE "public"."enum_imgContent_image_content_settings_padding_top";
  DROP TYPE "public"."enum_imgContent_image_content_settings_padding_bottom";
  DROP TYPE "public"."enum_imgContent_image_content_settings_background";
  DROP TYPE "public"."enum_imgContent_content_type";
  DROP TYPE "public"."enum_imgContent_accordion_link_type";
  DROP TYPE "public"."enum_imgContent_accordion_link_icon";
  DROP TYPE "public"."enum_imgContent_accordion_link_relation";
  DROP TYPE "public"."enum_imgContent_accordion_link_appearance";
  DROP TYPE "public"."enum_imgContent_image_position";
  DROP TYPE "public"."enum_imgContent_image_size";
  DROP TYPE "public"."enum_share_blocks_images_grid_images_settings_padding_top";
  DROP TYPE "public"."enum_share_blocks_images_grid_images_settings_padding_bottom";
  DROP TYPE "public"."enum_share_blocks_images_grid_images_settings_background";
  DROP TYPE "public"."enum_share_blocks_images_grid_direction_variant";
  DROP TYPE "public"."enum_share_blocks_image_pins_image_pins_set_padding_top";
  DROP TYPE "public"."enum_share_blocks_image_pins_image_pins_set_padding_bottom";
  DROP TYPE "public"."enum_share_blocks_image_pins_image_pins_set_background";
  DROP TYPE "public"."enum_share_blocks_news_snippets_news_set_padding_top";
  DROP TYPE "public"."enum_share_blocks_news_snippets_news_set_padding_bottom";
  DROP TYPE "public"."enum_share_blocks_news_snippets_news_set_background";
  DROP TYPE "public"."enum_share_blocks_news_snippets_news_set_link_type";
  DROP TYPE "public"."enum_share_blocks_news_snippets_news_set_link_icon";
  DROP TYPE "public"."enum_share_blocks_news_snippets_news_set_link_relation";
  DROP TYPE "public"."enum_share_blocks_news_snippets_news_set_link_appearance";
  DROP TYPE "public"."enum_share_blocks_numbers_numbers_settings_padding_top";
  DROP TYPE "public"."enum_share_blocks_numbers_numbers_settings_padding_bottom";
  DROP TYPE "public"."enum_share_blocks_numbers_numbers_settings_background";
  DROP TYPE "public"."enum_share_blocks_timeline_timeline_settings_padding_top";
  DROP TYPE "public"."enum_share_blocks_timeline_timeline_settings_padding_bottom";
  DROP TYPE "public"."enum_share_blocks_timeline_timeline_settings_background";
  DROP TYPE "public"."enum_share_blocks_prices_prices_settings_padding_top";
  DROP TYPE "public"."enum_share_blocks_prices_prices_settings_padding_bottom";
  DROP TYPE "public"."enum_share_blocks_prices_prices_settings_background";
  DROP TYPE "public"."enum_share_blocks_interactive_picker_extended_views_direct";
  DROP TYPE "public"."enum_share_blocks_text_image_image_position";
  DROP TYPE "public"."enum_roles_permissions_projects";
  DROP TYPE "public"."enum_roles_permissions_pages";
  DROP TYPE "public"."enum_roles_permissions_globalheader";
  DROP TYPE "public"."enum_roles_permissions_globalfooter";
  DROP TYPE "public"."enum_roles_permissions_project_global_settings";
  DROP TYPE "public"."enum_roles_permissions_buildings";
  DROP TYPE "public"."enum_roles_permissions_flats";
  DROP TYPE "public"."enum_roles_permissions_flat_detail_page";
  DROP TYPE "public"."enum_roles_permissions_sectors";
  DROP TYPE "public"."enum_roles_permissions_floors";
  DROP TYPE "public"."enum_roles_permissions_news";
  DROP TYPE "public"."enum_roles_permissions_media";
  DROP TYPE "public"."enum_roles_permissions_documents";
  DROP TYPE "public"."enum_roles_permissions_share";
  DROP TYPE "public"."enum_projects_level_stoone";
  DROP TYPE "public"."enum_projects_cron_settings_schedule";
  DROP TYPE "public"."enum_projects_cron_settings_status";
  DROP TYPE "public"."enum_pages_blocks_hero_main_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_hero_main_buttons_link_icon";
  DROP TYPE "public"."enum_pages_blocks_hero_main_buttons_link_relation";
  DROP TYPE "public"."enum_pages_blocks_hero_main_buttons_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_hero_secondary_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_hero_secondary_buttons_link_icon";
  DROP TYPE "public"."enum_pages_blocks_hero_secondary_buttons_link_relation";
  DROP TYPE "public"."enum_pages_blocks_hero_type";
  DROP TYPE "public"."enum_pages_blocks_text_image_image_position";
  DROP TYPE "public"."enum_pages_blocks_banner_banner_settings_padding_top";
  DROP TYPE "public"."enum_pages_blocks_banner_banner_settings_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_banner_banner_settings_background";
  DROP TYPE "public"."enum_pages_blocks_banner_banner_variant";
  DROP TYPE "public"."enum_pages_blocks_banner_banner_content_position";
  DROP TYPE "public"."enum_pages_blocks_banner_banner_button_type";
  DROP TYPE "public"."enum_pages_blocks_banner_banner_button_icon";
  DROP TYPE "public"."enum_pages_blocks_banner_banner_button_relation";
  DROP TYPE "public"."enum_pages_blocks_benefits_benefits_settings_padding_top";
  DROP TYPE "public"."enum_pages_blocks_benefits_benefits_settings_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_benefits_benefits_settings_background";
  DROP TYPE "public"."enum_pages_blocks_contact_contact_settings_padding_top";
  DROP TYPE "public"."enum_pages_blocks_contact_contact_settings_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_contact_contact_settings_background";
  DROP TYPE "public"."enum_pages_blocks_contact_contact_form_position";
  DROP TYPE "public"."enum_pages_blocks_contact_variant";
  DROP TYPE "public"."enum_pages_blocks_content_content_settings_padding_top";
  DROP TYPE "public"."enum_pages_blocks_content_content_settings_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_content_content_settings_background";
  DROP TYPE "public"."enum_pages_blocks_content_content_position";
  DROP TYPE "public"."enum_pages_blocks_features_features_with_title_feature_icon";
  DROP TYPE "public"."enum_pages_blocks_features_features_with_title_feature_bg";
  DROP TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_icon";
  DROP TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_bg";
  DROP TYPE "public"."enum_pages_blocks_features_features_settings_padding_top";
  DROP TYPE "public"."enum_pages_blocks_features_features_settings_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_features_features_settings_background";
  DROP TYPE "public"."enum_pages_blocks_features_features_settings_link_type";
  DROP TYPE "public"."enum_pages_blocks_features_features_settings_link_icon";
  DROP TYPE "public"."enum_pages_blocks_features_features_settings_link_relation";
  DROP TYPE "public"."enum_pages_blocks_features_features_settings_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_features_features_variant";
  DROP TYPE "public"."enum_pages_blocks_form_form_settings_padding_top";
  DROP TYPE "public"."enum_pages_blocks_form_form_settings_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_form_form_settings_background";
  DROP TYPE "public"."enum_pages_blocks_form_layout_variant";
  DROP TYPE "public"."enum_pages_blocks_form_form_position";
  DROP TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_padding_top";
  DROP TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_background";
  DROP TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_link_type";
  DROP TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_link_icon";
  DROP TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_link_relation";
  DROP TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_gallery_simple_slider_slide_width";
  DROP TYPE "public"."enum_pages_blocks_gallery_multi_slider_images_slide_width";
  DROP TYPE "public"."enum_pages_blocks_gallery_gallery_settings_padding_top";
  DROP TYPE "public"."enum_pages_blocks_gallery_gallery_settings_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_gallery_gallery_settings_background";
  DROP TYPE "public"."enum_pages_blocks_gallery_controls_type";
  DROP TYPE "public"."enum_pages_blocks_gallery_link_type";
  DROP TYPE "public"."enum_pages_blocks_gallery_link_icon";
  DROP TYPE "public"."enum_pages_blocks_gallery_link_relation";
  DROP TYPE "public"."enum_pages_blocks_gallery_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_gallery_gallery_variant";
  DROP TYPE "public"."enum_pages_blocks_highlighted_text_high_set_padding_top";
  DROP TYPE "public"."enum_pages_blocks_highlighted_text_high_set_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_highlighted_text_high_set_background";
  DROP TYPE "public"."enum_pages_blocks_highlighted_text_highlighted_link_type";
  DROP TYPE "public"."enum_pages_blocks_highlighted_text_highlighted_link_icon";
  DROP TYPE "public"."enum_pages_blocks_highlighted_text_highlighted_link_relation";
  DROP TYPE "public"."enum_pages_blocks_images_grid_images_settings_padding_top";
  DROP TYPE "public"."enum_pages_blocks_images_grid_images_settings_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_images_grid_images_settings_background";
  DROP TYPE "public"."enum_pages_blocks_images_grid_direction_variant";
  DROP TYPE "public"."enum_pages_blocks_image_pins_image_pins_set_padding_top";
  DROP TYPE "public"."enum_pages_blocks_image_pins_image_pins_set_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_image_pins_image_pins_set_background";
  DROP TYPE "public"."enum_pages_blocks_news_snippets_news_set_padding_top";
  DROP TYPE "public"."enum_pages_blocks_news_snippets_news_set_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_news_snippets_news_set_background";
  DROP TYPE "public"."enum_pages_blocks_news_snippets_news_set_link_type";
  DROP TYPE "public"."enum_pages_blocks_news_snippets_news_set_link_icon";
  DROP TYPE "public"."enum_pages_blocks_news_snippets_news_set_link_relation";
  DROP TYPE "public"."enum_pages_blocks_news_snippets_news_set_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_numbers_numbers_settings_padding_top";
  DROP TYPE "public"."enum_pages_blocks_numbers_numbers_settings_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_numbers_numbers_settings_background";
  DROP TYPE "public"."enum_pages_blocks_timeline_timeline_settings_padding_top";
  DROP TYPE "public"."enum_pages_blocks_timeline_timeline_settings_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_timeline_timeline_settings_background";
  DROP TYPE "public"."enum_pages_blocks_prices_prices_settings_padding_top";
  DROP TYPE "public"."enum_pages_blocks_prices_prices_settings_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_prices_prices_settings_background";
  DROP TYPE "public"."enum_pages_blocks_interactive_picker_extended_views_direct";
  DROP TYPE "public"."enum_pages_meta_twitter_card";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_hero_main_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_hero_main_buttons_link_icon";
  DROP TYPE "public"."enum__pages_v_blocks_hero_main_buttons_link_relation";
  DROP TYPE "public"."enum__pages_v_blocks_hero_main_buttons_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_hero_secondary_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_hero_secondary_buttons_link_icon";
  DROP TYPE "public"."enum__pages_v_blocks_hero_secondary_buttons_link_relation";
  DROP TYPE "public"."enum__pages_v_blocks_hero_type";
  DROP TYPE "public"."enum__pages_v_blocks_text_image_image_position";
  DROP TYPE "public"."enum__pages_v_blocks_banner_banner_settings_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_banner_banner_settings_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_banner_banner_settings_background";
  DROP TYPE "public"."enum__pages_v_blocks_banner_banner_variant";
  DROP TYPE "public"."enum__pages_v_blocks_banner_banner_content_position";
  DROP TYPE "public"."enum__pages_v_blocks_banner_banner_button_type";
  DROP TYPE "public"."enum__pages_v_blocks_banner_banner_button_icon";
  DROP TYPE "public"."enum__pages_v_blocks_banner_banner_button_relation";
  DROP TYPE "public"."enum__pages_v_blocks_benefits_benefits_settings_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_benefits_benefits_settings_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_benefits_benefits_settings_background";
  DROP TYPE "public"."enum__pages_v_blocks_contact_contact_settings_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_contact_contact_settings_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_contact_contact_settings_background";
  DROP TYPE "public"."enum__pages_v_blocks_contact_contact_form_position";
  DROP TYPE "public"."enum__pages_v_blocks_contact_variant";
  DROP TYPE "public"."enum__pages_v_blocks_content_content_settings_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_content_content_settings_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_content_content_settings_background";
  DROP TYPE "public"."enum__pages_v_blocks_content_content_position";
  DROP TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_icon";
  DROP TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_bg";
  DROP TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_icon";
  DROP TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_bg";
  DROP TYPE "public"."enum__pages_v_blocks_features_features_settings_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_features_features_settings_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_features_features_settings_background";
  DROP TYPE "public"."enum__pages_v_blocks_features_features_settings_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_features_features_settings_link_icon";
  DROP TYPE "public"."enum__pages_v_blocks_features_features_settings_link_relation";
  DROP TYPE "public"."enum__pages_v_blocks_features_features_settings_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_features_features_variant";
  DROP TYPE "public"."enum__pages_v_blocks_form_form_settings_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_form_form_settings_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_form_form_settings_background";
  DROP TYPE "public"."enum__pages_v_blocks_form_layout_variant";
  DROP TYPE "public"."enum__pages_v_blocks_form_form_position";
  DROP TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_background";
  DROP TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_link_icon";
  DROP TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_link_relation";
  DROP TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_simple_slider_slide_width";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_multi_slider_images_slide_width";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_gallery_settings_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_gallery_settings_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_gallery_settings_background";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_controls_type";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_link_icon";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_link_relation";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_gallery_variant";
  DROP TYPE "public"."enum__pages_v_blocks_highlighted_text_high_set_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_highlighted_text_high_set_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_highlighted_text_high_set_background";
  DROP TYPE "public"."enum__pages_v_blocks_highlighted_text_highlighted_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_highlighted_text_highlighted_link_icon";
  DROP TYPE "public"."enum__pages_v_blocks_highlighted_text_highlighted_link_relation";
  DROP TYPE "public"."enum__imgContent_v_person_bullet_points_feature_icon";
  DROP TYPE "public"."enum__imgContent_v_person_bullet_points_feature_bg";
  DROP TYPE "public"."enum__imgContent_v_image_content_settings_padding_top";
  DROP TYPE "public"."enum__imgContent_v_image_content_settings_padding_bottom";
  DROP TYPE "public"."enum__imgContent_v_image_content_settings_background";
  DROP TYPE "public"."enum__imgContent_v_content_type";
  DROP TYPE "public"."enum__imgContent_v_accordion_link_type";
  DROP TYPE "public"."enum__imgContent_v_accordion_link_icon";
  DROP TYPE "public"."enum__imgContent_v_accordion_link_relation";
  DROP TYPE "public"."enum__imgContent_v_accordion_link_appearance";
  DROP TYPE "public"."enum__imgContent_v_image_position";
  DROP TYPE "public"."enum__imgContent_v_image_size";
  DROP TYPE "public"."enum__pages_v_blocks_images_grid_images_settings_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_images_grid_images_settings_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_images_grid_images_settings_background";
  DROP TYPE "public"."enum__pages_v_blocks_images_grid_direction_variant";
  DROP TYPE "public"."enum__pages_v_blocks_image_pins_image_pins_set_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_image_pins_image_pins_set_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_image_pins_image_pins_set_background";
  DROP TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_background";
  DROP TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_link_icon";
  DROP TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_link_relation";
  DROP TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_numbers_numbers_settings_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_numbers_numbers_settings_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_numbers_numbers_settings_background";
  DROP TYPE "public"."enum__pages_v_blocks_timeline_timeline_settings_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_timeline_timeline_settings_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_timeline_timeline_settings_background";
  DROP TYPE "public"."enum__pages_v_blocks_prices_prices_settings_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_prices_prices_settings_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_prices_prices_settings_background";
  DROP TYPE "public"."enum__pages_v_blocks_interactive_picker_extended_views_direct";
  DROP TYPE "public"."enum__pages_v_version_meta_twitter_card";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum__pages_v_published_locale";
  DROP TYPE "public"."enum_globalheader_nav_items_link_type";
  DROP TYPE "public"."enum_globalheader_nav_items_link_icon";
  DROP TYPE "public"."enum_globalheader_nav_items_link_relation";
  DROP TYPE "public"."enum_globalheader_cta_buttons_link_type";
  DROP TYPE "public"."enum_globalheader_cta_buttons_link_icon";
  DROP TYPE "public"."enum_globalheader_cta_buttons_link_relation";
  DROP TYPE "public"."enum_globalfooter_highlighted_contacts_type";
  DROP TYPE "public"."enum_globalfooter_social_links_icon_type";
  DROP TYPE "public"."enum_globalfooter_bottom_links_link_type";
  DROP TYPE "public"."enum_globalfooter_bottom_links_link_icon";
  DROP TYPE "public"."enum_globalfooter_bottom_links_link_relation";
  DROP TYPE "public"."enum_flats_gallery_simple_slider_slide_width";
  DROP TYPE "public"."enum_flats_gallery_multi_slider_images_slide_width";
  DROP TYPE "public"."enum_flats_gallery_gallery_settings_padding_top";
  DROP TYPE "public"."enum_flats_gallery_gallery_settings_padding_bottom";
  DROP TYPE "public"."enum_flats_gallery_gallery_settings_background";
  DROP TYPE "public"."enum_flats_gallery_controls_type";
  DROP TYPE "public"."enum_flats_gallery_gallery_variant";
  DROP TYPE "public"."enum_flats_meta_twitter_card";
  DROP TYPE "public"."enum_flats_gallery_link_type";
  DROP TYPE "public"."enum_flats_gallery_link_icon";
  DROP TYPE "public"."enum_flats_gallery_link_relation";
  DROP TYPE "public"."enum_flats_gallery_link_appearance";
  DROP TYPE "public"."enum_project_global_settings_meta_twitter_card";
  DROP TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_type";
  DROP TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_icon";
  DROP TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_relation";
  DROP TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_appearance";
  DROP TYPE "public"."enum_flDet_blocks_hero_secondary_buttons_link_type";
  DROP TYPE "public"."enum_flDet_blocks_hero_secondary_buttons_link_icon";
  DROP TYPE "public"."enum_flDet_blocks_hero_secondary_buttons_link_relation";
  DROP TYPE "public"."enum_flDet_blocks_hero_type";
  DROP TYPE "public"."enum_flDet_blocks_text_image_image_position";
  DROP TYPE "public"."enum_flDet_blocks_banner_banner_settings_padding_top";
  DROP TYPE "public"."enum_flDet_blocks_banner_banner_settings_padding_bottom";
  DROP TYPE "public"."enum_flDet_blocks_banner_banner_settings_background";
  DROP TYPE "public"."enum_flDet_blocks_banner_banner_variant";
  DROP TYPE "public"."enum_flDet_blocks_banner_banner_content_position";
  DROP TYPE "public"."enum_flDet_blocks_banner_banner_button_type";
  DROP TYPE "public"."enum_flDet_blocks_banner_banner_button_icon";
  DROP TYPE "public"."enum_flDet_blocks_banner_banner_button_relation";
  DROP TYPE "public"."enum_flDet_blocks_benefits_benefits_settings_padding_top";
  DROP TYPE "public"."enum_flDet_blocks_benefits_benefits_settings_padding_bottom";
  DROP TYPE "public"."enum_flDet_blocks_benefits_benefits_settings_background";
  DROP TYPE "public"."enum_flDet_blocks_contact_contact_settings_padding_top";
  DROP TYPE "public"."enum_flDet_blocks_contact_contact_settings_padding_bottom";
  DROP TYPE "public"."enum_flDet_blocks_contact_contact_settings_background";
  DROP TYPE "public"."enum_flDet_blocks_contact_contact_form_position";
  DROP TYPE "public"."enum_flDet_blocks_contact_variant";
  DROP TYPE "public"."enum_flDet_blocks_content_content_settings_padding_top";
  DROP TYPE "public"."enum_flDet_blocks_content_content_settings_padding_bottom";
  DROP TYPE "public"."enum_flDet_blocks_content_content_settings_background";
  DROP TYPE "public"."enum_flDet_blocks_content_content_position";
  DROP TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_icon";
  DROP TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_bg";
  DROP TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_icon";
  DROP TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_bg";
  DROP TYPE "public"."enum_flDet_blocks_features_features_settings_padding_top";
  DROP TYPE "public"."enum_flDet_blocks_features_features_settings_padding_bottom";
  DROP TYPE "public"."enum_flDet_blocks_features_features_settings_background";
  DROP TYPE "public"."enum_flDet_blocks_features_features_settings_link_type";
  DROP TYPE "public"."enum_flDet_blocks_features_features_settings_link_icon";
  DROP TYPE "public"."enum_flDet_blocks_features_features_settings_link_relation";
  DROP TYPE "public"."enum_flDet_blocks_features_features_settings_link_appearance";
  DROP TYPE "public"."enum_flDet_blocks_features_features_variant";
  DROP TYPE "public"."enum_flDet_blocks_form_form_settings_padding_top";
  DROP TYPE "public"."enum_flDet_blocks_form_form_settings_padding_bottom";
  DROP TYPE "public"."enum_flDet_blocks_form_form_settings_background";
  DROP TYPE "public"."enum_flDet_blocks_form_layout_variant";
  DROP TYPE "public"."enum_flDet_blocks_form_form_position";
  DROP TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_padding_top";
  DROP TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_padding_bottom";
  DROP TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_background";
  DROP TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_type";
  DROP TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_icon";
  DROP TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_relation";
  DROP TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_appearance";
  DROP TYPE "public"."enum_flDet_blocks_gallery_simple_slider_slide_width";
  DROP TYPE "public"."enum_flDet_blocks_gallery_multi_slider_images_slide_width";
  DROP TYPE "public"."enum_flDet_blocks_gallery_gallery_settings_padding_top";
  DROP TYPE "public"."enum_flDet_blocks_gallery_gallery_settings_padding_bottom";
  DROP TYPE "public"."enum_flDet_blocks_gallery_gallery_settings_background";
  DROP TYPE "public"."enum_flDet_blocks_gallery_controls_type";
  DROP TYPE "public"."enum_flDet_blocks_gallery_link_type";
  DROP TYPE "public"."enum_flDet_blocks_gallery_link_icon";
  DROP TYPE "public"."enum_flDet_blocks_gallery_link_relation";
  DROP TYPE "public"."enum_flDet_blocks_gallery_link_appearance";
  DROP TYPE "public"."enum_flDet_blocks_gallery_gallery_variant";
  DROP TYPE "public"."enum_flDet_blocks_highlighted_text_high_set_padding_top";
  DROP TYPE "public"."enum_flDet_blocks_highlighted_text_high_set_padding_bottom";
  DROP TYPE "public"."enum_flDet_blocks_highlighted_text_high_set_background";
  DROP TYPE "public"."enum_flDet_blocks_highlighted_text_highlighted_link_type";
  DROP TYPE "public"."enum_flDet_blocks_highlighted_text_highlighted_link_icon";
  DROP TYPE "public"."enum_flDet_blocks_highlighted_text_highlighted_link_relation";
  DROP TYPE "public"."enum_flDet_blocks_images_grid_images_settings_padding_top";
  DROP TYPE "public"."enum_flDet_blocks_images_grid_images_settings_padding_bottom";
  DROP TYPE "public"."enum_flDet_blocks_images_grid_images_settings_background";
  DROP TYPE "public"."enum_flDet_blocks_images_grid_direction_variant";
  DROP TYPE "public"."enum_flDet_blocks_image_pins_image_pins_set_padding_top";
  DROP TYPE "public"."enum_flDet_blocks_image_pins_image_pins_set_padding_bottom";
  DROP TYPE "public"."enum_flDet_blocks_image_pins_image_pins_set_background";
  DROP TYPE "public"."enum_flDet_blocks_news_snippets_news_set_padding_top";
  DROP TYPE "public"."enum_flDet_blocks_news_snippets_news_set_padding_bottom";
  DROP TYPE "public"."enum_flDet_blocks_news_snippets_news_set_background";
  DROP TYPE "public"."enum_flDet_blocks_news_snippets_news_set_link_type";
  DROP TYPE "public"."enum_flDet_blocks_news_snippets_news_set_link_icon";
  DROP TYPE "public"."enum_flDet_blocks_news_snippets_news_set_link_relation";
  DROP TYPE "public"."enum_flDet_blocks_news_snippets_news_set_link_appearance";
  DROP TYPE "public"."enum_flDet_blocks_numbers_numbers_settings_padding_top";
  DROP TYPE "public"."enum_flDet_blocks_numbers_numbers_settings_padding_bottom";
  DROP TYPE "public"."enum_flDet_blocks_numbers_numbers_settings_background";
  DROP TYPE "public"."enum_flDet_blocks_timeline_timeline_settings_padding_top";
  DROP TYPE "public"."enum_flDet_blocks_timeline_timeline_settings_padding_bottom";
  DROP TYPE "public"."enum_flDet_blocks_timeline_timeline_settings_background";
  DROP TYPE "public"."enum_flDet_blocks_prices_prices_settings_padding_top";
  DROP TYPE "public"."enum_flDet_blocks_prices_prices_settings_padding_bottom";
  DROP TYPE "public"."enum_flDet_blocks_prices_prices_settings_background";
  DROP TYPE "public"."enum_flDet_blocks_interactive_picker_extended_views_direct";
  DROP TYPE "public"."enum_flDet_meta_twitter_card";
  DROP TYPE "public"."enum_news_meta_twitter_card";
  DROP TYPE "public"."enum_news_status";
  DROP TYPE "public"."enum__news_v_version_meta_twitter_card";
  DROP TYPE "public"."enum__news_v_version_status";`)
}
