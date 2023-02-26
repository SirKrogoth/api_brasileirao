import Sequelize, { Model, Optional } from 'sequelize';
import { iClubes } from './iClubes';
import database from '../database/data';

interface iClubesCreationAttributes extends Optional<iClubes, "id">{}

export interface iClubesModel extends Model<iClubes, iClubesCreationAttributes>, iClubes {}

export default database.define<iClubesModel>('clubes', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING(2),
        allowNull: false
    },
    estadio: {
        type: Sequelize.STRING(50),
        allowNull: true
    }
});