import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PigInterestComponent } from './pig-interest.component';

describe('PigInterestComponent', () => {
  let component: PigInterestComponent;
  let fixture: ComponentFixture<PigInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PigInterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PigInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
