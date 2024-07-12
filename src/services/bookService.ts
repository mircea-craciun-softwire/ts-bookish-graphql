import { apiBook, dbBook } from '../models/bookModel';
import { dbUser } from '../models/userModel';
import { Model } from 'sequelize';

export const getAllBooks = async (): Promise<Model[]> => {
    return await dbBook.findAll();
};

export const createNewBook = async (bookData: apiBook): Promise<apiBook> => {
    return await dbBook.create({
        title: bookData.title,
        author: bookData.author,
        isbn: bookData.isbn,
        nrCopies: bookData.nrCopies,
    });
};

export const getAllUsers = async (): Promise<Model[]> => {
    return await dbUser.findAll();
};
