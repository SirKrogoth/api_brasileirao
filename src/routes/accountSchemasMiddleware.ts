import { Request, Response } from 'express';
import { validaNewAccount } from '../models/AccountSchemas';
import schemasMiddleware from './schemasMiddleware';

function validadeNewAccountSchema(req: Request, res: Response, next: any){
    return schemasMiddleware.validaSchema(validaNewAccount, req, res, next);
}

export {
    validadeNewAccountSchema
}