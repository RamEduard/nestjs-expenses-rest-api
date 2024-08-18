import { Controller, Post, Body } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthorizationController {
  constructor(private readonly authService: AuthorizationService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
