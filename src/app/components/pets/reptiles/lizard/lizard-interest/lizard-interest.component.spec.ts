import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LizardInterestComponent } from './lizard-interest.component';

describe('LizardInterestComponent', () => {
  let component: LizardInterestComponent;
  let fixture: ComponentFixture<LizardInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LizardInterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LizardInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
