import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';
import { readFile } from 'fs/promises';

@Injectable()
export class CatsService {
  async findAll(): Promise<Cat[]> {
    const cats: Cat[] = await this.readDb()
    return cats
  }

  async findOne(id: number): Promise<Cat> {
    const cats: Cat[] = await this.readDb()
    return cats.find(cat => cat.id === id)
  }

  async findByFilter(sex: string): Promise<Cat[]> {
    const cats: Cat[] = await this.readDb()
    console.log(sex)
    return cats.filter(cat => cat.sex === sex)
  }

  async readDb(): Promise<Cat[]> {
    try {
      const json = await readFile('./databases/cats.json', 'utf8')
      const cats = JSON.parse(json)
      return cats
    } catch (err) {
      console.error('Error occurred while reading directory:', err)
    }
  }
}


