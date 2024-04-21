import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './container/book-list/book-list.component';
import { BookAddComponent } from './container/book-add/book-add.component';
import { BookUpdateComponent } from './container/book-update/book-update.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
{
  path:'add',
  component:BookAddComponent
},
{
  path:'update/:id',
  component:BookUpdateComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
