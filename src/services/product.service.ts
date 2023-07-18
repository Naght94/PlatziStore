import { Injectable, NotFoundException } from '@nestjs/common';
import { Products } from './../entities/product.entity';
import { CreateProductDto, updateProductDto } from './../dtos/Products.dtos';
@Injectable()
export class ProductService {
  private counterId = 1;
  private products: Products[] = [
    {
      id: 1,
      name: 'product 1',
      description: 'bla bla',
      price: 122,
      stock: 1,
      image: '',
    },
  ];

  FindAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id == id);
    if (!product) {
      throw new NotFoundException(`Product Id: ${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product Id: ${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
  }

  update(payload: updateProductDto, id: number) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.findIndex((item) => item.id == id);
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }
}
