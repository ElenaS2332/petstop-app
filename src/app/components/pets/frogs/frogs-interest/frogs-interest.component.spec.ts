import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrogsInterestComponent } from './frogs-interest.component';

describe('FrogsInterestComponent', () => {
  let component: FrogsInterestComponent;
  let fixture: ComponentFixture<FrogsInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrogsInterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrogsInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
