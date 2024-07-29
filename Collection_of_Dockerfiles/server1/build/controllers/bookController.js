"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletebook = exports.updatebook = exports.createbook = exports.getbookById = exports.getbooks = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getbooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield prisma.book.findMany();
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ msg: error.message });
    }
});
exports.getbooks = getbooks;
const getbookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield prisma.book.findUnique({
            where: {
                bookid: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    }
    catch (error) {
        res.status(404).json({ msg: error.message });
    }
});
exports.getbookById = getbookById;
const createbook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, price, isbn_10, isbn_13, sale_price, fileurl, thumbnail, status, publication_date, author, publisher } = req.body;
    try {
        const book = yield prisma.book.create({
            data: {
                title: title,
                price: price,
                isbn_10: isbn_10,
                isbn_13: isbn_13,
                sale_price: sale_price,
                fileurl: fileurl,
                thumbnail: thumbnail,
                status: status,
                publication_date: publication_date,
                author: author,
                publisher: publisher
            }
        });
        res.status(201).json(book);
    }
    catch (error) {
        res.status(400).json({ msg: error.message });
    }
});
exports.createbook = createbook;
const updatebook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, price } = req.body;
    try {
        const book = yield prisma.book.update({
            where: {
                bookid: Number(req.params.id)
            },
            data: {
                title: title,
                price: price
            }
        });
        res.status(200).json(book);
    }
    catch (error) {
        res.status(400).json({ msg: error.message });
    }
});
exports.updatebook = updatebook;
const deletebook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield prisma.book.delete({
            where: {
                bookid: Number(req.params.id)
            }
        });
        res.status(200).json(book);
    }
    catch (error) {
        res.status(400).json({ msg: error.message });
    }
});
exports.deletebook = deletebook;
