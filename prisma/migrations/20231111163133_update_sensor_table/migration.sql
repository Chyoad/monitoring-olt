/*
  Warnings:

  - Added the required column `kelembapan` to the `sensors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `sensors` ADD COLUMN `kelembapan` DOUBLE NOT NULL;
