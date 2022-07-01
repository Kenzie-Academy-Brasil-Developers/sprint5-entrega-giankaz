import { Router } from "express";
import createUserController from "../controllers/createUser.Controller";
import deleteUserController from "../controllers/deleteUser.Controller";
import listOneUserController from "../controllers/listOneUser.Controller";
import listUsersController from "../controllers/listUsers.Controller";
import updateUserController from "../controllers/updateUser.Controller";
import checkEmailExistsMiddleware from "../middlewares/checkEmailExists.Middleware";
import checkIdExistsMiddleware from "../middlewares/checkIdExists.Middleware";
import schemaValidation from "../middlewares/schemaValidation";
import userSchema from "../schemas/user.schema";


const usersRoutes = Router()

usersRoutes.post('', schemaValidation(userSchema), checkEmailExistsMiddleware, createUserController)


usersRoutes.get('', listUsersController)
usersRoutes.get('/:id', listOneUserController)


usersRoutes.patch('/:id', checkIdExistsMiddleware , updateUserController)


usersRoutes.delete('/:id', checkIdExistsMiddleware, deleteUserController)


export default usersRoutes