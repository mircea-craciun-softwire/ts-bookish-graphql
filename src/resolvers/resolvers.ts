import { getAllBooks, getAllUsers } from '../services/bookService';

// TODO: implement functionality
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
};

export default resolvers;
