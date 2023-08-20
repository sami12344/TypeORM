import express from 'express'
import { AppDataSource } from '../database/config'
import { User } from '../entity/User'

const updateRouter = express.Router()

updateRouter.get('/', async (req, res) => {
  const userRepo = await AppDataSource.getRepository(User)
 const updateUser = await userRepo.update(3, {person:"Sami Islam", email:'sami16203@gmail.com'})
res.json(updateUser)
})

export default updateRouter
