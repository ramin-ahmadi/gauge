import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeighbridgeNameComponent } from './weighbridge-name.component';

describe('WeighbridgeNameComponent', () => {
  let component: WeighbridgeNameComponent;
  let fixture: ComponentFixture<WeighbridgeNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeighbridgeNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeighbridgeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
