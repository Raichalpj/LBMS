import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export const UserAPI = {
    authenticateUser(): string {
        return `${environment.apiBaseUrl}api/Login/UserLogin`;
    },

    getBookList(): string{
        return `${environment.apiBaseUrl}api/Book/getBooks`;
    },
    getBookListByTitle(title:string,authName:string):string{
        const params=new HttpParams()
        .set('title',title)
        .set('authName',authName);
    return `${environment.apiBaseUrl}api/Book/getBooks?${params.toString()}`;
    },

    getBookAdd(): string{
        return `${environment.apiBaseUrl}api/Book/AddBooks`;
    },

    updateBook(bookId:number):string{
        return `${environment.apiBaseUrl}api/Book/UpdateBooks/${bookId}`
    },

    getBookById(bookId:number):any{
        const params=new HttpParams().set('bookId',bookId);
        return `${environment.apiBaseUrl}api/Book/getBooks?${bookId}}`

    },

    // AUTHOR
    getAuthorList(): string{
        return `${environment.apiBaseUrl}api/Author/GetAuthor`;
    },

    deleteAuthor(authorId:number):any{
        return `${environment.apiBaseUrl}api/Author/DeleteAuthor/${authorId}`
    },

    addAuthor(): string{
        return `${environment.apiBaseUrl}api/Author/AddAuthor`;
    },

    updateAuthor(authorId:number):string{
        return `${environment.apiBaseUrl}api/Author/UpdateAuthor/${authorId}`
    },

    getUserList():string{
        return `${environment.apiBaseUrl}api/User/GetUser`
    },
    
    addUser():string{
        return `${environment.apiBaseUrl}api/User/Adduser`
    },

    getUserById(userId:number):string{
        return `${environment.apiBaseUrl}api/User/GetUser?id=${userId}`
    },

    getTransactionList():string{
        return  `${environment.apiBaseUrl}api/Transaction/GetTransaction`
    },

    addBTransaction():string{
        return `${environment.apiBaseUrl}api/Transaction/AddBorrowTransaction`
    },

    addRTransaction():string{
        return `${environment.apiBaseUrl}api/Transaction/Addreturn`
    },

    getFineList():string{
        return `${environment.apiBaseUrl}api/Fine/GetFine`
    },

    updateFine(fineId:number):string
    {
        return `${environment.apiBaseUrl}api/Fine/UpdateFine/${fineId}`
    },

    getUserByUserId(userId:number):string{
        return `${environment.apiBaseUrl}`
    },

    getReadHis(userId:number):string{
        return `${environment.apiBaseUrl}api/Transaction/GetUserReadingHistory?userId=${userId}`
    },

    updatePassword(userId:number):string{
        return `${environment.apiBaseUrl}api/User/UpdatePassword/${userId}`
    }
   
    

}