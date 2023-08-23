import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  gender: string
  @Column()
  photo: string
  
  @OneToOne(()=> Profile, {cascade:true, eager:true})
  @JoinColumn()
  profile:Profile
}
 