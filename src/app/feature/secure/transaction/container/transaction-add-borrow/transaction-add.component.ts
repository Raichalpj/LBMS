import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ComponentBase } from '@shared/abstracts/component-base';
import { TransactionService } from '../../service/transaction.service';


@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.scss']
})
export class TransactionAddComponent extends ComponentBase 

{
  newTranForm!:FormGroup;

  override initVariables(): void {
    this.newTranForm=this.formBuilder.group({
      bookId:['',Validators.required],
      patName:[null,Validators.required],
      transactionDate:[null,Validators.required],
      dueDate:[null,Validators.required]
    })
  }
  onSubmit():void{
    if(this.newTranForm.valid){
      this.tranServ.addBorrowTransaction(this.newTranForm.value).subscribe(res=>{
        console.log('success',res)
      },error=>{
        console.error('error',error)
      })
    }
  }
  override subscribeEvents(): void {
    //throw new Error('Method not implemented.');
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
