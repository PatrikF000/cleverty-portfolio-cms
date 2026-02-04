import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
DO $$ BEGIN
    ALTER TABLE "pages_blocks_variable_table_rows" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "pages_blocks_variable_table" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "pages_blocks_table_custom" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "pages_blocks_text_image" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "pages_blocks_shared_section" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "pages" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "pagesstoone" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "pages_rels" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_banner" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_benefits_benefits_row_item_heading_lines" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_benefits_benefits_row_item2_heading_lines" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_benefits_benefits" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_benefits" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_contact_contact_info_highlighted_contacts" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_contact_contact_info_contact_items" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_contact" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_content" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_draw_editor" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_features_features_with_title" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_features_features_with_image" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_features_features_uppercase" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_features" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_form_slide_out_boxes" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_form" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_flats_snippets" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_gallery_simple_slider" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_gallery_multi_slider_images" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_gallery_multi_slider" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_gallery_full_width" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_gallery" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_hero_hero_slideshow" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_hero_main_buttons" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_hero_secondary_buttons" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_hero" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_highlighted_text_buttons" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_highlighted_text" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_img_content_person_bullets" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_img_content_accordion_accordion_items" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_img_content" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_images_grid_images" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_images_grid" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_image_pins_pins" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_image_pins" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_map_pins" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_map" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_news_snippets" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_numbers_numbers" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_numbers" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_timeline_timeline" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_pages_v_blocks_timeline" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;
`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Down migration not needed - this is part of a larger migration split
}
