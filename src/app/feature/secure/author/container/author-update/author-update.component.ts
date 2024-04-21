import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ComponentBase } from '@shared/abstracts/component-base';
import { AuthorService } from '../../service/author.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBase } from '@shared/contracts';

@Component({
  selector: 'app-author-update',
  templateUrl: './author-update.component.html',
  styleUrls: ['./author-update.component.scss']
})
export class AuthorUpdateComponent extends ComponentBase implements OnInit, FormBase {
  updateAuthorForm!: FormGroup;
  authorId: number;

  constructor(
    private formBuilder: FormBuilder,
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    super();
    this.authorId = this.route.snapshot.params['id'];
  }

  override ngOnInit(): void {
    this.buildForm();
    this.subscribeEvents();
  }

  buildForm(): void {
    this.updateAuthorForm = this.formBuilder.group({
      authorName: [''] 
    });
  }

  subscribeEvents(): void {
    this.authorService.getAuthorById(this.authorId).subscribe(
      (author: any) => {
        this.updateAuthorForm.patchValue({
          authorName: author[0].authorName
        });
      },
      (error: any) => {
        console.error('Error loading author data:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.updateAuthorForm.valid) {
      const updatedAuth = {
        authorId: this.authorId,
        ...this.updateAuthorForm.value
      };
      this.authorService.updateAuthor(updatedAuth.authorId, updatedAuth).subscribe(
        (response: any) => {
          console.log('Author updated successfully:', response);
          this.router.navigate(['/author', this.authorId]); 
        },
        (error: any) => {
          console.error('Error updating author:', error);
        }
      );
    }
  }

  override initVariables(): void {}

  override load(): void {}

  override unload(): void {}

  bindForm(): void {}

  resetForm(): void {}
}