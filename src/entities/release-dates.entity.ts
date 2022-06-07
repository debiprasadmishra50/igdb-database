import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Game } from './game.entity';
import { Platforms } from './platforms.entity';

@Entity()
export class ReleaseDates {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  category: number;

  @Column({ nullable: true })
  created_at: number;

  @Column({ nullable: true })
  date: number;

  @ManyToMany(() => Game, (game) => game.release_dates)
  game: Game;

  @Column({ nullable: true })
  human: string;

  @Column({ nullable: true })
  m: number;

  @ManyToOne(() => Platforms, { nullable: true })
  platform: Platforms;

  @Column({ nullable: true })
  region: number;

  @Column({ nullable: true })
  updated_at: number;

  @Column({ nullable: true })
  y: number;
}
