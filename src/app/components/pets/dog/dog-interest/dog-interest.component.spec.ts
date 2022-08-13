import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogInterestComponent } from './dog-interest.component';

describe('DogInterestComponent', () => {
  let component: DogInterestComponent;
  let fixture: ComponentFixture<DogInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogInterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
