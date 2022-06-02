import {Request, Response} from 'express'
import {UpdateUserService} from '../../services/user/UpdateUserService'


export class UpdateUserController {
    async handle(request: Request, response: Response) {
        const {id} = request.params
        const {name, last_name, password, email} = request.body

        const service  = new UpdateUserService();

        const result = await service.execute({id, name, last_name, password, email});

        if(result instanceof Error) {
            response.status(400).json(result.message)
        }

        return response.json(result)
    }
}