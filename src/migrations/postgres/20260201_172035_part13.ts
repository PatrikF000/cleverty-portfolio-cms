import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
DROP TABLE IF EXISTS "_pages_v_blocks_numbers" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_timeline_timeline" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_timeline" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_our_projects_projects" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_our_projects" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_prices" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_interactive_picker_extended_views" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_interactive_picker_extended" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_visual_price_list_buildings" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_visual_price_list" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_step_cards_steps" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_step_cards" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_sticky_slides_slides_slide_images" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_sticky_slides_slides" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_sticky_slides" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_multi_gallery_grid_items_complex" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_multi_gallery_grid_items_simple_grid_left_col" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_multi_gallery_grid_items_simple_grid_right_col" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_multi_gallery_grid_items_simple_grid" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_multi_gallery_grid_items" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_multi_gallery" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_variable_table_rows_cells" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_variable_table_rows" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_variable_table" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_table_custom" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_text_image" CASCADE;

DROP TABLE IF EXISTS "_pages_v_blocks_shared_section" CASCADE;

DROP TABLE IF EXISTS "_pages_v" CASCADE;

DROP TABLE IF EXISTS "_pages_vstoone" CASCADE;

DROP TABLE IF EXISTS "_pages_v_rels" CASCADE;

DROP TABLE IF EXISTS "globalheader_nav_items" CASCADE;

DROP TABLE IF EXISTS "globalheader" CASCADE;

DROP TABLE IF EXISTS "globalheaderstoone" CASCADE;

DROP TABLE IF EXISTS "globalheader_rels" CASCADE;

DROP TABLE IF EXISTS "globalfooter_highlighted_contacts" CASCADE;

DROP TABLE IF EXISTS "globalfooter_social_links" CASCADE;

DROP TABLE IF EXISTS "globalfooter_contact_items" CASCADE;

DROP TABLE IF EXISTS "globalfooter_bottom_links" CASCADE;

DROP TABLE IF EXISTS "globalfooter" CASCADE;

DROP TABLE IF EXISTS "globalfooterstoone" CASCADE;

DROP TABLE IF EXISTS "globalfooter_rels" CASCADE;

DROP TABLE IF EXISTS "buildings_documents" CASCADE;

DROP TABLE IF EXISTS "buildings_plans" CASCADE;

DROP TABLE IF EXISTS "buildings" CASCADE;

DROP TABLE IF EXISTS "buildingsstoone" CASCADE;

DROP TABLE IF EXISTS "floors_documents" CASCADE;

DROP TABLE IF EXISTS "floors_plans" CASCADE;

DROP TABLE IF EXISTS "floors" CASCADE;

DROP TABLE IF EXISTS "floorsstoone" CASCADE;

DROP TABLE IF EXISTS "flats_documents" CASCADE;
`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Down migration not needed - this is part of a larger migration split
}
