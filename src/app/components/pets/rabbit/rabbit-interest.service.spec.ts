import { TestBed } from '@angular/core/testing';

import { RabbitInterestService } from './rabbit-interest.service';

describe('RabbitInterestService', () => {
  let service: RabbitInterestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RabbitInterestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
