import express from 'express';
import schema from './schemas/schema';
import resolvers from './resolvers/resolvers';
import { graphqlHTTP } from 'express-graphql';

import { Request, Connection } from 'tedious';

const server = express();

const PORT = 3000;

const config: any = {
    server: '127.0.0.1',
    authentication: {
        type: 'ntlm',
        options: {
            domain: '',
            userName: 'MirMeh',
            password: '65urTVVx_Pn5NnB',
        },
    },
    options: {
        port: 1433,
        database: 'Alexandria',
        trustServerCertificate: true,
    },
};

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

const connection = new Connection(config);
connection.connect((err) => {
    if (err) {
        console.log('Connection Failed');
        throw err;
    }
    executeStatement();
});
function executeStatement() {
    const request = new Request('SELECT * FROM Books', (err, rowCount) => {
        if (err) {
            throw err;
        }
        console.log('DONE!');
        connection.close();
    });
    // Emits a 'DoneInProc' event when completed.
    request.on('row', (columns) => {
        columns.forEach((column) => {
            if (column.value === null) {
                console.log('NULL');
            } else {
                console.log(column.value);
            }
        });
    });
    // In SQL Server 2000 you may need: connection.execSqlBatch(request);
    connection.execSql(request);
}