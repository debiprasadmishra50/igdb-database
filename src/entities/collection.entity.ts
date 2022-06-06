import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Collection {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  created_at: number;

  @OneToMany(() => Game, (game) => game.collection, { lazy: true })
  games: number[];

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  slug: string;

  @Column({ nullable: true })
  updated_at: number;

  @Column({ nullable: true })
  url: string;
}
