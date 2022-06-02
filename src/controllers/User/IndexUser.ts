import {Request, Response} from 'express'

export class IndexUserController {

    async index (request: Request, response:Response){
        return response.send({userId: request.userId});
    }
}