import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsServices } from './products.serivce';

@Module({
  controllers: [ProductsController],
  providers: [ProductsServices],
})
export class ProductModule {}
