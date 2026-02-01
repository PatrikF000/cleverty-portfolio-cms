import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "floors" ADD COLUMN "floor_plan_picker_chunks_id" integer;
  DO $$ BEGIN
   ALTER TABLE "floors" ADD CONSTRAINT "floors_floor_plan_picker_chunks_id_media_id_fk" FOREIGN KEY ("floor_plan_picker_chunks_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "floors_floor_plan_picker_floor_plan_picker_chunks_idx" ON "floors" USING btree ("floor_plan_picker_chunks_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "floors" DROP CONSTRAINT "floors_floor_plan_picker_chunks_id_media_id_fk";
  
  DROP INDEX IF EXISTS "floors_floor_plan_picker_floor_plan_picker_chunks_idx";
  ALTER TABLE "floors" DROP COLUMN IF EXISTS "floor_plan_picker_chunks_id";`)
}
