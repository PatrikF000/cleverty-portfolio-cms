import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_image_pins_image_pins_set_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_image_pins_image_pins_set_link_type";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_image_pins_image_pins_set_link_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_image_pins_image_pins_set_link_relation";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_image_pins_image_pins_set_link_appearance";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_image_pins_pins_variant";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_map_pins_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_map_pins_position";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_map_pins_color";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_map_map_settings_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_map_map_settings_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_map_map_settings_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_news_snippets_news_set_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_news_snippets_news_set_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_news_snippets_news_set_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_news_snippets_news_set_link_type";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_news_snippets_news_set_link_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_news_snippets_news_set_link_relation";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_news_snippets_news_set_link_appearance";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_numbers_numbers_settings_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_numbers_numbers_settings_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_numbers_numbers_settings_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_timeline_timeline_settings_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_timeline_timeline_settings_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_timeline_timeline_settings_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_our_projects_our_proj_set_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_our_projects_our_proj_set_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_our_projects_our_proj_set_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_prices_prices_settings_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_prices_prices_settings_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_prices_prices_settings_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_interactive_picker_extended_views_direct";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_step_cards_step_cards_set_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_step_cards_step_cards_set_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_step_cards_step_cards_set_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_sticky_slides_sticky_set_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_sticky_slides_sticky_set_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_sticky_slides_sticky_set_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_multi_gallery_grid_items_complex_layout";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_multi_gallery_grid_items_layout_variant";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_multi_gallery_multi_g_set_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_multi_gallery_multi_g_set_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_multi_gallery_multi_g_set_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_share_blocks_text_image_image_position";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_roles_permissions_projects";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_roles_permissions_pages";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_roles_permissions_globalheader";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_roles_permissions_globalfooter";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_roles_permissions_project_global_settings";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_roles_permissions_buildings";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;
`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Down migration not needed - this is part of a larger migration split
}
