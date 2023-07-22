import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'sami',
  entities: ['src/entity/*{.ts,.js}'],
  synchronize: true,
  logging: true,
})
