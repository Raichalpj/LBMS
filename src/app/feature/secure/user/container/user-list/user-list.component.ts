import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends ComponentBase {

  users:any[]=[]

  override initVariables(): void {
    //throw new Error('Method not implemented.');
  }
  override subscribeEvents(): void {
    this.userSer.getUser().subscribe(val=>{
      this.users=val;
      console.log(val);
    })
  }
  override load(): void {
    //throw new Error('Method not implemented.');
  }
  override unload(): void {
    //throw new Error('Method not implemented.');
  }

  updateUser(userId:number):void{
    this.router.navigate(['/user/update',userId])
  }

  deleteUser(bookId:number):void{
    if(confirm('are you sure you want to delete?')){
      this.userSer.deleteUser(bookId).subscribe(
        ()=>{
          this.subscribeEvents()
        },
      (error)=>{
        console.error('error',error)
      })
    }
  }

  addUser():void{
    this.router.navigate(['/user/add'])
  }
  constructor(private userSer:UserService,private router:Router) {
    super()
   }



}
