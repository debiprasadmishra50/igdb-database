import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoService } from './demo.service';
import { AgeRating } from './entities/age-rating.entity';
import { AlternativeNames } from './entities/alternative-names.entity';
import { ArtWorks } from './entities/artworks.entity';
import { Collection } from './entities/collection.entity';
import { Cover } from './entities/cover.entity';
import { ExternalGames } from './entities/external-games.entity';
import { Franchises } from './entities/franchises.entity';
import { GameEngines } from './entities/game-engines.entity';
import { GameModes } from './entities/game-modes.entity';
import { Game } from './entities/game.entity';
import { Genres } from './entities/genres.entity';
import { InvolvedCompanies } from './entities/involved-companies.entity';
import { Platforms } from './entities/platforms.entity';
import { PlayerPerspectives } from './entities/player-perspective.entity';
import { ReleaseDates } from './entities/release-dates.entity';
import { Screenshots } from './entities/screenshot.entity';
import { Themes } from './entities/themes.entity';
import { Video } from './entities/video.entity';
import { Website } from './entities/website.entity';
import { Photo } from './test/photo.entity';
import { User } from './test/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: +configService.get('DB_PORT'),
          username: configService.get('DB_USER'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get(`DATABASE`),
          // entities: ["dist/**/*.entity{.ts,.js}"],
          autoLoadEntities: true,
          synchronize: true,
          retryAttempts: 2,
          dropSchema: true,
        };
      },
    }),
    TypeOrmModule.forFeature([
      User,
      Photo,
      Game,
      AgeRating,
      AlternativeNames,
      ArtWorks,
      Collection,
      Cover,
      ExternalGames,
      Franchises,
      GameEngines,
      GameModes,
      Genres,
      InvolvedCompanies,
      Platforms,
      PlayerPerspectives,
      ReleaseDates,
      Screenshots,
      Themes,
      Video,
      Website,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, DemoService],
})
export class AppModule {}
