import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsInterestComponent } from './birds-interest.component';

describe('BirdsInterestComponent', () => {
  let component: BirdsInterestComponent;
  let fixture: ComponentFixture<BirdsInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdsInterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdsInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
