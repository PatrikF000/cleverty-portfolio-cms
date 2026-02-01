import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "share_blocks_contact_contact_form_config_disposition_options" CASCADE;
  DROP TABLE "share_blocks_form_form_cfg_flat_disposition_options" CASCADE;
  DROP TABLE "pages_blocks_contact_contact_form_config_disposition_options" CASCADE;
  DROP TABLE "pages_blocks_form_form_cfg_flat_disposition_options" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_contact_form_config_disposition_options" CASCADE;
  DROP TABLE "_pages_v_blocks_form_form_cfg_flat_disposition_options" CASCADE;
  DROP TABLE "flDet_blocks_contact_contact_form_config_disposition_options" CASCADE;
  DROP TABLE "flDet_blocks_form_form_cfg_flat_disposition_options" CASCADE;
  DROP TABLE "newsDet_blocks_contact_contact_form_config_disposition_options" CASCADE;
  DROP TABLE "newsDet_blocks_form_form_cfg_flat_disposition_options" CASCADE;
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_label";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_placeholder";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_validation_min_length";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_validation_min_length_message";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_validation_required_message";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_label";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_placeholder";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_validation_min_length";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_validation_min_length_message";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_validation_required_message";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_phone_label";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_phone_placeholder";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_phone_validation_required_message";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_email_label";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_email_placeholder";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_email_validation_invalid_message";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_email_validation_required_message";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_label";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_placeholder";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_validation_required_message";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_message_label";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_message_placeholder";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_message_validation_required_message";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_bottom_content";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_label";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_content";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_validation_required_message";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_submit_button";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_success_title";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_success_message";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_error_title";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_error_message";
  ALTER TABLE "share_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_error_fallback_message";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_label";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_placeholder";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_validation_min_length";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_validation_min_length_message";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_validation_required_message";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_label";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_placeholder";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_validation_min_length";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_validation_min_length_message";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_validation_required_message";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_phone_label";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_phone_placeholder";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_phone_validation_required_message";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_email_label";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_email_placeholder";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_email_validation_invalid_message";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_email_validation_required_message";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_message_label";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_message_placeholder";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_message_validation_required_message";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_flat_disposition_label";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_flat_disposition_placeholder";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_flat_disposition_validation_required_message";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_bottom_content";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_label";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_content";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_validation_required_message";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_label";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_content";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_validation_required_message";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_submit_button";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_success_title";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_success_message";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_error_title";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_error_message";
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_error_fallback_message";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_label";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_placeholder";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_validation_min_length";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_validation_min_length_message";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_validation_required_message";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_label";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_placeholder";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_validation_min_length";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_validation_min_length_message";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_validation_required_message";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_phone_label";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_phone_placeholder";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_phone_validation_required_message";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_email_label";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_email_placeholder";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_email_validation_invalid_message";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_email_validation_required_message";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_label";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_placeholder";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_validation_required_message";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_message_label";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_message_placeholder";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_message_validation_required_message";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_bottom_content";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_label";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_content";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_validation_required_message";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_submit_button";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_success_title";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_success_message";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_error_title";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_error_message";
  ALTER TABLE "pages_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_error_fallback_message";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_label";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_placeholder";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_validation_min_length";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_validation_min_length_message";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_validation_required_message";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_label";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_placeholder";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_validation_min_length";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_validation_min_length_message";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_validation_required_message";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_phone_label";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_phone_placeholder";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_phone_validation_required_message";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_email_label";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_email_placeholder";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_email_validation_invalid_message";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_email_validation_required_message";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_message_label";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_message_placeholder";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_message_validation_required_message";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_flat_disposition_label";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_flat_disposition_placeholder";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_flat_disposition_validation_required_message";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_bottom_content";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_label";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_content";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_validation_required_message";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_label";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_content";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_validation_required_message";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_submit_button";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_success_title";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_success_message";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_error_title";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_error_message";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_error_fallback_message";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_label";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_placeholder";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_validation_min_length";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_validation_min_length_message";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_validation_required_message";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_label";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_placeholder";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_validation_min_length";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_validation_min_length_message";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_validation_required_message";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_phone_label";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_phone_placeholder";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_phone_validation_required_message";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_email_label";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_email_placeholder";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_email_validation_invalid_message";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_email_validation_required_message";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_label";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_placeholder";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_validation_required_message";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_message_label";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_message_placeholder";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_message_validation_required_message";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_bottom_content";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_label";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_content";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_validation_required_message";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_submit_button";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_success_title";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_success_message";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_error_title";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_error_message";
  ALTER TABLE "_pages_v_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_error_fallback_message";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_label";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_placeholder";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_validation_min_length";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_validation_min_length_message";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_validation_required_message";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_label";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_placeholder";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_validation_min_length";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_validation_min_length_message";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_validation_required_message";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_phone_label";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_phone_placeholder";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_phone_validation_required_message";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_email_label";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_email_placeholder";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_email_validation_invalid_message";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_email_validation_required_message";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_message_label";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_message_placeholder";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_message_validation_required_message";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_flat_disposition_label";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_flat_disposition_placeholder";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_flat_disposition_validation_required_message";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_bottom_content";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_label";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_content";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_validation_required_message";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_label";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_content";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_validation_required_message";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_submit_button";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_success_title";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_success_message";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_error_title";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_error_message";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_error_fallback_message";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_label";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_placeholder";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_validation_min_length";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_validation_min_length_message";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_validation_required_message";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_label";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_placeholder";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_validation_min_length";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_validation_min_length_message";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_validation_required_message";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_phone_label";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_phone_placeholder";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_phone_validation_required_message";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_email_label";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_email_placeholder";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_email_validation_invalid_message";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_email_validation_required_message";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_label";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_placeholder";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_validation_required_message";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_message_label";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_message_placeholder";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_message_validation_required_message";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_bottom_content";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_label";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_content";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_validation_required_message";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_submit_button";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_success_title";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_success_message";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_error_title";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_error_message";
  ALTER TABLE "flDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_error_fallback_message";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_label";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_placeholder";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_validation_min_length";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_validation_min_length_message";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_validation_required_message";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_label";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_placeholder";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_validation_min_length";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_validation_min_length_message";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_validation_required_message";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_phone_label";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_phone_placeholder";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_phone_validation_required_message";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_email_label";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_email_placeholder";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_email_validation_invalid_message";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_email_validation_required_message";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_message_label";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_message_placeholder";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_message_validation_required_message";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_flat_disposition_label";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_flat_disposition_placeholder";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_flat_disposition_validation_required_message";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_bottom_content";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_label";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_content";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_validation_required_message";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_label";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_content";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_validation_required_message";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_submit_button";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_success_title";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_success_message";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_error_title";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_error_message";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_error_fallback_message";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_label";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_placeholder";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_validation_min_length";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_validation_min_length_message";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_first_name_validation_required_message";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_label";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_placeholder";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_validation_min_length";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_validation_min_length_message";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_last_name_validation_required_message";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_phone_label";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_phone_placeholder";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_phone_validation_required_message";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_email_label";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_email_placeholder";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_email_validation_invalid_message";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_email_validation_required_message";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_label";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_placeholder";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_disposition_validation_required_message";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_message_label";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_message_placeholder";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_message_validation_required_message";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_bottom_content";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_label";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_content";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_checkbox_newsletter_validation_required_message";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_submit_button";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_success_title";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_success_message";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_error_title";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_error_message";
  ALTER TABLE "newsDet_blocks_contact" DROP COLUMN IF EXISTS "contact_form_config_toast_error_fallback_message";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_label";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_placeholder";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_validation_min_length";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_validation_min_length_message";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_first_name_validation_required_message";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_label";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_placeholder";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_validation_min_length";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_validation_min_length_message";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_last_name_validation_required_message";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_phone_label";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_phone_placeholder";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_phone_validation_required_message";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_email_label";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_email_placeholder";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_email_validation_invalid_message";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_email_validation_required_message";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_message_label";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_message_placeholder";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_message_validation_required_message";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_flat_disposition_label";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_flat_disposition_placeholder";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_flat_disposition_validation_required_message";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_bottom_content";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_label";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_content";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_validation_required_message";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_label";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_content";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_checkbox_with_text_newsletter_validation_required_message";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_submit_button";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_success_title";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_success_message";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_error_title";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_error_message";
  ALTER TABLE "newsDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_toast_error_fallback_message";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "share_blocks_contact_contact_form_config_disposition_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "share_blocks_form_form_cfg_flat_disposition_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_contact_contact_form_config_disposition_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_form_form_cfg_flat_disposition_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_contact_contact_form_config_disposition_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_form_form_cfg_flat_disposition_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_contact_contact_form_config_disposition_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "flDet_blocks_form_form_cfg_flat_disposition_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_contact_contact_form_config_disposition_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "newsDet_blocks_form_form_cfg_flat_disposition_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_first_name_label" varchar DEFAULT 'First Name';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_first_name_placeholder" varchar DEFAULT 'Enter your first name';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_first_name_validation_min_length" numeric DEFAULT 2;
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_first_name_validation_min_length_message" varchar DEFAULT 'First Name must be at least 2 characters long';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_first_name_validation_required_message" varchar DEFAULT 'First Name is required';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_last_name_label" varchar DEFAULT 'Last Name';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_last_name_placeholder" varchar DEFAULT 'Enter your last name';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_last_name_validation_min_length" numeric DEFAULT 2;
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_last_name_validation_min_length_message" varchar DEFAULT 'Last Name must be at least 2 characters long';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_last_name_validation_required_message" varchar DEFAULT 'Last Name is required';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_phone_label" varchar DEFAULT 'Phone';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_phone_placeholder" varchar DEFAULT 'Enter your phone number';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_phone_validation_required_message" varchar DEFAULT 'Phone is required';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_email_label" varchar DEFAULT 'Email';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_email_placeholder" varchar DEFAULT 'Enter your email address';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_email_validation_invalid_message" varchar DEFAULT 'Please enter a valid email address';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_email_validation_required_message" varchar DEFAULT 'Email is required';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_disposition_label" varchar DEFAULT 'Flat Disposition';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_disposition_placeholder" varchar DEFAULT 'Select flat disposition';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_disposition_validation_required_message" varchar DEFAULT 'Please select a flat disposition';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_message_label" varchar DEFAULT 'Message';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_message_placeholder" varchar DEFAULT 'Enter your message';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_message_validation_required_message" varchar DEFAULT 'Message is required';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_bottom_content" jsonb;
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_label" varchar DEFAULT 'I agree to the terms and conditions';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_content" jsonb;
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_submit_button" varchar DEFAULT 'Send Message';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_toast_success_title" varchar DEFAULT 'Message Sent!';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_toast_success_message" varchar DEFAULT 'Thank you for your message. We will get back to you soon.';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_toast_error_title" varchar DEFAULT 'Error';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_toast_error_message" varchar DEFAULT 'There was an error sending your message. Please try again.';
  ALTER TABLE "share_blocks_contact" ADD COLUMN "contact_form_config_toast_error_fallback_message" varchar DEFAULT 'An unexpected error occurred. Please try again later.';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_first_name_label" varchar DEFAULT 'First Name';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_first_name_placeholder" varchar DEFAULT 'Enter your first name';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_first_name_validation_min_length" numeric DEFAULT 2;
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_first_name_validation_min_length_message" varchar DEFAULT 'First name must be at least 2 characters long';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_first_name_validation_required_message" varchar DEFAULT 'First name is required';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_last_name_label" varchar DEFAULT 'Last Name';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_last_name_placeholder" varchar DEFAULT 'Enter your last name';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_last_name_validation_min_length" numeric DEFAULT 2;
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_last_name_validation_min_length_message" varchar DEFAULT 'Last Name must be at least 2 characters long';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_last_name_validation_required_message" varchar DEFAULT 'Last Name is required';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_phone_label" varchar DEFAULT 'Phone';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_phone_placeholder" varchar DEFAULT 'Enter your phone number';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_phone_validation_required_message" varchar DEFAULT 'Phone is required';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_email_label" varchar DEFAULT 'Email';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_email_placeholder" varchar DEFAULT 'Enter your email address';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_email_validation_invalid_message" varchar DEFAULT 'Please enter a valid email address';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_email_validation_required_message" varchar DEFAULT 'Email is required';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_message_label" varchar DEFAULT 'Message';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_message_placeholder" varchar DEFAULT 'Enter your message';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_message_validation_required_message" varchar DEFAULT 'Message is required';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_flat_disposition_label" varchar DEFAULT 'Flat Disposition';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_flat_disposition_placeholder" varchar DEFAULT 'Select flat disposition';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_flat_disposition_validation_required_message" varchar DEFAULT 'Please select a flat disposition';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_bottom_content" jsonb;
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_label" varchar DEFAULT '';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_content" jsonb;
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_label" varchar DEFAULT 'I agree to receive newsletters';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_content" jsonb;
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_submit_button" varchar DEFAULT 'Send Message';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_toast_success_title" varchar DEFAULT 'Message Sent!';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_toast_success_message" varchar DEFAULT 'Thank you for your message. We will get back to you soon.';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_toast_error_title" varchar DEFAULT 'Error';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_toast_error_message" varchar DEFAULT 'There was an error sending your message. Please try again.';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_toast_error_fallback_message" varchar DEFAULT 'An unexpected error occurred. Please try again later.';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_first_name_label" varchar DEFAULT 'First Name';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_first_name_placeholder" varchar DEFAULT 'Enter your first name';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_first_name_validation_min_length" numeric DEFAULT 2;
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_first_name_validation_min_length_message" varchar DEFAULT 'First Name must be at least 2 characters long';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_first_name_validation_required_message" varchar DEFAULT 'First Name is required';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_last_name_label" varchar DEFAULT 'Last Name';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_last_name_placeholder" varchar DEFAULT 'Enter your last name';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_last_name_validation_min_length" numeric DEFAULT 2;
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_last_name_validation_min_length_message" varchar DEFAULT 'Last Name must be at least 2 characters long';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_last_name_validation_required_message" varchar DEFAULT 'Last Name is required';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_phone_label" varchar DEFAULT 'Phone';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_phone_placeholder" varchar DEFAULT 'Enter your phone number';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_phone_validation_required_message" varchar DEFAULT 'Phone is required';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_email_label" varchar DEFAULT 'Email';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_email_placeholder" varchar DEFAULT 'Enter your email address';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_email_validation_invalid_message" varchar DEFAULT 'Please enter a valid email address';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_email_validation_required_message" varchar DEFAULT 'Email is required';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_disposition_label" varchar DEFAULT 'Flat Disposition';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_disposition_placeholder" varchar DEFAULT 'Select flat disposition';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_disposition_validation_required_message" varchar DEFAULT 'Please select a flat disposition';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_message_label" varchar DEFAULT 'Message';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_message_placeholder" varchar DEFAULT 'Enter your message';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_message_validation_required_message" varchar DEFAULT 'Message is required';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_bottom_content" jsonb;
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_label" varchar DEFAULT 'I agree to the terms and conditions';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_content" jsonb;
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_submit_button" varchar DEFAULT 'Send Message';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_toast_success_title" varchar DEFAULT 'Message Sent!';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_toast_success_message" varchar DEFAULT 'Thank you for your message. We will get back to you soon.';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_toast_error_title" varchar DEFAULT 'Error';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_toast_error_message" varchar DEFAULT 'There was an error sending your message. Please try again.';
  ALTER TABLE "pages_blocks_contact" ADD COLUMN "contact_form_config_toast_error_fallback_message" varchar DEFAULT 'An unexpected error occurred. Please try again later.';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_first_name_label" varchar DEFAULT 'First Name';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_first_name_placeholder" varchar DEFAULT 'Enter your first name';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_first_name_validation_min_length" numeric DEFAULT 2;
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_first_name_validation_min_length_message" varchar DEFAULT 'First name must be at least 2 characters long';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_first_name_validation_required_message" varchar DEFAULT 'First name is required';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_last_name_label" varchar DEFAULT 'Last Name';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_last_name_placeholder" varchar DEFAULT 'Enter your last name';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_last_name_validation_min_length" numeric DEFAULT 2;
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_last_name_validation_min_length_message" varchar DEFAULT 'Last Name must be at least 2 characters long';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_last_name_validation_required_message" varchar DEFAULT 'Last Name is required';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_phone_label" varchar DEFAULT 'Phone';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_phone_placeholder" varchar DEFAULT 'Enter your phone number';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_phone_validation_required_message" varchar DEFAULT 'Phone is required';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_email_label" varchar DEFAULT 'Email';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_email_placeholder" varchar DEFAULT 'Enter your email address';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_email_validation_invalid_message" varchar DEFAULT 'Please enter a valid email address';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_email_validation_required_message" varchar DEFAULT 'Email is required';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_message_label" varchar DEFAULT 'Message';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_message_placeholder" varchar DEFAULT 'Enter your message';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_message_validation_required_message" varchar DEFAULT 'Message is required';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_flat_disposition_label" varchar DEFAULT 'Flat Disposition';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_flat_disposition_placeholder" varchar DEFAULT 'Select flat disposition';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_flat_disposition_validation_required_message" varchar DEFAULT 'Please select a flat disposition';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_bottom_content" jsonb;
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_label" varchar DEFAULT '';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_content" jsonb;
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_label" varchar DEFAULT 'I agree to receive newsletters';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_content" jsonb;
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_submit_button" varchar DEFAULT 'Send Message';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_toast_success_title" varchar DEFAULT 'Message Sent!';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_toast_success_message" varchar DEFAULT 'Thank you for your message. We will get back to you soon.';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_toast_error_title" varchar DEFAULT 'Error';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_toast_error_message" varchar DEFAULT 'There was an error sending your message. Please try again.';
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_toast_error_fallback_message" varchar DEFAULT 'An unexpected error occurred. Please try again later.';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_first_name_label" varchar DEFAULT 'First Name';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_first_name_placeholder" varchar DEFAULT 'Enter your first name';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_first_name_validation_min_length" numeric DEFAULT 2;
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_first_name_validation_min_length_message" varchar DEFAULT 'First Name must be at least 2 characters long';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_first_name_validation_required_message" varchar DEFAULT 'First Name is required';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_last_name_label" varchar DEFAULT 'Last Name';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_last_name_placeholder" varchar DEFAULT 'Enter your last name';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_last_name_validation_min_length" numeric DEFAULT 2;
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_last_name_validation_min_length_message" varchar DEFAULT 'Last Name must be at least 2 characters long';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_last_name_validation_required_message" varchar DEFAULT 'Last Name is required';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_phone_label" varchar DEFAULT 'Phone';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_phone_placeholder" varchar DEFAULT 'Enter your phone number';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_phone_validation_required_message" varchar DEFAULT 'Phone is required';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_email_label" varchar DEFAULT 'Email';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_email_placeholder" varchar DEFAULT 'Enter your email address';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_email_validation_invalid_message" varchar DEFAULT 'Please enter a valid email address';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_email_validation_required_message" varchar DEFAULT 'Email is required';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_disposition_label" varchar DEFAULT 'Flat Disposition';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_disposition_placeholder" varchar DEFAULT 'Select flat disposition';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_disposition_validation_required_message" varchar DEFAULT 'Please select a flat disposition';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_message_label" varchar DEFAULT 'Message';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_message_placeholder" varchar DEFAULT 'Enter your message';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_message_validation_required_message" varchar DEFAULT 'Message is required';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_bottom_content" jsonb;
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_label" varchar DEFAULT 'I agree to the terms and conditions';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_content" jsonb;
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_submit_button" varchar DEFAULT 'Send Message';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_toast_success_title" varchar DEFAULT 'Message Sent!';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_toast_success_message" varchar DEFAULT 'Thank you for your message. We will get back to you soon.';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_toast_error_title" varchar DEFAULT 'Error';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_toast_error_message" varchar DEFAULT 'There was an error sending your message. Please try again.';
  ALTER TABLE "_pages_v_blocks_contact" ADD COLUMN "contact_form_config_toast_error_fallback_message" varchar DEFAULT 'An unexpected error occurred. Please try again later.';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_first_name_label" varchar DEFAULT 'First Name';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_first_name_placeholder" varchar DEFAULT 'Enter your first name';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_first_name_validation_min_length" numeric DEFAULT 2;
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_first_name_validation_min_length_message" varchar DEFAULT 'First name must be at least 2 characters long';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_first_name_validation_required_message" varchar DEFAULT 'First name is required';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_last_name_label" varchar DEFAULT 'Last Name';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_last_name_placeholder" varchar DEFAULT 'Enter your last name';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_last_name_validation_min_length" numeric DEFAULT 2;
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_last_name_validation_min_length_message" varchar DEFAULT 'Last Name must be at least 2 characters long';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_last_name_validation_required_message" varchar DEFAULT 'Last Name is required';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_phone_label" varchar DEFAULT 'Phone';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_phone_placeholder" varchar DEFAULT 'Enter your phone number';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_phone_validation_required_message" varchar DEFAULT 'Phone is required';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_email_label" varchar DEFAULT 'Email';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_email_placeholder" varchar DEFAULT 'Enter your email address';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_email_validation_invalid_message" varchar DEFAULT 'Please enter a valid email address';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_email_validation_required_message" varchar DEFAULT 'Email is required';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_message_label" varchar DEFAULT 'Message';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_message_placeholder" varchar DEFAULT 'Enter your message';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_message_validation_required_message" varchar DEFAULT 'Message is required';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_flat_disposition_label" varchar DEFAULT 'Flat Disposition';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_flat_disposition_placeholder" varchar DEFAULT 'Select flat disposition';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_flat_disposition_validation_required_message" varchar DEFAULT 'Please select a flat disposition';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_bottom_content" jsonb;
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_label" varchar DEFAULT '';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_content" jsonb;
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_label" varchar DEFAULT 'I agree to receive newsletters';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_content" jsonb;
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_submit_button" varchar DEFAULT 'Send Message';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_toast_success_title" varchar DEFAULT 'Message Sent!';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_toast_success_message" varchar DEFAULT 'Thank you for your message. We will get back to you soon.';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_toast_error_title" varchar DEFAULT 'Error';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_toast_error_message" varchar DEFAULT 'There was an error sending your message. Please try again.';
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_toast_error_fallback_message" varchar DEFAULT 'An unexpected error occurred. Please try again later.';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_first_name_label" varchar DEFAULT 'First Name';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_first_name_placeholder" varchar DEFAULT 'Enter your first name';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_first_name_validation_min_length" numeric DEFAULT 2;
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_first_name_validation_min_length_message" varchar DEFAULT 'First Name must be at least 2 characters long';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_first_name_validation_required_message" varchar DEFAULT 'First Name is required';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_last_name_label" varchar DEFAULT 'Last Name';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_last_name_placeholder" varchar DEFAULT 'Enter your last name';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_last_name_validation_min_length" numeric DEFAULT 2;
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_last_name_validation_min_length_message" varchar DEFAULT 'Last Name must be at least 2 characters long';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_last_name_validation_required_message" varchar DEFAULT 'Last Name is required';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_phone_label" varchar DEFAULT 'Phone';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_phone_placeholder" varchar DEFAULT 'Enter your phone number';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_phone_validation_required_message" varchar DEFAULT 'Phone is required';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_email_label" varchar DEFAULT 'Email';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_email_placeholder" varchar DEFAULT 'Enter your email address';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_email_validation_invalid_message" varchar DEFAULT 'Please enter a valid email address';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_email_validation_required_message" varchar DEFAULT 'Email is required';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_disposition_label" varchar DEFAULT 'Flat Disposition';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_disposition_placeholder" varchar DEFAULT 'Select flat disposition';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_disposition_validation_required_message" varchar DEFAULT 'Please select a flat disposition';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_message_label" varchar DEFAULT 'Message';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_message_placeholder" varchar DEFAULT 'Enter your message';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_message_validation_required_message" varchar DEFAULT 'Message is required';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_bottom_content" jsonb;
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_label" varchar DEFAULT 'I agree to the terms and conditions';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_content" jsonb;
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_submit_button" varchar DEFAULT 'Send Message';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_toast_success_title" varchar DEFAULT 'Message Sent!';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_toast_success_message" varchar DEFAULT 'Thank you for your message. We will get back to you soon.';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_toast_error_title" varchar DEFAULT 'Error';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_toast_error_message" varchar DEFAULT 'There was an error sending your message. Please try again.';
  ALTER TABLE "flDet_blocks_contact" ADD COLUMN "contact_form_config_toast_error_fallback_message" varchar DEFAULT 'An unexpected error occurred. Please try again later.';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_first_name_label" varchar DEFAULT 'First Name';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_first_name_placeholder" varchar DEFAULT 'Enter your first name';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_first_name_validation_min_length" numeric DEFAULT 2;
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_first_name_validation_min_length_message" varchar DEFAULT 'First name must be at least 2 characters long';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_first_name_validation_required_message" varchar DEFAULT 'First name is required';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_last_name_label" varchar DEFAULT 'Last Name';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_last_name_placeholder" varchar DEFAULT 'Enter your last name';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_last_name_validation_min_length" numeric DEFAULT 2;
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_last_name_validation_min_length_message" varchar DEFAULT 'Last Name must be at least 2 characters long';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_last_name_validation_required_message" varchar DEFAULT 'Last Name is required';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_phone_label" varchar DEFAULT 'Phone';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_phone_placeholder" varchar DEFAULT 'Enter your phone number';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_phone_validation_required_message" varchar DEFAULT 'Phone is required';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_email_label" varchar DEFAULT 'Email';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_email_placeholder" varchar DEFAULT 'Enter your email address';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_email_validation_invalid_message" varchar DEFAULT 'Please enter a valid email address';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_email_validation_required_message" varchar DEFAULT 'Email is required';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_message_label" varchar DEFAULT 'Message';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_message_placeholder" varchar DEFAULT 'Enter your message';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_message_validation_required_message" varchar DEFAULT 'Message is required';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_flat_disposition_label" varchar DEFAULT 'Flat Disposition';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_flat_disposition_placeholder" varchar DEFAULT 'Select flat disposition';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_flat_disposition_validation_required_message" varchar DEFAULT 'Please select a flat disposition';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_bottom_content" jsonb;
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_label" varchar DEFAULT '';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_content" jsonb;
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_label" varchar DEFAULT 'I agree to receive newsletters';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_content" jsonb;
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_submit_button" varchar DEFAULT 'Send Message';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_toast_success_title" varchar DEFAULT 'Message Sent!';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_toast_success_message" varchar DEFAULT 'Thank you for your message. We will get back to you soon.';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_toast_error_title" varchar DEFAULT 'Error';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_toast_error_message" varchar DEFAULT 'There was an error sending your message. Please try again.';
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_toast_error_fallback_message" varchar DEFAULT 'An unexpected error occurred. Please try again later.';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_first_name_label" varchar DEFAULT 'First Name';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_first_name_placeholder" varchar DEFAULT 'Enter your first name';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_first_name_validation_min_length" numeric DEFAULT 2;
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_first_name_validation_min_length_message" varchar DEFAULT 'First Name must be at least 2 characters long';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_first_name_validation_required_message" varchar DEFAULT 'First Name is required';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_last_name_label" varchar DEFAULT 'Last Name';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_last_name_placeholder" varchar DEFAULT 'Enter your last name';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_last_name_validation_min_length" numeric DEFAULT 2;
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_last_name_validation_min_length_message" varchar DEFAULT 'Last Name must be at least 2 characters long';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_last_name_validation_required_message" varchar DEFAULT 'Last Name is required';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_phone_label" varchar DEFAULT 'Phone';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_phone_placeholder" varchar DEFAULT 'Enter your phone number';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_phone_validation_required_message" varchar DEFAULT 'Phone is required';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_email_label" varchar DEFAULT 'Email';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_email_placeholder" varchar DEFAULT 'Enter your email address';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_email_validation_invalid_message" varchar DEFAULT 'Please enter a valid email address';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_email_validation_required_message" varchar DEFAULT 'Email is required';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_disposition_label" varchar DEFAULT 'Flat Disposition';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_disposition_placeholder" varchar DEFAULT 'Select flat disposition';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_disposition_validation_required_message" varchar DEFAULT 'Please select a flat disposition';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_message_label" varchar DEFAULT 'Message';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_message_placeholder" varchar DEFAULT 'Enter your message';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_message_validation_required_message" varchar DEFAULT 'Message is required';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_bottom_content" jsonb;
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_label" varchar DEFAULT 'I agree to the terms and conditions';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_content" jsonb;
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_checkbox_newsletter_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_submit_button" varchar DEFAULT 'Send Message';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_toast_success_title" varchar DEFAULT 'Message Sent!';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_toast_success_message" varchar DEFAULT 'Thank you for your message. We will get back to you soon.';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_toast_error_title" varchar DEFAULT 'Error';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_toast_error_message" varchar DEFAULT 'There was an error sending your message. Please try again.';
  ALTER TABLE "newsDet_blocks_contact" ADD COLUMN "contact_form_config_toast_error_fallback_message" varchar DEFAULT 'An unexpected error occurred. Please try again later.';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_first_name_label" varchar DEFAULT 'First Name';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_first_name_placeholder" varchar DEFAULT 'Enter your first name';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_first_name_validation_min_length" numeric DEFAULT 2;
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_first_name_validation_min_length_message" varchar DEFAULT 'First name must be at least 2 characters long';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_first_name_validation_required_message" varchar DEFAULT 'First name is required';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_last_name_label" varchar DEFAULT 'Last Name';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_last_name_placeholder" varchar DEFAULT 'Enter your last name';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_last_name_validation_min_length" numeric DEFAULT 2;
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_last_name_validation_min_length_message" varchar DEFAULT 'Last Name must be at least 2 characters long';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_last_name_validation_required_message" varchar DEFAULT 'Last Name is required';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_phone_label" varchar DEFAULT 'Phone';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_phone_placeholder" varchar DEFAULT 'Enter your phone number';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_phone_validation_required_message" varchar DEFAULT 'Phone is required';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_email_label" varchar DEFAULT 'Email';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_email_placeholder" varchar DEFAULT 'Enter your email address';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_email_validation_invalid_message" varchar DEFAULT 'Please enter a valid email address';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_email_validation_required_message" varchar DEFAULT 'Email is required';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_message_label" varchar DEFAULT 'Message';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_message_placeholder" varchar DEFAULT 'Enter your message';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_message_validation_required_message" varchar DEFAULT 'Message is required';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_flat_disposition_label" varchar DEFAULT 'Flat Disposition';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_flat_disposition_placeholder" varchar DEFAULT 'Select flat disposition';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_flat_disposition_validation_required_message" varchar DEFAULT 'Please select a flat disposition';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_bottom_content" jsonb;
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_label" varchar DEFAULT '';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_content" jsonb;
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_label" varchar DEFAULT 'I agree to receive newsletters';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_content" jsonb;
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_checkbox_with_text_newsletter_validation_required_message" varchar DEFAULT 'You must agree to the terms and conditions';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_submit_button" varchar DEFAULT 'Send Message';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_toast_success_title" varchar DEFAULT 'Message Sent!';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_toast_success_message" varchar DEFAULT 'Thank you for your message. We will get back to you soon.';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_toast_error_title" varchar DEFAULT 'Error';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_toast_error_message" varchar DEFAULT 'There was an error sending your message. Please try again.';
  ALTER TABLE "newsDet_blocks_form" ADD COLUMN "form_cfg_toast_error_fallback_message" varchar DEFAULT 'An unexpected error occurred. Please try again later.';
  DO $$ BEGIN
   ALTER TABLE "share_blocks_contact_contact_form_config_disposition_options" ADD CONSTRAINT "share_blocks_contact_contact_form_config_disposition_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "share_blocks_form_form_cfg_flat_disposition_options" ADD CONSTRAINT "share_blocks_form_form_cfg_flat_disposition_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."share_blocks_form"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_contact_contact_form_config_disposition_options" ADD CONSTRAINT "pages_blocks_contact_contact_form_config_disposition_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form_form_cfg_flat_disposition_options" ADD CONSTRAINT "pages_blocks_form_form_cfg_flat_disposition_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_contact_contact_form_config_disposition_options" ADD CONSTRAINT "_pages_v_blocks_contact_contact_form_config_disposition_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form_form_cfg_flat_disposition_options" ADD CONSTRAINT "_pages_v_blocks_form_form_cfg_flat_disposition_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_form"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_contact_contact_form_config_disposition_options" ADD CONSTRAINT "flDet_blocks_contact_contact_form_config_disposition_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "flDet_blocks_form_form_cfg_flat_disposition_options" ADD CONSTRAINT "flDet_blocks_form_form_cfg_flat_disposition_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."flDet_blocks_form"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_contact_contact_form_config_disposition_options" ADD CONSTRAINT "newsDet_blocks_contact_contact_form_config_disposition_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "newsDet_blocks_form_form_cfg_flat_disposition_options" ADD CONSTRAINT "newsDet_blocks_form_form_cfg_flat_disposition_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."newsDet_blocks_form"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "share_blocks_contact_contact_form_config_disposition_options_order_idx" ON "share_blocks_contact_contact_form_config_disposition_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_contact_contact_form_config_disposition_options_parent_id_idx" ON "share_blocks_contact_contact_form_config_disposition_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_contact_contact_form_config_disposition_options_locale_idx" ON "share_blocks_contact_contact_form_config_disposition_options" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "share_blocks_form_form_cfg_flat_disposition_options_order_idx" ON "share_blocks_form_form_cfg_flat_disposition_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "share_blocks_form_form_cfg_flat_disposition_options_parent_id_idx" ON "share_blocks_form_form_cfg_flat_disposition_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "share_blocks_form_form_cfg_flat_disposition_options_locale_idx" ON "share_blocks_form_form_cfg_flat_disposition_options" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_contact_form_config_disposition_options_order_idx" ON "pages_blocks_contact_contact_form_config_disposition_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_contact_form_config_disposition_options_parent_id_idx" ON "pages_blocks_contact_contact_form_config_disposition_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact_contact_form_config_disposition_options_locale_idx" ON "pages_blocks_contact_contact_form_config_disposition_options" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_form_cfg_flat_disposition_options_order_idx" ON "pages_blocks_form_form_cfg_flat_disposition_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_form_cfg_flat_disposition_options_parent_id_idx" ON "pages_blocks_form_form_cfg_flat_disposition_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_form_cfg_flat_disposition_options_locale_idx" ON "pages_blocks_form_form_cfg_flat_disposition_options" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact_contact_form_config_disposition_options_order_idx" ON "_pages_v_blocks_contact_contact_form_config_disposition_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact_contact_form_config_disposition_options_parent_id_idx" ON "_pages_v_blocks_contact_contact_form_config_disposition_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact_contact_form_config_disposition_options_locale_idx" ON "_pages_v_blocks_contact_contact_form_config_disposition_options" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_form_cfg_flat_disposition_options_order_idx" ON "_pages_v_blocks_form_form_cfg_flat_disposition_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_form_cfg_flat_disposition_options_parent_id_idx" ON "_pages_v_blocks_form_form_cfg_flat_disposition_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_form_cfg_flat_disposition_options_locale_idx" ON "_pages_v_blocks_form_form_cfg_flat_disposition_options" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_contact_contact_form_config_disposition_options_order_idx" ON "flDet_blocks_contact_contact_form_config_disposition_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_contact_contact_form_config_disposition_options_parent_id_idx" ON "flDet_blocks_contact_contact_form_config_disposition_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_contact_contact_form_config_disposition_options_locale_idx" ON "flDet_blocks_contact_contact_form_config_disposition_options" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_form_form_cfg_flat_disposition_options_order_idx" ON "flDet_blocks_form_form_cfg_flat_disposition_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_form_form_cfg_flat_disposition_options_parent_id_idx" ON "flDet_blocks_form_form_cfg_flat_disposition_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "flDet_blocks_form_form_cfg_flat_disposition_options_locale_idx" ON "flDet_blocks_form_form_cfg_flat_disposition_options" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_contact_contact_form_config_disposition_options_order_idx" ON "newsDet_blocks_contact_contact_form_config_disposition_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_contact_contact_form_config_disposition_options_parent_id_idx" ON "newsDet_blocks_contact_contact_form_config_disposition_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_contact_contact_form_config_disposition_options_locale_idx" ON "newsDet_blocks_contact_contact_form_config_disposition_options" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_form_form_cfg_flat_disposition_options_order_idx" ON "newsDet_blocks_form_form_cfg_flat_disposition_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_form_form_cfg_flat_disposition_options_parent_id_idx" ON "newsDet_blocks_form_form_cfg_flat_disposition_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "newsDet_blocks_form_form_cfg_flat_disposition_options_locale_idx" ON "newsDet_blocks_form_form_cfg_flat_disposition_options" USING btree ("_locale");`)
}
