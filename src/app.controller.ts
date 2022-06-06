import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DemoService } from './demo.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly demoService: DemoService) {
    this.appService.addIGDBGamesData();
    // this.demoService.testUserPhoto();
  }

  @Get('games')
  async getGames() {
    return await this.appService.addIGDBGamesData();
  }
}
