import {Request, Response} from 'express'
import createUserService from '../services/createUser.Service'
 
 
export default async function createUserController (req: Request, res: Response) {
 
     try {         
      
        const {email, password, age, name} = req.body

        const createdUser = await createUserService({email, password, age, name})
 
     return res.status(201).json(createdUser) 
 
     } catch (error) {
 
          if (error instanceof Error) {
 
          return res.status(400).json({ message: error.message })
 
          } 
     }
};