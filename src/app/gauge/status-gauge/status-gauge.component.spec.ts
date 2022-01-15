import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusGaugeComponent } from './status-gauge.component';

describe('StatusGaugeComponent', () => {
  let component: StatusGaugeComponent;
  let fixture: ComponentFixture<StatusGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusGaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
