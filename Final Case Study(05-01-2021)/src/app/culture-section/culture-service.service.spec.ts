import { TestBed } from '@angular/core/testing';

import { CultureServiceService } from './culture-service.service';

describe('CultureServiceService', () => {
  let service: CultureServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CultureServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
