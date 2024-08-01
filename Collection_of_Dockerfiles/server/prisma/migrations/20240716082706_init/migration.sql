-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `book`(`bookid`) ON DELETE RESTRICT ON UPDATE CASCADE;
