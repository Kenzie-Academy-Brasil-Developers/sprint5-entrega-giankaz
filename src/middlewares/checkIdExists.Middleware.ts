import {NextFunction, Request, Response} from 'express'
import { AppDataSource } from '../data-source'
import { User } from '../entities/users.entity'
 
 
export default async function checkIdExistsMiddleware (req: Request, res: Response, next: NextFunction) {
 
     try {
 
          const {id} = req.params

          const userRepository = AppDataSource.getRepository(User)

          const userExists = await userRepository.findOne({
            where:{
                id
            }
          })

          if (!userExists) {
              
              return res.status(404).json({message: "User not found"}) 

          }
 
          next()
 
     } catch (error) {
 
          if (error instanceof Error) {
 
          return res.status(400).json({ message: error.message })
 
          } 
     }
};