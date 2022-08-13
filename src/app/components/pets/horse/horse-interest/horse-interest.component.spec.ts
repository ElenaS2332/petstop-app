import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseInterestComponent } from './horse-interest.component';

describe('HorseInterestComponent', () => {
  let component: HorseInterestComponent;
  let fixture: ComponentFixture<HorseInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorseInterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorseInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
