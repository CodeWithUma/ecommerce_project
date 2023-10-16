import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMouseComponent } from './details-mouse.component';

describe('DetailsMouseComponent', () => {
  let component: DetailsMouseComponent;
  let fixture: ComponentFixture<DetailsMouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsMouseComponent]
    });
    fixture = TestBed.createComponent(DetailsMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
