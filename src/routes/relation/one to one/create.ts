import express from 'express';
import { AppDataSource } from 'src/database/config';
import { Profile } from 'src/entity/Profile';
import { User } from 'src/entity/User';


const createRouter = express.Router()

createRouter.get('/', async (req, res) => {
  const userRepo = AppDataSource.getRepository(User)
  const profileRepo = AppDataSource.getRepository(Profile)

  let profile: Profile = new Profile()
  profile.gender = 'male'
  profile.photo = 'this is photo'

  const profileInserted = await profileRepo.save(profile)
  let user: User = new User()
  user.email = 'ahmad@gmail.com'
  user.person = 'Ahmed'
  user.phone = '123456789'
  user.profile = profileInserted

  const createUser = await userRepo.save(user)
  res.json(createUser)
})

export default createRouter
