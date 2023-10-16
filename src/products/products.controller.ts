import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsServices } from './products.serivce';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsServices) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    const generatedId = this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );

    return { id: generatedId };
  }

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') proId: string) {
    return this.productsService.getSingleProduct(proId);
  }
}
