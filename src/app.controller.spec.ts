import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Response } from 'express';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('/bethan', () => {
    it('should return "Bethan is Amazing!"', () => {
      expect(appController.getBethan()).toBe('Bethan is Amazing!');
    });
  });

  describe('/teapot', () => {
    it('should return 418', () => {
      expect(appController.getTeapot({ statusCode: 418 } as Response)).toBe(418);
    });
  });
});
