import {Response, Request} from 'express'
import { DeleteUserService } from '../../services/user/DeleUserService';


export class DeleteUserController {
    async handle(request: Request, response:Response) {

        const { id } = request.params

        const service = new DeleteUserService();

        const result = await service.execute(id);

        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.status(200).end();
    }
}