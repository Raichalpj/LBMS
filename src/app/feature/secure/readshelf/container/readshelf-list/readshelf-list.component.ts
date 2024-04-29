import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';

import { AppConfig } from '@core/configs';
import { ReadshelfService } from '../../servie/readshelf.service';

@Component({
  selector: 'app-readshelf-list',
  templateUrl: './readshelf-list.component.html',
  styleUrls: ['./readshelf-list.component.scss']
})
export class ReadshelfListComponent extends ComponentBase {
  userId!:number
  books:any[]=[];

  constructor(private rhserv:ReadshelfService) { 
    super()

    try {
      // this.userId = storedUserId ? parseInt(JSON.parse(storedUserId!), 10) : null;
      this.userId = JSON.parse(localStorage.getItem(AppConfig.auth.token)||'{}').userId;
      console.log(this.userId);
    } catch (error) {
      console.error("Error parsing user ID from local storage:", error);
      //this.userId = null; // Set userId to null if parsing fails
    }
  }

  override initVariables(): void {
    //throw new Error('Method not implemented.');
  }
  override subscribeEvents(): void {
    
    this.rhserv.getReadHist(this.userId).subscribe((rh:any)=>{
     this.books=rh;
     console.log(this.books)

    })
  }
  override load(): void {
    //throw new Error('Method not implemented.');
  }
  override unload(): void {
    //throw new Error('Method not implemented.');
  }

 
 
}
