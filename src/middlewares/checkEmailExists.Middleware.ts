import {Request, Response, NextFunction} from 'express'
import { AppDataSource } from '../data-source'
import { User } from '../entities/users.entity'
 
 
export default async function checkEmailExistsMiddleware (req: Request, res: Response, next: NextFunction) {
 
     try {

        const userRepository = AppDataSource.getRepository(User)

        const {email} = req.body 
        
        const emailExists = await userRepository.findOne({
            where:{
                email
            }
        })

        if (emailExists) {
            return res.status(400).json({message: "User already exists"})
        }
 
        next()
 
     } catch (error) {
 
          if (error instanceof Error) {
 
          return res.status(400).json({ message: error.message })
 
          } 
     }
};