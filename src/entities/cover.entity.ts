import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Cover {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  alpha_channel: boolean;

  @Column({ nullable: true })
  animated: boolean;

  @OneToOne(() => Game, (game) => game.cover)
  game: Game;

  @Column({ nullable: true })
  height: number;

  @Column({ nullable: true })
  image_id: string;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  width: number;
}
