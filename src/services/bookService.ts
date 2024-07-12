import { ApiBook, dbBook } from '../models/bookModel';
import { dbUser } from '../models/userModel';
import { Model, QueryTypes, where } from 'sequelize';
import { sequelize } from '../app';
import { BorrowingHistory } from '../models/borrowingHistory';

export const getAllBooks = async (): Promise<Model[]> => {
    return await dbBook.findAll();
};

export const createNewBook = async (bookData: ApiBook): Promise<ApiBook> => {
    return await dbBook.create(bookData);
};

export const getUsersUnreturnedBooks = async (userId: number) => {
    console.log('Try getting the books');
    try {
        const result = await BorrowingHistory.findAll({
            include: {
                model: dbBook,
            },
            where: {
                userId: userId,
            },
        });

    } catch (error: any) {
        console.error(error);
    }

    return [];
};

export const getAllUsers = async (): Promise<Model[]> => {
    return await dbUser.findAll();
};
