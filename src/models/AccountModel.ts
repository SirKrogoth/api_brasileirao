import Sequelize, { Model, Optional } from "sequelize";
import { iAccount } from "./iAccount";
import database from '../database/data';
import { allow } from "joi";

interface iAccountCreationAttributes extends Optional<iAccount, "id">{}

export interface iAccountModel extends Model<iAccount, iAccountCreationAttributes>, iAccount {}

export default database.define<iAccountModel>('accounts', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    status: {
        type: Sequelize.SMALLINT.UNSIGNED,
        defaultValue: 100,
        allowNull: true
    },
    clubeFavorito: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
        references: {
            model: 'clubes',
            key: 'id'
        }
    }
});