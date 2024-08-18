import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { RecordEntity } from './entities/record.entity';
import { CategoryEntity } from '../categories/entities/category.entity';
import { AccountEntity } from '../accounts/entities/account.entity';

@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(RecordEntity)
    private recordsRepository: Repository<RecordEntity>,
    @InjectRepository(CategoryEntity)
    private categoriesRepository: Repository<CategoryEntity>,
    @InjectRepository(AccountEntity)
    private accountsRepository: Repository<AccountEntity>,
  ) {}

  async validateCategoryAndAccount(categoryId: string, accountId: string): Promise<void> {
    const category = await this.categoriesRepository.findOne({ where: { id: categoryId } });
    if (!category) {
      throw new NotFoundException(`Category with ID ${categoryId} not found`);
    }

    const account = await this.accountsRepository.findOne({ where: { id: accountId } });
    if (!account) {
      throw new NotFoundException(`Account with ID ${accountId} not found`);
    }
  }

  async create(createRecordDto: CreateRecordDto): Promise<RecordEntity> {
    await this.validateCategoryAndAccount(createRecordDto.categoryId, createRecordDto.accountId);
    const record = this.recordsRepository.create(createRecordDto);
    return this.recordsRepository.save(record);
  }

  async update(id: string, updateRecordDto: UpdateRecordDto): Promise<RecordEntity> {
    await this.validateCategoryAndAccount(updateRecordDto.categoryId, updateRecordDto.accountId);
    await this.recordsRepository.update(id, updateRecordDto);
    return this.recordsRepository.findOne({ where: { id } });
  }

  findAll(): Promise<RecordEntity[]> {
    return this.recordsRepository.find();
  }

  findOne(id: string): Promise<RecordEntity> {
    return this.recordsRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.recordsRepository.delete(id);
  }
}
