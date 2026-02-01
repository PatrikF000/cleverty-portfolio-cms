import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "public"."share_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_features_features_with_title_feature_icon";
  CREATE TYPE "public"."enum_share_blocks_features_features_with_title_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."share_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_share_blocks_features_features_with_title_feature_icon" USING "feature_icon"::"public"."enum_share_blocks_features_features_with_title_feature_icon";
  ALTER TABLE "public"."share_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_features_features_uppercase_feature_icon";
  CREATE TYPE "public"."enum_share_blocks_features_features_uppercase_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."share_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_share_blocks_features_features_uppercase_feature_icon" USING "feature_icon"::"public"."enum_share_blocks_features_features_uppercase_feature_icon";
  ALTER TABLE "public"."imgContent_person_bullet_points" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_imgContent_person_bullet_points_feature_icon";
  CREATE TYPE "public"."enum_imgContent_person_bullet_points_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."imgContent_person_bullet_points" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_imgContent_person_bullet_points_feature_icon" USING "feature_icon"::"public"."enum_imgContent_person_bullet_points_feature_icon";
  ALTER TABLE "public"."pages_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_features_features_with_title_feature_icon";
  CREATE TYPE "public"."enum_pages_blocks_features_features_with_title_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."pages_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_pages_blocks_features_features_with_title_feature_icon" USING "feature_icon"::"public"."enum_pages_blocks_features_features_with_title_feature_icon";
  ALTER TABLE "public"."pages_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_icon";
  CREATE TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."pages_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_icon" USING "feature_icon"::"public"."enum_pages_blocks_features_features_uppercase_feature_icon";
  ALTER TABLE "public"."_pages_v_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."_pages_v_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_icon" USING "feature_icon"::"public"."enum__pages_v_blocks_features_features_with_title_feature_icon";
  ALTER TABLE "public"."_pages_v_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."_pages_v_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_icon" USING "feature_icon"::"public"."enum__pages_v_blocks_features_features_uppercase_feature_icon";
  ALTER TABLE "public"."_imgContent_v_person_bullet_points" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__imgContent_v_person_bullet_points_feature_icon";
  CREATE TYPE "public"."enum__imgContent_v_person_bullet_points_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."_imgContent_v_person_bullet_points" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum__imgContent_v_person_bullet_points_feature_icon" USING "feature_icon"::"public"."enum__imgContent_v_person_bullet_points_feature_icon";
  ALTER TABLE "public"."flDet_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_icon";
  CREATE TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."flDet_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_icon" USING "feature_icon"::"public"."enum_flDet_blocks_features_features_with_title_feature_icon";
  ALTER TABLE "public"."flDet_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_icon";
  CREATE TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'tram', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  ALTER TABLE "public"."flDet_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_icon" USING "feature_icon"::"public"."enum_flDet_blocks_features_features_uppercase_feature_icon";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "public"."share_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_features_features_with_title_feature_icon";
  CREATE TYPE "public"."enum_share_blocks_features_features_with_title_feature_icon" AS ENUM('phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat', 'testicon', 'testicon2');
  ALTER TABLE "public"."share_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_share_blocks_features_features_with_title_feature_icon" USING "feature_icon"::"public"."enum_share_blocks_features_features_with_title_feature_icon";
  ALTER TABLE "public"."share_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_share_blocks_features_features_uppercase_feature_icon";
  CREATE TYPE "public"."enum_share_blocks_features_features_uppercase_feature_icon" AS ENUM('phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat', 'testicon', 'testicon2');
  ALTER TABLE "public"."share_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_share_blocks_features_features_uppercase_feature_icon" USING "feature_icon"::"public"."enum_share_blocks_features_features_uppercase_feature_icon";
  ALTER TABLE "public"."imgContent_person_bullet_points" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_imgContent_person_bullet_points_feature_icon";
  CREATE TYPE "public"."enum_imgContent_person_bullet_points_feature_icon" AS ENUM('phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat', 'testicon', 'testicon2');
  ALTER TABLE "public"."imgContent_person_bullet_points" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_imgContent_person_bullet_points_feature_icon" USING "feature_icon"::"public"."enum_imgContent_person_bullet_points_feature_icon";
  ALTER TABLE "public"."pages_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_features_features_with_title_feature_icon";
  CREATE TYPE "public"."enum_pages_blocks_features_features_with_title_feature_icon" AS ENUM('phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat', 'testicon', 'testicon2');
  ALTER TABLE "public"."pages_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_pages_blocks_features_features_with_title_feature_icon" USING "feature_icon"::"public"."enum_pages_blocks_features_features_with_title_feature_icon";
  ALTER TABLE "public"."pages_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_icon";
  CREATE TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_icon" AS ENUM('phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat', 'testicon', 'testicon2');
  ALTER TABLE "public"."pages_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_pages_blocks_features_features_uppercase_feature_icon" USING "feature_icon"::"public"."enum_pages_blocks_features_features_uppercase_feature_icon";
  ALTER TABLE "public"."_pages_v_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_icon" AS ENUM('phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat', 'testicon', 'testicon2');
  ALTER TABLE "public"."_pages_v_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum__pages_v_blocks_features_features_with_title_feature_icon" USING "feature_icon"::"public"."enum__pages_v_blocks_features_features_with_title_feature_icon";
  ALTER TABLE "public"."_pages_v_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_icon";
  CREATE TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_icon" AS ENUM('phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat', 'testicon', 'testicon2');
  ALTER TABLE "public"."_pages_v_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum__pages_v_blocks_features_features_uppercase_feature_icon" USING "feature_icon"::"public"."enum__pages_v_blocks_features_features_uppercase_feature_icon";
  ALTER TABLE "public"."_imgContent_v_person_bullet_points" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum__imgContent_v_person_bullet_points_feature_icon";
  CREATE TYPE "public"."enum__imgContent_v_person_bullet_points_feature_icon" AS ENUM('phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat', 'testicon', 'testicon2');
  ALTER TABLE "public"."_imgContent_v_person_bullet_points" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum__imgContent_v_person_bullet_points_feature_icon" USING "feature_icon"::"public"."enum__imgContent_v_person_bullet_points_feature_icon";
  ALTER TABLE "public"."flDet_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_icon";
  CREATE TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_icon" AS ENUM('phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat', 'testicon', 'testicon2');
  ALTER TABLE "public"."flDet_blocks_features_features_with_title" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_flDet_blocks_features_features_with_title_feature_icon" USING "feature_icon"::"public"."enum_flDet_blocks_features_features_with_title_feature_icon";
  ALTER TABLE "public"."flDet_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE text;
  DROP TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_icon";
  CREATE TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_icon" AS ENUM('phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat', 'testicon', 'testicon2');
  ALTER TABLE "public"."flDet_blocks_features_features_uppercase" ALTER COLUMN "feature_icon" SET DATA TYPE "public"."enum_flDet_blocks_features_features_uppercase_feature_icon" USING "feature_icon"::"public"."enum_flDet_blocks_features_features_uppercase_feature_icon";`)
}
