import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { AgeRating } from './age-rating.entity';
import { AlternativeNames } from './alternative-names.entity';
import { ArtWorks } from './artworks.entity';
import { Collection } from './collection.entity';
import { Cover } from './cover.entity';
import { ExternalGames } from './external-games.entity';
import { Franchises } from './franchises.entity';
import { GameEngines } from './game-engines.entity';
import { GameModes } from './game-modes.entity';
import { Genres } from './genres.entity';
import { InvolvedCompanies } from './involved-companies.entity';
import { Platforms } from './platforms.entity';
import { PlayerPerspectives } from './player-perspective.entity';
import { ReleaseDates } from './release-dates.entity';
import { Screenshots } from './screenshot.entity';
import { Themes } from './themes.entity';
import { Video } from './video.entity';
import { Website } from './website.entity';

@Entity()
export class Game {
  @PrimaryColumn({})
  id: number;

  @OneToMany(() => AgeRating, (rating) => rating.game, { nullable: true })
  age_ratings: AgeRating[];

  @Column('decimal', { nullable: true })
  aggregated_rating: number;

  @Column({ nullable: true })
  aggregated_rating_count: number;

  @OneToMany(() => AlternativeNames, (names) => names.game, { nullable: true })
  alternative_names: AlternativeNames[];

  @OneToMany(() => ArtWorks, (work) => work.game, { nullable: true })
  artworks: ArtWorks[];

  @ManyToMany(() => Game, { nullable: true })
  @JoinTable()
  bundles: number[];

  @Column({ nullable: true })
  category: number;

  @ManyToOne(() => Collection, (collection) => collection.games)
  collection: Collection;

  @OneToOne(() => Cover, (cover) => cover.game, { nullable: true })
  @JoinColumn()
  cover: Cover;

  @Column({ nullable: true })
  created_at: number;

  // TODO: dlcs, expanded_games, expansions
  @ManyToMany(() => Game, { nullable: true })
  @JoinTable()
  dlcs: number[];

  @Column('int', { array: true, nullable: true })
  dlcsId: number[];

  @OneToMany(() => ExternalGames, (exGames) => exGames.game, { nullable: true })
  external_games: ExternalGames[];

  @Column({ nullable: true })
  first_release_date: number;

  @Column({ nullable: true })
  follows: number;

  @ManyToOne(() => Franchises, { nullable: true })
  franchise: Franchises;

  @OneToMany(() => Franchises, (franchises) => franchises.game, { nullable: true })
  franchises: Franchises[];

  @OneToMany(() => GameEngines, (gameEngine) => gameEngine.game, { nullable: true })
  game_engines: GameEngines[];

  @OneToMany(() => GameModes, (gameModes) => gameModes.game, { nullable: true })
  game_modes: GameModes[];

  @OneToMany(() => Genres, (genres) => genres.game, { nullable: true })
  genres: Genres[];

  @Column({ nullable: true })
  hypes: number;

  @OneToMany(() => InvolvedCompanies, (inCompanies) => inCompanies.game, { nullable: true })
  involved_companies: InvolvedCompanies[];

  // multiplayer_modes
  @Column('int', { array: true, nullable: true })
  multiplayer_modes: number[];

  @Column({ nullable: true })
  name: string;

  @ManyToOne(() => Game, { nullable: true, createForeignKeyConstraints: false })
  parent_game: number;

  @OneToMany(() => Platforms, (platform) => platform.game, { nullable: true })
  platforms: Platforms[];

  @OneToMany(() => PlayerPerspectives, (player) => player.game, { nullable: true })
  player_perspectives: PlayerPerspectives[];

  @Column('decimal', { nullable: true })
  rating: number;

  @Column({ nullable: true })
  rating_count: number;

  @OneToMany(() => ReleaseDates, (releaseDate) => releaseDate.game, { nullable: true })
  release_dates: ReleaseDates[];

  // remakes, remasters

  @OneToMany(() => Screenshots, (shots) => shots.game, { nullable: true })
  screenshots: Screenshots[];

  @ManyToMany(() => Game, { nullable: true })
  @JoinTable()
  similar_games: number[];

  @Column({ nullable: true })
  slug: string;

  // standalone_expansions

  @Column({ nullable: true })
  status: number;

  @Column({ nullable: true })
  storyline: string;

  @Column({ nullable: true })
  summary: string;

  @OneToMany(() => Themes, (themes) => themes.game, { nullable: true })
  themes: Themes[];

  @Column('decimal', { nullable: true })
  total_rating: number;

  @Column({ nullable: true })
  total_rating_count: number;

  @Column({ nullable: true })
  updated_at: number;

  @Column({ nullable: true })
  url: string;

  @OneToMany(() => Video, (video) => video.game, { nullable: true })
  videos: Video[];

  @OneToMany(() => Website, (website) => website.game, { nullable: true })
  websites: Website[];
}
