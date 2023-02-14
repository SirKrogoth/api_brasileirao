import { Request, Response } from 'express';
import clubesRepository from '../models/clubesRepository';


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

export default {
    getConnectTest,
    getClubes
}