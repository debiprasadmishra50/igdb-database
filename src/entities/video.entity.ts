import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class Video {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  video_id: string;

  @ManyToOne(() => Game, (game) => game.release_dates)
  game: Game;
}
