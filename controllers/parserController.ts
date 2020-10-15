import { Request, Response } from 'express';
import { Parser } from 'model/parser';
import { RESPONSE_CODES }   from '../utils/utils';

// @description    parseBody
// @route          POST /api/v1/parser

export const parser_v1 =  (
    req: Request,
    res: Response,
    
) => {
    try {
        const { data } = req.body;
        const [firstname, lastname, clientId] = data.match(/\D+[0]+|\d+/g);;
        const parsedResult: Parser = {
            firstName: firstname,
            lastName: lastname,
            clientId: clientId
        }
        return res.status(RESPONSE_CODES.OK).json({
           
            statusCode: RESPONSE_CODES.OK,
            data: parsedResult
        });
    } catch (err) {
        return res.status(RESPONSE_CODES.ERROR).json({
           
            statusCode: RESPONSE_CODES.ERROR,
            error: 'Server Error',
        });
    }
   
};

// @description    parseBody
// @route          POST /api/v2/parser

export const parser_v2 =  (
    req: Request,
    res: Response,
    ) => {
    try {
        const { data } = req.body;
        const [firstname, lastname, clientId]= data.split('0').filter((any: any) => any !== "");
        const parsedResult: Parser = {
            firstName: firstname,
            lastName: lastname,
            clientId: clientId.substring(0,3)+"-"+clientId.substring(3)
        }
        return res.status(RESPONSE_CODES.OK).json({
           
            statusCode: RESPONSE_CODES.OK,
            data:parsedResult
        });
    } catch (err) {
        return res.status(RESPONSE_CODES.ERROR).json({
           
            statusCode: RESPONSE_CODES.ERROR,
            error: 'Server Error',
        });
    }
   
};

