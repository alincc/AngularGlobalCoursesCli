import { TestBed, inject } from '@angular/core/testing';

import { UnautorizedGuardService } from './unauthorized-guard.service';

describe('UnautorizedGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnautorizedGuardService]
    });
  });

  it('should ...', inject([UnautorizedGuardService], (service: UnautorizedGuardService) => {
    expect(service).toBeTruthy();
  }));
});
