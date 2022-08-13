import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtterInterestComponent } from './otter-interest.component';

describe('OtterInterestComponent', () => {
  let component: OtterInterestComponent;
  let fixture: ComponentFixture<OtterInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtterInterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtterInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
