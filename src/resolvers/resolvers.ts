import {
    createNewBook,
    getAllBooks,
    getAllUsers,
    getUsersUnreturnedBooks,
} from '../services/bookService';
import { ApiBook } from '../models/bookModel';

const resolvers = {
    status: () => 200,
    getBooks: async () => {
        try {
            return await getAllBooks();
        } catch (error) {
            throw new Error(`Failed to fetch books: ${error.message}`);
        }
    },
    getUsers: async () => {
        try {
            return await getAllUsers();
        } catch (error) {
            throw new Error(`Failed to fetch users: ${error.message}`);
        }
    },
    getUnreturnedBooksByUserId: async (user: { userId: number }) => {
        try {
            return await getUsersUnreturnedBooks(user.userId);
        } catch (error) {
            throw new Error(
                `Failed to fetch unreturned books: ${error.message}`,
            );
        }
    },
    createBook: async (bookData: ApiBook) => {
        try {
            return await createNewBook(bookData);
        } catch (error) {
            throw new Error(`Failed to create book: ${error.message}`);
        }
    },
};

export default resolvers;
