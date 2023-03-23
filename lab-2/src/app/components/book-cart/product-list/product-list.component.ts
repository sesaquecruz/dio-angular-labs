import { Component, OnInit } from '@angular/core';
import { Book } from './models/books.model';
import { BooksService } from './services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: []
})
export class ProductListComponent implements OnInit {
  books: Book[] = [];
  booksService: BooksService;

  constructor (booksService: BooksService) {
    this.booksService = booksService;
  }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }
}
