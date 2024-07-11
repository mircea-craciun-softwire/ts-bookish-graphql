import express from 'express';
import schema from './schemas/schema';
import resolvers from './resolvers/resolvers';
import { graphqlHTTP } from 'express-graphql';
import { connectToSQLServer } from './serverConnection';

const server = express();

const PORT = 3000;

server.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: resolvers,
        graphiql: true,
    }),
);

server.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
});

connectToSQLServer();
