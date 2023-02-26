import { DestroyOptions } from 'sequelize';
import clubesModel, { iClubesModel } from './clubesModel';
import { iClubes } from './iClubes';

function findAll(){
    return clubesModel.findAll<iClubesModel>();
}

function findOne(idClube: number){
    return clubesModel.findOne<iClubesModel>({
        where: {
            'id': idClube
        },
    });
}

export default {
    findAll,
    findOne
}