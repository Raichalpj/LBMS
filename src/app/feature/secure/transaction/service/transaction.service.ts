import { Injectable } from '@angular/core';
import { CommunicationService } from '@core/services/communication.service';
import { UserAPI } from '@shared/constants/api-endpoints/user-api.const';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private commServ:CommunicationService) { }

  getTransactionList():Observable<any>{
    return this.commServ.get<any>(UserAPI.getTransactionList(),null,null,false,false)
  }

  addBorrowTransaction(transaction:any):Observable<any>{
    return this.commServ.post<any>(UserAPI.addBTransaction(),transaction,null,false,false);
  }
}
