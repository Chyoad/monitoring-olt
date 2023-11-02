/*
  Warnings:

  - You are about to drop the column `coordinate` on the `devices` table. All the data in the column will be lost.
  - Added the required column `latitude` to the `devices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `devices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `devices` DROP COLUMN `coordinate`,
    ADD COLUMN `latitude` VARCHAR(255) NOT NULL,
    ADD COLUMN `longitude` VARCHAR(255) NOT NULL;
