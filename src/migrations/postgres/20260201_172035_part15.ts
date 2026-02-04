import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
DROP TABLE IF EXISTS "flDet_blocks_images_grid" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_image_pins_pins" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_image_pins" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_map_pins" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_map" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_news_snippets" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_numbers_numbers" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_numbers" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_timeline_timeline" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_timeline" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_our_projects_projects" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_our_projects" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_prices" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_interactive_picker_extended_views" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_interactive_picker_extended" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_visual_price_list_buildings" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_visual_price_list" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_step_cards_steps" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_step_cards" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_sticky_slides_slides_slide_images" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_sticky_slides_slides" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_sticky_slides" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_multi_gallery_grid_items_complex" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_multi_gallery_grid_items_simple_grid_left_col" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_multi_gallery_grid_items_simple_grid_right_col" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_multi_gallery_grid_items_simple_grid" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_multi_gallery_grid_items" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_multi_gallery" CASCADE;

DROP TABLE IF EXISTS "flDet_blocks_shared_section" CASCADE;

DROP TABLE IF EXISTS "flDet" CASCADE;

DROP TABLE IF EXISTS "flDetstoone" CASCADE;

DROP TABLE IF EXISTS "flDet_rels" CASCADE;

DROP TABLE IF EXISTS "newsDet_blocks_banner" CASCADE;

DROP TABLE IF EXISTS "newsDet_blocks_benefits_benefits_row_item_heading_lines" CASCADE;

DROP TABLE IF EXISTS "newsDet_blocks_benefits_benefits_row_item2_heading_lines" CASCADE;

DROP TABLE IF EXISTS "newsDet_blocks_benefits_benefits" CASCADE;

DROP TABLE IF EXISTS "newsDet_blocks_benefits" CASCADE;

DROP TABLE IF EXISTS "newsDet_blocks_contact_contact_info_highlighted_contacts" CASCADE;

DROP TABLE IF EXISTS "newsDet_blocks_contact_contact_info_contact_items" CASCADE;

DROP TABLE IF EXISTS "newsDet_blocks_contact" CASCADE;

DROP TABLE IF EXISTS "newsDet_blocks_content" CASCADE;

DROP TABLE IF EXISTS "newsDet_blocks_draw_editor" CASCADE;

DROP TABLE IF EXISTS "newsDet_blocks_features_features_with_title" CASCADE;

DROP TABLE IF EXISTS "newsDet_blocks_features_features_with_image" CASCADE;

DROP TABLE IF EXISTS "newsDet_blocks_features_features_uppercase" CASCADE;

DROP TABLE IF EXISTS "newsDet_blocks_features" CASCADE;

DROP TABLE IF EXISTS "newsDet_blocks_form_slide_out_boxes" CASCADE;

DROP TABLE IF EXISTS "newsDet_blocks_form" CASCADE;

DROP TABLE IF EXISTS "newsDet_blocks_flats_snippets" CASCADE;

DROP TABLE IF EXISTS "newsDet_blocks_gallery_simple_slider" CASCADE;
`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Down migration not needed - this is part of a larger migration split
}
