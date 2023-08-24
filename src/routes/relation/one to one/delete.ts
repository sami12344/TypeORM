import express from 'express';
import { AppDataSource } from 'src/database/config';
import { Profile } from 'src/entity/Profile';


const deleteRouter = express.Router()

deleteRouter.get('/', async (req, res) => {
  const userRepo = AppDataSource.getRepository(User)
  const profileRepo = AppDataSource.getRepository(Profile)


await profileRepo.delete(1)
  res.json('Profile deleted 1')
})

export default deleteRouter
