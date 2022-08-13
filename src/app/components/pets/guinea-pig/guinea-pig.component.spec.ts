import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaPigComponent } from './guinea-pig.component';

describe('GuineaPigComponent', () => {
  let component: GuineaPigComponent;
  let fixture: ComponentFixture<GuineaPigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaPigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuineaPigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
