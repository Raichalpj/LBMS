import { TestBed } from '@angular/core/testing';

import { ReadshelfService } from './readshelf.service';

describe('ReadshelfService', () => {
  let service: ReadshelfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadshelfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
