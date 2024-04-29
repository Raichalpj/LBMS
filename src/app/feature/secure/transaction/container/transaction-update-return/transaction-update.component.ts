import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ComponentBase } from '@shared/abstracts/component-base';
import { FormBase } from '@shared/contracts';
import { TransactionService } from '../../service/transaction.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-update',
  templateUrl: './transaction-update.component.html',
  styleUrls: ['./transaction-update.component.scss']
})
export class TransactionUpdateComponent extends ComponentBase  {
  newTranForm!:FormGroup;
  transactionId:number;

  constructor(private transerv:TransactionService, private route: ActivatedRoute,private fb:FormBuilder) { 
    super();
    this.transactionId=this.route.snapshot.params['id'];
    this.newTranForm = new FormGroup({
      bookId: new FormControl(''),
      patronName: new FormControl(''),
      transactionDate: new FormControl(''),
      returnDate: new FormControl(''),
    });
  }
  
  
  override initVariables(): void {
    //throw new Error('Method not implemented.');
  }
  override subscribeEvents(): void {
    console.log(this.transactionId)
    this.transerv.getTranById(this.transactionId).subscribe((tran:any)=>{
      console.log("inside method",tran);
      const formattedTransactionDate = tran[0].transactionDate ? new Date(tran[0].transactionDate).toISOString().split('T')[0] : '';
      const formattedReturnDate = tran[0].returnDate ? new Date(tran[0].returnDate).toISOString().split('T')[0] : '';
      this.newTranForm.setValue({
        bookId: tran[0].bookId,
        patronName: tran[0].patronName,
        transactionDate: formattedTransactionDate,
        returnDate: formattedReturnDate
      }),
      (error:any)=>{
        console.error('error loading data',error);
      }
    })
  }

  onSubmit():void{
    if(this.newTranForm.valid){
      const updatedTran={
        transactionId:this.transactionId,
        ...this.newTranForm.value
      };
      this.transerv.updateReturnTransaction(updatedTran.transactionId,updatedTran).subscribe(
        (res)=>{
          console.log('updated',res);
        },
        (error)=>{
          console.log('error',error)
        }
      )
    }
  }
  override load(): void {
    this.bindForm();
  }
  buildForm(): void {
    // this.newTranForm = new FormGroup({
    //   bookId: new FormControl(''),
    //   patronName: new FormControl(''),
    //   transactionDate: new FormControl(''),
    //   returnDate: new FormControl(''),
    // });
  }
  override unload(): void {
    //throw new Error('Method not implemented.');
  }


  

  bindForm(): void {
    //hrow new Error('Method not implemented.');
  }
  resetForm(): void {
    //throw new Error('Method not implemented.');
  }



}
