import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all cats', async () => {
      const cats = await service.findAll()
      expect(cats.length).toBe(3);
    });
  });

  describe('/findByFilter', () => {
    it('should return 2 boy cats', async () => {
      const cats = await service.findByFilter('M')
      expect(cats.length).toBe(2);
    });
  });

  describe('/:id', () => {
    it('should return Duke', async () => {
      const cat = await service.findOne(1)
      expect(cat.name).toBe('Duke');
    });
  });

  describe('readDb', () => {
    it('should return json', async () => {
      const cats = await service.readDb()
      expect(cats.length).toBe(3);
    });
  });
});
