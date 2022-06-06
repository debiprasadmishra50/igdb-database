import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Photo {
  constructor(id: number, url: string, userId: number) {
    this.id = id;
    this.url = url;
    this.user = userId;
  }

  @PrimaryColumn()
  id: number;

  @Column({})
  url: string;

  @ManyToOne(() => User, (user) => user.photos, { lazy: true })
  user: number;
}
