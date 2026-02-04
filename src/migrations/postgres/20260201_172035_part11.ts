import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
DROP TABLE IF EXISTS "pages_blocks_content" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_draw_editor" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_features_features_with_title" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_features_features_with_image" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_features_features_uppercase" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_features" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_form_slide_out_boxes" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_form" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_flats_snippets" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_gallery_simple_slider" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_gallery_multi_slider_images" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_gallery_multi_slider" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_gallery_full_width" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_gallery" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_hero_hero_slideshow" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_hero_main_buttons" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_hero_secondary_buttons" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_hero" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_highlighted_text_buttons" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_highlighted_text" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_img_content_person_bullets" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_img_content_accordion_accordion_items" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_img_content" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_images_grid_images" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_images_grid" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_image_pins_pins" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_image_pins" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_map_pins" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_map" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_news_snippets" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_numbers_numbers" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_numbers" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_timeline_timeline" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_timeline" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_our_projects_projects" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_our_projects" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_prices" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_interactive_picker_extended_views" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_interactive_picker_extended" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_visual_price_list_buildings" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_visual_price_list" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_step_cards_steps" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_step_cards" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_sticky_slides_slides_slide_images" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_sticky_slides_slides" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_sticky_slides" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_multi_gallery_grid_items_complex" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_multi_gallery_grid_items_simple_grid_left_col" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_multi_gallery_grid_items_simple_grid_right_col" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_multi_gallery_grid_items_simple_grid" CASCADE;
`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Down migration not needed - this is part of a larger migration split
}
