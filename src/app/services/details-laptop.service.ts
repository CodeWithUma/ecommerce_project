import { Injectable } from '@angular/core';
import { LaptopDescription } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class DetailsLaptopService {

  constructor() { }

  protected laptopDescriptionList: LaptopDescription[] = [
    {
      id: 0,
      name: 'Laptop-1',
      photo: `./assets/images/L_1.0/L_1.0.jpg`,
    }
  ];

  getProductLocationById(id: number): LaptopDescription | undefined {
    return this.laptopDescriptionList.find(
      (laptopDescription) => laptopDescription.id === id
    );
  }
}
