import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class GameModes {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  created_at: number;

  @ManyToMany(() => Game, (game) => game.game_modes)
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
