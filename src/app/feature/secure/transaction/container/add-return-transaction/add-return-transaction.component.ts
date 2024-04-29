import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComponentBase } from '@shared/abstracts/component-base';
import { TransactionService } from '../../service/transaction.service';

@Component({
  selector: 'app-add-return-transaction',
  templateUrl: './add-return-transaction.component.html',
  styleUrls: ['./add-return-transaction.component.scss']
})
export class AddReturnTransactionComponent extends ComponentBase{

  newTranForm!:FormGroup;

  override initVariables(): void {
    this.newTranForm=this.formBuilder.group({
      bookId:['',Validators.required],
      patName:[null,Validators.required],
      transactionDate:[null,Validators.required],
      returnDate:[null,Validators.required]
    })
  }

  onSubmit():void{
    if(this.newTranForm.valid){
      this.tranServ.addReturnTransaction(this.newTranForm.value).subscribe(res=>{
        console.log('success',res);
      },error=>{
        console.error('error',error)
      })
    }
  }
  override subscribeEvents(): void {
    throw new Error('Method not implemented.');
  }
  override load(): void {
    throw new Error('Method not implemented.');
  }
  override unload(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private formBuilder: FormBuilder,private tranServ:TransactionService) { 
    super()
  }


}
