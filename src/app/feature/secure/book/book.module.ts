import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './container/book-list/book-list.component';
import { BookAddComponent } from './container/book-add/book-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookUpdateComponent } from './container/book-update/book-update.component';



@NgModule({
  declarations: [BookListComponent, BookAddComponent, BookUpdateComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BookModule { }
