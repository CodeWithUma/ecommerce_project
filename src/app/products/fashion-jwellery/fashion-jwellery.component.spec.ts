import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionJwelleryComponent } from './fashion-jwellery.component';

describe('FashionJwelleryComponent', () => {
  let component: FashionJwelleryComponent;
  let fixture: ComponentFixture<FashionJwelleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FashionJwelleryComponent]
    });
    fixture = TestBed.createComponent(FashionJwelleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
