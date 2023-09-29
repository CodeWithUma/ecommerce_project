import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLaptopComponent } from './details-laptop.component';

describe('DetailsLaptopComponent', () => {
  let component: DetailsLaptopComponent;
  let fixture: ComponentFixture<DetailsLaptopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsLaptopComponent]
    });
    fixture = TestBed.createComponent(DetailsLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
