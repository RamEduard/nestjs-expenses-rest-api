import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthorizationController } from './authorization.controller';
import { AuthorizationService } from './authorization.service';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'LOCALHOST_SECRET_KEY',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthorizationService, JwtStrategy, UsersService],
  controllers: [AuthorizationController],
  exports: [AuthorizationService],
})
export class AuthorizationModule {}
