import { IsString, IsNotEmpty, IsEmail, IsOptional, IsUUID, ValidateIf } from 'class-validator';

export class CreateUserDto {
  @ValidateIf((o) => typeof o.id === 'string')
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
