import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getBethan(): string {
    return 'Bethan is Amazing!';
  }

  getTeapotCode(res: Response): number {
    return res.statusCode;
  }
}
