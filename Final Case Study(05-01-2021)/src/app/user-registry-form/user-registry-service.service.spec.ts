import { TestBed } from '@angular/core/testing';

import { UserRegistryServiceService } from './user-registry-service.service';

describe('UserRegistryServiceService', () => {
  let service: UserRegistryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegistryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
