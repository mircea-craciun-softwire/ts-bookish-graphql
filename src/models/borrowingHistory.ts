import { DataTypes, Sequelize } from 'sequelize';
import { dbBook } from './bookModel';
import { dbUser } from './userModel';

export let dbBorrowingHistory;

export function defineHistory(sequelize: Sequelize) {
    dbBorrowingHistory = sequelize.define(
        'BorrowingHistory',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            bookId: {
                type: DataTypes.INTEGER,
                references: {
                    model: dbBook,
                    key: 'id',
                },
            },
            userId: {
                type: DataTypes.INTEGER,
                references: {
                    model: dbUser,
                    key: 'id',
                },
            },
            dueDate: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            returnedDate: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
        },
        {
            freezeTableName: true,
            timestamps: true,
        },
    );
}
