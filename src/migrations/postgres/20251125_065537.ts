import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_share_blocks_highlighted_text_buttons_button_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_share_blocks_highlighted_text_buttons_button_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_share_blocks_highlighted_text_buttons_button_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_share_blocks_highlighted_text_buttons_button_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_share_blocks_image_pins_pins_variant" AS ENUM('default', 'contentBox');
  CREATE TYPE "public"."enum_share_blocks_map_pins_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_share_blocks_sticky_slides_sticky_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_share_blocks_sticky_slides_sticky_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_share_blocks_sticky_slides_sticky_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_share_blocks_multi_gallery_grid_items_complex_layout" AS ENUM('a', 'b', 'c');
  CREATE TYPE "public"."enum_share_blocks_multi_gallery_grid_items_layout_variant" AS ENUM('complex', 'simple');
  CREATE TYPE "public"."enum_share_blocks_multi_gallery_multi_g_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_share_blocks_multi_gallery_multi_g_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_share_blocks_multi_gallery_multi_g_set_background" AS ENUM('light');
  CREATE TYPE "public"."enum_pages_blocks_highlighted_text_buttons_button_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_pages_blocks_highlighted_text_buttons_button_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_pages_blocks_highlighted_text_buttons_button_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_pages_blocks_highlighted_text_buttons_button_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_image_pins_pins_variant" AS ENUM('default', 'contentBox');
  CREATE TYPE "public"."enum_pages_blocks_map_pins_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_pages_blocks_sticky_slides_sticky_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_pages_blocks_sticky_slides_sticky_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_pages_blocks_sticky_slides_sticky_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_pages_blocks_multi_gallery_grid_items_complex_layout" AS ENUM('a', 'b', 'c');
  CREATE TYPE "public"."enum_pages_blocks_multi_gallery_grid_items_layout_variant" AS ENUM('complex', 'simple');
  CREATE TYPE "public"."enum_pages_blocks_multi_gallery_multi_g_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_pages_blocks_multi_gallery_multi_g_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_pages_blocks_multi_gallery_multi_g_set_background" AS ENUM('light');
  CREATE TYPE "public"."enum__pages_v_blocks_highlighted_text_buttons_button_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum__pages_v_blocks_highlighted_text_buttons_button_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum__pages_v_blocks_highlighted_text_buttons_button_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum__pages_v_blocks_highlighted_text_buttons_button_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_image_pins_pins_variant" AS ENUM('default', 'contentBox');
  CREATE TYPE "public"."enum__pages_v_blocks_map_pins_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum__pages_v_blocks_sticky_slides_sticky_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum__pages_v_blocks_sticky_slides_sticky_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum__pages_v_blocks_sticky_slides_sticky_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum__pages_v_blocks_multi_gallery_grid_items_complex_layout" AS ENUM('a', 'b', 'c');
  CREATE TYPE "public"."enum__pages_v_blocks_multi_gallery_grid_items_layout_variant" AS ENUM('complex', 'simple');
  CREATE TYPE "public"."enum__pages_v_blocks_multi_gallery_multi_g_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum__pages_v_blocks_multi_gallery_multi_g_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum__pages_v_blocks_multi_gallery_multi_g_set_background" AS ENUM('light');
  CREATE TYPE "public"."enum_flDet_blocks_highlighted_text_buttons_button_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_flDet_blocks_highlighted_text_buttons_button_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_flDet_blocks_highlighted_text_buttons_button_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_flDet_blocks_highlighted_text_buttons_button_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_flDet_blocks_image_pins_pins_variant" AS ENUM('default', 'contentBox');
  CREATE TYPE "public"."enum_flDet_blocks_map_pins_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_flDet_blocks_sticky_slides_sticky_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_flDet_blocks_sticky_slides_sticky_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_flDet_blocks_sticky_slides_sticky_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_flDet_blocks_multi_gallery_grid_items_complex_layout" AS ENUM('a', 'b', 'c');
  CREATE TYPE "public"."enum_flDet_blocks_multi_gallery_grid_items_layout_variant" AS ENUM('complex', 'simple');
  CREATE TYPE "public"."enum_flDet_blocks_multi_gallery_multi_g_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_flDet_blocks_multi_gallery_multi_g_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_flDet_blocks_multi_gallery_multi_g_set_background" AS ENUM('light');
  CREATE TYPE "public"."enum_newsDet_blocks_banner_banner_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_banner_banner_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_banner_banner_settings_background" AS ENUM('light');
  CREATE TYPE "public"."enum_newsDet_blocks_banner_banner_variant" AS ENUM('large', 'small');
  CREATE TYPE "public"."enum_newsDet_blocks_banner_banner_content_position" AS ENUM('center', 'left', 'right');
  CREATE TYPE "public"."enum_newsDet_blocks_banner_banner_button_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_newsDet_blocks_banner_banner_button_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_newsDet_blocks_banner_banner_button_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_newsDet_blocks_benefits_benefits_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_benefits_benefits_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_benefits_benefits_settings_background" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_newsDet_blocks_contact_contact_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_contact_contact_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_contact_contact_settings_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_newsDet_blocks_contact_variant" AS ENUM('withContactInfo', 'onlyForm');
  CREATE TYPE "public"."enum_newsDet_blocks_contact_contact_form_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_newsDet_blocks_content_content_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_content_content_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_content_content_settings_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_newsDet_blocks_content_content_position" AS ENUM('center', 'left', 'right');
  CREATE TYPE "public"."enum_newsDet_blocks_features_features_with_title_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_newsDet_blocks_features_features_with_title_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_newsDet_blocks_features_features_with_image_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_newsDet_blocks_features_features_uppercase_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_newsDet_blocks_features_features_uppercase_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_newsDet_blocks_features_features_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_features_features_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_features_features_settings_background" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_newsDet_blocks_features_features_settings_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_newsDet_blocks_features_features_settings_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_newsDet_blocks_features_features_settings_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_newsDet_blocks_features_features_settings_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_newsDet_blocks_features_features_variant" AS ENUM('uppercase', 'withImage', 'withTitle');
  CREATE TYPE "public"."enum_newsDet_blocks_form_form_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_form_form_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_form_form_settings_background" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_newsDet_blocks_form_layout_variant" AS ENUM('withContent', 'onlyForm', 'withGallery');
  CREATE TYPE "public"."enum_newsDet_blocks_form_form_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_newsDet_blocks_flats_snippets_flats_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_flats_snippets_flats_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_flats_snippets_flats_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_newsDet_blocks_flats_snippets_flats_set_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_newsDet_blocks_flats_snippets_flats_set_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_newsDet_blocks_flats_snippets_flats_set_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_newsDet_blocks_flats_snippets_flats_set_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_newsDet_blocks_gallery_simple_slider_slide_width" AS ENUM('square', 'wide', 'tall');
  CREATE TYPE "public"."enum_newsDet_blocks_gallery_multi_slider_images_slide_width" AS ENUM('square', 'wide', 'tall');
  CREATE TYPE "public"."enum_newsDet_blocks_gallery_gallery_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_gallery_gallery_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_gallery_gallery_settings_background" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_newsDet_blocks_gallery_controls_type" AS ENUM('arrows', 'dots', 'dotsAndArrows', 'none');
  CREATE TYPE "public"."enum_newsDet_blocks_gallery_gallery_variant" AS ENUM('simpleSlider', 'multipleSliders', 'fullWidth');
  CREATE TYPE "public"."enum_newsDet_blocks_gallery_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_newsDet_blocks_gallery_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_newsDet_blocks_gallery_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_newsDet_blocks_gallery_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_newsDet_blocks_hero_main_buttons_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_newsDet_blocks_hero_main_buttons_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_newsDet_blocks_hero_main_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_newsDet_blocks_hero_main_buttons_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_newsDet_blocks_hero_secondary_buttons_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_newsDet_blocks_hero_secondary_buttons_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_newsDet_blocks_hero_secondary_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_newsDet_blocks_hero_type" AS ENUM('imageOnly', 'slideshow', 'video');
  CREATE TYPE "public"."enum_newsDet_blocks_highlighted_text_buttons_button_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_newsDet_blocks_highlighted_text_buttons_button_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_newsDet_blocks_highlighted_text_buttons_button_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_newsDet_blocks_highlighted_text_buttons_button_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_newsDet_blocks_highlighted_text_high_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_highlighted_text_high_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_highlighted_text_high_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_newsDet_blocks_highlighted_text_text_size" AS ENUM('large', 'medium', 'body');
  CREATE TYPE "public"."enum_newsDet_blocks_img_content_person_bullets_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_newsDet_blocks_img_content_person_bullets_feature_bg" AS ENUM('none', 'cream', 'jungle', 'mindaro');
  CREATE TYPE "public"."enum_newsDet_blocks_img_content_img_cont_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_img_content_img_cont_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_img_content_img_cont_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_newsDet_blocks_img_content_content_type" AS ENUM('default', 'person', 'accordion');
  CREATE TYPE "public"."enum_newsDet_blocks_img_content_accordion_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_newsDet_blocks_img_content_accordion_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_newsDet_blocks_img_content_accordion_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_newsDet_blocks_img_content_accordion_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_newsDet_blocks_img_content_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_newsDet_blocks_images_grid_images_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_images_grid_images_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_images_grid_images_settings_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_newsDet_blocks_images_grid_layout" AS ENUM('withContent', 'onlyImages');
  CREATE TYPE "public"."enum_newsDet_blocks_images_grid_direction_variant" AS ENUM('default', 'reverse');
  CREATE TYPE "public"."enum_newsDet_blocks_image_pins_image_pins_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_image_pins_image_pins_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_image_pins_image_pins_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_newsDet_blocks_image_pins_pins_variant" AS ENUM('default', 'contentBox');
  CREATE TYPE "public"."enum_newsDet_blocks_map_pins_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_newsDet_blocks_map_map_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_map_map_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_map_map_settings_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_newsDet_blocks_news_snippets_news_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_news_snippets_news_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_news_snippets_news_set_background" AS ENUM('dark', 'light');
  CREATE TYPE "public"."enum_newsDet_blocks_news_snippets_news_set_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_newsDet_blocks_news_snippets_news_set_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_newsDet_blocks_news_snippets_news_set_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_newsDet_blocks_news_snippets_news_set_link_appearance" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_newsDet_blocks_numbers_numbers_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_numbers_numbers_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_numbers_numbers_settings_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_newsDet_blocks_timeline_timeline_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_timeline_timeline_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_timeline_timeline_settings_background" AS ENUM('light');
  CREATE TYPE "public"."enum_newsDet_blocks_our_projects_our_proj_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_our_projects_our_proj_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_our_projects_our_proj_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_newsDet_blocks_prices_prices_settings_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_prices_prices_settings_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_prices_prices_settings_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_newsDet_blocks_interactive_picker_extended_views_direct" AS ENUM('south', 'north', 'east', 'west', 'northwest', 'northeast', 'southeast', 'southwest');
  CREATE TYPE "public"."enum_newsDet_blocks_step_cards_step_cards_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_step_cards_step_cards_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_step_cards_step_cards_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_newsDet_blocks_sticky_slides_sticky_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_sticky_slides_sticky_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_sticky_slides_sticky_set_background" AS ENUM('dark');
  CREATE TYPE "public"."enum_newsDet_blocks_multi_gallery_grid_items_complex_layout" AS ENUM('a', 'b', 'c');
  CREATE TYPE "public"."enum_newsDet_blocks_multi_gallery_grid_items_layout_variant" AS ENUM('complex', 'simple');
  CREATE TYPE "public"."enum_newsDet_blocks_multi_gallery_multi_g_set_padding_top" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_multi_gallery_multi_g_set_padding_bottom" AS ENUM('none', 'extraSmall', 'small', 'medium', 'large', 'extraLarge');
  CREATE TYPE "public"."enum_newsDet_blocks_multi_gallery_multi_g_set_background" AS ENUM('light');
  CREATE TYPE "public"."enum_newsDet_blocks_text_image_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_newsDet_meta_twitter_card" AS ENUM('summary', 'summary_large_image', 'app', 'player');
  ALTER TYPE "public"."enum_share_blocks_features_features_with_title_feature_icon" ADD VALUE 'trainRegional' BEFORE 'tram';
  ALTER TYPE "public"."enum_share_blocks_features_features_with_title_feature_icon" ADD VALUE 'download' BEFORE 'phone';
  ALTER TYPE "public"."enum_share_blocks_features_features_with_title_feature_icon" ADD VALUE 'file' BEFORE 'phone';
  ALTER TYPE "public"."enum_share_blocks_features_features_with_title_feature_icon" ADD VALUE 'hand' BEFORE 'phone';
  ALTER TYPE "public"."enum_share_blocks_features_features_with_title_feature_icon" ADD VALUE 'wallet' BEFORE 'phone';
  ALTER TYPE "public"."enum_share_blocks_features_features_with_title_feature_icon" ADD VALUE 'zero' BEFORE 'phone';
  ALTER TYPE "public"."enum_share_blocks_features_features_with_title_feature_icon" ADD VALUE 'percentage' BEFORE 'phone';
  ALTER TYPE "public"."enum_share_blocks_features_features_with_title_feature_icon" ADD VALUE 'magnifyingGlass' BEFORE 'phone';
  ALTER TYPE "public"."enum_share_blocks_features_features_uppercase_feature_icon" ADD VALUE 'trainRegional' BEFORE 'tram';
  ALTER TYPE "public"."enum_share_blocks_features_features_uppercase_feature_icon" ADD VALUE 'download' BEFORE 'phone';
  ALTER TYPE "public"."enum_share_blocks_features_features_uppercase_feature_icon" ADD VALUE 'file' BEFORE 'phone';
  ALTER TYPE "public"."enum_share_blocks_features_features_uppercase_feature_icon" ADD VALUE 'hand' BEFORE 'phone';
  ALTER TYPE "public"."enum_share_blocks_features_features_uppercase_feature_icon" ADD VALUE 'wallet' BEFORE 'phone';
  ALTER TYPE "public"."enum_share_blocks_features_features_uppercase_feature_icon" ADD VALUE 'zero' BEFORE 'phone';
  ALTER TYPE "public"."enum_share_blocks_features_features_uppercase_feature_icon" ADD VALUE 'percentage' BEFORE 'phone';
  ALTER TYPE "public"."enum_share_blocks_features_features_uppercase_feature_icon" ADD VALUE 'magnifyingGlass' BEFORE 'phone';
  DO $$ BEGIN
    ALTER TYPE "public"."enum_share_blocks_gallery_gallery_settings_background" ADD VALUE 'light';
  EXCEPTION
    WHEN SQLSTATE '42710' THEN null;
  END $$;
  ALTER TYPE "public"."enum_share_blocks_highlighted_text_text_size" ADD VALUE 'body';
  ALTER TYPE "public"."enum_share_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'trainRegional' BEFORE 'tram';
  ALTER TYPE "public"."enum_share_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'download' BEFORE 'phone';
  ALTER TYPE "public"."enum_share_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'file' BEFORE 'phone';
  ALTER TYPE "public"."enum_share_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'hand' BEFORE 'phone';
  ALTER TYPE "public"."enum_share_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'wallet' BEFORE 'phone';
  ALTER TYPE "public"."enum_share_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'zero' BEFORE 'phone';
  ALTER TYPE "public"."enum_share_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'percentage' BEFORE 'phone';
  ALTER TYPE "public"."enum_share_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'magnifyingGlass' BEFORE 'phone';
  ALTER TYPE "public"."enum_pages_blocks_features_features_with_title_feature_icon" ADD VALUE 'trainRegional' BEFORE 'tram';
  ALTER TYPE "public"."enum_pages_blocks_features_features_with_title_feature_icon" ADD VALUE 'download' BEFORE 'phone';
  ALTER TYPE "public"."enum_pages_blocks_features_features_with_title_feature_icon" ADD VALUE 'file' BEFORE 'phone';
  ALTER TYPE "public"."enum_pages_blocks_features_features_with_title_feature_icon" ADD VALUE 'hand' BEFORE 'phone';
  ALTER TYPE "public"."enum_pages_blocks_features_features_with_title_feature_icon" ADD VALUE 'wallet' BEFORE 'phone';
  ALTER TYPE "public"."enum_pages_blocks_features_features_with_title_feature_icon" ADD VALUE 'zero' BEFORE 'phone';
  ALTER TYPE "public"."enum_pages_blocks_features_features_with_title_feature_icon" ADD VALUE 'percentage' BEFORE 'phone';
  ALTER TYPE "public"."enum_pages_blocks_features_features_with_title_feature_icon" ADD VALUE 'magnifyingGlass' BEFORE 'phone';
  ALTER TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_icon" ADD VALUE 'trainRegional' BEFORE 'tram';
  ALTER TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_icon" ADD VALUE 'download' BEFORE 'phone';
  ALTER TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_icon" ADD VALUE 'file' BEFORE 'phone';
  ALTER TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_icon" ADD VALUE 'hand' BEFORE 'phone';
  ALTER TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_icon" ADD VALUE 'wallet' BEFORE 'phone';
  ALTER TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_icon" ADD VALUE 'zero' BEFORE 'phone';
  ALTER TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_icon" ADD VALUE 'percentage' BEFORE 'phone';
  ALTER TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_icon" ADD VALUE 'magnifyingGlass' BEFORE 'phone';
  DO $$ BEGIN
    ALTER TYPE "public"."enum_pages_blocks_gallery_gallery_settings_background" ADD VALUE 'light';
  EXCEPTION
    WHEN SQLSTATE '42710' THEN null;
  END $$;
  ALTER TYPE "public"."enum_pages_blocks_highlighted_text_text_size" ADD VALUE 'body';
  ALTER TYPE "public"."enum_pages_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'trainRegional' BEFORE 'tram';
  ALTER TYPE "public"."enum_pages_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'download' BEFORE 'phone';
  ALTER TYPE "public"."enum_pages_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'file' BEFORE 'phone';
  ALTER TYPE "public"."enum_pages_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'hand' BEFORE 'phone';
  ALTER TYPE "public"."enum_pages_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'wallet' BEFORE 'phone';
  ALTER TYPE "public"."enum_pages_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'zero' BEFORE 'phone';
  ALTER TYPE "public"."enum_pages_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'percentage' BEFORE 'phone';
  ALTER TYPE "public"."enum_pages_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'magnifyingGlass' BEFORE 'phone';
  ALTER TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_icon" ADD VALUE 'trainRegional' BEFORE 'tram';
  ALTER TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_icon" ADD VALUE 'download' BEFORE 'phone';
  ALTER TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_icon" ADD VALUE 'file' BEFORE 'phone';
  ALTER TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_icon" ADD VALUE 'hand' BEFORE 'phone';
  ALTER TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_icon" ADD VALUE 'wallet' BEFORE 'phone';
  ALTER TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_icon" ADD VALUE 'zero' BEFORE 'phone';
  ALTER TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_icon" ADD VALUE 'percentage' BEFORE 'phone';
  ALTER TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_icon" ADD VALUE 'magnifyingGlass' BEFORE 'phone';
  ALTER TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_icon" ADD VALUE 'trainRegional' BEFORE 'tram';
  ALTER TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_icon" ADD VALUE 'download' BEFORE 'phone';
  ALTER TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_icon" ADD VALUE 'file' BEFORE 'phone';
  ALTER TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_icon" ADD VALUE 'hand' BEFORE 'phone';
  ALTER TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_icon" ADD VALUE 'wallet' BEFORE 'phone';
  ALTER TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_icon" ADD VALUE 'zero' BEFORE 'phone';
  ALTER TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_icon" ADD VALUE 'percentage' BEFORE 'phone';
  ALTER TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_icon" ADD VALUE 'magnifyingGlass' BEFORE 'phone';
  DO $$ BEGIN
    ALTER TYPE "public"."enum__pages_v_blocks_gallery_gallery_settings_background" ADD VALUE 'light';
  EXCEPTION
    WHEN SQLSTATE '42710' THEN null;
  END $$;
  ALTER TYPE "public"."enum__pages_v_blocks_highlighted_text_text_size" ADD VALUE 'body';
  ALTER TYPE "public"."enum__pages_v_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'trainRegional' BEFORE 'tram';
  ALTER TYPE "public"."enum__pages_v_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'download' BEFORE 'phone';
  ALTER TYPE "public"."enum__pages_v_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'file' BEFORE 'phone';
  ALTER TYPE "public"."enum__pages_v_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'hand' BEFORE 'phone';
  ALTER TYPE "public"."enum__pages_v_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'wallet' BEFORE 'phone';
  ALTER TYPE "public"."enum__pages_v_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'zero' BEFORE 'phone';
  ALTER TYPE "public"."enum__pages_v_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'percentage' BEFORE 'phone';
  ALTER TYPE "public"."enum__pages_v_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'magnifyingGlass' BEFORE 'phone';
  ALTER TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_icon" ADD VALUE 'trainRegional' BEFORE 'tram';
  ALTER TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_icon" ADD VALUE 'download' BEFORE 'phone';
  ALTER TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_icon" ADD VALUE 'file' BEFORE 'phone';
  ALTER TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_icon" ADD VALUE 'hand' BEFORE 'phone';
  ALTER TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_icon" ADD VALUE 'wallet' BEFORE 'phone';
  ALTER TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_icon" ADD VALUE 'zero' BEFORE 'phone';
  ALTER TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_icon" ADD VALUE 'percentage' BEFORE 'phone';
  ALTER TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_icon" ADD VALUE 'magnifyingGlass' BEFORE 'phone';
  ALTER TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_icon" ADD VALUE 'trainRegional' BEFORE 'tram';
  ALTER TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_icon" ADD VALUE 'download' BEFORE 'phone';
  ALTER TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_icon" ADD VALUE 'file' BEFORE 'phone';
  ALTER TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_icon" ADD VALUE 'hand' BEFORE 'phone';
  ALTER TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_icon" ADD VALUE 'wallet' BEFORE 'phone';
  ALTER TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_icon" ADD VALUE 'zero' BEFORE 'phone';
  ALTER TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_icon" ADD VALUE 'percentage' BEFORE 'phone';
  ALTER TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_icon" ADD VALUE 'magnifyingGlass' BEFORE 'phone';
  DO $$ BEGIN
    ALTER TYPE "public"."enum_flDet_blocks_gallery_gallery_settings_background" ADD VALUE 'light';
  EXCEPTION
    WHEN SQLSTATE '42710' THEN null;
  END $$;
  ALTER TYPE "public"."enum_flDet_blocks_highlighted_text_text_size" ADD VALUE 'body';
  ALTER TYPE "public"."enum_flDet_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'trainRegional' BEFORE 'tram';
  ALTER TYPE "public"."enum_flDet_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'download' BEFORE 'phone';
  ALTER TYPE "public"."enum_flDet_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'file' BEFORE 'phone';
  ALTER TYPE "public"."enum_flDet_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'hand' BEFORE 'phone';
  ALTER TYPE "public"."enum_flDet_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'wallet' BEFORE 'phone';
  ALTER TYPE "public"."enum_flDet_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'zero' BEFORE 'phone';
  ALTER TYPE "public"."enum_flDet_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'percentage' BEFORE 'phone';
  ALTER TYPE "public"."enum_flDet_blocks_img_content_person_bullets_feature_icon" ADD VALUE 'magnifyingGlass' BEFORE 'phone';
  CREATE TABLE IF NOT EXISTS "share_blocks_highlighted_text_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"button_type" "enum_share_blocks_highlighted_text_buttons_button_type" DEFAULT 'internal',
  	"button_new_tab" boolean,
  	"button_has_anchor" boolean,
  	"button_dark_button" boolean,
  	"button_with_icon" boolean DEFAULT false,
  	"button_icon_only" boolean DEFAULT false,
  	"button_icon_position" "icnPos" DEFAULT 'left',
  	"button_icon" "enum_share_blocks_highlighted_text_buttons_button_icon",
  	"button_label" varchar,
  	"button_relation" "enum_share_blocks_highlighted_text_buttons_button_relation" DEFAULT 'pages',
  	"button_url" varchar,
  	"button_anchor_to" varchar,
  	"button_appearance" "enum_share_blocks_highlighted_text_buttons_button_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_map_pins" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"withlogo" boolean DEFAULT false,
  	"logo_id" integer,
  	"icon" "enum_share_blocks_map_pins_icon",
  	"x" numeric,
  	"x_mobile" numeric,
  	"y" numeric,
  	"y_mobile" numeric,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_sticky_slides_slides_slide_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_sticky_slides_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"slide_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_sticky_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"sticky_set_anchor_id" varchar,
  	"sticky_set_padding_top" "enum_share_blocks_sticky_slides_sticky_set_padding_top" DEFAULT 'medium',
  	"sticky_set_padding_bottom" "enum_share_blocks_sticky_slides_sticky_set_padding_bottom" DEFAULT 'medium',
  	"sticky_set_has_background_image" boolean DEFAULT false,
  	"sticky_set_background" "enum_share_blocks_sticky_slides_sticky_set_background" DEFAULT 'dark',
  	"sticky_set_background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_multi_gallery_grid_items_complex" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_share_blocks_multi_gallery_grid_items_complex_layout" DEFAULT 'a',
  	"image_one_id" integer,
  	"image_two_id" integer,
  	"image_three_id" integer,
  	"image_four_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_multi_gallery_grid_items_simple_grid_left_col" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_multi_gallery_grid_items_simple_grid_right_col" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_multi_gallery_grid_items_simple_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_multi_gallery_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab_title" varchar,
  	"layout_variant" "enum_share_blocks_multi_gallery_grid_items_layout_variant" DEFAULT 'complex'
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_multi_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"multi_g_set_anchor_id" varchar,
  	"multi_g_set_padding_top" "enum_share_blocks_multi_gallery_multi_g_set_padding_top" DEFAULT 'medium',
  	"multi_g_set_padding_bottom" "enum_share_blocks_multi_gallery_multi_g_set_padding_bottom" DEFAULT 'medium',
  	"multi_g_set_has_background_image" boolean DEFAULT false,
  	"multi_g_set_background" "enum_share_blocks_multi_gallery_multi_g_set_background" DEFAULT 'light',
  	"multi_g_set_background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_highlighted_text_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"button_type" "enum_pages_blocks_highlighted_text_buttons_button_type" DEFAULT 'internal',
  	"button_new_tab" boolean,
  	"button_has_anchor" boolean,
  	"button_dark_button" boolean,
  	"button_with_icon" boolean DEFAULT false,
  	"button_icon_only" boolean DEFAULT false,
  	"button_icon_position" "icnPos" DEFAULT 'left',
  	"button_icon" "enum_pages_blocks_highlighted_text_buttons_button_icon",
  	"button_label" varchar,
  	"button_relation" "enum_pages_blocks_highlighted_text_buttons_button_relation" DEFAULT 'pages',
  	"button_url" varchar,
  	"button_anchor_to" varchar,
  	"button_appearance" "enum_pages_blocks_highlighted_text_buttons_button_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_map_pins" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"withlogo" boolean DEFAULT false,
  	"logo_id" integer,
  	"icon" "enum_pages_blocks_map_pins_icon",
  	"x" numeric,
  	"x_mobile" numeric,
  	"y" numeric,
  	"y_mobile" numeric,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_sticky_slides_slides_slide_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_sticky_slides_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"slide_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_sticky_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"sticky_set_anchor_id" varchar,
  	"sticky_set_padding_top" "enum_pages_blocks_sticky_slides_sticky_set_padding_top" DEFAULT 'medium',
  	"sticky_set_padding_bottom" "enum_pages_blocks_sticky_slides_sticky_set_padding_bottom" DEFAULT 'medium',
  	"sticky_set_has_background_image" boolean DEFAULT false,
  	"sticky_set_background" "enum_pages_blocks_sticky_slides_sticky_set_background" DEFAULT 'dark',
  	"sticky_set_background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_complex" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_pages_blocks_multi_gallery_grid_items_complex_layout" DEFAULT 'a',
  	"image_one_id" integer,
  	"image_two_id" integer,
  	"image_three_id" integer,
  	"image_four_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_simple_grid_left_col" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_simple_grid_right_col" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_simple_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_multi_gallery_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab_title" varchar,
  	"layout_variant" "enum_pages_blocks_multi_gallery_grid_items_layout_variant" DEFAULT 'complex'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_multi_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"multi_g_set_anchor_id" varchar,
  	"multi_g_set_padding_top" "enum_pages_blocks_multi_gallery_multi_g_set_padding_top" DEFAULT 'medium',
  	"multi_g_set_padding_bottom" "enum_pages_blocks_multi_gallery_multi_g_set_padding_bottom" DEFAULT 'medium',
  	"multi_g_set_has_background_image" boolean DEFAULT false,
  	"multi_g_set_background" "enum_pages_blocks_multi_gallery_multi_g_set_background" DEFAULT 'light',
  	"multi_g_set_background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_highlighted_text_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"button_type" "enum__pages_v_blocks_highlighted_text_buttons_button_type" DEFAULT 'internal',
  	"button_new_tab" boolean,
  	"button_has_anchor" boolean,
  	"button_dark_button" boolean,
  	"button_with_icon" boolean DEFAULT false,
  	"button_icon_only" boolean DEFAULT false,
  	"button_icon_position" "icnPos" DEFAULT 'left',
  	"button_icon" "enum__pages_v_blocks_highlighted_text_buttons_button_icon",
  	"button_label" varchar,
  	"button_relation" "enum__pages_v_blocks_highlighted_text_buttons_button_relation" DEFAULT 'pages',
  	"button_url" varchar,
  	"button_anchor_to" varchar,
  	"button_appearance" "enum__pages_v_blocks_highlighted_text_buttons_button_appearance" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_map_pins" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"withlogo" boolean DEFAULT false,
  	"logo_id" integer,
  	"icon" "enum__pages_v_blocks_map_pins_icon",
  	"x" numeric,
  	"x_mobile" numeric,
  	"y" numeric,
  	"y_mobile" numeric,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_sticky_slides_slides_slide_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_sticky_slides_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"slide_content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_sticky_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"sticky_set_anchor_id" varchar,
  	"sticky_set_padding_top" "enum__pages_v_blocks_sticky_slides_sticky_set_padding_top" DEFAULT 'medium',
  	"sticky_set_padding_bottom" "enum__pages_v_blocks_sticky_slides_sticky_set_padding_bottom" DEFAULT 'medium',
  	"sticky_set_has_background_image" boolean DEFAULT false,
  	"sticky_set_background" "enum__pages_v_blocks_sticky_slides_sticky_set_background" DEFAULT 'dark',
  	"sticky_set_background_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_complex" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout" "enum__pages_v_blocks_multi_gallery_grid_items_complex_layout" DEFAULT 'a',
  	"image_one_id" integer,
  	"image_two_id" integer,
  	"image_three_id" integer,
  	"image_four_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_simple_grid_left_col" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_simple_grid_right_col" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_simple_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tab_title" varchar,
  	"layout_variant" "enum__pages_v_blocks_multi_gallery_grid_items_layout_variant" DEFAULT 'complex',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_multi_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"multi_g_set_anchor_id" varchar,
  	"multi_g_set_padding_top" "enum__pages_v_blocks_multi_gallery_multi_g_set_padding_top" DEFAULT 'medium',
  	"multi_g_set_padding_bottom" "enum__pages_v_blocks_multi_gallery_multi_g_set_padding_bottom" DEFAULT 'medium',
  	"multi_g_set_has_background_image" boolean DEFAULT false,
  	"multi_g_set_background" "enum__pages_v_blocks_multi_gallery_multi_g_set_background" DEFAULT 'light',
  	"multi_g_set_background_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_highlighted_text_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"button_type" "enum_flDet_blocks_highlighted_text_buttons_button_type" DEFAULT 'internal',
  	"button_new_tab" boolean,
  	"button_has_anchor" boolean,
  	"button_dark_button" boolean,
  	"button_with_icon" boolean DEFAULT false,
  	"button_icon_only" boolean DEFAULT false,
  	"button_icon_position" "icnPos" DEFAULT 'left',
  	"button_icon" "enum_flDet_blocks_highlighted_text_buttons_button_icon",
  	"button_label" varchar,
  	"button_relation" "enum_flDet_blocks_highlighted_text_buttons_button_relation" DEFAULT 'pages',
  	"button_url" varchar,
  	"button_anchor_to" varchar,
  	"button_appearance" "enum_flDet_blocks_highlighted_text_buttons_button_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_map_pins" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"withlogo" boolean DEFAULT false,
  	"logo_id" integer,
  	"icon" "enum_flDet_blocks_map_pins_icon",
  	"x" numeric,
  	"x_mobile" numeric,
  	"y" numeric,
  	"y_mobile" numeric,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_sticky_slides_slides_slide_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_sticky_slides_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"slide_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_sticky_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"sticky_set_anchor_id" varchar,
  	"sticky_set_padding_top" "enum_flDet_blocks_sticky_slides_sticky_set_padding_top" DEFAULT 'medium',
  	"sticky_set_padding_bottom" "enum_flDet_blocks_sticky_slides_sticky_set_padding_bottom" DEFAULT 'medium',
  	"sticky_set_has_background_image" boolean DEFAULT false,
  	"sticky_set_background" "enum_flDet_blocks_sticky_slides_sticky_set_background" DEFAULT 'dark',
  	"sticky_set_background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_complex" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_flDet_blocks_multi_gallery_grid_items_complex_layout" DEFAULT 'a',
  	"image_one_id" integer,
  	"image_two_id" integer,
  	"image_three_id" integer,
  	"image_four_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_simple_grid_left_col" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_simple_grid_right_col" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_simple_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab_title" varchar,
  	"layout_variant" "enum_flDet_blocks_multi_gallery_grid_items_layout_variant" DEFAULT 'complex'
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_multi_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"multi_g_set_anchor_id" varchar,
  	"multi_g_set_padding_top" "enum_flDet_blocks_multi_gallery_multi_g_set_padding_top" DEFAULT 'medium',
  	"multi_g_set_padding_bottom" "enum_flDet_blocks_multi_gallery_multi_g_set_padding_bottom" DEFAULT 'medium',
  	"multi_g_set_has_background_image" boolean DEFAULT false,
  	"multi_g_set_background" "enum_flDet_blocks_multi_gallery_multi_g_set_background" DEFAULT 'light',
  	"multi_g_set_background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"banner_settings_anchor_id" varchar,
  	"banner_settings_padding_top" "enum_newsDet_blocks_banner_banner_settings_padding_top" DEFAULT 'medium',
  	"banner_settings_padding_bottom" "enum_newsDet_blocks_banner_banner_settings_padding_bottom" DEFAULT 'medium',
  	"banner_settings_has_background_image" boolean DEFAULT false,
  	"banner_settings_background" "enum_newsDet_blocks_banner_banner_settings_background" DEFAULT 'light',
  	"banner_settings_background_image_id" integer,
  	"banner_variant" "enum_newsDet_blocks_banner_banner_variant" DEFAULT 'small',
  	"banner_content_position" "enum_newsDet_blocks_banner_banner_content_position" DEFAULT 'center',
  	"caption" varchar,
  	"content" jsonb,
  	"banner_button_type" "enum_newsDet_blocks_banner_banner_button_type" DEFAULT 'internal',
  	"banner_button_new_tab" boolean,
  	"banner_button_has_anchor" boolean,
  	"banner_button_dark_button" boolean,
  	"banner_button_icon_only" boolean DEFAULT false,
  	"banner_button_icon_position" "icnPos" DEFAULT 'left',
  	"banner_button_icon" "enum_newsDet_blocks_banner_banner_button_icon",
  	"banner_button_label" varchar,
  	"banner_button_relation" "enum_newsDet_blocks_banner_banner_button_relation" DEFAULT 'pages',
  	"banner_button_url" varchar,
  	"banner_button_anchor_to" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_benefits_benefits_row_item_heading_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_benefits_benefits_row_item2_heading_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_benefits_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"row_item_image_id" integer,
  	"row_item_description" jsonb,
  	"row_item2_image_id" integer,
  	"row_item2_description" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"benefits_settings_anchor_id" varchar,
  	"benefits_settings_padding_top" "enum_newsDet_blocks_benefits_benefits_settings_padding_top" DEFAULT 'medium',
  	"benefits_settings_padding_bottom" "enum_newsDet_blocks_benefits_benefits_settings_padding_bottom" DEFAULT 'medium',
  	"benefits_settings_has_background_image" boolean DEFAULT false,
  	"benefits_settings_background" "enum_newsDet_blocks_benefits_benefits_settings_background" DEFAULT 'dark',
  	"benefits_settings_background_image_id" integer,
  	"show_logo" boolean DEFAULT true,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_contact_contact_info_highlighted_contacts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_title" varchar,
  	"item_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_contact_contact_info_contact_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_title" varchar,
  	"item_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_contact_contact_form_config_disposition_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_contact" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"contact_settings_anchor_id" varchar,
  	"contact_settings_padding_top" "enum_newsDet_blocks_contact_contact_settings_padding_top" DEFAULT 'medium',
  	"contact_settings_padding_bottom" "enum_newsDet_blocks_contact_contact_settings_padding_bottom" DEFAULT 'medium',
  	"contact_settings_has_background_image" boolean DEFAULT false,
  	"contact_settings_background" "enum_newsDet_blocks_contact_contact_settings_background" DEFAULT 'dark',
  	"contact_settings_background_image_id" integer,
  	"contact_settings_heading" jsonb,
  	"variant" "enum_newsDet_blocks_contact_variant" DEFAULT 'onlyForm',
  	"descfull" jsonb,
  	"contact_form_position" "enum_newsDet_blocks_contact_contact_form_position",
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
  	"contact_form_config_disposition_label" varchar DEFAULT 'Flat Disposition',
  	"contact_form_config_disposition_placeholder" varchar DEFAULT 'Select flat disposition',
  	"contact_form_config_disposition_validation_required_message" varchar DEFAULT 'Please select a flat disposition',
  	"contact_form_config_message_label" varchar DEFAULT 'Message',
  	"contact_form_config_message_placeholder" varchar DEFAULT 'Enter your message',
  	"contact_form_config_message_validation_required_message" varchar DEFAULT 'Message is required',
  	"contact_form_config_bottom_content" jsonb,
  	"contact_form_config_checkbox_newsletter_label" varchar DEFAULT 'I agree to the terms and conditions',
  	"contact_form_config_checkbox_newsletter_content" jsonb,
  	"contact_form_config_checkbox_newsletter_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions',
  	"contact_form_config_submit_button" varchar DEFAULT 'Send Message',
  	"contact_form_config_toast_success_title" varchar DEFAULT 'Message Sent!',
  	"contact_form_config_toast_success_message" varchar DEFAULT 'Thank you for your message. We will get back to you soon.',
  	"contact_form_config_toast_error_title" varchar DEFAULT 'Error',
  	"contact_form_config_toast_error_message" varchar DEFAULT 'There was an error sending your message. Please try again.',
  	"contact_form_config_toast_error_fallback_message" varchar DEFAULT 'An unexpected error occurred. Please try again later.',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_settings_anchor_id" varchar,
  	"content_settings_padding_top" "enum_newsDet_blocks_content_content_settings_padding_top" DEFAULT 'medium',
  	"content_settings_padding_bottom" "enum_newsDet_blocks_content_content_settings_padding_bottom" DEFAULT 'medium',
  	"content_settings_has_background_image" boolean DEFAULT false,
  	"content_settings_background" "enum_newsDet_blocks_content_content_settings_background" DEFAULT 'dark',
  	"content_settings_background_image_id" integer,
  	"content" jsonb,
  	"content_position" "enum_newsDet_blocks_content_content_position" DEFAULT 'center',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_draw_editor" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_picker_id" integer,
  	"picker_value" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_features_features_with_title" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_icon" "enum_newsDet_blocks_features_features_with_title_feature_icon",
  	"feature_title" varchar,
  	"feature_description" jsonb,
  	"feature_bg" "enum_newsDet_blocks_features_features_with_title_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_features_features_with_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_image_id" integer,
  	"feature_description" jsonb,
  	"feature_bg" "enum_newsDet_blocks_features_features_with_image_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_features_features_uppercase" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_icon" "enum_newsDet_blocks_features_features_uppercase_feature_icon",
  	"feature_description" jsonb,
  	"feature_bg" "enum_newsDet_blocks_features_features_uppercase_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"features_settings_anchor_id" varchar,
  	"features_settings_padding_top" "enum_newsDet_blocks_features_features_settings_padding_top" DEFAULT 'medium',
  	"features_settings_padding_bottom" "enum_newsDet_blocks_features_features_settings_padding_bottom" DEFAULT 'medium',
  	"features_settings_has_background_image" boolean DEFAULT false,
  	"features_settings_background" "enum_newsDet_blocks_features_features_settings_background" DEFAULT 'dark',
  	"features_settings_background_image_id" integer,
  	"features_settings_heading" jsonb,
  	"features_settings_link_type" "enum_newsDet_blocks_features_features_settings_link_type" DEFAULT 'internal',
  	"features_settings_link_new_tab" boolean,
  	"features_settings_link_has_anchor" boolean,
  	"features_settings_link_dark_button" boolean,
  	"features_settings_link_icon_only" boolean DEFAULT false,
  	"features_settings_link_icon_position" "icnPos" DEFAULT 'left',
  	"features_settings_link_icon" "enum_newsDet_blocks_features_features_settings_link_icon",
  	"features_settings_link_label" varchar,
  	"features_settings_link_relation" "enum_newsDet_blocks_features_features_settings_link_relation" DEFAULT 'pages',
  	"features_settings_link_url" varchar,
  	"features_settings_link_anchor_to" varchar,
  	"features_settings_link_appearance" "enum_newsDet_blocks_features_features_settings_link_appearance" DEFAULT 'primary',
  	"content" jsonb,
  	"features_variant" "enum_newsDet_blocks_features_features_variant" DEFAULT 'uppercase',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_form_form_cfg_flat_disposition_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_form_slide_out_boxes" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"column_image_id" integer,
  	"column_image2_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_settings_anchor_id" varchar,
  	"form_settings_padding_top" "enum_newsDet_blocks_form_form_settings_padding_top" DEFAULT 'medium',
  	"form_settings_padding_bottom" "enum_newsDet_blocks_form_form_settings_padding_bottom" DEFAULT 'medium',
  	"form_settings_has_background_image" boolean DEFAULT false,
  	"form_settings_background" "enum_newsDet_blocks_form_form_settings_background" DEFAULT 'light',
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
  	"form_cfg_bottom_content" jsonb,
  	"form_cfg_checkbox_with_text_label" varchar DEFAULT '',
  	"form_cfg_checkbox_with_text_content" jsonb,
  	"form_cfg_checkbox_with_text_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions',
  	"form_cfg_checkbox_with_text_newsletter_label" varchar DEFAULT 'I agree to receive newsletters',
  	"form_cfg_checkbox_with_text_newsletter_content" jsonb,
  	"form_cfg_checkbox_with_text_newsletter_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions',
  	"form_cfg_submit_button" varchar DEFAULT 'Send Message',
  	"form_cfg_toast_success_title" varchar DEFAULT 'Message Sent!',
  	"form_cfg_toast_success_message" varchar DEFAULT 'Thank you for your message. We will get back to you soon.',
  	"form_cfg_toast_error_title" varchar DEFAULT 'Error',
  	"form_cfg_toast_error_message" varchar DEFAULT 'There was an error sending your message. Please try again.',
  	"form_cfg_toast_error_fallback_message" varchar DEFAULT 'An unexpected error occurred. Please try again later.',
  	"form_content" jsonb,
  	"layout_variant" "enum_newsDet_blocks_form_layout_variant" DEFAULT 'onlyForm',
  	"form_position" "enum_newsDet_blocks_form_form_position",
  	"layout_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_flats_snippets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"flats_set_anchor_id" varchar,
  	"flats_set_padding_top" "enum_newsDet_blocks_flats_snippets_flats_set_padding_top" DEFAULT 'medium',
  	"flats_set_padding_bottom" "enum_newsDet_blocks_flats_snippets_flats_set_padding_bottom" DEFAULT 'medium',
  	"flats_set_has_background_image" boolean DEFAULT false,
  	"flats_set_background" "enum_newsDet_blocks_flats_snippets_flats_set_background" DEFAULT 'dark',
  	"flats_set_background_image_id" integer,
  	"flats_set_heading" jsonb,
  	"flats_set_link_type" "enum_newsDet_blocks_flats_snippets_flats_set_link_type" DEFAULT 'internal',
  	"flats_set_link_new_tab" boolean,
  	"flats_set_link_has_anchor" boolean,
  	"flats_set_link_dark_button" boolean,
  	"flats_set_link_icon_only" boolean DEFAULT false,
  	"flats_set_link_icon_position" "icnPos" DEFAULT 'left',
  	"flats_set_link_icon" "enum_newsDet_blocks_flats_snippets_flats_set_link_icon",
  	"flats_set_link_label" varchar,
  	"flats_set_link_relation" "enum_newsDet_blocks_flats_snippets_flats_set_link_relation" DEFAULT 'pages',
  	"flats_set_link_url" varchar,
  	"flats_set_link_anchor_to" varchar,
  	"flats_set_link_appearance" "enum_newsDet_blocks_flats_snippets_flats_set_link_appearance" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_gallery_simple_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"slide_width" "enum_newsDet_blocks_gallery_simple_slider_slide_width"
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_gallery_multi_slider_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"slide_width" "enum_newsDet_blocks_gallery_multi_slider_images_slide_width"
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_gallery_multi_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab_title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_gallery_full_width" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"gallery_settings_anchor_id" varchar,
  	"gallery_settings_padding_top" "enum_newsDet_blocks_gallery_gallery_settings_padding_top" DEFAULT 'medium',
  	"gallery_settings_padding_bottom" "enum_newsDet_blocks_gallery_gallery_settings_padding_bottom" DEFAULT 'medium',
  	"gallery_settings_has_background_image" boolean DEFAULT false,
  	"gallery_settings_background" "enum_newsDet_blocks_gallery_gallery_settings_background" DEFAULT 'dark',
  	"gallery_settings_background_image_id" integer,
  	"controls_type" "enum_newsDet_blocks_gallery_controls_type" DEFAULT 'arrows',
  	"autoplay" boolean DEFAULT false,
  	"content" jsonb,
  	"gallery_variant" "enum_newsDet_blocks_gallery_gallery_variant" DEFAULT 'simpleSlider',
  	"link_type" "enum_newsDet_blocks_gallery_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_icon_only" boolean DEFAULT false,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum_newsDet_blocks_gallery_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum_newsDet_blocks_gallery_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar,
  	"link_appearance" "enum_newsDet_blocks_gallery_link_appearance" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_hero_hero_slideshow" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_hero_main_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_newsDet_blocks_hero_main_buttons_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_icon_only" boolean DEFAULT false,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum_newsDet_blocks_hero_main_buttons_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum_newsDet_blocks_hero_main_buttons_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar,
  	"link_appearance" "enum_newsDet_blocks_hero_main_buttons_link_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_hero_secondary_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_newsDet_blocks_hero_secondary_buttons_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_icon_only" boolean DEFAULT false,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum_newsDet_blocks_hero_secondary_buttons_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum_newsDet_blocks_hero_secondary_buttons_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_newsDet_blocks_hero_type" DEFAULT 'imageOnly',
  	"hero_image_id" integer,
  	"hero_video_id" integer,
  	"content" jsonb,
  	"left_upper_text" varchar,
  	"right_upper_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_highlighted_text_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"button_type" "enum_newsDet_blocks_highlighted_text_buttons_button_type" DEFAULT 'internal',
  	"button_new_tab" boolean,
  	"button_has_anchor" boolean,
  	"button_dark_button" boolean,
  	"button_with_icon" boolean DEFAULT false,
  	"button_icon_only" boolean DEFAULT false,
  	"button_icon_position" "icnPos" DEFAULT 'left',
  	"button_icon" "enum_newsDet_blocks_highlighted_text_buttons_button_icon",
  	"button_label" varchar,
  	"button_relation" "enum_newsDet_blocks_highlighted_text_buttons_button_relation" DEFAULT 'pages',
  	"button_url" varchar,
  	"button_anchor_to" varchar,
  	"button_appearance" "enum_newsDet_blocks_highlighted_text_buttons_button_appearance" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_highlighted_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"high_set_anchor_id" varchar,
  	"high_set_padding_top" "enum_newsDet_blocks_highlighted_text_high_set_padding_top" DEFAULT 'medium',
  	"high_set_padding_bottom" "enum_newsDet_blocks_highlighted_text_high_set_padding_bottom" DEFAULT 'medium',
  	"high_set_has_background_image" boolean DEFAULT false,
  	"high_set_background" "enum_newsDet_blocks_highlighted_text_high_set_background" DEFAULT 'dark',
  	"high_set_background_image_id" integer,
  	"narrow_container" boolean DEFAULT false,
  	"wide_content_area" boolean DEFAULT false,
  	"title" jsonb,
  	"highlighted_text" varchar,
  	"text_size" "enum_newsDet_blocks_highlighted_text_text_size" DEFAULT 'large',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_img_content_person_bullets" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_icon" "enum_newsDet_blocks_img_content_person_bullets_feature_icon",
  	"feature_description" jsonb,
  	"feature_bg" "enum_newsDet_blocks_img_content_person_bullets_feature_bg" DEFAULT 'cream'
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_img_content_accordion_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"accordion_item_title" varchar,
  	"accordion_item_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_img_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"img_cont_set_anchor_id" varchar,
  	"img_cont_set_padding_top" "enum_newsDet_blocks_img_content_img_cont_set_padding_top" DEFAULT 'medium',
  	"img_cont_set_padding_bottom" "enum_newsDet_blocks_img_content_img_cont_set_padding_bottom" DEFAULT 'medium',
  	"img_cont_set_has_background_image" boolean DEFAULT false,
  	"img_cont_set_background" "enum_newsDet_blocks_img_content_img_cont_set_background" DEFAULT 'dark',
  	"img_cont_set_background_image_id" integer,
  	"content_type" "enum_newsDet_blocks_img_content_content_type" DEFAULT 'default',
  	"content" jsonb,
  	"upper_title" jsonb,
  	"person_content" jsonb,
  	"person_person_info_name" varchar,
  	"person_person_info_position" varchar,
  	"person_person_info_phone" varchar,
  	"person_person_info_email" varchar,
  	"accordion_link_type" "enum_newsDet_blocks_img_content_accordion_link_type" DEFAULT 'internal',
  	"accordion_link_new_tab" boolean,
  	"accordion_link_has_anchor" boolean,
  	"accordion_link_dark_button" boolean,
  	"accordion_link_icon_only" boolean DEFAULT false,
  	"accordion_link_icon_position" "icnPos" DEFAULT 'left',
  	"accordion_link_icon" "enum_newsDet_blocks_img_content_accordion_link_icon",
  	"accordion_link_label" varchar,
  	"accordion_link_relation" "enum_newsDet_blocks_img_content_accordion_link_relation" DEFAULT 'pages',
  	"accordion_link_url" varchar,
  	"accordion_link_anchor_to" varchar,
  	"accordion_link_appearance" "enum_newsDet_blocks_img_content_accordion_link_appearance" DEFAULT 'primary',
  	"image_id" integer,
  	"image_position" "enum_newsDet_blocks_img_content_image_position" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_images_grid_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_images_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"images_settings_anchor_id" varchar,
  	"images_settings_padding_top" "enum_newsDet_blocks_images_grid_images_settings_padding_top" DEFAULT 'medium',
  	"images_settings_padding_bottom" "enum_newsDet_blocks_images_grid_images_settings_padding_bottom" DEFAULT 'medium',
  	"images_settings_has_background_image" boolean DEFAULT false,
  	"images_settings_background" "enum_newsDet_blocks_images_grid_images_settings_background" DEFAULT 'dark',
  	"images_settings_background_image_id" integer,
  	"layout" "enum_newsDet_blocks_images_grid_layout" DEFAULT 'withContent',
  	"direction_variant" "enum_newsDet_blocks_images_grid_direction_variant" DEFAULT 'default',
  	"grid_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_image_pins_pins" (
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
  	"x_mobile" numeric,
  	"y" numeric,
  	"y_mobile" numeric,
  	"pin_height" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_image_pins" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_pins_set_anchor_id" varchar,
  	"image_pins_set_padding_top" "enum_newsDet_blocks_image_pins_image_pins_set_padding_top" DEFAULT 'medium',
  	"image_pins_set_padding_bottom" "enum_newsDet_blocks_image_pins_image_pins_set_padding_bottom" DEFAULT 'medium',
  	"image_pins_set_has_background_image" boolean DEFAULT false,
  	"image_pins_set_background" "enum_newsDet_blocks_image_pins_image_pins_set_background" DEFAULT 'dark',
  	"image_pins_set_background_image_id" integer,
  	"text" jsonb,
  	"background_image_id" integer,
  	"pins_variant" "enum_newsDet_blocks_image_pins_pins_variant" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_map_pins" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"withlogo" boolean DEFAULT false,
  	"logo_id" integer,
  	"icon" "enum_newsDet_blocks_map_pins_icon",
  	"x" numeric,
  	"x_mobile" numeric,
  	"y" numeric,
  	"y_mobile" numeric,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"map_settings_anchor_id" varchar,
  	"map_settings_padding_top" "enum_newsDet_blocks_map_map_settings_padding_top" DEFAULT 'medium',
  	"map_settings_padding_bottom" "enum_newsDet_blocks_map_map_settings_padding_bottom" DEFAULT 'medium',
  	"map_settings_has_background_image" boolean DEFAULT false,
  	"map_settings_background" "enum_newsDet_blocks_map_map_settings_background" DEFAULT 'dark',
  	"map_settings_background_image_id" integer,
  	"map_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_news_snippets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"news_set_anchor_id" varchar,
  	"news_set_padding_top" "enum_newsDet_blocks_news_snippets_news_set_padding_top" DEFAULT 'medium',
  	"news_set_padding_bottom" "enum_newsDet_blocks_news_snippets_news_set_padding_bottom" DEFAULT 'medium',
  	"news_set_has_background_image" boolean DEFAULT false,
  	"news_set_background" "enum_newsDet_blocks_news_snippets_news_set_background" DEFAULT 'dark',
  	"news_set_background_image_id" integer,
  	"news_set_heading" jsonb,
  	"news_set_link_type" "enum_newsDet_blocks_news_snippets_news_set_link_type" DEFAULT 'internal',
  	"news_set_link_new_tab" boolean,
  	"news_set_link_has_anchor" boolean,
  	"news_set_link_dark_button" boolean,
  	"news_set_link_icon_only" boolean DEFAULT false,
  	"news_set_link_icon_position" "icnPos" DEFAULT 'left',
  	"news_set_link_icon" "enum_newsDet_blocks_news_snippets_news_set_link_icon",
  	"news_set_link_label" varchar,
  	"news_set_link_relation" "enum_newsDet_blocks_news_snippets_news_set_link_relation" DEFAULT 'pages',
  	"news_set_link_url" varchar,
  	"news_set_link_anchor_to" varchar,
  	"news_set_link_appearance" "enum_newsDet_blocks_news_snippets_news_set_link_appearance" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_numbers_numbers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" numeric,
  	"description" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_numbers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"numbers_settings_anchor_id" varchar,
  	"numbers_settings_padding_top" "enum_newsDet_blocks_numbers_numbers_settings_padding_top" DEFAULT 'medium',
  	"numbers_settings_padding_bottom" "enum_newsDet_blocks_numbers_numbers_settings_padding_bottom" DEFAULT 'medium',
  	"numbers_settings_has_background_image" boolean DEFAULT false,
  	"numbers_settings_background" "enum_newsDet_blocks_numbers_numbers_settings_background" DEFAULT 'dark',
  	"numbers_settings_background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_timeline_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"descfull" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"timeline_settings_anchor_id" varchar,
  	"timeline_settings_padding_top" "enum_newsDet_blocks_timeline_timeline_settings_padding_top" DEFAULT 'medium',
  	"timeline_settings_padding_bottom" "enum_newsDet_blocks_timeline_timeline_settings_padding_bottom" DEFAULT 'medium',
  	"timeline_settings_has_background_image" boolean DEFAULT false,
  	"timeline_settings_background" "enum_newsDet_blocks_timeline_timeline_settings_background" DEFAULT 'light',
  	"timeline_settings_background_image_id" integer,
  	"timeline_settings_heading" jsonb,
  	"right_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_our_projects_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_our_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"our_proj_set_anchor_id" varchar,
  	"our_proj_set_padding_top" "enum_newsDet_blocks_our_projects_our_proj_set_padding_top" DEFAULT 'medium',
  	"our_proj_set_padding_bottom" "enum_newsDet_blocks_our_projects_our_proj_set_padding_bottom" DEFAULT 'medium',
  	"our_proj_set_has_background_image" boolean DEFAULT false,
  	"our_proj_set_background" "enum_newsDet_blocks_our_projects_our_proj_set_background" DEFAULT 'dark',
  	"our_proj_set_background_image_id" integer,
  	"our_proj_set_heading" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_prices" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"prices_settings_anchor_id" varchar,
  	"prices_settings_padding_top" "enum_newsDet_blocks_prices_prices_settings_padding_top" DEFAULT 'medium',
  	"prices_settings_padding_bottom" "enum_newsDet_blocks_prices_prices_settings_padding_bottom" DEFAULT 'medium',
  	"prices_settings_has_background_image" boolean DEFAULT false,
  	"prices_settings_background" "enum_newsDet_blocks_prices_prices_settings_background" DEFAULT 'dark',
  	"prices_settings_background_image_id" integer,
  	"prices_settings_heading" jsonb,
  	"bottom_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_interactive_picker_extended_views" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"view_name" varchar,
  	"image_id" integer,
  	"direct" "enum_newsDet_blocks_interactive_picker_extended_views_direct" DEFAULT 'south'
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_interactive_picker_extended" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"picker_value" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_visual_price_list_buildings" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"building_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_visual_price_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_step_cards_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_step_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step_cards_set_anchor_id" varchar,
  	"step_cards_set_padding_top" "enum_newsDet_blocks_step_cards_step_cards_set_padding_top" DEFAULT 'medium',
  	"step_cards_set_padding_bottom" "enum_newsDet_blocks_step_cards_step_cards_set_padding_bottom" DEFAULT 'medium',
  	"step_cards_set_has_background_image" boolean DEFAULT false,
  	"step_cards_set_background" "enum_newsDet_blocks_step_cards_step_cards_set_background" DEFAULT 'dark',
  	"step_cards_set_background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_sticky_slides_slides_slide_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_sticky_slides_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"slide_content" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_sticky_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"sticky_set_anchor_id" varchar,
  	"sticky_set_padding_top" "enum_newsDet_blocks_sticky_slides_sticky_set_padding_top" DEFAULT 'medium',
  	"sticky_set_padding_bottom" "enum_newsDet_blocks_sticky_slides_sticky_set_padding_bottom" DEFAULT 'medium',
  	"sticky_set_has_background_image" boolean DEFAULT false,
  	"sticky_set_background" "enum_newsDet_blocks_sticky_slides_sticky_set_background" DEFAULT 'dark',
  	"sticky_set_background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_complex" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_newsDet_blocks_multi_gallery_grid_items_complex_layout" DEFAULT 'a',
  	"image_one_id" integer,
  	"image_two_id" integer,
  	"image_three_id" integer,
  	"image_four_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_simple_grid_left_col" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_simple_grid_right_col" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_simple_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab_title" varchar,
  	"layout_variant" "enum_newsDet_blocks_multi_gallery_grid_items_layout_variant" DEFAULT 'complex'
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_multi_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"multi_g_set_anchor_id" varchar,
  	"multi_g_set_padding_top" "enum_newsDet_blocks_multi_gallery_multi_g_set_padding_top" DEFAULT 'medium',
  	"multi_g_set_padding_bottom" "enum_newsDet_blocks_multi_gallery_multi_g_set_padding_bottom" DEFAULT 'medium',
  	"multi_g_set_has_background_image" boolean DEFAULT false,
  	"multi_g_set_background" "enum_newsDet_blocks_multi_gallery_multi_g_set_background" DEFAULT 'light',
  	"multi_g_set_background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_variable_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_variable_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"row_index" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_variable_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_table_custom" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" jsonb,
  	"image_id" integer,
  	"image_position" "enum_newsDet_blocks_text_image_image_position" DEFAULT 'right',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_shared_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"shared_section_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"project_id" integer NOT NULL,
  	"meta_og_image_id" integer,
  	"meta_twitter_card" "enum_newsDet_meta_twitter_card" DEFAULT 'summary_large_image',
  	"meta_structured_data" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "newsDetstoone" (
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
  
  CREATE TABLE IF NOT EXISTS "newsDet_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" integer,
  	"flats_id" integer,
  	"news_id" integer
  );
  
  ALTER TABLE "share_blocks_highlighted_text" ADD COLUMN "narrow_container" boolean DEFAULT false;
  ALTER TABLE "share_blocks_highlighted_text" ADD COLUMN "wide_content_area" boolean DEFAULT false;
  ALTER TABLE "share_blocks_image_pins" ADD COLUMN "pins_variant" "enum_share_blocks_image_pins_pins_variant" DEFAULT 'default';
  ALTER TABLE "share_blocks_prices" ADD COLUMN "prices_settings_heading" jsonb;
  ALTER TABLE "pages_blocks_highlighted_text" ADD COLUMN "narrow_container" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_highlighted_text" ADD COLUMN "wide_content_area" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_image_pins" ADD COLUMN "pins_variant" "enum_pages_blocks_image_pins_pins_variant" DEFAULT 'default';
  ALTER TABLE "pages_blocks_prices" ADD COLUMN "prices_settings_heading" jsonb;
  ALTER TABLE "pages" ADD COLUMN "dark_mode" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_highlighted_text" ADD COLUMN "narrow_container" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_highlighted_text" ADD COLUMN "wide_content_area" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_image_pins" ADD COLUMN "pins_variant" "enum__pages_v_blocks_image_pins_pins_variant" DEFAULT 'default';
  ALTER TABLE "_pages_v_blocks_prices" ADD COLUMN "prices_settings_heading" jsonb;
  ALTER TABLE "_pages_v" ADD COLUMN "version_dark_mode" boolean DEFAULT false;
  ALTER TABLE "flDet_blocks_highlighted_text" ADD COLUMN "narrow_container" boolean DEFAULT false;
  ALTER TABLE "flDet_blocks_highlighted_text" ADD COLUMN "wide_content_area" boolean DEFAULT false;
  ALTER TABLE "flDet_blocks_image_pins" ADD COLUMN "pins_variant" "enum_flDet_blocks_image_pins_pins_variant" DEFAULT 'default';
  ALTER TABLE "flDet_blocks_prices" ADD COLUMN "prices_settings_heading" jsonb;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "newsDet_id" integer;
  DO $$ BEGIN
   ALTER TABLE "share_blocks_highlighted_text_buttons" ADD CONSTRAINT "share_blocks_highlighted_text_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_highlighted_text"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_map_pins" ADD CONSTRAINT "share_blocks_map_pins_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_map_pins" ADD CONSTRAINT "share_blocks_map_pins_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_map"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_sticky_slides_slides_slide_images" ADD CONSTRAINT "share_blocks_sticky_slides_slides_slide_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_sticky_slides_slides_slide_images" ADD CONSTRAINT "share_blocks_sticky_slides_slides_slide_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_sticky_slides_slides"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_sticky_slides_slides" ADD CONSTRAINT "share_blocks_sticky_slides_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_sticky_slides"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_sticky_slides" ADD CONSTRAINT "share_blocks_sticky_slides_sticky_set_background_image_id_media_id_fk" FOREIGN KEY ("sticky_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_sticky_slides" ADD CONSTRAINT "share_blocks_sticky_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "share_blocks_multi_gallery_grid_items_complex_image_one_id_media_id_fk" FOREIGN KEY ("image_one_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "share_blocks_multi_gallery_grid_items_complex_image_two_id_media_id_fk" FOREIGN KEY ("image_two_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "share_blocks_multi_gallery_grid_items_complex_image_three_id_media_id_fk" FOREIGN KEY ("image_three_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "share_blocks_multi_gallery_grid_items_complex_image_four_id_media_id_fk" FOREIGN KEY ("image_four_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "share_blocks_multi_gallery_grid_items_complex_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_multi_gallery_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_multi_gallery_grid_items_simple_grid_left_col" ADD CONSTRAINT "share_blocks_multi_gallery_grid_items_simple_grid_left_col_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_multi_gallery_grid_items_simple_grid_left_col" ADD CONSTRAINT "share_blocks_multi_gallery_grid_items_simple_grid_left_col_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_multi_gallery_grid_items_simple_grid"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_multi_gallery_grid_items_simple_grid_right_col" ADD CONSTRAINT "share_blocks_multi_gallery_grid_items_simple_grid_right_col_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_multi_gallery_grid_items_simple_grid_right_col" ADD CONSTRAINT "share_blocks_multi_gallery_grid_items_simple_grid_right_col_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_multi_gallery_grid_items_simple_grid"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_multi_gallery_grid_items_simple_grid" ADD CONSTRAINT "share_blocks_multi_gallery_grid_items_simple_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_multi_gallery_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_multi_gallery_grid_items" ADD CONSTRAINT "share_blocks_multi_gallery_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_multi_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_multi_gallery" ADD CONSTRAINT "share_blocks_multi_gallery_multi_g_set_background_image_id_media_id_fk" FOREIGN KEY ("multi_g_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_multi_gallery" ADD CONSTRAINT "share_blocks_multi_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_highlighted_text_buttons" ADD CONSTRAINT "pages_blocks_highlighted_text_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_highlighted_text"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_map_pins" ADD CONSTRAINT "pages_blocks_map_pins_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_map_pins" ADD CONSTRAINT "pages_blocks_map_pins_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_map"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_sticky_slides_slides_slide_images" ADD CONSTRAINT "pages_blocks_sticky_slides_slides_slide_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_sticky_slides_slides_slide_images" ADD CONSTRAINT "pages_blocks_sticky_slides_slides_slide_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_sticky_slides_slides"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_sticky_slides_slides" ADD CONSTRAINT "pages_blocks_sticky_slides_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_sticky_slides"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_sticky_slides" ADD CONSTRAINT "pages_blocks_sticky_slides_sticky_set_background_image_id_media_id_fk" FOREIGN KEY ("sticky_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_sticky_slides" ADD CONSTRAINT "pages_blocks_sticky_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "pages_blocks_multi_gallery_grid_items_complex_image_one_id_media_id_fk" FOREIGN KEY ("image_one_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "pages_blocks_multi_gallery_grid_items_complex_image_two_id_media_id_fk" FOREIGN KEY ("image_two_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "pages_blocks_multi_gallery_grid_items_complex_image_three_id_media_id_fk" FOREIGN KEY ("image_three_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "pages_blocks_multi_gallery_grid_items_complex_image_four_id_media_id_fk" FOREIGN KEY ("image_four_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "pages_blocks_multi_gallery_grid_items_complex_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_multi_gallery_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_multi_gallery_grid_items_simple_grid_left_col" ADD CONSTRAINT "pages_blocks_multi_gallery_grid_items_simple_grid_left_col_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_multi_gallery_grid_items_simple_grid_left_col" ADD CONSTRAINT "pages_blocks_multi_gallery_grid_items_simple_grid_left_col_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_multi_gallery_grid_items_simple_grid"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_multi_gallery_grid_items_simple_grid_right_col" ADD CONSTRAINT "pages_blocks_multi_gallery_grid_items_simple_grid_right_col_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_multi_gallery_grid_items_simple_grid_right_col" ADD CONSTRAINT "pages_blocks_multi_gallery_grid_items_simple_grid_right_col_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_multi_gallery_grid_items_simple_grid"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_multi_gallery_grid_items_simple_grid" ADD CONSTRAINT "pages_blocks_multi_gallery_grid_items_simple_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_multi_gallery_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_multi_gallery_grid_items" ADD CONSTRAINT "pages_blocks_multi_gallery_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_multi_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_multi_gallery" ADD CONSTRAINT "pages_blocks_multi_gallery_multi_g_set_background_image_id_media_id_fk" FOREIGN KEY ("multi_g_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_multi_gallery" ADD CONSTRAINT "pages_blocks_multi_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_highlighted_text_buttons" ADD CONSTRAINT "_pages_v_blocks_highlighted_text_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_highlighted_text"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_map_pins" ADD CONSTRAINT "_pages_v_blocks_map_pins_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_map_pins" ADD CONSTRAINT "_pages_v_blocks_map_pins_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_map"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_sticky_slides_slides_slide_images" ADD CONSTRAINT "_pages_v_blocks_sticky_slides_slides_slide_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_sticky_slides_slides_slide_images" ADD CONSTRAINT "_pages_v_blocks_sticky_slides_slides_slide_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_sticky_slides_slides"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_sticky_slides_slides" ADD CONSTRAINT "_pages_v_blocks_sticky_slides_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_sticky_slides"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_sticky_slides" ADD CONSTRAINT "_pages_v_blocks_sticky_slides_sticky_set_background_image_id_media_id_fk" FOREIGN KEY ("sticky_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_sticky_slides" ADD CONSTRAINT "_pages_v_blocks_sticky_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "_pages_v_blocks_multi_gallery_grid_items_complex_image_one_id_media_id_fk" FOREIGN KEY ("image_one_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "_pages_v_blocks_multi_gallery_grid_items_complex_image_two_id_media_id_fk" FOREIGN KEY ("image_two_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "_pages_v_blocks_multi_gallery_grid_items_complex_image_three_id_media_id_fk" FOREIGN KEY ("image_three_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "_pages_v_blocks_multi_gallery_grid_items_complex_image_four_id_media_id_fk" FOREIGN KEY ("image_four_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "_pages_v_blocks_multi_gallery_grid_items_complex_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_multi_gallery_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_multi_gallery_grid_items_simple_grid_left_col" ADD CONSTRAINT "_pages_v_blocks_multi_gallery_grid_items_simple_grid_left_col_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_multi_gallery_grid_items_simple_grid_left_col" ADD CONSTRAINT "_pages_v_blocks_multi_gallery_grid_items_simple_grid_left_col_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_multi_gallery_grid_items_simple_grid"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_multi_gallery_grid_items_simple_grid_right_col" ADD CONSTRAINT "_pages_v_blocks_multi_gallery_grid_items_simple_grid_right_col_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_multi_gallery_grid_items_simple_grid_right_col" ADD CONSTRAINT "_pages_v_blocks_multi_gallery_grid_items_simple_grid_right_col_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_multi_gallery_grid_items_simple_grid"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_multi_gallery_grid_items_simple_grid" ADD CONSTRAINT "_pages_v_blocks_multi_gallery_grid_items_simple_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_multi_gallery_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_multi_gallery_grid_items" ADD CONSTRAINT "_pages_v_blocks_multi_gallery_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_multi_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_multi_gallery" ADD CONSTRAINT "_pages_v_blocks_multi_gallery_multi_g_set_background_image_id_media_id_fk" FOREIGN KEY ("multi_g_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_multi_gallery" ADD CONSTRAINT "_pages_v_blocks_multi_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_highlighted_text_buttons" ADD CONSTRAINT "flDet_blocks_highlighted_text_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_highlighted_text"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_map_pins" ADD CONSTRAINT "flDet_blocks_map_pins_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_map_pins" ADD CONSTRAINT "flDet_blocks_map_pins_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_map"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_sticky_slides_slides_slide_images" ADD CONSTRAINT "flDet_blocks_sticky_slides_slides_slide_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_sticky_slides_slides_slide_images" ADD CONSTRAINT "flDet_blocks_sticky_slides_slides_slide_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_sticky_slides_slides"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_sticky_slides_slides" ADD CONSTRAINT "flDet_blocks_sticky_slides_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_sticky_slides"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_sticky_slides" ADD CONSTRAINT "flDet_blocks_sticky_slides_sticky_set_background_image_id_media_id_fk" FOREIGN KEY ("sticky_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_sticky_slides" ADD CONSTRAINT "flDet_blocks_sticky_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "flDet_blocks_multi_gallery_grid_items_complex_image_one_id_media_id_fk" FOREIGN KEY ("image_one_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "flDet_blocks_multi_gallery_grid_items_complex_image_two_id_media_id_fk" FOREIGN KEY ("image_two_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "flDet_blocks_multi_gallery_grid_items_complex_image_three_id_media_id_fk" FOREIGN KEY ("image_three_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "flDet_blocks_multi_gallery_grid_items_complex_image_four_id_media_id_fk" FOREIGN KEY ("image_four_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "flDet_blocks_multi_gallery_grid_items_complex_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_multi_gallery_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_multi_gallery_grid_items_simple_grid_left_col" ADD CONSTRAINT "flDet_blocks_multi_gallery_grid_items_simple_grid_left_col_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_multi_gallery_grid_items_simple_grid_left_col" ADD CONSTRAINT "flDet_blocks_multi_gallery_grid_items_simple_grid_left_col_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_multi_gallery_grid_items_simple_grid"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_multi_gallery_grid_items_simple_grid_right_col" ADD CONSTRAINT "flDet_blocks_multi_gallery_grid_items_simple_grid_right_col_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_multi_gallery_grid_items_simple_grid_right_col" ADD CONSTRAINT "flDet_blocks_multi_gallery_grid_items_simple_grid_right_col_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_multi_gallery_grid_items_simple_grid"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_multi_gallery_grid_items_simple_grid" ADD CONSTRAINT "flDet_blocks_multi_gallery_grid_items_simple_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_multi_gallery_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_multi_gallery_grid_items" ADD CONSTRAINT "flDet_blocks_multi_gallery_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_multi_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_multi_gallery" ADD CONSTRAINT "flDet_blocks_multi_gallery_multi_g_set_background_image_id_media_id_fk" FOREIGN KEY ("multi_g_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_multi_gallery" ADD CONSTRAINT "flDet_blocks_multi_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_banner" ADD CONSTRAINT "newsDet_blocks_banner_banner_settings_background_image_id_media_id_fk" FOREIGN KEY ("banner_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_banner" ADD CONSTRAINT "newsDet_blocks_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_benefits_benefits_row_item_heading_lines" ADD CONSTRAINT "newsDet_blocks_benefits_benefits_row_item_heading_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_benefits_benefits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_benefits_benefits_row_item2_heading_lines" ADD CONSTRAINT "newsDet_blocks_benefits_benefits_row_item2_heading_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_benefits_benefits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_benefits_benefits" ADD CONSTRAINT "newsDet_blocks_benefits_benefits_row_item_image_id_media_id_fk" FOREIGN KEY ("row_item_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_benefits_benefits" ADD CONSTRAINT "newsDet_blocks_benefits_benefits_row_item2_image_id_media_id_fk" FOREIGN KEY ("row_item2_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_benefits_benefits" ADD CONSTRAINT "newsDet_blocks_benefits_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_benefits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_benefits" ADD CONSTRAINT "newsDet_blocks_benefits_benefits_settings_background_image_id_media_id_fk" FOREIGN KEY ("benefits_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_benefits" ADD CONSTRAINT "newsDet_blocks_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_contact_contact_info_highlighted_contacts" ADD CONSTRAINT "newsDet_blocks_contact_contact_info_highlighted_contacts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_contact_contact_info_contact_items" ADD CONSTRAINT "newsDet_blocks_contact_contact_info_contact_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_contact_contact_form_config_disposition_options" ADD CONSTRAINT "newsDet_blocks_contact_contact_form_config_disposition_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_contact" ADD CONSTRAINT "newsDet_blocks_contact_contact_settings_background_image_id_media_id_fk" FOREIGN KEY ("contact_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_contact" ADD CONSTRAINT "newsDet_blocks_contact_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_content" ADD CONSTRAINT "newsDet_blocks_content_content_settings_background_image_id_media_id_fk" FOREIGN KEY ("content_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_content" ADD CONSTRAINT "newsDet_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_draw_editor" ADD CONSTRAINT "newsDet_blocks_draw_editor_image_picker_id_media_id_fk" FOREIGN KEY ("image_picker_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_draw_editor" ADD CONSTRAINT "newsDet_blocks_draw_editor_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_features_features_with_title" ADD CONSTRAINT "newsDet_blocks_features_features_with_title_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_features_features_with_image" ADD CONSTRAINT "newsDet_blocks_features_features_with_image_feature_image_id_media_id_fk" FOREIGN KEY ("feature_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_features_features_with_image" ADD CONSTRAINT "newsDet_blocks_features_features_with_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_features_features_uppercase" ADD CONSTRAINT "newsDet_blocks_features_features_uppercase_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_features" ADD CONSTRAINT "newsDet_blocks_features_features_settings_background_image_id_media_id_fk" FOREIGN KEY ("features_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_features" ADD CONSTRAINT "newsDet_blocks_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_form_form_cfg_flat_disposition_options" ADD CONSTRAINT "newsDet_blocks_form_form_cfg_flat_disposition_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_form"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_form_slide_out_boxes" ADD CONSTRAINT "newsDet_blocks_form_slide_out_boxes_column_image_id_media_id_fk" FOREIGN KEY ("column_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_form_slide_out_boxes" ADD CONSTRAINT "newsDet_blocks_form_slide_out_boxes_column_image2_id_media_id_fk" FOREIGN KEY ("column_image2_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_form_slide_out_boxes" ADD CONSTRAINT "newsDet_blocks_form_slide_out_boxes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_form"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_form" ADD CONSTRAINT "newsDet_blocks_form_form_settings_background_image_id_media_id_fk" FOREIGN KEY ("form_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_form" ADD CONSTRAINT "newsDet_blocks_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_flats_snippets" ADD CONSTRAINT "newsDet_blocks_flats_snippets_flats_set_background_image_id_media_id_fk" FOREIGN KEY ("flats_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_flats_snippets" ADD CONSTRAINT "newsDet_blocks_flats_snippets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_gallery_simple_slider" ADD CONSTRAINT "newsDet_blocks_gallery_simple_slider_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_gallery_simple_slider" ADD CONSTRAINT "newsDet_blocks_gallery_simple_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_gallery_multi_slider_images" ADD CONSTRAINT "newsDet_blocks_gallery_multi_slider_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_gallery_multi_slider_images" ADD CONSTRAINT "newsDet_blocks_gallery_multi_slider_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_gallery_multi_slider"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_gallery_multi_slider" ADD CONSTRAINT "newsDet_blocks_gallery_multi_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_gallery_full_width" ADD CONSTRAINT "newsDet_blocks_gallery_full_width_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_gallery_full_width" ADD CONSTRAINT "newsDet_blocks_gallery_full_width_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_gallery" ADD CONSTRAINT "newsDet_blocks_gallery_gallery_settings_background_image_id_media_id_fk" FOREIGN KEY ("gallery_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_gallery" ADD CONSTRAINT "newsDet_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_hero_hero_slideshow" ADD CONSTRAINT "newsDet_blocks_hero_hero_slideshow_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_hero_hero_slideshow" ADD CONSTRAINT "newsDet_blocks_hero_hero_slideshow_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_hero_main_buttons" ADD CONSTRAINT "newsDet_blocks_hero_main_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_hero_secondary_buttons" ADD CONSTRAINT "newsDet_blocks_hero_secondary_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_hero" ADD CONSTRAINT "newsDet_blocks_hero_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_hero" ADD CONSTRAINT "newsDet_blocks_hero_hero_video_id_media_id_fk" FOREIGN KEY ("hero_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_hero" ADD CONSTRAINT "newsDet_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_highlighted_text_buttons" ADD CONSTRAINT "newsDet_blocks_highlighted_text_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_highlighted_text"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_highlighted_text" ADD CONSTRAINT "newsDet_blocks_highlighted_text_high_set_background_image_id_media_id_fk" FOREIGN KEY ("high_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_highlighted_text" ADD CONSTRAINT "newsDet_blocks_highlighted_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_img_content_person_bullets" ADD CONSTRAINT "newsDet_blocks_img_content_person_bullets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_img_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_img_content_accordion_accordion_items" ADD CONSTRAINT "newsDet_blocks_img_content_accordion_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_img_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_img_content" ADD CONSTRAINT "newsDet_blocks_img_content_img_cont_set_background_image_id_media_id_fk" FOREIGN KEY ("img_cont_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_img_content" ADD CONSTRAINT "newsDet_blocks_img_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_img_content" ADD CONSTRAINT "newsDet_blocks_img_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_images_grid_images" ADD CONSTRAINT "newsDet_blocks_images_grid_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_images_grid_images" ADD CONSTRAINT "newsDet_blocks_images_grid_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_images_grid"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_images_grid" ADD CONSTRAINT "newsDet_blocks_images_grid_images_settings_background_image_id_media_id_fk" FOREIGN KEY ("images_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_images_grid" ADD CONSTRAINT "newsDet_blocks_images_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_image_pins_pins" ADD CONSTRAINT "newsDet_blocks_image_pins_pins_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_image_pins_pins" ADD CONSTRAINT "newsDet_blocks_image_pins_pins_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_image_pins"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_image_pins" ADD CONSTRAINT "newsDet_blocks_image_pins_image_pins_set_background_image_id_media_id_fk" FOREIGN KEY ("image_pins_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_image_pins" ADD CONSTRAINT "newsDet_blocks_image_pins_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_image_pins" ADD CONSTRAINT "newsDet_blocks_image_pins_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_map_pins" ADD CONSTRAINT "newsDet_blocks_map_pins_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_map_pins" ADD CONSTRAINT "newsDet_blocks_map_pins_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_map"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_map" ADD CONSTRAINT "newsDet_blocks_map_map_settings_background_image_id_media_id_fk" FOREIGN KEY ("map_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_map" ADD CONSTRAINT "newsDet_blocks_map_map_id_media_id_fk" FOREIGN KEY ("map_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_map" ADD CONSTRAINT "newsDet_blocks_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_news_snippets" ADD CONSTRAINT "newsDet_blocks_news_snippets_news_set_background_image_id_media_id_fk" FOREIGN KEY ("news_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_news_snippets" ADD CONSTRAINT "newsDet_blocks_news_snippets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_numbers_numbers" ADD CONSTRAINT "newsDet_blocks_numbers_numbers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_numbers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_numbers" ADD CONSTRAINT "newsDet_blocks_numbers_numbers_settings_background_image_id_media_id_fk" FOREIGN KEY ("numbers_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_numbers" ADD CONSTRAINT "newsDet_blocks_numbers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_timeline_timeline" ADD CONSTRAINT "newsDet_blocks_timeline_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_timeline" ADD CONSTRAINT "newsDet_blocks_timeline_timeline_settings_background_image_id_media_id_fk" FOREIGN KEY ("timeline_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_timeline" ADD CONSTRAINT "newsDet_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_our_projects_projects" ADD CONSTRAINT "newsDet_blocks_our_projects_projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_our_projects_projects" ADD CONSTRAINT "newsDet_blocks_our_projects_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_our_projects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_our_projects" ADD CONSTRAINT "newsDet_blocks_our_projects_our_proj_set_background_image_id_media_id_fk" FOREIGN KEY ("our_proj_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_our_projects" ADD CONSTRAINT "newsDet_blocks_our_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_prices" ADD CONSTRAINT "newsDet_blocks_prices_prices_settings_background_image_id_media_id_fk" FOREIGN KEY ("prices_settings_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_prices" ADD CONSTRAINT "newsDet_blocks_prices_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_interactive_picker_extended_views" ADD CONSTRAINT "newsDet_blocks_interactive_picker_extended_views_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_interactive_picker_extended_views" ADD CONSTRAINT "newsDet_blocks_interactive_picker_extended_views_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_interactive_picker_extended"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_interactive_picker_extended" ADD CONSTRAINT "newsDet_blocks_interactive_picker_extended_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_visual_price_list_buildings" ADD CONSTRAINT "newsDet_blocks_visual_price_list_buildings_building_id_buildings_id_fk" FOREIGN KEY ("building_id") REFERENCES "public"."buildings"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_visual_price_list_buildings" ADD CONSTRAINT "newsDet_blocks_visual_price_list_buildings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_visual_price_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_visual_price_list" ADD CONSTRAINT "newsDet_blocks_visual_price_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_step_cards_steps" ADD CONSTRAINT "newsDet_blocks_step_cards_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_step_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_step_cards" ADD CONSTRAINT "newsDet_blocks_step_cards_step_cards_set_background_image_id_media_id_fk" FOREIGN KEY ("step_cards_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_step_cards" ADD CONSTRAINT "newsDet_blocks_step_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_sticky_slides_slides_slide_images" ADD CONSTRAINT "newsDet_blocks_sticky_slides_slides_slide_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_sticky_slides_slides_slide_images" ADD CONSTRAINT "newsDet_blocks_sticky_slides_slides_slide_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_sticky_slides_slides"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_sticky_slides_slides" ADD CONSTRAINT "newsDet_blocks_sticky_slides_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_sticky_slides"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_sticky_slides" ADD CONSTRAINT "newsDet_blocks_sticky_slides_sticky_set_background_image_id_media_id_fk" FOREIGN KEY ("sticky_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_sticky_slides" ADD CONSTRAINT "newsDet_blocks_sticky_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "newsDet_blocks_multi_gallery_grid_items_complex_image_one_id_media_id_fk" FOREIGN KEY ("image_one_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "newsDet_blocks_multi_gallery_grid_items_complex_image_two_id_media_id_fk" FOREIGN KEY ("image_two_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "newsDet_blocks_multi_gallery_grid_items_complex_image_three_id_media_id_fk" FOREIGN KEY ("image_three_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "newsDet_blocks_multi_gallery_grid_items_complex_image_four_id_media_id_fk" FOREIGN KEY ("image_four_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_multi_gallery_grid_items_complex" ADD CONSTRAINT "newsDet_blocks_multi_gallery_grid_items_complex_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_multi_gallery_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_multi_gallery_grid_items_simple_grid_left_col" ADD CONSTRAINT "newsDet_blocks_multi_gallery_grid_items_simple_grid_left_col_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_multi_gallery_grid_items_simple_grid_left_col" ADD CONSTRAINT "newsDet_blocks_multi_gallery_grid_items_simple_grid_left_col_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_multi_gallery_grid_items_simple_grid"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_multi_gallery_grid_items_simple_grid_right_col" ADD CONSTRAINT "newsDet_blocks_multi_gallery_grid_items_simple_grid_right_col_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_multi_gallery_grid_items_simple_grid_right_col" ADD CONSTRAINT "newsDet_blocks_multi_gallery_grid_items_simple_grid_right_col_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_multi_gallery_grid_items_simple_grid"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_multi_gallery_grid_items_simple_grid" ADD CONSTRAINT "newsDet_blocks_multi_gallery_grid_items_simple_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_multi_gallery_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_multi_gallery_grid_items" ADD CONSTRAINT "newsDet_blocks_multi_gallery_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_multi_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_multi_gallery" ADD CONSTRAINT "newsDet_blocks_multi_gallery_multi_g_set_background_image_id_media_id_fk" FOREIGN KEY ("multi_g_set_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_multi_gallery" ADD CONSTRAINT "newsDet_blocks_multi_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_variable_table_rows_cells" ADD CONSTRAINT "newsDet_blocks_variable_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_variable_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_variable_table_rows" ADD CONSTRAINT "newsDet_blocks_variable_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_variable_table"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_variable_table" ADD CONSTRAINT "newsDet_blocks_variable_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_table_custom" ADD CONSTRAINT "newsDet_blocks_table_custom_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_text_image" ADD CONSTRAINT "newsDet_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_text_image" ADD CONSTRAINT "newsDet_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_shared_section" ADD CONSTRAINT "newsDet_blocks_shared_section_shared_section_id_share_id_fk" FOREIGN KEY ("shared_section_id") REFERENCES "public"."share"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_shared_section" ADD CONSTRAINT "newsDet_blocks_shared_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet" ADD CONSTRAINT "newsDet_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet" ADD CONSTRAINT "newsDet_meta_og_image_id_media_id_fk" FOREIGN KEY ("meta_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDetstoone" ADD CONSTRAINT "newsDetstoone_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_rels" ADD CONSTRAINT "newsDet_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_rels" ADD CONSTRAINT "newsDet_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_rels" ADD CONSTRAINT "newsDet_rels_flats_fk" FOREIGN KEY ("flats_id") REFERENCES "public"."flats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_rels" ADD CONSTRAINT "newsDet_rels_news_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "share_blocks_highlighted_text_buttons_order_idx" ON "share_blocks_highlighted_text_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_highlighted_text_buttons_parent_id_idx" ON "share_blocks_highlighted_text_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_highlighted_text_buttons_locale_idx" ON "share_blocks_highlighted_text_buttons" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_map_pins_order_idx" ON "share_blocks_map_pins" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_map_pins_parent_id_idx" ON "share_blocks_map_pins" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_map_pins_locale_idx" ON "share_blocks_map_pins" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_map_pins_logo_idx" ON "share_blocks_map_pins" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_sticky_slides_slides_slide_images_order_idx" ON "share_blocks_sticky_slides_slides_slide_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_sticky_slides_slides_slide_images_parent_id_idx" ON "share_blocks_sticky_slides_slides_slide_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_sticky_slides_slides_slide_images_locale_idx" ON "share_blocks_sticky_slides_slides_slide_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_sticky_slides_slides_slide_images_image_idx" ON "share_blocks_sticky_slides_slides_slide_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_sticky_slides_slides_order_idx" ON "share_blocks_sticky_slides_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_sticky_slides_slides_parent_id_idx" ON "share_blocks_sticky_slides_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_sticky_slides_slides_locale_idx" ON "share_blocks_sticky_slides_slides" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_sticky_slides_order_idx" ON "share_blocks_sticky_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_sticky_slides_parent_id_idx" ON "share_blocks_sticky_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_sticky_slides_path_idx" ON "share_blocks_sticky_slides" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_sticky_slides_locale_idx" ON "share_blocks_sticky_slides" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_sticky_slides_sticky_set_sticky_set_background_image_idx" ON "share_blocks_sticky_slides" USING btree ("sticky_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_complex_order_idx" ON "share_blocks_multi_gallery_grid_items_complex" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_complex_parent_id_idx" ON "share_blocks_multi_gallery_grid_items_complex" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_complex_locale_idx" ON "share_blocks_multi_gallery_grid_items_complex" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_complex_image_one_idx" ON "share_blocks_multi_gallery_grid_items_complex" USING btree ("image_one_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_complex_image_two_idx" ON "share_blocks_multi_gallery_grid_items_complex" USING btree ("image_two_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_complex_image_three_idx" ON "share_blocks_multi_gallery_grid_items_complex" USING btree ("image_three_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_complex_image_four_idx" ON "share_blocks_multi_gallery_grid_items_complex" USING btree ("image_four_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_simple_grid_left_col_order_idx" ON "share_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_simple_grid_left_col_parent_id_idx" ON "share_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_simple_grid_left_col_locale_idx" ON "share_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_simple_grid_left_col_image_idx" ON "share_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_simple_grid_right_col_order_idx" ON "share_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_simple_grid_right_col_parent_id_idx" ON "share_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_simple_grid_right_col_locale_idx" ON "share_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_simple_grid_right_col_image_idx" ON "share_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_simple_grid_order_idx" ON "share_blocks_multi_gallery_grid_items_simple_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_simple_grid_parent_id_idx" ON "share_blocks_multi_gallery_grid_items_simple_grid" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_simple_grid_locale_idx" ON "share_blocks_multi_gallery_grid_items_simple_grid" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_order_idx" ON "share_blocks_multi_gallery_grid_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_parent_id_idx" ON "share_blocks_multi_gallery_grid_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_grid_items_locale_idx" ON "share_blocks_multi_gallery_grid_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_order_idx" ON "share_blocks_multi_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_parent_id_idx" ON "share_blocks_multi_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_path_idx" ON "share_blocks_multi_gallery" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_locale_idx" ON "share_blocks_multi_gallery" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_multi_gallery_multi_g_set_multi_g_set_background_image_idx" ON "share_blocks_multi_gallery" USING btree ("multi_g_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_highlighted_text_buttons_order_idx" ON "pages_blocks_highlighted_text_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_highlighted_text_buttons_parent_id_idx" ON "pages_blocks_highlighted_text_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_highlighted_text_buttons_locale_idx" ON "pages_blocks_highlighted_text_buttons" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_map_pins_order_idx" ON "pages_blocks_map_pins" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_map_pins_parent_id_idx" ON "pages_blocks_map_pins" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_map_pins_locale_idx" ON "pages_blocks_map_pins" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_map_pins_logo_idx" ON "pages_blocks_map_pins" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_sticky_slides_slides_slide_images_order_idx" ON "pages_blocks_sticky_slides_slides_slide_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_sticky_slides_slides_slide_images_parent_id_idx" ON "pages_blocks_sticky_slides_slides_slide_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_sticky_slides_slides_slide_images_locale_idx" ON "pages_blocks_sticky_slides_slides_slide_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_sticky_slides_slides_slide_images_image_idx" ON "pages_blocks_sticky_slides_slides_slide_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_sticky_slides_slides_order_idx" ON "pages_blocks_sticky_slides_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_sticky_slides_slides_parent_id_idx" ON "pages_blocks_sticky_slides_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_sticky_slides_slides_locale_idx" ON "pages_blocks_sticky_slides_slides" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_sticky_slides_order_idx" ON "pages_blocks_sticky_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_sticky_slides_parent_id_idx" ON "pages_blocks_sticky_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_sticky_slides_path_idx" ON "pages_blocks_sticky_slides" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_sticky_slides_locale_idx" ON "pages_blocks_sticky_slides" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_sticky_slides_sticky_set_sticky_set_background_image_idx" ON "pages_blocks_sticky_slides" USING btree ("sticky_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_complex_order_idx" ON "pages_blocks_multi_gallery_grid_items_complex" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_complex_parent_id_idx" ON "pages_blocks_multi_gallery_grid_items_complex" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_complex_locale_idx" ON "pages_blocks_multi_gallery_grid_items_complex" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_complex_image_one_idx" ON "pages_blocks_multi_gallery_grid_items_complex" USING btree ("image_one_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_complex_image_two_idx" ON "pages_blocks_multi_gallery_grid_items_complex" USING btree ("image_two_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_complex_image_three_idx" ON "pages_blocks_multi_gallery_grid_items_complex" USING btree ("image_three_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_complex_image_four_idx" ON "pages_blocks_multi_gallery_grid_items_complex" USING btree ("image_four_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_simple_grid_left_col_order_idx" ON "pages_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_simple_grid_left_col_parent_id_idx" ON "pages_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_simple_grid_left_col_locale_idx" ON "pages_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_simple_grid_left_col_image_idx" ON "pages_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_simple_grid_right_col_order_idx" ON "pages_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_simple_grid_right_col_parent_id_idx" ON "pages_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_simple_grid_right_col_locale_idx" ON "pages_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_simple_grid_right_col_image_idx" ON "pages_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_simple_grid_order_idx" ON "pages_blocks_multi_gallery_grid_items_simple_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_simple_grid_parent_id_idx" ON "pages_blocks_multi_gallery_grid_items_simple_grid" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_simple_grid_locale_idx" ON "pages_blocks_multi_gallery_grid_items_simple_grid" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_order_idx" ON "pages_blocks_multi_gallery_grid_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_parent_id_idx" ON "pages_blocks_multi_gallery_grid_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_grid_items_locale_idx" ON "pages_blocks_multi_gallery_grid_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_order_idx" ON "pages_blocks_multi_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_parent_id_idx" ON "pages_blocks_multi_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_path_idx" ON "pages_blocks_multi_gallery" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_locale_idx" ON "pages_blocks_multi_gallery" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_gallery_multi_g_set_multi_g_set_background_image_idx" ON "pages_blocks_multi_gallery" USING btree ("multi_g_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_highlighted_text_buttons_order_idx" ON "_pages_v_blocks_highlighted_text_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_highlighted_text_buttons_parent_id_idx" ON "_pages_v_blocks_highlighted_text_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_highlighted_text_buttons_locale_idx" ON "_pages_v_blocks_highlighted_text_buttons" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_map_pins_order_idx" ON "_pages_v_blocks_map_pins" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_map_pins_parent_id_idx" ON "_pages_v_blocks_map_pins" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_map_pins_locale_idx" ON "_pages_v_blocks_map_pins" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_map_pins_logo_idx" ON "_pages_v_blocks_map_pins" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_sticky_slides_slides_slide_images_order_idx" ON "_pages_v_blocks_sticky_slides_slides_slide_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_sticky_slides_slides_slide_images_parent_id_idx" ON "_pages_v_blocks_sticky_slides_slides_slide_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_sticky_slides_slides_slide_images_locale_idx" ON "_pages_v_blocks_sticky_slides_slides_slide_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_sticky_slides_slides_slide_images_image_idx" ON "_pages_v_blocks_sticky_slides_slides_slide_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_sticky_slides_slides_order_idx" ON "_pages_v_blocks_sticky_slides_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_sticky_slides_slides_parent_id_idx" ON "_pages_v_blocks_sticky_slides_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_sticky_slides_slides_locale_idx" ON "_pages_v_blocks_sticky_slides_slides" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_sticky_slides_order_idx" ON "_pages_v_blocks_sticky_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_sticky_slides_parent_id_idx" ON "_pages_v_blocks_sticky_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_sticky_slides_path_idx" ON "_pages_v_blocks_sticky_slides" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_sticky_slides_locale_idx" ON "_pages_v_blocks_sticky_slides" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_sticky_slides_sticky_set_sticky_set_background_image_idx" ON "_pages_v_blocks_sticky_slides" USING btree ("sticky_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_complex_order_idx" ON "_pages_v_blocks_multi_gallery_grid_items_complex" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_complex_parent_id_idx" ON "_pages_v_blocks_multi_gallery_grid_items_complex" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_complex_locale_idx" ON "_pages_v_blocks_multi_gallery_grid_items_complex" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_complex_image_one_idx" ON "_pages_v_blocks_multi_gallery_grid_items_complex" USING btree ("image_one_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_complex_image_two_idx" ON "_pages_v_blocks_multi_gallery_grid_items_complex" USING btree ("image_two_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_complex_image_three_idx" ON "_pages_v_blocks_multi_gallery_grid_items_complex" USING btree ("image_three_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_complex_image_four_idx" ON "_pages_v_blocks_multi_gallery_grid_items_complex" USING btree ("image_four_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_simple_grid_left_col_order_idx" ON "_pages_v_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_simple_grid_left_col_parent_id_idx" ON "_pages_v_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_simple_grid_left_col_locale_idx" ON "_pages_v_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_simple_grid_left_col_image_idx" ON "_pages_v_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_simple_grid_right_col_order_idx" ON "_pages_v_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_simple_grid_right_col_parent_id_idx" ON "_pages_v_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_simple_grid_right_col_locale_idx" ON "_pages_v_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_simple_grid_right_col_image_idx" ON "_pages_v_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_simple_grid_order_idx" ON "_pages_v_blocks_multi_gallery_grid_items_simple_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_simple_grid_parent_id_idx" ON "_pages_v_blocks_multi_gallery_grid_items_simple_grid" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_simple_grid_locale_idx" ON "_pages_v_blocks_multi_gallery_grid_items_simple_grid" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_order_idx" ON "_pages_v_blocks_multi_gallery_grid_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_parent_id_idx" ON "_pages_v_blocks_multi_gallery_grid_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_grid_items_locale_idx" ON "_pages_v_blocks_multi_gallery_grid_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_order_idx" ON "_pages_v_blocks_multi_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_parent_id_idx" ON "_pages_v_blocks_multi_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_path_idx" ON "_pages_v_blocks_multi_gallery" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_locale_idx" ON "_pages_v_blocks_multi_gallery" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_gallery_multi_g_set_multi_g_set_background_image_idx" ON "_pages_v_blocks_multi_gallery" USING btree ("multi_g_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_highlighted_text_buttons_order_idx" ON "flDet_blocks_highlighted_text_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_highlighted_text_buttons_parent_id_idx" ON "flDet_blocks_highlighted_text_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_highlighted_text_buttons_locale_idx" ON "flDet_blocks_highlighted_text_buttons" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_map_pins_order_idx" ON "flDet_blocks_map_pins" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_map_pins_parent_id_idx" ON "flDet_blocks_map_pins" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_map_pins_locale_idx" ON "flDet_blocks_map_pins" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_map_pins_logo_idx" ON "flDet_blocks_map_pins" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_sticky_slides_slides_slide_images_order_idx" ON "flDet_blocks_sticky_slides_slides_slide_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_sticky_slides_slides_slide_images_parent_id_idx" ON "flDet_blocks_sticky_slides_slides_slide_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_sticky_slides_slides_slide_images_locale_idx" ON "flDet_blocks_sticky_slides_slides_slide_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_sticky_slides_slides_slide_images_image_idx" ON "flDet_blocks_sticky_slides_slides_slide_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_sticky_slides_slides_order_idx" ON "flDet_blocks_sticky_slides_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_sticky_slides_slides_parent_id_idx" ON "flDet_blocks_sticky_slides_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_sticky_slides_slides_locale_idx" ON "flDet_blocks_sticky_slides_slides" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_sticky_slides_order_idx" ON "flDet_blocks_sticky_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_sticky_slides_parent_id_idx" ON "flDet_blocks_sticky_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_sticky_slides_path_idx" ON "flDet_blocks_sticky_slides" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_sticky_slides_locale_idx" ON "flDet_blocks_sticky_slides" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_sticky_slides_sticky_set_sticky_set_background_image_idx" ON "flDet_blocks_sticky_slides" USING btree ("sticky_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_complex_order_idx" ON "flDet_blocks_multi_gallery_grid_items_complex" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_complex_parent_id_idx" ON "flDet_blocks_multi_gallery_grid_items_complex" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_complex_locale_idx" ON "flDet_blocks_multi_gallery_grid_items_complex" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_complex_image_one_idx" ON "flDet_blocks_multi_gallery_grid_items_complex" USING btree ("image_one_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_complex_image_two_idx" ON "flDet_blocks_multi_gallery_grid_items_complex" USING btree ("image_two_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_complex_image_three_idx" ON "flDet_blocks_multi_gallery_grid_items_complex" USING btree ("image_three_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_complex_image_four_idx" ON "flDet_blocks_multi_gallery_grid_items_complex" USING btree ("image_four_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_simple_grid_left_col_order_idx" ON "flDet_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_simple_grid_left_col_parent_id_idx" ON "flDet_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_simple_grid_left_col_locale_idx" ON "flDet_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_simple_grid_left_col_image_idx" ON "flDet_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_simple_grid_right_col_order_idx" ON "flDet_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_simple_grid_right_col_parent_id_idx" ON "flDet_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_simple_grid_right_col_locale_idx" ON "flDet_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_simple_grid_right_col_image_idx" ON "flDet_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_simple_grid_order_idx" ON "flDet_blocks_multi_gallery_grid_items_simple_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_simple_grid_parent_id_idx" ON "flDet_blocks_multi_gallery_grid_items_simple_grid" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_simple_grid_locale_idx" ON "flDet_blocks_multi_gallery_grid_items_simple_grid" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_order_idx" ON "flDet_blocks_multi_gallery_grid_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_parent_id_idx" ON "flDet_blocks_multi_gallery_grid_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_grid_items_locale_idx" ON "flDet_blocks_multi_gallery_grid_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_order_idx" ON "flDet_blocks_multi_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_parent_id_idx" ON "flDet_blocks_multi_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_path_idx" ON "flDet_blocks_multi_gallery" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_locale_idx" ON "flDet_blocks_multi_gallery" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_multi_gallery_multi_g_set_multi_g_set_background_image_idx" ON "flDet_blocks_multi_gallery" USING btree ("multi_g_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_banner_order_idx" ON "newsDet_blocks_banner" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_banner_parent_id_idx" ON "newsDet_blocks_banner" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_banner_path_idx" ON "newsDet_blocks_banner" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_banner_locale_idx" ON "newsDet_blocks_banner" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_banner_banner_settings_banner_settings_background_image_idx" ON "newsDet_blocks_banner" USING btree ("banner_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_benefits_benefits_row_item_heading_lines_order_idx" ON "newsDet_blocks_benefits_benefits_row_item_heading_lines" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_benefits_benefits_row_item_heading_lines_parent_id_idx" ON "newsDet_blocks_benefits_benefits_row_item_heading_lines" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_benefits_benefits_row_item_heading_lines_locale_idx" ON "newsDet_blocks_benefits_benefits_row_item_heading_lines" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_benefits_benefits_row_item2_heading_lines_order_idx" ON "newsDet_blocks_benefits_benefits_row_item2_heading_lines" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_benefits_benefits_row_item2_heading_lines_parent_id_idx" ON "newsDet_blocks_benefits_benefits_row_item2_heading_lines" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_benefits_benefits_row_item2_heading_lines_locale_idx" ON "newsDet_blocks_benefits_benefits_row_item2_heading_lines" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_benefits_benefits_order_idx" ON "newsDet_blocks_benefits_benefits" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_benefits_benefits_parent_id_idx" ON "newsDet_blocks_benefits_benefits" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_benefits_benefits_locale_idx" ON "newsDet_blocks_benefits_benefits" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_benefits_benefits_row_item_row_item_image_idx" ON "newsDet_blocks_benefits_benefits" USING btree ("row_item_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_benefits_benefits_row_item2_row_item2_image_idx" ON "newsDet_blocks_benefits_benefits" USING btree ("row_item2_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_benefits_order_idx" ON "newsDet_blocks_benefits" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_benefits_parent_id_idx" ON "newsDet_blocks_benefits" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_benefits_path_idx" ON "newsDet_blocks_benefits" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_benefits_locale_idx" ON "newsDet_blocks_benefits" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_benefits_benefits_settings_benefits_settings_background_image_idx" ON "newsDet_blocks_benefits" USING btree ("benefits_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_contact_contact_info_highlighted_contacts_order_idx" ON "newsDet_blocks_contact_contact_info_highlighted_contacts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_contact_contact_info_highlighted_contacts_parent_id_idx" ON "newsDet_blocks_contact_contact_info_highlighted_contacts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_contact_contact_info_highlighted_contacts_locale_idx" ON "newsDet_blocks_contact_contact_info_highlighted_contacts" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_contact_contact_info_contact_items_order_idx" ON "newsDet_blocks_contact_contact_info_contact_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_contact_contact_info_contact_items_parent_id_idx" ON "newsDet_blocks_contact_contact_info_contact_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_contact_contact_info_contact_items_locale_idx" ON "newsDet_blocks_contact_contact_info_contact_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_contact_contact_form_config_disposition_options_order_idx" ON "newsDet_blocks_contact_contact_form_config_disposition_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_contact_contact_form_config_disposition_options_parent_id_idx" ON "newsDet_blocks_contact_contact_form_config_disposition_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_contact_contact_form_config_disposition_options_locale_idx" ON "newsDet_blocks_contact_contact_form_config_disposition_options" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_contact_order_idx" ON "newsDet_blocks_contact" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_contact_parent_id_idx" ON "newsDet_blocks_contact" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_contact_path_idx" ON "newsDet_blocks_contact" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_contact_locale_idx" ON "newsDet_blocks_contact" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_contact_contact_settings_contact_settings_background_image_idx" ON "newsDet_blocks_contact" USING btree ("contact_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_content_order_idx" ON "newsDet_blocks_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_content_parent_id_idx" ON "newsDet_blocks_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_content_path_idx" ON "newsDet_blocks_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_content_locale_idx" ON "newsDet_blocks_content" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_content_content_settings_content_settings_background_image_idx" ON "newsDet_blocks_content" USING btree ("content_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_draw_editor_order_idx" ON "newsDet_blocks_draw_editor" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_draw_editor_parent_id_idx" ON "newsDet_blocks_draw_editor" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_draw_editor_path_idx" ON "newsDet_blocks_draw_editor" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_draw_editor_locale_idx" ON "newsDet_blocks_draw_editor" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_draw_editor_image_picker_idx" ON "newsDet_blocks_draw_editor" USING btree ("image_picker_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_features_features_with_title_order_idx" ON "newsDet_blocks_features_features_with_title" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_features_features_with_title_parent_id_idx" ON "newsDet_blocks_features_features_with_title" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_features_features_with_title_locale_idx" ON "newsDet_blocks_features_features_with_title" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_features_features_with_image_order_idx" ON "newsDet_blocks_features_features_with_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_features_features_with_image_parent_id_idx" ON "newsDet_blocks_features_features_with_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_features_features_with_image_locale_idx" ON "newsDet_blocks_features_features_with_image" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_features_features_with_image_feature_feature_image_idx" ON "newsDet_blocks_features_features_with_image" USING btree ("feature_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_features_features_uppercase_order_idx" ON "newsDet_blocks_features_features_uppercase" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_features_features_uppercase_parent_id_idx" ON "newsDet_blocks_features_features_uppercase" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_features_features_uppercase_locale_idx" ON "newsDet_blocks_features_features_uppercase" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_features_order_idx" ON "newsDet_blocks_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_features_parent_id_idx" ON "newsDet_blocks_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_features_path_idx" ON "newsDet_blocks_features" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_features_locale_idx" ON "newsDet_blocks_features" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_features_features_settings_features_settings_background_image_idx" ON "newsDet_blocks_features" USING btree ("features_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_form_form_cfg_flat_disposition_options_order_idx" ON "newsDet_blocks_form_form_cfg_flat_disposition_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_form_form_cfg_flat_disposition_options_parent_id_idx" ON "newsDet_blocks_form_form_cfg_flat_disposition_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_form_form_cfg_flat_disposition_options_locale_idx" ON "newsDet_blocks_form_form_cfg_flat_disposition_options" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_form_slide_out_boxes_order_idx" ON "newsDet_blocks_form_slide_out_boxes" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_form_slide_out_boxes_parent_id_idx" ON "newsDet_blocks_form_slide_out_boxes" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_form_slide_out_boxes_locale_idx" ON "newsDet_blocks_form_slide_out_boxes" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_form_slide_out_boxes_column_column_image_idx" ON "newsDet_blocks_form_slide_out_boxes" USING btree ("column_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_form_slide_out_boxes_column_column_image2_idx" ON "newsDet_blocks_form_slide_out_boxes" USING btree ("column_image2_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_form_order_idx" ON "newsDet_blocks_form" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_form_parent_id_idx" ON "newsDet_blocks_form" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_form_path_idx" ON "newsDet_blocks_form" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_form_locale_idx" ON "newsDet_blocks_form" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_form_form_settings_form_settings_background_image_idx" ON "newsDet_blocks_form" USING btree ("form_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_flats_snippets_order_idx" ON "newsDet_blocks_flats_snippets" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_flats_snippets_parent_id_idx" ON "newsDet_blocks_flats_snippets" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_flats_snippets_path_idx" ON "newsDet_blocks_flats_snippets" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_flats_snippets_locale_idx" ON "newsDet_blocks_flats_snippets" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_flats_snippets_flats_set_flats_set_background_image_idx" ON "newsDet_blocks_flats_snippets" USING btree ("flats_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_gallery_simple_slider_order_idx" ON "newsDet_blocks_gallery_simple_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_gallery_simple_slider_parent_id_idx" ON "newsDet_blocks_gallery_simple_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_gallery_simple_slider_locale_idx" ON "newsDet_blocks_gallery_simple_slider" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_gallery_simple_slider_image_idx" ON "newsDet_blocks_gallery_simple_slider" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_gallery_multi_slider_images_order_idx" ON "newsDet_blocks_gallery_multi_slider_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_gallery_multi_slider_images_parent_id_idx" ON "newsDet_blocks_gallery_multi_slider_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_gallery_multi_slider_images_locale_idx" ON "newsDet_blocks_gallery_multi_slider_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_gallery_multi_slider_images_image_idx" ON "newsDet_blocks_gallery_multi_slider_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_gallery_multi_slider_order_idx" ON "newsDet_blocks_gallery_multi_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_gallery_multi_slider_parent_id_idx" ON "newsDet_blocks_gallery_multi_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_gallery_multi_slider_locale_idx" ON "newsDet_blocks_gallery_multi_slider" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_gallery_full_width_order_idx" ON "newsDet_blocks_gallery_full_width" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_gallery_full_width_parent_id_idx" ON "newsDet_blocks_gallery_full_width" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_gallery_full_width_locale_idx" ON "newsDet_blocks_gallery_full_width" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_gallery_full_width_image_idx" ON "newsDet_blocks_gallery_full_width" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_gallery_order_idx" ON "newsDet_blocks_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_gallery_parent_id_idx" ON "newsDet_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_gallery_path_idx" ON "newsDet_blocks_gallery" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_gallery_locale_idx" ON "newsDet_blocks_gallery" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_gallery_gallery_settings_gallery_settings_background_image_idx" ON "newsDet_blocks_gallery" USING btree ("gallery_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_hero_hero_slideshow_order_idx" ON "newsDet_blocks_hero_hero_slideshow" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_hero_hero_slideshow_parent_id_idx" ON "newsDet_blocks_hero_hero_slideshow" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_hero_hero_slideshow_locale_idx" ON "newsDet_blocks_hero_hero_slideshow" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_hero_hero_slideshow_image_idx" ON "newsDet_blocks_hero_hero_slideshow" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_hero_main_buttons_order_idx" ON "newsDet_blocks_hero_main_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_hero_main_buttons_parent_id_idx" ON "newsDet_blocks_hero_main_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_hero_main_buttons_locale_idx" ON "newsDet_blocks_hero_main_buttons" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_hero_secondary_buttons_order_idx" ON "newsDet_blocks_hero_secondary_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_hero_secondary_buttons_parent_id_idx" ON "newsDet_blocks_hero_secondary_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_hero_secondary_buttons_locale_idx" ON "newsDet_blocks_hero_secondary_buttons" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_hero_order_idx" ON "newsDet_blocks_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_hero_parent_id_idx" ON "newsDet_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_hero_path_idx" ON "newsDet_blocks_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_hero_locale_idx" ON "newsDet_blocks_hero" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_hero_hero_image_idx" ON "newsDet_blocks_hero" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_hero_hero_video_idx" ON "newsDet_blocks_hero" USING btree ("hero_video_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_highlighted_text_buttons_order_idx" ON "newsDet_blocks_highlighted_text_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_highlighted_text_buttons_parent_id_idx" ON "newsDet_blocks_highlighted_text_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_highlighted_text_buttons_locale_idx" ON "newsDet_blocks_highlighted_text_buttons" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_highlighted_text_order_idx" ON "newsDet_blocks_highlighted_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_highlighted_text_parent_id_idx" ON "newsDet_blocks_highlighted_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_highlighted_text_path_idx" ON "newsDet_blocks_highlighted_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_highlighted_text_locale_idx" ON "newsDet_blocks_highlighted_text" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_highlighted_text_high_set_high_set_background_image_idx" ON "newsDet_blocks_highlighted_text" USING btree ("high_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_img_content_person_bullets_order_idx" ON "newsDet_blocks_img_content_person_bullets" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_img_content_person_bullets_parent_id_idx" ON "newsDet_blocks_img_content_person_bullets" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_img_content_person_bullets_locale_idx" ON "newsDet_blocks_img_content_person_bullets" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_img_content_accordion_accordion_items_order_idx" ON "newsDet_blocks_img_content_accordion_accordion_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_img_content_accordion_accordion_items_parent_id_idx" ON "newsDet_blocks_img_content_accordion_accordion_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_img_content_accordion_accordion_items_locale_idx" ON "newsDet_blocks_img_content_accordion_accordion_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_img_content_order_idx" ON "newsDet_blocks_img_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_img_content_parent_id_idx" ON "newsDet_blocks_img_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_img_content_path_idx" ON "newsDet_blocks_img_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_img_content_locale_idx" ON "newsDet_blocks_img_content" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_img_content_img_cont_set_img_cont_set_background_image_idx" ON "newsDet_blocks_img_content" USING btree ("img_cont_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_img_content_image_idx" ON "newsDet_blocks_img_content" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_images_grid_images_order_idx" ON "newsDet_blocks_images_grid_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_images_grid_images_parent_id_idx" ON "newsDet_blocks_images_grid_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_images_grid_images_locale_idx" ON "newsDet_blocks_images_grid_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_images_grid_images_image_idx" ON "newsDet_blocks_images_grid_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_images_grid_order_idx" ON "newsDet_blocks_images_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_images_grid_parent_id_idx" ON "newsDet_blocks_images_grid" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_images_grid_path_idx" ON "newsDet_blocks_images_grid" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_images_grid_locale_idx" ON "newsDet_blocks_images_grid" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_images_grid_images_settings_images_settings_background_image_idx" ON "newsDet_blocks_images_grid" USING btree ("images_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_image_pins_pins_order_idx" ON "newsDet_blocks_image_pins_pins" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_image_pins_pins_parent_id_idx" ON "newsDet_blocks_image_pins_pins" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_image_pins_pins_locale_idx" ON "newsDet_blocks_image_pins_pins" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_image_pins_pins_logo_idx" ON "newsDet_blocks_image_pins_pins" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_image_pins_order_idx" ON "newsDet_blocks_image_pins" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_image_pins_parent_id_idx" ON "newsDet_blocks_image_pins" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_image_pins_path_idx" ON "newsDet_blocks_image_pins" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_image_pins_locale_idx" ON "newsDet_blocks_image_pins" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_image_pins_image_pins_set_image_pins_set_background_image_idx" ON "newsDet_blocks_image_pins" USING btree ("image_pins_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_image_pins_background_image_idx" ON "newsDet_blocks_image_pins" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_map_pins_order_idx" ON "newsDet_blocks_map_pins" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_map_pins_parent_id_idx" ON "newsDet_blocks_map_pins" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_map_pins_locale_idx" ON "newsDet_blocks_map_pins" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_map_pins_logo_idx" ON "newsDet_blocks_map_pins" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_map_order_idx" ON "newsDet_blocks_map" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_map_parent_id_idx" ON "newsDet_blocks_map" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_map_path_idx" ON "newsDet_blocks_map" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_map_locale_idx" ON "newsDet_blocks_map" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_map_map_settings_map_settings_background_image_idx" ON "newsDet_blocks_map" USING btree ("map_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_map_map_idx" ON "newsDet_blocks_map" USING btree ("map_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_news_snippets_order_idx" ON "newsDet_blocks_news_snippets" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_news_snippets_parent_id_idx" ON "newsDet_blocks_news_snippets" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_news_snippets_path_idx" ON "newsDet_blocks_news_snippets" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_news_snippets_locale_idx" ON "newsDet_blocks_news_snippets" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_news_snippets_news_set_news_set_background_image_idx" ON "newsDet_blocks_news_snippets" USING btree ("news_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_numbers_numbers_order_idx" ON "newsDet_blocks_numbers_numbers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_numbers_numbers_parent_id_idx" ON "newsDet_blocks_numbers_numbers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_numbers_numbers_locale_idx" ON "newsDet_blocks_numbers_numbers" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_numbers_order_idx" ON "newsDet_blocks_numbers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_numbers_parent_id_idx" ON "newsDet_blocks_numbers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_numbers_path_idx" ON "newsDet_blocks_numbers" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_numbers_locale_idx" ON "newsDet_blocks_numbers" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_numbers_numbers_settings_numbers_settings_background_image_idx" ON "newsDet_blocks_numbers" USING btree ("numbers_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_timeline_timeline_order_idx" ON "newsDet_blocks_timeline_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_timeline_timeline_parent_id_idx" ON "newsDet_blocks_timeline_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_timeline_timeline_locale_idx" ON "newsDet_blocks_timeline_timeline" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_timeline_order_idx" ON "newsDet_blocks_timeline" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_timeline_parent_id_idx" ON "newsDet_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_timeline_path_idx" ON "newsDet_blocks_timeline" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_timeline_locale_idx" ON "newsDet_blocks_timeline" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_timeline_timeline_settings_timeline_settings_background_image_idx" ON "newsDet_blocks_timeline" USING btree ("timeline_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_our_projects_projects_order_idx" ON "newsDet_blocks_our_projects_projects" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_our_projects_projects_parent_id_idx" ON "newsDet_blocks_our_projects_projects" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_our_projects_projects_locale_idx" ON "newsDet_blocks_our_projects_projects" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_our_projects_projects_image_idx" ON "newsDet_blocks_our_projects_projects" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_our_projects_order_idx" ON "newsDet_blocks_our_projects" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_our_projects_parent_id_idx" ON "newsDet_blocks_our_projects" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_our_projects_path_idx" ON "newsDet_blocks_our_projects" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_our_projects_locale_idx" ON "newsDet_blocks_our_projects" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_our_projects_our_proj_set_our_proj_set_background_image_idx" ON "newsDet_blocks_our_projects" USING btree ("our_proj_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_prices_order_idx" ON "newsDet_blocks_prices" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_prices_parent_id_idx" ON "newsDet_blocks_prices" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_prices_path_idx" ON "newsDet_blocks_prices" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_prices_locale_idx" ON "newsDet_blocks_prices" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_prices_prices_settings_prices_settings_background_image_idx" ON "newsDet_blocks_prices" USING btree ("prices_settings_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_interactive_picker_extended_views_order_idx" ON "newsDet_blocks_interactive_picker_extended_views" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_interactive_picker_extended_views_parent_id_idx" ON "newsDet_blocks_interactive_picker_extended_views" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_interactive_picker_extended_views_locale_idx" ON "newsDet_blocks_interactive_picker_extended_views" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_interactive_picker_extended_views_image_idx" ON "newsDet_blocks_interactive_picker_extended_views" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_interactive_picker_extended_order_idx" ON "newsDet_blocks_interactive_picker_extended" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_interactive_picker_extended_parent_id_idx" ON "newsDet_blocks_interactive_picker_extended" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_interactive_picker_extended_path_idx" ON "newsDet_blocks_interactive_picker_extended" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_interactive_picker_extended_locale_idx" ON "newsDet_blocks_interactive_picker_extended" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_visual_price_list_buildings_order_idx" ON "newsDet_blocks_visual_price_list_buildings" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_visual_price_list_buildings_parent_id_idx" ON "newsDet_blocks_visual_price_list_buildings" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_visual_price_list_buildings_locale_idx" ON "newsDet_blocks_visual_price_list_buildings" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_visual_price_list_buildings_building_idx" ON "newsDet_blocks_visual_price_list_buildings" USING btree ("building_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_visual_price_list_order_idx" ON "newsDet_blocks_visual_price_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_visual_price_list_parent_id_idx" ON "newsDet_blocks_visual_price_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_visual_price_list_path_idx" ON "newsDet_blocks_visual_price_list" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_visual_price_list_locale_idx" ON "newsDet_blocks_visual_price_list" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_step_cards_steps_order_idx" ON "newsDet_blocks_step_cards_steps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_step_cards_steps_parent_id_idx" ON "newsDet_blocks_step_cards_steps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_step_cards_steps_locale_idx" ON "newsDet_blocks_step_cards_steps" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_step_cards_order_idx" ON "newsDet_blocks_step_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_step_cards_parent_id_idx" ON "newsDet_blocks_step_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_step_cards_path_idx" ON "newsDet_blocks_step_cards" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_step_cards_locale_idx" ON "newsDet_blocks_step_cards" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_step_cards_step_cards_set_step_cards_set_background_image_idx" ON "newsDet_blocks_step_cards" USING btree ("step_cards_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_sticky_slides_slides_slide_images_order_idx" ON "newsDet_blocks_sticky_slides_slides_slide_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_sticky_slides_slides_slide_images_parent_id_idx" ON "newsDet_blocks_sticky_slides_slides_slide_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_sticky_slides_slides_slide_images_locale_idx" ON "newsDet_blocks_sticky_slides_slides_slide_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_sticky_slides_slides_slide_images_image_idx" ON "newsDet_blocks_sticky_slides_slides_slide_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_sticky_slides_slides_order_idx" ON "newsDet_blocks_sticky_slides_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_sticky_slides_slides_parent_id_idx" ON "newsDet_blocks_sticky_slides_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_sticky_slides_slides_locale_idx" ON "newsDet_blocks_sticky_slides_slides" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_sticky_slides_order_idx" ON "newsDet_blocks_sticky_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_sticky_slides_parent_id_idx" ON "newsDet_blocks_sticky_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_sticky_slides_path_idx" ON "newsDet_blocks_sticky_slides" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_sticky_slides_locale_idx" ON "newsDet_blocks_sticky_slides" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_sticky_slides_sticky_set_sticky_set_background_image_idx" ON "newsDet_blocks_sticky_slides" USING btree ("sticky_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_complex_order_idx" ON "newsDet_blocks_multi_gallery_grid_items_complex" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_complex_parent_id_idx" ON "newsDet_blocks_multi_gallery_grid_items_complex" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_complex_locale_idx" ON "newsDet_blocks_multi_gallery_grid_items_complex" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_complex_image_one_idx" ON "newsDet_blocks_multi_gallery_grid_items_complex" USING btree ("image_one_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_complex_image_two_idx" ON "newsDet_blocks_multi_gallery_grid_items_complex" USING btree ("image_two_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_complex_image_three_idx" ON "newsDet_blocks_multi_gallery_grid_items_complex" USING btree ("image_three_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_complex_image_four_idx" ON "newsDet_blocks_multi_gallery_grid_items_complex" USING btree ("image_four_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_simple_grid_left_col_order_idx" ON "newsDet_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_simple_grid_left_col_parent_id_idx" ON "newsDet_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_simple_grid_left_col_locale_idx" ON "newsDet_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_simple_grid_left_col_image_idx" ON "newsDet_blocks_multi_gallery_grid_items_simple_grid_left_col" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_simple_grid_right_col_order_idx" ON "newsDet_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_simple_grid_right_col_parent_id_idx" ON "newsDet_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_simple_grid_right_col_locale_idx" ON "newsDet_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_simple_grid_right_col_image_idx" ON "newsDet_blocks_multi_gallery_grid_items_simple_grid_right_col" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_simple_grid_order_idx" ON "newsDet_blocks_multi_gallery_grid_items_simple_grid" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_simple_grid_parent_id_idx" ON "newsDet_blocks_multi_gallery_grid_items_simple_grid" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_simple_grid_locale_idx" ON "newsDet_blocks_multi_gallery_grid_items_simple_grid" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_order_idx" ON "newsDet_blocks_multi_gallery_grid_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_parent_id_idx" ON "newsDet_blocks_multi_gallery_grid_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_grid_items_locale_idx" ON "newsDet_blocks_multi_gallery_grid_items" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_order_idx" ON "newsDet_blocks_multi_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_parent_id_idx" ON "newsDet_blocks_multi_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_path_idx" ON "newsDet_blocks_multi_gallery" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_locale_idx" ON "newsDet_blocks_multi_gallery" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_multi_gallery_multi_g_set_multi_g_set_background_image_idx" ON "newsDet_blocks_multi_gallery" USING btree ("multi_g_set_background_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_variable_table_rows_cells_order_idx" ON "newsDet_blocks_variable_table_rows_cells" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_variable_table_rows_cells_parent_id_idx" ON "newsDet_blocks_variable_table_rows_cells" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_variable_table_rows_cells_locale_idx" ON "newsDet_blocks_variable_table_rows_cells" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_variable_table_rows_order_idx" ON "newsDet_blocks_variable_table_rows" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_variable_table_rows_parent_id_idx" ON "newsDet_blocks_variable_table_rows" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_variable_table_rows_locale_idx" ON "newsDet_blocks_variable_table_rows" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_variable_table_order_idx" ON "newsDet_blocks_variable_table" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_variable_table_parent_id_idx" ON "newsDet_blocks_variable_table" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_variable_table_path_idx" ON "newsDet_blocks_variable_table" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_variable_table_locale_idx" ON "newsDet_blocks_variable_table" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_table_custom_order_idx" ON "newsDet_blocks_table_custom" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_table_custom_parent_id_idx" ON "newsDet_blocks_table_custom" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_table_custom_path_idx" ON "newsDet_blocks_table_custom" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_table_custom_locale_idx" ON "newsDet_blocks_table_custom" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_text_image_order_idx" ON "newsDet_blocks_text_image" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_text_image_parent_id_idx" ON "newsDet_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_text_image_path_idx" ON "newsDet_blocks_text_image" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_text_image_locale_idx" ON "newsDet_blocks_text_image" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_text_image_image_idx" ON "newsDet_blocks_text_image" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_shared_section_order_idx" ON "newsDet_blocks_shared_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_shared_section_parent_id_idx" ON "newsDet_blocks_shared_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_shared_section_path_idx" ON "newsDet_blocks_shared_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_shared_section_locale_idx" ON "newsDet_blocks_shared_section" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_shared_section_shared_section_idx" ON "newsDet_blocks_shared_section" USING btree ("shared_section_id");
  CREATE INDEX IF NOT EXISTS "newsDet_project_idx" ON "newsDet" USING btree ("project_id");
  CREATE INDEX IF NOT EXISTS "newsDet_meta_meta_og_image_idx" ON "newsDet" USING btree ("meta_og_image_id");
  CREATE INDEX IF NOT EXISTS "newsDet_updated_at_idx" ON "newsDet" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "newsDet_created_at_idx" ON "newsDet" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "newsDetstoone_locale_parent_id_unique" ON "newsDetstoone" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_rels_order_idx" ON "newsDet_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "newsDet_rels_parent_idx" ON "newsDet_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_rels_path_idx" ON "newsDet_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "newsDet_rels_locale_idx" ON "newsDet_rels" USING btree ("locale");
  CREATE INDEX IF NOT EXISTS "newsDet_rels_pages_id_idx" ON "newsDet_rels" USING btree ("pages_id","locale");
  CREATE INDEX IF NOT EXISTS "newsDet_rels_flats_id_idx" ON "newsDet_rels" USING btree ("flats_id","locale");
  CREATE INDEX IF NOT EXISTS "newsDet_rels_news_id_idx" ON "newsDet_rels" USING btree ("news_id","locale");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_news_detail_page_fk" FOREIGN KEY ("newsDet_id") REFERENCES "public"."newsDet"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_newsDet_id_idx" ON "payload_locked_documents_rels" USING btree ("newsDet_id");
  ALTER TABLE "share_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_type";
  ALTER TABLE "share_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_new_tab";
  ALTER TABLE "share_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_has_anchor";
  ALTER TABLE "share_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_dark_button";
  ALTER TABLE "share_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_icon_only";
  ALTER TABLE "share_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_icon_position";
  ALTER TABLE "share_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_icon";
  ALTER TABLE "share_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_label";
  ALTER TABLE "share_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_relation";
  ALTER TABLE "share_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_url";
  ALTER TABLE "share_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_anchor_to";
  ALTER TABLE "share_blocks_map" DROP COLUMN IF EXISTS "map_link";
  ALTER TABLE "pages_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_type";
  ALTER TABLE "pages_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_new_tab";
  ALTER TABLE "pages_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_has_anchor";
  ALTER TABLE "pages_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_dark_button";
  ALTER TABLE "pages_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_icon_only";
  ALTER TABLE "pages_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_icon_position";
  ALTER TABLE "pages_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_icon";
  ALTER TABLE "pages_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_label";
  ALTER TABLE "pages_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_relation";
  ALTER TABLE "pages_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_url";
  ALTER TABLE "pages_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_anchor_to";
  ALTER TABLE "pages_blocks_map" DROP COLUMN IF EXISTS "map_link";
  ALTER TABLE "_pages_v_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_type";
  ALTER TABLE "_pages_v_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_new_tab";
  ALTER TABLE "_pages_v_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_has_anchor";
  ALTER TABLE "_pages_v_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_dark_button";
  ALTER TABLE "_pages_v_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_icon_only";
  ALTER TABLE "_pages_v_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_icon_position";
  ALTER TABLE "_pages_v_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_icon";
  ALTER TABLE "_pages_v_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_label";
  ALTER TABLE "_pages_v_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_relation";
  ALTER TABLE "_pages_v_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_url";
  ALTER TABLE "_pages_v_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_anchor_to";
  ALTER TABLE "_pages_v_blocks_map" DROP COLUMN IF EXISTS "map_link";
  ALTER TABLE "flDet_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_type";
  ALTER TABLE "flDet_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_new_tab";
  ALTER TABLE "flDet_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_has_anchor";
  ALTER TABLE "flDet_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_dark_button";
  ALTER TABLE "flDet_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_icon_only";
  ALTER TABLE "flDet_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_icon_position";
  ALTER TABLE "flDet_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_icon";
  ALTER TABLE "flDet_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_label";
  ALTER TABLE "flDet_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_relation";
  ALTER TABLE "flDet_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_url";
  ALTER TABLE "flDet_blocks_highlighted_text" DROP COLUMN IF EXISTS "highlighted_link_anchor_to";
  ALTER TABLE "flDet_blocks_map" DROP COLUMN IF EXISTS "map_link";
  ALTER TABLE "public"."share_blocks_banner" ALTER COLUMN "banner_button_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_banner_banner_button_icon";
  CREATE TYPE "public"."enum_share_blocks_banner_banner_button_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."share_blocks_banner" ALTER COLUMN "banner_button_icon" SET DATA TYPE "public"."enum_share_blocks_banner_banner_button_icon" USING "banner_button_icon"::"public"."enum_share_blocks_banner_banner_button_icon";
  ALTER TABLE "public"."share_blocks_features" ALTER COLUMN "features_settings_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_features_features_settings_link_icon";
  CREATE TYPE "public"."enum_share_blocks_features_features_settings_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."share_blocks_features" ALTER COLUMN "features_settings_link_icon" SET DATA TYPE "public"."enum_share_blocks_features_features_settings_link_icon" USING "features_settings_link_icon"::"public"."enum_share_blocks_features_features_settings_link_icon";
  ALTER TABLE "public"."share_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_flats_snippets_flats_set_link_icon";
  CREATE TYPE "public"."enum_share_blocks_flats_snippets_flats_set_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."share_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon" SET DATA TYPE "public"."enum_share_blocks_flats_snippets_flats_set_link_icon" USING "flats_set_link_icon"::"public"."enum_share_blocks_flats_snippets_flats_set_link_icon";
  ALTER TABLE "public"."share_blocks_gallery" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_gallery_link_icon";
  CREATE TYPE "public"."enum_share_blocks_gallery_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."share_blocks_gallery" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_share_blocks_gallery_link_icon" USING "link_icon"::"public"."enum_share_blocks_gallery_link_icon";
  ALTER TABLE "public"."share_blocks_hero_main_buttons" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_hero_main_buttons_link_icon";
  CREATE TYPE "public"."enum_share_blocks_hero_main_buttons_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."share_blocks_hero_main_buttons" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_share_blocks_hero_main_buttons_link_icon" USING "link_icon"::"public"."enum_share_blocks_hero_main_buttons_link_icon";
  ALTER TABLE "public"."share_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_hero_secondary_buttons_link_icon";
  CREATE TYPE "public"."enum_share_blocks_hero_secondary_buttons_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."share_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_share_blocks_hero_secondary_buttons_link_icon" USING "link_icon"::"public"."enum_share_blocks_hero_secondary_buttons_link_icon";
  ALTER TABLE "public"."share_blocks_img_content" ALTER COLUMN "accordion_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_img_content_accordion_link_icon";
  CREATE TYPE "public"."enum_share_blocks_img_content_accordion_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."share_blocks_img_content" ALTER COLUMN "accordion_link_icon" SET DATA TYPE "public"."enum_share_blocks_img_content_accordion_link_icon" USING "accordion_link_icon"::"public"."enum_share_blocks_img_content_accordion_link_icon";
  ALTER TABLE "public"."share_blocks_news_snippets" ALTER COLUMN "news_set_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_news_snippets_news_set_link_icon";
  CREATE TYPE "public"."enum_share_blocks_news_snippets_news_set_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."share_blocks_news_snippets" ALTER COLUMN "news_set_link_icon" SET DATA TYPE "public"."enum_share_blocks_news_snippets_news_set_link_icon" USING "news_set_link_icon"::"public"."enum_share_blocks_news_snippets_news_set_link_icon";
  ALTER TABLE "public"."pages_blocks_banner" ALTER COLUMN "banner_button_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_banner_banner_button_icon";
  CREATE TYPE "public"."enum_pages_blocks_banner_banner_button_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."pages_blocks_banner" ALTER COLUMN "banner_button_icon" SET DATA TYPE "public"."enum_pages_blocks_banner_banner_button_icon" USING "banner_button_icon"::"public"."enum_pages_blocks_banner_banner_button_icon";
  ALTER TABLE "public"."pages_blocks_features" ALTER COLUMN "features_settings_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_features_features_settings_link_icon";
  CREATE TYPE "public"."enum_pages_blocks_features_features_settings_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."pages_blocks_features" ALTER COLUMN "features_settings_link_icon" SET DATA TYPE "public"."enum_pages_blocks_features_features_settings_link_icon" USING "features_settings_link_icon"::"public"."enum_pages_blocks_features_features_settings_link_icon";
  ALTER TABLE "public"."pages_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_link_icon";
  CREATE TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."pages_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon" SET DATA TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_link_icon" USING "flats_set_link_icon"::"public"."enum_pages_blocks_flats_snippets_flats_set_link_icon";
  ALTER TABLE "public"."pages_blocks_gallery" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_gallery_link_icon";
  CREATE TYPE "public"."enum_pages_blocks_gallery_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."pages_blocks_gallery" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_pages_blocks_gallery_link_icon" USING "link_icon"::"public"."enum_pages_blocks_gallery_link_icon";
  ALTER TABLE "public"."pages_blocks_hero_main_buttons" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_hero_main_buttons_link_icon";
  CREATE TYPE "public"."enum_pages_blocks_hero_main_buttons_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."pages_blocks_hero_main_buttons" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_pages_blocks_hero_main_buttons_link_icon" USING "link_icon"::"public"."enum_pages_blocks_hero_main_buttons_link_icon";
  ALTER TABLE "public"."pages_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_hero_secondary_buttons_link_icon";
  CREATE TYPE "public"."enum_pages_blocks_hero_secondary_buttons_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."pages_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_pages_blocks_hero_secondary_buttons_link_icon" USING "link_icon"::"public"."enum_pages_blocks_hero_secondary_buttons_link_icon";
  ALTER TABLE "public"."pages_blocks_img_content" ALTER COLUMN "accordion_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_img_content_accordion_link_icon";
  CREATE TYPE "public"."enum_pages_blocks_img_content_accordion_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."pages_blocks_img_content" ALTER COLUMN "accordion_link_icon" SET DATA TYPE "public"."enum_pages_blocks_img_content_accordion_link_icon" USING "accordion_link_icon"::"public"."enum_pages_blocks_img_content_accordion_link_icon";
  ALTER TABLE "public"."pages_blocks_news_snippets" ALTER COLUMN "news_set_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_news_snippets_news_set_link_icon";
  CREATE TYPE "public"."enum_pages_blocks_news_snippets_news_set_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."pages_blocks_news_snippets" ALTER COLUMN "news_set_link_icon" SET DATA TYPE "public"."enum_pages_blocks_news_snippets_news_set_link_icon" USING "news_set_link_icon"::"public"."enum_pages_blocks_news_snippets_news_set_link_icon";
  ALTER TABLE "public"."_pages_v_blocks_banner" ALTER COLUMN "banner_button_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_banner_banner_button_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_banner_banner_button_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."_pages_v_blocks_banner" ALTER COLUMN "banner_button_icon" SET DATA TYPE "public"."enum__pages_v_blocks_banner_banner_button_icon" USING "banner_button_icon"::"public"."enum__pages_v_blocks_banner_banner_button_icon";
  ALTER TABLE "public"."_pages_v_blocks_features" ALTER COLUMN "features_settings_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_features_features_settings_link_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_settings_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."_pages_v_blocks_features" ALTER COLUMN "features_settings_link_icon" SET DATA TYPE "public"."enum__pages_v_blocks_features_features_settings_link_icon" USING "features_settings_link_icon"::"public"."enum__pages_v_blocks_features_features_settings_link_icon";
  ALTER TABLE "public"."_pages_v_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_link_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."_pages_v_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon" SET DATA TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_link_icon" USING "flats_set_link_icon"::"public"."enum__pages_v_blocks_flats_snippets_flats_set_link_icon";
  ALTER TABLE "public"."_pages_v_blocks_gallery" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_gallery_link_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."_pages_v_blocks_gallery" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum__pages_v_blocks_gallery_link_icon" USING "link_icon"::"public"."enum__pages_v_blocks_gallery_link_icon";
  ALTER TABLE "public"."_pages_v_blocks_hero_main_buttons" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_hero_main_buttons_link_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_hero_main_buttons_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."_pages_v_blocks_hero_main_buttons" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum__pages_v_blocks_hero_main_buttons_link_icon" USING "link_icon"::"public"."enum__pages_v_blocks_hero_main_buttons_link_icon";
  ALTER TABLE "public"."_pages_v_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_hero_secondary_buttons_link_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_hero_secondary_buttons_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."_pages_v_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum__pages_v_blocks_hero_secondary_buttons_link_icon" USING "link_icon"::"public"."enum__pages_v_blocks_hero_secondary_buttons_link_icon";
  ALTER TABLE "public"."_pages_v_blocks_img_content" ALTER COLUMN "accordion_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_img_content_accordion_link_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_img_content_accordion_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."_pages_v_blocks_img_content" ALTER COLUMN "accordion_link_icon" SET DATA TYPE "public"."enum__pages_v_blocks_img_content_accordion_link_icon" USING "accordion_link_icon"::"public"."enum__pages_v_blocks_img_content_accordion_link_icon";
  ALTER TABLE "public"."_pages_v_blocks_news_snippets" ALTER COLUMN "news_set_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_link_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."_pages_v_blocks_news_snippets" ALTER COLUMN "news_set_link_icon" SET DATA TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_link_icon" USING "news_set_link_icon"::"public"."enum__pages_v_blocks_news_snippets_news_set_link_icon";
  ALTER TABLE "public"."globalheader_nav_items" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_globalheader_nav_items_link_icon";
  CREATE TYPE "public"."enum_globalheader_nav_items_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."globalheader_nav_items" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_globalheader_nav_items_link_icon" USING "link_icon"::"public"."enum_globalheader_nav_items_link_icon";
  ALTER TABLE "public"."globalheader_cta_buttons" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_globalheader_cta_buttons_link_icon";
  CREATE TYPE "public"."enum_globalheader_cta_buttons_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."globalheader_cta_buttons" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_globalheader_cta_buttons_link_icon" USING "link_icon"::"public"."enum_globalheader_cta_buttons_link_icon";
  ALTER TABLE "public"."globalfooter_bottom_links" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_globalfooter_bottom_links_link_icon";
  CREATE TYPE "public"."enum_globalfooter_bottom_links_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."globalfooter_bottom_links" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_globalfooter_bottom_links_link_icon" USING "link_icon"::"public"."enum_globalfooter_bottom_links_link_icon";
  ALTER TABLE "public"."flatsstoone" ALTER COLUMN "gallery_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flats_gallery_link_icon";
  CREATE TYPE "public"."enum_flats_gallery_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."flatsstoone" ALTER COLUMN "gallery_link_icon" SET DATA TYPE "public"."enum_flats_gallery_link_icon" USING "gallery_link_icon"::"public"."enum_flats_gallery_link_icon";
  ALTER TABLE "public"."flDet_blocks_hero_main_buttons" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_icon";
  CREATE TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."flDet_blocks_hero_main_buttons" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_icon" USING "link_icon"::"public"."enum_flDet_blocks_hero_main_buttons_link_icon";
  ALTER TABLE "public"."flDet_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_hero_secondary_buttons_link_icon";
  CREATE TYPE "public"."enum_flDet_blocks_hero_secondary_buttons_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."flDet_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_flDet_blocks_hero_secondary_buttons_link_icon" USING "link_icon"::"public"."enum_flDet_blocks_hero_secondary_buttons_link_icon";
  ALTER TABLE "public"."flDet_blocks_banner" ALTER COLUMN "banner_button_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_banner_banner_button_icon";
  CREATE TYPE "public"."enum_flDet_blocks_banner_banner_button_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."flDet_blocks_banner" ALTER COLUMN "banner_button_icon" SET DATA TYPE "public"."enum_flDet_blocks_banner_banner_button_icon" USING "banner_button_icon"::"public"."enum_flDet_blocks_banner_banner_button_icon";
  ALTER TABLE "public"."flDet_blocks_features" ALTER COLUMN "features_settings_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_features_features_settings_link_icon";
  CREATE TYPE "public"."enum_flDet_blocks_features_features_settings_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."flDet_blocks_features" ALTER COLUMN "features_settings_link_icon" SET DATA TYPE "public"."enum_flDet_blocks_features_features_settings_link_icon" USING "features_settings_link_icon"::"public"."enum_flDet_blocks_features_features_settings_link_icon";
  ALTER TABLE "public"."flDet_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_icon";
  CREATE TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."flDet_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon" SET DATA TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_icon" USING "flats_set_link_icon"::"public"."enum_flDet_blocks_flats_snippets_flats_set_link_icon";
  ALTER TABLE "public"."flDet_blocks_gallery" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_gallery_link_icon";
  CREATE TYPE "public"."enum_flDet_blocks_gallery_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."flDet_blocks_gallery" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_flDet_blocks_gallery_link_icon" USING "link_icon"::"public"."enum_flDet_blocks_gallery_link_icon";
  ALTER TABLE "public"."flDet_blocks_img_content" ALTER COLUMN "accordion_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_img_content_accordion_link_icon";
  CREATE TYPE "public"."enum_flDet_blocks_img_content_accordion_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."flDet_blocks_img_content" ALTER COLUMN "accordion_link_icon" SET DATA TYPE "public"."enum_flDet_blocks_img_content_accordion_link_icon" USING "accordion_link_icon"::"public"."enum_flDet_blocks_img_content_accordion_link_icon";
  ALTER TABLE "public"."flDet_blocks_news_snippets" ALTER COLUMN "news_set_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_news_snippets_news_set_link_icon";
  CREATE TYPE "public"."enum_flDet_blocks_news_snippets_news_set_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."flDet_blocks_news_snippets" ALTER COLUMN "news_set_link_icon" SET DATA TYPE "public"."enum_flDet_blocks_news_snippets_news_set_link_icon" USING "news_set_link_icon"::"public"."enum_flDet_blocks_news_snippets_news_set_link_icon";
  DROP TYPE "public"."enum_share_blocks_highlighted_text_highlighted_link_type";
  DROP TYPE "public"."enum_share_blocks_highlighted_text_highlighted_link_icon";
  DROP TYPE "public"."enum_share_blocks_highlighted_text_highlighted_link_relation";
  DROP TYPE "public"."enum_pages_blocks_highlighted_text_highlighted_link_type";
  DROP TYPE "public"."enum_pages_blocks_highlighted_text_highlighted_link_icon";
  DROP TYPE "public"."enum_pages_blocks_highlighted_text_highlighted_link_relation";
  DROP TYPE "public"."enum__pages_v_blocks_highlighted_text_highlighted_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_highlighted_text_highlighted_link_icon";
  DROP TYPE "public"."enum__pages_v_blocks_highlighted_text_highlighted_link_relation";
  DROP TYPE "public"."enum_flDet_blocks_highlighted_text_highlighted_link_type";
  DROP TYPE "public"."enum_flDet_blocks_highlighted_text_highlighted_link_icon";
  DROP TYPE "public"."enum_flDet_blocks_highlighted_text_highlighted_link_relation";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_share_blocks_highlighted_text_highlighted_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_share_blocks_highlighted_text_highlighted_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_share_blocks_highlighted_text_highlighted_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_pages_blocks_highlighted_text_highlighted_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_pages_blocks_highlighted_text_highlighted_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_pages_blocks_highlighted_text_highlighted_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum__pages_v_blocks_highlighted_text_highlighted_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum__pages_v_blocks_highlighted_text_highlighted_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum__pages_v_blocks_highlighted_text_highlighted_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  CREATE TYPE "public"."enum_flDet_blocks_highlighted_text_highlighted_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_flDet_blocks_highlighted_text_highlighted_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  CREATE TYPE "public"."enum_flDet_blocks_highlighted_text_highlighted_link_relation" AS ENUM('pages', 'flats', 'news', 'anchor');
  ALTER TABLE "share_blocks_highlighted_text_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "share_blocks_map_pins" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "share_blocks_sticky_slides_slides_slide_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "share_blocks_sticky_slides_slides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "share_blocks_sticky_slides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "share_blocks_multi_gallery_grid_items_complex" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "share_blocks_multi_gallery_grid_items_simple_grid_left_col" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "share_blocks_multi_gallery_grid_items_simple_grid_right_col" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "share_blocks_multi_gallery_grid_items_simple_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "share_blocks_multi_gallery_grid_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "share_blocks_multi_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_highlighted_text_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_map_pins" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_sticky_slides_slides_slide_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_sticky_slides_slides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_sticky_slides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_multi_gallery_grid_items_complex" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_multi_gallery_grid_items_simple_grid_left_col" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_multi_gallery_grid_items_simple_grid_right_col" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_multi_gallery_grid_items_simple_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_multi_gallery_grid_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_multi_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_highlighted_text_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_map_pins" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_sticky_slides_slides_slide_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_sticky_slides_slides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_sticky_slides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_multi_gallery_grid_items_complex" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_multi_gallery_grid_items_simple_grid_left_col" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_multi_gallery_grid_items_simple_grid_right_col" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_multi_gallery_grid_items_simple_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_multi_gallery_grid_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_multi_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_highlighted_text_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_map_pins" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_sticky_slides_slides_slide_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_sticky_slides_slides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_sticky_slides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_multi_gallery_grid_items_complex" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_multi_gallery_grid_items_simple_grid_left_col" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_multi_gallery_grid_items_simple_grid_right_col" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_multi_gallery_grid_items_simple_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_multi_gallery_grid_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "flDet_blocks_multi_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_banner" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_benefits_benefits_row_item_heading_lines" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_benefits_benefits_row_item2_heading_lines" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_benefits_benefits" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_benefits" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_contact_contact_info_highlighted_contacts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_contact_contact_info_contact_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_contact_contact_form_config_disposition_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_contact" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_draw_editor" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_features_features_with_title" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_features_features_with_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_features_features_uppercase" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_form_form_cfg_flat_disposition_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_form_slide_out_boxes" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_flats_snippets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_gallery_simple_slider" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_gallery_multi_slider_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_gallery_multi_slider" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_gallery_full_width" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_hero_hero_slideshow" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_hero_main_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_hero_secondary_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_highlighted_text_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_highlighted_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_img_content_person_bullets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_img_content_accordion_accordion_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_img_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_images_grid_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_images_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_image_pins_pins" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_image_pins" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_map_pins" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_map" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_news_snippets" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_numbers_numbers" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_numbers" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_timeline_timeline" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_timeline" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_our_projects_projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_our_projects" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_prices" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_interactive_picker_extended_views" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_interactive_picker_extended" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_visual_price_list_buildings" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_visual_price_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_step_cards_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_step_cards" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_sticky_slides_slides_slide_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_sticky_slides_slides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_sticky_slides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_multi_gallery_grid_items_complex" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_multi_gallery_grid_items_simple_grid_left_col" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_multi_gallery_grid_items_simple_grid_right_col" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_multi_gallery_grid_items_simple_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_multi_gallery_grid_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_multi_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_variable_table_rows_cells" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_variable_table_rows" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_variable_table" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_table_custom" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_text_image" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_blocks_shared_section" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDetstoone" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "newsDet_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "share_blocks_highlighted_text_buttons" CASCADE;
  DROP TABLE "share_blocks_map_pins" CASCADE;
  DROP TABLE "share_blocks_sticky_slides_slides_slide_images" CASCADE;
  DROP TABLE "share_blocks_sticky_slides_slides" CASCADE;
  DROP TABLE "share_blocks_sticky_slides" CASCADE;
  DROP TABLE "share_blocks_multi_gallery_grid_items_complex" CASCADE;
  DROP TABLE "share_blocks_multi_gallery_grid_items_simple_grid_left_col" CASCADE;
  DROP TABLE "share_blocks_multi_gallery_grid_items_simple_grid_right_col" CASCADE;
  DROP TABLE "share_blocks_multi_gallery_grid_items_simple_grid" CASCADE;
  DROP TABLE "share_blocks_multi_gallery_grid_items" CASCADE;
  DROP TABLE "share_blocks_multi_gallery" CASCADE;
  DROP TABLE "pages_blocks_highlighted_text_buttons" CASCADE;
  DROP TABLE "pages_blocks_map_pins" CASCADE;
  DROP TABLE "pages_blocks_sticky_slides_slides_slide_images" CASCADE;
  DROP TABLE "pages_blocks_sticky_slides_slides" CASCADE;
  DROP TABLE "pages_blocks_sticky_slides" CASCADE;
  DROP TABLE "pages_blocks_multi_gallery_grid_items_complex" CASCADE;
  DROP TABLE "pages_blocks_multi_gallery_grid_items_simple_grid_left_col" CASCADE;
  DROP TABLE "pages_blocks_multi_gallery_grid_items_simple_grid_right_col" CASCADE;
  DROP TABLE "pages_blocks_multi_gallery_grid_items_simple_grid" CASCADE;
  DROP TABLE "pages_blocks_multi_gallery_grid_items" CASCADE;
  DROP TABLE "pages_blocks_multi_gallery" CASCADE;
  DROP TABLE "_pages_v_blocks_highlighted_text_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_map_pins" CASCADE;
  DROP TABLE "_pages_v_blocks_sticky_slides_slides_slide_images" CASCADE;
  DROP TABLE "_pages_v_blocks_sticky_slides_slides" CASCADE;
  DROP TABLE "_pages_v_blocks_sticky_slides" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_gallery_grid_items_complex" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_gallery_grid_items_simple_grid_left_col" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_gallery_grid_items_simple_grid_right_col" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_gallery_grid_items_simple_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_gallery_grid_items" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_gallery" CASCADE;
  DROP TABLE "flDet_blocks_highlighted_text_buttons" CASCADE;
  DROP TABLE "flDet_blocks_map_pins" CASCADE;
  DROP TABLE "flDet_blocks_sticky_slides_slides_slide_images" CASCADE;
  DROP TABLE "flDet_blocks_sticky_slides_slides" CASCADE;
  DROP TABLE "flDet_blocks_sticky_slides" CASCADE;
  DROP TABLE "flDet_blocks_multi_gallery_grid_items_complex" CASCADE;
  DROP TABLE "flDet_blocks_multi_gallery_grid_items_simple_grid_left_col" CASCADE;
  DROP TABLE "flDet_blocks_multi_gallery_grid_items_simple_grid_right_col" CASCADE;
  DROP TABLE "flDet_blocks_multi_gallery_grid_items_simple_grid" CASCADE;
  DROP TABLE "flDet_blocks_multi_gallery_grid_items" CASCADE;
  DROP TABLE "flDet_blocks_multi_gallery" CASCADE;
  DROP TABLE "newsDet_blocks_banner" CASCADE;
  DROP TABLE "newsDet_blocks_benefits_benefits_row_item_heading_lines" CASCADE;
  DROP TABLE "newsDet_blocks_benefits_benefits_row_item2_heading_lines" CASCADE;
  DROP TABLE "newsDet_blocks_benefits_benefits" CASCADE;
  DROP TABLE "newsDet_blocks_benefits" CASCADE;
  DROP TABLE "newsDet_blocks_contact_contact_info_highlighted_contacts" CASCADE;
  DROP TABLE "newsDet_blocks_contact_contact_info_contact_items" CASCADE;
  DROP TABLE "newsDet_blocks_contact_contact_form_config_disposition_options" CASCADE;
  DROP TABLE "newsDet_blocks_contact" CASCADE;
  DROP TABLE "newsDet_blocks_content" CASCADE;
  DROP TABLE "newsDet_blocks_draw_editor" CASCADE;
  DROP TABLE "newsDet_blocks_features_features_with_title" CASCADE;
  DROP TABLE "newsDet_blocks_features_features_with_image" CASCADE;
  DROP TABLE "newsDet_blocks_features_features_uppercase" CASCADE;
  DROP TABLE "newsDet_blocks_features" CASCADE;
  DROP TABLE "newsDet_blocks_form_form_cfg_flat_disposition_options" CASCADE;
  DROP TABLE "newsDet_blocks_form_slide_out_boxes" CASCADE;
  DROP TABLE "newsDet_blocks_form" CASCADE;
  DROP TABLE "newsDet_blocks_flats_snippets" CASCADE;
  DROP TABLE "newsDet_blocks_gallery_simple_slider" CASCADE;
  DROP TABLE "newsDet_blocks_gallery_multi_slider_images" CASCADE;
  DROP TABLE "newsDet_blocks_gallery_multi_slider" CASCADE;
  DROP TABLE "newsDet_blocks_gallery_full_width" CASCADE;
  DROP TABLE "newsDet_blocks_gallery" CASCADE;
  DROP TABLE "newsDet_blocks_hero_hero_slideshow" CASCADE;
  DROP TABLE "newsDet_blocks_hero_main_buttons" CASCADE;
  DROP TABLE "newsDet_blocks_hero_secondary_buttons" CASCADE;
  DROP TABLE "newsDet_blocks_hero" CASCADE;
  DROP TABLE "newsDet_blocks_highlighted_text_buttons" CASCADE;
  DROP TABLE "newsDet_blocks_highlighted_text" CASCADE;
  DROP TABLE "newsDet_blocks_img_content_person_bullets" CASCADE;
  DROP TABLE "newsDet_blocks_img_content_accordion_accordion_items" CASCADE;
  DROP TABLE "newsDet_blocks_img_content" CASCADE;
  DROP TABLE "newsDet_blocks_images_grid_images" CASCADE;
  DROP TABLE "newsDet_blocks_images_grid" CASCADE;
  DROP TABLE "newsDet_blocks_image_pins_pins" CASCADE;
  DROP TABLE "newsDet_blocks_image_pins" CASCADE;
  DROP TABLE "newsDet_blocks_map_pins" CASCADE;
  DROP TABLE "newsDet_blocks_map" CASCADE;
  DROP TABLE "newsDet_blocks_news_snippets" CASCADE;
  DROP TABLE "newsDet_blocks_numbers_numbers" CASCADE;
  DROP TABLE "newsDet_blocks_numbers" CASCADE;
  DROP TABLE "newsDet_blocks_timeline_timeline" CASCADE;
  DROP TABLE "newsDet_blocks_timeline" CASCADE;
  DROP TABLE "newsDet_blocks_our_projects_projects" CASCADE;
  DROP TABLE "newsDet_blocks_our_projects" CASCADE;
  DROP TABLE "newsDet_blocks_prices" CASCADE;
  DROP TABLE "newsDet_blocks_interactive_picker_extended_views" CASCADE;
  DROP TABLE "newsDet_blocks_interactive_picker_extended" CASCADE;
  DROP TABLE "newsDet_blocks_visual_price_list_buildings" CASCADE;
  DROP TABLE "newsDet_blocks_visual_price_list" CASCADE;
  DROP TABLE "newsDet_blocks_step_cards_steps" CASCADE;
  DROP TABLE "newsDet_blocks_step_cards" CASCADE;
  DROP TABLE "newsDet_blocks_sticky_slides_slides_slide_images" CASCADE;
  DROP TABLE "newsDet_blocks_sticky_slides_slides" CASCADE;
  DROP TABLE "newsDet_blocks_sticky_slides" CASCADE;
  DROP TABLE "newsDet_blocks_multi_gallery_grid_items_complex" CASCADE;
  DROP TABLE "newsDet_blocks_multi_gallery_grid_items_simple_grid_left_col" CASCADE;
  DROP TABLE "newsDet_blocks_multi_gallery_grid_items_simple_grid_right_col" CASCADE;
  DROP TABLE "newsDet_blocks_multi_gallery_grid_items_simple_grid" CASCADE;
  DROP TABLE "newsDet_blocks_multi_gallery_grid_items" CASCADE;
  DROP TABLE "newsDet_blocks_multi_gallery" CASCADE;
  DROP TABLE "newsDet_blocks_variable_table_rows_cells" CASCADE;
  DROP TABLE "newsDet_blocks_variable_table_rows" CASCADE;
  DROP TABLE "newsDet_blocks_variable_table" CASCADE;
  DROP TABLE "newsDet_blocks_table_custom" CASCADE;
  DROP TABLE "newsDet_blocks_text_image" CASCADE;
  DROP TABLE "newsDet_blocks_shared_section" CASCADE;
  DROP TABLE "newsDet" CASCADE;
  DROP TABLE "newsDetstoone" CASCADE;
  DROP TABLE "newsDet_rels" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_news_detail_page_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_newsDet_id_idx";
  ALTER TABLE "share_blocks_highlighted_text" ADD COLUMN "highlighted_link_type" "enum_share_blocks_highlighted_text_highlighted_link_type" DEFAULT 'internal';
  ALTER TABLE "share_blocks_highlighted_text" ADD COLUMN "highlighted_link_new_tab" boolean;
  ALTER TABLE "share_blocks_highlighted_text" ADD COLUMN "highlighted_link_has_anchor" boolean;
  ALTER TABLE "share_blocks_highlighted_text" ADD COLUMN "highlighted_link_dark_button" boolean;
  ALTER TABLE "share_blocks_highlighted_text" ADD COLUMN "highlighted_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "share_blocks_highlighted_text" ADD COLUMN "highlighted_link_icon_position" "icnPos" DEFAULT 'left';
  ALTER TABLE "share_blocks_highlighted_text" ADD COLUMN "highlighted_link_icon" "enum_share_blocks_highlighted_text_highlighted_link_icon";
  ALTER TABLE "share_blocks_highlighted_text" ADD COLUMN "highlighted_link_label" varchar;
  ALTER TABLE "share_blocks_highlighted_text" ADD COLUMN "highlighted_link_relation" "enum_share_blocks_highlighted_text_highlighted_link_relation" DEFAULT 'pages';
  ALTER TABLE "share_blocks_highlighted_text" ADD COLUMN "highlighted_link_url" varchar;
  ALTER TABLE "share_blocks_highlighted_text" ADD COLUMN "highlighted_link_anchor_to" varchar;
  ALTER TABLE "share_blocks_map" ADD COLUMN "map_link" varchar;
  ALTER TABLE "pages_blocks_highlighted_text" ADD COLUMN "highlighted_link_type" "enum_pages_blocks_highlighted_text_highlighted_link_type" DEFAULT 'internal';
  ALTER TABLE "pages_blocks_highlighted_text" ADD COLUMN "highlighted_link_new_tab" boolean;
  ALTER TABLE "pages_blocks_highlighted_text" ADD COLUMN "highlighted_link_has_anchor" boolean;
  ALTER TABLE "pages_blocks_highlighted_text" ADD COLUMN "highlighted_link_dark_button" boolean;
  ALTER TABLE "pages_blocks_highlighted_text" ADD COLUMN "highlighted_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_highlighted_text" ADD COLUMN "highlighted_link_icon_position" "icnPos" DEFAULT 'left';
  ALTER TABLE "pages_blocks_highlighted_text" ADD COLUMN "highlighted_link_icon" "enum_pages_blocks_highlighted_text_highlighted_link_icon";
  ALTER TABLE "pages_blocks_highlighted_text" ADD COLUMN "highlighted_link_label" varchar;
  ALTER TABLE "pages_blocks_highlighted_text" ADD COLUMN "highlighted_link_relation" "enum_pages_blocks_highlighted_text_highlighted_link_relation" DEFAULT 'pages';
  ALTER TABLE "pages_blocks_highlighted_text" ADD COLUMN "highlighted_link_url" varchar;
  ALTER TABLE "pages_blocks_highlighted_text" ADD COLUMN "highlighted_link_anchor_to" varchar;
  ALTER TABLE "pages_blocks_map" ADD COLUMN "map_link" varchar;
  ALTER TABLE "_pages_v_blocks_highlighted_text" ADD COLUMN "highlighted_link_type" "enum__pages_v_blocks_highlighted_text_highlighted_link_type" DEFAULT 'internal';
  ALTER TABLE "_pages_v_blocks_highlighted_text" ADD COLUMN "highlighted_link_new_tab" boolean;
  ALTER TABLE "_pages_v_blocks_highlighted_text" ADD COLUMN "highlighted_link_has_anchor" boolean;
  ALTER TABLE "_pages_v_blocks_highlighted_text" ADD COLUMN "highlighted_link_dark_button" boolean;
  ALTER TABLE "_pages_v_blocks_highlighted_text" ADD COLUMN "highlighted_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_highlighted_text" ADD COLUMN "highlighted_link_icon_position" "icnPos" DEFAULT 'left';
  ALTER TABLE "_pages_v_blocks_highlighted_text" ADD COLUMN "highlighted_link_icon" "enum__pages_v_blocks_highlighted_text_highlighted_link_icon";
  ALTER TABLE "_pages_v_blocks_highlighted_text" ADD COLUMN "highlighted_link_label" varchar;
  ALTER TABLE "_pages_v_blocks_highlighted_text" ADD COLUMN "highlighted_link_relation" "enum__pages_v_blocks_highlighted_text_highlighted_link_relation" DEFAULT 'pages';
  ALTER TABLE "_pages_v_blocks_highlighted_text" ADD COLUMN "highlighted_link_url" varchar;
  ALTER TABLE "_pages_v_blocks_highlighted_text" ADD COLUMN "highlighted_link_anchor_to" varchar;
  ALTER TABLE "_pages_v_blocks_map" ADD COLUMN "map_link" varchar;
  ALTER TABLE "flDet_blocks_highlighted_text" ADD COLUMN "highlighted_link_type" "enum_flDet_blocks_highlighted_text_highlighted_link_type" DEFAULT 'internal';
  ALTER TABLE "flDet_blocks_highlighted_text" ADD COLUMN "highlighted_link_new_tab" boolean;
  ALTER TABLE "flDet_blocks_highlighted_text" ADD COLUMN "highlighted_link_has_anchor" boolean;
  ALTER TABLE "flDet_blocks_highlighted_text" ADD COLUMN "highlighted_link_dark_button" boolean;
  ALTER TABLE "flDet_blocks_highlighted_text" ADD COLUMN "highlighted_link_icon_only" boolean DEFAULT false;
  ALTER TABLE "flDet_blocks_highlighted_text" ADD COLUMN "highlighted_link_icon_position" "icnPos" DEFAULT 'left';
  ALTER TABLE "flDet_blocks_highlighted_text" ADD COLUMN "highlighted_link_icon" "enum_flDet_blocks_highlighted_text_highlighted_link_icon";
  ALTER TABLE "flDet_blocks_highlighted_text" ADD COLUMN "highlighted_link_label" varchar;
  ALTER TABLE "flDet_blocks_highlighted_text" ADD COLUMN "highlighted_link_relation" "enum_flDet_blocks_highlighted_text_highlighted_link_relation" DEFAULT 'pages';
  ALTER TABLE "flDet_blocks_highlighted_text" ADD COLUMN "highlighted_link_url" varchar;
  ALTER TABLE "flDet_blocks_highlighted_text" ADD COLUMN "highlighted_link_anchor_to" varchar;
  ALTER TABLE "flDet_blocks_map" ADD COLUMN "map_link" varchar;
  ALTER TABLE "share_blocks_highlighted_text" DROP COLUMN IF EXISTS "narrow_container";
  ALTER TABLE "share_blocks_highlighted_text" DROP COLUMN IF EXISTS "wide_content_area";
  ALTER TABLE "share_blocks_image_pins" DROP COLUMN IF EXISTS "pins_variant";
  ALTER TABLE "share_blocks_prices" DROP COLUMN IF EXISTS "prices_settings_heading";
  ALTER TABLE "pages_blocks_highlighted_text" DROP COLUMN IF EXISTS "narrow_container";
  ALTER TABLE "pages_blocks_highlighted_text" DROP COLUMN IF EXISTS "wide_content_area";
  ALTER TABLE "pages_blocks_image_pins" DROP COLUMN IF EXISTS "pins_variant";
  ALTER TABLE "pages_blocks_prices" DROP COLUMN IF EXISTS "prices_settings_heading";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "dark_mode";
  ALTER TABLE "_pages_v_blocks_highlighted_text" DROP COLUMN IF EXISTS "narrow_container";
  ALTER TABLE "_pages_v_blocks_highlighted_text" DROP COLUMN IF EXISTS "wide_content_area";
  ALTER TABLE "_pages_v_blocks_image_pins" DROP COLUMN IF EXISTS "pins_variant";
  ALTER TABLE "_pages_v_blocks_prices" DROP COLUMN IF EXISTS "prices_settings_heading";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_dark_mode";
  ALTER TABLE "flDet_blocks_highlighted_text" DROP COLUMN IF EXISTS "narrow_container";
  ALTER TABLE "flDet_blocks_highlighted_text" DROP COLUMN IF EXISTS "wide_content_area";
  ALTER TABLE "flDet_blocks_image_pins" DROP COLUMN IF EXISTS "pins_variant";
  ALTER TABLE "flDet_blocks_prices" DROP COLUMN IF EXISTS "prices_settings_heading";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "newsDet_id";
  ALTER TABLE "public"."share_blocks_banner" ALTER COLUMN "banner_button_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_banner_banner_button_icon";
  CREATE TYPE "public"."enum_share_blocks_banner_banner_button_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."share_blocks_banner" ALTER COLUMN "banner_button_icon" SET DATA TYPE "public"."enum_share_blocks_banner_banner_button_icon" USING "banner_button_icon"::"public"."enum_share_blocks_banner_banner_button_icon";
  ALTER TABLE "public"."share_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_features_features_with_title_feature_icon";
  CREATE TYPE "public"."enum_share_blocks_features_features_with_title_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."share_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_share_blocks_features_features_with_title_feature_icon" USING "feature_icon"::"public"."enum_share_blocks_features_features_with_title_feature_icon";
  ALTER TABLE "public"."share_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_features_features_uppercase_feature_icon";
  CREATE TYPE "public"."enum_share_blocks_features_features_uppercase_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."share_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_share_blocks_features_features_uppercase_feature_icon" USING "feature_icon"::"public"."enum_share_blocks_features_features_uppercase_feature_icon";
  ALTER TABLE "public"."share_blocks_features" ALTER COLUMN "features_settings_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_features_features_settings_link_icon";
  CREATE TYPE "public"."enum_share_blocks_features_features_settings_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."share_blocks_features" ALTER COLUMN "features_settings_link_icon" SET DATA TYPE "public"."enum_share_blocks_features_features_settings_link_icon" USING "features_settings_link_icon"::"public"."enum_share_blocks_features_features_settings_link_icon";
  ALTER TABLE "public"."share_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_flats_snippets_flats_set_link_icon";
  CREATE TYPE "public"."enum_share_blocks_flats_snippets_flats_set_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."share_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon" SET DATA TYPE "public"."enum_share_blocks_flats_snippets_flats_set_link_icon" USING "flats_set_link_icon"::"public"."enum_share_blocks_flats_snippets_flats_set_link_icon";
  ALTER TABLE "public"."share_blocks_gallery" ALTER COLUMN "gallery_settings_background" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_gallery_gallery_settings_background";
  CREATE TYPE "public"."enum_share_blocks_gallery_gallery_settings_background" AS ENUM('dark');
  ALTER TABLE "public"."share_blocks_gallery" ALTER COLUMN "gallery_settings_background" SET DATA TYPE "public"."enum_share_blocks_gallery_gallery_settings_background" USING "gallery_settings_background"::"public"."enum_share_blocks_gallery_gallery_settings_background";
  ALTER TABLE "public"."share_blocks_gallery" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_gallery_link_icon";
  CREATE TYPE "public"."enum_share_blocks_gallery_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."share_blocks_gallery" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_share_blocks_gallery_link_icon" USING "link_icon"::"public"."enum_share_blocks_gallery_link_icon";
  ALTER TABLE "public"."share_blocks_hero_main_buttons" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_hero_main_buttons_link_icon";
  CREATE TYPE "public"."enum_share_blocks_hero_main_buttons_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."share_blocks_hero_main_buttons" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_share_blocks_hero_main_buttons_link_icon" USING "link_icon"::"public"."enum_share_blocks_hero_main_buttons_link_icon";
  ALTER TABLE "public"."share_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_hero_secondary_buttons_link_icon";
  CREATE TYPE "public"."enum_share_blocks_hero_secondary_buttons_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."share_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_share_blocks_hero_secondary_buttons_link_icon" USING "link_icon"::"public"."enum_share_blocks_hero_secondary_buttons_link_icon";
  ALTER TABLE "public"."share_blocks_highlighted_text" ALTER COLUMN "text_size" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_highlighted_text_text_size";
  CREATE TYPE "public"."enum_share_blocks_highlighted_text_text_size" AS ENUM('large', 'medium');
  ALTER TABLE "public"."share_blocks_highlighted_text" ALTER COLUMN "text_size" SET DATA TYPE "public"."enum_share_blocks_highlighted_text_text_size" USING "text_size"::"public"."enum_share_blocks_highlighted_text_text_size";
  ALTER TABLE "public"."share_blocks_img_content_person_bullets" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_img_content_person_bullets_feature_icon";
  CREATE TYPE "public"."enum_share_blocks_img_content_person_bullets_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."share_blocks_img_content_person_bullets" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_share_blocks_img_content_person_bullets_feature_icon" USING "feature_icon"::"public"."enum_share_blocks_img_content_person_bullets_feature_icon";
  ALTER TABLE "public"."share_blocks_img_content" ALTER COLUMN "accordion_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_img_content_accordion_link_icon";
  CREATE TYPE "public"."enum_share_blocks_img_content_accordion_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."share_blocks_img_content" ALTER COLUMN "accordion_link_icon" SET DATA TYPE "public"."enum_share_blocks_img_content_accordion_link_icon" USING "accordion_link_icon"::"public"."enum_share_blocks_img_content_accordion_link_icon";
  ALTER TABLE "public"."share_blocks_news_snippets" ALTER COLUMN "news_set_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_news_snippets_news_set_link_icon";
  CREATE TYPE "public"."enum_share_blocks_news_snippets_news_set_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."share_blocks_news_snippets" ALTER COLUMN "news_set_link_icon" SET DATA TYPE "public"."enum_share_blocks_news_snippets_news_set_link_icon" USING "news_set_link_icon"::"public"."enum_share_blocks_news_snippets_news_set_link_icon";
  ALTER TABLE "public"."pages_blocks_banner" ALTER COLUMN "banner_button_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_banner_banner_button_icon";
  CREATE TYPE "public"."enum_pages_blocks_banner_banner_button_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."pages_blocks_banner" ALTER COLUMN "banner_button_icon" SET DATA TYPE "public"."enum_pages_blocks_banner_banner_button_icon" USING "banner_button_icon"::"public"."enum_pages_blocks_banner_banner_button_icon";
  ALTER TABLE "public"."pages_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_features_features_with_title_feature_icon";
  CREATE TYPE "public"."enum_pages_blocks_features_features_with_title_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."pages_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_pages_blocks_features_features_with_title_feature_icon" USING "feature_icon"::"public"."enum_pages_blocks_features_features_with_title_feature_icon";
  ALTER TABLE "public"."pages_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_icon";
  CREATE TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."pages_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_icon" USING "feature_icon"::"public"."enum_pages_blocks_features_features_uppercase_feature_icon";
  ALTER TABLE "public"."pages_blocks_features" ALTER COLUMN "features_settings_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_features_features_settings_link_icon";
  CREATE TYPE "public"."enum_pages_blocks_features_features_settings_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."pages_blocks_features" ALTER COLUMN "features_settings_link_icon" SET DATA TYPE "public"."enum_pages_blocks_features_features_settings_link_icon" USING "features_settings_link_icon"::"public"."enum_pages_blocks_features_features_settings_link_icon";
  ALTER TABLE "public"."pages_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_link_icon";
  CREATE TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."pages_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon" SET DATA TYPE "public"."enum_pages_blocks_flats_snippets_flats_set_link_icon" USING "flats_set_link_icon"::"public"."enum_pages_blocks_flats_snippets_flats_set_link_icon";
  ALTER TABLE "public"."pages_blocks_gallery" ALTER COLUMN "gallery_settings_background" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_gallery_gallery_settings_background";
  CREATE TYPE "public"."enum_pages_blocks_gallery_gallery_settings_background" AS ENUM('dark');
  ALTER TABLE "public"."pages_blocks_gallery" ALTER COLUMN "gallery_settings_background" SET DATA TYPE "public"."enum_pages_blocks_gallery_gallery_settings_background" USING "gallery_settings_background"::"public"."enum_pages_blocks_gallery_gallery_settings_background";
  ALTER TABLE "public"."pages_blocks_gallery" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_gallery_link_icon";
  CREATE TYPE "public"."enum_pages_blocks_gallery_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."pages_blocks_gallery" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_pages_blocks_gallery_link_icon" USING "link_icon"::"public"."enum_pages_blocks_gallery_link_icon";
  ALTER TABLE "public"."pages_blocks_hero_main_buttons" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_hero_main_buttons_link_icon";
  CREATE TYPE "public"."enum_pages_blocks_hero_main_buttons_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."pages_blocks_hero_main_buttons" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_pages_blocks_hero_main_buttons_link_icon" USING "link_icon"::"public"."enum_pages_blocks_hero_main_buttons_link_icon";
  ALTER TABLE "public"."pages_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_hero_secondary_buttons_link_icon";
  CREATE TYPE "public"."enum_pages_blocks_hero_secondary_buttons_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."pages_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_pages_blocks_hero_secondary_buttons_link_icon" USING "link_icon"::"public"."enum_pages_blocks_hero_secondary_buttons_link_icon";
  ALTER TABLE "public"."pages_blocks_highlighted_text" ALTER COLUMN "text_size" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_highlighted_text_text_size";
  CREATE TYPE "public"."enum_pages_blocks_highlighted_text_text_size" AS ENUM('large', 'medium');
  ALTER TABLE "public"."pages_blocks_highlighted_text" ALTER COLUMN "text_size" SET DATA TYPE "public"."enum_pages_blocks_highlighted_text_text_size" USING "text_size"::"public"."enum_pages_blocks_highlighted_text_text_size";
  ALTER TABLE "public"."pages_blocks_img_content_person_bullets" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_img_content_person_bullets_feature_icon";
  CREATE TYPE "public"."enum_pages_blocks_img_content_person_bullets_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."pages_blocks_img_content_person_bullets" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_pages_blocks_img_content_person_bullets_feature_icon" USING "feature_icon"::"public"."enum_pages_blocks_img_content_person_bullets_feature_icon";
  ALTER TABLE "public"."pages_blocks_img_content" ALTER COLUMN "accordion_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_img_content_accordion_link_icon";
  CREATE TYPE "public"."enum_pages_blocks_img_content_accordion_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."pages_blocks_img_content" ALTER COLUMN "accordion_link_icon" SET DATA TYPE "public"."enum_pages_blocks_img_content_accordion_link_icon" USING "accordion_link_icon"::"public"."enum_pages_blocks_img_content_accordion_link_icon";
  ALTER TABLE "public"."pages_blocks_news_snippets" ALTER COLUMN "news_set_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_news_snippets_news_set_link_icon";
  CREATE TYPE "public"."enum_pages_blocks_news_snippets_news_set_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."pages_blocks_news_snippets" ALTER COLUMN "news_set_link_icon" SET DATA TYPE "public"."enum_pages_blocks_news_snippets_news_set_link_icon" USING "news_set_link_icon"::"public"."enum_pages_blocks_news_snippets_news_set_link_icon";
  ALTER TABLE "public"."_pages_v_blocks_banner" ALTER COLUMN "banner_button_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_banner_banner_button_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_banner_banner_button_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."_pages_v_blocks_banner" ALTER COLUMN "banner_button_icon" SET DATA TYPE "public"."enum__pages_v_blocks_banner_banner_button_icon" USING "banner_button_icon"::"public"."enum__pages_v_blocks_banner_banner_button_icon";
  ALTER TABLE "public"."_pages_v_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."_pages_v_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_icon" USING "feature_icon"::"public"."enum__pages_v_blocks_features_features_with_title_feature_icon";
  ALTER TABLE "public"."_pages_v_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."_pages_v_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_icon" USING "feature_icon"::"public"."enum__pages_v_blocks_features_features_uppercase_feature_icon";
  ALTER TABLE "public"."_pages_v_blocks_features" ALTER COLUMN "features_settings_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_features_features_settings_link_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_settings_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."_pages_v_blocks_features" ALTER COLUMN "features_settings_link_icon" SET DATA TYPE "public"."enum__pages_v_blocks_features_features_settings_link_icon" USING "features_settings_link_icon"::"public"."enum__pages_v_blocks_features_features_settings_link_icon";
  ALTER TABLE "public"."_pages_v_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_link_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."_pages_v_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon" SET DATA TYPE "public"."enum__pages_v_blocks_flats_snippets_flats_set_link_icon" USING "flats_set_link_icon"::"public"."enum__pages_v_blocks_flats_snippets_flats_set_link_icon";
  ALTER TABLE "public"."_pages_v_blocks_gallery" ALTER COLUMN "gallery_settings_background" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_gallery_gallery_settings_background";
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_gallery_settings_background" AS ENUM('dark');
  ALTER TABLE "public"."_pages_v_blocks_gallery" ALTER COLUMN "gallery_settings_background" SET DATA TYPE "public"."enum__pages_v_blocks_gallery_gallery_settings_background" USING "gallery_settings_background"::"public"."enum__pages_v_blocks_gallery_gallery_settings_background";
  ALTER TABLE "public"."_pages_v_blocks_gallery" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_gallery_link_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."_pages_v_blocks_gallery" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum__pages_v_blocks_gallery_link_icon" USING "link_icon"::"public"."enum__pages_v_blocks_gallery_link_icon";
  ALTER TABLE "public"."_pages_v_blocks_hero_main_buttons" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_hero_main_buttons_link_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_hero_main_buttons_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."_pages_v_blocks_hero_main_buttons" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum__pages_v_blocks_hero_main_buttons_link_icon" USING "link_icon"::"public"."enum__pages_v_blocks_hero_main_buttons_link_icon";
  ALTER TABLE "public"."_pages_v_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_hero_secondary_buttons_link_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_hero_secondary_buttons_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."_pages_v_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum__pages_v_blocks_hero_secondary_buttons_link_icon" USING "link_icon"::"public"."enum__pages_v_blocks_hero_secondary_buttons_link_icon";
  ALTER TABLE "public"."_pages_v_blocks_highlighted_text" ALTER COLUMN "text_size" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_highlighted_text_text_size";
  CREATE TYPE "public"."enum__pages_v_blocks_highlighted_text_text_size" AS ENUM('large', 'medium');
  ALTER TABLE "public"."_pages_v_blocks_highlighted_text" ALTER COLUMN "text_size" SET DATA TYPE "public"."enum__pages_v_blocks_highlighted_text_text_size" USING "text_size"::"public"."enum__pages_v_blocks_highlighted_text_text_size";
  ALTER TABLE "public"."_pages_v_blocks_img_content_person_bullets" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_img_content_person_bullets_feature_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_img_content_person_bullets_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."_pages_v_blocks_img_content_person_bullets" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum__pages_v_blocks_img_content_person_bullets_feature_icon" USING "feature_icon"::"public"."enum__pages_v_blocks_img_content_person_bullets_feature_icon";
  ALTER TABLE "public"."_pages_v_blocks_img_content" ALTER COLUMN "accordion_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_img_content_accordion_link_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_img_content_accordion_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."_pages_v_blocks_img_content" ALTER COLUMN "accordion_link_icon" SET DATA TYPE "public"."enum__pages_v_blocks_img_content_accordion_link_icon" USING "accordion_link_icon"::"public"."enum__pages_v_blocks_img_content_accordion_link_icon";
  ALTER TABLE "public"."_pages_v_blocks_news_snippets" ALTER COLUMN "news_set_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_link_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."_pages_v_blocks_news_snippets" ALTER COLUMN "news_set_link_icon" SET DATA TYPE "public"."enum__pages_v_blocks_news_snippets_news_set_link_icon" USING "news_set_link_icon"::"public"."enum__pages_v_blocks_news_snippets_news_set_link_icon";
  ALTER TABLE "public"."globalheader_nav_items" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_globalheader_nav_items_link_icon";
  CREATE TYPE "public"."enum_globalheader_nav_items_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."globalheader_nav_items" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_globalheader_nav_items_link_icon" USING "link_icon"::"public"."enum_globalheader_nav_items_link_icon";
  ALTER TABLE "public"."globalheader_cta_buttons" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_globalheader_cta_buttons_link_icon";
  CREATE TYPE "public"."enum_globalheader_cta_buttons_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."globalheader_cta_buttons" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_globalheader_cta_buttons_link_icon" USING "link_icon"::"public"."enum_globalheader_cta_buttons_link_icon";
  ALTER TABLE "public"."globalfooter_bottom_links" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_globalfooter_bottom_links_link_icon";
  CREATE TYPE "public"."enum_globalfooter_bottom_links_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."globalfooter_bottom_links" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_globalfooter_bottom_links_link_icon" USING "link_icon"::"public"."enum_globalfooter_bottom_links_link_icon";
  ALTER TABLE "public"."flatsstoone" ALTER COLUMN "gallery_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flats_gallery_link_icon";
  CREATE TYPE "public"."enum_flats_gallery_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."flatsstoone" ALTER COLUMN "gallery_link_icon" SET DATA TYPE "public"."enum_flats_gallery_link_icon" USING "gallery_link_icon"::"public"."enum_flats_gallery_link_icon";
  ALTER TABLE "public"."flDet_blocks_hero_main_buttons" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_icon";
  CREATE TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."flDet_blocks_hero_main_buttons" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_icon" USING "link_icon"::"public"."enum_flDet_blocks_hero_main_buttons_link_icon";
  ALTER TABLE "public"."flDet_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_hero_secondary_buttons_link_icon";
  CREATE TYPE "public"."enum_flDet_blocks_hero_secondary_buttons_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."flDet_blocks_hero_secondary_buttons" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_flDet_blocks_hero_secondary_buttons_link_icon" USING "link_icon"::"public"."enum_flDet_blocks_hero_secondary_buttons_link_icon";
  ALTER TABLE "public"."flDet_blocks_banner" ALTER COLUMN "banner_button_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_banner_banner_button_icon";
  CREATE TYPE "public"."enum_flDet_blocks_banner_banner_button_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."flDet_blocks_banner" ALTER COLUMN "banner_button_icon" SET DATA TYPE "public"."enum_flDet_blocks_banner_banner_button_icon" USING "banner_button_icon"::"public"."enum_flDet_blocks_banner_banner_button_icon";
  ALTER TABLE "public"."flDet_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_icon";
  CREATE TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."flDet_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_icon" USING "feature_icon"::"public"."enum_flDet_blocks_features_features_with_title_feature_icon";
  ALTER TABLE "public"."flDet_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_icon";
  CREATE TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."flDet_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_icon" USING "feature_icon"::"public"."enum_flDet_blocks_features_features_uppercase_feature_icon";
  ALTER TABLE "public"."flDet_blocks_features" ALTER COLUMN "features_settings_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_features_features_settings_link_icon";
  CREATE TYPE "public"."enum_flDet_blocks_features_features_settings_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."flDet_blocks_features" ALTER COLUMN "features_settings_link_icon" SET DATA TYPE "public"."enum_flDet_blocks_features_features_settings_link_icon" USING "features_settings_link_icon"::"public"."enum_flDet_blocks_features_features_settings_link_icon";
  ALTER TABLE "public"."flDet_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_icon";
  CREATE TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."flDet_blocks_flats_snippets" ALTER COLUMN "flats_set_link_icon" SET DATA TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_icon" USING "flats_set_link_icon"::"public"."enum_flDet_blocks_flats_snippets_flats_set_link_icon";
  ALTER TABLE "public"."flDet_blocks_gallery" ALTER COLUMN "gallery_settings_background" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_gallery_gallery_settings_background";
  CREATE TYPE "public"."enum_flDet_blocks_gallery_gallery_settings_background" AS ENUM('dark');
  ALTER TABLE "public"."flDet_blocks_gallery" ALTER COLUMN "gallery_settings_background" SET DATA TYPE "public"."enum_flDet_blocks_gallery_gallery_settings_background" USING "gallery_settings_background"::"public"."enum_flDet_blocks_gallery_gallery_settings_background";
  ALTER TABLE "public"."flDet_blocks_gallery" ALTER COLUMN "link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_gallery_link_icon";
  CREATE TYPE "public"."enum_flDet_blocks_gallery_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."flDet_blocks_gallery" ALTER COLUMN "link_icon" SET DATA TYPE "public"."enum_flDet_blocks_gallery_link_icon" USING "link_icon"::"public"."enum_flDet_blocks_gallery_link_icon";
  ALTER TABLE "public"."flDet_blocks_highlighted_text" ALTER COLUMN "text_size" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_highlighted_text_text_size";
  CREATE TYPE "public"."enum_flDet_blocks_highlighted_text_text_size" AS ENUM('large', 'medium');
  ALTER TABLE "public"."flDet_blocks_highlighted_text" ALTER COLUMN "text_size" SET DATA TYPE "public"."enum_flDet_blocks_highlighted_text_text_size" USING "text_size"::"public"."enum_flDet_blocks_highlighted_text_text_size";
  ALTER TABLE "public"."flDet_blocks_img_content_person_bullets" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_img_content_person_bullets_feature_icon";
  CREATE TYPE "public"."enum_flDet_blocks_img_content_person_bullets_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."flDet_blocks_img_content_person_bullets" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_flDet_blocks_img_content_person_bullets_feature_icon" USING "feature_icon"::"public"."enum_flDet_blocks_img_content_person_bullets_feature_icon";
  ALTER TABLE "public"."flDet_blocks_img_content" ALTER COLUMN "accordion_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_img_content_accordion_link_icon";
  CREATE TYPE "public"."enum_flDet_blocks_img_content_accordion_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."flDet_blocks_img_content" ALTER COLUMN "accordion_link_icon" SET DATA TYPE "public"."enum_flDet_blocks_img_content_accordion_link_icon" USING "accordion_link_icon"::"public"."enum_flDet_blocks_img_content_accordion_link_icon";
  ALTER TABLE "public"."flDet_blocks_news_snippets" ALTER COLUMN "news_set_link_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_news_snippets_news_set_link_icon";
  CREATE TYPE "public"."enum_flDet_blocks_news_snippets_news_set_link_icon" AS ENUM('heart', 'user', 'phone', 'mail');
  ALTER TABLE "public"."flDet_blocks_news_snippets" ALTER COLUMN "news_set_link_icon" SET DATA TYPE "public"."enum_flDet_blocks_news_snippets_news_set_link_icon" USING "news_set_link_icon"::"public"."enum_flDet_blocks_news_snippets_news_set_link_icon";
  DROP TYPE "public"."enum_share_blocks_highlighted_text_buttons_button_type";
  DROP TYPE "public"."enum_share_blocks_highlighted_text_buttons_button_icon";
  DROP TYPE "public"."enum_share_blocks_highlighted_text_buttons_button_relation";
  DROP TYPE "public"."enum_share_blocks_highlighted_text_buttons_button_appearance";
  DROP TYPE "public"."enum_share_blocks_image_pins_pins_variant";
  DROP TYPE "public"."enum_share_blocks_map_pins_icon";
  DROP TYPE "public"."enum_share_blocks_sticky_slides_sticky_set_padding_top";
  DROP TYPE "public"."enum_share_blocks_sticky_slides_sticky_set_padding_bottom";
  DROP TYPE "public"."enum_share_blocks_sticky_slides_sticky_set_background";
  DROP TYPE "public"."enum_share_blocks_multi_gallery_grid_items_complex_layout";
  DROP TYPE "public"."enum_share_blocks_multi_gallery_grid_items_layout_variant";
  DROP TYPE "public"."enum_share_blocks_multi_gallery_multi_g_set_padding_top";
  DROP TYPE "public"."enum_share_blocks_multi_gallery_multi_g_set_padding_bottom";
  DROP TYPE "public"."enum_share_blocks_multi_gallery_multi_g_set_background";
  DROP TYPE "public"."enum_pages_blocks_highlighted_text_buttons_button_type";
  DROP TYPE "public"."enum_pages_blocks_highlighted_text_buttons_button_icon";
  DROP TYPE "public"."enum_pages_blocks_highlighted_text_buttons_button_relation";
  DROP TYPE "public"."enum_pages_blocks_highlighted_text_buttons_button_appearance";
  DROP TYPE "public"."enum_pages_blocks_image_pins_pins_variant";
  DROP TYPE "public"."enum_pages_blocks_map_pins_icon";
  DROP TYPE "public"."enum_pages_blocks_sticky_slides_sticky_set_padding_top";
  DROP TYPE "public"."enum_pages_blocks_sticky_slides_sticky_set_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_sticky_slides_sticky_set_background";
  DROP TYPE "public"."enum_pages_blocks_multi_gallery_grid_items_complex_layout";
  DROP TYPE "public"."enum_pages_blocks_multi_gallery_grid_items_layout_variant";
  DROP TYPE "public"."enum_pages_blocks_multi_gallery_multi_g_set_padding_top";
  DROP TYPE "public"."enum_pages_blocks_multi_gallery_multi_g_set_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_multi_gallery_multi_g_set_background";
  DROP TYPE "public"."enum__pages_v_blocks_highlighted_text_buttons_button_type";
  DROP TYPE "public"."enum__pages_v_blocks_highlighted_text_buttons_button_icon";
  DROP TYPE "public"."enum__pages_v_blocks_highlighted_text_buttons_button_relation";
  DROP TYPE "public"."enum__pages_v_blocks_highlighted_text_buttons_button_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_image_pins_pins_variant";
  DROP TYPE "public"."enum__pages_v_blocks_map_pins_icon";
  DROP TYPE "public"."enum__pages_v_blocks_sticky_slides_sticky_set_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_sticky_slides_sticky_set_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_sticky_slides_sticky_set_background";
  DROP TYPE "public"."enum__pages_v_blocks_multi_gallery_grid_items_complex_layout";
  DROP TYPE "public"."enum__pages_v_blocks_multi_gallery_grid_items_layout_variant";
  DROP TYPE "public"."enum__pages_v_blocks_multi_gallery_multi_g_set_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_multi_gallery_multi_g_set_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_multi_gallery_multi_g_set_background";
  DROP TYPE "public"."enum_flDet_blocks_highlighted_text_buttons_button_type";
  DROP TYPE "public"."enum_flDet_blocks_highlighted_text_buttons_button_icon";
  DROP TYPE "public"."enum_flDet_blocks_highlighted_text_buttons_button_relation";
  DROP TYPE "public"."enum_flDet_blocks_highlighted_text_buttons_button_appearance";
  DROP TYPE "public"."enum_flDet_blocks_image_pins_pins_variant";
  DROP TYPE "public"."enum_flDet_blocks_map_pins_icon";
  DROP TYPE "public"."enum_flDet_blocks_sticky_slides_sticky_set_padding_top";
  DROP TYPE "public"."enum_flDet_blocks_sticky_slides_sticky_set_padding_bottom";
  DROP TYPE "public"."enum_flDet_blocks_sticky_slides_sticky_set_background";
  DROP TYPE "public"."enum_flDet_blocks_multi_gallery_grid_items_complex_layout";
  DROP TYPE "public"."enum_flDet_blocks_multi_gallery_grid_items_layout_variant";
  DROP TYPE "public"."enum_flDet_blocks_multi_gallery_multi_g_set_padding_top";
  DROP TYPE "public"."enum_flDet_blocks_multi_gallery_multi_g_set_padding_bottom";
  DROP TYPE "public"."enum_flDet_blocks_multi_gallery_multi_g_set_background";
  DROP TYPE "public"."enum_newsDet_blocks_banner_banner_settings_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_banner_banner_settings_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_banner_banner_settings_background";
  DROP TYPE "public"."enum_newsDet_blocks_banner_banner_variant";
  DROP TYPE "public"."enum_newsDet_blocks_banner_banner_content_position";
  DROP TYPE "public"."enum_newsDet_blocks_banner_banner_button_type";
  DROP TYPE "public"."enum_newsDet_blocks_banner_banner_button_icon";
  DROP TYPE "public"."enum_newsDet_blocks_banner_banner_button_relation";
  DROP TYPE "public"."enum_newsDet_blocks_benefits_benefits_settings_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_benefits_benefits_settings_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_benefits_benefits_settings_background";
  DROP TYPE "public"."enum_newsDet_blocks_contact_contact_settings_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_contact_contact_settings_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_contact_contact_settings_background";
  DROP TYPE "public"."enum_newsDet_blocks_contact_variant";
  DROP TYPE "public"."enum_newsDet_blocks_contact_contact_form_position";
  DROP TYPE "public"."enum_newsDet_blocks_content_content_settings_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_content_content_settings_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_content_content_settings_background";
  DROP TYPE "public"."enum_newsDet_blocks_content_content_position";
  DROP TYPE "public"."enum_newsDet_blocks_features_features_with_title_feature_icon";
  DROP TYPE "public"."enum_newsDet_blocks_features_features_with_title_feature_bg";
  DROP TYPE "public"."enum_newsDet_blocks_features_features_with_image_feature_bg";
  DROP TYPE "public"."enum_newsDet_blocks_features_features_uppercase_feature_icon";
  DROP TYPE "public"."enum_newsDet_blocks_features_features_uppercase_feature_bg";
  DROP TYPE "public"."enum_newsDet_blocks_features_features_settings_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_features_features_settings_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_features_features_settings_background";
  DROP TYPE "public"."enum_newsDet_blocks_features_features_settings_link_type";
  DROP TYPE "public"."enum_newsDet_blocks_features_features_settings_link_icon";
  DROP TYPE "public"."enum_newsDet_blocks_features_features_settings_link_relation";
  DROP TYPE "public"."enum_newsDet_blocks_features_features_settings_link_appearance";
  DROP TYPE "public"."enum_newsDet_blocks_features_features_variant";
  DROP TYPE "public"."enum_newsDet_blocks_form_form_settings_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_form_form_settings_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_form_form_settings_background";
  DROP TYPE "public"."enum_newsDet_blocks_form_layout_variant";
  DROP TYPE "public"."enum_newsDet_blocks_form_form_position";
  DROP TYPE "public"."enum_newsDet_blocks_flats_snippets_flats_set_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_flats_snippets_flats_set_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_flats_snippets_flats_set_background";
  DROP TYPE "public"."enum_newsDet_blocks_flats_snippets_flats_set_link_type";
  DROP TYPE "public"."enum_newsDet_blocks_flats_snippets_flats_set_link_icon";
  DROP TYPE "public"."enum_newsDet_blocks_flats_snippets_flats_set_link_relation";
  DROP TYPE "public"."enum_newsDet_blocks_flats_snippets_flats_set_link_appearance";
  DROP TYPE "public"."enum_newsDet_blocks_gallery_simple_slider_slide_width";
  DROP TYPE "public"."enum_newsDet_blocks_gallery_multi_slider_images_slide_width";
  DROP TYPE "public"."enum_newsDet_blocks_gallery_gallery_settings_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_gallery_gallery_settings_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_gallery_gallery_settings_background";
  DROP TYPE "public"."enum_newsDet_blocks_gallery_controls_type";
  DROP TYPE "public"."enum_newsDet_blocks_gallery_gallery_variant";
  DROP TYPE "public"."enum_newsDet_blocks_gallery_link_type";
  DROP TYPE "public"."enum_newsDet_blocks_gallery_link_icon";
  DROP TYPE "public"."enum_newsDet_blocks_gallery_link_relation";
  DROP TYPE "public"."enum_newsDet_blocks_gallery_link_appearance";
  DROP TYPE "public"."enum_newsDet_blocks_hero_main_buttons_link_type";
  DROP TYPE "public"."enum_newsDet_blocks_hero_main_buttons_link_icon";
  DROP TYPE "public"."enum_newsDet_blocks_hero_main_buttons_link_relation";
  DROP TYPE "public"."enum_newsDet_blocks_hero_main_buttons_link_appearance";
  DROP TYPE "public"."enum_newsDet_blocks_hero_secondary_buttons_link_type";
  DROP TYPE "public"."enum_newsDet_blocks_hero_secondary_buttons_link_icon";
  DROP TYPE "public"."enum_newsDet_blocks_hero_secondary_buttons_link_relation";
  DROP TYPE "public"."enum_newsDet_blocks_hero_type";
  DROP TYPE "public"."enum_newsDet_blocks_highlighted_text_buttons_button_type";
  DROP TYPE "public"."enum_newsDet_blocks_highlighted_text_buttons_button_icon";
  DROP TYPE "public"."enum_newsDet_blocks_highlighted_text_buttons_button_relation";
  DROP TYPE "public"."enum_newsDet_blocks_highlighted_text_buttons_button_appearance";
  DROP TYPE "public"."enum_newsDet_blocks_highlighted_text_high_set_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_highlighted_text_high_set_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_highlighted_text_high_set_background";
  DROP TYPE "public"."enum_newsDet_blocks_highlighted_text_text_size";
  DROP TYPE "public"."enum_newsDet_blocks_img_content_person_bullets_feature_icon";
  DROP TYPE "public"."enum_newsDet_blocks_img_content_person_bullets_feature_bg";
  DROP TYPE "public"."enum_newsDet_blocks_img_content_img_cont_set_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_img_content_img_cont_set_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_img_content_img_cont_set_background";
  DROP TYPE "public"."enum_newsDet_blocks_img_content_content_type";
  DROP TYPE "public"."enum_newsDet_blocks_img_content_accordion_link_type";
  DROP TYPE "public"."enum_newsDet_blocks_img_content_accordion_link_icon";
  DROP TYPE "public"."enum_newsDet_blocks_img_content_accordion_link_relation";
  DROP TYPE "public"."enum_newsDet_blocks_img_content_accordion_link_appearance";
  DROP TYPE "public"."enum_newsDet_blocks_img_content_image_position";
  DROP TYPE "public"."enum_newsDet_blocks_images_grid_images_settings_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_images_grid_images_settings_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_images_grid_images_settings_background";
  DROP TYPE "public"."enum_newsDet_blocks_images_grid_layout";
  DROP TYPE "public"."enum_newsDet_blocks_images_grid_direction_variant";
  DROP TYPE "public"."enum_newsDet_blocks_image_pins_image_pins_set_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_image_pins_image_pins_set_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_image_pins_image_pins_set_background";
  DROP TYPE "public"."enum_newsDet_blocks_image_pins_pins_variant";
  DROP TYPE "public"."enum_newsDet_blocks_map_pins_icon";
  DROP TYPE "public"."enum_newsDet_blocks_map_map_settings_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_map_map_settings_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_map_map_settings_background";
  DROP TYPE "public"."enum_newsDet_blocks_news_snippets_news_set_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_news_snippets_news_set_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_news_snippets_news_set_background";
  DROP TYPE "public"."enum_newsDet_blocks_news_snippets_news_set_link_type";
  DROP TYPE "public"."enum_newsDet_blocks_news_snippets_news_set_link_icon";
  DROP TYPE "public"."enum_newsDet_blocks_news_snippets_news_set_link_relation";
  DROP TYPE "public"."enum_newsDet_blocks_news_snippets_news_set_link_appearance";
  DROP TYPE "public"."enum_newsDet_blocks_numbers_numbers_settings_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_numbers_numbers_settings_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_numbers_numbers_settings_background";
  DROP TYPE "public"."enum_newsDet_blocks_timeline_timeline_settings_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_timeline_timeline_settings_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_timeline_timeline_settings_background";
  DROP TYPE "public"."enum_newsDet_blocks_our_projects_our_proj_set_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_our_projects_our_proj_set_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_our_projects_our_proj_set_background";
  DROP TYPE "public"."enum_newsDet_blocks_prices_prices_settings_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_prices_prices_settings_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_prices_prices_settings_background";
  DROP TYPE "public"."enum_newsDet_blocks_interactive_picker_extended_views_direct";
  DROP TYPE "public"."enum_newsDet_blocks_step_cards_step_cards_set_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_step_cards_step_cards_set_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_step_cards_step_cards_set_background";
  DROP TYPE "public"."enum_newsDet_blocks_sticky_slides_sticky_set_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_sticky_slides_sticky_set_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_sticky_slides_sticky_set_background";
  DROP TYPE "public"."enum_newsDet_blocks_multi_gallery_grid_items_complex_layout";
  DROP TYPE "public"."enum_newsDet_blocks_multi_gallery_grid_items_layout_variant";
  DROP TYPE "public"."enum_newsDet_blocks_multi_gallery_multi_g_set_padding_top";
  DROP TYPE "public"."enum_newsDet_blocks_multi_gallery_multi_g_set_padding_bottom";
  DROP TYPE "public"."enum_newsDet_blocks_multi_gallery_multi_g_set_background";
  DROP TYPE "public"."enum_newsDet_blocks_text_image_image_position";
  DROP TYPE "public"."enum_newsDet_meta_twitter_card";`)
}
