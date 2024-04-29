import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddReturnTransactionComponent } from './container/add-return-transaction/add-return-transaction.component';
import { TransactionAddComponent } from './container/transaction-add-borrow/transaction-add.component';
import { TransactionListComponent } from './container/transaction-list/transaction-list.component';
import { TransactionUpdateComponent } from './container/transaction-update-return/transaction-update.component';


@NgModule({
  declarations: [
    AddReturnTransactionComponent,
    TransactionAddComponent,
    TransactionListComponent,
    TransactionUpdateComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    ReactiveFormsModule
  ]
})
export class TransactionModule { }
