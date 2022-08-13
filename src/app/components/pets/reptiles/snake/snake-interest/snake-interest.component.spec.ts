import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeInterestComponent } from './snake-interest.component';

describe('SnakeInterestComponent', () => {
  let component: SnakeInterestComponent;
  let fixture: ComponentFixture<SnakeInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnakeInterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnakeInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
