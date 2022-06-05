import { createConnection } from "typeorm"
import { User } from "../../../entities/User"
import { CreateUserService } from "../../../services/user/CreateUserService"

beforeAll(async () => {
    await createConnection()
    .then(() => console.log("Conection success"))
})

describe("Create user service", () => {

    it("Should be create a User", async () => {
        const user = {name: "Ricardo", last_name: "Souza", password: "123", email: "rcostaj00@gmail.com"}
        const result = await new CreateUserService().execute(user)

         expect(result).toBeInstanceOf(User)
    })
})