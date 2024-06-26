import { buildSchema } from 'graphql';

// TODO: implement functionality
const schema = buildSchema(`
    type Book {
        id: ID!
    }

    type Query {
        status: Int
        getBooks: [Book!]!
    }
`);

export default schema;
