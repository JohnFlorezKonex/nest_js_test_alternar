import { Module } from '@nestjs/common';
import { AlternarController } from './controllers/alternar.controller';
import { AlternarService } from './services/alternar.service';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreTypeOrmConfigService } from './config/database.config';
import { RepositoryModule } from './repositories/repository.module';
import {
  BcryptRepositoryService,
  BetRepositoryService,
  PlayerRepositoryService,
  SessionRepositoryService,
} from './repositories/services';
import { HttpModule } from '@nestjs/axios';
import { PingController } from './controllers/ping.controller';
import { PingService } from './services/ping.service';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: CoreTypeOrmConfigService,
    }),
    RepositoryModule.forFeature([
      BcryptRepositoryService,
      SessionRepositoryService,
      PlayerRepositoryService,
      BetRepositoryService,
    ]),
    HttpModule,
  ],
  controllers: [AlternarController, PingController],
  providers: [AlternarService, PingService],
})
export class AppModule {
  static port: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.port = this.configService.get('PORT');
  }
}
