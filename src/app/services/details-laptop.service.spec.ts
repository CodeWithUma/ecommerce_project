import { TestBed } from '@angular/core/testing';

import { DetailsLaptopService } from './details-laptop.service';

describe('DetailsLaptopService', () => {
  let service: DetailsLaptopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsLaptopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
