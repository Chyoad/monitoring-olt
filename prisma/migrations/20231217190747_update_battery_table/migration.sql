/*
  Warnings:

  - You are about to drop the column `persentaseNow` on the `batterys` table. All the data in the column will be lost.
  - Added the required column `persentageNow` to the `batterys` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `batterys` DROP COLUMN `persentaseNow`,
    ADD COLUMN `persentageNow` DOUBLE NOT NULL;
