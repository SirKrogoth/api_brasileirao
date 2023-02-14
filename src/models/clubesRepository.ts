import { DestroyOptions } from 'sequelize';
import clubesModel, { iClubesModel } from './clubesModel';
import { iClubes } from './iClubes';

function findAll(){
    return clubesModel.findAll<iClubesModel>();
}

export default {
    findAll
}