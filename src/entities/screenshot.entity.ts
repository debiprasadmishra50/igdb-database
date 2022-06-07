import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Screenshots {
  @PrimaryColumn()
  id: number;

  @ManyToOne(() => Game, (game) => game.release_dates)
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
