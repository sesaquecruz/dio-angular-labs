import { Injectable } from "@angular/core";
import  { Book } from "../models/books.model";

@Injectable()
export class BooksService {
  private books: Book[] = [
    { id: '1', name: 'The Last Wish' , price: 7.99, category: "Adventure", img:"assets/images/book1.jpg"},
    { id: '2', name: 'Sword of Destiny' , price: 9.99, category: "Adventure", img:"assets/images/book2.jpg"},
    { id: '3', name: 'Baptism of Fire' , price: 9.99, category: "Adventure", img:"assets/images/book3.jpg"},
    { id: '1', name: 'The Tower of Swallows' , price: 10.99, category: "Adventure", img:"assets/images/book4.jpg"},
    { id: '2', name: 'The Lady of the Lake' , price: 12.99, category: "Adventure", img:"assets/images/book5.jpg"},
    { id: '3', name: 'Season of Storms' , price: 15.99, category: "Adventure", img:"assets/images/book6.jpg"}
  ];

  getBooks(){
      return this.books;
  }
}
