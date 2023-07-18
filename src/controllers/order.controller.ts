import { Controller, Get, Query } from '@nestjs/common';

@Controller('order')
export class OrderController {
  @Get()
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return `: limit=> ${limit} offset=> ${offset}`;
  }
}
