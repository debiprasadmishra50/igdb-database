import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './test/user.entity';
import * as fs from 'fs';
import { Photo } from './test/photo.entity';
import { Game } from './entities/game.entity';
import { AgeRating } from './entities/age-rating.entity';

@Injectable()
export class DemoService {
  private _path = `${__dirname}/../../sample-igdb-data/`;
  public get path() {
    return this._path;
  }
  public set path(value) {
    this._path = value;
  }

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Photo) private readonly photoRepository: Repository<Photo>,
  ) {}

  async testUserPhoto() {
    const photo1 = new Photo(1, 'demo.com', 1);
    const photo2 = new Photo(2, 'why.com', 1);
    const photo3 = new Photo(3, 'thisis.com', 1);

    const user = new User(1, 'demo', [photo1, photo2, photo3]);

    await this.photoRepository.save([photo1, photo2, photo3]);
    await this.userRepository.save(user);

    await this.wait(2);
    console.log(await this.userRepository.find());
    // console.log(await this.photoRepository.findOne({ where: { id: 1 } }));
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
