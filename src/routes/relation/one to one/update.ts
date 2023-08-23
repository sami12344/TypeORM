import express from 'express'
import { AppDataSource } from 'src/database/config'
import { Profile } from 'src/entity/Profile'
import { User } from 'src/entity/User'


const updateRouter = express.Router()

updateRouter.get('/', async (req, res) => {
  const userRepo =  AppDataSource.getRepository(User)
  const profileRepo = AppDataSource.getRepository(Profile)
const userFound = await userRepo.findOne({where:{id:4}})
if(userFound){

}else{
 res.send('record does not existed')
}
})

export default updateRouter
