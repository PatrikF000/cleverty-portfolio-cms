import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_bg";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_features_features_with_image_feature_bg";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_bg";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_features_features_settings_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_features_features_settings_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_features_features_settings_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_features_features_settings_link_type";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_features_features_settings_link_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_features_features_settings_link_relation";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_features_features_settings_link_appearance";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_features_features_variant";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_form_form_settings_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_form_form_settings_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_form_form_settings_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_form_layout_variant";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_form_form_position";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_type";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_relation";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_flats_snippets_flats_set_link_appearance";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_gallery_simple_slider_slide_width";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_gallery_multi_slider_images_slide_width";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_gallery_gallery_settings_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_gallery_gallery_settings_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_gallery_gallery_settings_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_gallery_controls_type";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_gallery_gallery_variant";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_gallery_link_type";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_gallery_link_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_gallery_link_relation";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_gallery_link_appearance";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_highlighted_text_buttons_button_type";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_highlighted_text_buttons_button_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_highlighted_text_buttons_button_relation";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_highlighted_text_buttons_button_appearance";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_highlighted_text_high_set_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_highlighted_text_high_set_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_highlighted_text_high_set_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_highlighted_text_text_size";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_img_content_person_bullets_feature_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_img_content_person_bullets_feature_bg";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_img_content_img_cont_set_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_img_content_img_cont_set_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_img_content_img_cont_set_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_flDet_blocks_img_content_content_type";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;
`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Down migration not needed - this is part of a larger migration split
}
