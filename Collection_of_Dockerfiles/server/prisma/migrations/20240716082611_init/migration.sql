/*
  Warnings:

  - The primary key for the `order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `order` table. All the data in the column will be lost.
  - Added the required column `orderid` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `order_bookId_fkey` ON `order`;

-- DropIndex
DROP INDEX `order_userId_fkey` ON `order`;

-- AlterTable
ALTER TABLE `order` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `orderid` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`orderid`);
