import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';
import { Platforms } from './platforms.entity';

@Entity()
export class Themes {
  @PrimaryColumn()
  id: number;

  @Column({})
  created_at: number;

  @Column({})
  name: string;

  @Column({})
  slug: string;

  @Column({})
  updated_at: number;

  @ManyToOne(() => Game, (game) => game.release_dates, { lazy: true })
  game: Game;

  @Column({})
  url: string;
}
