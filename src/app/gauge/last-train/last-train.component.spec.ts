import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTrainComponent } from './last-train.component';

describe('LastTrainComponent', () => {
  let component: LastTrainComponent;
  let fixture: ComponentFixture<LastTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastTrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
