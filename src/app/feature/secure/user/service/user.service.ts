import { Injectable } from '@angular/core';
import { CommunicationService } from '@core/services/communication.service';
import { UserAPI } from '@shared/constants/api-endpoints/user-api.const';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private commServ:CommunicationService) { }

  getUser():Observable<any>{
    return this.commServ.get<any>(UserAPI.getUserList(),null,null,true,false)
  }

  addUser(user:any):Observable<any>{
    return this.commServ.post<any>(UserAPI.addUser(),user,null,null,true)
  }

  // getUserById(userId:number):Observable<any>{
  //   return this.commServ.get<any>(UserAPI.getUserById(userId),null,null,false,false)
  // }

  updateUser(userId:number,updatedUser:any):Observable<any>{
    const url=`${environment.apiBaseUrl}api/User/UpdateUser/${userId}`;
    return this.commServ.put<any>(url,updatedUser,null,null,true)
  }

  getUserById(userId:number):Observable<any>{
    const url=`${environment.apiBaseUrl}api/User/GetUser?id=${userId}`;
    return this.commServ.get<any>(url,null,null,true,false);
  }

  deleteUser(userId:number):Observable<any>{
    const url=`${environment.apiBaseUrl}api/User/DeleteUser/id?id=${userId}`
    return this.commServ.delete<any>(url,null,null,true)
  }
}
