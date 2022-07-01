import {Request, Response} from 'express'
import updateUserService from '../services/updateUser.Service'
 
 
export default async function updateUserController (req: Request, res: Response) {
 
     try {
 
          const {id} = req.params
          const updatedUserData = req.body

          const updatedUser = await updateUserService(id, updatedUserData)
 
          return res.status(200).json({message: updatedUser}) 
 
     } catch (error) {
 
          if (error instanceof Error) {
               console.log(error.message);
               
          return res.status(404).json({ message: error.message })
 
          } 
     }
};