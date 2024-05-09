import { Injectable } from '@angular/core';
import { CommunicationService } from '@core/services/communication.service';
import { UserAPI } from '@shared/constants/api-endpoints/user-api.const';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadshelfService {

  constructor(private commSer:CommunicationService) { }

  getReadHist(uid:number):Observable<any>{
    return this.commSer.get<any>(UserAPI.getReadHis(uid),null,null,true,false)
  }
}
