import {Response, Request} from 'express'
import { CreateUserService } from '../../services/user/CreateUserService';

export class CreateUserController {
    async handle (request: Request, response: Response) {
        const {name, last_name, password, email} = request.body

        const service = new CreateUserService();

        const result = await service.execute({name, last_name, password, email});

        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }
        
        return response.json(result)
    }
}