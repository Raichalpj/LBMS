import { Injectable } from '@angular/core';
import { UserService } from '../../user/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService  {

  constructor(private userServ:UserService) { }

  
}
