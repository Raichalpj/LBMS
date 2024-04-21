import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ComponentBase } from '@shared/abstracts/component-base';
import { FormBase } from '@shared/contracts';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent extends ComponentBase implements FormBase{

  userAddForm!:FormGroup
  userId:number;

  constructor(private userSer:UserService,private route: ActivatedRoute,private router:Router) { 
    super()
    this.userId=this.route.snapshot.params['id'];
  }
 
  override initVariables(): void {
    
  }
  override subscribeEvents(): void {
    this.userSer.getUserById(this.userId).subscribe(
      (user:any)=>{
        this.userAddForm.setValue({
          email:user[0].email,
          password:user[0].password,
          firstName:user[0].firstName,
          lastName:user[0].lastName,
          roleId:user[0].roleId
        }),
        (error:any)=>{
          console.error('error adding book data:',error);
        }
      }
    )
  }
  override load(): void {
   this.buildForm()
  }
  override unload(): void {
    //throw new Error('Method not implemented.');
  }
  onSubmit(){
    if(this.userAddForm.valid){
      const updatedUser={
        userId:this.userId,
        ...this.userAddForm.value
      };
      this.userSer.updateUser(updatedUser.userId,updatedUser).subscribe(
        (response)=>{
          console.log('updated',response);
          this.router.navigate(['/user',this.userId])
        },
        (error)=>{
          console.error('error',error);
        }
      )
    }
  }

  
 
  buildForm(): void {
    this.userAddForm=new FormGroup({
      email:new FormControl(''),
      password:new FormControl(''),
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      roleId:new FormControl(2)
    })
  }
  bindForm(): void {
    //throw new Error('Method not implemented.');
  }
  resetForm(): void {
    //throw new Error('Method not implemented.');
  }

  

}
