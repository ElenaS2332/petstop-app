import { TestBed } from '@angular/core/testing';

import { HorseInterestService } from './horse-interest.service';

describe('HorseInterestService', () => {
  let service: HorseInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorseInterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
