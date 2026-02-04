import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
DO $$ BEGIN
    ALTER TABLE "share_blocks_visual_price_list" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "share_blocks_step_cards_steps" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "share_blocks_step_cards" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "share_blocks_sticky_slides_slides_slide_images" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "share_blocks_sticky_slides_slides" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "share_blocks_sticky_slides" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "share_blocks_multi_gallery_grid_items_complex" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "share_blocks_multi_gallery_grid_items_simple_grid_left_col" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "share_blocks_multi_gallery_grid_items_simple_grid_right_col" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "share_blocks_multi_gallery_grid_items_simple_grid" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "share_blocks_multi_gallery_grid_items" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "share_blocks_multi_gallery" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "share_blocks_variable_table_rows_cells" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "share_blocks_variable_table_rows" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "share_blocks_variable_table" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "share_blocks_table_custom" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "share_blocks_text_image" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "share_blocks_shared_section" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "share" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "sharestoone" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "share_rels" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "roles_permissions_projects" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "roles_permissions_pages" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "roles_permissions_globalheader" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "roles_permissions_globalfooter" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "roles_permissions_project_global_settings" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "roles_permissions_buildings" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "roles_permissions_flats" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "roles_permissions_flat_detail_page" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "roles_permissions_sectors" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "roles_permissions_floors" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "roles_permissions_news" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "roles_permissions_documents" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "roles_permissions_share" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "roles_rels" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "users_rels" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "projects_standards" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "projects_plans" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "projects" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "pages_blocks_banner" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "pages_blocks_benefits_benefits_row_item_heading_lines" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "pages_blocks_benefits_benefits_row_item2_heading_lines" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "pages_blocks_benefits_benefits" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "pages_blocks_benefits" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "pages_blocks_contact_contact_info_highlighted_contacts" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "pages_blocks_contact_contact_info_contact_items" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "pages_blocks_contact" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "pages_blocks_content" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "pages_blocks_draw_editor" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "pages_blocks_features_features_with_title" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;
`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Down migration not needed - this is part of a larger migration split
}
