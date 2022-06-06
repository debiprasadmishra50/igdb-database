import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class GameModes {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  created_at: number;

  @ManyToOne(() => Game, (game) => game.game_modes, { lazy: true })
  game: Game;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  slug: string;

  @Column({ nullable: true })
  updated_at: number;

  @Column({ nullable: true })
  url: string;
}
