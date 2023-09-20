import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootwearHandbagsComponent } from './footwear-handbags.component';

describe('FootwearHandbagsComponent', () => {
  let component: FootwearHandbagsComponent;
  let fixture: ComponentFixture<FootwearHandbagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootwearHandbagsComponent]
    });
    fixture = TestBed.createComponent(FootwearHandbagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
