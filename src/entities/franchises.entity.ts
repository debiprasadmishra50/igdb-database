import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Franchises {
  @PrimaryColumn()
  id: number;

  @Column({})
  created_at: number;

  @Column('integer', { array: true })
  games: number[];

  @ManyToOne(() => Game, (game) => game.franchises, { lazy: true })
  game: Game;

  @Column({})
  name: string;

  @Column({})
  slug: string;

  @Column({})
  updated_at: number;

  @Column({})
  url: string;
}
