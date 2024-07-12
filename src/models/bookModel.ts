import { DataTypes, Sequelize } from 'sequelize';

export let dbBook;

export function defineBook(sequelize: Sequelize) {
    dbBook = sequelize.define(
        'Book',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            nrCopies: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        },
    );
}
