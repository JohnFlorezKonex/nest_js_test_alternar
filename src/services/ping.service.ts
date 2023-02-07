import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class PingService {
  constructor(private config: ConfigService, private http: HttpService) {}
  async test() {
    const test = await this.http.get(
      'https://rickandmortyapi.com/api/character',
    );
    const result = (await lastValueFrom(test)).data;
    console.log(
      '🚀 ~ file: alternar.service.ts:468 ~ AlternarService ~ result ~ result',
      result,
    );
    return result;
  }
}
