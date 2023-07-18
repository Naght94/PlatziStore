import { IsString, IsUrl, IsNotEmpty } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @IsUrl()
  @IsNotEmpty()
  readonly addres: string;
}

export class updateProductDto extends PartialType(CreateUserDto) {}
