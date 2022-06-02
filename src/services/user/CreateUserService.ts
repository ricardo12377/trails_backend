import { getRepository } from 'typeorm';
import { CreateUserDto } from '../../dtos/create-user-dto';
import { User } from '../../entities/User'

export class CreateUserService {

    async execute({name, last_name, password, email}: CreateUserDto ): Promise<User | Error> {
        const repo = getRepository(User)

        if(await repo.findOne({name})) {
            return new Error("User already exists")
        }

        const user = repo.create({
            name,
            last_name,
            password,
            email
        })

        await repo.save(user)

        return user;
    }
}