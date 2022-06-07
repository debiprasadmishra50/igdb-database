import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class InvolvedCompanies {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  company: number;

  @Column({ nullable: true })
  created_at: number;

  @Column({ nullable: true })
  developer: boolean;

  @ManyToOne(() => Game, (game) => game.involved_companies)
  game: Game;

  @Column({ nullable: true })
  porting: boolean;

  @Column({ nullable: true })
  publisher: boolean;

  @Column({ nullable: true })
  supporting: boolean;

  @Column({ nullable: true })
  updated_at: number;
}
