import express from 'express'
import { AppDataSource } from '../database/config'
import { User } from '../entity/User'

const findOneRouter = express.Router()

findOneRouter.get('/', async (req, res) => {
  const userRepo = await AppDataSource.getRepository(User)
const reacord = await userRepo.findOne({where: {name:"Sami Islam"}})
  res.json(reacord)
})

export default findOneRouter
