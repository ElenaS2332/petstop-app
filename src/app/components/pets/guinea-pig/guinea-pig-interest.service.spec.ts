import { TestBed } from '@angular/core/testing';

import { GuineaPigInterestService } from './guinea-pig-interest.service';

describe('GuineaPigInterestService', () => {
  let service: GuineaPigInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuineaPigInterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
