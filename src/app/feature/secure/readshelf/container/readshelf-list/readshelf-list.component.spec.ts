import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadshelfListComponent } from './readshelf-list.component';

describe('ReadshelfListComponent', () => {
  let component: ReadshelfListComponent;
  let fixture: ComponentFixture<ReadshelfListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadshelfListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadshelfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
