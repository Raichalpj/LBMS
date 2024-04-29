import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { BookService } from '../../service/book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { AuthorService } from '../../../author/service/author.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent extends ComponentBase {
  
  newBookForm!: FormGroup;
  authors:any[]=[];
  constructor(private formBuilder: FormBuilder,private bookSer:BookService,private authServ:AuthorService){
    super()
  }
  override initVariables(): void {
    this.newBookForm = this.formBuilder.group({
      title: ['', Validators.required],
      authorId: [null, Validators.required], // Set to null initially
      isbn: [null, Validators.required],
      description:[null, Validators.required],
          category:[null, Validators.required],
          imageUrl:[null, Validators.required],
          rating:[null, Validators.required],
          //status:[null, Validators.required],
          numberOfPages:[null, Validators.required],
      publishedYear: [null, Validators.required],
      totalCopies: [null, Validators.required],
      availableCopies: [null, Validators.required]
    });
  }
  
  override subscribeEvents(): void {
    this.authServ.getAuthor().subscribe(val => {
      this.authors = val;
      console.log(val);
      //this.cdr.detectChanges();
    });
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

  getAuthors():void{
    
  }
  
  override load(): void {

  }
  override unload(): void {
 
  }


  

}
