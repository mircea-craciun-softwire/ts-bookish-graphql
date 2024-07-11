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
        executeStatement(connection);
    });
    return connection;
}

function executeStatement(connection: Connection) {
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
