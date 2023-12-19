/*
  Warnings:

  - A unique constraint covering the columns `[deviceId]` on the table `spec_batterys` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `spec_batterys_deviceId_key` ON `spec_batterys`(`deviceId`);
