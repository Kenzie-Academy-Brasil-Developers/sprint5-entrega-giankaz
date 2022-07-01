import {Request, Response} from 'express'
import deleteUserService from '../services/deleteUser.Service'
 
 
export default async function deleteUserController (req: Request, res: Response) {
 
     try {
 
          const {id} = req.params

          const deletedUser = await deleteUserService(id)
 
          return res.status(200).json({message: deletedUser}) 
 
     } catch (error) {
 
          if (error instanceof Error) {
 
          return res.status(404).json({ error: error.message })
 
          } 
     }
};