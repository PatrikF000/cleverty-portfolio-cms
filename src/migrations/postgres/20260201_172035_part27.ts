import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
DO $$ BEGIN
    DROP TYPE "public"."enum_globalfooter_bottom_links_link_type";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_globalfooter_bottom_links_link_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_globalfooter_bottom_links_link_relation";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flats_gallery_simple_slider_slide_width";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flats_gallery_multi_slider_images_slide_width";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flats_gallery_gallery_settings_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flats_gallery_gallery_settings_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flats_gallery_gallery_settings_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flats_gallery_controls_type";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flats_gallery_gallery_variant";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flats_meta_twitter_card";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flats_gallery_link_type";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flats_gallery_link_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flats_gallery_link_relation";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flats_gallery_link_appearance";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_project_global_settings_meta_twitter_card";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_type";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_relation";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_hero_main_buttons_link_appearance";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_hero_secondary_buttons_link_type";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_hero_secondary_buttons_link_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_hero_secondary_buttons_link_relation";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_hero_type";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_text_image_image_position";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_banner_banner_settings_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_banner_banner_settings_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_banner_banner_settings_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_banner_flat_form";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_banner_banner_variant";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_banner_banner_content_position";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_banner_banner_button_type";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_banner_banner_button_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_banner_banner_button_relation";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_benefits_benefits_settings_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_benefits_benefits_settings_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_benefits_benefits_settings_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_contact_contact_settings_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_contact_contact_settings_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_contact_contact_settings_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_contact_variant";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_contact_contact_form_position";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_content_content_settings_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_content_content_settings_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_content_content_settings_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_content_content_settings_link_type";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_content_content_settings_link_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_content_content_settings_link_relation";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_content_content_settings_link_appearance";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_content_content_position";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;
`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Down migration not needed - this is part of a larger migration split
}
