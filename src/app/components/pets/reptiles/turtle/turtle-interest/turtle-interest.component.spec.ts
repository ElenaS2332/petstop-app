import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurtleInterestComponent } from './turtle-interest.component';

describe('TurtleInterestComponent', () => {
  let component: TurtleInterestComponent;
  let fixture: ComponentFixture<TurtleInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurtleInterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurtleInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
