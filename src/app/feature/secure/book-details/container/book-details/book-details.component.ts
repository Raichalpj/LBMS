import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentBase } from '@shared/abstracts/component-base';
import { BookService } from '../../../book/service/book.service';
import { FormBase } from '@shared/contracts';

// interface Book {
//   title: string;
//   isbn: string;
//   availableCopies: number;
// }

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})



export class BookDetailsComponent extends ComponentBase {
  bookId:number;

  book: any = {
    title: '',
    isbn: '',
    authorId:'',
    authorName:'',
    bookId:'',
    publishedYear:'',
    totalCopies:'',
    imageUrl:'',
    availableCopies: 0,
  };
  

  override initVariables(): void {}
  override subscribeEvents(): void {
    this.bookService.getBookById(this.bookId).subscribe(
      (book: any) => {
        this.book = book[0];
        console.log(book);
      },
      (error: any) => {
        console.error('Error loading book data:', error);
      }
    );
  }
  updateBook(bookId: number): void {
    this.router.navigate(['/book/update', bookId]);
    console.log(bookId);
  }

  deleteBook(bookId:number): void {
    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(bookId).subscribe(
        () => {
         
          this.subscribeEvents()
        },
        (error) => {
          console.error('Error deleting book:', error);
        }
      );
    }
  }


  override load(): void {
    //throw new Error('Method not implemented.');
  }
  override unload(): void {
    //throw new Error('Method not implemented.');
  }

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    super();
    this.bookId = this.route.snapshot.params['id'];
    
  }
}
