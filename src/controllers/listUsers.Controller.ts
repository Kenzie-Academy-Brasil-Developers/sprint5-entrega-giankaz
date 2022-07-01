import {Request, Response} from 'express'
import listUsersService from '../services/listUsers.Service'
 
 
export default async function listUsersController (req: Request, res: Response) {
 
     try {
 
          const users = await listUsersService()
 
          return res.status(200).json(users) 
 
     } catch (error) {
 
          if (error instanceof Error) {
 
          return res.status(404).json({ message: error.message })
 
          } 
     }
};