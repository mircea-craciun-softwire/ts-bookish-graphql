import { buildSchema } from 'graphql';

// TODO: implement functionality
const schema = buildSchema(`
    type Book {
        id: ID!
    }

    type Query {
        books: [Book!]!
    }
`);

export default schema;
