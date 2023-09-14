import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupModalContentComponent } from './signup-modal-content.component';

describe('SignupModalContentComponent', () => {
  let component: SignupModalContentComponent;
  let fixture: ComponentFixture<SignupModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupModalContentComponent]
    });
    fixture = TestBed.createComponent(SignupModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
