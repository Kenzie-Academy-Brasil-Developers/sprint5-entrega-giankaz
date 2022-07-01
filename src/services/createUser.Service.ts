import { AppDataSource } from "../data-source";
import { User } from "../entities/users.entity";
import { iUser, iUserResponse } from "../interfaces/users.interfaces";
import { hash } from "bcryptjs";

 
export default async function createUserService ({age, email, name, password}: iUser) {
 
     try {
 
          const userRepository = AppDataSource.getRepository(User)

          const hashedPassword = await hash(password, 10)

          const newUser = new User()

          newUser.name = name
          newUser.email = email
          newUser.age = age
          newUser.password = hashedPassword

          userRepository.create(newUser)

          await userRepository.save(newUser)

        

          return {...newUser, password: undefined}
 
     } catch (error) {

        if (error instanceof Error) {
 
          throw new Error(error.message)

        } 

 
     }
};



