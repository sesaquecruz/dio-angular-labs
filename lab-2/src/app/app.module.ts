import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCartComponent } from './components/book-cart/book-cart.component';
import { FiltersComponent } from './components/book-cart/filters/filters.component';
import { ProductListComponent } from './components/book-cart/product-list/product-list.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ProductItemComponent } from './components/book-cart/product-list/product-item/product-item.component';
import { BooksService } from './components/book-cart/product-list/services/product-list.service';

@NgModule({
  declarations: [
    AppComponent,
    BookCartComponent,
    FiltersComponent,
    ProductListComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
