/*
  Warnings:

  - You are about to drop the column `avilabeCopies` on the `books` table. All the data in the column will be lost.
  - Added the required column `avilabelCopies` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "avilabeCopies",
ADD COLUMN     "avilabelCopies" INTEGER NOT NULL;
