import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WWatchesComponent } from './w-watches.component';

describe('WWatchesComponent', () => {
  let component: WWatchesComponent;
  let fixture: ComponentFixture<WWatchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WWatchesComponent]
    });
    fixture = TestBed.createComponent(WWatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
