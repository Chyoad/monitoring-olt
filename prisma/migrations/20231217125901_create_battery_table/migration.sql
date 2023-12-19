-- CreateTable
CREATE TABLE `spec_batterys` (
    `specBatteryId` VARCHAR(191) NOT NULL,
    `deviceId` VARCHAR(191) NOT NULL,
    `batteryBrand` VARCHAR(255) NOT NULL,
    `voltageNominal` DOUBLE NOT NULL,
    `voltageTop` DOUBLE NOT NULL,
    `voltageLow` DOUBLE NOT NULL,
    `batteryCapacity` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`specBatteryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `batterys` (
    `batteryId` VARCHAR(191) NOT NULL,
    `specBatteryId` VARCHAR(191) NOT NULL,
    `capacityNow` DOUBLE NOT NULL,
    `persentaseNow` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`batteryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `spec_batterys` ADD CONSTRAINT `spec_batterys_deviceId_fkey` FOREIGN KEY (`deviceId`) REFERENCES `devices`(`deviceId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `batterys` ADD CONSTRAINT `batterys_specBatteryId_fkey` FOREIGN KEY (`specBatteryId`) REFERENCES `spec_batterys`(`specBatteryId`) ON DELETE RESTRICT ON UPDATE CASCADE;
