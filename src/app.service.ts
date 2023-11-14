import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!! im hello 에요';
  }

  getTest(): string {
    return 'test funtion';
  }
}
