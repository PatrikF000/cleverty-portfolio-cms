import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_roles_permissions_portfolios" ADD VALUE 'update';
  ALTER TYPE "public"."enum_roles_permissions_portfolios" ADD VALUE 'delete';
  ALTER TYPE "public"."enum_roles_permissions_fund_administrators" ADD VALUE 'update';
  ALTER TYPE "public"."enum_roles_permissions_fund_administrators" ADD VALUE 'delete';
  ALTER TYPE "public"."enum_roles_permissions_investment_companies" ADD VALUE 'update';
  ALTER TYPE "public"."enum_roles_permissions_investment_companies" ADD VALUE 'delete';
  ALTER TYPE "public"."enum_roles_permissions_investments" ADD VALUE 'update';
  ALTER TYPE "public"."enum_roles_permissions_investments" ADD VALUE 'delete';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "public"."roles_permissions_portfolios" ALTER COLUMN "value" SET DATA TYPE text;
  DROP TYPE "public"."enum_roles_permissions_portfolios";
  CREATE TYPE "public"."enum_roles_permissions_portfolios" AS ENUM('create', 'read');
  ALTER TABLE "public"."roles_permissions_portfolios" ALTER COLUMN "value" SET DATA TYPE "public"."enum_roles_permissions_portfolios" USING "value"::"public"."enum_roles_permissions_portfolios";
  ALTER TABLE "public"."roles_permissions_fund_administrators" ALTER COLUMN "value" SET DATA TYPE text;
  DROP TYPE "public"."enum_roles_permissions_fund_administrators";
  CREATE TYPE "public"."enum_roles_permissions_fund_administrators" AS ENUM('create', 'read');
  ALTER TABLE "public"."roles_permissions_fund_administrators" ALTER COLUMN "value" SET DATA TYPE "public"."enum_roles_permissions_fund_administrators" USING "value"::"public"."enum_roles_permissions_fund_administrators";
  ALTER TABLE "public"."roles_permissions_investment_companies" ALTER COLUMN "value" SET DATA TYPE text;
  DROP TYPE "public"."enum_roles_permissions_investment_companies";
  CREATE TYPE "public"."enum_roles_permissions_investment_companies" AS ENUM('create', 'read');
  ALTER TABLE "public"."roles_permissions_investment_companies" ALTER COLUMN "value" SET DATA TYPE "public"."enum_roles_permissions_investment_companies" USING "value"::"public"."enum_roles_permissions_investment_companies";
  ALTER TABLE "public"."roles_permissions_investments" ALTER COLUMN "value" SET DATA TYPE text;
  DROP TYPE "public"."enum_roles_permissions_investments";
  CREATE TYPE "public"."enum_roles_permissions_investments" AS ENUM('create', 'read');
  ALTER TABLE "public"."roles_permissions_investments" ALTER COLUMN "value" SET DATA TYPE "public"."enum_roles_permissions_investments" USING "value"::"public"."enum_roles_permissions_investments";`)
}
