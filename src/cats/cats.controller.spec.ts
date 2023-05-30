import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all cats', async () => {
      const cats = await controller.findAll()
      expect(cats.length).toBe(3);
    });
  });

  describe('/findByFilter', () => {
    it('should return 2 boy cats', async () => {
      const cats = await controller.findByFilter('M')
      expect(cats.length).toBe(2);
    });
  });

  describe('/:id', () => {
    it('should return Duke', async () => {
      const cat = await controller.findOne('1')
      expect(cat.name).toBe('Duke');
    });
  });
});
