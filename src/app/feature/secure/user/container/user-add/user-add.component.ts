import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent extends ComponentBase {

  userAddForm!:FormGroup
  override initVariables(): void {
    this.userAddForm=this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      password:[''],
      roleId:[2]
    });
  }
  override subscribeEvents(): void {
  }
  override load(): void {
    //throw new Error('Method not implemented.');
  }
  override unload(): void {
    //throw new Error('Method not implemented.');
  }

  onSubmit(){
    if(this.userAddForm.valid){
      this.userSer.addUser(this.userAddForm.value).subscribe(response=>{
        console.log('user added',response)
      },error =>{
        console.error('error adding',error)
      })
    }
  }
  constructor(private userSer:UserService,private formBuilder:FormBuilder) {
    super()
   }

  

}
