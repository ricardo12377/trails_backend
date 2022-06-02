import { getRepository } from "typeorm";
import { UpdateUserDto } from "../../dtos/update-user-dto";
import { User } from '../../entities/User'

export class UpdateUserService {
    async execute({id, name, last_name, password, email}: UpdateUserDto) {
        const repo = getRepository(User);

        const user = await repo.findOne(id);

        if(!user) {
            return new Error("Category not exists!")
        }

        user.name = name ? name : user.name;
        user.last_name = last_name ? last_name : user.last_name;
        user.password = password ? password : user.password
        user.email = email ? email : user.email

        await repo.save(user)

        return user;
    }
}