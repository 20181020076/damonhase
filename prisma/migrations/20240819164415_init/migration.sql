/*
  Warnings:

  - The values [ALL,FAVORITES] on the enum `Category` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `colors` on the `product` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Category_new" AS ENUM ('BUNNY', 'DEMON', 'CAT', 'BEAR');
ALTER TABLE "product" ALTER COLUMN "categories" TYPE "Category_new"[] USING ("categories"::text::"Category_new"[]);
ALTER TYPE "Category" RENAME TO "Category_old";
ALTER TYPE "Category_new" RENAME TO "Category";
DROP TYPE "Category_old";
COMMIT;

-- AlterTable
ALTER TABLE "product" DROP COLUMN "colors",
ADD COLUMN     "primaryColors" TEXT[],
ADD COLUMN     "secondaryColors" TEXT[] DEFAULT ARRAY[]::TEXT[];
