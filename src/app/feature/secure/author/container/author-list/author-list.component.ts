import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ComponentBase } from '@shared/abstracts/component-base';
import { AuthorService } from '../../service/author.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector:'app-author-list',
  templateUrl:'./author-list.component.html',
  styleUrls:['./author-list.component.scss']
})
export class AuthorListComponent extends ComponentBase{
  authors:any[]=[];

  constructor(private authorSer:AuthorService,private cdr: ChangeDetectorRef,private router:Router,private route:ActivatedRoute){
    super()
    
  }
  override initVariables(): void {
    
  }
  override subscribeEvents(): void {
    this.authorSer.getAuthor().subscribe(val => {
      this.authors = val;
      //this.cdr.detectChanges();
    });
  }

  deleteAuthor(authorId:number): void {
    if (confirm('Are you sure you want to delete this author?')) {
      this.authorSer.deleteAuthor(authorId).subscribe(
        () => {
          console.log('hello');
          this.subscribeEvents();
          
        
        },
        (error) => {
          
          console.error('Error deleting author:', error);
        }
      );
    }
  }
  
  
  
  

    updateAuthor(authorId: number): void {
      this.router.navigate(['/author/update', authorId]);
      console.log(authorId);
    }
  
    addBook():void{
      this.router.navigate(['/author/add'])
    }
  
  override load(): void {
  
  }
  override unload(): void {
   
  }

}