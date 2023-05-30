import { Controller, Get, Param, Query } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll() {
    return this.catsService.findAll();
  }

  @Get('findByFilter')
  async findByFilter(@Query('sex') sex: string) {
    console.log(sex)
    return this.catsService.findByFilter(sex);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }
}
