import { Request, Response } from 'express';
import {ApiError} from "../exceptions/api-error";

export function ErrorMiddleware(err: ApiError, req: Request, res: Response) {
    console.log('err middleware')
    console.log(err);
    if(err instanceof ApiError){
        return res.status(err.status).json({message: err.message, errors: err.error});
    }
    return res.status(500).json({message: "Что то пошло не так"});
}