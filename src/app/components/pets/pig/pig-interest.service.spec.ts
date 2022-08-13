import { TestBed } from '@angular/core/testing';

import { PigInterestService } from './pig-interest.service';

describe('PigInterestService', () => {
  let service: PigInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PigInterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
