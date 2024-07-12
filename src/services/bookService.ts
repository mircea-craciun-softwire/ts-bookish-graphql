import { dbBook } from '../models/bookModel';
import { dbUser } from '../models/userModel';

export const getAllBooks = async (): Promise<any[]> => {
    const books = await dbBook.findAll();
    return books;
};

export const getAllUsers = async (): Promise<any[]> => {
    const users = await dbUser.findAll();
    return users;
};

