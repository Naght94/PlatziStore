import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Res,

  //ParseIntPipe,
} from '@nestjs/common';

import { Response } from 'express';
import { ParseIntPipe } from '../common/parse-int/parse-int.pipe';
import { ProductService } from './../services/product.service';
import { CreateProductDto, updateProductDto } from './../dtos/Products.dtos';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products: limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    // };
    return this.productsService.FindAll();
  }

  @Get('filter')
  getProductFilter() {
    return `I am a filter`;
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: number) {
    //response.status(200).send({ message: `product ${id}` });
    return this.productsService.findOne(id);
  }

  @Post()
  create(@Body('') payload: CreateProductDto) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: updateProductDto) {
    return this.productsService.update(payload, id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.delete(id);
  }
}
