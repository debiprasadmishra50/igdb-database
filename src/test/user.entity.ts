import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Photo } from './photo.entity';

@Entity()
export class User {
  constructor(id: number, name: string, photos: Photo[]) {
    // constructor(id: number, name: string, photos: number[]) {
    this.id = id;
    this.name = name;
    this.photos = photos;
  }

  @PrimaryColumn()
  id: number;

  @Column({})
  name: string;

  @OneToMany(() => Photo, (photo) => photo.user, { eager: true })
  // @JoinColumn()
  photos: Photo[];
  // @Column('int', { array: true })
  // photos: number[];
}
