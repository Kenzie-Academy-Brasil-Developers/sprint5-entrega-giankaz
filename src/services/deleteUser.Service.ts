import { AppDataSource } from "../data-source"
import { User } from "../entities/users.entity"

 
 
export default async function deleteUserService (id : string) {
 
     try {
 
         const userRepository = AppDataSource.getRepository(User)

         await userRepository.delete(id)

         return "User Deleted"

 
     } catch (error) {
 
         if (error instanceof Error) {
 
            throw new Error(error.message)
 
         }
     }
};