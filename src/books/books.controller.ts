import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookServices } from './books.service';
import { Book } from './schemas/books.schema';

@Controller('books')
export class BookController {
  constructor(private bookService: BookServices) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Post()
  async createBook(
    @Body()
    book,
  ): Promise<Book> {
    return this.bookService.create(book);
  }
}
