import { TestBed } from '@angular/core/testing';

import { BookSectionServiceService } from './book-section-service.service';

describe('BookSectionServiceService', () => {
  let service: BookSectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookSectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
