import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { TransactionService } from '../../service/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent extends ComponentBase {
  
  transactions:any[]=[];

  override initVariables(): void {
    //throw new Error('Method not implemented.');
  }
  override subscribeEvents(): void {
    this.TranServ.getTransactionList().subscribe(val=>{
      this.transactions=val;
      console.log(val)
    })
  }
  override load(): void {
    //throw new Error('Method not implemented.');
  }
  override unload(): void {
    //throw new Error('Method not implemented.');
  }

  constructor(private TranServ:TransactionService) {
    super()
   }

  

}
