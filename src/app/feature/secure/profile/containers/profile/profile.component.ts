import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { UserService } from '../../../user/service/user.service';
import { ActivatedRoute } from '@angular/router';
import { AppConfig } from '@core/configs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends ComponentBase {
 
  userId!:any;

  constructor(private userServ:UserService,private route:ActivatedRoute) {
    super();
    
   // const storedUserId = localStorage.getItem('userId');
    try {
      // this.userId = storedUserId ? parseInt(JSON.parse(storedUserId!), 10) : null;
      this.userId = JSON.parse(localStorage.getItem(AppConfig.auth.token)||'{}').userId;
      console.log(this.userId);
    } catch (error) {
      console.error("Error parsing user ID from local storage:", error);
      this.userId = null; // Set userId to null if parsing fails
    }
    
  }

  /* Public Methods */
  initVariables(): void { }

  subscribeEvents(): void { 
    console.log(this.userId);
    this.userServ.getUserById(this.userId).subscribe((user:any)=>{
      console.log(user);
    })
  }

  load(): void { }

  unload(): void { }
}
