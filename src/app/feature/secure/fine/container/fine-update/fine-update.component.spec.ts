import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineUpdateComponent } from './fine-update.component';

describe('FineUpdateComponent', () => {
  let component: FineUpdateComponent;
  let fixture: ComponentFixture<FineUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FineUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FineUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
