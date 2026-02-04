import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
DO $$ BEGIN
    DROP TYPE "public"."enum_roles_permissions_flats";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_roles_permissions_flat_detail_page";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_roles_permissions_sectors";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_roles_permissions_floors";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_roles_permissions_news";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_roles_permissions_documents";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_roles_permissions_share";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_projects_level_stoone";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_projects_cron_settings_schedule";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_projects_cron_settings_status";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_banner_banner_settings_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_banner_banner_settings_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_banner_banner_settings_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_banner_flat_form";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_banner_banner_variant";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_banner_banner_content_position";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_banner_banner_button_type";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_banner_banner_button_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_banner_banner_button_relation";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_benefits_benefits_settings_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_benefits_benefits_settings_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_benefits_benefits_settings_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_contact_contact_settings_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_contact_contact_settings_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_contact_contact_settings_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_contact_variant";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_contact_contact_form_position";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_content_content_settings_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_content_content_settings_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_content_content_settings_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_content_content_settings_link_type";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_content_content_settings_link_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_content_content_settings_link_relation";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_content_content_settings_link_appearance";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_content_content_position";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_features_features_with_title_feature_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_features_features_with_title_feature_bg";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_features_features_with_image_feature_bg";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_bg";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_features_features_settings_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_features_features_settings_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_features_features_settings_background";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_features_features_settings_link_type";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_features_features_settings_link_icon";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_features_features_settings_link_relation";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_features_features_settings_link_appearance";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_features_features_variant";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_form_form_settings_padding_top";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    DROP TYPE "public"."enum_pages_blocks_form_form_settings_padding_bottom";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;
`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Down migration not needed - this is part of a larger migration split
}
