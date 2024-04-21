import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorListComponent } from './container/author-list/author-list.component';
import { AuthorUpdateComponent } from './container/author-update/author-update.component';
import { AuthorAddComponent } from './container/author-add/author-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [AuthorListComponent, AuthorUpdateComponent, AuthorAddComponent],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthorModule { }
