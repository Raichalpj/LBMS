import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadshelfRoutingModule } from './readshelf-routing.module';
import { ReadshelfListComponent } from './container/readshelf-list/readshelf-list.component';



@NgModule({
  declarations: [ReadshelfListComponent],
  imports: [
    CommonModule,
    ReadshelfRoutingModule
  ]
})
export class ReadshelfModule { }
