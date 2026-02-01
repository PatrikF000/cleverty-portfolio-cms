import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "globalheader_cta_buttons" CASCADE;
  ALTER TABLE "globalheaderstoone" ADD COLUMN "client_portal" varchar;
  DROP TYPE "public"."enum_globalheader_cta_buttons_link_type";
  DROP TYPE "public"."enum_globalheader_cta_buttons_link_icon";
  DROP TYPE "public"."enum_globalheader_cta_buttons_link_relation";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_globalheader_cta_buttons_link_type" AS ENUM('internal', 'external');
  CREATE TYPE "public"."enum_globalheader_cta_buttons_link_icon" AS ENUM('bike', 'cart', 'hospital', 'cheers', 'maskHappy', 'park', 'road', 'train', 'trainRegional', 'tram', 'metro', 'download', 'file', 'hand', 'wallet', 'zero', 'percentage', 'magnifyingGlass', 'leaf', 'lightBulb', 'drop', 'flash', 'phone', 'mail', 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'tiktok', 'pinterest', 'snapchat');
  CREATE TYPE "public"."enum_globalheader_cta_buttons_link_relation" AS ENUM('pages', 'flats', 'news', 'documents', 'anchor');
  CREATE TABLE IF NOT EXISTS "globalheader_cta_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_globalheader_cta_buttons_link_type" DEFAULT 'internal',
  	"link_new_tab" boolean,
  	"link_has_anchor" boolean,
  	"link_dark_button" boolean,
  	"link_with_icon" boolean DEFAULT false,
  	"link_icon_only" boolean DEFAULT false,
  	"link_icon_position" "icnPos" DEFAULT 'left',
  	"link_icon" "enum_globalheader_cta_buttons_link_icon",
  	"link_label" varchar,
  	"link_relation" "enum_globalheader_cta_buttons_link_relation" DEFAULT 'pages',
  	"link_url" varchar,
  	"link_anchor_to" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "globalheader_cta_buttons" ADD CONSTRAINT "globalheader_cta_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."globalheader"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "globalheader_cta_buttons_order_idx" ON "globalheader_cta_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "globalheader_cta_buttons_parent_id_idx" ON "globalheader_cta_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "globalheader_cta_buttons_locale_idx" ON "globalheader_cta_buttons" USING btree ("_locale");
  ALTER TABLE "globalheaderstoone" DROP COLUMN IF EXISTS "client_portal";`)
}
