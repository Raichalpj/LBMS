import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookDetailsRoutingModule } from './book-details-routing.module';
import { BookDetailsComponent } from './container/book-details/book-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BookDetailsRoutingModule,
    MatCardModule
  ]
})
export class BookDetailsModule { }
