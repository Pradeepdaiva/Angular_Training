import { TestBed } from '@angular/core/testing';

import { ViewBooksServiceService } from './view-books-service.service';

describe('ViewBooksServiceService', () => {
  let service: ViewBooksServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewBooksServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
