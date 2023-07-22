import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Card extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  type: string
  @Column()
  category: string
  @Column()
  phone: string
}