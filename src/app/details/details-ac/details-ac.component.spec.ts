import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAcComponent } from './details-ac.component';

describe('DetailsAcComponent', () => {
  let component: DetailsAcComponent;
  let fixture: ComponentFixture<DetailsAcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsAcComponent]
    });
    fixture = TestBed.createComponent(DetailsAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
