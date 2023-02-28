import { Request, Response } from 'express';
import Joi from 'joi';
import statusCode from 'http-status-codes';

function validaSchema(schema: Joi.ObjectSchema<any>, req: Request, res: Response, next: any){
    const { error } = schema.validate(req.body);

    if(error == null) return next();

    const { details } = error;
    const message = details.map(item => item.message).join(',');

    res.status(statusCode.UNPROCESSABLE_ENTITY).end();
}

export default {
    validaSchema
}