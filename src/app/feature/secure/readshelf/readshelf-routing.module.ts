import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadshelfListComponent } from './container/readshelf-list/readshelf-list.component';

const routes: Routes = [
  {
    path:'',
    component:ReadshelfListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadshelfRoutingModule { }
