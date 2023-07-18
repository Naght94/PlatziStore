import { Controller, Get, Query } from '@nestjs/common';

@Controller('brand')
export class BrandController {
  @Get()
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return `brand: limit=> ${limit} offset=> ${offset}`;
  }
}
