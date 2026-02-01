import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`share_blocks_banner\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`banner_settings_anchor_id\` text,
  	\`banner_settings_padding_top\` text DEFAULT 'medium',
  	\`banner_settings_padding_bottom\` text DEFAULT 'medium',
  	\`banner_settings_has_background_image\` integer DEFAULT false,
  	\`banner_settings_background\` text DEFAULT 'light',
  	\`banner_settings_background_image_id\` integer,
  	\`banner_variant\` text DEFAULT 'small',
  	\`banner_content_position\` text DEFAULT 'center',
  	\`caption\` text,
  	\`content\` text,
  	\`banner_button_type\` text DEFAULT 'internal',
  	\`banner_button_new_tab\` integer,
  	\`banner_button_has_anchor\` integer,
  	\`banner_button_dark_button\` integer,
  	\`banner_button_icon_only\` integer DEFAULT false,
  	\`banner_button_icon_position\` text DEFAULT 'left',
  	\`banner_button_icon\` text,
  	\`banner_button_label\` text,
  	\`banner_button_relation\` text DEFAULT 'pages',
  	\`banner_button_url\` text,
  	\`banner_button_anchor_to\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`banner_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_banner_order_idx\` ON \`share_blocks_banner\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_banner_parent_id_idx\` ON \`share_blocks_banner\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_banner_path_idx\` ON \`share_blocks_banner\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_banner_locale_idx\` ON \`share_blocks_banner\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_banner_banner_settings_banner_settings_background_image_idx\` ON \`share_blocks_banner\` (\`banner_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_benefits_benefits_row_item_heading_lines\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_benefits_benefits\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_benefits_benefits_row_item_heading_lines_order_idx\` ON \`share_blocks_benefits_benefits_row_item_heading_lines\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_benefits_benefits_row_item_heading_lines_parent_id_idx\` ON \`share_blocks_benefits_benefits_row_item_heading_lines\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_benefits_benefits_row_item_heading_lines_locale_idx\` ON \`share_blocks_benefits_benefits_row_item_heading_lines\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_benefits_benefits_row_item2_heading_lines\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_benefits_benefits\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_benefits_benefits_row_item2_heading_lines_order_idx\` ON \`share_blocks_benefits_benefits_row_item2_heading_lines\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_benefits_benefits_row_item2_heading_lines_parent_id_idx\` ON \`share_blocks_benefits_benefits_row_item2_heading_lines\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_benefits_benefits_row_item2_heading_lines_locale_idx\` ON \`share_blocks_benefits_benefits_row_item2_heading_lines\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_benefits_benefits\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`row_item_image_id\` integer,
  	\`row_item_description\` text,
  	\`row_item2_image_id\` integer,
  	\`row_item2_description\` text,
  	FOREIGN KEY (\`row_item_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`row_item2_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_benefits\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_benefits_benefits_order_idx\` ON \`share_blocks_benefits_benefits\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_benefits_benefits_parent_id_idx\` ON \`share_blocks_benefits_benefits\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_benefits_benefits_locale_idx\` ON \`share_blocks_benefits_benefits\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_benefits_benefits_row_item_row_item_image_idx\` ON \`share_blocks_benefits_benefits\` (\`row_item_image_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_benefits_benefits_row_item2_row_item2_image_idx\` ON \`share_blocks_benefits_benefits\` (\`row_item2_image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_benefits\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`benefits_settings_anchor_id\` text,
  	\`benefits_settings_padding_top\` text DEFAULT 'medium',
  	\`benefits_settings_padding_bottom\` text DEFAULT 'medium',
  	\`benefits_settings_has_background_image\` integer DEFAULT false,
  	\`benefits_settings_background\` text DEFAULT 'dark',
  	\`benefits_settings_background_image_id\` integer,
  	\`show_logo\` integer DEFAULT true,
  	\`content\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`benefits_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_benefits_order_idx\` ON \`share_blocks_benefits\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_benefits_parent_id_idx\` ON \`share_blocks_benefits\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_benefits_path_idx\` ON \`share_blocks_benefits\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_benefits_locale_idx\` ON \`share_blocks_benefits\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_benefits_benefits_settings_benefits_settings_background_image_idx\` ON \`share_blocks_benefits\` (\`benefits_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_contact_contact_info_highlighted_contacts\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`item_title\` text,
  	\`item_content\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_contact\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_contact_contact_info_highlighted_contacts_order_idx\` ON \`share_blocks_contact_contact_info_highlighted_contacts\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_contact_contact_info_highlighted_contacts_parent_id_idx\` ON \`share_blocks_contact_contact_info_highlighted_contacts\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_contact_contact_info_highlighted_contacts_locale_idx\` ON \`share_blocks_contact_contact_info_highlighted_contacts\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_contact_contact_info_contact_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`item_title\` text,
  	\`item_content\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_contact\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_contact_contact_info_contact_items_order_idx\` ON \`share_blocks_contact_contact_info_contact_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_contact_contact_info_contact_items_parent_id_idx\` ON \`share_blocks_contact_contact_info_contact_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_contact_contact_info_contact_items_locale_idx\` ON \`share_blocks_contact_contact_info_contact_items\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_contact\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`contact_settings_anchor_id\` text,
  	\`contact_settings_padding_top\` text DEFAULT 'medium',
  	\`contact_settings_padding_bottom\` text DEFAULT 'medium',
  	\`contact_settings_has_background_image\` integer DEFAULT false,
  	\`contact_settings_background\` text DEFAULT 'dark',
  	\`contact_settings_background_image_id\` integer,
  	\`contact_settings_heading\` text,
  	\`contact_form_config_first_name_label\` text DEFAULT 'First Name',
  	\`contact_form_config_first_name_placeholder\` text DEFAULT 'Enter your first name',
  	\`contact_form_config_first_name_validation_min_length\` numeric DEFAULT 2,
  	\`contact_form_config_first_name_validation_min_length_message\` text DEFAULT 'First Name must be at least 2 characters long',
  	\`contact_form_config_first_name_validation_required_message\` text DEFAULT 'First Name is required',
  	\`contact_form_config_last_name_label\` text DEFAULT 'Last Name',
  	\`contact_form_config_last_name_placeholder\` text DEFAULT 'Enter your last name',
  	\`contact_form_config_last_name_validation_min_length\` numeric DEFAULT 2,
  	\`contact_form_config_last_name_validation_min_length_message\` text DEFAULT 'Last Name must be at least 2 characters long',
  	\`contact_form_config_last_name_validation_required_message\` text DEFAULT 'Last Name is required',
  	\`contact_form_config_phone_label\` text DEFAULT 'Phone',
  	\`contact_form_config_phone_placeholder\` text DEFAULT 'Enter your phone number',
  	\`contact_form_config_phone_validation_required_message\` text DEFAULT 'Phone is required',
  	\`contact_form_config_email_label\` text DEFAULT 'Email',
  	\`contact_form_config_email_placeholder\` text DEFAULT 'Enter your email address',
  	\`contact_form_config_email_validation_invalid_message\` text DEFAULT 'Please enter a valid email address',
  	\`contact_form_config_email_validation_required_message\` text DEFAULT 'Email is required',
  	\`contact_form_config_message_label\` text DEFAULT 'Message',
  	\`contact_form_config_message_placeholder\` text DEFAULT 'Enter your message',
  	\`contact_form_config_message_validation_required_message\` text DEFAULT 'Message is required',
  	\`contact_form_config_checkbox_with_text_label\` text DEFAULT 'I agree to the terms and conditions',
  	\`contact_form_config_checkbox_with_text_content\` text,
  	\`contact_form_config_checkbox_with_text_validation_required_message\` text DEFAULT 'You must agree to the terms and conditions',
  	\`contact_form_config_submit_button\` text DEFAULT 'Send Message',
  	\`contact_form_config_toast_success_title\` text DEFAULT 'Message Sent!',
  	\`contact_form_config_toast_success_message\` text DEFAULT 'Thank you for your message. We will get back to you soon.',
  	\`contact_form_config_toast_error_title\` text DEFAULT 'Error',
  	\`contact_form_config_toast_error_message\` text DEFAULT 'There was an error sending your message. Please try again.',
  	\`contact_form_config_toast_error_fallback_message\` text DEFAULT 'An unexpected error occurred. Please try again later.',
  	\`contact_form_position\` text,
  	\`contact_form_title\` text,
  	\`variant\` text DEFAULT 'onlyForm',
  	\`block_name\` text,
  	FOREIGN KEY (\`contact_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_contact_order_idx\` ON \`share_blocks_contact\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_contact_parent_id_idx\` ON \`share_blocks_contact\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_contact_path_idx\` ON \`share_blocks_contact\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_contact_locale_idx\` ON \`share_blocks_contact\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_contact_contact_settings_contact_settings_background_image_idx\` ON \`share_blocks_contact\` (\`contact_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_content\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content_settings_anchor_id\` text,
  	\`content_settings_padding_top\` text DEFAULT 'medium',
  	\`content_settings_padding_bottom\` text DEFAULT 'medium',
  	\`content_settings_has_background_image\` integer DEFAULT false,
  	\`content_settings_background\` text DEFAULT 'dark',
  	\`content_settings_background_image_id\` integer,
  	\`content\` text,
  	\`content_position\` text DEFAULT 'center',
  	\`block_name\` text,
  	FOREIGN KEY (\`content_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_content_order_idx\` ON \`share_blocks_content\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_content_parent_id_idx\` ON \`share_blocks_content\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_content_path_idx\` ON \`share_blocks_content\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_content_locale_idx\` ON \`share_blocks_content\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_content_content_settings_content_settings_background_image_idx\` ON \`share_blocks_content\` (\`content_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_draw_editor\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_picker_id\` integer,
  	\`picker_value\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_picker_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_draw_editor_order_idx\` ON \`share_blocks_draw_editor\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_draw_editor_parent_id_idx\` ON \`share_blocks_draw_editor\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_draw_editor_path_idx\` ON \`share_blocks_draw_editor\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_draw_editor_locale_idx\` ON \`share_blocks_draw_editor\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_draw_editor_image_picker_idx\` ON \`share_blocks_draw_editor\` (\`image_picker_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_features_features_with_title\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`feature_icon\` text,
  	\`feature_title\` text,
  	\`feature_description\` text,
  	\`feature_bg\` text DEFAULT 'cream',
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_features\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_features_features_with_title_order_idx\` ON \`share_blocks_features_features_with_title\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_features_features_with_title_parent_id_idx\` ON \`share_blocks_features_features_with_title\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_features_features_with_title_locale_idx\` ON \`share_blocks_features_features_with_title\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_features_features_uppercase\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`feature_icon\` text,
  	\`feature_description\` text,
  	\`feature_bg\` text DEFAULT 'cream',
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_features\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_features_features_uppercase_order_idx\` ON \`share_blocks_features_features_uppercase\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_features_features_uppercase_parent_id_idx\` ON \`share_blocks_features_features_uppercase\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_features_features_uppercase_locale_idx\` ON \`share_blocks_features_features_uppercase\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`features_settings_anchor_id\` text,
  	\`features_settings_padding_top\` text DEFAULT 'medium',
  	\`features_settings_padding_bottom\` text DEFAULT 'medium',
  	\`features_settings_has_background_image\` integer DEFAULT false,
  	\`features_settings_background\` text DEFAULT 'dark',
  	\`features_settings_background_image_id\` integer,
  	\`features_settings_heading\` text,
  	\`features_settings_link_type\` text DEFAULT 'internal',
  	\`features_settings_link_new_tab\` integer,
  	\`features_settings_link_has_anchor\` integer,
  	\`features_settings_link_dark_button\` integer,
  	\`features_settings_link_icon_only\` integer DEFAULT false,
  	\`features_settings_link_icon_position\` text DEFAULT 'left',
  	\`features_settings_link_icon\` text,
  	\`features_settings_link_label\` text,
  	\`features_settings_link_relation\` text DEFAULT 'pages',
  	\`features_settings_link_url\` text,
  	\`features_settings_link_anchor_to\` text,
  	\`features_settings_link_appearance\` text DEFAULT 'primary',
  	\`content\` text,
  	\`features_variant\` text DEFAULT 'uppercase',
  	\`block_name\` text,
  	FOREIGN KEY (\`features_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_features_order_idx\` ON \`share_blocks_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_features_parent_id_idx\` ON \`share_blocks_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_features_path_idx\` ON \`share_blocks_features\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_features_locale_idx\` ON \`share_blocks_features\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_features_features_settings_features_settings_background_image_idx\` ON \`share_blocks_features\` (\`features_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_form_form_cfg_flat_disposition_options\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text,
  	\`label\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_form\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_form_form_cfg_flat_disposition_options_order_idx\` ON \`share_blocks_form_form_cfg_flat_disposition_options\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_form_form_cfg_flat_disposition_options_parent_id_idx\` ON \`share_blocks_form_form_cfg_flat_disposition_options\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_form_form_cfg_flat_disposition_options_locale_idx\` ON \`share_blocks_form_form_cfg_flat_disposition_options\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_form_slide_out_boxes\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`column_image_id\` integer,
  	\`column_image2_id\` integer,
  	FOREIGN KEY (\`column_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`column_image2_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_form\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_form_slide_out_boxes_order_idx\` ON \`share_blocks_form_slide_out_boxes\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_form_slide_out_boxes_parent_id_idx\` ON \`share_blocks_form_slide_out_boxes\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_form_slide_out_boxes_locale_idx\` ON \`share_blocks_form_slide_out_boxes\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_form_slide_out_boxes_column_column_image_idx\` ON \`share_blocks_form_slide_out_boxes\` (\`column_image_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_form_slide_out_boxes_column_column_image2_idx\` ON \`share_blocks_form_slide_out_boxes\` (\`column_image2_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_form\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`form_settings_anchor_id\` text,
  	\`form_settings_padding_top\` text DEFAULT 'medium',
  	\`form_settings_padding_bottom\` text DEFAULT 'medium',
  	\`form_settings_has_background_image\` integer DEFAULT false,
  	\`form_settings_background\` text DEFAULT 'light',
  	\`form_settings_background_image_id\` integer,
  	\`form_cfg_first_name_label\` text DEFAULT 'First Name',
  	\`form_cfg_first_name_placeholder\` text DEFAULT 'Enter your first name',
  	\`form_cfg_first_name_validation_min_length\` numeric DEFAULT 2,
  	\`form_cfg_first_name_validation_min_length_message\` text DEFAULT 'First name must be at least 2 characters long',
  	\`form_cfg_first_name_validation_required_message\` text DEFAULT 'First name is required',
  	\`form_cfg_last_name_label\` text DEFAULT 'Last Name',
  	\`form_cfg_last_name_placeholder\` text DEFAULT 'Enter your last name',
  	\`form_cfg_last_name_validation_min_length\` numeric DEFAULT 2,
  	\`form_cfg_last_name_validation_min_length_message\` text DEFAULT 'Last Name must be at least 2 characters long',
  	\`form_cfg_last_name_validation_required_message\` text DEFAULT 'Last Name is required',
  	\`form_cfg_phone_label\` text DEFAULT 'Phone',
  	\`form_cfg_phone_placeholder\` text DEFAULT 'Enter your phone number',
  	\`form_cfg_phone_validation_required_message\` text DEFAULT 'Phone is required',
  	\`form_cfg_email_label\` text DEFAULT 'Email',
  	\`form_cfg_email_placeholder\` text DEFAULT 'Enter your email address',
  	\`form_cfg_email_validation_invalid_message\` text DEFAULT 'Please enter a valid email address',
  	\`form_cfg_email_validation_required_message\` text DEFAULT 'Email is required',
  	\`form_cfg_message_label\` text DEFAULT 'Message',
  	\`form_cfg_message_placeholder\` text DEFAULT 'Enter your message',
  	\`form_cfg_message_validation_required_message\` text DEFAULT 'Message is required',
  	\`form_cfg_flat_disposition_label\` text DEFAULT 'Flat Disposition',
  	\`form_cfg_flat_disposition_placeholder\` text DEFAULT 'Select flat disposition',
  	\`form_cfg_flat_disposition_validation_required_message\` text DEFAULT 'Please select a flat disposition',
  	\`form_cfg_bottom_content\` text,
  	\`form_cfg_checkbox_with_text_label\` text DEFAULT '',
  	\`form_cfg_checkbox_with_text_content\` text,
  	\`form_cfg_checkbox_with_text_validation_required_message\` text DEFAULT 'You must agree to the terms and conditions',
  	\`form_cfg_checkbox_with_text_newsletter_label\` text DEFAULT 'I agree to receive newsletters',
  	\`form_cfg_checkbox_with_text_newsletter_content\` text,
  	\`form_cfg_checkbox_with_text_newsletter_validation_required_message\` text DEFAULT 'You must agree to the terms and conditions',
  	\`form_cfg_submit_button\` text DEFAULT 'Send Message',
  	\`form_cfg_toast_success_title\` text DEFAULT 'Message Sent!',
  	\`form_cfg_toast_success_message\` text DEFAULT 'Thank you for your message. We will get back to you soon.',
  	\`form_cfg_toast_error_title\` text DEFAULT 'Error',
  	\`form_cfg_toast_error_message\` text DEFAULT 'There was an error sending your message. Please try again.',
  	\`form_cfg_toast_error_fallback_message\` text DEFAULT 'An unexpected error occurred. Please try again later.',
  	\`form_content\` text,
  	\`layout_variant\` text DEFAULT 'onlyForm',
  	\`form_position\` text,
  	\`layout_content\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`form_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_form_order_idx\` ON \`share_blocks_form\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_form_parent_id_idx\` ON \`share_blocks_form\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_form_path_idx\` ON \`share_blocks_form\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_form_locale_idx\` ON \`share_blocks_form\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_form_form_settings_form_settings_background_image_idx\` ON \`share_blocks_form\` (\`form_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_flats_snippets\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`flats_set_anchor_id\` text,
  	\`flats_set_padding_top\` text DEFAULT 'medium',
  	\`flats_set_padding_bottom\` text DEFAULT 'medium',
  	\`flats_set_has_background_image\` integer DEFAULT false,
  	\`flats_set_background\` text DEFAULT 'dark',
  	\`flats_set_background_image_id\` integer,
  	\`flats_set_heading\` text,
  	\`flats_set_link_type\` text DEFAULT 'internal',
  	\`flats_set_link_new_tab\` integer,
  	\`flats_set_link_has_anchor\` integer,
  	\`flats_set_link_dark_button\` integer,
  	\`flats_set_link_icon_only\` integer DEFAULT false,
  	\`flats_set_link_icon_position\` text DEFAULT 'left',
  	\`flats_set_link_icon\` text,
  	\`flats_set_link_label\` text,
  	\`flats_set_link_relation\` text DEFAULT 'pages',
  	\`flats_set_link_url\` text,
  	\`flats_set_link_anchor_to\` text,
  	\`flats_set_link_appearance\` text DEFAULT 'primary',
  	\`block_name\` text,
  	FOREIGN KEY (\`flats_set_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_flats_snippets_order_idx\` ON \`share_blocks_flats_snippets\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_flats_snippets_parent_id_idx\` ON \`share_blocks_flats_snippets\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_flats_snippets_path_idx\` ON \`share_blocks_flats_snippets\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_flats_snippets_locale_idx\` ON \`share_blocks_flats_snippets\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_flats_snippets_flats_set_flats_set_background_image_idx\` ON \`share_blocks_flats_snippets\` (\`flats_set_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_gallery_simple_slider\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`slide_width\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_gallery_simple_slider_order_idx\` ON \`share_blocks_gallery_simple_slider\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_gallery_simple_slider_parent_id_idx\` ON \`share_blocks_gallery_simple_slider\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_gallery_simple_slider_locale_idx\` ON \`share_blocks_gallery_simple_slider\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_gallery_simple_slider_image_idx\` ON \`share_blocks_gallery_simple_slider\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_gallery_multi_slider_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`slide_width\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_gallery_multi_slider\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_gallery_multi_slider_images_order_idx\` ON \`share_blocks_gallery_multi_slider_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_gallery_multi_slider_images_parent_id_idx\` ON \`share_blocks_gallery_multi_slider_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_gallery_multi_slider_images_locale_idx\` ON \`share_blocks_gallery_multi_slider_images\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_gallery_multi_slider_images_image_idx\` ON \`share_blocks_gallery_multi_slider_images\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_gallery_multi_slider\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`tab_title\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_gallery_multi_slider_order_idx\` ON \`share_blocks_gallery_multi_slider\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_gallery_multi_slider_parent_id_idx\` ON \`share_blocks_gallery_multi_slider\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_gallery_multi_slider_locale_idx\` ON \`share_blocks_gallery_multi_slider\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_gallery_full_width\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_gallery_full_width_order_idx\` ON \`share_blocks_gallery_full_width\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_gallery_full_width_parent_id_idx\` ON \`share_blocks_gallery_full_width\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_gallery_full_width_locale_idx\` ON \`share_blocks_gallery_full_width\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_gallery_full_width_image_idx\` ON \`share_blocks_gallery_full_width\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_gallery\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`gallery_settings_anchor_id\` text,
  	\`gallery_settings_padding_top\` text DEFAULT 'medium',
  	\`gallery_settings_padding_bottom\` text DEFAULT 'medium',
  	\`gallery_settings_has_background_image\` integer DEFAULT false,
  	\`gallery_settings_background\` text DEFAULT 'dark',
  	\`gallery_settings_background_image_id\` integer,
  	\`controls_type\` text DEFAULT 'arrows',
  	\`autoplay\` integer DEFAULT false,
  	\`content\` text,
  	\`gallery_variant\` text DEFAULT 'simpleSlider',
  	\`link_type\` text DEFAULT 'internal',
  	\`link_new_tab\` integer,
  	\`link_has_anchor\` integer,
  	\`link_dark_button\` integer,
  	\`link_icon_only\` integer DEFAULT false,
  	\`link_icon_position\` text DEFAULT 'left',
  	\`link_icon\` text,
  	\`link_label\` text,
  	\`link_relation\` text DEFAULT 'pages',
  	\`link_url\` text,
  	\`link_anchor_to\` text,
  	\`link_appearance\` text DEFAULT 'primary',
  	\`block_name\` text,
  	FOREIGN KEY (\`gallery_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_gallery_order_idx\` ON \`share_blocks_gallery\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_gallery_parent_id_idx\` ON \`share_blocks_gallery\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_gallery_path_idx\` ON \`share_blocks_gallery\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_gallery_locale_idx\` ON \`share_blocks_gallery\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_gallery_gallery_settings_gallery_settings_background_image_idx\` ON \`share_blocks_gallery\` (\`gallery_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_hero_hero_slideshow\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`title\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_hero\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_hero_hero_slideshow_order_idx\` ON \`share_blocks_hero_hero_slideshow\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_hero_hero_slideshow_parent_id_idx\` ON \`share_blocks_hero_hero_slideshow\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_hero_hero_slideshow_locale_idx\` ON \`share_blocks_hero_hero_slideshow\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_hero_hero_slideshow_image_idx\` ON \`share_blocks_hero_hero_slideshow\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_hero_main_buttons\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'internal',
  	\`link_new_tab\` integer,
  	\`link_has_anchor\` integer,
  	\`link_dark_button\` integer,
  	\`link_icon_only\` integer DEFAULT false,
  	\`link_icon_position\` text DEFAULT 'left',
  	\`link_icon\` text,
  	\`link_label\` text,
  	\`link_relation\` text DEFAULT 'pages',
  	\`link_url\` text,
  	\`link_anchor_to\` text,
  	\`link_appearance\` text DEFAULT 'primary',
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_hero\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_hero_main_buttons_order_idx\` ON \`share_blocks_hero_main_buttons\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_hero_main_buttons_parent_id_idx\` ON \`share_blocks_hero_main_buttons\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_hero_main_buttons_locale_idx\` ON \`share_blocks_hero_main_buttons\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_hero_secondary_buttons\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'internal',
  	\`link_new_tab\` integer,
  	\`link_has_anchor\` integer,
  	\`link_dark_button\` integer,
  	\`link_icon_only\` integer DEFAULT false,
  	\`link_icon_position\` text DEFAULT 'left',
  	\`link_icon\` text,
  	\`link_label\` text,
  	\`link_relation\` text DEFAULT 'pages',
  	\`link_url\` text,
  	\`link_anchor_to\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_hero\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_hero_secondary_buttons_order_idx\` ON \`share_blocks_hero_secondary_buttons\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_hero_secondary_buttons_parent_id_idx\` ON \`share_blocks_hero_secondary_buttons\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_hero_secondary_buttons_locale_idx\` ON \`share_blocks_hero_secondary_buttons\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_hero\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`type\` text DEFAULT 'imageOnly',
  	\`content\` text,
  	\`hero_image_id\` integer,
  	\`hero_video_id\` integer,
  	\`left_upper_text\` text,
  	\`right_upper_text\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`hero_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`hero_video_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_hero_order_idx\` ON \`share_blocks_hero\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_hero_parent_id_idx\` ON \`share_blocks_hero\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_hero_path_idx\` ON \`share_blocks_hero\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_hero_locale_idx\` ON \`share_blocks_hero\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_hero_hero_image_idx\` ON \`share_blocks_hero\` (\`hero_image_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_hero_hero_video_idx\` ON \`share_blocks_hero\` (\`hero_video_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_highlighted_text\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`high_set_anchor_id\` text,
  	\`high_set_padding_top\` text DEFAULT 'medium',
  	\`high_set_padding_bottom\` text DEFAULT 'medium',
  	\`high_set_has_background_image\` integer DEFAULT false,
  	\`high_set_background\` text DEFAULT 'dark',
  	\`high_set_background_image_id\` integer,
  	\`title\` text,
  	\`highlighted_text\` text,
  	\`highlighted_link_type\` text DEFAULT 'internal',
  	\`highlighted_link_new_tab\` integer,
  	\`highlighted_link_has_anchor\` integer,
  	\`highlighted_link_dark_button\` integer,
  	\`highlighted_link_icon_only\` integer DEFAULT false,
  	\`highlighted_link_icon_position\` text DEFAULT 'left',
  	\`highlighted_link_icon\` text,
  	\`highlighted_link_label\` text,
  	\`highlighted_link_relation\` text DEFAULT 'pages',
  	\`highlighted_link_url\` text,
  	\`highlighted_link_anchor_to\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`high_set_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_highlighted_text_order_idx\` ON \`share_blocks_highlighted_text\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_highlighted_text_parent_id_idx\` ON \`share_blocks_highlighted_text\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_highlighted_text_path_idx\` ON \`share_blocks_highlighted_text\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_highlighted_text_locale_idx\` ON \`share_blocks_highlighted_text\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_highlighted_text_high_set_high_set_background_image_idx\` ON \`share_blocks_highlighted_text\` (\`high_set_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`imgContent_person_bullet_points\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`feature_icon\` text,
  	\`feature_description\` text,
  	\`feature_bg\` text DEFAULT 'cream',
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`imgContent\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`imgContent_person_bullet_points_order_idx\` ON \`imgContent_person_bullet_points\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`imgContent_person_bullet_points_parent_id_idx\` ON \`imgContent_person_bullet_points\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`imgContent_person_bullet_points_locale_idx\` ON \`imgContent_person_bullet_points\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`imgContent_accordion_accordion_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`accordion_item_title\` text,
  	\`accordion_item_content\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`imgContent\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`imgContent_accordion_accordion_items_order_idx\` ON \`imgContent_accordion_accordion_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`imgContent_accordion_accordion_items_parent_id_idx\` ON \`imgContent_accordion_accordion_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`imgContent_accordion_accordion_items_locale_idx\` ON \`imgContent_accordion_accordion_items\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`imgContent\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_content_settings_anchor_id\` text,
  	\`image_content_settings_padding_top\` text DEFAULT 'medium',
  	\`image_content_settings_padding_bottom\` text DEFAULT 'medium',
  	\`image_content_settings_has_background_image\` integer DEFAULT false,
  	\`image_content_settings_background\` text DEFAULT 'dark',
  	\`image_content_settings_background_image_id\` integer,
  	\`content_type\` text DEFAULT 'default',
  	\`content\` text,
  	\`person_content\` text,
  	\`accordion_link_type\` text DEFAULT 'internal',
  	\`accordion_link_new_tab\` integer,
  	\`accordion_link_has_anchor\` integer,
  	\`accordion_link_dark_button\` integer,
  	\`accordion_link_icon_only\` integer DEFAULT false,
  	\`accordion_link_icon_position\` text DEFAULT 'left',
  	\`accordion_link_icon\` text,
  	\`accordion_link_label\` text,
  	\`accordion_link_relation\` text DEFAULT 'pages',
  	\`accordion_link_url\` text,
  	\`accordion_link_anchor_to\` text,
  	\`accordion_link_appearance\` text DEFAULT 'primary',
  	\`image_id\` integer,
  	\`image_position\` text DEFAULT 'right',
  	\`image_size\` text DEFAULT 'medium',
  	\`image_bottom_content_content\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_content_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`imgContent_order_idx\` ON \`imgContent\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`imgContent_parent_id_idx\` ON \`imgContent\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`imgContent_path_idx\` ON \`imgContent\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`imgContent_locale_idx\` ON \`imgContent\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`imgContent_image_content_settings_image_content_settings_background_image_idx\` ON \`imgContent\` (\`image_content_settings_background_image_id\`);`)
  await db.run(sql`CREATE INDEX \`imgContent_image_idx\` ON \`imgContent\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_images_grid_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_images_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_images_grid_images_order_idx\` ON \`share_blocks_images_grid_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_images_grid_images_parent_id_idx\` ON \`share_blocks_images_grid_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_images_grid_images_locale_idx\` ON \`share_blocks_images_grid_images\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_images_grid_images_image_idx\` ON \`share_blocks_images_grid_images\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_images_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`images_settings_anchor_id\` text,
  	\`images_settings_padding_top\` text DEFAULT 'medium',
  	\`images_settings_padding_bottom\` text DEFAULT 'medium',
  	\`images_settings_has_background_image\` integer DEFAULT false,
  	\`images_settings_background\` text DEFAULT 'dark',
  	\`images_settings_background_image_id\` integer,
  	\`direction_variant\` text DEFAULT 'default',
  	\`block_name\` text,
  	FOREIGN KEY (\`images_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_images_grid_order_idx\` ON \`share_blocks_images_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_images_grid_parent_id_idx\` ON \`share_blocks_images_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_images_grid_path_idx\` ON \`share_blocks_images_grid\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_images_grid_locale_idx\` ON \`share_blocks_images_grid\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_images_grid_images_settings_images_settings_background_image_idx\` ON \`share_blocks_images_grid\` (\`images_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_image_pins_pins\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`withlogo\` integer DEFAULT false,
  	\`reverse_layout\` integer DEFAULT false,
  	\`highlighted\` integer DEFAULT false,
  	\`logo_id\` integer,
  	\`marker_label\` text,
  	\`x\` numeric,
  	\`x_mobile\` numeric,
  	\`y\` numeric,
  	\`y_mobile\` numeric,
  	\`pin_height\` numeric,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_image_pins\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_image_pins_pins_order_idx\` ON \`share_blocks_image_pins_pins\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_image_pins_pins_parent_id_idx\` ON \`share_blocks_image_pins_pins\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_image_pins_pins_locale_idx\` ON \`share_blocks_image_pins_pins\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_image_pins_pins_logo_idx\` ON \`share_blocks_image_pins_pins\` (\`logo_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_image_pins\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_pins_set_anchor_id\` text,
  	\`image_pins_set_padding_top\` text DEFAULT 'medium',
  	\`image_pins_set_padding_bottom\` text DEFAULT 'medium',
  	\`image_pins_set_has_background_image\` integer DEFAULT false,
  	\`image_pins_set_background\` text DEFAULT 'dark',
  	\`image_pins_set_background_image_id\` integer,
  	\`text\` text,
  	\`background_image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_pins_set_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_image_pins_order_idx\` ON \`share_blocks_image_pins\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_image_pins_parent_id_idx\` ON \`share_blocks_image_pins\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_image_pins_path_idx\` ON \`share_blocks_image_pins\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_image_pins_locale_idx\` ON \`share_blocks_image_pins\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_image_pins_image_pins_set_image_pins_set_background_image_idx\` ON \`share_blocks_image_pins\` (\`image_pins_set_background_image_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_image_pins_background_image_idx\` ON \`share_blocks_image_pins\` (\`background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_map\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`map_settings_anchor_id\` text,
  	\`map_settings_padding_top\` text DEFAULT 'medium',
  	\`map_settings_padding_bottom\` text DEFAULT 'medium',
  	\`map_settings_has_background_image\` integer DEFAULT false,
  	\`map_settings_background\` text DEFAULT 'dark',
  	\`map_settings_background_image_id\` integer,
  	\`map_id\` integer,
  	\`map_link\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`map_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`map_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_map_order_idx\` ON \`share_blocks_map\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_map_parent_id_idx\` ON \`share_blocks_map\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_map_path_idx\` ON \`share_blocks_map\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_map_locale_idx\` ON \`share_blocks_map\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_map_map_settings_map_settings_background_image_idx\` ON \`share_blocks_map\` (\`map_settings_background_image_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_map_map_idx\` ON \`share_blocks_map\` (\`map_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_news_snippets\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`news_set_anchor_id\` text,
  	\`news_set_padding_top\` text DEFAULT 'medium',
  	\`news_set_padding_bottom\` text DEFAULT 'medium',
  	\`news_set_has_background_image\` integer DEFAULT false,
  	\`news_set_background\` text DEFAULT 'dark',
  	\`news_set_background_image_id\` integer,
  	\`news_set_heading\` text,
  	\`news_set_link_type\` text DEFAULT 'internal',
  	\`news_set_link_new_tab\` integer,
  	\`news_set_link_has_anchor\` integer,
  	\`news_set_link_dark_button\` integer,
  	\`news_set_link_icon_only\` integer DEFAULT false,
  	\`news_set_link_icon_position\` text DEFAULT 'left',
  	\`news_set_link_icon\` text,
  	\`news_set_link_label\` text,
  	\`news_set_link_relation\` text DEFAULT 'pages',
  	\`news_set_link_url\` text,
  	\`news_set_link_anchor_to\` text,
  	\`news_set_link_appearance\` text DEFAULT 'primary',
  	\`block_name\` text,
  	FOREIGN KEY (\`news_set_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_news_snippets_order_idx\` ON \`share_blocks_news_snippets\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_news_snippets_parent_id_idx\` ON \`share_blocks_news_snippets\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_news_snippets_path_idx\` ON \`share_blocks_news_snippets\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_news_snippets_locale_idx\` ON \`share_blocks_news_snippets\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_news_snippets_news_set_news_set_background_image_idx\` ON \`share_blocks_news_snippets\` (\`news_set_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_numbers_numbers\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`number\` numeric,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_numbers\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_numbers_numbers_order_idx\` ON \`share_blocks_numbers_numbers\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_numbers_numbers_parent_id_idx\` ON \`share_blocks_numbers_numbers\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_numbers_numbers_locale_idx\` ON \`share_blocks_numbers_numbers\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_numbers\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`numbers_settings_anchor_id\` text,
  	\`numbers_settings_padding_top\` text DEFAULT 'medium',
  	\`numbers_settings_padding_bottom\` text DEFAULT 'medium',
  	\`numbers_settings_has_background_image\` integer DEFAULT false,
  	\`numbers_settings_background\` text DEFAULT 'dark',
  	\`numbers_settings_background_image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`numbers_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_numbers_order_idx\` ON \`share_blocks_numbers\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_numbers_parent_id_idx\` ON \`share_blocks_numbers\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_numbers_path_idx\` ON \`share_blocks_numbers\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_numbers_locale_idx\` ON \`share_blocks_numbers\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_numbers_numbers_settings_numbers_settings_background_image_idx\` ON \`share_blocks_numbers\` (\`numbers_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_timeline_timeline\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_timeline\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_timeline_timeline_order_idx\` ON \`share_blocks_timeline_timeline\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_timeline_timeline_parent_id_idx\` ON \`share_blocks_timeline_timeline\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_timeline_timeline_locale_idx\` ON \`share_blocks_timeline_timeline\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_timeline\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`timeline_settings_anchor_id\` text,
  	\`timeline_settings_padding_top\` text DEFAULT 'medium',
  	\`timeline_settings_padding_bottom\` text DEFAULT 'medium',
  	\`timeline_settings_has_background_image\` integer DEFAULT false,
  	\`timeline_settings_background\` text DEFAULT 'dark',
  	\`timeline_settings_background_image_id\` integer,
  	\`content\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`timeline_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_timeline_order_idx\` ON \`share_blocks_timeline\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_timeline_parent_id_idx\` ON \`share_blocks_timeline\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_timeline_path_idx\` ON \`share_blocks_timeline\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_timeline_locale_idx\` ON \`share_blocks_timeline\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_timeline_timeline_settings_timeline_settings_background_image_idx\` ON \`share_blocks_timeline\` (\`timeline_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_prices\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`prices_settings_anchor_id\` text,
  	\`prices_settings_padding_top\` text DEFAULT 'medium',
  	\`prices_settings_padding_bottom\` text DEFAULT 'medium',
  	\`prices_settings_has_background_image\` integer DEFAULT false,
  	\`prices_settings_background\` text DEFAULT 'dark',
  	\`prices_settings_background_image_id\` integer,
  	\`bottom_content\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`prices_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_prices_order_idx\` ON \`share_blocks_prices\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_prices_parent_id_idx\` ON \`share_blocks_prices\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_prices_path_idx\` ON \`share_blocks_prices\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_prices_locale_idx\` ON \`share_blocks_prices\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_prices_prices_settings_prices_settings_background_image_idx\` ON \`share_blocks_prices\` (\`prices_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_interactive_picker_extended_views\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`view_name\` text,
  	\`image_id\` integer,
  	\`direct\` text DEFAULT 'south',
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_interactive_picker_extended\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_interactive_picker_extended_views_order_idx\` ON \`share_blocks_interactive_picker_extended_views\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_interactive_picker_extended_views_parent_id_idx\` ON \`share_blocks_interactive_picker_extended_views\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_interactive_picker_extended_views_locale_idx\` ON \`share_blocks_interactive_picker_extended_views\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_interactive_picker_extended_views_image_idx\` ON \`share_blocks_interactive_picker_extended_views\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_interactive_picker_extended\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`picker_value\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_interactive_picker_extended_order_idx\` ON \`share_blocks_interactive_picker_extended\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_interactive_picker_extended_parent_id_idx\` ON \`share_blocks_interactive_picker_extended\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_interactive_picker_extended_path_idx\` ON \`share_blocks_interactive_picker_extended\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_interactive_picker_extended_locale_idx\` ON \`share_blocks_interactive_picker_extended\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_visual_price_list_buildings\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`building_id\` integer,
  	FOREIGN KEY (\`building_id\`) REFERENCES \`buildings\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_visual_price_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_visual_price_list_buildings_order_idx\` ON \`share_blocks_visual_price_list_buildings\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_visual_price_list_buildings_parent_id_idx\` ON \`share_blocks_visual_price_list_buildings\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_visual_price_list_buildings_locale_idx\` ON \`share_blocks_visual_price_list_buildings\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_visual_price_list_buildings_building_idx\` ON \`share_blocks_visual_price_list_buildings\` (\`building_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_visual_price_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_visual_price_list_order_idx\` ON \`share_blocks_visual_price_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_visual_price_list_parent_id_idx\` ON \`share_blocks_visual_price_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_visual_price_list_path_idx\` ON \`share_blocks_visual_price_list\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_visual_price_list_locale_idx\` ON \`share_blocks_visual_price_list\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_variable_table_rows_cells\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_variable_table_rows\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_variable_table_rows_cells_order_idx\` ON \`share_blocks_variable_table_rows_cells\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_variable_table_rows_cells_parent_id_idx\` ON \`share_blocks_variable_table_rows_cells\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_variable_table_rows_cells_locale_idx\` ON \`share_blocks_variable_table_rows_cells\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_variable_table_rows\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`row_index\` numeric,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share_blocks_variable_table\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_variable_table_rows_order_idx\` ON \`share_blocks_variable_table_rows\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_variable_table_rows_parent_id_idx\` ON \`share_blocks_variable_table_rows\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_variable_table_rows_locale_idx\` ON \`share_blocks_variable_table_rows\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_variable_table\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_variable_table_order_idx\` ON \`share_blocks_variable_table\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_variable_table_parent_id_idx\` ON \`share_blocks_variable_table\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_variable_table_path_idx\` ON \`share_blocks_variable_table\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_variable_table_locale_idx\` ON \`share_blocks_variable_table\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_table_custom\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_table_custom_order_idx\` ON \`share_blocks_table_custom\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_table_custom_parent_id_idx\` ON \`share_blocks_table_custom\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_table_custom_path_idx\` ON \`share_blocks_table_custom\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_table_custom_locale_idx\` ON \`share_blocks_table_custom\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_text_image\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	\`image_id\` integer,
  	\`image_position\` text DEFAULT 'right',
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_text_image_order_idx\` ON \`share_blocks_text_image\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_text_image_parent_id_idx\` ON \`share_blocks_text_image\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_text_image_path_idx\` ON \`share_blocks_text_image\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_text_image_locale_idx\` ON \`share_blocks_text_image\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_text_image_image_idx\` ON \`share_blocks_text_image\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`share_blocks_shared_section\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`shared_section_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`shared_section_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_blocks_shared_section_order_idx\` ON \`share_blocks_shared_section\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_shared_section_parent_id_idx\` ON \`share_blocks_shared_section\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_shared_section_path_idx\` ON \`share_blocks_shared_section\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_shared_section_locale_idx\` ON \`share_blocks_shared_section\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`share_blocks_shared_section_shared_section_idx\` ON \`share_blocks_shared_section\` (\`shared_section_id\`);`)
  await db.run(sql`CREATE TABLE \`share\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`project_id\` integer,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`project_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`share_project_idx\` ON \`share\` (\`project_id\`);`)
  await db.run(sql`CREATE INDEX \`share_updated_at_idx\` ON \`share\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`share_created_at_idx\` ON \`share\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`share_locales\` (
  	\`title\` text NOT NULL,
  	\`slug\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_slug_idx\` ON \`share_locales\` (\`slug\`,\`_locale\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`share_locales_locale_parent_id_unique\` ON \`share_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`share_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`locale\` text,
  	\`pages_id\` integer,
  	\`flats_id\` integer,
  	\`news_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`flats_id\`) REFERENCES \`flats\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`news_id\`) REFERENCES \`news\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`share_rels_order_idx\` ON \`share_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`share_rels_parent_idx\` ON \`share_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`share_rels_path_idx\` ON \`share_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`share_rels_locale_idx\` ON \`share_rels\` (\`locale\`);`)
  await db.run(sql`CREATE INDEX \`share_rels_pages_id_idx\` ON \`share_rels\` (\`pages_id\`,\`locale\`);`)
  await db.run(sql`CREATE INDEX \`share_rels_flats_id_idx\` ON \`share_rels\` (\`flats_id\`,\`locale\`);`)
  await db.run(sql`CREATE INDEX \`share_rels_news_id_idx\` ON \`share_rels\` (\`news_id\`,\`locale\`);`)
  await db.run(sql`CREATE TABLE \`roles_permissions_projects\` (
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`roles_permissions_projects_order_idx\` ON \`roles_permissions_projects\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`roles_permissions_projects_parent_idx\` ON \`roles_permissions_projects\` (\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`roles_permissions_pages\` (
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`roles_permissions_pages_order_idx\` ON \`roles_permissions_pages\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`roles_permissions_pages_parent_idx\` ON \`roles_permissions_pages\` (\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`roles_permissions_globalheader\` (
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`roles_permissions_globalheader_order_idx\` ON \`roles_permissions_globalheader\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`roles_permissions_globalheader_parent_idx\` ON \`roles_permissions_globalheader\` (\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`roles_permissions_globalfooter\` (
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`roles_permissions_globalfooter_order_idx\` ON \`roles_permissions_globalfooter\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`roles_permissions_globalfooter_parent_idx\` ON \`roles_permissions_globalfooter\` (\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`roles_permissions_project_global_settings\` (
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`roles_permissions_project_global_settings_order_idx\` ON \`roles_permissions_project_global_settings\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`roles_permissions_project_global_settings_parent_idx\` ON \`roles_permissions_project_global_settings\` (\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`roles_permissions_buildings\` (
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`roles_permissions_buildings_order_idx\` ON \`roles_permissions_buildings\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`roles_permissions_buildings_parent_idx\` ON \`roles_permissions_buildings\` (\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`roles_permissions_flats\` (
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`roles_permissions_flats_order_idx\` ON \`roles_permissions_flats\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`roles_permissions_flats_parent_idx\` ON \`roles_permissions_flats\` (\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`roles_permissions_flat_detail_page\` (
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`roles_permissions_flat_detail_page_order_idx\` ON \`roles_permissions_flat_detail_page\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`roles_permissions_flat_detail_page_parent_idx\` ON \`roles_permissions_flat_detail_page\` (\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`roles_permissions_sectors\` (
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`roles_permissions_sectors_order_idx\` ON \`roles_permissions_sectors\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`roles_permissions_sectors_parent_idx\` ON \`roles_permissions_sectors\` (\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`roles_permissions_floors\` (
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`roles_permissions_floors_order_idx\` ON \`roles_permissions_floors\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`roles_permissions_floors_parent_idx\` ON \`roles_permissions_floors\` (\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`roles_permissions_news\` (
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`roles_permissions_news_order_idx\` ON \`roles_permissions_news\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`roles_permissions_news_parent_idx\` ON \`roles_permissions_news\` (\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`roles_permissions_media\` (
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`roles_permissions_media_order_idx\` ON \`roles_permissions_media\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`roles_permissions_media_parent_idx\` ON \`roles_permissions_media\` (\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`roles_permissions_documents\` (
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`roles_permissions_documents_order_idx\` ON \`roles_permissions_documents\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`roles_permissions_documents_parent_idx\` ON \`roles_permissions_documents\` (\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`roles_permissions_share\` (
  	\`order\` integer NOT NULL,
  	\`parent_id\` integer NOT NULL,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`roles_permissions_share_order_idx\` ON \`roles_permissions_share\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`roles_permissions_share_parent_idx\` ON \`roles_permissions_share\` (\`parent_id\`);`)
  await db.run(sql`CREATE TABLE \`roles\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`roles_updated_at_idx\` ON \`roles\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`roles_created_at_idx\` ON \`roles\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`roles_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`projects_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`projects_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`roles_rels_order_idx\` ON \`roles_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`roles_rels_parent_idx\` ON \`roles_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`roles_rels_path_idx\` ON \`roles_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`roles_rels_projects_id_idx\` ON \`roles_rels\` (\`projects_id\`);`)
  await db.run(sql`CREATE TABLE \`users\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`role_id\` integer NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`email\` text NOT NULL,
  	\`reset_password_token\` text,
  	\`reset_password_expiration\` text,
  	\`salt\` text,
  	\`hash\` text,
  	\`login_attempts\` numeric DEFAULT 0,
  	\`lock_until\` text,
  	FOREIGN KEY (\`role_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`users_role_idx\` ON \`users\` (\`role_id\`);`)
  await db.run(sql`CREATE INDEX \`users_updated_at_idx\` ON \`users\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`users_created_at_idx\` ON \`users\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_email_idx\` ON \`users\` (\`email\`);`)
  await db.run(sql`CREATE TABLE \`users_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`projects_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`projects_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_rels_order_idx\` ON \`users_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`users_rels_parent_idx\` ON \`users_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`users_rels_path_idx\` ON \`users_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`users_rels_projects_id_idx\` ON \`users_rels\` (\`projects_id\`);`)
  await db.run(sql`CREATE TABLE \`media\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`alt\` text NOT NULL,
  	\`project_id\` integer,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric,
  	\`height\` numeric,
  	\`focal_x\` numeric,
  	\`focal_y\` numeric,
  	FOREIGN KEY (\`project_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`media_project_idx\` ON \`media\` (\`project_id\`);`)
  await db.run(sql`CREATE INDEX \`media_updated_at_idx\` ON \`media\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`media_created_at_idx\` ON \`media\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`media_filename_idx\` ON \`media\` (\`filename\`);`)
  await db.run(sql`CREATE TABLE \`projects_standards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`standard_file_id\` integer,
  	FOREIGN KEY (\`standard_file_id\`) REFERENCES \`documents\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`projects_standards_order_idx\` ON \`projects_standards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`projects_standards_parent_id_idx\` ON \`projects_standards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`projects_standards_standard_file_idx\` ON \`projects_standards\` (\`standard_file_id\`);`)
  await db.run(sql`CREATE TABLE \`projects_plans\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`plan_file_id\` integer,
  	FOREIGN KEY (\`plan_file_id\`) REFERENCES \`documents\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`projects_plans_order_idx\` ON \`projects_plans\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`projects_plans_parent_id_idx\` ON \`projects_plans\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`projects_plans_plan_file_idx\` ON \`projects_plans\` (\`plan_file_id\`);`)
  await db.run(sql`CREATE TABLE \`projects\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`slug\` text,
  	\`realpadid\` text,
  	\`level_stoone\` text DEFAULT 'levelstoone_1' NOT NULL,
  	\`project_price_module_price_hidden\` integer DEFAULT false,
  	\`frontend_url\` text,
  	\`realpad_project_gps\` text,
  	\`realpad_project_icon\` text,
  	\`realpad_project_plan\` text,
  	\`realpad_project_logo\` text,
  	\`realpad_project_standards\` text,
  	\`realpad_project_offline_map\` text,
  	\`realpad_project_pinpoint\` text,
  	\`realpad_project_currency\` text,
  	\`cron_settings_enabled\` integer DEFAULT false,
  	\`cron_settings_schedule\` text DEFAULT 'every_6_hours',
  	\`cron_settings_custom_schedule\` text,
  	\`cron_settings_last_run\` text,
  	\`cron_settings_next_run\` text,
  	\`cron_settings_status\` text DEFAULT 'inactive',
  	\`cron_settings_last_result\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`projects_slug_idx\` ON \`projects\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`projects_updated_at_idx\` ON \`projects\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`projects_created_at_idx\` ON \`projects\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_hero_slideshow\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`title\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_hero\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_hero_slideshow_order_idx\` ON \`pages_blocks_hero_hero_slideshow\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_hero_slideshow_parent_id_idx\` ON \`pages_blocks_hero_hero_slideshow\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_hero_slideshow_locale_idx\` ON \`pages_blocks_hero_hero_slideshow\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_hero_slideshow_image_idx\` ON \`pages_blocks_hero_hero_slideshow\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_main_buttons\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'internal',
  	\`link_new_tab\` integer,
  	\`link_has_anchor\` integer,
  	\`link_dark_button\` integer,
  	\`link_icon_only\` integer DEFAULT false,
  	\`link_icon_position\` text DEFAULT 'left',
  	\`link_icon\` text,
  	\`link_label\` text,
  	\`link_relation\` text DEFAULT 'pages',
  	\`link_url\` text,
  	\`link_anchor_to\` text,
  	\`link_appearance\` text DEFAULT 'primary',
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_hero\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_main_buttons_order_idx\` ON \`pages_blocks_hero_main_buttons\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_main_buttons_parent_id_idx\` ON \`pages_blocks_hero_main_buttons\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_main_buttons_locale_idx\` ON \`pages_blocks_hero_main_buttons\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero_secondary_buttons\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'internal',
  	\`link_new_tab\` integer,
  	\`link_has_anchor\` integer,
  	\`link_dark_button\` integer,
  	\`link_icon_only\` integer DEFAULT false,
  	\`link_icon_position\` text DEFAULT 'left',
  	\`link_icon\` text,
  	\`link_label\` text,
  	\`link_relation\` text DEFAULT 'pages',
  	\`link_url\` text,
  	\`link_anchor_to\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_hero\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_secondary_buttons_order_idx\` ON \`pages_blocks_hero_secondary_buttons\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_secondary_buttons_parent_id_idx\` ON \`pages_blocks_hero_secondary_buttons\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_secondary_buttons_locale_idx\` ON \`pages_blocks_hero_secondary_buttons\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_hero\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`type\` text DEFAULT 'imageOnly',
  	\`content\` text,
  	\`hero_image_id\` integer,
  	\`hero_video_id\` integer,
  	\`left_upper_text\` text,
  	\`right_upper_text\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`hero_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`hero_video_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_order_idx\` ON \`pages_blocks_hero\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_parent_id_idx\` ON \`pages_blocks_hero\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_path_idx\` ON \`pages_blocks_hero\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_locale_idx\` ON \`pages_blocks_hero\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_hero_image_idx\` ON \`pages_blocks_hero\` (\`hero_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_hero_hero_video_idx\` ON \`pages_blocks_hero\` (\`hero_video_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_variable_table_rows_cells\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_variable_table_rows\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_variable_table_rows_cells_order_idx\` ON \`pages_blocks_variable_table_rows_cells\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_variable_table_rows_cells_parent_id_idx\` ON \`pages_blocks_variable_table_rows_cells\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_variable_table_rows_cells_locale_idx\` ON \`pages_blocks_variable_table_rows_cells\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_variable_table_rows\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`row_index\` numeric,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_variable_table\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_variable_table_rows_order_idx\` ON \`pages_blocks_variable_table_rows\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_variable_table_rows_parent_id_idx\` ON \`pages_blocks_variable_table_rows\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_variable_table_rows_locale_idx\` ON \`pages_blocks_variable_table_rows\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_variable_table\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_variable_table_order_idx\` ON \`pages_blocks_variable_table\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_variable_table_parent_id_idx\` ON \`pages_blocks_variable_table\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_variable_table_path_idx\` ON \`pages_blocks_variable_table\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_variable_table_locale_idx\` ON \`pages_blocks_variable_table\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_table_custom\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_table_custom_order_idx\` ON \`pages_blocks_table_custom\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_table_custom_parent_id_idx\` ON \`pages_blocks_table_custom\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_table_custom_path_idx\` ON \`pages_blocks_table_custom\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_table_custom_locale_idx\` ON \`pages_blocks_table_custom\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_draw_editor\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_picker_id\` integer,
  	\`picker_value\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_picker_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_draw_editor_order_idx\` ON \`pages_blocks_draw_editor\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_draw_editor_parent_id_idx\` ON \`pages_blocks_draw_editor\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_draw_editor_path_idx\` ON \`pages_blocks_draw_editor\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_draw_editor_locale_idx\` ON \`pages_blocks_draw_editor\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_draw_editor_image_picker_idx\` ON \`pages_blocks_draw_editor\` (\`image_picker_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_text_image\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	\`image_id\` integer,
  	\`image_position\` text DEFAULT 'right',
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_text_image_order_idx\` ON \`pages_blocks_text_image\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_text_image_parent_id_idx\` ON \`pages_blocks_text_image\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_text_image_path_idx\` ON \`pages_blocks_text_image\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_text_image_locale_idx\` ON \`pages_blocks_text_image\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_text_image_image_idx\` ON \`pages_blocks_text_image\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_banner\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`banner_settings_anchor_id\` text,
  	\`banner_settings_padding_top\` text DEFAULT 'medium',
  	\`banner_settings_padding_bottom\` text DEFAULT 'medium',
  	\`banner_settings_has_background_image\` integer DEFAULT false,
  	\`banner_settings_background\` text DEFAULT 'light',
  	\`banner_settings_background_image_id\` integer,
  	\`banner_variant\` text DEFAULT 'small',
  	\`banner_content_position\` text DEFAULT 'center',
  	\`caption\` text,
  	\`content\` text,
  	\`banner_button_type\` text DEFAULT 'internal',
  	\`banner_button_new_tab\` integer,
  	\`banner_button_has_anchor\` integer,
  	\`banner_button_dark_button\` integer,
  	\`banner_button_icon_only\` integer DEFAULT false,
  	\`banner_button_icon_position\` text DEFAULT 'left',
  	\`banner_button_icon\` text,
  	\`banner_button_label\` text,
  	\`banner_button_relation\` text DEFAULT 'pages',
  	\`banner_button_url\` text,
  	\`banner_button_anchor_to\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`banner_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_banner_order_idx\` ON \`pages_blocks_banner\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_banner_parent_id_idx\` ON \`pages_blocks_banner\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_banner_path_idx\` ON \`pages_blocks_banner\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_banner_locale_idx\` ON \`pages_blocks_banner\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_banner_banner_settings_banner_settings_background_image_idx\` ON \`pages_blocks_banner\` (\`banner_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_benefits_benefits_row_item_heading_lines\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_benefits_benefits\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_benefits_row_item_heading_lines_order_idx\` ON \`pages_blocks_benefits_benefits_row_item_heading_lines\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_benefits_row_item_heading_lines_parent_id_idx\` ON \`pages_blocks_benefits_benefits_row_item_heading_lines\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_benefits_row_item_heading_lines_locale_idx\` ON \`pages_blocks_benefits_benefits_row_item_heading_lines\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_benefits_benefits_row_item2_heading_lines\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_benefits_benefits\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_benefits_row_item2_heading_lines_order_idx\` ON \`pages_blocks_benefits_benefits_row_item2_heading_lines\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_benefits_row_item2_heading_lines_parent_id_idx\` ON \`pages_blocks_benefits_benefits_row_item2_heading_lines\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_benefits_row_item2_heading_lines_locale_idx\` ON \`pages_blocks_benefits_benefits_row_item2_heading_lines\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_benefits_benefits\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`row_item_image_id\` integer,
  	\`row_item_description\` text,
  	\`row_item2_image_id\` integer,
  	\`row_item2_description\` text,
  	FOREIGN KEY (\`row_item_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`row_item2_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_benefits\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_benefits_order_idx\` ON \`pages_blocks_benefits_benefits\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_benefits_parent_id_idx\` ON \`pages_blocks_benefits_benefits\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_benefits_locale_idx\` ON \`pages_blocks_benefits_benefits\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_benefits_row_item_row_item_image_idx\` ON \`pages_blocks_benefits_benefits\` (\`row_item_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_benefits_row_item2_row_item2_image_idx\` ON \`pages_blocks_benefits_benefits\` (\`row_item2_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_benefits\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`benefits_settings_anchor_id\` text,
  	\`benefits_settings_padding_top\` text DEFAULT 'medium',
  	\`benefits_settings_padding_bottom\` text DEFAULT 'medium',
  	\`benefits_settings_has_background_image\` integer DEFAULT false,
  	\`benefits_settings_background\` text DEFAULT 'dark',
  	\`benefits_settings_background_image_id\` integer,
  	\`show_logo\` integer DEFAULT true,
  	\`content\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`benefits_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_order_idx\` ON \`pages_blocks_benefits\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_parent_id_idx\` ON \`pages_blocks_benefits\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_path_idx\` ON \`pages_blocks_benefits\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_locale_idx\` ON \`pages_blocks_benefits\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_benefits_benefits_settings_benefits_settings_background_image_idx\` ON \`pages_blocks_benefits\` (\`benefits_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact_contact_info_highlighted_contacts\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`item_title\` text,
  	\`item_content\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_contact\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_contact_info_highlighted_contacts_order_idx\` ON \`pages_blocks_contact_contact_info_highlighted_contacts\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_contact_info_highlighted_contacts_parent_id_idx\` ON \`pages_blocks_contact_contact_info_highlighted_contacts\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_contact_info_highlighted_contacts_locale_idx\` ON \`pages_blocks_contact_contact_info_highlighted_contacts\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact_contact_info_contact_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`item_title\` text,
  	\`item_content\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_contact\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_contact_info_contact_items_order_idx\` ON \`pages_blocks_contact_contact_info_contact_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_contact_info_contact_items_parent_id_idx\` ON \`pages_blocks_contact_contact_info_contact_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_contact_info_contact_items_locale_idx\` ON \`pages_blocks_contact_contact_info_contact_items\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`contact_settings_anchor_id\` text,
  	\`contact_settings_padding_top\` text DEFAULT 'medium',
  	\`contact_settings_padding_bottom\` text DEFAULT 'medium',
  	\`contact_settings_has_background_image\` integer DEFAULT false,
  	\`contact_settings_background\` text DEFAULT 'dark',
  	\`contact_settings_background_image_id\` integer,
  	\`contact_settings_heading\` text,
  	\`contact_form_config_first_name_label\` text DEFAULT 'First Name',
  	\`contact_form_config_first_name_placeholder\` text DEFAULT 'Enter your first name',
  	\`contact_form_config_first_name_validation_min_length\` numeric DEFAULT 2,
  	\`contact_form_config_first_name_validation_min_length_message\` text DEFAULT 'First Name must be at least 2 characters long',
  	\`contact_form_config_first_name_validation_required_message\` text DEFAULT 'First Name is required',
  	\`contact_form_config_last_name_label\` text DEFAULT 'Last Name',
  	\`contact_form_config_last_name_placeholder\` text DEFAULT 'Enter your last name',
  	\`contact_form_config_last_name_validation_min_length\` numeric DEFAULT 2,
  	\`contact_form_config_last_name_validation_min_length_message\` text DEFAULT 'Last Name must be at least 2 characters long',
  	\`contact_form_config_last_name_validation_required_message\` text DEFAULT 'Last Name is required',
  	\`contact_form_config_phone_label\` text DEFAULT 'Phone',
  	\`contact_form_config_phone_placeholder\` text DEFAULT 'Enter your phone number',
  	\`contact_form_config_phone_validation_required_message\` text DEFAULT 'Phone is required',
  	\`contact_form_config_email_label\` text DEFAULT 'Email',
  	\`contact_form_config_email_placeholder\` text DEFAULT 'Enter your email address',
  	\`contact_form_config_email_validation_invalid_message\` text DEFAULT 'Please enter a valid email address',
  	\`contact_form_config_email_validation_required_message\` text DEFAULT 'Email is required',
  	\`contact_form_config_message_label\` text DEFAULT 'Message',
  	\`contact_form_config_message_placeholder\` text DEFAULT 'Enter your message',
  	\`contact_form_config_message_validation_required_message\` text DEFAULT 'Message is required',
  	\`contact_form_config_checkbox_with_text_label\` text DEFAULT 'I agree to the terms and conditions',
  	\`contact_form_config_checkbox_with_text_content\` text,
  	\`contact_form_config_checkbox_with_text_validation_required_message\` text DEFAULT 'You must agree to the terms and conditions',
  	\`contact_form_config_submit_button\` text DEFAULT 'Send Message',
  	\`contact_form_config_toast_success_title\` text DEFAULT 'Message Sent!',
  	\`contact_form_config_toast_success_message\` text DEFAULT 'Thank you for your message. We will get back to you soon.',
  	\`contact_form_config_toast_error_title\` text DEFAULT 'Error',
  	\`contact_form_config_toast_error_message\` text DEFAULT 'There was an error sending your message. Please try again.',
  	\`contact_form_config_toast_error_fallback_message\` text DEFAULT 'An unexpected error occurred. Please try again later.',
  	\`contact_form_position\` text,
  	\`contact_form_title\` text,
  	\`variant\` text DEFAULT 'onlyForm',
  	\`block_name\` text,
  	FOREIGN KEY (\`contact_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_order_idx\` ON \`pages_blocks_contact\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_parent_id_idx\` ON \`pages_blocks_contact\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_path_idx\` ON \`pages_blocks_contact\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_locale_idx\` ON \`pages_blocks_contact\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_contact_settings_contact_settings_background_image_idx\` ON \`pages_blocks_contact\` (\`contact_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_content\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content_settings_anchor_id\` text,
  	\`content_settings_padding_top\` text DEFAULT 'medium',
  	\`content_settings_padding_bottom\` text DEFAULT 'medium',
  	\`content_settings_has_background_image\` integer DEFAULT false,
  	\`content_settings_background\` text DEFAULT 'dark',
  	\`content_settings_background_image_id\` integer,
  	\`content\` text,
  	\`content_position\` text DEFAULT 'center',
  	\`block_name\` text,
  	FOREIGN KEY (\`content_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_order_idx\` ON \`pages_blocks_content\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_parent_id_idx\` ON \`pages_blocks_content\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_path_idx\` ON \`pages_blocks_content\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_locale_idx\` ON \`pages_blocks_content\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_content_content_settings_content_settings_background_image_idx\` ON \`pages_blocks_content\` (\`content_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_features_features_with_title\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`feature_icon\` text,
  	\`feature_title\` text,
  	\`feature_description\` text,
  	\`feature_bg\` text DEFAULT 'cream',
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_features\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_features_features_with_title_order_idx\` ON \`pages_blocks_features_features_with_title\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_features_features_with_title_parent_id_idx\` ON \`pages_blocks_features_features_with_title\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_features_features_with_title_locale_idx\` ON \`pages_blocks_features_features_with_title\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_features_features_uppercase\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`feature_icon\` text,
  	\`feature_description\` text,
  	\`feature_bg\` text DEFAULT 'cream',
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_features\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_features_features_uppercase_order_idx\` ON \`pages_blocks_features_features_uppercase\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_features_features_uppercase_parent_id_idx\` ON \`pages_blocks_features_features_uppercase\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_features_features_uppercase_locale_idx\` ON \`pages_blocks_features_features_uppercase\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`features_settings_anchor_id\` text,
  	\`features_settings_padding_top\` text DEFAULT 'medium',
  	\`features_settings_padding_bottom\` text DEFAULT 'medium',
  	\`features_settings_has_background_image\` integer DEFAULT false,
  	\`features_settings_background\` text DEFAULT 'dark',
  	\`features_settings_background_image_id\` integer,
  	\`features_settings_heading\` text,
  	\`features_settings_link_type\` text DEFAULT 'internal',
  	\`features_settings_link_new_tab\` integer,
  	\`features_settings_link_has_anchor\` integer,
  	\`features_settings_link_dark_button\` integer,
  	\`features_settings_link_icon_only\` integer DEFAULT false,
  	\`features_settings_link_icon_position\` text DEFAULT 'left',
  	\`features_settings_link_icon\` text,
  	\`features_settings_link_label\` text,
  	\`features_settings_link_relation\` text DEFAULT 'pages',
  	\`features_settings_link_url\` text,
  	\`features_settings_link_anchor_to\` text,
  	\`features_settings_link_appearance\` text DEFAULT 'primary',
  	\`content\` text,
  	\`features_variant\` text DEFAULT 'uppercase',
  	\`block_name\` text,
  	FOREIGN KEY (\`features_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_features_order_idx\` ON \`pages_blocks_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_features_parent_id_idx\` ON \`pages_blocks_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_features_path_idx\` ON \`pages_blocks_features\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_features_locale_idx\` ON \`pages_blocks_features\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_features_features_settings_features_settings_background_image_idx\` ON \`pages_blocks_features\` (\`features_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_form_form_cfg_flat_disposition_options\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text,
  	\`label\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_form\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_form_cfg_flat_disposition_options_order_idx\` ON \`pages_blocks_form_form_cfg_flat_disposition_options\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_form_cfg_flat_disposition_options_parent_id_idx\` ON \`pages_blocks_form_form_cfg_flat_disposition_options\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_form_cfg_flat_disposition_options_locale_idx\` ON \`pages_blocks_form_form_cfg_flat_disposition_options\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_form_slide_out_boxes\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`column_image_id\` integer,
  	\`column_image2_id\` integer,
  	FOREIGN KEY (\`column_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`column_image2_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_form\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_slide_out_boxes_order_idx\` ON \`pages_blocks_form_slide_out_boxes\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_slide_out_boxes_parent_id_idx\` ON \`pages_blocks_form_slide_out_boxes\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_slide_out_boxes_locale_idx\` ON \`pages_blocks_form_slide_out_boxes\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_slide_out_boxes_column_column_image_idx\` ON \`pages_blocks_form_slide_out_boxes\` (\`column_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_slide_out_boxes_column_column_image2_idx\` ON \`pages_blocks_form_slide_out_boxes\` (\`column_image2_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_form\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`form_settings_anchor_id\` text,
  	\`form_settings_padding_top\` text DEFAULT 'medium',
  	\`form_settings_padding_bottom\` text DEFAULT 'medium',
  	\`form_settings_has_background_image\` integer DEFAULT false,
  	\`form_settings_background\` text DEFAULT 'light',
  	\`form_settings_background_image_id\` integer,
  	\`form_cfg_first_name_label\` text DEFAULT 'First Name',
  	\`form_cfg_first_name_placeholder\` text DEFAULT 'Enter your first name',
  	\`form_cfg_first_name_validation_min_length\` numeric DEFAULT 2,
  	\`form_cfg_first_name_validation_min_length_message\` text DEFAULT 'First name must be at least 2 characters long',
  	\`form_cfg_first_name_validation_required_message\` text DEFAULT 'First name is required',
  	\`form_cfg_last_name_label\` text DEFAULT 'Last Name',
  	\`form_cfg_last_name_placeholder\` text DEFAULT 'Enter your last name',
  	\`form_cfg_last_name_validation_min_length\` numeric DEFAULT 2,
  	\`form_cfg_last_name_validation_min_length_message\` text DEFAULT 'Last Name must be at least 2 characters long',
  	\`form_cfg_last_name_validation_required_message\` text DEFAULT 'Last Name is required',
  	\`form_cfg_phone_label\` text DEFAULT 'Phone',
  	\`form_cfg_phone_placeholder\` text DEFAULT 'Enter your phone number',
  	\`form_cfg_phone_validation_required_message\` text DEFAULT 'Phone is required',
  	\`form_cfg_email_label\` text DEFAULT 'Email',
  	\`form_cfg_email_placeholder\` text DEFAULT 'Enter your email address',
  	\`form_cfg_email_validation_invalid_message\` text DEFAULT 'Please enter a valid email address',
  	\`form_cfg_email_validation_required_message\` text DEFAULT 'Email is required',
  	\`form_cfg_message_label\` text DEFAULT 'Message',
  	\`form_cfg_message_placeholder\` text DEFAULT 'Enter your message',
  	\`form_cfg_message_validation_required_message\` text DEFAULT 'Message is required',
  	\`form_cfg_flat_disposition_label\` text DEFAULT 'Flat Disposition',
  	\`form_cfg_flat_disposition_placeholder\` text DEFAULT 'Select flat disposition',
  	\`form_cfg_flat_disposition_validation_required_message\` text DEFAULT 'Please select a flat disposition',
  	\`form_cfg_bottom_content\` text,
  	\`form_cfg_checkbox_with_text_label\` text DEFAULT '',
  	\`form_cfg_checkbox_with_text_content\` text,
  	\`form_cfg_checkbox_with_text_validation_required_message\` text DEFAULT 'You must agree to the terms and conditions',
  	\`form_cfg_checkbox_with_text_newsletter_label\` text DEFAULT 'I agree to receive newsletters',
  	\`form_cfg_checkbox_with_text_newsletter_content\` text,
  	\`form_cfg_checkbox_with_text_newsletter_validation_required_message\` text DEFAULT 'You must agree to the terms and conditions',
  	\`form_cfg_submit_button\` text DEFAULT 'Send Message',
  	\`form_cfg_toast_success_title\` text DEFAULT 'Message Sent!',
  	\`form_cfg_toast_success_message\` text DEFAULT 'Thank you for your message. We will get back to you soon.',
  	\`form_cfg_toast_error_title\` text DEFAULT 'Error',
  	\`form_cfg_toast_error_message\` text DEFAULT 'There was an error sending your message. Please try again.',
  	\`form_cfg_toast_error_fallback_message\` text DEFAULT 'An unexpected error occurred. Please try again later.',
  	\`form_content\` text,
  	\`layout_variant\` text DEFAULT 'onlyForm',
  	\`form_position\` text,
  	\`layout_content\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`form_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_order_idx\` ON \`pages_blocks_form\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_parent_id_idx\` ON \`pages_blocks_form\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_path_idx\` ON \`pages_blocks_form\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_locale_idx\` ON \`pages_blocks_form\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_form_settings_form_settings_background_image_idx\` ON \`pages_blocks_form\` (\`form_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_flats_snippets\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`flats_set_anchor_id\` text,
  	\`flats_set_padding_top\` text DEFAULT 'medium',
  	\`flats_set_padding_bottom\` text DEFAULT 'medium',
  	\`flats_set_has_background_image\` integer DEFAULT false,
  	\`flats_set_background\` text DEFAULT 'dark',
  	\`flats_set_background_image_id\` integer,
  	\`flats_set_heading\` text,
  	\`flats_set_link_type\` text DEFAULT 'internal',
  	\`flats_set_link_new_tab\` integer,
  	\`flats_set_link_has_anchor\` integer,
  	\`flats_set_link_dark_button\` integer,
  	\`flats_set_link_icon_only\` integer DEFAULT false,
  	\`flats_set_link_icon_position\` text DEFAULT 'left',
  	\`flats_set_link_icon\` text,
  	\`flats_set_link_label\` text,
  	\`flats_set_link_relation\` text DEFAULT 'pages',
  	\`flats_set_link_url\` text,
  	\`flats_set_link_anchor_to\` text,
  	\`flats_set_link_appearance\` text DEFAULT 'primary',
  	\`block_name\` text,
  	FOREIGN KEY (\`flats_set_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_flats_snippets_order_idx\` ON \`pages_blocks_flats_snippets\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_flats_snippets_parent_id_idx\` ON \`pages_blocks_flats_snippets\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_flats_snippets_path_idx\` ON \`pages_blocks_flats_snippets\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_flats_snippets_locale_idx\` ON \`pages_blocks_flats_snippets\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_flats_snippets_flats_set_flats_set_background_image_idx\` ON \`pages_blocks_flats_snippets\` (\`flats_set_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_gallery_simple_slider\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`slide_width\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_simple_slider_order_idx\` ON \`pages_blocks_gallery_simple_slider\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_simple_slider_parent_id_idx\` ON \`pages_blocks_gallery_simple_slider\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_simple_slider_locale_idx\` ON \`pages_blocks_gallery_simple_slider\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_simple_slider_image_idx\` ON \`pages_blocks_gallery_simple_slider\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_gallery_multi_slider_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`slide_width\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_gallery_multi_slider\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_multi_slider_images_order_idx\` ON \`pages_blocks_gallery_multi_slider_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_multi_slider_images_parent_id_idx\` ON \`pages_blocks_gallery_multi_slider_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_multi_slider_images_locale_idx\` ON \`pages_blocks_gallery_multi_slider_images\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_multi_slider_images_image_idx\` ON \`pages_blocks_gallery_multi_slider_images\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_gallery_multi_slider\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`tab_title\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_multi_slider_order_idx\` ON \`pages_blocks_gallery_multi_slider\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_multi_slider_parent_id_idx\` ON \`pages_blocks_gallery_multi_slider\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_multi_slider_locale_idx\` ON \`pages_blocks_gallery_multi_slider\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_gallery_full_width\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_full_width_order_idx\` ON \`pages_blocks_gallery_full_width\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_full_width_parent_id_idx\` ON \`pages_blocks_gallery_full_width\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_full_width_locale_idx\` ON \`pages_blocks_gallery_full_width\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_full_width_image_idx\` ON \`pages_blocks_gallery_full_width\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_gallery\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`gallery_settings_anchor_id\` text,
  	\`gallery_settings_padding_top\` text DEFAULT 'medium',
  	\`gallery_settings_padding_bottom\` text DEFAULT 'medium',
  	\`gallery_settings_has_background_image\` integer DEFAULT false,
  	\`gallery_settings_background\` text DEFAULT 'dark',
  	\`gallery_settings_background_image_id\` integer,
  	\`controls_type\` text DEFAULT 'arrows',
  	\`autoplay\` integer DEFAULT false,
  	\`content\` text,
  	\`gallery_variant\` text DEFAULT 'simpleSlider',
  	\`link_type\` text DEFAULT 'internal',
  	\`link_new_tab\` integer,
  	\`link_has_anchor\` integer,
  	\`link_dark_button\` integer,
  	\`link_icon_only\` integer DEFAULT false,
  	\`link_icon_position\` text DEFAULT 'left',
  	\`link_icon\` text,
  	\`link_label\` text,
  	\`link_relation\` text DEFAULT 'pages',
  	\`link_url\` text,
  	\`link_anchor_to\` text,
  	\`link_appearance\` text DEFAULT 'primary',
  	\`block_name\` text,
  	FOREIGN KEY (\`gallery_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_order_idx\` ON \`pages_blocks_gallery\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_parent_id_idx\` ON \`pages_blocks_gallery\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_path_idx\` ON \`pages_blocks_gallery\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_locale_idx\` ON \`pages_blocks_gallery\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_gallery_settings_gallery_settings_background_image_idx\` ON \`pages_blocks_gallery\` (\`gallery_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_highlighted_text\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`high_set_anchor_id\` text,
  	\`high_set_padding_top\` text DEFAULT 'medium',
  	\`high_set_padding_bottom\` text DEFAULT 'medium',
  	\`high_set_has_background_image\` integer DEFAULT false,
  	\`high_set_background\` text DEFAULT 'dark',
  	\`high_set_background_image_id\` integer,
  	\`title\` text,
  	\`highlighted_text\` text,
  	\`highlighted_link_type\` text DEFAULT 'internal',
  	\`highlighted_link_new_tab\` integer,
  	\`highlighted_link_has_anchor\` integer,
  	\`highlighted_link_dark_button\` integer,
  	\`highlighted_link_icon_only\` integer DEFAULT false,
  	\`highlighted_link_icon_position\` text DEFAULT 'left',
  	\`highlighted_link_icon\` text,
  	\`highlighted_link_label\` text,
  	\`highlighted_link_relation\` text DEFAULT 'pages',
  	\`highlighted_link_url\` text,
  	\`highlighted_link_anchor_to\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`high_set_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_highlighted_text_order_idx\` ON \`pages_blocks_highlighted_text\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_highlighted_text_parent_id_idx\` ON \`pages_blocks_highlighted_text\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_highlighted_text_path_idx\` ON \`pages_blocks_highlighted_text\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_highlighted_text_locale_idx\` ON \`pages_blocks_highlighted_text\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_highlighted_text_high_set_high_set_background_image_idx\` ON \`pages_blocks_highlighted_text\` (\`high_set_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_images_grid_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_images_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_images_grid_images_order_idx\` ON \`pages_blocks_images_grid_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_images_grid_images_parent_id_idx\` ON \`pages_blocks_images_grid_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_images_grid_images_locale_idx\` ON \`pages_blocks_images_grid_images\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_images_grid_images_image_idx\` ON \`pages_blocks_images_grid_images\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_images_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`images_settings_anchor_id\` text,
  	\`images_settings_padding_top\` text DEFAULT 'medium',
  	\`images_settings_padding_bottom\` text DEFAULT 'medium',
  	\`images_settings_has_background_image\` integer DEFAULT false,
  	\`images_settings_background\` text DEFAULT 'dark',
  	\`images_settings_background_image_id\` integer,
  	\`direction_variant\` text DEFAULT 'default',
  	\`block_name\` text,
  	FOREIGN KEY (\`images_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_images_grid_order_idx\` ON \`pages_blocks_images_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_images_grid_parent_id_idx\` ON \`pages_blocks_images_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_images_grid_path_idx\` ON \`pages_blocks_images_grid\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_images_grid_locale_idx\` ON \`pages_blocks_images_grid\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_images_grid_images_settings_images_settings_background_image_idx\` ON \`pages_blocks_images_grid\` (\`images_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_image_pins_pins\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`withlogo\` integer DEFAULT false,
  	\`reverse_layout\` integer DEFAULT false,
  	\`highlighted\` integer DEFAULT false,
  	\`logo_id\` integer,
  	\`marker_label\` text,
  	\`x\` numeric,
  	\`x_mobile\` numeric,
  	\`y\` numeric,
  	\`y_mobile\` numeric,
  	\`pin_height\` numeric,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_image_pins\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_image_pins_pins_order_idx\` ON \`pages_blocks_image_pins_pins\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_image_pins_pins_parent_id_idx\` ON \`pages_blocks_image_pins_pins\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_image_pins_pins_locale_idx\` ON \`pages_blocks_image_pins_pins\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_image_pins_pins_logo_idx\` ON \`pages_blocks_image_pins_pins\` (\`logo_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_image_pins\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_pins_set_anchor_id\` text,
  	\`image_pins_set_padding_top\` text DEFAULT 'medium',
  	\`image_pins_set_padding_bottom\` text DEFAULT 'medium',
  	\`image_pins_set_has_background_image\` integer DEFAULT false,
  	\`image_pins_set_background\` text DEFAULT 'dark',
  	\`image_pins_set_background_image_id\` integer,
  	\`text\` text,
  	\`background_image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_pins_set_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_image_pins_order_idx\` ON \`pages_blocks_image_pins\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_image_pins_parent_id_idx\` ON \`pages_blocks_image_pins\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_image_pins_path_idx\` ON \`pages_blocks_image_pins\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_image_pins_locale_idx\` ON \`pages_blocks_image_pins\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_image_pins_image_pins_set_image_pins_set_background_image_idx\` ON \`pages_blocks_image_pins\` (\`image_pins_set_background_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_image_pins_background_image_idx\` ON \`pages_blocks_image_pins\` (\`background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_map\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`map_settings_anchor_id\` text,
  	\`map_settings_padding_top\` text DEFAULT 'medium',
  	\`map_settings_padding_bottom\` text DEFAULT 'medium',
  	\`map_settings_has_background_image\` integer DEFAULT false,
  	\`map_settings_background\` text DEFAULT 'dark',
  	\`map_settings_background_image_id\` integer,
  	\`map_id\` integer,
  	\`map_link\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`map_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`map_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_map_order_idx\` ON \`pages_blocks_map\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_map_parent_id_idx\` ON \`pages_blocks_map\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_map_path_idx\` ON \`pages_blocks_map\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_map_locale_idx\` ON \`pages_blocks_map\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_map_map_settings_map_settings_background_image_idx\` ON \`pages_blocks_map\` (\`map_settings_background_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_map_map_idx\` ON \`pages_blocks_map\` (\`map_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_news_snippets\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`news_set_anchor_id\` text,
  	\`news_set_padding_top\` text DEFAULT 'medium',
  	\`news_set_padding_bottom\` text DEFAULT 'medium',
  	\`news_set_has_background_image\` integer DEFAULT false,
  	\`news_set_background\` text DEFAULT 'dark',
  	\`news_set_background_image_id\` integer,
  	\`news_set_heading\` text,
  	\`news_set_link_type\` text DEFAULT 'internal',
  	\`news_set_link_new_tab\` integer,
  	\`news_set_link_has_anchor\` integer,
  	\`news_set_link_dark_button\` integer,
  	\`news_set_link_icon_only\` integer DEFAULT false,
  	\`news_set_link_icon_position\` text DEFAULT 'left',
  	\`news_set_link_icon\` text,
  	\`news_set_link_label\` text,
  	\`news_set_link_relation\` text DEFAULT 'pages',
  	\`news_set_link_url\` text,
  	\`news_set_link_anchor_to\` text,
  	\`news_set_link_appearance\` text DEFAULT 'primary',
  	\`block_name\` text,
  	FOREIGN KEY (\`news_set_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_news_snippets_order_idx\` ON \`pages_blocks_news_snippets\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_news_snippets_parent_id_idx\` ON \`pages_blocks_news_snippets\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_news_snippets_path_idx\` ON \`pages_blocks_news_snippets\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_news_snippets_locale_idx\` ON \`pages_blocks_news_snippets\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_news_snippets_news_set_news_set_background_image_idx\` ON \`pages_blocks_news_snippets\` (\`news_set_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_numbers_numbers\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`number\` numeric,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_numbers\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_numbers_numbers_order_idx\` ON \`pages_blocks_numbers_numbers\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_numbers_numbers_parent_id_idx\` ON \`pages_blocks_numbers_numbers\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_numbers_numbers_locale_idx\` ON \`pages_blocks_numbers_numbers\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_numbers\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`numbers_settings_anchor_id\` text,
  	\`numbers_settings_padding_top\` text DEFAULT 'medium',
  	\`numbers_settings_padding_bottom\` text DEFAULT 'medium',
  	\`numbers_settings_has_background_image\` integer DEFAULT false,
  	\`numbers_settings_background\` text DEFAULT 'dark',
  	\`numbers_settings_background_image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`numbers_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_numbers_order_idx\` ON \`pages_blocks_numbers\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_numbers_parent_id_idx\` ON \`pages_blocks_numbers\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_numbers_path_idx\` ON \`pages_blocks_numbers\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_numbers_locale_idx\` ON \`pages_blocks_numbers\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_numbers_numbers_settings_numbers_settings_background_image_idx\` ON \`pages_blocks_numbers\` (\`numbers_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_timeline_timeline\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_timeline\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_timeline_timeline_order_idx\` ON \`pages_blocks_timeline_timeline\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_timeline_timeline_parent_id_idx\` ON \`pages_blocks_timeline_timeline\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_timeline_timeline_locale_idx\` ON \`pages_blocks_timeline_timeline\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_timeline\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`timeline_settings_anchor_id\` text,
  	\`timeline_settings_padding_top\` text DEFAULT 'medium',
  	\`timeline_settings_padding_bottom\` text DEFAULT 'medium',
  	\`timeline_settings_has_background_image\` integer DEFAULT false,
  	\`timeline_settings_background\` text DEFAULT 'dark',
  	\`timeline_settings_background_image_id\` integer,
  	\`content\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`timeline_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_timeline_order_idx\` ON \`pages_blocks_timeline\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_timeline_parent_id_idx\` ON \`pages_blocks_timeline\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_timeline_path_idx\` ON \`pages_blocks_timeline\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_timeline_locale_idx\` ON \`pages_blocks_timeline\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_timeline_timeline_settings_timeline_settings_background_image_idx\` ON \`pages_blocks_timeline\` (\`timeline_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_prices\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`prices_settings_anchor_id\` text,
  	\`prices_settings_padding_top\` text DEFAULT 'medium',
  	\`prices_settings_padding_bottom\` text DEFAULT 'medium',
  	\`prices_settings_has_background_image\` integer DEFAULT false,
  	\`prices_settings_background\` text DEFAULT 'dark',
  	\`prices_settings_background_image_id\` integer,
  	\`bottom_content\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`prices_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_prices_order_idx\` ON \`pages_blocks_prices\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_prices_parent_id_idx\` ON \`pages_blocks_prices\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_prices_path_idx\` ON \`pages_blocks_prices\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_prices_locale_idx\` ON \`pages_blocks_prices\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_prices_prices_settings_prices_settings_background_image_idx\` ON \`pages_blocks_prices\` (\`prices_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_interactive_picker_extended_views\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`view_name\` text,
  	\`image_id\` integer,
  	\`direct\` text DEFAULT 'south',
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_interactive_picker_extended\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_interactive_picker_extended_views_order_idx\` ON \`pages_blocks_interactive_picker_extended_views\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_interactive_picker_extended_views_parent_id_idx\` ON \`pages_blocks_interactive_picker_extended_views\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_interactive_picker_extended_views_locale_idx\` ON \`pages_blocks_interactive_picker_extended_views\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_interactive_picker_extended_views_image_idx\` ON \`pages_blocks_interactive_picker_extended_views\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_interactive_picker_extended\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`picker_value\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_interactive_picker_extended_order_idx\` ON \`pages_blocks_interactive_picker_extended\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_interactive_picker_extended_parent_id_idx\` ON \`pages_blocks_interactive_picker_extended\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_interactive_picker_extended_path_idx\` ON \`pages_blocks_interactive_picker_extended\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_interactive_picker_extended_locale_idx\` ON \`pages_blocks_interactive_picker_extended\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_visual_price_list_buildings\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`building_id\` integer,
  	FOREIGN KEY (\`building_id\`) REFERENCES \`buildings\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_visual_price_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_visual_price_list_buildings_order_idx\` ON \`pages_blocks_visual_price_list_buildings\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_visual_price_list_buildings_parent_id_idx\` ON \`pages_blocks_visual_price_list_buildings\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_visual_price_list_buildings_locale_idx\` ON \`pages_blocks_visual_price_list_buildings\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_visual_price_list_buildings_building_idx\` ON \`pages_blocks_visual_price_list_buildings\` (\`building_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_visual_price_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_visual_price_list_order_idx\` ON \`pages_blocks_visual_price_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_visual_price_list_parent_id_idx\` ON \`pages_blocks_visual_price_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_visual_price_list_path_idx\` ON \`pages_blocks_visual_price_list\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_visual_price_list_locale_idx\` ON \`pages_blocks_visual_price_list\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_shared_section\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`shared_section_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`shared_section_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_shared_section_order_idx\` ON \`pages_blocks_shared_section\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_shared_section_parent_id_idx\` ON \`pages_blocks_shared_section\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_shared_section_path_idx\` ON \`pages_blocks_shared_section\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_shared_section_locale_idx\` ON \`pages_blocks_shared_section\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_shared_section_shared_section_idx\` ON \`pages_blocks_shared_section\` (\`shared_section_id\`);`)
  await db.run(sql`CREATE TABLE \`pages\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`project_id\` integer,
  	\`meta_og_image_id\` integer,
  	\`meta_twitter_card\` text DEFAULT 'summary_large_image',
  	\`meta_structured_data\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft',
  	FOREIGN KEY (\`project_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`meta_og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_project_idx\` ON \`pages\` (\`project_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_meta_meta_og_image_idx\` ON \`pages\` (\`meta_og_image_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_updated_at_idx\` ON \`pages\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`pages_created_at_idx\` ON \`pages\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`pages__status_idx\` ON \`pages\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`pages_locales\` (
  	\`title\` text,
  	\`slug\` text,
  	\`news_page_header\` text,
  	\`meta_title\` text,
  	\`meta_description\` text,
  	\`meta_keywords\` text,
  	\`meta_og_title\` text,
  	\`meta_og_description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_slug_idx\` ON \`pages_locales\` (\`slug\`,\`_locale\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_locales_locale_parent_id_unique\` ON \`pages_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`locale\` text,
  	\`pages_id\` integer,
  	\`flats_id\` integer,
  	\`news_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`flats_id\`) REFERENCES \`flats\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`news_id\`) REFERENCES \`news\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_rels_order_idx\` ON \`pages_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`pages_rels_parent_idx\` ON \`pages_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_rels_path_idx\` ON \`pages_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`pages_rels_locale_idx\` ON \`pages_rels\` (\`locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_rels_pages_id_idx\` ON \`pages_rels\` (\`pages_id\`,\`locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_rels_flats_id_idx\` ON \`pages_rels\` (\`flats_id\`,\`locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_rels_news_id_idx\` ON \`pages_rels\` (\`news_id\`,\`locale\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_hero_hero_slideshow\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`title\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_hero\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_hero_slideshow_order_idx\` ON \`_pages_v_blocks_hero_hero_slideshow\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_hero_slideshow_parent_id_idx\` ON \`_pages_v_blocks_hero_hero_slideshow\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_hero_slideshow_locale_idx\` ON \`_pages_v_blocks_hero_hero_slideshow\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_hero_slideshow_image_idx\` ON \`_pages_v_blocks_hero_hero_slideshow\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_hero_main_buttons\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'internal',
  	\`link_new_tab\` integer,
  	\`link_has_anchor\` integer,
  	\`link_dark_button\` integer,
  	\`link_icon_only\` integer DEFAULT false,
  	\`link_icon_position\` text DEFAULT 'left',
  	\`link_icon\` text,
  	\`link_label\` text,
  	\`link_relation\` text DEFAULT 'pages',
  	\`link_url\` text,
  	\`link_anchor_to\` text,
  	\`link_appearance\` text DEFAULT 'primary',
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_hero\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_main_buttons_order_idx\` ON \`_pages_v_blocks_hero_main_buttons\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_main_buttons_parent_id_idx\` ON \`_pages_v_blocks_hero_main_buttons\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_main_buttons_locale_idx\` ON \`_pages_v_blocks_hero_main_buttons\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_hero_secondary_buttons\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'internal',
  	\`link_new_tab\` integer,
  	\`link_has_anchor\` integer,
  	\`link_dark_button\` integer,
  	\`link_icon_only\` integer DEFAULT false,
  	\`link_icon_position\` text DEFAULT 'left',
  	\`link_icon\` text,
  	\`link_label\` text,
  	\`link_relation\` text DEFAULT 'pages',
  	\`link_url\` text,
  	\`link_anchor_to\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_hero\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_secondary_buttons_order_idx\` ON \`_pages_v_blocks_hero_secondary_buttons\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_secondary_buttons_parent_id_idx\` ON \`_pages_v_blocks_hero_secondary_buttons\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_secondary_buttons_locale_idx\` ON \`_pages_v_blocks_hero_secondary_buttons\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_hero\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`type\` text DEFAULT 'imageOnly',
  	\`content\` text,
  	\`hero_image_id\` integer,
  	\`hero_video_id\` integer,
  	\`left_upper_text\` text,
  	\`right_upper_text\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`hero_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`hero_video_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_order_idx\` ON \`_pages_v_blocks_hero\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_parent_id_idx\` ON \`_pages_v_blocks_hero\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_path_idx\` ON \`_pages_v_blocks_hero\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_locale_idx\` ON \`_pages_v_blocks_hero\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_hero_image_idx\` ON \`_pages_v_blocks_hero\` (\`hero_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_hero_hero_video_idx\` ON \`_pages_v_blocks_hero\` (\`hero_video_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_variable_table_rows_cells\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`value\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_variable_table_rows\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_variable_table_rows_cells_order_idx\` ON \`_pages_v_blocks_variable_table_rows_cells\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_variable_table_rows_cells_parent_id_idx\` ON \`_pages_v_blocks_variable_table_rows_cells\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_variable_table_rows_cells_locale_idx\` ON \`_pages_v_blocks_variable_table_rows_cells\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_variable_table_rows\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`row_index\` numeric,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_variable_table\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_variable_table_rows_order_idx\` ON \`_pages_v_blocks_variable_table_rows\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_variable_table_rows_parent_id_idx\` ON \`_pages_v_blocks_variable_table_rows\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_variable_table_rows_locale_idx\` ON \`_pages_v_blocks_variable_table_rows\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_variable_table\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_variable_table_order_idx\` ON \`_pages_v_blocks_variable_table\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_variable_table_parent_id_idx\` ON \`_pages_v_blocks_variable_table\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_variable_table_path_idx\` ON \`_pages_v_blocks_variable_table\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_variable_table_locale_idx\` ON \`_pages_v_blocks_variable_table\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_table_custom\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_table_custom_order_idx\` ON \`_pages_v_blocks_table_custom\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_table_custom_parent_id_idx\` ON \`_pages_v_blocks_table_custom\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_table_custom_path_idx\` ON \`_pages_v_blocks_table_custom\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_table_custom_locale_idx\` ON \`_pages_v_blocks_table_custom\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_draw_editor\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_picker_id\` integer,
  	\`picker_value\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_picker_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_draw_editor_order_idx\` ON \`_pages_v_blocks_draw_editor\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_draw_editor_parent_id_idx\` ON \`_pages_v_blocks_draw_editor\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_draw_editor_path_idx\` ON \`_pages_v_blocks_draw_editor\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_draw_editor_locale_idx\` ON \`_pages_v_blocks_draw_editor\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_draw_editor_image_picker_idx\` ON \`_pages_v_blocks_draw_editor\` (\`image_picker_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_text_image\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`text\` text,
  	\`image_id\` integer,
  	\`image_position\` text DEFAULT 'right',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_text_image_order_idx\` ON \`_pages_v_blocks_text_image\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_text_image_parent_id_idx\` ON \`_pages_v_blocks_text_image\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_text_image_path_idx\` ON \`_pages_v_blocks_text_image\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_text_image_locale_idx\` ON \`_pages_v_blocks_text_image\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_text_image_image_idx\` ON \`_pages_v_blocks_text_image\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_banner\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`banner_settings_anchor_id\` text,
  	\`banner_settings_padding_top\` text DEFAULT 'medium',
  	\`banner_settings_padding_bottom\` text DEFAULT 'medium',
  	\`banner_settings_has_background_image\` integer DEFAULT false,
  	\`banner_settings_background\` text DEFAULT 'light',
  	\`banner_settings_background_image_id\` integer,
  	\`banner_variant\` text DEFAULT 'small',
  	\`banner_content_position\` text DEFAULT 'center',
  	\`caption\` text,
  	\`content\` text,
  	\`banner_button_type\` text DEFAULT 'internal',
  	\`banner_button_new_tab\` integer,
  	\`banner_button_has_anchor\` integer,
  	\`banner_button_dark_button\` integer,
  	\`banner_button_icon_only\` integer DEFAULT false,
  	\`banner_button_icon_position\` text DEFAULT 'left',
  	\`banner_button_icon\` text,
  	\`banner_button_label\` text,
  	\`banner_button_relation\` text DEFAULT 'pages',
  	\`banner_button_url\` text,
  	\`banner_button_anchor_to\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`banner_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_banner_order_idx\` ON \`_pages_v_blocks_banner\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_banner_parent_id_idx\` ON \`_pages_v_blocks_banner\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_banner_path_idx\` ON \`_pages_v_blocks_banner\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_banner_locale_idx\` ON \`_pages_v_blocks_banner\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_banner_banner_settings_banner_settings_background_image_idx\` ON \`_pages_v_blocks_banner\` (\`banner_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_benefits_benefits_row_item_heading_lines\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`text\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_benefits_benefits\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_benefits_benefits_row_item_heading_lines_order_idx\` ON \`_pages_v_blocks_benefits_benefits_row_item_heading_lines\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_benefits_benefits_row_item_heading_lines_parent_id_idx\` ON \`_pages_v_blocks_benefits_benefits_row_item_heading_lines\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_benefits_benefits_row_item_heading_lines_locale_idx\` ON \`_pages_v_blocks_benefits_benefits_row_item_heading_lines\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_benefits_benefits_row_item2_heading_lines\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`text\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_benefits_benefits\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_benefits_benefits_row_item2_heading_lines_order_idx\` ON \`_pages_v_blocks_benefits_benefits_row_item2_heading_lines\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_benefits_benefits_row_item2_heading_lines_parent_id_idx\` ON \`_pages_v_blocks_benefits_benefits_row_item2_heading_lines\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_benefits_benefits_row_item2_heading_lines_locale_idx\` ON \`_pages_v_blocks_benefits_benefits_row_item2_heading_lines\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_benefits_benefits\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`row_item_image_id\` integer,
  	\`row_item_description\` text,
  	\`row_item2_image_id\` integer,
  	\`row_item2_description\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`row_item_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`row_item2_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_benefits\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_benefits_benefits_order_idx\` ON \`_pages_v_blocks_benefits_benefits\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_benefits_benefits_parent_id_idx\` ON \`_pages_v_blocks_benefits_benefits\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_benefits_benefits_locale_idx\` ON \`_pages_v_blocks_benefits_benefits\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_benefits_benefits_row_item_row_item_image_idx\` ON \`_pages_v_blocks_benefits_benefits\` (\`row_item_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_benefits_benefits_row_item2_row_item2_image_idx\` ON \`_pages_v_blocks_benefits_benefits\` (\`row_item2_image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_benefits\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`benefits_settings_anchor_id\` text,
  	\`benefits_settings_padding_top\` text DEFAULT 'medium',
  	\`benefits_settings_padding_bottom\` text DEFAULT 'medium',
  	\`benefits_settings_has_background_image\` integer DEFAULT false,
  	\`benefits_settings_background\` text DEFAULT 'dark',
  	\`benefits_settings_background_image_id\` integer,
  	\`show_logo\` integer DEFAULT true,
  	\`content\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`benefits_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_benefits_order_idx\` ON \`_pages_v_blocks_benefits\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_benefits_parent_id_idx\` ON \`_pages_v_blocks_benefits\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_benefits_path_idx\` ON \`_pages_v_blocks_benefits\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_benefits_locale_idx\` ON \`_pages_v_blocks_benefits\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_benefits_benefits_settings_benefits_settings_background_image_idx\` ON \`_pages_v_blocks_benefits\` (\`benefits_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_contact_contact_info_highlighted_contacts\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`item_title\` text,
  	\`item_content\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_contact\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_contact_info_highlighted_contacts_order_idx\` ON \`_pages_v_blocks_contact_contact_info_highlighted_contacts\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_contact_info_highlighted_contacts_parent_id_idx\` ON \`_pages_v_blocks_contact_contact_info_highlighted_contacts\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_contact_info_highlighted_contacts_locale_idx\` ON \`_pages_v_blocks_contact_contact_info_highlighted_contacts\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_contact_contact_info_contact_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`item_title\` text,
  	\`item_content\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_contact\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_contact_info_contact_items_order_idx\` ON \`_pages_v_blocks_contact_contact_info_contact_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_contact_info_contact_items_parent_id_idx\` ON \`_pages_v_blocks_contact_contact_info_contact_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_contact_info_contact_items_locale_idx\` ON \`_pages_v_blocks_contact_contact_info_contact_items\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_contact\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`contact_settings_anchor_id\` text,
  	\`contact_settings_padding_top\` text DEFAULT 'medium',
  	\`contact_settings_padding_bottom\` text DEFAULT 'medium',
  	\`contact_settings_has_background_image\` integer DEFAULT false,
  	\`contact_settings_background\` text DEFAULT 'dark',
  	\`contact_settings_background_image_id\` integer,
  	\`contact_settings_heading\` text,
  	\`contact_form_config_first_name_label\` text DEFAULT 'First Name',
  	\`contact_form_config_first_name_placeholder\` text DEFAULT 'Enter your first name',
  	\`contact_form_config_first_name_validation_min_length\` numeric DEFAULT 2,
  	\`contact_form_config_first_name_validation_min_length_message\` text DEFAULT 'First Name must be at least 2 characters long',
  	\`contact_form_config_first_name_validation_required_message\` text DEFAULT 'First Name is required',
  	\`contact_form_config_last_name_label\` text DEFAULT 'Last Name',
  	\`contact_form_config_last_name_placeholder\` text DEFAULT 'Enter your last name',
  	\`contact_form_config_last_name_validation_min_length\` numeric DEFAULT 2,
  	\`contact_form_config_last_name_validation_min_length_message\` text DEFAULT 'Last Name must be at least 2 characters long',
  	\`contact_form_config_last_name_validation_required_message\` text DEFAULT 'Last Name is required',
  	\`contact_form_config_phone_label\` text DEFAULT 'Phone',
  	\`contact_form_config_phone_placeholder\` text DEFAULT 'Enter your phone number',
  	\`contact_form_config_phone_validation_required_message\` text DEFAULT 'Phone is required',
  	\`contact_form_config_email_label\` text DEFAULT 'Email',
  	\`contact_form_config_email_placeholder\` text DEFAULT 'Enter your email address',
  	\`contact_form_config_email_validation_invalid_message\` text DEFAULT 'Please enter a valid email address',
  	\`contact_form_config_email_validation_required_message\` text DEFAULT 'Email is required',
  	\`contact_form_config_message_label\` text DEFAULT 'Message',
  	\`contact_form_config_message_placeholder\` text DEFAULT 'Enter your message',
  	\`contact_form_config_message_validation_required_message\` text DEFAULT 'Message is required',
  	\`contact_form_config_checkbox_with_text_label\` text DEFAULT 'I agree to the terms and conditions',
  	\`contact_form_config_checkbox_with_text_content\` text,
  	\`contact_form_config_checkbox_with_text_validation_required_message\` text DEFAULT 'You must agree to the terms and conditions',
  	\`contact_form_config_submit_button\` text DEFAULT 'Send Message',
  	\`contact_form_config_toast_success_title\` text DEFAULT 'Message Sent!',
  	\`contact_form_config_toast_success_message\` text DEFAULT 'Thank you for your message. We will get back to you soon.',
  	\`contact_form_config_toast_error_title\` text DEFAULT 'Error',
  	\`contact_form_config_toast_error_message\` text DEFAULT 'There was an error sending your message. Please try again.',
  	\`contact_form_config_toast_error_fallback_message\` text DEFAULT 'An unexpected error occurred. Please try again later.',
  	\`contact_form_position\` text,
  	\`contact_form_title\` text,
  	\`variant\` text DEFAULT 'onlyForm',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`contact_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_order_idx\` ON \`_pages_v_blocks_contact\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_parent_id_idx\` ON \`_pages_v_blocks_contact\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_path_idx\` ON \`_pages_v_blocks_contact\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_locale_idx\` ON \`_pages_v_blocks_contact\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_contact_settings_contact_settings_background_image_idx\` ON \`_pages_v_blocks_contact\` (\`contact_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_content\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`content_settings_anchor_id\` text,
  	\`content_settings_padding_top\` text DEFAULT 'medium',
  	\`content_settings_padding_bottom\` text DEFAULT 'medium',
  	\`content_settings_has_background_image\` integer DEFAULT false,
  	\`content_settings_background\` text DEFAULT 'dark',
  	\`content_settings_background_image_id\` integer,
  	\`content\` text,
  	\`content_position\` text DEFAULT 'center',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`content_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_content_order_idx\` ON \`_pages_v_blocks_content\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_content_parent_id_idx\` ON \`_pages_v_blocks_content\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_content_path_idx\` ON \`_pages_v_blocks_content\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_content_locale_idx\` ON \`_pages_v_blocks_content\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_content_content_settings_content_settings_background_image_idx\` ON \`_pages_v_blocks_content\` (\`content_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_features_features_with_title\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`feature_icon\` text,
  	\`feature_title\` text,
  	\`feature_description\` text,
  	\`feature_bg\` text DEFAULT 'cream',
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_features\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_features_features_with_title_order_idx\` ON \`_pages_v_blocks_features_features_with_title\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_features_features_with_title_parent_id_idx\` ON \`_pages_v_blocks_features_features_with_title\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_features_features_with_title_locale_idx\` ON \`_pages_v_blocks_features_features_with_title\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_features_features_uppercase\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`feature_icon\` text,
  	\`feature_description\` text,
  	\`feature_bg\` text DEFAULT 'cream',
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_features\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_features_features_uppercase_order_idx\` ON \`_pages_v_blocks_features_features_uppercase\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_features_features_uppercase_parent_id_idx\` ON \`_pages_v_blocks_features_features_uppercase\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_features_features_uppercase_locale_idx\` ON \`_pages_v_blocks_features_features_uppercase\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`features_settings_anchor_id\` text,
  	\`features_settings_padding_top\` text DEFAULT 'medium',
  	\`features_settings_padding_bottom\` text DEFAULT 'medium',
  	\`features_settings_has_background_image\` integer DEFAULT false,
  	\`features_settings_background\` text DEFAULT 'dark',
  	\`features_settings_background_image_id\` integer,
  	\`features_settings_heading\` text,
  	\`features_settings_link_type\` text DEFAULT 'internal',
  	\`features_settings_link_new_tab\` integer,
  	\`features_settings_link_has_anchor\` integer,
  	\`features_settings_link_dark_button\` integer,
  	\`features_settings_link_icon_only\` integer DEFAULT false,
  	\`features_settings_link_icon_position\` text DEFAULT 'left',
  	\`features_settings_link_icon\` text,
  	\`features_settings_link_label\` text,
  	\`features_settings_link_relation\` text DEFAULT 'pages',
  	\`features_settings_link_url\` text,
  	\`features_settings_link_anchor_to\` text,
  	\`features_settings_link_appearance\` text DEFAULT 'primary',
  	\`content\` text,
  	\`features_variant\` text DEFAULT 'uppercase',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`features_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_features_order_idx\` ON \`_pages_v_blocks_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_features_parent_id_idx\` ON \`_pages_v_blocks_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_features_path_idx\` ON \`_pages_v_blocks_features\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_features_locale_idx\` ON \`_pages_v_blocks_features\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_features_features_settings_features_settings_background_image_idx\` ON \`_pages_v_blocks_features\` (\`features_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_form_form_cfg_flat_disposition_options\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`value\` text,
  	\`label\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_form\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_form_cfg_flat_disposition_options_order_idx\` ON \`_pages_v_blocks_form_form_cfg_flat_disposition_options\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_form_cfg_flat_disposition_options_parent_id_idx\` ON \`_pages_v_blocks_form_form_cfg_flat_disposition_options\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_form_cfg_flat_disposition_options_locale_idx\` ON \`_pages_v_blocks_form_form_cfg_flat_disposition_options\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_form_slide_out_boxes\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`column_image_id\` integer,
  	\`column_image2_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`column_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`column_image2_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_form\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_slide_out_boxes_order_idx\` ON \`_pages_v_blocks_form_slide_out_boxes\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_slide_out_boxes_parent_id_idx\` ON \`_pages_v_blocks_form_slide_out_boxes\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_slide_out_boxes_locale_idx\` ON \`_pages_v_blocks_form_slide_out_boxes\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_slide_out_boxes_column_column_image_idx\` ON \`_pages_v_blocks_form_slide_out_boxes\` (\`column_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_slide_out_boxes_column_column_image2_idx\` ON \`_pages_v_blocks_form_slide_out_boxes\` (\`column_image2_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_form\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`form_settings_anchor_id\` text,
  	\`form_settings_padding_top\` text DEFAULT 'medium',
  	\`form_settings_padding_bottom\` text DEFAULT 'medium',
  	\`form_settings_has_background_image\` integer DEFAULT false,
  	\`form_settings_background\` text DEFAULT 'light',
  	\`form_settings_background_image_id\` integer,
  	\`form_cfg_first_name_label\` text DEFAULT 'First Name',
  	\`form_cfg_first_name_placeholder\` text DEFAULT 'Enter your first name',
  	\`form_cfg_first_name_validation_min_length\` numeric DEFAULT 2,
  	\`form_cfg_first_name_validation_min_length_message\` text DEFAULT 'First name must be at least 2 characters long',
  	\`form_cfg_first_name_validation_required_message\` text DEFAULT 'First name is required',
  	\`form_cfg_last_name_label\` text DEFAULT 'Last Name',
  	\`form_cfg_last_name_placeholder\` text DEFAULT 'Enter your last name',
  	\`form_cfg_last_name_validation_min_length\` numeric DEFAULT 2,
  	\`form_cfg_last_name_validation_min_length_message\` text DEFAULT 'Last Name must be at least 2 characters long',
  	\`form_cfg_last_name_validation_required_message\` text DEFAULT 'Last Name is required',
  	\`form_cfg_phone_label\` text DEFAULT 'Phone',
  	\`form_cfg_phone_placeholder\` text DEFAULT 'Enter your phone number',
  	\`form_cfg_phone_validation_required_message\` text DEFAULT 'Phone is required',
  	\`form_cfg_email_label\` text DEFAULT 'Email',
  	\`form_cfg_email_placeholder\` text DEFAULT 'Enter your email address',
  	\`form_cfg_email_validation_invalid_message\` text DEFAULT 'Please enter a valid email address',
  	\`form_cfg_email_validation_required_message\` text DEFAULT 'Email is required',
  	\`form_cfg_message_label\` text DEFAULT 'Message',
  	\`form_cfg_message_placeholder\` text DEFAULT 'Enter your message',
  	\`form_cfg_message_validation_required_message\` text DEFAULT 'Message is required',
  	\`form_cfg_flat_disposition_label\` text DEFAULT 'Flat Disposition',
  	\`form_cfg_flat_disposition_placeholder\` text DEFAULT 'Select flat disposition',
  	\`form_cfg_flat_disposition_validation_required_message\` text DEFAULT 'Please select a flat disposition',
  	\`form_cfg_bottom_content\` text,
  	\`form_cfg_checkbox_with_text_label\` text DEFAULT '',
  	\`form_cfg_checkbox_with_text_content\` text,
  	\`form_cfg_checkbox_with_text_validation_required_message\` text DEFAULT 'You must agree to the terms and conditions',
  	\`form_cfg_checkbox_with_text_newsletter_label\` text DEFAULT 'I agree to receive newsletters',
  	\`form_cfg_checkbox_with_text_newsletter_content\` text,
  	\`form_cfg_checkbox_with_text_newsletter_validation_required_message\` text DEFAULT 'You must agree to the terms and conditions',
  	\`form_cfg_submit_button\` text DEFAULT 'Send Message',
  	\`form_cfg_toast_success_title\` text DEFAULT 'Message Sent!',
  	\`form_cfg_toast_success_message\` text DEFAULT 'Thank you for your message. We will get back to you soon.',
  	\`form_cfg_toast_error_title\` text DEFAULT 'Error',
  	\`form_cfg_toast_error_message\` text DEFAULT 'There was an error sending your message. Please try again.',
  	\`form_cfg_toast_error_fallback_message\` text DEFAULT 'An unexpected error occurred. Please try again later.',
  	\`form_content\` text,
  	\`layout_variant\` text DEFAULT 'onlyForm',
  	\`form_position\` text,
  	\`layout_content\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`form_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_order_idx\` ON \`_pages_v_blocks_form\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_parent_id_idx\` ON \`_pages_v_blocks_form\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_path_idx\` ON \`_pages_v_blocks_form\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_locale_idx\` ON \`_pages_v_blocks_form\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_form_settings_form_settings_background_image_idx\` ON \`_pages_v_blocks_form\` (\`form_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_flats_snippets\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`flats_set_anchor_id\` text,
  	\`flats_set_padding_top\` text DEFAULT 'medium',
  	\`flats_set_padding_bottom\` text DEFAULT 'medium',
  	\`flats_set_has_background_image\` integer DEFAULT false,
  	\`flats_set_background\` text DEFAULT 'dark',
  	\`flats_set_background_image_id\` integer,
  	\`flats_set_heading\` text,
  	\`flats_set_link_type\` text DEFAULT 'internal',
  	\`flats_set_link_new_tab\` integer,
  	\`flats_set_link_has_anchor\` integer,
  	\`flats_set_link_dark_button\` integer,
  	\`flats_set_link_icon_only\` integer DEFAULT false,
  	\`flats_set_link_icon_position\` text DEFAULT 'left',
  	\`flats_set_link_icon\` text,
  	\`flats_set_link_label\` text,
  	\`flats_set_link_relation\` text DEFAULT 'pages',
  	\`flats_set_link_url\` text,
  	\`flats_set_link_anchor_to\` text,
  	\`flats_set_link_appearance\` text DEFAULT 'primary',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`flats_set_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_flats_snippets_order_idx\` ON \`_pages_v_blocks_flats_snippets\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_flats_snippets_parent_id_idx\` ON \`_pages_v_blocks_flats_snippets\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_flats_snippets_path_idx\` ON \`_pages_v_blocks_flats_snippets\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_flats_snippets_locale_idx\` ON \`_pages_v_blocks_flats_snippets\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_flats_snippets_flats_set_flats_set_background_image_idx\` ON \`_pages_v_blocks_flats_snippets\` (\`flats_set_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_gallery_simple_slider\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`slide_width\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_simple_slider_order_idx\` ON \`_pages_v_blocks_gallery_simple_slider\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_simple_slider_parent_id_idx\` ON \`_pages_v_blocks_gallery_simple_slider\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_simple_slider_locale_idx\` ON \`_pages_v_blocks_gallery_simple_slider\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_simple_slider_image_idx\` ON \`_pages_v_blocks_gallery_simple_slider\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_gallery_multi_slider_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`slide_width\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_gallery_multi_slider\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_multi_slider_images_order_idx\` ON \`_pages_v_blocks_gallery_multi_slider_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_multi_slider_images_parent_id_idx\` ON \`_pages_v_blocks_gallery_multi_slider_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_multi_slider_images_locale_idx\` ON \`_pages_v_blocks_gallery_multi_slider_images\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_multi_slider_images_image_idx\` ON \`_pages_v_blocks_gallery_multi_slider_images\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_gallery_multi_slider\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`tab_title\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_multi_slider_order_idx\` ON \`_pages_v_blocks_gallery_multi_slider\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_multi_slider_parent_id_idx\` ON \`_pages_v_blocks_gallery_multi_slider\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_multi_slider_locale_idx\` ON \`_pages_v_blocks_gallery_multi_slider\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_gallery_full_width\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_full_width_order_idx\` ON \`_pages_v_blocks_gallery_full_width\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_full_width_parent_id_idx\` ON \`_pages_v_blocks_gallery_full_width\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_full_width_locale_idx\` ON \`_pages_v_blocks_gallery_full_width\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_full_width_image_idx\` ON \`_pages_v_blocks_gallery_full_width\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_gallery\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`gallery_settings_anchor_id\` text,
  	\`gallery_settings_padding_top\` text DEFAULT 'medium',
  	\`gallery_settings_padding_bottom\` text DEFAULT 'medium',
  	\`gallery_settings_has_background_image\` integer DEFAULT false,
  	\`gallery_settings_background\` text DEFAULT 'dark',
  	\`gallery_settings_background_image_id\` integer,
  	\`controls_type\` text DEFAULT 'arrows',
  	\`autoplay\` integer DEFAULT false,
  	\`content\` text,
  	\`gallery_variant\` text DEFAULT 'simpleSlider',
  	\`link_type\` text DEFAULT 'internal',
  	\`link_new_tab\` integer,
  	\`link_has_anchor\` integer,
  	\`link_dark_button\` integer,
  	\`link_icon_only\` integer DEFAULT false,
  	\`link_icon_position\` text DEFAULT 'left',
  	\`link_icon\` text,
  	\`link_label\` text,
  	\`link_relation\` text DEFAULT 'pages',
  	\`link_url\` text,
  	\`link_anchor_to\` text,
  	\`link_appearance\` text DEFAULT 'primary',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`gallery_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_order_idx\` ON \`_pages_v_blocks_gallery\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_parent_id_idx\` ON \`_pages_v_blocks_gallery\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_path_idx\` ON \`_pages_v_blocks_gallery\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_locale_idx\` ON \`_pages_v_blocks_gallery\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_gallery_settings_gallery_settings_background_image_idx\` ON \`_pages_v_blocks_gallery\` (\`gallery_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_highlighted_text\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`high_set_anchor_id\` text,
  	\`high_set_padding_top\` text DEFAULT 'medium',
  	\`high_set_padding_bottom\` text DEFAULT 'medium',
  	\`high_set_has_background_image\` integer DEFAULT false,
  	\`high_set_background\` text DEFAULT 'dark',
  	\`high_set_background_image_id\` integer,
  	\`title\` text,
  	\`highlighted_text\` text,
  	\`highlighted_link_type\` text DEFAULT 'internal',
  	\`highlighted_link_new_tab\` integer,
  	\`highlighted_link_has_anchor\` integer,
  	\`highlighted_link_dark_button\` integer,
  	\`highlighted_link_icon_only\` integer DEFAULT false,
  	\`highlighted_link_icon_position\` text DEFAULT 'left',
  	\`highlighted_link_icon\` text,
  	\`highlighted_link_label\` text,
  	\`highlighted_link_relation\` text DEFAULT 'pages',
  	\`highlighted_link_url\` text,
  	\`highlighted_link_anchor_to\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`high_set_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_highlighted_text_order_idx\` ON \`_pages_v_blocks_highlighted_text\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_highlighted_text_parent_id_idx\` ON \`_pages_v_blocks_highlighted_text\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_highlighted_text_path_idx\` ON \`_pages_v_blocks_highlighted_text\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_highlighted_text_locale_idx\` ON \`_pages_v_blocks_highlighted_text\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_highlighted_text_high_set_high_set_background_image_idx\` ON \`_pages_v_blocks_highlighted_text\` (\`high_set_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`_imgContent_v_person_bullet_points\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`feature_icon\` text,
  	\`feature_description\` text,
  	\`feature_bg\` text DEFAULT 'cream',
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_imgContent_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_imgContent_v_person_bullet_points_order_idx\` ON \`_imgContent_v_person_bullet_points\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_imgContent_v_person_bullet_points_parent_id_idx\` ON \`_imgContent_v_person_bullet_points\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_imgContent_v_person_bullet_points_locale_idx\` ON \`_imgContent_v_person_bullet_points\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_imgContent_v_accordion_accordion_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`accordion_item_title\` text,
  	\`accordion_item_content\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_imgContent_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_imgContent_v_accordion_accordion_items_order_idx\` ON \`_imgContent_v_accordion_accordion_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_imgContent_v_accordion_accordion_items_parent_id_idx\` ON \`_imgContent_v_accordion_accordion_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_imgContent_v_accordion_accordion_items_locale_idx\` ON \`_imgContent_v_accordion_accordion_items\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_imgContent_v\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_content_settings_anchor_id\` text,
  	\`image_content_settings_padding_top\` text DEFAULT 'medium',
  	\`image_content_settings_padding_bottom\` text DEFAULT 'medium',
  	\`image_content_settings_has_background_image\` integer DEFAULT false,
  	\`image_content_settings_background\` text DEFAULT 'dark',
  	\`image_content_settings_background_image_id\` integer,
  	\`content_type\` text DEFAULT 'default',
  	\`content\` text,
  	\`person_content\` text,
  	\`accordion_link_type\` text DEFAULT 'internal',
  	\`accordion_link_new_tab\` integer,
  	\`accordion_link_has_anchor\` integer,
  	\`accordion_link_dark_button\` integer,
  	\`accordion_link_icon_only\` integer DEFAULT false,
  	\`accordion_link_icon_position\` text DEFAULT 'left',
  	\`accordion_link_icon\` text,
  	\`accordion_link_label\` text,
  	\`accordion_link_relation\` text DEFAULT 'pages',
  	\`accordion_link_url\` text,
  	\`accordion_link_anchor_to\` text,
  	\`accordion_link_appearance\` text DEFAULT 'primary',
  	\`image_id\` integer,
  	\`image_position\` text DEFAULT 'right',
  	\`image_size\` text DEFAULT 'medium',
  	\`image_bottom_content_content\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_content_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_imgContent_v_order_idx\` ON \`_imgContent_v\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_imgContent_v_parent_id_idx\` ON \`_imgContent_v\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_imgContent_v_path_idx\` ON \`_imgContent_v\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_imgContent_v_locale_idx\` ON \`_imgContent_v\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_imgContent_v_image_content_settings_image_content_settings_background_image_idx\` ON \`_imgContent_v\` (\`image_content_settings_background_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_imgContent_v_image_idx\` ON \`_imgContent_v\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_images_grid_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_images_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_images_grid_images_order_idx\` ON \`_pages_v_blocks_images_grid_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_images_grid_images_parent_id_idx\` ON \`_pages_v_blocks_images_grid_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_images_grid_images_locale_idx\` ON \`_pages_v_blocks_images_grid_images\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_images_grid_images_image_idx\` ON \`_pages_v_blocks_images_grid_images\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_images_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`images_settings_anchor_id\` text,
  	\`images_settings_padding_top\` text DEFAULT 'medium',
  	\`images_settings_padding_bottom\` text DEFAULT 'medium',
  	\`images_settings_has_background_image\` integer DEFAULT false,
  	\`images_settings_background\` text DEFAULT 'dark',
  	\`images_settings_background_image_id\` integer,
  	\`direction_variant\` text DEFAULT 'default',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`images_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_images_grid_order_idx\` ON \`_pages_v_blocks_images_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_images_grid_parent_id_idx\` ON \`_pages_v_blocks_images_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_images_grid_path_idx\` ON \`_pages_v_blocks_images_grid\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_images_grid_locale_idx\` ON \`_pages_v_blocks_images_grid\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_images_grid_images_settings_images_settings_background_image_idx\` ON \`_pages_v_blocks_images_grid\` (\`images_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_image_pins_pins\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`withlogo\` integer DEFAULT false,
  	\`reverse_layout\` integer DEFAULT false,
  	\`highlighted\` integer DEFAULT false,
  	\`logo_id\` integer,
  	\`marker_label\` text,
  	\`x\` numeric,
  	\`x_mobile\` numeric,
  	\`y\` numeric,
  	\`y_mobile\` numeric,
  	\`pin_height\` numeric,
  	\`_uuid\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_image_pins\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_image_pins_pins_order_idx\` ON \`_pages_v_blocks_image_pins_pins\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_image_pins_pins_parent_id_idx\` ON \`_pages_v_blocks_image_pins_pins\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_image_pins_pins_locale_idx\` ON \`_pages_v_blocks_image_pins_pins\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_image_pins_pins_logo_idx\` ON \`_pages_v_blocks_image_pins_pins\` (\`logo_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_image_pins\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_pins_set_anchor_id\` text,
  	\`image_pins_set_padding_top\` text DEFAULT 'medium',
  	\`image_pins_set_padding_bottom\` text DEFAULT 'medium',
  	\`image_pins_set_has_background_image\` integer DEFAULT false,
  	\`image_pins_set_background\` text DEFAULT 'dark',
  	\`image_pins_set_background_image_id\` integer,
  	\`text\` text,
  	\`background_image_id\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_pins_set_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_image_pins_order_idx\` ON \`_pages_v_blocks_image_pins\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_image_pins_parent_id_idx\` ON \`_pages_v_blocks_image_pins\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_image_pins_path_idx\` ON \`_pages_v_blocks_image_pins\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_image_pins_locale_idx\` ON \`_pages_v_blocks_image_pins\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_image_pins_image_pins_set_image_pins_set_background_image_idx\` ON \`_pages_v_blocks_image_pins\` (\`image_pins_set_background_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_image_pins_background_image_idx\` ON \`_pages_v_blocks_image_pins\` (\`background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_map\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`map_settings_anchor_id\` text,
  	\`map_settings_padding_top\` text DEFAULT 'medium',
  	\`map_settings_padding_bottom\` text DEFAULT 'medium',
  	\`map_settings_has_background_image\` integer DEFAULT false,
  	\`map_settings_background\` text DEFAULT 'dark',
  	\`map_settings_background_image_id\` integer,
  	\`map_id\` integer,
  	\`map_link\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`map_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`map_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_map_order_idx\` ON \`_pages_v_blocks_map\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_map_parent_id_idx\` ON \`_pages_v_blocks_map\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_map_path_idx\` ON \`_pages_v_blocks_map\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_map_locale_idx\` ON \`_pages_v_blocks_map\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_map_map_settings_map_settings_background_image_idx\` ON \`_pages_v_blocks_map\` (\`map_settings_background_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_map_map_idx\` ON \`_pages_v_blocks_map\` (\`map_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_news_snippets\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`news_set_anchor_id\` text,
  	\`news_set_padding_top\` text DEFAULT 'medium',
  	\`news_set_padding_bottom\` text DEFAULT 'medium',
  	\`news_set_has_background_image\` integer DEFAULT false,
  	\`news_set_background\` text DEFAULT 'dark',
  	\`news_set_background_image_id\` integer,
  	\`news_set_heading\` text,
  	\`news_set_link_type\` text DEFAULT 'internal',
  	\`news_set_link_new_tab\` integer,
  	\`news_set_link_has_anchor\` integer,
  	\`news_set_link_dark_button\` integer,
  	\`news_set_link_icon_only\` integer DEFAULT false,
  	\`news_set_link_icon_position\` text DEFAULT 'left',
  	\`news_set_link_icon\` text,
  	\`news_set_link_label\` text,
  	\`news_set_link_relation\` text DEFAULT 'pages',
  	\`news_set_link_url\` text,
  	\`news_set_link_anchor_to\` text,
  	\`news_set_link_appearance\` text DEFAULT 'primary',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`news_set_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_news_snippets_order_idx\` ON \`_pages_v_blocks_news_snippets\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_news_snippets_parent_id_idx\` ON \`_pages_v_blocks_news_snippets\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_news_snippets_path_idx\` ON \`_pages_v_blocks_news_snippets\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_news_snippets_locale_idx\` ON \`_pages_v_blocks_news_snippets\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_news_snippets_news_set_news_set_background_image_idx\` ON \`_pages_v_blocks_news_snippets\` (\`news_set_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_numbers_numbers\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`number\` numeric,
  	\`description\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_numbers\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_numbers_numbers_order_idx\` ON \`_pages_v_blocks_numbers_numbers\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_numbers_numbers_parent_id_idx\` ON \`_pages_v_blocks_numbers_numbers\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_numbers_numbers_locale_idx\` ON \`_pages_v_blocks_numbers_numbers\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_numbers\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`numbers_settings_anchor_id\` text,
  	\`numbers_settings_padding_top\` text DEFAULT 'medium',
  	\`numbers_settings_padding_bottom\` text DEFAULT 'medium',
  	\`numbers_settings_has_background_image\` integer DEFAULT false,
  	\`numbers_settings_background\` text DEFAULT 'dark',
  	\`numbers_settings_background_image_id\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`numbers_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_numbers_order_idx\` ON \`_pages_v_blocks_numbers\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_numbers_parent_id_idx\` ON \`_pages_v_blocks_numbers\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_numbers_path_idx\` ON \`_pages_v_blocks_numbers\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_numbers_locale_idx\` ON \`_pages_v_blocks_numbers\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_numbers_numbers_settings_numbers_settings_background_image_idx\` ON \`_pages_v_blocks_numbers\` (\`numbers_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_timeline_timeline\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_timeline\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_timeline_timeline_order_idx\` ON \`_pages_v_blocks_timeline_timeline\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_timeline_timeline_parent_id_idx\` ON \`_pages_v_blocks_timeline_timeline\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_timeline_timeline_locale_idx\` ON \`_pages_v_blocks_timeline_timeline\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_timeline\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`timeline_settings_anchor_id\` text,
  	\`timeline_settings_padding_top\` text DEFAULT 'medium',
  	\`timeline_settings_padding_bottom\` text DEFAULT 'medium',
  	\`timeline_settings_has_background_image\` integer DEFAULT false,
  	\`timeline_settings_background\` text DEFAULT 'dark',
  	\`timeline_settings_background_image_id\` integer,
  	\`content\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`timeline_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_timeline_order_idx\` ON \`_pages_v_blocks_timeline\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_timeline_parent_id_idx\` ON \`_pages_v_blocks_timeline\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_timeline_path_idx\` ON \`_pages_v_blocks_timeline\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_timeline_locale_idx\` ON \`_pages_v_blocks_timeline\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_timeline_timeline_settings_timeline_settings_background_image_idx\` ON \`_pages_v_blocks_timeline\` (\`timeline_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_prices\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`prices_settings_anchor_id\` text,
  	\`prices_settings_padding_top\` text DEFAULT 'medium',
  	\`prices_settings_padding_bottom\` text DEFAULT 'medium',
  	\`prices_settings_has_background_image\` integer DEFAULT false,
  	\`prices_settings_background\` text DEFAULT 'dark',
  	\`prices_settings_background_image_id\` integer,
  	\`bottom_content\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`prices_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_prices_order_idx\` ON \`_pages_v_blocks_prices\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_prices_parent_id_idx\` ON \`_pages_v_blocks_prices\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_prices_path_idx\` ON \`_pages_v_blocks_prices\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_prices_locale_idx\` ON \`_pages_v_blocks_prices\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_prices_prices_settings_prices_settings_background_image_idx\` ON \`_pages_v_blocks_prices\` (\`prices_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_interactive_picker_extended_views\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`view_name\` text,
  	\`image_id\` integer,
  	\`direct\` text DEFAULT 'south',
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_interactive_picker_extended\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_interactive_picker_extended_views_order_idx\` ON \`_pages_v_blocks_interactive_picker_extended_views\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_interactive_picker_extended_views_parent_id_idx\` ON \`_pages_v_blocks_interactive_picker_extended_views\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_interactive_picker_extended_views_locale_idx\` ON \`_pages_v_blocks_interactive_picker_extended_views\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_interactive_picker_extended_views_image_idx\` ON \`_pages_v_blocks_interactive_picker_extended_views\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_interactive_picker_extended\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`picker_value\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_interactive_picker_extended_order_idx\` ON \`_pages_v_blocks_interactive_picker_extended\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_interactive_picker_extended_parent_id_idx\` ON \`_pages_v_blocks_interactive_picker_extended\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_interactive_picker_extended_path_idx\` ON \`_pages_v_blocks_interactive_picker_extended\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_interactive_picker_extended_locale_idx\` ON \`_pages_v_blocks_interactive_picker_extended\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_visual_price_list_buildings\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`building_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`building_id\`) REFERENCES \`buildings\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_visual_price_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_visual_price_list_buildings_order_idx\` ON \`_pages_v_blocks_visual_price_list_buildings\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_visual_price_list_buildings_parent_id_idx\` ON \`_pages_v_blocks_visual_price_list_buildings\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_visual_price_list_buildings_locale_idx\` ON \`_pages_v_blocks_visual_price_list_buildings\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_visual_price_list_buildings_building_idx\` ON \`_pages_v_blocks_visual_price_list_buildings\` (\`building_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_visual_price_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_visual_price_list_order_idx\` ON \`_pages_v_blocks_visual_price_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_visual_price_list_parent_id_idx\` ON \`_pages_v_blocks_visual_price_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_visual_price_list_path_idx\` ON \`_pages_v_blocks_visual_price_list\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_visual_price_list_locale_idx\` ON \`_pages_v_blocks_visual_price_list\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_shared_section\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`shared_section_id\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`shared_section_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_shared_section_order_idx\` ON \`_pages_v_blocks_shared_section\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_shared_section_parent_id_idx\` ON \`_pages_v_blocks_shared_section\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_shared_section_path_idx\` ON \`_pages_v_blocks_shared_section\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_shared_section_locale_idx\` ON \`_pages_v_blocks_shared_section\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_shared_section_shared_section_idx\` ON \`_pages_v_blocks_shared_section\` (\`shared_section_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_project_id\` integer,
  	\`version_meta_og_image_id\` integer,
  	\`version_meta_twitter_card\` text DEFAULT 'summary_large_image',
  	\`version_meta_structured_data\` text,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`snapshot\` integer,
  	\`published_locale\` text,
  	\`latest\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_project_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_meta_og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_parent_idx\` ON \`_pages_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_version_project_idx\` ON \`_pages_v\` (\`version_project_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_meta_version_meta_og_image_idx\` ON \`_pages_v\` (\`version_meta_og_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_version_updated_at_idx\` ON \`_pages_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_version_created_at_idx\` ON \`_pages_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_version__status_idx\` ON \`_pages_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_created_at_idx\` ON \`_pages_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_updated_at_idx\` ON \`_pages_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_snapshot_idx\` ON \`_pages_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_published_locale_idx\` ON \`_pages_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_latest_idx\` ON \`_pages_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_locales\` (
  	\`version_title\` text,
  	\`version_slug\` text,
  	\`version_news_page_header\` text,
  	\`version_meta_title\` text,
  	\`version_meta_description\` text,
  	\`version_meta_keywords\` text,
  	\`version_meta_og_title\` text,
  	\`version_meta_og_description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_version_version_slug_idx\` ON \`_pages_v_locales\` (\`version_slug\`,\`_locale\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_locales_locale_parent_id_unique\` ON \`_pages_v_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`locale\` text,
  	\`pages_id\` integer,
  	\`flats_id\` integer,
  	\`news_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`flats_id\`) REFERENCES \`flats\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`news_id\`) REFERENCES \`news\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_rels_order_idx\` ON \`_pages_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_rels_parent_idx\` ON \`_pages_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_rels_path_idx\` ON \`_pages_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_rels_locale_idx\` ON \`_pages_v_rels\` (\`locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_rels_pages_id_idx\` ON \`_pages_v_rels\` (\`pages_id\`,\`locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_rels_flats_id_idx\` ON \`_pages_v_rels\` (\`flats_id\`,\`locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_rels_news_id_idx\` ON \`_pages_v_rels\` (\`news_id\`,\`locale\`);`)
  await db.run(sql`CREATE TABLE \`globalheader_nav_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'internal',
  	\`link_new_tab\` integer,
  	\`link_has_anchor\` integer,
  	\`link_dark_button\` integer,
  	\`link_icon_only\` integer DEFAULT false,
  	\`link_icon_position\` text DEFAULT 'left',
  	\`link_icon\` text,
  	\`link_label\` text,
  	\`link_relation\` text DEFAULT 'pages',
  	\`link_url\` text,
  	\`link_anchor_to\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`globalheader\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`globalheader_nav_items_order_idx\` ON \`globalheader_nav_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`globalheader_nav_items_parent_id_idx\` ON \`globalheader_nav_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`globalheader_nav_items_locale_idx\` ON \`globalheader_nav_items\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`globalheader_cta_buttons\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'internal',
  	\`link_new_tab\` integer,
  	\`link_has_anchor\` integer,
  	\`link_dark_button\` integer,
  	\`link_with_icon\` integer DEFAULT false,
  	\`link_icon_only\` integer DEFAULT false,
  	\`link_icon_position\` text DEFAULT 'left',
  	\`link_icon\` text,
  	\`link_label\` text,
  	\`link_relation\` text DEFAULT 'pages',
  	\`link_url\` text,
  	\`link_anchor_to\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`globalheader\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`globalheader_cta_buttons_order_idx\` ON \`globalheader_cta_buttons\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`globalheader_cta_buttons_parent_id_idx\` ON \`globalheader_cta_buttons\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`globalheader_cta_buttons_locale_idx\` ON \`globalheader_cta_buttons\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`globalheader\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`project_id\` integer NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`project_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`globalheader_project_idx\` ON \`globalheader\` (\`project_id\`);`)
  await db.run(sql`CREATE INDEX \`globalheader_updated_at_idx\` ON \`globalheader\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`globalheader_created_at_idx\` ON \`globalheader\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`globalheader_locales\` (
  	\`title\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`globalheader\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`globalheader_locales_locale_parent_id_unique\` ON \`globalheader_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`globalheader_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`locale\` text,
  	\`pages_id\` integer,
  	\`flats_id\` integer,
  	\`news_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`globalheader\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`flats_id\`) REFERENCES \`flats\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`news_id\`) REFERENCES \`news\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`globalheader_rels_order_idx\` ON \`globalheader_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`globalheader_rels_parent_idx\` ON \`globalheader_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`globalheader_rels_path_idx\` ON \`globalheader_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`globalheader_rels_locale_idx\` ON \`globalheader_rels\` (\`locale\`);`)
  await db.run(sql`CREATE INDEX \`globalheader_rels_pages_id_idx\` ON \`globalheader_rels\` (\`pages_id\`,\`locale\`);`)
  await db.run(sql`CREATE INDEX \`globalheader_rels_flats_id_idx\` ON \`globalheader_rels\` (\`flats_id\`,\`locale\`);`)
  await db.run(sql`CREATE INDEX \`globalheader_rels_news_id_idx\` ON \`globalheader_rels\` (\`news_id\`,\`locale\`);`)
  await db.run(sql`CREATE TABLE \`globalfooter_highlighted_contacts\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`type\` text,
  	\`icon\` integer DEFAULT false,
  	\`label\` text,
  	\`href\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`globalfooter\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`globalfooter_highlighted_contacts_order_idx\` ON \`globalfooter_highlighted_contacts\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`globalfooter_highlighted_contacts_parent_id_idx\` ON \`globalfooter_highlighted_contacts\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`globalfooter_social_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link\` text,
  	\`icon_type\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`globalfooter\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`globalfooter_social_links_order_idx\` ON \`globalfooter_social_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`globalfooter_social_links_parent_id_idx\` ON \`globalfooter_social_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`globalfooter_contact_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`contact_item_title\` text NOT NULL,
  	\`contact_item_content\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`globalfooter\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`globalfooter_contact_items_order_idx\` ON \`globalfooter_contact_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`globalfooter_contact_items_parent_id_idx\` ON \`globalfooter_contact_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`globalfooter_bottom_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'internal',
  	\`link_new_tab\` integer,
  	\`link_has_anchor\` integer,
  	\`link_dark_button\` integer,
  	\`link_icon_only\` integer DEFAULT false,
  	\`link_icon_position\` text DEFAULT 'left',
  	\`link_icon\` text,
  	\`link_label\` text,
  	\`link_relation\` text DEFAULT 'pages',
  	\`link_url\` text,
  	\`link_anchor_to\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`globalfooter\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`globalfooter_bottom_links_order_idx\` ON \`globalfooter_bottom_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`globalfooter_bottom_links_parent_id_idx\` ON \`globalfooter_bottom_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`globalfooter\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`project_id\` integer NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`project_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`globalfooter_project_idx\` ON \`globalfooter\` (\`project_id\`);`)
  await db.run(sql`CREATE INDEX \`globalfooter_updated_at_idx\` ON \`globalfooter\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`globalfooter_created_at_idx\` ON \`globalfooter\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`globalfooter_locales\` (
  	\`title\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`globalfooter\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`globalfooter_locales_locale_parent_id_unique\` ON \`globalfooter_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`globalfooter_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`pages_id\` integer,
  	\`flats_id\` integer,
  	\`news_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`globalfooter\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`flats_id\`) REFERENCES \`flats\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`news_id\`) REFERENCES \`news\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`globalfooter_rels_order_idx\` ON \`globalfooter_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`globalfooter_rels_parent_idx\` ON \`globalfooter_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`globalfooter_rels_path_idx\` ON \`globalfooter_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`globalfooter_rels_pages_id_idx\` ON \`globalfooter_rels\` (\`pages_id\`);`)
  await db.run(sql`CREATE INDEX \`globalfooter_rels_flats_id_idx\` ON \`globalfooter_rels\` (\`flats_id\`);`)
  await db.run(sql`CREATE INDEX \`globalfooter_rels_news_id_idx\` ON \`globalfooter_rels\` (\`news_id\`);`)
  await db.run(sql`CREATE TABLE \`buildings_documents\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`document_file_id\` integer,
  	FOREIGN KEY (\`document_file_id\`) REFERENCES \`documents\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`buildings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`buildings_documents_order_idx\` ON \`buildings_documents\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`buildings_documents_parent_id_idx\` ON \`buildings_documents\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`buildings_documents_document_file_idx\` ON \`buildings_documents\` (\`document_file_id\`);`)
  await db.run(sql`CREATE TABLE \`buildings_plans\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`plan_file_id\` integer,
  	FOREIGN KEY (\`plan_file_id\`) REFERENCES \`documents\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`buildings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`buildings_plans_order_idx\` ON \`buildings_plans\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`buildings_plans_parent_id_idx\` ON \`buildings_plans\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`buildings_plans_plan_file_idx\` ON \`buildings_plans\` (\`plan_file_id\`);`)
  await db.run(sql`CREATE TABLE \`buildings\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`project_id\` integer,
  	\`realpadid\` text,
  	\`building_plan_picker_image_picker_id\` integer,
  	\`building_plan_picker_picker_value\` text,
  	\`realpad_building_plan\` text,
  	\`realpad_building_arrow_direction\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`project_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`building_plan_picker_image_picker_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`buildings_project_idx\` ON \`buildings\` (\`project_id\`);`)
  await db.run(sql`CREATE INDEX \`buildings_building_plan_picker_building_plan_picker_image_picker_idx\` ON \`buildings\` (\`building_plan_picker_image_picker_id\`);`)
  await db.run(sql`CREATE INDEX \`buildings_updated_at_idx\` ON \`buildings\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`buildings_created_at_idx\` ON \`buildings\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`buildings_locales\` (
  	\`title\` text NOT NULL,
  	\`slug\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`buildings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`buildings_slug_idx\` ON \`buildings_locales\` (\`slug\`,\`_locale\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`buildings_locales_locale_parent_id_unique\` ON \`buildings_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`floors_documents\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`document_file_id\` integer,
  	FOREIGN KEY (\`document_file_id\`) REFERENCES \`documents\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`floors\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`floors_documents_order_idx\` ON \`floors_documents\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`floors_documents_parent_id_idx\` ON \`floors_documents\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`floors_documents_document_file_idx\` ON \`floors_documents\` (\`document_file_id\`);`)
  await db.run(sql`CREATE TABLE \`floors_plans\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`plan_file_id\` integer,
  	FOREIGN KEY (\`plan_file_id\`) REFERENCES \`documents\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`floors\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`floors_plans_order_idx\` ON \`floors_plans\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`floors_plans_parent_id_idx\` ON \`floors_plans\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`floors_plans_plan_file_idx\` ON \`floors_plans\` (\`plan_file_id\`);`)
  await db.run(sql`CREATE TABLE \`floors\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`project_id\` integer,
  	\`realpadid\` text,
  	\`building_id\` integer,
  	\`floor_no\` numeric,
  	\`floor_plan_picker_image_picker_id\` integer,
  	\`floor_plan_picker_picker_value\` text,
  	\`realpad_floor_plan\` text,
  	\`realpad_floor_arrow_direction\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`project_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`building_id\`) REFERENCES \`buildings\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`floor_plan_picker_image_picker_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`floors_project_idx\` ON \`floors\` (\`project_id\`);`)
  await db.run(sql`CREATE INDEX \`floors_building_idx\` ON \`floors\` (\`building_id\`);`)
  await db.run(sql`CREATE INDEX \`floors_floor_plan_picker_floor_plan_picker_image_picker_idx\` ON \`floors\` (\`floor_plan_picker_image_picker_id\`);`)
  await db.run(sql`CREATE INDEX \`floors_updated_at_idx\` ON \`floors\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`floors_created_at_idx\` ON \`floors\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`floors_locales\` (
  	\`title\` text NOT NULL,
  	\`slug\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`floors\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`floors_slug_idx\` ON \`floors_locales\` (\`slug\`,\`_locale\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`floors_locales_locale_parent_id_unique\` ON \`floors_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`flats_documents\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`document_file_id\` integer,
  	FOREIGN KEY (\`document_file_id\`) REFERENCES \`documents\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flats\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flats_documents_order_idx\` ON \`flats_documents\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flats_documents_parent_id_idx\` ON \`flats_documents\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flats_documents_document_file_idx\` ON \`flats_documents\` (\`document_file_id\`);`)
  await db.run(sql`CREATE TABLE \`flats_plans\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`plan_file_id\` integer,
  	FOREIGN KEY (\`plan_file_id\`) REFERENCES \`documents\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flats\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flats_plans_order_idx\` ON \`flats_plans\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flats_plans_parent_id_idx\` ON \`flats_plans\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flats_plans_plan_file_idx\` ON \`flats_plans\` (\`plan_file_id\`);`)
  await db.run(sql`CREATE TABLE \`flats_pictures\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`picture_file_id\` integer,
  	FOREIGN KEY (\`picture_file_id\`) REFERENCES \`documents\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flats\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flats_pictures_order_idx\` ON \`flats_pictures\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flats_pictures_parent_id_idx\` ON \`flats_pictures\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flats_pictures_picture_file_idx\` ON \`flats_pictures\` (\`picture_file_id\`);`)
  await db.run(sql`CREATE TABLE \`flats_manual_documents\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`document_file_id\` integer,
  	FOREIGN KEY (\`document_file_id\`) REFERENCES \`documents\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flats\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flats_manual_documents_order_idx\` ON \`flats_manual_documents\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flats_manual_documents_parent_id_idx\` ON \`flats_manual_documents\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flats_manual_documents_document_file_idx\` ON \`flats_manual_documents\` (\`document_file_id\`);`)
  await db.run(sql`CREATE TABLE \`flats_manual_plans\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`plan_file_id\` integer,
  	FOREIGN KEY (\`plan_file_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flats\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flats_manual_plans_order_idx\` ON \`flats_manual_plans\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flats_manual_plans_parent_id_idx\` ON \`flats_manual_plans\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flats_manual_plans_plan_file_idx\` ON \`flats_manual_plans\` (\`plan_file_id\`);`)
  await db.run(sql`CREATE TABLE \`flats_flat_plans\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flats\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flats_flat_plans_order_idx\` ON \`flats_flat_plans\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flats_flat_plans_parent_id_idx\` ON \`flats_flat_plans\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flats_flat_plans_locale_idx\` ON \`flats_flat_plans\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flats_flat_plans_image_idx\` ON \`flats_flat_plans\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`flats_gallery_simple_slider\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`slide_width\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flats\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flats_gallery_simple_slider_order_idx\` ON \`flats_gallery_simple_slider\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flats_gallery_simple_slider_parent_id_idx\` ON \`flats_gallery_simple_slider\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flats_gallery_simple_slider_locale_idx\` ON \`flats_gallery_simple_slider\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flats_gallery_simple_slider_image_idx\` ON \`flats_gallery_simple_slider\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`flats_gallery_multi_slider_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`slide_width\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flats_gallery_multi_slider\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flats_gallery_multi_slider_images_order_idx\` ON \`flats_gallery_multi_slider_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flats_gallery_multi_slider_images_parent_id_idx\` ON \`flats_gallery_multi_slider_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flats_gallery_multi_slider_images_locale_idx\` ON \`flats_gallery_multi_slider_images\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flats_gallery_multi_slider_images_image_idx\` ON \`flats_gallery_multi_slider_images\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`flats_gallery_multi_slider\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`tab_title\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flats\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flats_gallery_multi_slider_order_idx\` ON \`flats_gallery_multi_slider\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flats_gallery_multi_slider_parent_id_idx\` ON \`flats_gallery_multi_slider\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flats_gallery_multi_slider_locale_idx\` ON \`flats_gallery_multi_slider\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`flats\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`slug\` text NOT NULL,
  	\`project_id\` integer,
  	\`realpadid\` text,
  	\`building_id\` integer,
  	\`floor_id\` integer,
  	\`realpad_flat_flat_internal_id\` text,
  	\`realpad_flat_associated_unit_ids\` text,
  	\`realpad_flat_plan\` text,
  	\`realpad_flat_pdf\` text,
  	\`realpad_flat_picture\` text,
  	\`realpad_flat_flat_disposition\` text,
  	\`realpad_flat_flat_area\` numeric,
  	\`realpad_flat_flat_area_living\` numeric,
  	\`realpad_flat_flat_area_balcony\` numeric,
  	\`realpad_flat_flat_area_terrace\` numeric,
  	\`realpad_flat_flat_area_loggia\` numeric,
  	\`realpad_flat_flat_area_garden\` numeric,
  	\`realpad_flat_flat_price\` numeric,
  	\`realpad_flat_flat_price_without_vat\` numeric,
  	\`realpad_flat_flat_discount_vat\` numeric,
  	\`realpad_flat_flat_discount_without_vat\` numeric,
  	\`realpad_flat_flat_price_before_discount_vat\` numeric,
  	\`realpad_flat_flat_price_before_discount_without_vat\` numeric,
  	\`realpad_flat_flat_status\` text,
  	\`realpad_flat_flat_orientation\` text,
  	\`realpad_flat_flat_type\` text,
  	\`realpad_flat_associatedunits_internal_ids\` text,
  	\`realpad_flat_associatedunits_totalprice_novat\` numeric,
  	\`realpad_flat_associatedunits_totalprice_vat\` numeric,
  	\`realpad_flat_flat_category\` text,
  	\`gallery_gallery_settings_anchor_id\` text,
  	\`gallery_gallery_settings_padding_top\` text DEFAULT 'medium',
  	\`gallery_gallery_settings_padding_bottom\` text DEFAULT 'medium',
  	\`gallery_gallery_settings_has_background_image\` integer DEFAULT false,
  	\`gallery_gallery_settings_background\` text DEFAULT 'dark',
  	\`gallery_gallery_settings_background_image_id\` integer,
  	\`gallery_controls_type\` text DEFAULT 'arrows',
  	\`gallery_autoplay\` integer DEFAULT false,
  	\`gallery_gallery_variant\` text DEFAULT 'simpleSlider',
  	\`meta_og_image_id\` integer,
  	\`meta_twitter_card\` text DEFAULT 'summary_large_image',
  	\`meta_structured_data\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`project_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`building_id\`) REFERENCES \`buildings\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`floor_id\`) REFERENCES \`floors\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`gallery_gallery_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`meta_og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`flats_project_idx\` ON \`flats\` (\`project_id\`);`)
  await db.run(sql`CREATE INDEX \`flats_building_idx\` ON \`flats\` (\`building_id\`);`)
  await db.run(sql`CREATE INDEX \`flats_floor_idx\` ON \`flats\` (\`floor_id\`);`)
  await db.run(sql`CREATE INDEX \`flats_gallery_gallery_settings_gallery_gallery_settings_background_image_idx\` ON \`flats\` (\`gallery_gallery_settings_background_image_id\`);`)
  await db.run(sql`CREATE INDEX \`flats_meta_meta_og_image_idx\` ON \`flats\` (\`meta_og_image_id\`);`)
  await db.run(sql`CREATE INDEX \`flats_updated_at_idx\` ON \`flats\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`flats_created_at_idx\` ON \`flats\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`flats_locales\` (
  	\`title\` text NOT NULL,
  	\`gallery_content\` text,
  	\`gallery_link_type\` text DEFAULT 'internal',
  	\`gallery_link_new_tab\` integer,
  	\`gallery_link_has_anchor\` integer,
  	\`gallery_link_dark_button\` integer,
  	\`gallery_link_icon_only\` integer DEFAULT false,
  	\`gallery_link_icon_position\` text DEFAULT 'left',
  	\`gallery_link_icon\` text,
  	\`gallery_link_label\` text,
  	\`gallery_link_relation\` text DEFAULT 'pages',
  	\`gallery_link_url\` text,
  	\`gallery_link_anchor_to\` text,
  	\`gallery_link_appearance\` text DEFAULT 'primary',
  	\`meta_title\` text,
  	\`meta_description\` text,
  	\`meta_keywords\` text,
  	\`meta_og_title\` text,
  	\`meta_og_description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flats\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`flats_locales_locale_parent_id_unique\` ON \`flats_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`flats_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`locale\` text,
  	\`pages_id\` integer,
  	\`flats_id\` integer,
  	\`news_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`flats\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`flats_id\`) REFERENCES \`flats\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`news_id\`) REFERENCES \`news\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flats_rels_order_idx\` ON \`flats_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`flats_rels_parent_idx\` ON \`flats_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flats_rels_path_idx\` ON \`flats_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`flats_rels_locale_idx\` ON \`flats_rels\` (\`locale\`);`)
  await db.run(sql`CREATE INDEX \`flats_rels_pages_id_idx\` ON \`flats_rels\` (\`pages_id\`,\`locale\`);`)
  await db.run(sql`CREATE INDEX \`flats_rels_flats_id_idx\` ON \`flats_rels\` (\`flats_id\`,\`locale\`);`)
  await db.run(sql`CREATE INDEX \`flats_rels_news_id_idx\` ON \`flats_rels\` (\`news_id\`,\`locale\`);`)
  await db.run(sql`CREATE TABLE \`project_global_settings\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`project_id\` integer NOT NULL,
  	\`meta_og_image_id\` integer,
  	\`meta_twitter_card\` text DEFAULT 'summary_large_image',
  	\`meta_structured_data\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`project_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`meta_og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`project_global_settings_project_idx\` ON \`project_global_settings\` (\`project_id\`);`)
  await db.run(sql`CREATE INDEX \`project_global_settings_meta_meta_og_image_idx\` ON \`project_global_settings\` (\`meta_og_image_id\`);`)
  await db.run(sql`CREATE INDEX \`project_global_settings_updated_at_idx\` ON \`project_global_settings\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`project_global_settings_created_at_idx\` ON \`project_global_settings\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`project_global_settings_locales\` (
  	\`title\` text NOT NULL,
  	\`content\` text,
  	\`back_button_label\` text,
  	\`meta_title\` text,
  	\`meta_description\` text,
  	\`meta_keywords\` text,
  	\`meta_og_title\` text,
  	\`meta_og_description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`project_global_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`project_global_settings_locales_locale_parent_id_unique\` ON \`project_global_settings_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_hero_hero_slideshow\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`title\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_hero\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_hero_hero_slideshow_order_idx\` ON \`flDet_blocks_hero_hero_slideshow\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_hero_hero_slideshow_parent_id_idx\` ON \`flDet_blocks_hero_hero_slideshow\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_hero_hero_slideshow_locale_idx\` ON \`flDet_blocks_hero_hero_slideshow\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_hero_hero_slideshow_image_idx\` ON \`flDet_blocks_hero_hero_slideshow\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_hero_main_buttons\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'internal',
  	\`link_new_tab\` integer,
  	\`link_has_anchor\` integer,
  	\`link_dark_button\` integer,
  	\`link_icon_only\` integer DEFAULT false,
  	\`link_icon_position\` text DEFAULT 'left',
  	\`link_icon\` text,
  	\`link_label\` text,
  	\`link_relation\` text DEFAULT 'pages',
  	\`link_url\` text,
  	\`link_anchor_to\` text,
  	\`link_appearance\` text DEFAULT 'primary',
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_hero\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_hero_main_buttons_order_idx\` ON \`flDet_blocks_hero_main_buttons\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_hero_main_buttons_parent_id_idx\` ON \`flDet_blocks_hero_main_buttons\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_hero_main_buttons_locale_idx\` ON \`flDet_blocks_hero_main_buttons\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_hero_secondary_buttons\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'internal',
  	\`link_new_tab\` integer,
  	\`link_has_anchor\` integer,
  	\`link_dark_button\` integer,
  	\`link_icon_only\` integer DEFAULT false,
  	\`link_icon_position\` text DEFAULT 'left',
  	\`link_icon\` text,
  	\`link_label\` text,
  	\`link_relation\` text DEFAULT 'pages',
  	\`link_url\` text,
  	\`link_anchor_to\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_hero\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_hero_secondary_buttons_order_idx\` ON \`flDet_blocks_hero_secondary_buttons\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_hero_secondary_buttons_parent_id_idx\` ON \`flDet_blocks_hero_secondary_buttons\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_hero_secondary_buttons_locale_idx\` ON \`flDet_blocks_hero_secondary_buttons\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_hero\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`type\` text DEFAULT 'imageOnly',
  	\`content\` text,
  	\`hero_image_id\` integer,
  	\`hero_video_id\` integer,
  	\`left_upper_text\` text,
  	\`right_upper_text\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`hero_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`hero_video_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_hero_order_idx\` ON \`flDet_blocks_hero\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_hero_parent_id_idx\` ON \`flDet_blocks_hero\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_hero_path_idx\` ON \`flDet_blocks_hero\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_hero_locale_idx\` ON \`flDet_blocks_hero\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_hero_hero_image_idx\` ON \`flDet_blocks_hero\` (\`hero_image_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_hero_hero_video_idx\` ON \`flDet_blocks_hero\` (\`hero_video_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_variable_table_rows_cells\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_variable_table_rows\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_variable_table_rows_cells_order_idx\` ON \`flDet_blocks_variable_table_rows_cells\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_variable_table_rows_cells_parent_id_idx\` ON \`flDet_blocks_variable_table_rows_cells\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_variable_table_rows_cells_locale_idx\` ON \`flDet_blocks_variable_table_rows_cells\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_variable_table_rows\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`row_index\` numeric,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_variable_table\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_variable_table_rows_order_idx\` ON \`flDet_blocks_variable_table_rows\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_variable_table_rows_parent_id_idx\` ON \`flDet_blocks_variable_table_rows\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_variable_table_rows_locale_idx\` ON \`flDet_blocks_variable_table_rows\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_variable_table\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_variable_table_order_idx\` ON \`flDet_blocks_variable_table\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_variable_table_parent_id_idx\` ON \`flDet_blocks_variable_table\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_variable_table_path_idx\` ON \`flDet_blocks_variable_table\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_variable_table_locale_idx\` ON \`flDet_blocks_variable_table\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_table_custom\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_table_custom_order_idx\` ON \`flDet_blocks_table_custom\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_table_custom_parent_id_idx\` ON \`flDet_blocks_table_custom\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_table_custom_path_idx\` ON \`flDet_blocks_table_custom\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_table_custom_locale_idx\` ON \`flDet_blocks_table_custom\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_draw_editor\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_picker_id\` integer,
  	\`picker_value\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_picker_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_draw_editor_order_idx\` ON \`flDet_blocks_draw_editor\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_draw_editor_parent_id_idx\` ON \`flDet_blocks_draw_editor\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_draw_editor_path_idx\` ON \`flDet_blocks_draw_editor\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_draw_editor_locale_idx\` ON \`flDet_blocks_draw_editor\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_draw_editor_image_picker_idx\` ON \`flDet_blocks_draw_editor\` (\`image_picker_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_text_image\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	\`image_id\` integer,
  	\`image_position\` text DEFAULT 'right',
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_text_image_order_idx\` ON \`flDet_blocks_text_image\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_text_image_parent_id_idx\` ON \`flDet_blocks_text_image\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_text_image_path_idx\` ON \`flDet_blocks_text_image\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_text_image_locale_idx\` ON \`flDet_blocks_text_image\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_text_image_image_idx\` ON \`flDet_blocks_text_image\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_banner\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`banner_settings_anchor_id\` text,
  	\`banner_settings_padding_top\` text DEFAULT 'medium',
  	\`banner_settings_padding_bottom\` text DEFAULT 'medium',
  	\`banner_settings_has_background_image\` integer DEFAULT false,
  	\`banner_settings_background\` text DEFAULT 'light',
  	\`banner_settings_background_image_id\` integer,
  	\`banner_variant\` text DEFAULT 'small',
  	\`banner_content_position\` text DEFAULT 'center',
  	\`caption\` text,
  	\`content\` text,
  	\`banner_button_type\` text DEFAULT 'internal',
  	\`banner_button_new_tab\` integer,
  	\`banner_button_has_anchor\` integer,
  	\`banner_button_dark_button\` integer,
  	\`banner_button_icon_only\` integer DEFAULT false,
  	\`banner_button_icon_position\` text DEFAULT 'left',
  	\`banner_button_icon\` text,
  	\`banner_button_label\` text,
  	\`banner_button_relation\` text DEFAULT 'pages',
  	\`banner_button_url\` text,
  	\`banner_button_anchor_to\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`banner_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_banner_order_idx\` ON \`flDet_blocks_banner\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_banner_parent_id_idx\` ON \`flDet_blocks_banner\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_banner_path_idx\` ON \`flDet_blocks_banner\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_banner_locale_idx\` ON \`flDet_blocks_banner\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_banner_banner_settings_banner_settings_background_image_idx\` ON \`flDet_blocks_banner\` (\`banner_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_benefits_benefits_row_item_heading_lines\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_benefits_benefits\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_benefits_benefits_row_item_heading_lines_order_idx\` ON \`flDet_blocks_benefits_benefits_row_item_heading_lines\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_benefits_benefits_row_item_heading_lines_parent_id_idx\` ON \`flDet_blocks_benefits_benefits_row_item_heading_lines\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_benefits_benefits_row_item_heading_lines_locale_idx\` ON \`flDet_blocks_benefits_benefits_row_item_heading_lines\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_benefits_benefits_row_item2_heading_lines\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_benefits_benefits\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_benefits_benefits_row_item2_heading_lines_order_idx\` ON \`flDet_blocks_benefits_benefits_row_item2_heading_lines\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_benefits_benefits_row_item2_heading_lines_parent_id_idx\` ON \`flDet_blocks_benefits_benefits_row_item2_heading_lines\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_benefits_benefits_row_item2_heading_lines_locale_idx\` ON \`flDet_blocks_benefits_benefits_row_item2_heading_lines\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_benefits_benefits\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`row_item_image_id\` integer,
  	\`row_item_description\` text,
  	\`row_item2_image_id\` integer,
  	\`row_item2_description\` text,
  	FOREIGN KEY (\`row_item_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`row_item2_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_benefits\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_benefits_benefits_order_idx\` ON \`flDet_blocks_benefits_benefits\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_benefits_benefits_parent_id_idx\` ON \`flDet_blocks_benefits_benefits\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_benefits_benefits_locale_idx\` ON \`flDet_blocks_benefits_benefits\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_benefits_benefits_row_item_row_item_image_idx\` ON \`flDet_blocks_benefits_benefits\` (\`row_item_image_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_benefits_benefits_row_item2_row_item2_image_idx\` ON \`flDet_blocks_benefits_benefits\` (\`row_item2_image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_benefits\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`benefits_settings_anchor_id\` text,
  	\`benefits_settings_padding_top\` text DEFAULT 'medium',
  	\`benefits_settings_padding_bottom\` text DEFAULT 'medium',
  	\`benefits_settings_has_background_image\` integer DEFAULT false,
  	\`benefits_settings_background\` text DEFAULT 'dark',
  	\`benefits_settings_background_image_id\` integer,
  	\`show_logo\` integer DEFAULT true,
  	\`content\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`benefits_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_benefits_order_idx\` ON \`flDet_blocks_benefits\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_benefits_parent_id_idx\` ON \`flDet_blocks_benefits\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_benefits_path_idx\` ON \`flDet_blocks_benefits\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_benefits_locale_idx\` ON \`flDet_blocks_benefits\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_benefits_benefits_settings_benefits_settings_background_image_idx\` ON \`flDet_blocks_benefits\` (\`benefits_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_contact_contact_info_highlighted_contacts\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`item_title\` text,
  	\`item_content\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_contact\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_contact_contact_info_highlighted_contacts_order_idx\` ON \`flDet_blocks_contact_contact_info_highlighted_contacts\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_contact_contact_info_highlighted_contacts_parent_id_idx\` ON \`flDet_blocks_contact_contact_info_highlighted_contacts\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_contact_contact_info_highlighted_contacts_locale_idx\` ON \`flDet_blocks_contact_contact_info_highlighted_contacts\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_contact_contact_info_contact_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`item_title\` text,
  	\`item_content\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_contact\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_contact_contact_info_contact_items_order_idx\` ON \`flDet_blocks_contact_contact_info_contact_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_contact_contact_info_contact_items_parent_id_idx\` ON \`flDet_blocks_contact_contact_info_contact_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_contact_contact_info_contact_items_locale_idx\` ON \`flDet_blocks_contact_contact_info_contact_items\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_contact\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`contact_settings_anchor_id\` text,
  	\`contact_settings_padding_top\` text DEFAULT 'medium',
  	\`contact_settings_padding_bottom\` text DEFAULT 'medium',
  	\`contact_settings_has_background_image\` integer DEFAULT false,
  	\`contact_settings_background\` text DEFAULT 'dark',
  	\`contact_settings_background_image_id\` integer,
  	\`contact_settings_heading\` text,
  	\`contact_form_config_first_name_label\` text DEFAULT 'First Name',
  	\`contact_form_config_first_name_placeholder\` text DEFAULT 'Enter your first name',
  	\`contact_form_config_first_name_validation_min_length\` numeric DEFAULT 2,
  	\`contact_form_config_first_name_validation_min_length_message\` text DEFAULT 'First Name must be at least 2 characters long',
  	\`contact_form_config_first_name_validation_required_message\` text DEFAULT 'First Name is required',
  	\`contact_form_config_last_name_label\` text DEFAULT 'Last Name',
  	\`contact_form_config_last_name_placeholder\` text DEFAULT 'Enter your last name',
  	\`contact_form_config_last_name_validation_min_length\` numeric DEFAULT 2,
  	\`contact_form_config_last_name_validation_min_length_message\` text DEFAULT 'Last Name must be at least 2 characters long',
  	\`contact_form_config_last_name_validation_required_message\` text DEFAULT 'Last Name is required',
  	\`contact_form_config_phone_label\` text DEFAULT 'Phone',
  	\`contact_form_config_phone_placeholder\` text DEFAULT 'Enter your phone number',
  	\`contact_form_config_phone_validation_required_message\` text DEFAULT 'Phone is required',
  	\`contact_form_config_email_label\` text DEFAULT 'Email',
  	\`contact_form_config_email_placeholder\` text DEFAULT 'Enter your email address',
  	\`contact_form_config_email_validation_invalid_message\` text DEFAULT 'Please enter a valid email address',
  	\`contact_form_config_email_validation_required_message\` text DEFAULT 'Email is required',
  	\`contact_form_config_message_label\` text DEFAULT 'Message',
  	\`contact_form_config_message_placeholder\` text DEFAULT 'Enter your message',
  	\`contact_form_config_message_validation_required_message\` text DEFAULT 'Message is required',
  	\`contact_form_config_checkbox_with_text_label\` text DEFAULT 'I agree to the terms and conditions',
  	\`contact_form_config_checkbox_with_text_content\` text,
  	\`contact_form_config_checkbox_with_text_validation_required_message\` text DEFAULT 'You must agree to the terms and conditions',
  	\`contact_form_config_submit_button\` text DEFAULT 'Send Message',
  	\`contact_form_config_toast_success_title\` text DEFAULT 'Message Sent!',
  	\`contact_form_config_toast_success_message\` text DEFAULT 'Thank you for your message. We will get back to you soon.',
  	\`contact_form_config_toast_error_title\` text DEFAULT 'Error',
  	\`contact_form_config_toast_error_message\` text DEFAULT 'There was an error sending your message. Please try again.',
  	\`contact_form_config_toast_error_fallback_message\` text DEFAULT 'An unexpected error occurred. Please try again later.',
  	\`contact_form_position\` text,
  	\`contact_form_title\` text,
  	\`variant\` text DEFAULT 'onlyForm',
  	\`block_name\` text,
  	FOREIGN KEY (\`contact_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_contact_order_idx\` ON \`flDet_blocks_contact\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_contact_parent_id_idx\` ON \`flDet_blocks_contact\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_contact_path_idx\` ON \`flDet_blocks_contact\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_contact_locale_idx\` ON \`flDet_blocks_contact\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_contact_contact_settings_contact_settings_background_image_idx\` ON \`flDet_blocks_contact\` (\`contact_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_content\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`content_settings_anchor_id\` text,
  	\`content_settings_padding_top\` text DEFAULT 'medium',
  	\`content_settings_padding_bottom\` text DEFAULT 'medium',
  	\`content_settings_has_background_image\` integer DEFAULT false,
  	\`content_settings_background\` text DEFAULT 'dark',
  	\`content_settings_background_image_id\` integer,
  	\`content\` text,
  	\`content_position\` text DEFAULT 'center',
  	\`block_name\` text,
  	FOREIGN KEY (\`content_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_content_order_idx\` ON \`flDet_blocks_content\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_content_parent_id_idx\` ON \`flDet_blocks_content\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_content_path_idx\` ON \`flDet_blocks_content\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_content_locale_idx\` ON \`flDet_blocks_content\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_content_content_settings_content_settings_background_image_idx\` ON \`flDet_blocks_content\` (\`content_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_features_features_with_title\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`feature_icon\` text,
  	\`feature_title\` text,
  	\`feature_description\` text,
  	\`feature_bg\` text DEFAULT 'cream',
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_features\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_features_features_with_title_order_idx\` ON \`flDet_blocks_features_features_with_title\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_features_features_with_title_parent_id_idx\` ON \`flDet_blocks_features_features_with_title\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_features_features_with_title_locale_idx\` ON \`flDet_blocks_features_features_with_title\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_features_features_uppercase\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`feature_icon\` text,
  	\`feature_description\` text,
  	\`feature_bg\` text DEFAULT 'cream',
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_features\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_features_features_uppercase_order_idx\` ON \`flDet_blocks_features_features_uppercase\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_features_features_uppercase_parent_id_idx\` ON \`flDet_blocks_features_features_uppercase\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_features_features_uppercase_locale_idx\` ON \`flDet_blocks_features_features_uppercase\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`features_settings_anchor_id\` text,
  	\`features_settings_padding_top\` text DEFAULT 'medium',
  	\`features_settings_padding_bottom\` text DEFAULT 'medium',
  	\`features_settings_has_background_image\` integer DEFAULT false,
  	\`features_settings_background\` text DEFAULT 'dark',
  	\`features_settings_background_image_id\` integer,
  	\`features_settings_heading\` text,
  	\`features_settings_link_type\` text DEFAULT 'internal',
  	\`features_settings_link_new_tab\` integer,
  	\`features_settings_link_has_anchor\` integer,
  	\`features_settings_link_dark_button\` integer,
  	\`features_settings_link_icon_only\` integer DEFAULT false,
  	\`features_settings_link_icon_position\` text DEFAULT 'left',
  	\`features_settings_link_icon\` text,
  	\`features_settings_link_label\` text,
  	\`features_settings_link_relation\` text DEFAULT 'pages',
  	\`features_settings_link_url\` text,
  	\`features_settings_link_anchor_to\` text,
  	\`features_settings_link_appearance\` text DEFAULT 'primary',
  	\`content\` text,
  	\`features_variant\` text DEFAULT 'uppercase',
  	\`block_name\` text,
  	FOREIGN KEY (\`features_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_features_order_idx\` ON \`flDet_blocks_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_features_parent_id_idx\` ON \`flDet_blocks_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_features_path_idx\` ON \`flDet_blocks_features\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_features_locale_idx\` ON \`flDet_blocks_features\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_features_features_settings_features_settings_background_image_idx\` ON \`flDet_blocks_features\` (\`features_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_form_form_cfg_flat_disposition_options\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text,
  	\`label\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_form\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_form_form_cfg_flat_disposition_options_order_idx\` ON \`flDet_blocks_form_form_cfg_flat_disposition_options\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_form_form_cfg_flat_disposition_options_parent_id_idx\` ON \`flDet_blocks_form_form_cfg_flat_disposition_options\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_form_form_cfg_flat_disposition_options_locale_idx\` ON \`flDet_blocks_form_form_cfg_flat_disposition_options\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_form_slide_out_boxes\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`column_image_id\` integer,
  	\`column_image2_id\` integer,
  	FOREIGN KEY (\`column_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`column_image2_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_form\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_form_slide_out_boxes_order_idx\` ON \`flDet_blocks_form_slide_out_boxes\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_form_slide_out_boxes_parent_id_idx\` ON \`flDet_blocks_form_slide_out_boxes\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_form_slide_out_boxes_locale_idx\` ON \`flDet_blocks_form_slide_out_boxes\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_form_slide_out_boxes_column_column_image_idx\` ON \`flDet_blocks_form_slide_out_boxes\` (\`column_image_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_form_slide_out_boxes_column_column_image2_idx\` ON \`flDet_blocks_form_slide_out_boxes\` (\`column_image2_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_form\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`form_settings_anchor_id\` text,
  	\`form_settings_padding_top\` text DEFAULT 'medium',
  	\`form_settings_padding_bottom\` text DEFAULT 'medium',
  	\`form_settings_has_background_image\` integer DEFAULT false,
  	\`form_settings_background\` text DEFAULT 'light',
  	\`form_settings_background_image_id\` integer,
  	\`form_cfg_first_name_label\` text DEFAULT 'First Name',
  	\`form_cfg_first_name_placeholder\` text DEFAULT 'Enter your first name',
  	\`form_cfg_first_name_validation_min_length\` numeric DEFAULT 2,
  	\`form_cfg_first_name_validation_min_length_message\` text DEFAULT 'First name must be at least 2 characters long',
  	\`form_cfg_first_name_validation_required_message\` text DEFAULT 'First name is required',
  	\`form_cfg_last_name_label\` text DEFAULT 'Last Name',
  	\`form_cfg_last_name_placeholder\` text DEFAULT 'Enter your last name',
  	\`form_cfg_last_name_validation_min_length\` numeric DEFAULT 2,
  	\`form_cfg_last_name_validation_min_length_message\` text DEFAULT 'Last Name must be at least 2 characters long',
  	\`form_cfg_last_name_validation_required_message\` text DEFAULT 'Last Name is required',
  	\`form_cfg_phone_label\` text DEFAULT 'Phone',
  	\`form_cfg_phone_placeholder\` text DEFAULT 'Enter your phone number',
  	\`form_cfg_phone_validation_required_message\` text DEFAULT 'Phone is required',
  	\`form_cfg_email_label\` text DEFAULT 'Email',
  	\`form_cfg_email_placeholder\` text DEFAULT 'Enter your email address',
  	\`form_cfg_email_validation_invalid_message\` text DEFAULT 'Please enter a valid email address',
  	\`form_cfg_email_validation_required_message\` text DEFAULT 'Email is required',
  	\`form_cfg_message_label\` text DEFAULT 'Message',
  	\`form_cfg_message_placeholder\` text DEFAULT 'Enter your message',
  	\`form_cfg_message_validation_required_message\` text DEFAULT 'Message is required',
  	\`form_cfg_flat_disposition_label\` text DEFAULT 'Flat Disposition',
  	\`form_cfg_flat_disposition_placeholder\` text DEFAULT 'Select flat disposition',
  	\`form_cfg_flat_disposition_validation_required_message\` text DEFAULT 'Please select a flat disposition',
  	\`form_cfg_bottom_content\` text,
  	\`form_cfg_checkbox_with_text_label\` text DEFAULT '',
  	\`form_cfg_checkbox_with_text_content\` text,
  	\`form_cfg_checkbox_with_text_validation_required_message\` text DEFAULT 'You must agree to the terms and conditions',
  	\`form_cfg_checkbox_with_text_newsletter_label\` text DEFAULT 'I agree to receive newsletters',
  	\`form_cfg_checkbox_with_text_newsletter_content\` text,
  	\`form_cfg_checkbox_with_text_newsletter_validation_required_message\` text DEFAULT 'You must agree to the terms and conditions',
  	\`form_cfg_submit_button\` text DEFAULT 'Send Message',
  	\`form_cfg_toast_success_title\` text DEFAULT 'Message Sent!',
  	\`form_cfg_toast_success_message\` text DEFAULT 'Thank you for your message. We will get back to you soon.',
  	\`form_cfg_toast_error_title\` text DEFAULT 'Error',
  	\`form_cfg_toast_error_message\` text DEFAULT 'There was an error sending your message. Please try again.',
  	\`form_cfg_toast_error_fallback_message\` text DEFAULT 'An unexpected error occurred. Please try again later.',
  	\`form_content\` text,
  	\`layout_variant\` text DEFAULT 'onlyForm',
  	\`form_position\` text,
  	\`layout_content\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`form_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_form_order_idx\` ON \`flDet_blocks_form\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_form_parent_id_idx\` ON \`flDet_blocks_form\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_form_path_idx\` ON \`flDet_blocks_form\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_form_locale_idx\` ON \`flDet_blocks_form\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_form_form_settings_form_settings_background_image_idx\` ON \`flDet_blocks_form\` (\`form_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_flats_snippets\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`flats_set_anchor_id\` text,
  	\`flats_set_padding_top\` text DEFAULT 'medium',
  	\`flats_set_padding_bottom\` text DEFAULT 'medium',
  	\`flats_set_has_background_image\` integer DEFAULT false,
  	\`flats_set_background\` text DEFAULT 'dark',
  	\`flats_set_background_image_id\` integer,
  	\`flats_set_heading\` text,
  	\`flats_set_link_type\` text DEFAULT 'internal',
  	\`flats_set_link_new_tab\` integer,
  	\`flats_set_link_has_anchor\` integer,
  	\`flats_set_link_dark_button\` integer,
  	\`flats_set_link_icon_only\` integer DEFAULT false,
  	\`flats_set_link_icon_position\` text DEFAULT 'left',
  	\`flats_set_link_icon\` text,
  	\`flats_set_link_label\` text,
  	\`flats_set_link_relation\` text DEFAULT 'pages',
  	\`flats_set_link_url\` text,
  	\`flats_set_link_anchor_to\` text,
  	\`flats_set_link_appearance\` text DEFAULT 'primary',
  	\`block_name\` text,
  	FOREIGN KEY (\`flats_set_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_flats_snippets_order_idx\` ON \`flDet_blocks_flats_snippets\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_flats_snippets_parent_id_idx\` ON \`flDet_blocks_flats_snippets\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_flats_snippets_path_idx\` ON \`flDet_blocks_flats_snippets\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_flats_snippets_locale_idx\` ON \`flDet_blocks_flats_snippets\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_flats_snippets_flats_set_flats_set_background_image_idx\` ON \`flDet_blocks_flats_snippets\` (\`flats_set_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_gallery_simple_slider\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`slide_width\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_gallery_simple_slider_order_idx\` ON \`flDet_blocks_gallery_simple_slider\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_gallery_simple_slider_parent_id_idx\` ON \`flDet_blocks_gallery_simple_slider\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_gallery_simple_slider_locale_idx\` ON \`flDet_blocks_gallery_simple_slider\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_gallery_simple_slider_image_idx\` ON \`flDet_blocks_gallery_simple_slider\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_gallery_multi_slider_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`slide_width\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_gallery_multi_slider\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_gallery_multi_slider_images_order_idx\` ON \`flDet_blocks_gallery_multi_slider_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_gallery_multi_slider_images_parent_id_idx\` ON \`flDet_blocks_gallery_multi_slider_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_gallery_multi_slider_images_locale_idx\` ON \`flDet_blocks_gallery_multi_slider_images\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_gallery_multi_slider_images_image_idx\` ON \`flDet_blocks_gallery_multi_slider_images\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_gallery_multi_slider\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`tab_title\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_gallery_multi_slider_order_idx\` ON \`flDet_blocks_gallery_multi_slider\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_gallery_multi_slider_parent_id_idx\` ON \`flDet_blocks_gallery_multi_slider\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_gallery_multi_slider_locale_idx\` ON \`flDet_blocks_gallery_multi_slider\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_gallery_full_width\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_gallery_full_width_order_idx\` ON \`flDet_blocks_gallery_full_width\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_gallery_full_width_parent_id_idx\` ON \`flDet_blocks_gallery_full_width\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_gallery_full_width_locale_idx\` ON \`flDet_blocks_gallery_full_width\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_gallery_full_width_image_idx\` ON \`flDet_blocks_gallery_full_width\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_gallery\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`gallery_settings_anchor_id\` text,
  	\`gallery_settings_padding_top\` text DEFAULT 'medium',
  	\`gallery_settings_padding_bottom\` text DEFAULT 'medium',
  	\`gallery_settings_has_background_image\` integer DEFAULT false,
  	\`gallery_settings_background\` text DEFAULT 'dark',
  	\`gallery_settings_background_image_id\` integer,
  	\`controls_type\` text DEFAULT 'arrows',
  	\`autoplay\` integer DEFAULT false,
  	\`content\` text,
  	\`gallery_variant\` text DEFAULT 'simpleSlider',
  	\`link_type\` text DEFAULT 'internal',
  	\`link_new_tab\` integer,
  	\`link_has_anchor\` integer,
  	\`link_dark_button\` integer,
  	\`link_icon_only\` integer DEFAULT false,
  	\`link_icon_position\` text DEFAULT 'left',
  	\`link_icon\` text,
  	\`link_label\` text,
  	\`link_relation\` text DEFAULT 'pages',
  	\`link_url\` text,
  	\`link_anchor_to\` text,
  	\`link_appearance\` text DEFAULT 'primary',
  	\`block_name\` text,
  	FOREIGN KEY (\`gallery_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_gallery_order_idx\` ON \`flDet_blocks_gallery\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_gallery_parent_id_idx\` ON \`flDet_blocks_gallery\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_gallery_path_idx\` ON \`flDet_blocks_gallery\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_gallery_locale_idx\` ON \`flDet_blocks_gallery\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_gallery_gallery_settings_gallery_settings_background_image_idx\` ON \`flDet_blocks_gallery\` (\`gallery_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_highlighted_text\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`high_set_anchor_id\` text,
  	\`high_set_padding_top\` text DEFAULT 'medium',
  	\`high_set_padding_bottom\` text DEFAULT 'medium',
  	\`high_set_has_background_image\` integer DEFAULT false,
  	\`high_set_background\` text DEFAULT 'dark',
  	\`high_set_background_image_id\` integer,
  	\`title\` text,
  	\`highlighted_text\` text,
  	\`highlighted_link_type\` text DEFAULT 'internal',
  	\`highlighted_link_new_tab\` integer,
  	\`highlighted_link_has_anchor\` integer,
  	\`highlighted_link_dark_button\` integer,
  	\`highlighted_link_icon_only\` integer DEFAULT false,
  	\`highlighted_link_icon_position\` text DEFAULT 'left',
  	\`highlighted_link_icon\` text,
  	\`highlighted_link_label\` text,
  	\`highlighted_link_relation\` text DEFAULT 'pages',
  	\`highlighted_link_url\` text,
  	\`highlighted_link_anchor_to\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`high_set_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_highlighted_text_order_idx\` ON \`flDet_blocks_highlighted_text\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_highlighted_text_parent_id_idx\` ON \`flDet_blocks_highlighted_text\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_highlighted_text_path_idx\` ON \`flDet_blocks_highlighted_text\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_highlighted_text_locale_idx\` ON \`flDet_blocks_highlighted_text\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_highlighted_text_high_set_high_set_background_image_idx\` ON \`flDet_blocks_highlighted_text\` (\`high_set_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_images_grid_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_images_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_images_grid_images_order_idx\` ON \`flDet_blocks_images_grid_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_images_grid_images_parent_id_idx\` ON \`flDet_blocks_images_grid_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_images_grid_images_locale_idx\` ON \`flDet_blocks_images_grid_images\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_images_grid_images_image_idx\` ON \`flDet_blocks_images_grid_images\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_images_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`images_settings_anchor_id\` text,
  	\`images_settings_padding_top\` text DEFAULT 'medium',
  	\`images_settings_padding_bottom\` text DEFAULT 'medium',
  	\`images_settings_has_background_image\` integer DEFAULT false,
  	\`images_settings_background\` text DEFAULT 'dark',
  	\`images_settings_background_image_id\` integer,
  	\`direction_variant\` text DEFAULT 'default',
  	\`block_name\` text,
  	FOREIGN KEY (\`images_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_images_grid_order_idx\` ON \`flDet_blocks_images_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_images_grid_parent_id_idx\` ON \`flDet_blocks_images_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_images_grid_path_idx\` ON \`flDet_blocks_images_grid\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_images_grid_locale_idx\` ON \`flDet_blocks_images_grid\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_images_grid_images_settings_images_settings_background_image_idx\` ON \`flDet_blocks_images_grid\` (\`images_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_image_pins_pins\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`withlogo\` integer DEFAULT false,
  	\`reverse_layout\` integer DEFAULT false,
  	\`highlighted\` integer DEFAULT false,
  	\`logo_id\` integer,
  	\`marker_label\` text,
  	\`x\` numeric,
  	\`x_mobile\` numeric,
  	\`y\` numeric,
  	\`y_mobile\` numeric,
  	\`pin_height\` numeric,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_image_pins\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_image_pins_pins_order_idx\` ON \`flDet_blocks_image_pins_pins\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_image_pins_pins_parent_id_idx\` ON \`flDet_blocks_image_pins_pins\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_image_pins_pins_locale_idx\` ON \`flDet_blocks_image_pins_pins\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_image_pins_pins_logo_idx\` ON \`flDet_blocks_image_pins_pins\` (\`logo_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_image_pins\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_pins_set_anchor_id\` text,
  	\`image_pins_set_padding_top\` text DEFAULT 'medium',
  	\`image_pins_set_padding_bottom\` text DEFAULT 'medium',
  	\`image_pins_set_has_background_image\` integer DEFAULT false,
  	\`image_pins_set_background\` text DEFAULT 'dark',
  	\`image_pins_set_background_image_id\` integer,
  	\`text\` text,
  	\`background_image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_pins_set_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_image_pins_order_idx\` ON \`flDet_blocks_image_pins\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_image_pins_parent_id_idx\` ON \`flDet_blocks_image_pins\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_image_pins_path_idx\` ON \`flDet_blocks_image_pins\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_image_pins_locale_idx\` ON \`flDet_blocks_image_pins\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_image_pins_image_pins_set_image_pins_set_background_image_idx\` ON \`flDet_blocks_image_pins\` (\`image_pins_set_background_image_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_image_pins_background_image_idx\` ON \`flDet_blocks_image_pins\` (\`background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_map\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`map_settings_anchor_id\` text,
  	\`map_settings_padding_top\` text DEFAULT 'medium',
  	\`map_settings_padding_bottom\` text DEFAULT 'medium',
  	\`map_settings_has_background_image\` integer DEFAULT false,
  	\`map_settings_background\` text DEFAULT 'dark',
  	\`map_settings_background_image_id\` integer,
  	\`map_id\` integer,
  	\`map_link\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`map_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`map_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_map_order_idx\` ON \`flDet_blocks_map\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_map_parent_id_idx\` ON \`flDet_blocks_map\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_map_path_idx\` ON \`flDet_blocks_map\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_map_locale_idx\` ON \`flDet_blocks_map\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_map_map_settings_map_settings_background_image_idx\` ON \`flDet_blocks_map\` (\`map_settings_background_image_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_map_map_idx\` ON \`flDet_blocks_map\` (\`map_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_news_snippets\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`news_set_anchor_id\` text,
  	\`news_set_padding_top\` text DEFAULT 'medium',
  	\`news_set_padding_bottom\` text DEFAULT 'medium',
  	\`news_set_has_background_image\` integer DEFAULT false,
  	\`news_set_background\` text DEFAULT 'dark',
  	\`news_set_background_image_id\` integer,
  	\`news_set_heading\` text,
  	\`news_set_link_type\` text DEFAULT 'internal',
  	\`news_set_link_new_tab\` integer,
  	\`news_set_link_has_anchor\` integer,
  	\`news_set_link_dark_button\` integer,
  	\`news_set_link_icon_only\` integer DEFAULT false,
  	\`news_set_link_icon_position\` text DEFAULT 'left',
  	\`news_set_link_icon\` text,
  	\`news_set_link_label\` text,
  	\`news_set_link_relation\` text DEFAULT 'pages',
  	\`news_set_link_url\` text,
  	\`news_set_link_anchor_to\` text,
  	\`news_set_link_appearance\` text DEFAULT 'primary',
  	\`block_name\` text,
  	FOREIGN KEY (\`news_set_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_news_snippets_order_idx\` ON \`flDet_blocks_news_snippets\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_news_snippets_parent_id_idx\` ON \`flDet_blocks_news_snippets\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_news_snippets_path_idx\` ON \`flDet_blocks_news_snippets\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_news_snippets_locale_idx\` ON \`flDet_blocks_news_snippets\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_news_snippets_news_set_news_set_background_image_idx\` ON \`flDet_blocks_news_snippets\` (\`news_set_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_numbers_numbers\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`number\` numeric,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_numbers\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_numbers_numbers_order_idx\` ON \`flDet_blocks_numbers_numbers\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_numbers_numbers_parent_id_idx\` ON \`flDet_blocks_numbers_numbers\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_numbers_numbers_locale_idx\` ON \`flDet_blocks_numbers_numbers\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_numbers\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`numbers_settings_anchor_id\` text,
  	\`numbers_settings_padding_top\` text DEFAULT 'medium',
  	\`numbers_settings_padding_bottom\` text DEFAULT 'medium',
  	\`numbers_settings_has_background_image\` integer DEFAULT false,
  	\`numbers_settings_background\` text DEFAULT 'dark',
  	\`numbers_settings_background_image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`numbers_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_numbers_order_idx\` ON \`flDet_blocks_numbers\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_numbers_parent_id_idx\` ON \`flDet_blocks_numbers\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_numbers_path_idx\` ON \`flDet_blocks_numbers\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_numbers_locale_idx\` ON \`flDet_blocks_numbers\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_numbers_numbers_settings_numbers_settings_background_image_idx\` ON \`flDet_blocks_numbers\` (\`numbers_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_timeline_timeline\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_timeline\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_timeline_timeline_order_idx\` ON \`flDet_blocks_timeline_timeline\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_timeline_timeline_parent_id_idx\` ON \`flDet_blocks_timeline_timeline\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_timeline_timeline_locale_idx\` ON \`flDet_blocks_timeline_timeline\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_timeline\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`timeline_settings_anchor_id\` text,
  	\`timeline_settings_padding_top\` text DEFAULT 'medium',
  	\`timeline_settings_padding_bottom\` text DEFAULT 'medium',
  	\`timeline_settings_has_background_image\` integer DEFAULT false,
  	\`timeline_settings_background\` text DEFAULT 'dark',
  	\`timeline_settings_background_image_id\` integer,
  	\`content\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`timeline_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_timeline_order_idx\` ON \`flDet_blocks_timeline\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_timeline_parent_id_idx\` ON \`flDet_blocks_timeline\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_timeline_path_idx\` ON \`flDet_blocks_timeline\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_timeline_locale_idx\` ON \`flDet_blocks_timeline\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_timeline_timeline_settings_timeline_settings_background_image_idx\` ON \`flDet_blocks_timeline\` (\`timeline_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_prices\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`prices_settings_anchor_id\` text,
  	\`prices_settings_padding_top\` text DEFAULT 'medium',
  	\`prices_settings_padding_bottom\` text DEFAULT 'medium',
  	\`prices_settings_has_background_image\` integer DEFAULT false,
  	\`prices_settings_background\` text DEFAULT 'dark',
  	\`prices_settings_background_image_id\` integer,
  	\`bottom_content\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`prices_settings_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_prices_order_idx\` ON \`flDet_blocks_prices\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_prices_parent_id_idx\` ON \`flDet_blocks_prices\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_prices_path_idx\` ON \`flDet_blocks_prices\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_prices_locale_idx\` ON \`flDet_blocks_prices\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_prices_prices_settings_prices_settings_background_image_idx\` ON \`flDet_blocks_prices\` (\`prices_settings_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_interactive_picker_extended_views\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`view_name\` text,
  	\`image_id\` integer,
  	\`direct\` text DEFAULT 'south',
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_interactive_picker_extended\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_interactive_picker_extended_views_order_idx\` ON \`flDet_blocks_interactive_picker_extended_views\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_interactive_picker_extended_views_parent_id_idx\` ON \`flDet_blocks_interactive_picker_extended_views\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_interactive_picker_extended_views_locale_idx\` ON \`flDet_blocks_interactive_picker_extended_views\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_interactive_picker_extended_views_image_idx\` ON \`flDet_blocks_interactive_picker_extended_views\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_interactive_picker_extended\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`picker_value\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_interactive_picker_extended_order_idx\` ON \`flDet_blocks_interactive_picker_extended\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_interactive_picker_extended_parent_id_idx\` ON \`flDet_blocks_interactive_picker_extended\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_interactive_picker_extended_path_idx\` ON \`flDet_blocks_interactive_picker_extended\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_interactive_picker_extended_locale_idx\` ON \`flDet_blocks_interactive_picker_extended\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_visual_price_list_buildings\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`building_id\` integer,
  	FOREIGN KEY (\`building_id\`) REFERENCES \`buildings\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet_blocks_visual_price_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_visual_price_list_buildings_order_idx\` ON \`flDet_blocks_visual_price_list_buildings\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_visual_price_list_buildings_parent_id_idx\` ON \`flDet_blocks_visual_price_list_buildings\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_visual_price_list_buildings_locale_idx\` ON \`flDet_blocks_visual_price_list_buildings\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_visual_price_list_buildings_building_idx\` ON \`flDet_blocks_visual_price_list_buildings\` (\`building_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_visual_price_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_visual_price_list_order_idx\` ON \`flDet_blocks_visual_price_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_visual_price_list_parent_id_idx\` ON \`flDet_blocks_visual_price_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_visual_price_list_path_idx\` ON \`flDet_blocks_visual_price_list\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_visual_price_list_locale_idx\` ON \`flDet_blocks_visual_price_list\` (\`_locale\`);`)
  await db.run(sql`CREATE TABLE \`flDet_blocks_shared_section\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`shared_section_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`shared_section_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_blocks_shared_section_order_idx\` ON \`flDet_blocks_shared_section\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_shared_section_parent_id_idx\` ON \`flDet_blocks_shared_section\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_shared_section_path_idx\` ON \`flDet_blocks_shared_section\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_shared_section_locale_idx\` ON \`flDet_blocks_shared_section\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_blocks_shared_section_shared_section_idx\` ON \`flDet_blocks_shared_section\` (\`shared_section_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`project_id\` integer NOT NULL,
  	\`meta_og_image_id\` integer,
  	\`meta_twitter_card\` text DEFAULT 'summary_large_image',
  	\`meta_structured_data\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`project_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`meta_og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_project_idx\` ON \`flDet\` (\`project_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_meta_meta_og_image_idx\` ON \`flDet\` (\`meta_og_image_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_updated_at_idx\` ON \`flDet\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`flDet_created_at_idx\` ON \`flDet\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`flDet_locales\` (
  	\`title\` text NOT NULL,
  	\`meta_title\` text,
  	\`meta_description\` text,
  	\`meta_keywords\` text,
  	\`meta_og_title\` text,
  	\`meta_og_description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`flDet_locales_locale_parent_id_unique\` ON \`flDet_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`flDet_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`locale\` text,
  	\`pages_id\` integer,
  	\`flats_id\` integer,
  	\`news_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`flats_id\`) REFERENCES \`flats\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`news_id\`) REFERENCES \`news\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`flDet_rels_order_idx\` ON \`flDet_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`flDet_rels_parent_idx\` ON \`flDet_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`flDet_rels_path_idx\` ON \`flDet_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`flDet_rels_locale_idx\` ON \`flDet_rels\` (\`locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_rels_pages_id_idx\` ON \`flDet_rels\` (\`pages_id\`,\`locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_rels_flats_id_idx\` ON \`flDet_rels\` (\`flats_id\`,\`locale\`);`)
  await db.run(sql`CREATE INDEX \`flDet_rels_news_id_idx\` ON \`flDet_rels\` (\`news_id\`,\`locale\`);`)
  await db.run(sql`CREATE TABLE \`documents\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`alt\` text NOT NULL,
  	\`realpadid\` text,
  	\`project_id\` integer,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric,
  	\`height\` numeric,
  	\`focal_x\` numeric,
  	\`focal_y\` numeric,
  	FOREIGN KEY (\`project_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`documents_project_idx\` ON \`documents\` (\`project_id\`);`)
  await db.run(sql`CREATE INDEX \`documents_updated_at_idx\` ON \`documents\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`documents_created_at_idx\` ON \`documents\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`documents_filename_idx\` ON \`documents\` (\`filename\`);`)
  await db.run(sql`CREATE TABLE \`news\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`published_at\` text,
  	\`read_time\` numeric,
  	\`project_id\` integer,
  	\`cover_image_id\` integer,
  	\`meta_og_image_id\` integer,
  	\`meta_twitter_card\` text DEFAULT 'summary_large_image',
  	\`meta_structured_data\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft',
  	FOREIGN KEY (\`project_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`cover_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`meta_og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`news_project_idx\` ON \`news\` (\`project_id\`);`)
  await db.run(sql`CREATE INDEX \`news_cover_image_idx\` ON \`news\` (\`cover_image_id\`);`)
  await db.run(sql`CREATE INDEX \`news_meta_meta_og_image_idx\` ON \`news\` (\`meta_og_image_id\`);`)
  await db.run(sql`CREATE INDEX \`news_updated_at_idx\` ON \`news\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`news_created_at_idx\` ON \`news\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`news__status_idx\` ON \`news\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`news_locales\` (
  	\`title\` text,
  	\`slug\` text,
  	\`status\` text DEFAULT 'draft',
  	\`perex\` text,
  	\`content\` text,
  	\`meta_title\` text,
  	\`meta_description\` text,
  	\`meta_keywords\` text,
  	\`meta_og_title\` text,
  	\`meta_og_description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`news\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`news_slug_idx\` ON \`news_locales\` (\`slug\`,\`_locale\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`news_locales_locale_parent_id_unique\` ON \`news_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`news_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`news\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`news_rels_order_idx\` ON \`news_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`news_rels_parent_idx\` ON \`news_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`news_rels_path_idx\` ON \`news_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`news_rels_users_id_idx\` ON \`news_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`_news_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_published_at\` text,
  	\`version_read_time\` numeric,
  	\`version_project_id\` integer,
  	\`version_cover_image_id\` integer,
  	\`version_meta_og_image_id\` integer,
  	\`version_meta_twitter_card\` text DEFAULT 'summary_large_image',
  	\`version_meta_structured_data\` text,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`snapshot\` integer,
  	\`published_locale\` text,
  	\`latest\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`news\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_project_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_cover_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_meta_og_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_news_v_parent_idx\` ON \`_news_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_news_v_version_version_project_idx\` ON \`_news_v\` (\`version_project_id\`);`)
  await db.run(sql`CREATE INDEX \`_news_v_version_version_cover_image_idx\` ON \`_news_v\` (\`version_cover_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_news_v_version_meta_version_meta_og_image_idx\` ON \`_news_v\` (\`version_meta_og_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_news_v_version_version_updated_at_idx\` ON \`_news_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_news_v_version_version_created_at_idx\` ON \`_news_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_news_v_version_version__status_idx\` ON \`_news_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_news_v_created_at_idx\` ON \`_news_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_news_v_updated_at_idx\` ON \`_news_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_news_v_snapshot_idx\` ON \`_news_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_news_v_published_locale_idx\` ON \`_news_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_news_v_latest_idx\` ON \`_news_v\` (\`latest\`);`)
  await db.run(sql`CREATE TABLE \`_news_v_locales\` (
  	\`version_title\` text,
  	\`version_slug\` text,
  	\`version_status\` text DEFAULT 'draft',
  	\`version_perex\` text,
  	\`version_content\` text,
  	\`version_meta_title\` text,
  	\`version_meta_description\` text,
  	\`version_meta_keywords\` text,
  	\`version_meta_og_title\` text,
  	\`version_meta_og_description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_news_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_news_v_version_version_slug_idx\` ON \`_news_v_locales\` (\`version_slug\`,\`_locale\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`_news_v_locales_locale_parent_id_unique\` ON \`_news_v_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_news_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_news_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_news_v_rels_order_idx\` ON \`_news_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_news_v_rels_parent_idx\` ON \`_news_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_news_v_rels_path_idx\` ON \`_news_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_news_v_rels_users_id_idx\` ON \`_news_v_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`global_slug\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_global_slug_idx\` ON \`payload_locked_documents\` (\`global_slug\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_updated_at_idx\` ON \`payload_locked_documents\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_created_at_idx\` ON \`payload_locked_documents\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`share_id\` integer,
  	\`roles_id\` integer,
  	\`users_id\` integer,
  	\`media_id\` integer,
  	\`projects_id\` integer,
  	\`pages_id\` integer,
  	\`globalheader_id\` integer,
  	\`globalfooter_id\` integer,
  	\`buildings_id\` integer,
  	\`floors_id\` integer,
  	\`flats_id\` integer,
  	\`project_global_settings_id\` integer,
  	\`flDet_id\` integer,
  	\`documents_id\` integer,
  	\`news_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`share_id\`) REFERENCES \`share\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`roles_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`projects_id\`) REFERENCES \`projects\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`globalheader_id\`) REFERENCES \`globalheader\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`globalfooter_id\`) REFERENCES \`globalfooter\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`buildings_id\`) REFERENCES \`buildings\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`floors_id\`) REFERENCES \`floors\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`flats_id\`) REFERENCES \`flats\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`project_global_settings_id\`) REFERENCES \`project_global_settings\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`flDet_id\`) REFERENCES \`flDet\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`documents_id\`) REFERENCES \`documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`news_id\`) REFERENCES \`news\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_share_id_idx\` ON \`payload_locked_documents_rels\` (\`share_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_roles_id_idx\` ON \`payload_locked_documents_rels\` (\`roles_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_projects_id_idx\` ON \`payload_locked_documents_rels\` (\`projects_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_pages_id_idx\` ON \`payload_locked_documents_rels\` (\`pages_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_globalheader_id_idx\` ON \`payload_locked_documents_rels\` (\`globalheader_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_globalfooter_id_idx\` ON \`payload_locked_documents_rels\` (\`globalfooter_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_buildings_id_idx\` ON \`payload_locked_documents_rels\` (\`buildings_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_floors_id_idx\` ON \`payload_locked_documents_rels\` (\`floors_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_flats_id_idx\` ON \`payload_locked_documents_rels\` (\`flats_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_project_global_settings_id_idx\` ON \`payload_locked_documents_rels\` (\`project_global_settings_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_flDet_id_idx\` ON \`payload_locked_documents_rels\` (\`flDet_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_documents_id_idx\` ON \`payload_locked_documents_rels\` (\`documents_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_news_id_idx\` ON \`payload_locked_documents_rels\` (\`news_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text,
  	\`value\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_key_idx\` ON \`payload_preferences\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_updated_at_idx\` ON \`payload_preferences\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_created_at_idx\` ON \`payload_preferences\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_preferences\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_order_idx\` ON \`payload_preferences_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_parent_idx\` ON \`payload_preferences_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_path_idx\` ON \`payload_preferences_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_users_id_idx\` ON \`payload_preferences_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_migrations\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`batch\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_migrations_updated_at_idx\` ON \`payload_migrations\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_migrations_created_at_idx\` ON \`payload_migrations\` (\`created_at\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`share_blocks_banner\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_benefits_benefits_row_item_heading_lines\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_benefits_benefits_row_item2_heading_lines\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_benefits_benefits\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_benefits\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_contact_contact_info_highlighted_contacts\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_contact_contact_info_contact_items\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_contact\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_content\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_draw_editor\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_features_features_with_title\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_features_features_uppercase\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_features\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_form_form_cfg_flat_disposition_options\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_form_slide_out_boxes\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_form\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_flats_snippets\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_gallery_simple_slider\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_gallery_multi_slider_images\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_gallery_multi_slider\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_gallery_full_width\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_gallery\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_hero_hero_slideshow\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_hero_main_buttons\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_hero_secondary_buttons\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_hero\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_highlighted_text\`;`)
  await db.run(sql`DROP TABLE \`imgContent_person_bullet_points\`;`)
  await db.run(sql`DROP TABLE \`imgContent_accordion_accordion_items\`;`)
  await db.run(sql`DROP TABLE \`imgContent\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_images_grid_images\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_images_grid\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_image_pins_pins\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_image_pins\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_map\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_news_snippets\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_numbers_numbers\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_numbers\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_timeline_timeline\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_timeline\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_prices\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_interactive_picker_extended_views\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_interactive_picker_extended\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_visual_price_list_buildings\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_visual_price_list\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_variable_table_rows_cells\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_variable_table_rows\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_variable_table\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_table_custom\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_text_image\`;`)
  await db.run(sql`DROP TABLE \`share_blocks_shared_section\`;`)
  await db.run(sql`DROP TABLE \`share\`;`)
  await db.run(sql`DROP TABLE \`share_locales\`;`)
  await db.run(sql`DROP TABLE \`share_rels\`;`)
  await db.run(sql`DROP TABLE \`roles_permissions_projects\`;`)
  await db.run(sql`DROP TABLE \`roles_permissions_pages\`;`)
  await db.run(sql`DROP TABLE \`roles_permissions_globalheader\`;`)
  await db.run(sql`DROP TABLE \`roles_permissions_globalfooter\`;`)
  await db.run(sql`DROP TABLE \`roles_permissions_project_global_settings\`;`)
  await db.run(sql`DROP TABLE \`roles_permissions_buildings\`;`)
  await db.run(sql`DROP TABLE \`roles_permissions_flats\`;`)
  await db.run(sql`DROP TABLE \`roles_permissions_flat_detail_page\`;`)
  await db.run(sql`DROP TABLE \`roles_permissions_sectors\`;`)
  await db.run(sql`DROP TABLE \`roles_permissions_floors\`;`)
  await db.run(sql`DROP TABLE \`roles_permissions_news\`;`)
  await db.run(sql`DROP TABLE \`roles_permissions_media\`;`)
  await db.run(sql`DROP TABLE \`roles_permissions_documents\`;`)
  await db.run(sql`DROP TABLE \`roles_permissions_share\`;`)
  await db.run(sql`DROP TABLE \`roles\`;`)
  await db.run(sql`DROP TABLE \`roles_rels\`;`)
  await db.run(sql`DROP TABLE \`users\`;`)
  await db.run(sql`DROP TABLE \`users_rels\`;`)
  await db.run(sql`DROP TABLE \`media\`;`)
  await db.run(sql`DROP TABLE \`projects_standards\`;`)
  await db.run(sql`DROP TABLE \`projects_plans\`;`)
  await db.run(sql`DROP TABLE \`projects\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_hero_slideshow\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_main_buttons\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero_secondary_buttons\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_hero\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_variable_table_rows_cells\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_variable_table_rows\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_variable_table\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_table_custom\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_draw_editor\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_text_image\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_banner\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_benefits_benefits_row_item_heading_lines\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_benefits_benefits_row_item2_heading_lines\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_benefits_benefits\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_benefits\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact_contact_info_highlighted_contacts\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact_contact_info_contact_items\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_content\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_features_features_with_title\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_features_features_uppercase\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_features\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_form_form_cfg_flat_disposition_options\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_form_slide_out_boxes\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_form\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_flats_snippets\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_gallery_simple_slider\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_gallery_multi_slider_images\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_gallery_multi_slider\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_gallery_full_width\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_gallery\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_highlighted_text\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_images_grid_images\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_images_grid\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_image_pins_pins\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_image_pins\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_map\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_news_snippets\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_numbers_numbers\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_numbers\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_timeline_timeline\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_timeline\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_prices\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_interactive_picker_extended_views\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_interactive_picker_extended\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_visual_price_list_buildings\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_visual_price_list\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_shared_section\`;`)
  await db.run(sql`DROP TABLE \`pages\`;`)
  await db.run(sql`DROP TABLE \`pages_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_rels\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_hero_hero_slideshow\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_hero_main_buttons\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_hero_secondary_buttons\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_hero\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_variable_table_rows_cells\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_variable_table_rows\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_variable_table\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_table_custom\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_draw_editor\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_text_image\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_banner\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_benefits_benefits_row_item_heading_lines\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_benefits_benefits_row_item2_heading_lines\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_benefits_benefits\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_benefits\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_contact_contact_info_highlighted_contacts\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_contact_contact_info_contact_items\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_contact\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_content\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_features_features_with_title\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_features_features_uppercase\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_features\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_form_form_cfg_flat_disposition_options\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_form_slide_out_boxes\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_form\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_flats_snippets\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_gallery_simple_slider\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_gallery_multi_slider_images\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_gallery_multi_slider\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_gallery_full_width\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_gallery\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_highlighted_text\`;`)
  await db.run(sql`DROP TABLE \`_imgContent_v_person_bullet_points\`;`)
  await db.run(sql`DROP TABLE \`_imgContent_v_accordion_accordion_items\`;`)
  await db.run(sql`DROP TABLE \`_imgContent_v\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_images_grid_images\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_images_grid\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_image_pins_pins\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_image_pins\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_map\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_news_snippets\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_numbers_numbers\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_numbers\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_timeline_timeline\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_timeline\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_prices\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_interactive_picker_extended_views\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_interactive_picker_extended\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_visual_price_list_buildings\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_visual_price_list\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_shared_section\`;`)
  await db.run(sql`DROP TABLE \`_pages_v\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_rels\`;`)
  await db.run(sql`DROP TABLE \`globalheader_nav_items\`;`)
  await db.run(sql`DROP TABLE \`globalheader_cta_buttons\`;`)
  await db.run(sql`DROP TABLE \`globalheader\`;`)
  await db.run(sql`DROP TABLE \`globalheader_locales\`;`)
  await db.run(sql`DROP TABLE \`globalheader_rels\`;`)
  await db.run(sql`DROP TABLE \`globalfooter_highlighted_contacts\`;`)
  await db.run(sql`DROP TABLE \`globalfooter_social_links\`;`)
  await db.run(sql`DROP TABLE \`globalfooter_contact_items\`;`)
  await db.run(sql`DROP TABLE \`globalfooter_bottom_links\`;`)
  await db.run(sql`DROP TABLE \`globalfooter\`;`)
  await db.run(sql`DROP TABLE \`globalfooter_locales\`;`)
  await db.run(sql`DROP TABLE \`globalfooter_rels\`;`)
  await db.run(sql`DROP TABLE \`buildings_documents\`;`)
  await db.run(sql`DROP TABLE \`buildings_plans\`;`)
  await db.run(sql`DROP TABLE \`buildings\`;`)
  await db.run(sql`DROP TABLE \`buildings_locales\`;`)
  await db.run(sql`DROP TABLE \`floors_documents\`;`)
  await db.run(sql`DROP TABLE \`floors_plans\`;`)
  await db.run(sql`DROP TABLE \`floors\`;`)
  await db.run(sql`DROP TABLE \`floors_locales\`;`)
  await db.run(sql`DROP TABLE \`flats_documents\`;`)
  await db.run(sql`DROP TABLE \`flats_plans\`;`)
  await db.run(sql`DROP TABLE \`flats_pictures\`;`)
  await db.run(sql`DROP TABLE \`flats_manual_documents\`;`)
  await db.run(sql`DROP TABLE \`flats_manual_plans\`;`)
  await db.run(sql`DROP TABLE \`flats_flat_plans\`;`)
  await db.run(sql`DROP TABLE \`flats_gallery_simple_slider\`;`)
  await db.run(sql`DROP TABLE \`flats_gallery_multi_slider_images\`;`)
  await db.run(sql`DROP TABLE \`flats_gallery_multi_slider\`;`)
  await db.run(sql`DROP TABLE \`flats\`;`)
  await db.run(sql`DROP TABLE \`flats_locales\`;`)
  await db.run(sql`DROP TABLE \`flats_rels\`;`)
  await db.run(sql`DROP TABLE \`project_global_settings\`;`)
  await db.run(sql`DROP TABLE \`project_global_settings_locales\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_hero_hero_slideshow\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_hero_main_buttons\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_hero_secondary_buttons\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_hero\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_variable_table_rows_cells\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_variable_table_rows\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_variable_table\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_table_custom\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_draw_editor\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_text_image\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_banner\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_benefits_benefits_row_item_heading_lines\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_benefits_benefits_row_item2_heading_lines\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_benefits_benefits\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_benefits\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_contact_contact_info_highlighted_contacts\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_contact_contact_info_contact_items\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_contact\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_content\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_features_features_with_title\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_features_features_uppercase\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_features\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_form_form_cfg_flat_disposition_options\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_form_slide_out_boxes\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_form\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_flats_snippets\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_gallery_simple_slider\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_gallery_multi_slider_images\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_gallery_multi_slider\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_gallery_full_width\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_gallery\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_highlighted_text\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_images_grid_images\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_images_grid\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_image_pins_pins\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_image_pins\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_map\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_news_snippets\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_numbers_numbers\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_numbers\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_timeline_timeline\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_timeline\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_prices\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_interactive_picker_extended_views\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_interactive_picker_extended\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_visual_price_list_buildings\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_visual_price_list\`;`)
  await db.run(sql`DROP TABLE \`flDet_blocks_shared_section\`;`)
  await db.run(sql`DROP TABLE \`flDet\`;`)
  await db.run(sql`DROP TABLE \`flDet_locales\`;`)
  await db.run(sql`DROP TABLE \`flDet_rels\`;`)
  await db.run(sql`DROP TABLE \`documents\`;`)
  await db.run(sql`DROP TABLE \`news\`;`)
  await db.run(sql`DROP TABLE \`news_locales\`;`)
  await db.run(sql`DROP TABLE \`news_rels\`;`)
  await db.run(sql`DROP TABLE \`_news_v\`;`)
  await db.run(sql`DROP TABLE \`_news_v_locales\`;`)
  await db.run(sql`DROP TABLE \`_news_v_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_migrations\`;`)
}
