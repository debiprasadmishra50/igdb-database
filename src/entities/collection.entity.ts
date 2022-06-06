import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Collection {
  @PrimaryColumn()
  id: number;

  @Column({})
  created_at: number;

  @OneToMany(() => Game, (game) => game.collection, { lazy: true })
  games: number[];

  @Column({})
  name: string;

  @Column({})
  slug: string;

  @Column({})
  updated_at: number;

  @Column({})
  url: string;
}
