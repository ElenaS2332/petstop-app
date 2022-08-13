import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaPigInterestComponent } from './guinea-pig-interest.component';

describe('GuineaPigInterestComponent', () => {
  let component: GuineaPigInterestComponent;
  let fixture: ComponentFixture<GuineaPigInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaPigInterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuineaPigInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
