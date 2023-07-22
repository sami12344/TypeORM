import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Profile } from './Profile'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  name: string
  @Column()
  email: string
  @Column()
  phone: string
  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile
}
