import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPrinterComponent } from './details-printer.component';

describe('DetailsPrinterComponent', () => {
  let component: DetailsPrinterComponent;
  let fixture: ComponentFixture<DetailsPrinterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsPrinterComponent]
    });
    fixture = TestBed.createComponent(DetailsPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
