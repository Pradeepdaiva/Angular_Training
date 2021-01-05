import { TestBed } from '@angular/core/testing';

import { IssuedBookServiceService } from './issued-book-service.service';

describe('IssuedBookServiceService', () => {
  let service: IssuedBookServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssuedBookServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
