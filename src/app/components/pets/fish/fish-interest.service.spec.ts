import { TestBed } from '@angular/core/testing';

import { FishInterestService } from './fish-interest.service';

describe('FishInterestService', () => {
  let service: FishInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FishInterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
