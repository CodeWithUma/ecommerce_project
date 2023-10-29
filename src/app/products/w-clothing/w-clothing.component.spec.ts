import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WClothingComponent } from './w-clothing.component';

describe('WClothingComponent', () => {
  let component: WClothingComponent;
  let fixture: ComponentFixture<WClothingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WClothingComponent]
    });
    fixture = TestBed.createComponent(WClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
