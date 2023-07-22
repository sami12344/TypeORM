import { log } from 'console'
import express from 'express'
import { AppDataSource } from './database/config'
import deleteRouter from './routes/delete'
import readRouter from './routes/read'
import createRouter from './routes/create'
import updateRouter from './routes/update'
import findOneRouter from './routes/findOne'
const app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.use('/read', readRouter)

app.use('/delete', deleteRouter)

app.use('/create', createRouter)

app.use('/update', updateRouter)

app.use('/findOne',findOneRouter)
const main = async () => {
  try {
    await AppDataSource.initialize()
    console.log('Mysql connected')
    app.listen(3000, () => {
      log('Server is running at http://localhost:3000')
    })
  } catch (error) {
    console.log(error)
    throw new Error('Datbase connecting error')
  }
}

main()
