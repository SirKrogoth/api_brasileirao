import { DestroyOptions } from 'sequelize';
import datasJogosModel, { iDatasJogosModel } from './datasJogosModel';
import { iDatasJogos } from './iDatasJogos';

function findAll(){
    return datasJogosModel.findAll<iDatasJogosModel>();
}

function findJogosDaRodada(rodada: number){
    return datasJogosModel.findAll<iDatasJogosModel>({
        where: {
            rodada: rodada
        }
    });
}

export default {
    findAll,
    findJogosDaRodada
}