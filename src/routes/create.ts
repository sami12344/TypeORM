import express from 'express'
import { AppDataSource } from '../database/config'
import { User } from '../entity/User'

const createRouter = express.Router()
createRouter.get('/', async (req, res) => {
  const userRepo = await AppDataSource.getRepository(User)
 let user:User = new User()
 user.email="ahmad@gmail.com"
 user.person= 'Ahmed'
 user.phone='123456789'

  const createUser =  await userRepo.save(user)
  res.json(createUser)
})

export default createRouter
