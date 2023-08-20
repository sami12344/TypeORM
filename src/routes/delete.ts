import express from 'express'
import { AppDataSource } from '../database/config'
import { User } from '../entity/User'

const deleteRouter = express.Router()

deleteRouter.get('/', async (req, res) => {
  const userRepo = AppDataSource.getRepository(User)

  const deleteRecord = await userRepo.delete(1)
  res.json(deleteRecord)
})

export default deleteRouter
 