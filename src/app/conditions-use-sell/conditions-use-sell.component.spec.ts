import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsUseSellComponent } from './conditions-use-sell.component';

describe('ConditionsUseSellComponent', () => {
  let component: ConditionsUseSellComponent;
  let fixture: ComponentFixture<ConditionsUseSellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionsUseSellComponent]
    });
    fixture = TestBed.createComponent(ConditionsUseSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
