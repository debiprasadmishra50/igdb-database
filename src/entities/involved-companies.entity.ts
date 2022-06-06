import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class InvolvedCompanies {
  @PrimaryColumn()
  id: number;

  @Column({})
  company: number;

  @Column({})
  created_at: number;

  @Column({})
  developer: boolean;

  @ManyToOne(() => Game, (game) => game.involved_companies, { lazy: true })
  game: Game;

  @Column({})
  porting: boolean;

  @Column({})
  publisher: boolean;

  @Column({})
  supporting: boolean;

  @Column({})
  updated_at: number;
}
