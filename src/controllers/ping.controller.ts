import { Controller, Get } from '@nestjs/common';
import { PingService } from 'src/services/ping.service';

@Controller()
export class PingController {
  constructor(private readonly pingService: PingService) {}

  @Get('ping')
  async test(): Promise<any> {
    const testApi = await this.pingService.test();
    return { result: 'pong 7', testApi };
  }
}
