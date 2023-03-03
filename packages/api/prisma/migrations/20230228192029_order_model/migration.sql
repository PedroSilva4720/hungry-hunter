/*
  Warnings:

  - You are about to drop the column `recievedAt` on the `order` table. All the data in the column will be lost.
  - Added the required column `deliveredAt` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order" DROP COLUMN "recievedAt",
ADD COLUMN     "deliveredAt" TEXT NOT NULL;
