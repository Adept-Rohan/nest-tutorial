import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsServices {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const proId = new Date().toString();
    const newProduct = new Product(proId, title, desc, price);
    this.products.push(newProduct);
    return proId;
  }

  getProducts() {
    return [...this.products];
  }

  getSingleProduct(productId: string) {
    const product = this.products.find((prod) => prod.id === productId);
    if (!product) throw new NotFoundException();
    return { ...product };
  }
}
