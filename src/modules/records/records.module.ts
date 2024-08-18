import { Module } from '@nestjs/common';
import { RecordsService } from './records.service';
import { RecordsController } from './records.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordEntity } from './entities/record.entity';
import { CategoriesModule } from '../categories/categories.module';
import { AccountsModule } from '../accounts/accounts.module';

@Module({
  imports: [TypeOrmModule.forFeature([RecordEntity]), AccountsModule, CategoriesModule],
  controllers: [RecordsController],
  providers: [RecordsService],
  exports: [TypeOrmModule],
})
export class RecordsModule {}
