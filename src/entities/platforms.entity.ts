import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Platforms {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  abbreviation: string;

  @Column({ nullable: true })
  alternative_name: string;

  @Column({ nullable: true })
  category: number;

  @Column({ nullable: true })
  created_at: number;

  @ManyToOne(() => Game, (game) => game.platforms, { lazy: true })
  game: Game;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  platform_logo: number;

  @Column({ nullable: true })
  slug: string;

  @Column({ nullable: true })
  updated_at: number;

  @Column({ nullable: true })
  url: string;

  @Column('int', { array: true })
  versions: number[];

  @Column('int', { array: true })
  websites: number[];
}
