import { Controller, Get } from '@nestjs/common';
import { AlternarService } from 'src/services/alternar.service';

@Controller()
export class PingController {
  constructor(private readonly alternarService: AlternarService) {}

  @Get('ping')
  async test(): Promise<any> {
    const testApi = await this.alternarService.test();
    return { result: 'pong 6', testApi };
  }
}
