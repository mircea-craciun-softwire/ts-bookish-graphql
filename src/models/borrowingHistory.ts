import { Book } from './bookModel';
import { User } from './userModel';

export interface BorrowingHistory {
    id: number;
    book: Book;
    user: User;
    dueDate: string;
    returnedDate: string;
}