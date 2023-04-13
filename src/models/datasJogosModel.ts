import Sequelize, { Model, Optional } from 'sequelize';
import { iDatasJogos } from './iDatasJogos';
import dataBase from '../database/data';
import clubesModel from './clubesModel';

interface iDatasJogosCreationAttributes extends Optional<iDatasJogos, "id">{}

export interface iDatasJogosModel extends Model<iDatasJogos, iDatasJogosCreationAttributes>, iDatasJogos {}

const datasJogos =  dataBase.define<iDatasJogosModel>('datasJogos', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false
    },
    hora: {
        type: Sequelize.TIME,
        allowNull: false
    },
    rodada: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    turno: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    timeCasa: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    timeFora: {
        type: Sequelize.INTEGER,
        allowNull:false
    },
    golsTimeCasa: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    golsTimeFora: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

datasJogos.belongsTo(clubesModel, {
    constraints: true,
    foreignKey: 'timeCasa'
});

datasJogos.belongsTo(clubesModel, {
    constraints: true,
    foreignKey: 'timeFora'
});

export default datasJogos;