import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { BookService } from '../../service/book.service';
import { Router } from '@angular/router';
import { AppConfig } from '@core/configs';
import { UserService } from '../../../user/service/user.service';
import { AuthService } from '@core/services/auth.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent extends ComponentBase {
 books:any[]=[]
 searchTitle: string = '';
 searchAuthName:string='';
 userId!:any;
 users:any={
  firstName:'',
  lastName:'',
  email:''
 }

 isDropdownOpen = false; // Variable to track dropdown state

 toggleDropdown() {
   this.isDropdownOpen = !this.isDropdownOpen; // Toggle dropdown state
 }


override initVariables(): void {}

  override subscribeEvents(): void {
    this.bookServ.getBook().subscribe(val => {
      this.books = val; 
      console.log(this.books);
      //this.cdr.detectChanges(); 
    });
  }

  searchByTitle(): void {
    if (this.searchTitle !== '' || this.searchAuthName !== '') {
     
      this.bookServ.getBooksByTitle(this.searchTitle, this.searchAuthName).subscribe(
        (result: any[]) => {
          this.books = result; 
          //this.cdr.detectChanges(); 
        },
        (error) => {
          console.error('Error searching books by title:', error);
        }
      );
    }
  }
  deleteBook(bookId: number): void {
    if (confirm('Are you sure you want to delete this book?')) {
      this.bookServ.deleteBook(bookId).subscribe(
        () => {
         
          this.subscribeEvents()
        },
        (error) => {
          console.error('Error deleting book:', error);
        }
      );
    }
  }
  updateBook(bookId: number): void {
    this.router.navigate(['/book/update', bookId]);
    console.log(bookId);
  }

  profile():void{
    this.router.navigate(['profile'])
  }

  addBook():void{
    this.router.navigate(['/book/add'])
  }

  bookDetail(bookId:number):void{
    this.router.navigate(['/book-detail',bookId])
  }
  override load(): void {
   
  }
  override unload(): void {
   
  }


 
   

  constructor(private bookServ:BookService, private cdr: ChangeDetectorRef,private router:Router,private userSer:UserService,private authService:AuthService) {
  super()

  try {
    // this.userId = storedUserId ? parseInt(JSON.parse(storedUserId!), 10) : null;
    this.userId = JSON.parse(localStorage.getItem(AppConfig.auth.token)||'{}').userId;
    console.log(this.userId);
  } catch (error) {
    console.error("Error parsing user ID from local storage:", error);
    this.userId = null; // Set userId to null if parsing fails
  }


  this.userSer.getUserById(this.userId).subscribe((val:any)=>{
    this.users=val[0];
    console.log('hello',val);
  }

  
   
  )
    

  
 }


}
