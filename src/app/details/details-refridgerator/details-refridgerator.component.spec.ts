import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRefridgeratorComponent } from './details-refridgerator.component';

describe('DetailsRefridgeratorComponent', () => {
  let component: DetailsRefridgeratorComponent;
  let fixture: ComponentFixture<DetailsRefridgeratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsRefridgeratorComponent]
    });
    fixture = TestBed.createComponent(DetailsRefridgeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
