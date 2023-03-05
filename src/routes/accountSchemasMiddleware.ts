import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import authorization from '../authorization';
import { validaNewAccount } from '../models/AccountSchemas';
import schemasMiddleware from './schemasMiddleware';

function validadeNewAccountSchema(req: Request, res: Response, next: any){
    return schemasMiddleware.validaSchema(validaNewAccount, req, res, next);
}

async function validateAuthorization(req: Request, res: Response, next: any){
    try {
        const token = req.headers['x-access-token'] as string;

        if(!token) return res.status(StatusCodes.UNAUTHORIZED).end();

        const payload = await authorization.verify(token);
        if(!payload) return res.status(StatusCodes.UNAUTHORIZED).end();

        res.locals.payload = payload;

        next();
    } catch (error) {
        console.log('validateAuth: ' + error);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

export {
    validadeNewAccountSchema,
    validateAuthorization
}