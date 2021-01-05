import { TestBed } from '@angular/core/testing';

import { AuthGuardForWelcomeService } from './auth-guard-for-welcome.service';

describe('AuthGuardForWelcomeService', () => {
  let service: AuthGuardForWelcomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardForWelcomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
