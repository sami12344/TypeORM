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
  @Column({ name: 'name' })
  person: string
  @Column()
  email: string
  @Column()
  phone: string

  @OneToOne(() => Profile, { cascade: true, eager: true , onDelete:'CASCADE'})
  @JoinColumn()
  profile: Profile
}

// onDelete:'CASCADE' means if we delete certain profile it will also delete the user


// cascade will ensure if any operation is done with user it will also assosiate profile

// egar means when we call find it will also show profile neither it will send  only user data