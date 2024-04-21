import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorListComponent } from './container/author-list/author-list.component';
import { AuthorUpdateComponent } from './container/author-update/author-update.component';
import { AuthorAddComponent } from './container/author-add/author-add.component';


const routes: Routes = [
  {
    path:'',
    component:AuthorListComponent
  },
  {
    path:'update/:id',
    component:AuthorUpdateComponent
  },
  {
    path:'add',
    component:AuthorAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
