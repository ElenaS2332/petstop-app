import { TestBed } from '@angular/core/testing';

import { LizardInterestService } from './lizard-interest.service';

describe('LizardInterestService', () => {
  let service: LizardInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LizardInterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
