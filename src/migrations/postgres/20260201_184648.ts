import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Convert column to text
  await db.execute(sql`
    ALTER TABLE "public"."investments" ALTER COLUMN "category" SET DATA TYPE text;
  `)
  
  // Update data: map old enum values to new ones
  await db.execute(sql`
    UPDATE "public"."investments" 
    SET "category" = CASE 
      WHEN "category" = 'A+' THEN 'A_PLUS'
      WHEN "category" = 'B+' THEN 'B_PLUS'
      ELSE "category"
    END;
  `)
  
  // Drop old enum and create new one
  await db.execute(sql`
    DROP TYPE IF EXISTS "public"."enum_investments_category";
    CREATE TYPE "public"."enum_investments_category" AS ENUM('A_PLUS', 'A', 'B_PLUS', 'B', 'C');
  `)
  
  // Convert column back to enum type
  await db.execute(sql`
    ALTER TABLE "public"."investments" 
    ALTER COLUMN "category" SET DATA TYPE "public"."enum_investments_category" 
    USING "category"::"public"."enum_investments_category";
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Convert column to text
  await db.execute(sql`
    ALTER TABLE "public"."investments" ALTER COLUMN "category" SET DATA TYPE text;
  `)
  
  // Update data: map new enum values back to old ones
  await db.execute(sql`
    UPDATE "public"."investments" 
    SET "category" = CASE 
      WHEN "category" = 'A_PLUS' THEN 'A+'
      WHEN "category" = 'B_PLUS' THEN 'B+'
      ELSE "category"
    END;
  `)
  
  // Drop new enum and recreate old one
  await db.execute(sql`
    DROP TYPE IF EXISTS "public"."enum_investments_category";
    CREATE TYPE "public"."enum_investments_category" AS ENUM('A+', 'A', 'B+', 'B', 'C');
  `)
  
  // Convert column back to enum type
  await db.execute(sql`
    ALTER TABLE "public"."investments" 
    ALTER COLUMN "category" SET DATA TYPE "public"."enum_investments_category" 
    USING "category"::"public"."enum_investments_category";
  `)
}
