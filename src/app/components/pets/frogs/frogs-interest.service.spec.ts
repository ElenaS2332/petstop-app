import { TestBed } from '@angular/core/testing';

import { FrogsInterestService } from './frogs-interest.service';

describe('FrogsInterestService', () => {
  let service: FrogsInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrogsInterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
