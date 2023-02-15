import sequelize, { DestroyOptions, QueryTypes } from 'sequelize';
import datasJogosModel, { iDatasJogosModel } from './datasJogosModel';
import { iDatasJogos } from './iDatasJogos';

function findAll(){
    return datasJogosModel.findAll<iDatasJogosModel>();
}

function findJogosDaRodada(rodada: number){

    return datasJogosModel.sequelize?.query(`SELECT dj.data, dj.hora, dj.rodada, dj.turno, (SELECT c.nome FROM clubes c WHERE dj.timeCasa = c.id) as timeCasa, (SELECT c.nome FROM clubes c WHERE dj.timeFora = c.id) as timeFora FROM datasJogos as dj WHERE dj.rodada = ${rodada}`,
    {
        type: QueryTypes.SELECT
    });
}


export default {
    findAll,
    findJogosDaRodada
}