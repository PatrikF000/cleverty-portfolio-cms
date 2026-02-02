import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "portfolios" DROP CONSTRAINT "portfolios_user_id_users_id_fk";
  
  DO $$ BEGIN
   ALTER TABLE "portfolios" ADD CONSTRAINT "portfolios_user_id_fund_administrators_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."fund_administrators"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "portfolios" DROP CONSTRAINT "portfolios_user_id_fund_administrators_id_fk";
  
  DO $$ BEGIN
   ALTER TABLE "portfolios" ADD CONSTRAINT "portfolios_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  `)
}
