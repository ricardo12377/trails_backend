import {Request, Response} from 'express'
import { GetAllUserService } from '../../services/user/GetAllUserService';

export class GetAllUserController {
    async handle (request: Request, response: Response) {

        const service = new GetAllUserService();

        const categories = await service.execute()

        return response.json(categories)
    }
}