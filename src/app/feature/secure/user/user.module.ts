import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './container/user-list/user-list.component';
import { UserUpdateComponent } from './container/user-update/user-update.component';
import { UserAddComponent } from './container/user-add/user-add.component';


@NgModule({
  declarations: [UserListComponent,UserUpdateComponent,UserAddComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,


  ]
})
export class UserModule { }
