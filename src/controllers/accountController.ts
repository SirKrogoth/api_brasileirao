import {Request, response, Response} from 'express';
import { iAccount } from '../models/iAccount';
import statusCode from 'http-status-codes';
import hashPassword from '../authentication';
import repository from '../models/AccountRepository';
import authentication from '../authentication';
import authorization from '../authorization';


async function addAccount(req: Request, res: Response, next: any){
    try {
        const newAccount = req.body as iAccount;
        newAccount.password = hashPassword.hashPassword(newAccount.password);
        const result = await repository.addAccount(newAccount);
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
            const isValid = hashPassword.comparePassword(loginParams.password, account.password);

            if(isValid)
            {
                const token = await authorization.sing(account.id!);
                return res.status(statusCode.OK).json({
                    auth: true,
                    token
                })
            }     
            
            return res.status(statusCode.UNAUTHORIZED).end();
        }
    } catch (error) {
        console.log(error);
        res.status(statusCode.BAD_REQUEST).end();
    }
}

async function findAll(req: Request, res: Response, next: any){
    try {
        
        const accounts : iAccount[] = await repository.findAll();

        if(accounts === null){
            return res.status(statusCode.NO_CONTENT).end();
        }

        accounts.map(item => {
            item.password = ''
            return item;
        });

        return res.status(statusCode.OK).json(accounts);

    } catch (error) {
        console.log(error);
        res.status(statusCode.BAD_REQUEST).end();
    }
}

export default {
    addAccount,
    loginAccount,
    findAll
}