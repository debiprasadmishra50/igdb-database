import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Screenshots {
  @PrimaryColumn()
  id: number;

  @ManyToOne(() => Game, (game) => game.release_dates, { lazy: true })
  game: Game;

  @Column({})
  height: number;

  @Column({})
  image_id: string;

  @Column({})
  url: string;

  @Column({})
  width: number;
}
