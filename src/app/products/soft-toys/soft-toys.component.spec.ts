import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftToysComponent } from './soft-toys.component';

describe('SoftToysComponent', () => {
  let component: SoftToysComponent;
  let fixture: ComponentFixture<SoftToysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoftToysComponent]
    });
    fixture = TestBed.createComponent(SoftToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
