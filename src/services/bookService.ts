import { Request } from 'tedious';
import { connection } from '../app';
import { Book } from '../models/bookModel';

export const getAllBooks = async (): Promise<Book[]> => {
    const books: Book[] = [];
    const request = new Request('SELECT * FROM Books', (err) => {
        if (err) {
            throw err;
        }
        console.log('DONE!');
        connection.close();
    });
    return new Promise<Book[]>((resolve) => {
        request.on('row', (columns) => {
            const book: Book = { id: 0, title: '', author: '', nrCopies: 0 };
            columns.forEach((column) => {
                if (column.value !== null) {
                    book[column.metadata.colName] = column.value;
                }
            });
            console.log(book);

            books.push(book);
        });

        request.on('doneInProc', () => {
            resolve(books);
        });

        connection.execSql(request);
    });
};
