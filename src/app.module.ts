import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { OrderController } from './controllers/order.controller';
import { UserController } from './controllers/user.controller';
import { CustomerController } from './controllers/customer.controller';
import { BrandController } from './controllers/brand.controller';
import { ProductService } from './services/product.service';
import { BrandsService } from './services/brands.service';
import { CategoriesService } from './services/categories.service';
import { UsersService } from './services/users.service';
import { CustomersService } from './services/customers.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    OrderController,
    UserController,
    CustomerController,
    BrandController,
  ],
  providers: [
    AppService,
    ProductService,
    BrandsService,
    CategoriesService,
    UsersService,
    CustomersService,
  ],
})
export class AppModule {}
