import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_share_blocks_banner_flat_form" AS ENUM('flatForm1');
  CREATE TYPE "public"."enum_pages_blocks_banner_flat_form" AS ENUM('flatForm1');
  CREATE TYPE "public"."enum__pages_v_blocks_banner_flat_form" AS ENUM('flatForm1');
  CREATE TYPE "public"."enum_flDet_blocks_banner_flat_form" AS ENUM('flatForm1');
  CREATE TYPE "public"."enum_newsDet_blocks_banner_flat_form" AS ENUM('flatForm1');
  ALTER TABLE "share_blocks_banner" ADD COLUMN "has_flat_form" boolean DEFAULT false;
  ALTER TABLE "share_blocks_banner" ADD COLUMN "flat_form" "enum_share_blocks_banner_flat_form";
  ALTER TABLE "pages_blocks_banner" ADD COLUMN "has_flat_form" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_banner" ADD COLUMN "flat_form" "enum_pages_blocks_banner_flat_form";
  ALTER TABLE "_pages_v_blocks_banner" ADD COLUMN "has_flat_form" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_banner" ADD COLUMN "flat_form" "enum__pages_v_blocks_banner_flat_form";
  ALTER TABLE "flDet_blocks_banner" ADD COLUMN "has_flat_form" boolean DEFAULT false;
  ALTER TABLE "flDet_blocks_banner" ADD COLUMN "flat_form" "enum_flDet_blocks_banner_flat_form";
  ALTER TABLE "newsDet_blocks_banner" ADD COLUMN "has_flat_form" boolean DEFAULT false;
  ALTER TABLE "newsDet_blocks_banner" ADD COLUMN "flat_form" "enum_newsDet_blocks_banner_flat_form";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "share_blocks_banner" DROP COLUMN IF EXISTS "has_flat_form";
  ALTER TABLE "share_blocks_banner" DROP COLUMN IF EXISTS "flat_form";
  ALTER TABLE "pages_blocks_banner" DROP COLUMN IF EXISTS "has_flat_form";
  ALTER TABLE "pages_blocks_banner" DROP COLUMN IF EXISTS "flat_form";
  ALTER TABLE "_pages_v_blocks_banner" DROP COLUMN IF EXISTS "has_flat_form";
  ALTER TABLE "_pages_v_blocks_banner" DROP COLUMN IF EXISTS "flat_form";
  ALTER TABLE "flDet_blocks_banner" DROP COLUMN IF EXISTS "has_flat_form";
  ALTER TABLE "flDet_blocks_banner" DROP COLUMN IF EXISTS "flat_form";
  ALTER TABLE "newsDet_blocks_banner" DROP COLUMN IF EXISTS "has_flat_form";
  ALTER TABLE "newsDet_blocks_banner" DROP COLUMN IF EXISTS "flat_form";
  DROP TYPE "public"."enum_share_blocks_banner_flat_form";
  DROP TYPE "public"."enum_pages_blocks_banner_flat_form";
  DROP TYPE "public"."enum__pages_v_blocks_banner_flat_form";
  DROP TYPE "public"."enum_flDet_blocks_banner_flat_form";
  DROP TYPE "public"."enum_newsDet_blocks_banner_flat_form";`)
}
