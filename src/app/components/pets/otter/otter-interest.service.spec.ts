import { TestBed } from '@angular/core/testing';

import { OtterInterestService } from './otter-interest.service';

describe('OtterInterestService', () => {
  let service: OtterInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtterInterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
