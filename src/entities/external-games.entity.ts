import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class ExternalGames {
  @PrimaryColumn()
  id: number;

  @Column({})
  category: number;

  @Column({})
  created_at: number;

  @ManyToOne(() => Game, (game) => game.external_games, { lazy: true })
  game: Game;

  @Column({})
  name: string;

  @Column({})
  uid: string;

  @Column({})
  updated_at: number;
}
