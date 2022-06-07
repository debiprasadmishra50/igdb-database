import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Genres {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  created_at: number;

  @ManyToMany(() => Game, (game) => game.genres)
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
