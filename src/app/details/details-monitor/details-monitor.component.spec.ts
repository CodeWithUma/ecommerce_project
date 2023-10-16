import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMonitorComponent } from './details-monitor.component';

describe('DetailsMonitorComponent', () => {
  let component: DetailsMonitorComponent;
  let fixture: ComponentFixture<DetailsMonitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsMonitorComponent]
    });
    fixture = TestBed.createComponent(DetailsMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
