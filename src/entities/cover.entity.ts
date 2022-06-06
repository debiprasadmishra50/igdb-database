import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Cover {
  @PrimaryColumn()
  id: number;

  @Column({})
  alpha_channel: boolean;

  @Column({})
  animated: boolean;

  @OneToOne(() => Game, (game) => game.cover, { lazy: true })
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
