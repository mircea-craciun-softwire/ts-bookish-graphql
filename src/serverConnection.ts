import { Sequelize } from 'sequelize';

const dbPassword = 'AlexandriaTest!$$1';
const dbUsername = 'MirMeh';

export function initializeSequelize(): Sequelize {
    return new Sequelize('Alexandria', dbUsername, dbPassword, {
        dialect: 'mssql',
        host: 'localhost',
        port: 1433,
    });
}
