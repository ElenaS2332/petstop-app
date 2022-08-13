import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RabbitInterestComponent } from './rabbit-interest.component';

describe('RabbitInterestComponent', () => {
  let component: RabbitInterestComponent;
  let fixture: ComponentFixture<RabbitInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RabbitInterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RabbitInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
