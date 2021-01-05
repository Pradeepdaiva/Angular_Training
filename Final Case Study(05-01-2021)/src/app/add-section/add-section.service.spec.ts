import { TestBed } from '@angular/core/testing';

import { AddSectionService } from './add-section.service';

describe('AddSectionService', () => {
  let service: AddSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
