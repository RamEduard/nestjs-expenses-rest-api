import { IsString, IsNotEmpty, IsOptional, ValidateIf, IsUUID } from 'class-validator';
import { CategoryTypes } from '../entities/category.type';

export class CreateCategoryDto {
  @ValidateIf((o) => typeof o.id === 'string')
  @IsUUID()
  @IsOptional()
  id?: string;

  @ValidateIf((o) => typeof o.description === 'string')
  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: CategoryTypes;
}
