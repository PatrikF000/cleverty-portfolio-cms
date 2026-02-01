import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "share_blocks_content" ADD COLUMN "wide_content_area" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_content" ADD COLUMN "wide_content_area" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_content" ADD COLUMN "wide_content_area" boolean DEFAULT false;
  ALTER TABLE "flDet_blocks_content" ADD COLUMN "wide_content_area" boolean DEFAULT false;
  ALTER TABLE "newsDet_blocks_content" ADD COLUMN "wide_content_area" boolean DEFAULT false;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "share_blocks_content" DROP COLUMN IF EXISTS "wide_content_area";
  ALTER TABLE "pages_blocks_content" DROP COLUMN IF EXISTS "wide_content_area";
  ALTER TABLE "_pages_v_blocks_content" DROP COLUMN IF EXISTS "wide_content_area";
  ALTER TABLE "flDet_blocks_content" DROP COLUMN IF EXISTS "wide_content_area";
  ALTER TABLE "newsDet_blocks_content" DROP COLUMN IF EXISTS "wide_content_area";`)
}
