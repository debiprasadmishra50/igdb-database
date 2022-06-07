import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from 'typeorm';
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

  @Column({ nullable: true })
  category: number;

  @Column({ nullable: true })
  rating: number;

  @ManyToMany(() => Game, (game) => game.age_ratings)
  game: number;
}
