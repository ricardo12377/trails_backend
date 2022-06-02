import { Router } from "express";
import { GetAllUserController } from './controllers/User/GetAllUserController'
import { GetOneUserController } from './controllers/User/GetOneUserController'
import { CreateUserController } from './controllers/User/CreateUserController'
import { UpdateUserController } from './controllers/User/UpdateUserController'
import { DeleteUserController } from "./controllers/User/DeleteUserController";
import { AuthController } from "./controllers/Auth/AuthController";
import  AuthMiddleware  from "./middlewares/AuthMiddleware";
import { IndexUserController } from "./controllers/User/IndexUser";


const routes = Router();

routes.get("/user", new GetAllUserController().handle)
routes.get("/user/:id", new GetOneUserController().handle)
routes.post("/user", new CreateUserController().handle)
routes.put("/user/:id", new UpdateUserController().handle)
routes.delete("/user/:id", new DeleteUserController().handle)


routes.post("/auth", new AuthController().authenticate)
routes.get("/user",  AuthMiddleware, new IndexUserController().index)

export {routes}
