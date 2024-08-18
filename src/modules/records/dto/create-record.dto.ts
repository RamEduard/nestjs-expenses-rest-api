import { Transform } from 'class-transformer';
import { IsString, IsNotEmpty, IsDate, IsUUID, ValidateIf, IsOptional } from 'class-validator';

export class CreateRecordDto {
  @ValidateIf((o) => typeof o.id === 'string')
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsNotEmpty()
  readonly amount: string;

  @IsString()
  @IsNotEmpty()
  readonly currencyCode: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ValidateIf((o) => typeof o.description === 'string')
  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  @IsNotEmpty()
  readonly date: Date;

  @ValidateIf((o) => typeof o.accountId === 'string')
  @IsUUID()
  @IsOptional()
  readonly accountId?: string;

  @ValidateIf((o) => typeof o.categoryId === 'string')
  @IsUUID()
  @IsOptional()
  readonly categoryId?: string;

  @ValidateIf((o) => typeof o.userId === 'string')
  @IsUUID()
  @IsOptional()
  readonly userId?: string;
}
