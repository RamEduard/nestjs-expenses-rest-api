import { Module } from '@nestjs/common';
import { AccountsModule } from './accounts/accounts.module';
import { CategoriesModule } from './categories/categories.module';
import { RecordsModule } from './records/records.module';
import { UsersModule } from './users/users.module';
import { AuthorizationModule } from './authorization/authorization.module';

@Module({
  imports: [AccountsModule, CategoriesModule, RecordsModule, UsersModule, AuthorizationModule],
})
export class ModulesModule {}
