import {Request, Response} from 'express'
import { GetOneUserService } from '../../services/user/GetOneUserService';

export class GetOneUserController {
    async handle (request: Request, response: Response) {

        const { id } = request.params

        const service = new GetOneUserService();

        const user = await service.execute(id)

        return response.json(user)
    }
}