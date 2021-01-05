import { TestBed } from '@angular/core/testing';

import { AdminRegistryServiceService } from './admin-registry-service.service';

describe('AdminRegistryServiceService', () => {
  let service: AdminRegistryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminRegistryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
