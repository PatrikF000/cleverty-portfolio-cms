import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
DROP TABLE IF EXISTS "share_blocks_interactive_picker_extended_views" CASCADE;

DROP TABLE IF EXISTS "share_blocks_interactive_picker_extended" CASCADE;

DROP TABLE IF EXISTS "share_blocks_visual_price_list_buildings" CASCADE;

DROP TABLE IF EXISTS "share_blocks_visual_price_list" CASCADE;

DROP TABLE IF EXISTS "share_blocks_step_cards_steps" CASCADE;

DROP TABLE IF EXISTS "share_blocks_step_cards" CASCADE;

DROP TABLE IF EXISTS "share_blocks_sticky_slides_slides_slide_images" CASCADE;

DROP TABLE IF EXISTS "share_blocks_sticky_slides_slides" CASCADE;

DROP TABLE IF EXISTS "share_blocks_sticky_slides" CASCADE;

DROP TABLE IF EXISTS "share_blocks_multi_gallery_grid_items_complex" CASCADE;

DROP TABLE IF EXISTS "share_blocks_multi_gallery_grid_items_simple_grid_left_col" CASCADE;

DROP TABLE IF EXISTS "share_blocks_multi_gallery_grid_items_simple_grid_right_col" CASCADE;

DROP TABLE IF EXISTS "share_blocks_multi_gallery_grid_items_simple_grid" CASCADE;

DROP TABLE IF EXISTS "share_blocks_multi_gallery_grid_items" CASCADE;

DROP TABLE IF EXISTS "share_blocks_multi_gallery" CASCADE;

DROP TABLE IF EXISTS "share_blocks_variable_table_rows_cells" CASCADE;

DROP TABLE IF EXISTS "share_blocks_variable_table_rows" CASCADE;

DROP TABLE IF EXISTS "share_blocks_variable_table" CASCADE;

DROP TABLE IF EXISTS "share_blocks_table_custom" CASCADE;

DROP TABLE IF EXISTS "share_blocks_text_image" CASCADE;

DROP TABLE IF EXISTS "share_blocks_shared_section" CASCADE;

DROP TABLE IF EXISTS "share" CASCADE;

DROP TABLE IF EXISTS "sharestoone" CASCADE;

DROP TABLE IF EXISTS "share_rels" CASCADE;

DROP TABLE IF EXISTS "roles_permissions_projects" CASCADE;

DROP TABLE IF EXISTS "roles_permissions_pages" CASCADE;

DROP TABLE IF EXISTS "roles_permissions_globalheader" CASCADE;

DROP TABLE IF EXISTS "roles_permissions_globalfooter" CASCADE;

DROP TABLE IF EXISTS "roles_permissions_project_global_settings" CASCADE;

DROP TABLE IF EXISTS "roles_permissions_buildings" CASCADE;

DROP TABLE IF EXISTS "roles_permissions_flats" CASCADE;

DROP TABLE IF EXISTS "roles_permissions_flat_detail_page" CASCADE;

DROP TABLE IF EXISTS "roles_permissions_sectors" CASCADE;

DROP TABLE IF EXISTS "roles_permissions_floors" CASCADE;

DROP TABLE IF EXISTS "roles_permissions_news" CASCADE;

DROP TABLE IF EXISTS "roles_permissions_documents" CASCADE;

DROP TABLE IF EXISTS "roles_permissions_share" CASCADE;

DROP TABLE IF EXISTS "roles_rels" CASCADE;

DROP TABLE IF EXISTS "users_rels" CASCADE;

DROP TABLE IF EXISTS "projects_standards" CASCADE;

DROP TABLE IF EXISTS "projects_plans" CASCADE;

DROP TABLE IF EXISTS "projects" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_banner" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_benefits_benefits_row_item_heading_lines" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_benefits_benefits_row_item2_heading_lines" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_benefits_benefits" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_benefits" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_contact_contact_info_highlighted_contacts" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_contact_contact_info_contact_items" CASCADE;

DROP TABLE IF EXISTS "pages_blocks_contact" CASCADE;
`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Down migration not needed - this is part of a larger migration split
}
