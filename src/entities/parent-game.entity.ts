import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Cover } from './cover.entity';
import { ExternalGames } from './external-games.entity';
import { Franchises } from './franchises.entity';
import { GameEngines } from './game-engines.entity';
import { GameModes } from './game-modes.entity';
import { Game } from './game.entity';
import { Genres } from './genres.entity';
import { InvolvedCompanies } from './involved-companies.entity';
import { Platforms } from './platforms.entity';

@Entity()
export class ParentGame {
  @PrimaryColumn()
  id: number;

  @OneToMany(() => Game, (rating) => rating.age_ratings, { nullable: true, lazy: true })
  age_ratings: number[];

  @Column({ nullable: true })
  aggregrated_rating: number;

  @Column({ nullable: true })
  aggregrated_rating_count: number;

  @OneToMany(() => Game, (names) => names.alternative_names, { nullable: true, lazy: true })
  alternative_names: number[];

  // @OneToMany(() => Game, (art) => art.artworks, { nullable: true, lazy: true })
  // artworks: number[];

  @Column({ nullable: true })
  category: number;

  @Column({ nullable: true })
  collection: number;

  @OneToOne(() => Cover, (cover) => cover.game, { nullable: true, lazy: true })
  @JoinColumn()
  cover: number;

  @Column({ nullable: true })
  created_at: number;

  // @OneToMany(() => Expansions, (expansions) => expansions.game, { nullable: true, lazy: true })
  // expansions: number[];

  @OneToMany(() => ExternalGames, (externalGames) => externalGames.game, { nullable: true, lazy: true })
  external_games: number[];

  @Column({ nullable: true })
  first_release_date: number;

  @Column({ nullable: true })
  follows: number;

  @OneToMany(() => Franchises, (franchises) => franchises.game, { nullable: true, lazy: true })
  franchises: Franchises;

  @OneToMany(() => GameEngines, (gameEngines) => gameEngines.game, { nullable: true, lazy: true })
  game_engines: GameEngines;

  @OneToMany(() => GameModes, (gameModes) => gameModes.game, { nullable: true, lazy: true })
  game_modes: GameModes;

  @OneToMany(() => Genres, (genres) => genres.game, { nullable: true, lazy: true })
  genres: Genres[];

  @OneToMany(() => InvolvedCompanies, (inCompanies) => inCompanies.game, { nullable: true, eager: true })
  involved_companies: InvolvedCompanies[];

  @Column({ nullable: true })
  name: string;

  // TODO:
  @OneToMany(() => Platforms, (platform) => platform.game, { nullable: true, eager: true })
  platforms: Platforms[];

  @Column({ nullable: true })
  developer: boolean;

  @OneToMany(() => Game, (game) => game.parent_game, { nullable: true, lazy: true })
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
