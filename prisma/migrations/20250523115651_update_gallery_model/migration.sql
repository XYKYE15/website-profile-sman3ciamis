/*
  Warnings:

  - You are about to drop the column `description` on the `Gallery` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Gallery` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Gallery" DROP COLUMN "description",
DROP COLUMN "title";
