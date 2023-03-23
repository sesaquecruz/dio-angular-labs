import { Component, Input } from '@angular/core';
import { Book } from '../models/books.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: []
})
export class ProductItemComponent {
  @Input()
  book!: Book
}
