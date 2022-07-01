import { AppDataSource } from "../data-source"
import { User } from "../entities/users.entity"

 
export default async function listUsersService () {
 
     try {
 
        const usersRepository = AppDataSource.getRepository(User)

        const users = usersRepository.find()

        return users
 
     } catch (error) {
 
         if (error instanceof Error) {
 
          throw new Error(error.message)
 
          }
     }
};