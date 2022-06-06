import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { AgeRating } from './age-rating.entity';
import { AlternativeNames } from './alternative-names.entity';
import { Collection } from './collection.entity';
import { Cover } from './cover.entity';
import { ExternalGames } from './external-games.entity';
import { Franchises } from './franchises.entity';
import { GameEngines } from './game-engines.entity';
import { GameModes } from './game-modes.entity';
import { Genres } from './genres.entity';
import { InvolvedCompanies } from './involved-companies.entity';
import { ParentGame } from './parent-game.entity';
import { Platforms } from './platforms.entity';
import { PlayerPerspectives } from './player-perspective.entity';
import { ReleaseDates } from './release-dates.entity';
import { Screenshots } from './screenshot.entity';
import { Themes } from './themes.entity';

@Entity()
export class Game {
  @PrimaryColumn({})
  id: number;

  @OneToMany(() => AgeRating, (rating) => rating.game, { nullable: true, eager: true })
  age_ratings: AgeRating[];

  @Column('decimal', { nullable: true })
  aggregated_rating: number;

  @Column({ nullable: true })
  aggregated_rating_count: number;

  @OneToMany(() => AlternativeNames, (names) => names.game, { nullable: true, eager: true })
  alternative_names: AlternativeNames[];

  @Column({ nullable: true })
  category: number;

  @ManyToOne(() => Collection, (collection) => collection.games, { eager: true })
  collection: Collection;

  @OneToOne(() => Cover, (cover) => cover.game, { nullable: true, eager: true })
  @JoinColumn()
  cover: Cover;

  @Column({ nullable: true })
  created_at: number;

  @OneToMany(() => ExternalGames, (exGames) => exGames.game, { nullable: true, eager: true })
  external_games: ExternalGames[];

  @Column({ nullable: true })
  first_release_date: number;

  @Column({ nullable: true })
  follows: number;

  @OneToMany(() => Franchises, (franchises) => franchises.game, { nullable: true, eager: true })
  franchises: Franchises[];

  @OneToMany(() => GameEngines, (gameEngine) => gameEngine.game, { nullable: true, eager: true })
  game_engines: GameEngines[];

  @OneToMany(() => GameModes, (gameModes) => gameModes.game, { nullable: true, eager: true })
  game_modes: GameModes[];

  @OneToMany(() => Genres, (genres) => genres.game, { nullable: true, eager: true })
  genres: Genres[];

  @OneToMany(() => InvolvedCompanies, (inCompanies) => inCompanies.game, { nullable: true, eager: true })
  involved_companies: InvolvedCompanies[];

  @ManyToOne(() => ParentGame, (parent) => parent.game, { nullable: true, eager: true })
  parent_game: ParentGame;

  @Column({ nullable: true })
  name: string;

  @OneToMany(() => Platforms, (platform) => platform.game, { nullable: true, eager: true })
  platforms: Platforms[];

  @OneToMany(() => PlayerPerspectives, (player) => player.game, { nullable: true, eager: true })
  player_perspectives: PlayerPerspectives[];

  @Column('decimal', { nullable: true })
  rating: number;

  @Column({ nullable: true })
  rating_count: number;

  @OneToMany(() => ReleaseDates, (releaseDate) => releaseDate.game, { nullable: true, eager: true })
  release_dates: ReleaseDates[];

  @OneToMany(() => Screenshots, (shots) => shots.game, { nullable: true, eager: true })
  screenshots: Screenshots[];

  @Column({})
  slug: string;

  @Column({})
  summary: string;

  @OneToMany(() => Themes, (themes) => themes.game, { nullable: true, eager: true })
  themes: Themes[];
}
