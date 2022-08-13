import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrogsComponent } from './frogs.component';

describe('FrogsComponent', () => {
  let component: FrogsComponent;
  let fixture: ComponentFixture<FrogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
