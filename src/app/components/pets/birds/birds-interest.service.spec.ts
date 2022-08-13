import { TestBed } from '@angular/core/testing';

import { BirdsInterestService } from './birds-interest.service';

describe('BirdsInterestService', () => {
  let service: BirdsInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BirdsInterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
