import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ComponentBase } from '@shared/abstracts/component-base';
import { FormBase } from '@shared/contracts';
import { FineService } from '../../service/fine.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-fine-update',
  templateUrl: './fine-update.component.html',
  styleUrls: ['./fine-update.component.scss']
})
export class FineUpdateComponent extends ComponentBase implements FormBase {
  
  updateFineForm!:FormGroup;
  fineId:number;
  constructor(private route: ActivatedRoute,private fineServ:FineService) {
    super();
    this.fineId=this.route.snapshot.params['id'];

   }
  
  
  
  
  override initVariables(): void {
    //throw new Error('Method not implemented.');
  }
  override subscribeEvents(): void {
   this.fineServ.getFineById(this.fineId).subscribe((fine:any)=>{
    this.updateFineForm.setValue({
      patronId:fine[0].patronId,
      fineAmount:fine[0].fineAmount,
      bookId:fine[0].bookId,
      paymentStatus:fine[0].paymentStatus
    })

   })
  }
  onSubmit():void{
    if(this.updateFineForm.valid){
      const updatedFine={
        fineId:this.fineId,
        ...this.updateFineForm.value
      }
      this.fineServ.updateFine(updatedFine.fineId,updatedFine).subscribe(
        (res)=>{
          console.log('updated',res)
        },
        (error)=>{
          console.error('error',error)
        }
      )
    }
  }
  
  override load(): void {
    this.buildForm();
  }
  override unload(): void {
    throw new Error('Method not implemented.');
  }


  buildForm(): void {
    this.updateFineForm=new FormGroup({
      patronId:new FormControl(null),
      fineAmount:new FormControl(''),
      bookId:new FormControl(null),
      paymentStatus:new FormControl(''),


    })
  }
  bindForm(): void {
    throw new Error('Method not implemented.');
  }
  resetForm(): void {
    throw new Error('Method not implemented.');
  }

 

}
