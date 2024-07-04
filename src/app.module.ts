import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { ModulesModule } from './modules/modules.module';

@Module({
  imports: [DatabaseModule, ModulesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
