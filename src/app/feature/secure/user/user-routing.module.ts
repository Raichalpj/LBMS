import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './container/user-list/user-list.component';
import { UserAddComponent } from './container/user-add/user-add.component';
import { UserUpdateComponent } from './container/user-update/user-update.component';

const routes: Routes = [
  {
    path:'',
    component:UserListComponent
  },
  {
    path:'add',
    component:UserAddComponent
  },
  {
    path:'update/:id',
    component:UserUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
