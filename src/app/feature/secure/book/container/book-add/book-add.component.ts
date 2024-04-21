import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { BookService } from '../../service/book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent extends ComponentBase {
  
  newBookForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private bookSer:BookService){
    super()
  }
  override initVariables(): void {
    this.newBookForm = this.formBuilder.group({
      title: ['', Validators.required],
      authorId: [null, Validators.required], // Set to null initially
      isbn: [null, Validators.required],
      publishedYear: [null, Validators.required],
      totalCopies: [null, Validators.required],
      availableCopies: [null, Validators.required]
    });
  }
  
  override subscribeEvents(): void {
    // Remove this method call from here
  }

  onSubmit(): void {
    if (this.newBookForm.valid) {
      this.bookSer.addBook(this.newBookForm.value).subscribe(response => {
        console.log('Book is added successfully:', response);
      }, error => {
        console.error('Error adding book:', error);
      });
    } 
  }

  
  override load(): void {

  }
  override unload(): void {
 
  }


  

}
