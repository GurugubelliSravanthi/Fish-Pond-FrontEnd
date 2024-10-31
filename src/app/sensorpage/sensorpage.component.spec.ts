import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorpageComponent } from './sensorpage.component';

describe('SensorpageComponent', () => {
  let component: SensorpageComponent;
  let fixture: ComponentFixture<SensorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SensorpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
