import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReturnTransactionComponent } from './add-return-transaction.component';

describe('AddReturnTransactionComponent', () => {
  let component: AddReturnTransactionComponent;
  let fixture: ComponentFixture<AddReturnTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReturnTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReturnTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
