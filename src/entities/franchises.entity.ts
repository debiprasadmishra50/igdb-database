import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Franchises {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  created_at: number;

  @Column('integer', { array: true })
  games: number[];

  @ManyToOne(() => Game, (game) => game.franchises, { lazy: true })
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
