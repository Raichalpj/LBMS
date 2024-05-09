import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { UserService } from '../../../user/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConfig } from '@core/configs';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBase } from '@shared/contracts';
import { ProfileService } from '../../services';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent extends ComponentBase implements FormBase {
  userId: any;
  users:any={
    firstName:'',
    lastName:'',
    email:''
   }
   isEditing: boolean = false;
   isChangingPassword: boolean = false;
  userAddForm!: FormGroup;
  updatePassword!: FormGroup;

  constructor(
    private userServ: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private profServ:ProfileService,
    
  ) {
    super();

    try {
      // this.userId = storedUserId ? parseInt(JSON.parse(storedUserId!), 10) : null;
      this.userId = JSON.parse(
        localStorage.getItem(AppConfig.auth.token) || '{}'
      ).userId;
      console.log('i am ', this.userId);
    } catch (error) {
      console.error('Error parsing user ID from local storage:', error);
      this.userId = null; // Set userId to null if parsing fails
    }

    this.userServ.getUserById(this.userId).subscribe((user: any) => {
      this.userAddForm.setValue({
        email: user[0].email,
        password: user[0].password,
        firstName: user[0].firstName,
        lastName: user[0].lastName,
        roleId: user[0].roleId,
      }),
        (error: any) => {
          console.error('error adding book data:', error);
        };
    });

    this.userServ.getUserById(this.userId).subscribe((val:any)=>{
      this.users=val[0];
      console.log('hello',val);
    })
  
    
    // const storedUserId = localStorage.getItem('userId');
  }
  buildForm(): void {
    this.userAddForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      roleId: new FormControl(''),
    });
  }

  bindFormPass():void{
    this.updatePassword=new FormGroup({
      password:new FormControl(''),
      newPassword:new FormControl('')

    })
  }
  bindForm(): void {
    //throw new Error('Method not implemented.');
  }
  resetForm(): void {
    //throw new Error('Method not implemented.');
  }

  /* Public Methods */
  initVariables(): void {}

  subscribeEvents(): void {}

  override load(): void {
    this.buildForm();
  this.bindFormPass()

  }
  override unload(): void {
    //throw new Error('Method not implemented.');
  }
  toggleEdit() {
    console.log('hello')
    this.isEditing = !this.isEditing;
  }

  toggleChangePassword() {
    this.isChangingPassword = !this.isChangingPassword;
  }

  onSubmit() {
    if (this.userAddForm.valid) {
      const updatedUser = {
        userId: this.userId,
        ...this.userAddForm.value,
      };
      this.userServ.updateUser(updatedUser.userId, updatedUser).subscribe(
        (response) => {
          console.log('updated', response);
          this.router.navigate(['book']);
        },
        (error) => {
          console.error('error', error);
        }
      );
    }
    this.isEditing = false;
  }

  onSubmitPass(){
    if(this.updatePassword.valid){
      const updatedPass={
        userId:this.userId,
        ...this.updatePassword.value,
      };
      this.profServ.UpdatePassword(updatedPass.userId,updatedPass).subscribe(
        (response)=>{
          console.log('updated',response);
        },
        (error)=>{
          console.error('error',error);
        }
      )
    }
    this.isChangingPassword=false;
  }
  
}
