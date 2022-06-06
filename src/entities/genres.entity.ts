import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Genres {
  @PrimaryColumn()
  id: number;

  @Column({})
  created_at: number;

  @ManyToOne(() => Game, (game) => game.genres, { lazy: true })
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
