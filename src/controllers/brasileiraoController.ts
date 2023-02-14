import { Request, Response } from 'express';


function getConnectTest(req: Request, res: Response, next: any){
    //res.status(200).end();
    res.json({
        "conexao": "OK"
    });
}

export default {
    getConnectTest
}