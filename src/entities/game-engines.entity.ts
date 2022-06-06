import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class GameEngines {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  created_at: number;

  // TODO: change this to entity relation
  @Column('int', { nullable: true, array: true })
  companies: number[];

  @ManyToOne(() => Game, (game) => game.game_engines, { lazy: true })
  game: Game;

  @Column({ nullable: true })
  logo: 21;

  @Column({ nullable: true })
  name: string;

  // TODO: change this to entity relation
  @Column('int', { nullable: true, array: true })
  platforms: number;

  @Column({ nullable: true })
  slug: string;

  @Column({ nullable: true })
  updated_at: number;

  @Column({ nullable: true })
  url: string;
}
