import express from 'express'
import { AppDataSource } from '../../database/config'
import { User } from '../../entity/User'

const readRouter = express.Router()

readRouter.get('/', async (req, res) => {
  const userRepo = await AppDataSource.getRepository(User)
  const allRecords = await userRepo.find({relations:{profile:true}})

  res.json([{ totalRecords: allRecords.length }, ...allRecords])
})

export default readRouter
