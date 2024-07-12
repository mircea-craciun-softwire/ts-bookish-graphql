import { apiBook, dbBook } from '../models/bookModel';
import { dbUser } from '../models/userModel';
import { Model, QueryTypes } from 'sequelize';
import { sequelize } from '../app';

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

export const getUsersUnreturnedBooks = async (userId: number) => {
    return await sequelize.query(
        'SELECT title, dueDate FROM Alexandria.dbo.Books join Alexandria.dbo.BorrowingHistory ON Books.id = BorrowingHistory.bookId WHERE returnedDate is null AND userId = ' +
            `${userId}`,
        {
            type: QueryTypes.SELECT,
        },
    );
};

export const getAllUsers = async (): Promise<Model[]> => {
    return await dbUser.findAll();
};
