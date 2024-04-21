import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComponentBase } from '@shared/abstracts/component-base';
import { AuthorService } from '../../service/author.service';

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.scss']
})
export class AuthorAddComponent extends ComponentBase {

  addAuthorForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private authSer:AuthorService){
    super()
  }
  override initVariables(): void {
    this.addAuthorForm = this.formBuilder.group({
      authorName: [''],
  
    });
  }
  
  override subscribeEvents(): void {
    // Remove this method call from here
  }

  onSubmit(): void {
    if (this.addAuthorForm.valid) {
      this.authSer.addAuthor(this.addAuthorForm.value).subscribe(response => {
        console.log('Book is added successfully:', response);
        console.log(this.addAuthorForm)
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
