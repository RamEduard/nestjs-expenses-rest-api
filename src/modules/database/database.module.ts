import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountEntity } from '../accounts/entities/account.entity';
import { CategoryEntity } from '../categories/entities/category.entity';
import { RecordEntity } from '../records/entities/record.entity';
import { UserEntity } from '../users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'nestjs_expenses_dev',
      entities: [AccountEntity, CategoryEntity, RecordEntity, UserEntity],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
