import { Request, Response } from 'express';
import sequelize from '../database/data';
import datasJogosRepository from '../models/datasJogosRepository';

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
        console.log(`Erro no Controller clubesController, function getJogosClube.\n Message: ${error}.`);
    }
}

export default {
    getConnectTest,
    getDatasJogos,
    getJogosDaRodada,
    getJogosClube
}