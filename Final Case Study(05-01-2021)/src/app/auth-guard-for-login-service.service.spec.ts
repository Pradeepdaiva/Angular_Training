import { TestBed } from '@angular/core/testing';

import { AuthGuardForLoginServiceService } from './auth-guard-for-login-service.service';

describe('AuthGuardForLoginServiceService', () => {
  let service: AuthGuardForLoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardForLoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
