import sequelize, { DestroyOptions, QueryTypes } from 'sequelize';
import datasJogosModel, { iDatasJogosModel } from './datasJogosModel';
import { iDatasJogos } from './iDatasJogos';
import { Container } from 'winston';

function findAll(){
    return datasJogosModel.findAll<iDatasJogosModel>();
}

function findJogosDaRodada(rodada: number){

    return datasJogosModel.sequelize?.query(`SELECT dj.id, dj.data, dj.hora, dj.rodada, dj.turno, (SELECT c.nome FROM clubes c WHERE dj.timeCasa = c.id) as timeCasa, (SELECT c.nome FROM clubes c WHERE dj.timeFora = c.id) as timeFora, dj.golsTimeCasa, dj.golsTimeFora FROM datasJogos as dj WHERE dj.rodada = ${rodada}`,
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

function findLatestResultsForClub(idClube: number){
    return datasJogosModel.sequelize?.query(`SELECT dj.rodada as Rodada,
    dj.turno as Turno,
    dj.data as DataJogo,
    dj.hora as Horario,
    (SELECT c.nome FROM clubes c WHERE dj.timeCasa = c.id) as timeCasa,
    (SELECT c.nome FROM clubes c WHERE dj.timeFora = c.id) as timeFora,
    (SELECT dj.golsTimeCasa FROM clubes c WHERE dj.timeCasa = c.id) as golsTimeCasa,
    (SELECT dj.golsTimeFora FROM clubes c WHERE dj.timeFora = c.id) as golsTimeFora
    FROM datasJogos as dj
 WHERE
     (dj.timeCasa = ${idClube}
     OR
     dj.timeFora = ${idClube})
     AND
     golsTimeCasa IS NOT NULL
ORDER BY 
     dj.rodada 
ASC`,
     {
        type: QueryTypes.SELECT
     });
}

function addNewClubGame(iDataJogos: iDatasJogos){
    return datasJogosModel.create(iDataJogos);
}

async function setScoreGame(scoreGame: iDatasJogos){

    if(scoreGame.golsTimeCasa === null || scoreGame.golsTimeFora === null) return null;

    const originalDataJogos = await datasJogosModel.findOne({
        where: {
            id: scoreGame.id
        }
    });

    if(originalDataJogos === null) return null;   

    originalDataJogos.golsTimeCasa = scoreGame.golsTimeCasa;
    originalDataJogos.golsTimeFora = scoreGame.golsTimeFora;

    const result = await originalDataJogos.save();
    scoreGame.id = result.id;

    return scoreGame;
}

export default {
    findAll,
    findJogosDaRodada,
    findJogosDoClube,
    addNewClubGame,
    setScoreGame,
    findLatestResultsForClub
}