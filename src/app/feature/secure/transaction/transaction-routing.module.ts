import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionListComponent } from './container/transaction-list/transaction-list.component';
import { TransactionAddComponent } from './container/transaction-add-borrow/transaction-add.component';

import { AddReturnTransactionComponent } from './container/add-return-transaction/add-return-transaction.component';
import { TransactionUpdateComponent } from './container/transaction-update-return/transaction-update.component';

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
    path:'add-return',
    component:AddReturnTransactionComponent
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
