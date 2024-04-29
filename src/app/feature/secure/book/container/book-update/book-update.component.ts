import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ComponentBase } from '@shared/abstracts/component-base';
import { Subject } from 'rxjs';
import { BookService } from '../../service/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBase } from '@shared/contracts';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss'],
})
export class BookUpdateComponent extends ComponentBase implements FormBase {
  newBookForm!: FormGroup;

  bookId: number;

  override initVariables(): void {}
  override subscribeEvents(): void {
    //console.log('id'+this.bookId)
    this.bookService.getBookById(this.bookId).subscribe((book: any) => {
      console.log(book);
      // console.log('id'+this.bookId)
      console.log(book.title);
      this.newBookForm.setValue({
        title: book[0].title,
        isbn: book[0].isbn,
        description: book[0].description,
        category: book[0].category,
        imageUrl: book[0].imageUrl,
        rating: book[0].rating,
        status: book[0].status,
        numberOfPages: book[0].numberOfPages,
        authorId: book[0].authorId,
        publishedYear: book[0].publishedYear,
        totalCopies: book[0].totalCopies,
        availableCopies: book[0].availableCopies,
      }),
        (error: any) => {
          console.error('Error loading book data:', error);
        };
    });
  }

  onSubmit(): void {
    if (this.newBookForm.valid) {
      const updatedBook = {
        bookId: this.bookId,
        ...this.newBookForm.value,
      };
      this.bookService.updateBook(updatedBook.bookId, updatedBook).subscribe(
        (response) => {
          console.log('Book updated successfully:', response);

          this.router.navigate(['/book', this.bookId]);
        },
        (error) => {
          console.error('Error updating book:', error);
        }
      );
    }
  }

  override load(): void {
    this.buildForm();
  }
  override unload(): void {
    //
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
  buildForm(): void {
    this.newBookForm = new FormGroup({
      title: new FormControl(''),
      authorId: new FormControl(null),
      isbn: new FormControl(''),
      description: new FormControl(''),
      category: new FormControl(''),
      imageUrl: new FormControl(''),
      rating: new FormControl(''),
      status: new FormControl(''),
      numberOfPages: new FormControl(''),
      publishedYear: new FormControl(''),
      totalCopies: new FormControl(''),
      availableCopies: new FormControl(null),
    });
  }
  bindForm(): void {}
  resetForm(): void {}
}
