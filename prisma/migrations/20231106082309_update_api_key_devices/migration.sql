/*
  Warnings:

  - Added the required column `apiKey` to the `devices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `devices` ADD COLUMN `apiKey` VARCHAR(255) NOT NULL;
