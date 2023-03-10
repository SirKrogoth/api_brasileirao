import { Request, Response } from 'express';
import clubesRepository from '../models/clubesRepository';
import { StatusCodes } from 'http-status-codes';

function getConnectTest(req: Request, res: Response, next: any){
    //res.status(200).end();
    res.json({
        "conexao": "OK"
    });
}

async function getClubes(req: Request, res: Response, next: any){
    try {
        const clubes = await clubesRepository.findAll();

        res.json(clubes);

    } catch (error) {
        console.log('Erro no Controller clubesController, function getClubes.\n Message: ' + error);
    }
}

async function getClube(req: Request, res: Response, next: any){
    try {
        const idClube = parseInt(req.params.idClube);

        const clube = await clubesRepository.findOne(idClube);

        res.status(200).json(clube);
    } catch (error) {
        console.log('Erro no Controller clubesController, function getClube.\n Message: ' + error);
    }
}

export default {
    getConnectTest,
    getClubes,
    getClube
}