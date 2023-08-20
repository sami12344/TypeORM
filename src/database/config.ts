import { DataSource } from "typeorm";
import { configDotenv } from "dotenv";
configDotenv()
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '',
  database: 'typeorm',
  entities: ['src/entity/*{.ts,.js}'],
  synchronize: true,
  logging: true,
})



