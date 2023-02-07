import { Injectable } from '@nestjs/common';
import { BcryptRepositoryService } from './repositories/services';

@Injectable()
export class AppService {
  constructor(
    private readonly bcryptRepositoryService: BcryptRepositoryService,
  ) {}
  getHello(): string {
    return 'Hello World - Alternar Test 1.0.0';
  }
  async testBcrypt(text: string): Promise<string> {
    return await this.bcryptRepositoryService.createPlayerPassword(text);
  }
}
