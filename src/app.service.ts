import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './test/user.entity';
import * as fs from 'fs';
import { Photo } from './test/photo.entity';
import { Game } from './entities/game.entity';
import { AgeRating } from './entities/age-rating.entity';
import { AlternativeNames } from './entities/alternative-names.entity';
import { Collection } from './entities/collection.entity';
import { Cover } from './entities/cover.entity';
import { ExternalGames } from './entities/external-games.entity';
import { Franchises } from './entities/franchises.entity';
import { GameEngines } from './entities/game-engines.entity';
import { GameModes } from './entities/game-modes.entity';
import { Genres } from './entities/genres.entity';
import { InvolvedCompanies } from './entities/involved-companies.entity';
import { Platforms } from './entities/platforms.entity';
import { PlayerPerspectives } from './entities/player-perspective.entity';
import { ReleaseDates } from './entities/release-dates.entity';
import { Screenshots } from './entities/screenshot.entity';
import { Themes } from './entities/themes.entity';
import { Website } from './entities/website.entity';
import { ArtWorks } from './entities/artworks.entity';
import { Video } from './entities/video.entity';
import e from 'express';

@Injectable()
export class AppService {
  private _path = `${__dirname}/../../sample-igdb-data/`;
  public get path() {
    return this._path;
  }
  public set path(value) {
    this._path = value;
  }

  constructor(
    @InjectRepository(Game) private readonly gameRepository: Repository<Game>,
    @InjectRepository(AgeRating) private readonly ageRatingRepository: Repository<AgeRating>,
    @InjectRepository(AlternativeNames) private readonly alterNamesRepository: Repository<AlternativeNames>,
    @InjectRepository(ArtWorks) private readonly artworksRepository: Repository<ArtWorks>,
    @InjectRepository(Collection) private readonly collectionRepository: Repository<AlternativeNames>,
    @InjectRepository(Cover) private readonly coverRepository: Repository<Cover>,
    @InjectRepository(ExternalGames) private readonly externalGamesRepository: Repository<ExternalGames>,
    @InjectRepository(Franchises) private readonly franchisesRepository: Repository<Franchises>,
    @InjectRepository(GameEngines) private readonly gameEnginesRepository: Repository<GameEngines>,
    @InjectRepository(GameModes) private readonly gameModesRepository: Repository<GameModes>,
    @InjectRepository(Genres) private readonly genresRepository: Repository<Genres>,
    @InjectRepository(InvolvedCompanies)
    private readonly involvedCompaniesRepository: Repository<InvolvedCompanies>,
    @InjectRepository(Platforms) private readonly platformsRepository: Repository<Platforms>,
    @InjectRepository(PlayerPerspectives) private readonly playerRepository: Repository<PlayerPerspectives>,
    @InjectRepository(ReleaseDates) private readonly releaseDatesRepository: Repository<ReleaseDates>,
    @InjectRepository(Screenshots) private readonly screenshotsRepository: Repository<Screenshots>,
    @InjectRepository(Themes) private readonly themesRepository: Repository<Themes>,
    @InjectRepository(Video) private readonly videoRepository: Repository<Video>,
    @InjectRepository(Website) private readonly websiteRepository: Repository<Website>,
  ) {}

  async addIGDBGamesData() {
    const records = this.readDirectory();

    for (let i = 0; i < 2; i++) {
      const filePath = `${this.path}/${records[this.random(0, records.length)]}`;
      // const filePath = `${this.path}/call-of-duty-united-offensive.json`;
      let data = this.readFile(filePath);
      data = JSON.parse(data);

      console.log('//////////////////////', data['id'], '///////////////////');

      const game = new Game();
      game.id = data['id'];
      game.name = data['name'];
      game.aggregated_rating = data['aggregated_rating'];
      game.aggregated_rating_count = data['aggregated_rating_count'];
      game.category = data['category'];
      game.created_at = data['created_at'];
      game.first_release_date = data['first_release_date'];
      game.follows = data['follows'];
      game.hypes = data['hypes'];
      game.rating = data['rating'];
      game.rating_count = data['rating_count'];
      game.slug = data['slug'];
      game.status = data['status'];
      game.storyline = data['storyline'];
      game.summary = data['summary'];
      game.total_rating = data['total_rating'];
      game.total_rating_count = data['total_rating_count'];
      game.updated_at = data['updated_at'];
      game.url = data['url'];

      await this.gameRepository.save(game);

      if (data['age_ratings']) {
        game.age_ratings = await this.addAgeRating(data['age_ratings'], data['id']);
      }

      if (data['alternative_names']) {
        game.alternative_names = await this.addAlternativeNames(data['alternative_names'], data['id']);
      }

      if (data['artworks']) {
        game.artworks = await this.addArtworks(data['artworks']);
      }

      if (data['collection']) game.collection = await this.addCollection(data['collection']);
      if (data['cover']) game.cover = await this.addCover(data['cover']);
      if (data['dlcs']) game.dlcsId = data['dlcs'].map((d) => d.id);

      if (data['external_games']) {
        game.external_games = await this.addExternalGames(data['external_games']);
      }

      if (data['franchise']) {
        game.franchise = await this.addFranchises([data['franchise']])[0];
      }

      if (data['franchises']) {
        game.franchises = await this.addFranchises(data['franchises']);
      }

      if (data['game_engines']) {
        game.game_engines = await this.addGameEngines(data['game_engines']);
      }

      if (data['game_modes']) {
        game.game_modes = await this.addGameModes(data['game_modes']);
      }

      if (data['genres']) {
        game.genres = await this.addGenres(data['genres']);
      }

      if (data['involved_companies']) {
        game.involved_companies = await this.addInvolvedCompanies(data['involved_companies']);
      }

      if (data['multiplayer_modes']) {
        game.multiplayer_modes = data['multiplayer_modes'].map((mode) => mode.id);
      }

      if (data['parent_game'])
        // TODO: parent_game
        game.parent_game = data['parent_game'];

      if (data['platforms']) {
        game.platforms = await this.addPlatforms(data['platforms']);
      }

      if (data['player_perspectives']) {
        game.player_perspectives = await this.addPlayerPerspective(data['player_perspectives']);
      }

      if (data['release_dates']) {
        game.release_dates = await this.addReleaseDates(data['release_dates']);
      }

      if (data['screenshots']) {
        game.screenshots = await this.addScreenshots(data['screenshots']);
      }

      // TODO: similar games
      if (data['similar_games']) {
        game.similar_games = data['similar_games'].map((game) => game.id);
      }

      if (data['themes']) {
        game.themes = await this.addThemes(data['themes'], game);
      }

      if (data['videos']) {
        game.videos = await this.addVideos(data['videos']);
      }

      if (data['websites']) {
        game.websites = await this.addWebsites(data['websites']);
      }

      await this.gameRepository.save(game);
    }

    await this.wait(2);
    console.log('awesome: ', (await this.gameRepository.find()).length);
    // global.gc();
    // const g = await this.gameRepository.findOne({ where: { id: 624 } });
    // console.log(await g.similar_games);

    // return (await this.gameRepository.find()).length;
  }

  async addVideos(data: any[]) {
    const allVideos = data.map((el) => {
      const video = new Video();
      video.id = el.id;
      video.game = el.game;
      video.name = el.name;
      video.video_id = el.video_id;

      return this.videoRepository.save(video);
    });

    return await Promise.all(allVideos);
  }

  async addArtworks(data: any[]) {
    const works = data.map((el) => {
      const work = new ArtWorks();
      work.id = el.id;
      work.alpha_channel = el.alpha_channel;
      work.animated = el.animated;
      work.game = el.game;
      work.height = el.height;
      work.image_id = el.image_id;
      work.url = el.url;
      work.width = el.width;

      return this.artworksRepository.save(work);
    });

    return await Promise.all(works);
  }

  async addWebsites(data: any[]) {
    const allSites = data.map((el) => {
      const site = new Website();
      site.id = el.id;
      site.category = el.category;
      site.game = el.game;
      site.trusted = el.trusted;
      site.url = el.url;

      return this.websiteRepository.save(site);
    });

    return await Promise.all(allSites);
  }

  async addThemes(data: any[], game: Game) {
    const allThemes = data.map((el) => {
      const theme = new Themes();
      theme.id = el.id;
      theme.created_at = el.created_at;
      theme.name = el.name;
      theme.slug = el.slug;
      theme.updated_at = el.updated_at;
      theme.url = el.url;
      theme.game = game;

      return this.themesRepository.save(theme);
    });

    return await Promise.all(allThemes);
  }

  async addScreenshots(data: any[]) {
    const allImages = data.map((el) => {
      const image = new Screenshots();
      image.id = el.id;
      image.game = el.game;
      image.height = el.height;
      image.image_id = el.image_id;
      image.url = el.url;
      image.width = el.width;

      return this.screenshotsRepository.save(image);
    });

    return await Promise.all(allImages);
  }

  async addReleaseDates(data: any[]) {
    const allDates = data.map((el) => {
      const date = new ReleaseDates();
      date.id = el.id;
      date.category = el.category;
      date.created_at = el.created_at;
      date.date = el.date;
      date.game = el.game;
      date.human = el.human;
      date.m = el.m;
      date.platform = el.platform;
      date.region = el.region;
      date.updated_at = el.updated_at;
      date.y = el.y;

      return this.releaseDatesRepository.save(date);
    });

    return await Promise.all(allDates);
  }

  async addPlayerPerspective(data: any[]) {
    const allPerspectives = data.map((el) => {
      const player = new PlayerPerspectives();
      player.id = el.id;
      player.created_at = el.created_at;
      player.name = el.name;
      player.slug = el.slug;
      player.updated_at = el.updated_at;
      player.url = el.url;

      return this.playerRepository.save(player);
    });

    return await Promise.all(allPerspectives);
  }

  async addPlatforms(data: any[]) {
    const allPlatforms = data.map((el) => {
      const platform = new Platforms();
      platform.id = el.id;
      platform.abbreviation = el.abbreviation;
      platform.alternative_name = el.alternative_name;
      platform.category = el.category;
      platform.created_at = el.created_at;
      platform.name = el.name;
      platform.platform_logo = el.platform_logo;
      platform.slug = el.slug;
      platform.updated_at = el.updated_at;
      platform.url = el.url;
      platform.versions = el.versions;
      platform.websites = el.websites;

      return this.platformsRepository.save(platform);
    });

    return await Promise.all(allPlatforms);
  }

  async addInvolvedCompanies(data: any[]) {
    const allCompanies = data.map((el) => {
      const company = new InvolvedCompanies();
      company.id = el.id;
      company.company = el.company;
      company.created_at = el.created_at;
      company.developer = el.developer;
      company.game = el.game;
      company.porting = el.porting;
      company.publisher = el.publisher;
      company.supporting = el.supporting;
      company.updated_at = el.updated_at;

      return this.involvedCompaniesRepository.save(company);
    });

    return await Promise.all(allCompanies);
  }

  async addGenres(data: any[]) {
    const allGeneress = data.map((el) => {
      const genre = new Genres();
      genre.id = el.id;
      genre.created_at = el.created_at;
      genre.name = el.name;
      genre.slug = el.slug;
      genre.updated_at = el.updated_at;
      genre.url = el.url;

      return this.genresRepository.save(genre);
    });

    return await Promise.all(allGeneress);
  }

  async addGameModes(data: any[]) {
    const gameModes = data.map((el) => {
      const mode = new GameModes();
      mode.id = el.id;
      mode.created_at = el.created_at;
      mode.name = el.name;
      mode.slug = el.slug;
      mode.updated_at = el.updated_at;
      mode.url = el.url;

      return this.gameModesRepository.save(mode);
    });

    const allModes = await Promise.all(gameModes);

    return allModes;
  }

  async addGameEngines(data: any[]) {
    const gameEngines = data.map((el) => {
      const engine = new GameEngines();
      engine.id = el.id;
      engine.companies = el.companies;
      engine.created_at = el.created_at;
      engine.logo = el.logo;
      engine.name = el.name;
      engine.platforms = el.platforms;
      engine.slug = el.slug;
      engine.updated_at = el.updated_at;
      engine.url = el.url;

      return this.gameEnginesRepository.save(engine);
    });

    const engines = await Promise.all(gameEngines);

    return engines;
  }

  async addFranchises(data: any[]) {
    const allFranchises = data.map((el) => {
      const fr = new Franchises();
      fr.id = el['id'];
      fr.created_at = el['created_at'];
      fr.games = el['games'];
      fr.name = el['name'];
      fr.slug = el['slug'];
      fr.updated_at = el['updated_at'];
      fr.url = el['url'];

      return this.franchisesRepository.save(fr);
    });

    const franchisesData = await Promise.all(allFranchises);

    return franchisesData;
  }

  async addExternalGames(data: any[]) {
    const exGames = data.map((el) => {
      const game = new ExternalGames();
      game.id = el['id'];
      game.category = el['category'];
      game.created_at = el['created_at'];
      game.game = el['game'];
      game.name = el['name'];
      game.uid = el['uid'];
      game.updated_at = el['updated_at'];

      return this.externalGamesRepository.save(game);
    });
    const allGames = await Promise.all(exGames);

    return allGames;
  }

  async addCover(coverData: any) {
    const cover = new Cover();
    cover.id = coverData['id'];
    cover.alpha_channel = coverData['alpha_channel'];
    cover.animated = coverData['animated'];
    cover.game = coverData['game'];
    cover.height = coverData['height'];
    cover.image_id = coverData['image_id'];
    cover.url = coverData['url'];
    cover.width = coverData['width'];

    await this.coverRepository.save(cover);

    return cover;
  }

  async addCollection(collection: any[]) {
    const col = new Collection();
    col.id = collection['id'];
    col.created_at = collection['created_at'];
    col.games = collection['games'];
    col.name = collection['name'];
    col.slug = collection['slug'];
    col.updated_at = collection['updated_at'];
    col.url = collection['url'];

    await this.collectionRepository.save(col);

    return col;
  }

  private async addAlternativeNames(names: any[], id: number) {
    const alternativeNames = names.map((el) => {
      const name = new AlternativeNames(el['id'], el['comment'], el['name'], id);

      return this.alterNamesRepository.save(name);
    });

    const allNames = await Promise.all(alternativeNames);

    return allNames;
  }

  private async addAgeRating(ageRatings: any[], id: number) {
    const allRatings = ageRatings.map((el) => {
      const ageRating = new AgeRating(el['id'], el['category'], el['rating'], id);

      return this.ageRatingRepository.save(ageRating);
    });

    const ratings = await Promise.all(allRatings);

    return ratings;
  }

  private readFile(path: string) {
    try {
      const data = fs.readFileSync(path, 'utf-8');
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  private readDirectory() {
    const records = fs.readdirSync(this.path);
    console.log('Total records: ', records.length); // 100, 5000, 500000

    return records;
  }

  private random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

  /**
   * Wait for X seconds
   * @param secs seconds to wait for
   * @returns Promise<boolean>
   */
  private wait(secs: number) {
    return new Promise<boolean>((resolve, _) => {
      setTimeout(() => {
        resolve(true);
      }, secs * 1000);
    });
  }
}
