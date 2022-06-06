import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';
import { Platforms } from './platforms.entity';

@Entity()
export class Themes {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  created_at: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  slug: string;

  @Column({ nullable: true })
  updated_at: number;

  @ManyToOne(() => Game, (game) => game.release_dates, { lazy: true })
  game: Game;

  @Column({ nullable: true })
  url: string;
}
