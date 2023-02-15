import { Request, Response } from 'express';
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

        if(rodadas === null || rodadas.length == 0) return res.status(400).end();
        else res.json(rodadas);

    } catch (error) {
        console.log(`Erro no controller datasJogosController/getAllRodadas. Message: ${error}`);
    }
}

export default {
    getConnectTest,
    getDatasJogos,
    getJogosDaRodada
}