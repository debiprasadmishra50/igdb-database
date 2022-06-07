import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Website {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  category: number;

  @Column({ nullable: true })
  trusted: boolean;

  @ManyToMany(() => Game, (game) => game.release_dates)
  game: Game;

  @Column({ nullable: true })
  url: string;
}
