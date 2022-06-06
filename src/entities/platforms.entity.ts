import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Platforms {
  @PrimaryColumn()
  id: number;

  @Column({})
  abbreviation: string;

  @Column({})
  alternative_name: string;

  @Column({})
  category: number;

  @Column({})
  created_at: number;

  @ManyToOne(() => Game, (game) => game.platforms, { lazy: true })
  game: Game;

  @Column({})
  name: string;

  @Column({})
  platform_logo: number;

  @Column({})
  slug: string;

  @Column({})
  updated_at: number;

  @Column({})
  url: string;

  @Column('int', { array: true })
  versions: number[];

  @Column('int', { array: true })
  websites: number[];
}
