import { DataSource } from "typeorm";
import  express  from "express";
import { log } from "console";
const app = express()


app.get('/',(req,res)=>{
  res.send('Hello world')
})

const AppDataSource = new DataSource({
  type:'mysql',
  host:'localhost',
  port:3306,
  username:'root',
  password:'',
  database:'sami'
})


const main = async()=>{
  try {
    await AppDataSource.initialize()
    console.log('Mysql connected');
    app.listen(3000, ()=>{
      log("Server is running at http://localhost:3000")
    })
  } catch (error) {
    console.log(error);
    throw new Error('Datbase connecting error')
  }
}

main() 