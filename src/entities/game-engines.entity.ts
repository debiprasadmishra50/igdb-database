import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class GameEngines {
  @PrimaryColumn()
  id: number;

  @Column({})
  created_at: number;

  // TODO: change this to entity relation
  @Column('int', { array: true })
  companies: number[];

  @ManyToOne(() => Game, (game) => game.game_engines, { lazy: true })
  game: Game;

  @Column({})
  logo: 21;

  @Column({})
  name: string;

  // TODO: change this to entity relation
  @Column('int', { array: true })
  platforms: number;

  @Column({})
  slug: string;

  @Column({})
  updated_at: number;

  @Column({})
  url: string;
}
