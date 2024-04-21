import { HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

export const UserAPI = {
    authenticateUser(): string {
        return `${environment.apiBaseUrl}/user/authenticate`;
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

    getAuthorList(): string{
        return `${environment.apiBaseUrl}api/Author/GetAuthor`;
    },

    addAuthor(): string{
        return `${environment.apiBaseUrl}api/Author/AddAuthor`;
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
    }
    

}