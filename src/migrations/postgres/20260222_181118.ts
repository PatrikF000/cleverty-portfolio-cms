import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_roles_permissions_documents" AS ENUM('create', 'read', 'update', 'delete');
  CREATE TABLE IF NOT EXISTS "roles_permissions_documents" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_roles_permissions_documents",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "roles_permissions_documents" ADD CONSTRAINT "roles_permissions_documents_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "roles_permissions_documents_order_idx" ON "roles_permissions_documents" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "roles_permissions_documents_parent_idx" ON "roles_permissions_documents" USING btree ("parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "roles_permissions_documents" CASCADE;
  DROP TYPE "public"."enum_roles_permissions_documents";`)
}
