import express from 'express';
import schema from './schemas/schema';
import resolvers from './resolvers/resolvers';
import { graphqlHTTP } from 'express-graphql';
import { initializeSequelize } from './serverConnection';
import { Sequelize } from 'sequelize';
import { defineBook } from './models/bookModel';
import { defineUser } from './models/userModel';
import { defineHistory } from './models/borrowingHistory';

export const sequelize: Sequelize = initializeSequelize();

defineBook(sequelize);
defineUser(sequelize);
defineHistory(sequelize);

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
