import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsWalletsComponent } from './bags-wallets.component';

describe('BagsWalletsComponent', () => {
  let component: BagsWalletsComponent;
  let fixture: ComponentFixture<BagsWalletsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BagsWalletsComponent]
    });
    fixture = TestBed.createComponent(BagsWalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
