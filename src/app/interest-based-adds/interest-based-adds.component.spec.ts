import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestBasedAddsComponent } from './interest-based-adds.component';

describe('InterestBasedAddsComponent', () => {
  let component: InterestBasedAddsComponent;
  let fixture: ComponentFixture<InterestBasedAddsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterestBasedAddsComponent]
    });
    fixture = TestBed.createComponent(InterestBasedAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
