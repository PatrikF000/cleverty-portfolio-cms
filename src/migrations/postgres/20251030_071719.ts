import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "share_blocks_form" ALTER COLUMN "form_cfg_checkbox_with_text_label" SET DEFAULT '';
  ALTER TABLE "pages_blocks_form" ALTER COLUMN "form_cfg_checkbox_with_text_label" SET DEFAULT '';
  ALTER TABLE "_pages_v_blocks_form" ALTER COLUMN "form_cfg_checkbox_with_text_label" SET DEFAULT '';
  ALTER TABLE "flDet_blocks_form" ALTER COLUMN "form_cfg_checkbox_with_text_label" SET DEFAULT '';
  ALTER TABLE "share_blocks_form" ADD COLUMN "form_cfg_bottom_content" jsonb;
  ALTER TABLE "pages_blocks_form" ADD COLUMN "form_cfg_bottom_content" jsonb;
  ALTER TABLE "_pages_v_blocks_form" ADD COLUMN "form_cfg_bottom_content" jsonb;
  ALTER TABLE "flDet_blocks_form" ADD COLUMN "form_cfg_bottom_content" jsonb;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "share_blocks_form" ALTER COLUMN "form_cfg_checkbox_with_text_label" SET DEFAULT 'I agree to the terms and conditions';
  ALTER TABLE "pages_blocks_form" ALTER COLUMN "form_cfg_checkbox_with_text_label" SET DEFAULT 'I agree to the terms and conditions';
  ALTER TABLE "_pages_v_blocks_form" ALTER COLUMN "form_cfg_checkbox_with_text_label" SET DEFAULT 'I agree to the terms and conditions';
  ALTER TABLE "flDet_blocks_form" ALTER COLUMN "form_cfg_checkbox_with_text_label" SET DEFAULT 'I agree to the terms and conditions';
  ALTER TABLE "share_blocks_form" DROP COLUMN IF EXISTS "form_cfg_bottom_content";
  ALTER TABLE "pages_blocks_form" DROP COLUMN IF EXISTS "form_cfg_bottom_content";
  ALTER TABLE "_pages_v_blocks_form" DROP COLUMN IF EXISTS "form_cfg_bottom_content";
  ALTER TABLE "flDet_blocks_form" DROP COLUMN IF EXISTS "form_cfg_bottom_content";`)
}
