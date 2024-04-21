import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionListComponent } from './container/transaction-list/transaction-list.component';
import { TransactionAddComponent } from './container/transaction-add/transaction-add.component';
import { TransactionUpdateComponent } from './container/transaction-update/transaction-update.component';

const routes: Routes = [
  {
    path:'',
    component:TransactionListComponent
  },
  {
    path:'add',
    component:TransactionAddComponent
  },
  {
    path:'update/:id',
    component:TransactionUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
