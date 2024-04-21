import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { BookService } from '../../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent extends ComponentBase {
 books:any[]=[]
 searchTitle: string = '';
 searchAuthName:string='';

 


override initVariables(): void {}

  override subscribeEvents(): void {
    this.bookServ.getBook().subscribe(val => {
      this.books = val; 
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

  constructor(private bookServ:BookService, private cdr: ChangeDetectorRef,private router:Router) {
  super() }


}
