import { IsString, IsUrl, IsNotEmpty } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class updateProductDto extends PartialType(CreateBrandDto) {}
