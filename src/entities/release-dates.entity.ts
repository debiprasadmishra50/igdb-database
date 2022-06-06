import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';
import { Platforms } from './platforms.entity';

@Entity()
export class ReleaseDates {
  @PrimaryColumn()
  id: number;

  @Column({})
  category: number;

  @Column({})
  created_at: number;

  @Column({})
  date: number;

  @ManyToOne(() => Game, (game) => game.release_dates, { lazy: true })
  game: Game;

  @Column({})
  human: string;

  @Column({})
  m: number;

  @ManyToOne(() => Platforms, { nullable: true, lazy: true })
  platform: Platforms;

  @Column({})
  region: number;

  @Column({})
  updated_at: number;

  @Column({})
  y: number;
}
