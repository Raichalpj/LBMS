import { Injectable } from '@angular/core';
import { CommunicationService } from '@core/services/communication.service';
import { UserAPI } from '@shared/constants/api-endpoints/user-api.const';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FineService {

  constructor(private commServ:CommunicationService) { }

  getFineList():Observable<any>{
    return this.commServ.get<any>(UserAPI.getFineList(),null,'Looading',true,false)
  }

  // updateFine(fine:any):Observable<any>{
  //   return this.commServ.put<any>(UserAPI.updateFine(),fine,null,false,false);
  // }
  updateFine(fineId:number,fine:any):Observable<any>{
    const url=`${environment.apiBaseUrl}api/Fine/UpdateFine/${fineId}`
    return this.commServ.put<any>(url,fine,null,null,true);
  }

  getFineById(fineId:number):Observable<any>{
    const url=`${environment.apiBaseUrl}api/Fine/GetFine?fineId=${fineId}`
    return this.commServ.get<any>(url,null,null,true,false);
  }
}
