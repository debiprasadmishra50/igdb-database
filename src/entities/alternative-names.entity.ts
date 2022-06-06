import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class AlternativeNames {
  constructor(id: number, comment: string, name: string, gameId: number) {
    this.id = id;
    this.comment = comment;
    this.name = name;
    this.game = gameId;
  }

  @PrimaryColumn()
  id: number;

  @Column({})
  comment: string;

  @Column({})
  name: string;

  @ManyToOne(() => Game, (game) => game.alternative_names, { lazy: true })
  game: number;
}
