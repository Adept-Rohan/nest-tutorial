import { Module } from '@nestjs/common';
import { BookController } from './books.controller';
import { BookServices } from './books.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schemas/books.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
  controllers: [BookController],
  providers: [BookServices],
})
export class BookModule {}
