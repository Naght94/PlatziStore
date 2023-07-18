import { Controller, Get, Query } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return `user: limit=> ${limit} offset=> ${offset}`;
  }
}
