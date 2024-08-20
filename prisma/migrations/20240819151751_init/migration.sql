-- AlterTable
ALTER TABLE "product" ALTER COLUMN "categories" SET DEFAULT ARRAY['ALL']::"Category"[];
