import { AppDataSource } from "../data-source"
import { User } from "../entities/users.entity"
import { hash } from "bcryptjs"
 
 
export default async function updateUserService (id: string, updatedUserData: any) {
 
     try {
 
         const userRepository = AppDataSource.getRepository(User)

         if (updatedUserData.password) {
            updatedUserData.password = await hash(updatedUserData.password, 10)
         }

    
         await userRepository.save({
             id,
             updated_at: new Date(),
            ...updatedUserData
         })

         const userToUpdate = await userRepository.findOne({
            where: {
                id
            }
         })

         return "Updated User"
        
 
     } catch (error) {
 
         if (error instanceof Error) {
 
            throw new Error(error.message)
 
         }
     }
};