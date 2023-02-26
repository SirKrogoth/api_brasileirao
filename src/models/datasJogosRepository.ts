import sequelize, { DestroyOptions, QueryTypes } from 'sequelize';
import datasJogosModel, { iDatasJogosModel } from './datasJogosModel';
import { iDatasJogos } from './iDatasJogos';

function findAll(){
    return datasJogosModel.findAll<iDatasJogosModel>();
}

function findJogosDaRodada(rodada: number){

    return datasJogosModel.sequelize?.query(`SELECT dj.data, dj.hora, dj.rodada, dj.turno, (SELECT c.nome FROM clubes c WHERE dj.timeCasa = c.id) as timeCasa, (SELECT c.nome FROM clubes c WHERE dj.timeFora = c.id) as timeFora, dj.golsTimeCasa, dj.golsTimeFora FROM datasJogos as dj WHERE dj.rodada = ${rodada}`,
    {
        type: QueryTypes.SELECT
    });
}

function findJogosDoClube(idClube: number){
    return datasJogosModel.sequelize?.query(`SELECT dj.rodada as Rodada,
    dj.turno as Turno,
    dj.data as DataJogo,
    dj.hora as Horario,
    (SELECT c.nome FROM clubes c WHERE dj.timeCasa = c.id) as timeCasa,
    (SELECT c.nome FROM clubes c WHERE dj.timeFora = c.id) as timeFora
    FROM datasJogos as dj
 WHERE
     (dj.timeCasa = ${idClube}
     OR
     dj.timeFora = ${idClube})
ORDER BY 
     dj.rodada 
ASC`,
     {
        type: QueryTypes.SELECT
     });
}


export default {
    findAll,
    findJogosDaRodada,
    findJogosDoClube
}