import {Request, response, Response} from 'express';
import { iAccount } from '../models/iAccount';
import statusCode from 'http-status-codes';
import auth from '../auth';
import repository from '../models/AccountRepository';

async function addAccount(req: Request, res: Response, next: any){
    try {
        const newAccount = req.body as iAccount;
        newAccount.password = auth.hashPassword(newAccount.password);
        const result = await repository.add(newAccount);
        newAccount.password = '';
        newAccount.id = result.id;
        res.status(statusCode.OK).json(newAccount);        
    } catch (error) {
        console.log(error);
        res.status(statusCode.BAD_REQUEST).end();
    }
}

async function loginAccount(req: Request, res: Response, next: any){
    try {
        const loginParams = req.body as iAccount;
        const account = await repository.findByEmail(loginParams.email);

        if(account !== null){
            const isValid = auth.comparePassword(loginParams.password, account.password);

            if(isValid)
            {
                return res.status(statusCode.OK).json({
                    "auth": "Autenticaded!"
                });
            }     
            
            return res.status(statusCode.UNAUTHORIZED).end();
        }
    } catch (error) {
        console.log(error);
        res.status(statusCode.BAD_REQUEST).end();
    }
}

export default {
    addAccount,
    loginAccount
}