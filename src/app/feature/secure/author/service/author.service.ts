import { Injectable } from '@angular/core';
import { CommunicationService } from '@core/services/communication.service';
import { UserAPI } from '@shared/constants/api-endpoints/user-api.const';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private commServ:CommunicationService) { }

  getAuthor():Observable<any>{
    return this.commServ.get<any>(UserAPI.getAuthorList(),null,null,true,false)
  }

  deleteAuthor(authorId: number): Observable<any> {
    // const url = `${environment.apiBaseUrl}api/Author/DeleteAuthor/${authorId}`;
    // return this.commServ.delete<any>(url);
    return this.commServ.delete<any>(UserAPI.deleteAuthor(authorId),null,null,true)
  }

  updateAuthor(authorId: number, updatedAuthor: any): Observable<any> {
    // const url = `${environment.apiBaseUrl}api/Author/UpdateAuthor/${authorId}`;
    // return this.commServ.put<any>(url, updatedAuthor);
    return this.commServ.put<any>(UserAPI.updateAuthor(authorId),updatedAuthor,null,null,true)
  }

  getAuthorById(authorId: number): Observable<any> {
    const url = `${environment.apiBaseUrl}api/Author/GetAuthorById/${authorId}`;
    return this.commServ.get<any>(url);
  }
  
  addAuthor(author:any):Observable<any>{
    return this.commServ.post<any>(UserAPI.addAuthor(),author,null,null,true)
  }
}
