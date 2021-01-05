import { TestBed } from '@angular/core/testing';

import { UserHistoryServiceService } from './user-history-service.service';

describe('UserHistoryServiceService', () => {
  let service: UserHistoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserHistoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
