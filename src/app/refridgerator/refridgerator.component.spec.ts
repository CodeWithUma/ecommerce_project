import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefridgeratorComponent } from './refridgerator.component';

describe('RefridgeratorComponent', () => {
  let component: RefridgeratorComponent;
  let fixture: ComponentFixture<RefridgeratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefridgeratorComponent]
    });
    fixture = TestBed.createComponent(RefridgeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
