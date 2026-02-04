import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
DO $$ BEGIN
    ALTER TABLE "newsstoone" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "news_rels" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_news_v" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_news_vstoone" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "_news_v_rels" DISABLE ROW LEVEL SECURITY;
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DROP TABLE IF EXISTS "share_blocks_banner" CASCADE;

DROP TABLE IF EXISTS "share_blocks_benefits_benefits_row_item_heading_lines" CASCADE;

DROP TABLE IF EXISTS "share_blocks_benefits_benefits_row_item2_heading_lines" CASCADE;

DROP TABLE IF EXISTS "share_blocks_benefits_benefits" CASCADE;

DROP TABLE IF EXISTS "share_blocks_benefits" CASCADE;

DROP TABLE IF EXISTS "share_blocks_contact_contact_info_highlighted_contacts" CASCADE;

DROP TABLE IF EXISTS "share_blocks_contact_contact_info_contact_items" CASCADE;

DROP TABLE IF EXISTS "share_blocks_contact" CASCADE;

DROP TABLE IF EXISTS "share_blocks_content" CASCADE;

DROP TABLE IF EXISTS "share_blocks_draw_editor" CASCADE;

DROP TABLE IF EXISTS "share_blocks_features_features_with_title" CASCADE;

DROP TABLE IF EXISTS "share_blocks_features_features_with_image" CASCADE;

DROP TABLE IF EXISTS "share_blocks_features_features_uppercase" CASCADE;

DROP TABLE IF EXISTS "share_blocks_features" CASCADE;

DROP TABLE IF EXISTS "share_blocks_form_slide_out_boxes" CASCADE;

DROP TABLE IF EXISTS "share_blocks_form" CASCADE;

DROP TABLE IF EXISTS "share_blocks_flats_snippets" CASCADE;

DROP TABLE IF EXISTS "share_blocks_gallery_simple_slider" CASCADE;

DROP TABLE IF EXISTS "share_blocks_gallery_multi_slider_images" CASCADE;

DROP TABLE IF EXISTS "share_blocks_gallery_multi_slider" CASCADE;

DROP TABLE IF EXISTS "share_blocks_gallery_full_width" CASCADE;

DROP TABLE IF EXISTS "share_blocks_gallery" CASCADE;

DROP TABLE IF EXISTS "share_blocks_hero_hero_slideshow" CASCADE;

DROP TABLE IF EXISTS "share_blocks_hero_main_buttons" CASCADE;

DROP TABLE IF EXISTS "share_blocks_hero_secondary_buttons" CASCADE;

DROP TABLE IF EXISTS "share_blocks_hero" CASCADE;

DROP TABLE IF EXISTS "share_blocks_highlighted_text_buttons" CASCADE;

DROP TABLE IF EXISTS "share_blocks_highlighted_text" CASCADE;

DROP TABLE IF EXISTS "share_blocks_img_content_person_bullets" CASCADE;

DROP TABLE IF EXISTS "share_blocks_img_content_accordion_accordion_items" CASCADE;

DROP TABLE IF EXISTS "share_blocks_img_content" CASCADE;

DROP TABLE IF EXISTS "share_blocks_images_grid_images" CASCADE;

DROP TABLE IF EXISTS "share_blocks_images_grid" CASCADE;

DROP TABLE IF EXISTS "share_blocks_image_pins_pins" CASCADE;

DROP TABLE IF EXISTS "share_blocks_image_pins" CASCADE;

DROP TABLE IF EXISTS "share_blocks_map_pins" CASCADE;

DROP TABLE IF EXISTS "share_blocks_map" CASCADE;

DROP TABLE IF EXISTS "share_blocks_news_snippets" CASCADE;

DROP TABLE IF EXISTS "share_blocks_numbers_numbers" CASCADE;

DROP TABLE IF EXISTS "share_blocks_numbers" CASCADE;

DROP TABLE IF EXISTS "share_blocks_timeline_timeline" CASCADE;

DROP TABLE IF EXISTS "share_blocks_timeline" CASCADE;

DROP TABLE IF EXISTS "share_blocks_our_projects_projects" CASCADE;

DROP TABLE IF EXISTS "share_blocks_our_projects" CASCADE;

DROP TABLE IF EXISTS "share_blocks_prices" CASCADE;
`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Down migration not needed - this is part of a larger migration split
}
