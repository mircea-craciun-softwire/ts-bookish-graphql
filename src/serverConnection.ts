import { Connection, Request } from 'tedious';

const config: any = {
    server: 'localhost',
    authentication: {
        type: 'default',
        options: {
            domain: 'ntlm',
            userName: 'MirMeh',
            password: 'AlexandriaTest!$$1',
        },
    },
    options: {
        port: 1433,
        database: 'Alexandria',
        trustServerCertificate: true,
    },
};

export function connectToSQLServer() {
    const connection = new Connection(config);
    connection.connect((err) => {
        if (err) {
            console.log('Connection Failed');
            throw err;
        }
    });
    return connection;
}
