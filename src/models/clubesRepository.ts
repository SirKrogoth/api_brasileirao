import { QueryInterface, QueryTypes } from 'sequelize';
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

function findByName(clube: string){
    return clubesModel.sequelize?.query(`SELECT id, nome, estado FROM clubes WHERE nome LIKE '%${clube}%'`,
    {
        type: QueryTypes.SELECT
    });
}

function addClub(clube: iClubes){
    return clubesModel.create(clube);
}

export default {
    findAll,
    findOne,
    findByName,
    addClub
}