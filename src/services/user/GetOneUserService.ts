import { getRepository } from "typeorm";
import { User } from "../../entities/User";


export class GetOneUserService {
    async execute(id:string): Promise<User | Error> {
        const repo = getRepository(User)

        const user = await repo.findOne(id);

        return user
    }
}