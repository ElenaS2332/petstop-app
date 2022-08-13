import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishInterestComponent } from './fish-interest.component';

describe('FishInterestComponent', () => {
  let component: FishInterestComponent;
  let fixture: ComponentFixture<FishInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishInterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
