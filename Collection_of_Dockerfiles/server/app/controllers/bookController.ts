import { Request, Response } from 'express'; 
import { RequestHandler } from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getbooks: RequestHandler = async (req: Request, res: Response) => {
    try {
        const response = await prisma.book.findMany();
        res.status(200).json(response);
    } catch (error: any) {
        res.status(500).json({ msg: error.message });
    }
}

export const getbookById: RequestHandler = async (req: Request, res: Response) => {
    try {
        const response = await prisma.book.findUnique({
            where: {
                bookid: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error: any) {
        res.status(404).json({ msg: error.message });
    }
}

export const createbook: RequestHandler = async (req: Request, res: Response) => {
    const { title, price, isbn_10, isbn_13, sale_price, fileurl, thumbnail, status, publication_date, author, publisher } = req.body;
    try {
        const book = await prisma.book.create({
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
    } catch (error: any) {
        res.status(400).json({ msg: error.message });
    }
}

export const updatebook: RequestHandler = async (req: Request, res: Response) => {
    const { title, price } = req.body;
    try {
        const book = await prisma.book.update({
            where: {
                bookid: Number(req.params.id)
            },
            data: {
                title: title,
                price: price
            }
        });
        res.status(200).json(book);
    } catch (error: any) {
        res.status(400).json({ msg: error.message });
    }
}

export const deletebook: RequestHandler = async (req: Request, res: Response) => {
    try {
        const book = await prisma.book.delete({
            where: {
                bookid: Number(req.params.id)
            }
        });
        res.status(200).json(book);
    } catch (error: any) {
        res.status(400).json({ msg: error.message });
    }
}