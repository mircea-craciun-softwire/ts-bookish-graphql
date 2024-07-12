import {
    createNewBook,
    getAllBooks,
    getAllUsers,
} from '../services/bookService';
import { apiBook } from '../models/bookModel';

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
    createBook: async (bookData: apiBook) => {
        try {
            return await createNewBook(bookData);
        } catch (error) {
            throw new Error(`Failed to create book: ${error.message}`);
        }
    },
};

export default resolvers;
