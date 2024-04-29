import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FineRoutingModule } from './fine-routing.module';
import { FineListComponent } from './container/fine-list/fine-list.component';
import { FineUpdateComponent } from './container/fine-update/fine-update.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FineListComponent,
    FineUpdateComponent
  ],
  imports: [
    CommonModule,
    FineRoutingModule,
    ReactiveFormsModule
  ]
})
export class FineModule { }
