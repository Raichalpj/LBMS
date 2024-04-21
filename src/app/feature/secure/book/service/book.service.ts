import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommunicationService } from '@core/services/communication.service';
import { UserAPI } from '@shared/constants/api-endpoints/user-api.const';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private commServ:CommunicationService) { }

  getBook():Observable<any>{
//return this.commServ.get<any>(environment.apiBaseUrl+"api/Book/getBooks")
return this.commServ.get<any>(UserAPI.getBookList(),null,null,false,false)

  }

  addBook(book:any):Observable<any>{
    return this.commServ.post<any>(UserAPI.getBookAdd(), book, null, false, false);
    //return this.commServ.post<any>(environment.apiBaseUrl+"api/Book/AddBooks",book)
  }

  getBooksByTitle(title: string,authName:string): Observable<any> {
    const url = UserAPI.getBookListByTitle(title,authName); 
    return this.commServ.get<any>(url);
  }

  deleteBook(bookId: number): Observable<any> {
    const url = `${environment.apiBaseUrl}api/Book/DeleteBooks/${bookId}`;
    return this.commServ.delete<any>(url);
  }

  
  updateBook(bookId: number, updatedBook: any): Observable<any> {
    const url = `${environment.apiBaseUrl}api/Book/UpdateBooks/${bookId}`;
    return this.commServ.put<any>(url, updatedBook);
  }

  getBookById(bookId: number): Observable<any> {
   
    const url = `${environment.apiBaseUrl}api/Book/getBooks?id=${bookId}`;
    console.log('url'+bookId)
    return this.commServ.get<any>(url);
    
  }
} 
