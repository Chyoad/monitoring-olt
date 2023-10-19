-- CreateTable
CREATE TABLE `devices` (
    `deviceId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `devices_deviceId_key`(`deviceId`),
    UNIQUE INDEX `devices_name_key`(`name`),
    PRIMARY KEY (`deviceId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sensors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `deviceId` INTEGER NOT NULL,
    `tegangan` DOUBLE NOT NULL,
    `arus` DOUBLE NOT NULL,
    `daya` DOUBLE NOT NULL,
    `energi` DOUBLE NOT NULL,
    `suhu` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `sensors_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sensors` ADD CONSTRAINT `sensors_deviceId_fkey` FOREIGN KEY (`deviceId`) REFERENCES `devices`(`deviceId`) ON DELETE RESTRICT ON UPDATE CASCADE;
