import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Book {
        id: ID!
        title: String!
        author: String!
        isbn: String!
        nrCopies: Int!
    }
    
    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        token: String
    }
    
    type BorrowedBook {
        title: String
        dueDate: String
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
        getUsers: [User!]!
        getUnreturnedBooksByUserId(userId: Int!): [BorrowedBook!]!
    }
    
    type Mutation {
        createBook(title: String!, author: String!, isbn: String!, nrCopies: Int!): Book!
    }
`);

export default schema;
