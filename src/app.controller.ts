import { Controller, Get, HttpCode, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('bethan')
  getBethan(): string {
    return this.appService.getBethan();
  }
  @Get('teapot')
  @HttpCode(418)
  getTeapot(@Res({ passthrough: true }) res: Response): number {
    return this.appService.getTeapotCode(res);
  }
}
