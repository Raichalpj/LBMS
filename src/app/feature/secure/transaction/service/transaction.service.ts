import { Injectable } from '@angular/core';
import { CommunicationService } from '@core/services/communication.service';
import { UserAPI } from '@shared/constants/api-endpoints/user-api.const';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  addReturnTransaction(transaction:any):Observable<any>{
    return this.commServ.post<any>(UserAPI.addRTransaction(),transaction,null,false,false);
  }

  updateReturnTransaction(tid:number,updatedTran:any):Observable<any>{
    const url=`${environment.apiBaseUrl}api/Transaction/UpdateReturn/${tid}`;
    console.log(url)
    return this.commServ.put<any>(url,updatedTran);
    
  }

  updateBorrowTransaction(tid:number,updatedTran:any):Observable<any>{
    const url=`${environment.apiBaseUrl}api/Transaction/BorrowReturn/${tid}`;
    return this.commServ.put<any>(url,updatedTran);
  }

  getTranById(tid:number):Observable<any>{
    const url=`${environment.apiBaseUrl}api/Transaction/GetTransaction?transactionId=${tid}`;
    console.log('url',url)
    return this.commServ.get<any>(url);
  }
}
