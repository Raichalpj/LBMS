import { Injectable } from '@angular/core';
import { UserService } from '../../user/service/user.service';
import { CommunicationService } from '@core/services/communication.service';
import { Observable } from 'rxjs';
import { UserAPI } from '@shared/constants/api-endpoints/user-api.const';

@Injectable({
  providedIn: 'root'
})
export class ProfileService  {

  constructor(private userServ:UserService,private commServ:CommunicationService) { }

  UpdatePassword(userId:number,updatePass:any):Observable<any>{
    return this.commServ.put<any>(UserAPI.updatePassword(userId),updatePass,null,null,true);
  }
  
}
