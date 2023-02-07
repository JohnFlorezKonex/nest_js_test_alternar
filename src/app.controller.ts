import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ping')
  async ping(): Promise<any> {
    const test = await this.appService.testBcrypt('hola jhon');
    return { result: 'pong test 4', test };
  }
}
