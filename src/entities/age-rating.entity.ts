import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class AgeRating {
  constructor(id: number, category: number, rating: number, gameId: number) {
    this.id = id;
    this.category = category;
    this.rating = rating;
    this.game = gameId;
  }

  @PrimaryColumn()
  id: number;

  @Column({})
  category: number;

  @Column({})
  rating: number;

  @ManyToOne(() => Game, (game) => game.age_ratings, { lazy: true })
  game: number;
}
