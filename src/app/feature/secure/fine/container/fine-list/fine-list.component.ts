import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { FineService } from '../../service/fine.service';

@Component({
  selector: 'app-fine-list',
  templateUrl: './fine-list.component.html',
  styleUrls: ['./fine-list.component.scss']
})
export class FineListComponent extends ComponentBase {

  fines:any
  override initVariables(): void {
    //hrow new Error('Method not implemented.');
  }
  override subscribeEvents(): void {
    this.fineServ.getFineList().subscribe(val=>{
      this.fines=val;
      console.log(val);
    })
  }
  override load(): void {
  //hrow new Error('Method not implemented.');
  }
  override unload(): void {
    //throw new Error('Method not implemented.');
  }

  constructor(private fineServ:FineService) {
    super()
   }

 

}
