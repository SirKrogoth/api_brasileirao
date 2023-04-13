import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import sequelize from '../database/data';
import datasJogosRepository from '../models/datasJogosRepository';
import { iDatasJogos } from 'src/models/iDatasJogos';
import datasJogos from 'src/models/datasJogosModel';

function getConnectTest(req: Request, res: Response, next: any){
    try {
        
        res.json({
            "conexao": "OK"
        });

    } catch (error) {
        console.log(`Erro no controller datasJogosController/getConnectTest. Message: ${error}`);
    }
}

async function getDatasJogos(req: Request, res: Response, next: any){
    try {
        
        const datas = await datasJogosRepository.findAll();

        res.json(datas);

    } catch (error) {
        console.log(`Erro no controller datasJogosController/getDatasJogos. Message: ${error}`);
    }
}

async function getJogosDaRodada(req: Request, res: Response, next: any){
    try {
        
        const numeroRodada = parseInt(req.params.rodada);

        if(!numeroRodada) return res.status(400).end();

        const rodadas = await datasJogosRepository.findJogosDaRodada(numeroRodada);

        if(rodadas === null) return res.status(400).end();
        else res.json(rodadas);

    } catch (error) {
        console.log(`Erro no controller datasJogosController/getAllRodadas. Message: ${error}`);
    }
}

async function getJogosClube(req: Request, res: Response, next: any){
    try {

        const idClube = parseInt(req.params.idClube);

        if(!idClube) return res.status(400).end();

        const jogosDoClube = await datasJogosRepository.findJogosDoClube(idClube);

        if(jogosDoClube === null) return res.status(400).end();
        else res.json(jogosDoClube);

    } catch (error) {
        console.log(`Erro no Controller datasJogosController, function getJogosClube.\n Message: ${error}.`);
    }
}

async function postAddJogosRodada(req: Request, res: Response, next: any){
    try {
        
        const iDatasJogos = req.body as iDatasJogos;

        if(!iDatasJogos) return res.status(StatusCodes.NOT_FOUND).end();

        const saved = await datasJogosRepository.addNewClubGame(iDatasJogos);

        if(saved) res.status(StatusCodes.OK).json(saved);

    } catch (error) {
        console.log(error);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

export default {
    getConnectTest,
    getDatasJogos,
    getJogosDaRodada,
    getJogosClube, 
    postAddJogosRodada
}