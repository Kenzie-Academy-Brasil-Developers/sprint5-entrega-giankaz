import { AppDataSource } from "../data-source"
import { User } from "../entities/users.entity"

 
 
export default async function listOneUserService ( id: string ) {
 
     try {
 
        const usersRepository = AppDataSource.getRepository(User)
        
        const findUser = await usersRepository.findOne({
            where: {
                id
            }
        })

        if (!findUser) {
            throw new Error('User not found')
        }

        return findUser
 
     } catch (error) {
 
         if (error instanceof Error) {
 
          throw new Error(error.message)
 
          }
     }
};