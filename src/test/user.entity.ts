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

  @Column({ nullable: true })
  name: string;

  @OneToMany(() => Photo, (photo) => photo.user)
  // @JoinColumn()
  photos: Photo[];
  // @Column('int', { array: true })
  // photos: number[];
}
