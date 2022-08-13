import { TestBed } from '@angular/core/testing';

import { SnakeInterestService } from './snake-interest.service';

describe('SnakeInterestService', () => {
  let service: SnakeInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnakeInterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
