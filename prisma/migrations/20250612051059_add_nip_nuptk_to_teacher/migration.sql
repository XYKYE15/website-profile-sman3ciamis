/*
  Warnings:

  - A unique constraint covering the columns `[nip]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nuptk]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "nip" TEXT,
ADD COLUMN     "nuptk" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_nip_key" ON "Teacher"("nip");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_nuptk_key" ON "Teacher"("nuptk");
