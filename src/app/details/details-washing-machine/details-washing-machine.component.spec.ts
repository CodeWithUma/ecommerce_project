import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsWashingMachineComponent } from './details-washing-machine.component';

describe('DetailsWashingMachineComponent', () => {
  let component: DetailsWashingMachineComponent;
  let fixture: ComponentFixture<DetailsWashingMachineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsWashingMachineComponent]
    });
    fixture = TestBed.createComponent(DetailsWashingMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
