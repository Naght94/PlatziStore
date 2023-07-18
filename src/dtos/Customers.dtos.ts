import { IsString, IsNumber, IsNotEmpty, IsPositive } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomersDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly age: string;

  @IsPositive()
  @IsNotEmpty()
  @IsNumber()
  readonly number: string;
}

export class updateProductDto extends PartialType(CreateCustomersDto) {}
