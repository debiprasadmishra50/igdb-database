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

  @ManyToMany(() => AgeRating, (rating) => rating.game, { nullable: true })
  @JoinTable()
  age_ratings: AgeRating[];

  @Column('decimal', { nullable: true })
  aggregated_rating: number;

  @Column({ nullable: true })
  aggregated_rating_count: number;

  @ManyToMany(() => AlternativeNames, (names) => names.game, { nullable: true })
  @JoinTable()
  alternative_names: AlternativeNames[];

  @ManyToMany(() => ArtWorks, (work) => work.game, { nullable: true })
  @JoinTable()
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

  // TODO: expanded_games, expansions
  @ManyToMany(() => Game, { nullable: true })
  @JoinTable()
  dlcs: number[];

  @Column('int', { array: true, nullable: true })
  dlcsId: number[];

  @ManyToMany(() => ExternalGames, (exGames) => exGames.game, { nullable: true })
  @JoinTable()
  external_games: ExternalGames[];

  @Column({ nullable: true })
  first_release_date: number;

  @Column({ nullable: true })
  follows: number;

  @ManyToOne(() => Franchises, { nullable: true })
  franchise: Franchises;

  @ManyToMany(() => Franchises, (franchises) => franchises.game, { nullable: true })
  @JoinTable()
  franchises: Franchises[];

  @ManyToMany(() => GameEngines, (gameEngine) => gameEngine.game, { nullable: true })
  @JoinTable()
  game_engines: GameEngines[];

  @ManyToMany(() => GameModes, (gameModes) => gameModes.game, { nullable: true })
  @JoinTable()
  game_modes: GameModes[];

  @ManyToMany(() => Genres, (genres) => genres.game, { nullable: true })
  @JoinTable()
  genres: Genres[];

  @Column({ nullable: true })
  hypes: number;

  @ManyToMany(() => InvolvedCompanies, (inCompanies) => inCompanies.game, { nullable: true })
  @JoinTable()
  involved_companies: InvolvedCompanies[];

  // multiplayer_modes
  @Column('int', { array: true, nullable: true })
  multiplayer_modes: number[];

  @Column({ nullable: true })
  name: string;

  @ManyToOne(() => Game, { nullable: true, createForeignKeyConstraints: false })
  parent_game: number;

  @ManyToMany(() => Platforms, (platform) => platform.game, { nullable: true })
  @JoinTable()
  platforms: Platforms[];

  @ManyToMany(() => PlayerPerspectives, (player) => player.game, { nullable: true })
  @JoinTable()
  player_perspectives: PlayerPerspectives[];

  @Column('decimal', { nullable: true })
  rating: number;

  @Column({ nullable: true })
  rating_count: number;

  @ManyToMany(() => ReleaseDates, (releaseDate) => releaseDate.game, { nullable: true })
  @JoinTable()
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

  @ManyToMany(() => Themes, (themes) => themes.game, { nullable: true })
  @JoinTable()
  themes: Themes[];

  @Column('decimal', { nullable: true })
  total_rating: number;

  @Column({ nullable: true })
  total_rating_count: number;

  @Column({ nullable: true })
  updated_at: number;

  @Column({ nullable: true })
  url: string;

  @ManyToMany(() => Video, (video) => video.game, { nullable: true })
  @JoinTable()
  videos: Video[];

  @ManyToMany(() => Website, (website) => website.game, { nullable: true })
  @JoinTable()
  websites: Website[];
}
