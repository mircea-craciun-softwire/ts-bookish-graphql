import { buildSchema } from 'graphql';

// TODO: implement functionality
const schema = buildSchema(`
    type Book {
        id: ID!
        title: String!
        author: String!
        nrCopies: Int!
    }
    
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        token: String
    }
    
    type BorrowingHistory {
        id: ID!
        book: Book!
        user: User!
        dueDate: String!
        returnedDate: String
    }

    type Query {
        status: Int
        getBooks: [Book!]!
    }
`);

export default schema;
