import { Request, Response } from 'express';
import clubesRepository from '../models/clubesRepository';
import { StatusCodes } from 'http-status-codes';
import { iClubes } from '../models/iClubes';

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

async function getClubByName(req: Request, res: Response, next: any){
    try {
        const nomeClube = req.params['nomeClube'];

        const clubes = await clubesRepository.findByName(nomeClube);

        res.status(StatusCodes.OK).json(clubes);
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).end();
        console.log('Erro no Controller clubesController, function getClubByName.\n Message: ' + error);
    }
}

async function addClub(req: Request, res: Response, next: any){
    try {
        const club = req.body as iClubes;

        const newClub = await clubesRepository.addClub(club);

        console.log(newClub);

        if(newClub === null){
            res.status(409).end();
        } else {
            res.status(201).json(newClub);
        }
    } catch (error) {
        res.status(400).end();
    }
}

export default {
    getConnectTest,
    getClubes,
    getClube,
    getClubByName,
    addClub
}