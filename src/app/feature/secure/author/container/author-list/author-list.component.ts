import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { AuthorService } from '../../service/author.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector:'app-author-list',
  templateUrl:'./author-list.component.html',
  styleUrls:['./author-list.component.scss']
})
export class AuthorListComponent extends ComponentBase{
  authors:any[]=[];
  role:any
  
  showNewAuthorRow: boolean = false;
  newAuthorName: string = '';

  constructor(private authorSer:AuthorService,private cdr: ChangeDetectorRef,private router:Router,private route:ActivatedRoute,private authServ:AuthService,public dialog: MatDialog){
    super()
    
  }

  
  override initVariables(): any {
     this.role= this.authServ.getUserRole();
    console.log(this.role);
    
  }
  override subscribeEvents(): void {
    this.authorSer.getAuthor().subscribe(val => {
      this.authors = val;
      //this.cdr.detectChanges();
    });
  }

  
  deleteAuthor(authorId: number): void {
    if (confirm("Are you sure you want to delete this author?")) {
      this.authorSer.deleteAuthor(authorId).subscribe(
        () => {
          console.log('hello', authorId);
          this.subscribeEvents();
        },
        (error) => {
          console.error('Error deleting author:', error);
        }
      );
    }
  }
  

  openModal(): void {
    const deleteModal = document.getElementById('deleteModal');
    if (deleteModal) {
      deleteModal.style.display = 'block';
    }
  }

  closeModal(): void {
    const deleteModal = document.getElementById('deleteModal');
    if (deleteModal) {
      deleteModal.style.display = 'none';
    }
  }



  
  addNewAuthorRow(): void {
    this.showNewAuthorRow = true;
  }

  // Method to save the new author
  saveNewAuthor(): void {
    if (this.newAuthorName.trim() !== '') {
      // Make an HTTP request to add the new author
      this.authorSer.addAuthor({ authorName: this.newAuthorName }).subscribe(
        (response) => {
          // Handle successful response
          console.log('Author added successfully:', response);

          // Reset the new author input and hide the new author row
          this.newAuthorName = '';
          this.showNewAuthorRow = false;
          this.subscribeEvents();
        },
        (error) => {
          // Handle error
          console.error('Error adding author:', error);
        }
      );
    } else {
      // Handle empty author name input
      alert('Please enter a valid author name.');
    }}
  
  
  

    updateAuthor(authorId: number): void {
      this.router.navigate(['/author/update', authorId]);
      console.log(authorId);
    }
  
    addBook():void{
      // this.router.navigate(['/author/add'])
    }
  
  override load(): void {
  
  }
  override unload(): void {
   
  }

}