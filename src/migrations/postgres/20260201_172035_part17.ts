import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
DROP TABLE IF EXISTS "newsDet_rels" CASCADE;

DROP TABLE IF EXISTS "documents" CASCADE;

DROP TABLE IF EXISTS "news" CASCADE;

DROP TABLE IF EXISTS "newsstoone" CASCADE;

DROP TABLE IF EXISTS "news_rels" CASCADE;

DROP TABLE IF EXISTS "_news_v" CASCADE;

DROP TABLE IF EXISTS "_news_vstoone" CASCADE;

DROP TABLE IF EXISTS "_news_v_rels" CASCADE;

DO $$ BEGIN
    ALTER TABLE "media" DROP CONSTRAINT "media_project_id_projects_id_fk";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_share_fk";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_projects_fk";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_pages_fk";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_globalheader_fk";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_globalfooter_fk";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_buildings_fk";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_floors_fk";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_flats_fk";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_project_global_settings_fk";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_flat_detail_page_fk";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_news_detail_page_fk";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_documents_fk";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_news_fk";
EXCEPTION
    WHEN undefined_object THEN null;
END $$;

DROP INDEX IF EXISTS "media_project_idx";

DROP INDEX IF EXISTS "payload_locked_documents_rels_share_id_idx";

DROP INDEX IF EXISTS "payload_locked_documents_rels_projects_id_idx";

DROP INDEX IF EXISTS "payload_locked_documents_rels_pages_id_idx";

DROP INDEX IF EXISTS "payload_locked_documents_rels_globalheader_id_idx";

DROP INDEX IF EXISTS "payload_locked_documents_rels_globalfooter_id_idx";

DROP INDEX IF EXISTS "payload_locked_documents_rels_buildings_id_idx";

DROP INDEX IF EXISTS "payload_locked_documents_rels_floors_id_idx";

DROP INDEX IF EXISTS "payload_locked_documents_rels_flats_id_idx";

DROP INDEX IF EXISTS "payload_locked_documents_rels_project_global_settings_id_idx";

DROP INDEX IF EXISTS "payload_locked_documents_rels_flDet_id_idx";

DROP INDEX IF EXISTS "payload_locked_documents_rels_newsDet_id_idx";

DROP INDEX IF EXISTS "payload_locked_documents_rels_documents_id_idx";

DROP INDEX IF EXISTS "payload_locked_documents_rels_news_id_idx";

DO $$ BEGIN
    ALTER TABLE "roles_permissions_investments" ADD CONSTRAINT "roles_permissions_investments_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

CREATE INDEX IF NOT EXISTS "roles_permissions_investments_order_idx" ON "roles_permissions_investments" USING btree ("order");

CREATE INDEX IF NOT EXISTS "roles_permissions_investments_parent_idx" ON "roles_permissions_investments" USING btree ("parent_id");

DO $$ BEGIN
    ALTER TABLE "media" DROP COLUMN IF EXISTS "project_id";
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "share_id";
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "projects_id";
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "pages_id";
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "globalheader_id";
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "globalfooter_id";
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "buildings_id";
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "floors_id";
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "flats_id";
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "project_global_settings_id";
EXCEPTION
    WHEN undefined_table THEN null;
END $$;

DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "flDet_id";
EXCEPTION
    WHEN undefined_table THEN null;
END $$;
`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Down migration not needed - this is part of a larger migration split
}
