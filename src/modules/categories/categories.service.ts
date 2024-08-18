import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CategoryEntity } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoriesRepository: Repository<CategoryEntity>,
  ) {}

  create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
    const category = this.categoriesRepository.create(createCategoryDto);
    return this.categoriesRepository.save(category);
  }

  findAll(): Promise<CategoryEntity[]> {
    return this.categoriesRepository.find();
  }

  findOne(id: string): Promise<CategoryEntity> {
    return this.categoriesRepository.findOne({ where: { id } });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
    await this.categoriesRepository.update(id, updateCategoryDto);
    return this.categoriesRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.categoriesRepository.delete(id);
  }
}
