import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class PlayerPerspectives {
  @PrimaryColumn()
  id: number;

  @Column({})
  created_at: number;

  @ManyToOne(() => Game, (game) => game.player_perspectives, { lazy: true })
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
