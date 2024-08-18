import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AccountEntity } from './entities/account.entity';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(AccountEntity)
    private accountsRepository: Repository<AccountEntity>,
  ) {}

  create(createAccountDto: CreateAccountDto): Promise<AccountEntity> {
    const account = this.accountsRepository.create(createAccountDto);
    return this.accountsRepository.save(account);
  }

  findAll(): Promise<AccountEntity[]> {
    return this.accountsRepository.find();
  }

  findOne(id: string): Promise<AccountEntity> {
    return this.accountsRepository.findOne({ where: { id } });
  }

  async update(id: string, updateAccountDto: UpdateAccountDto): Promise<AccountEntity> {
    await this.accountsRepository.update(id, updateAccountDto);
    return this.accountsRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.accountsRepository.delete(id);
  }
}
