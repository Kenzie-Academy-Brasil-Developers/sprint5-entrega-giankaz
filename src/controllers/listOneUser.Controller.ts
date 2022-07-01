import {Request, Response} from 'express'
import listOneUserService from '../services/listOneUser.Service'
 
 
export default async function listOneUserController (req: Request, res: Response) {
 
     try {
 
          const {id} = req.params

          const findUser = await listOneUserService(id)
 
          return res.status(200).json(findUser) 
 
     } catch (error) {
 
          if (error instanceof Error) {
 
          return res.status(404).json({ message: error.message })
 
          } 
     }
};