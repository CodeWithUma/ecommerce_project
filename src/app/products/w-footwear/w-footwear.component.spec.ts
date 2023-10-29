import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WFootwearComponent } from './w-footwear.component';

describe('WFootwearComponent', () => {
  let component: WFootwearComponent;
  let fixture: ComponentFixture<WFootwearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WFootwearComponent]
    });
    fixture = TestBed.createComponent(WFootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
