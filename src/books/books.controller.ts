import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BookServices } from './books.service';
import { Book } from './schemas/books.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BookController {
  constructor(private bookService: BookServices) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  async getBook(
    @Param('id')
    id: string,
  ) {
    return this.bookService.findById(id);
  }

  @Post()
  async createBook(
    @Body()
    book: CreateBookDto,
  ): Promise<Book> {
    return this.bookService.create(book);
  }

  @Patch(':id')
  async updateBook(
    @Param('id')
    id: string,
    @Body() book: UpdateBookDto,
  ): Promise<Book> {
    console.log(id, book);
    return this.bookService.updateById(id, book);
  }

  @Delete(':id')
  async deleteBook(
    @Param('id')
    id: string,
  ) {
    return this.bookService.deleteById(id);
  }
}
