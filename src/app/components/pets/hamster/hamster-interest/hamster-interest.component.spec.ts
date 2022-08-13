import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamsterInterestComponent } from './hamster-interest.component';

describe('HamsterInterestComponent', () => {
  let component: HamsterInterestComponent;
  let fixture: ComponentFixture<HamsterInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamsterInterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamsterInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
