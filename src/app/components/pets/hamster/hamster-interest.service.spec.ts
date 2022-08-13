import { TestBed } from '@angular/core/testing';

import { HamsterInterestService } from './hamster-interest.service';

describe('HamsterInterestService', () => {
  let service: HamsterInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HamsterInterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
