import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Website {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  category: number;

  @Column({ nullable: true })
  trusted: boolean;

  @ManyToOne(() => Game, (game) => game.release_dates, { lazy: true })
  game: Game;

  @Column({ nullable: true })
  url: string;
}