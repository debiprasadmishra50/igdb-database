import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class ArtWorks {
  @PrimaryColumn()
  id: number;

  @ManyToOne(() => Game, (game) => game.release_dates, { lazy: true })
  game: Game;

  @Column({ nullable: true })
  alpha_channel: boolean;

  @Column({ nullable: true })
  animated: boolean;

  @Column({ nullable: true })
  height: number;

  @Column({ nullable: true })
  image_id: string;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  width: number;
}
