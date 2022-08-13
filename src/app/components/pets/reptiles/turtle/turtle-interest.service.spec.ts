import { TestBed } from '@angular/core/testing';

import { TurtleInterestService } from './turtle-interest.service';

describe('TurtleInterestService', () => {
  let service: TurtleInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurtleInterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
