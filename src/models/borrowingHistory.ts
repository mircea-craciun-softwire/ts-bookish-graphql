import { DataTypes, Sequelize } from 'sequelize';
import { dbBook } from './bookModel';
import { dbUser } from './userModel';

export let BorrowingHistory;

export function defineHistory(sequelize: Sequelize) {
    BorrowingHistory = sequelize.define(
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
            //freezeTableName: true,
            timestamps: false,
            //tableName: 'BorrowingHistory',
        },
    );

    dbBook.hasMany(BorrowingHistory, { foreignKey: 'bookId' });
    BorrowingHistory.belongsTo(dbBook, { foreignKey: 'bookId' });

    dbUser.hasMany(BorrowingHistory, { foreignKey: 'userId' });
    BorrowingHistory.belongsTo(dbUser, { foreignKey: 'userId' });
}
