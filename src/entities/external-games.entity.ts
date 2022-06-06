import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class ExternalGames {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  category: number;

  @Column({ nullable: true })
  created_at: number;

  @ManyToOne(() => Game, (game) => game.external_games, { lazy: true })
  game: Game;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  uid: string;

  @Column({ nullable: true })
  updated_at: number;
}
