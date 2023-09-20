import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productName } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  protected housingLocationList: productName[] = [
    {
      id: 0,
      name: 'Laptop',
    },
    {
      id: 1,
      name: 'Mouse',
    },
    {
      id: 2,
      name: 'Printer',
    },
    {
      id: 3,
      name: 'Monitor',
    },
    {
      id: 4,
      name: 'AC (Air Conditioner)',
    },
    {
      id: 5,
      name: 'Refridgerator',
    },
    {
      id: 6,
      name: 'TV (Television)',
    },
    {
      id: 7,
      name: 'Washing Machine',
    },
    {
      id: 8,
      name: 'Smartphones',
    },
    {
      id: 9,
      name: 'Soft Toys',
    },
    {
      id: 10,
      name: 'Outdoor & Sports Toys',
    },
    {
      id: 11,
      name: 'Skincare',
    },
    {
      id: 12,
      name: 'Makeup',
    },
    {
      id: 13,
      name: 'Womens footwear',
    },
    {
      id: 14,
      name: 'Watches',
    },
    {
      id: 15,
      name: 'Clothing',
    },
    {
      id: 16,
      name: 'Footwear',
    },
    {
      id: 17,
      name: 'Bags & Wallets',
    },
    {
      id: 18,
      name: 'Watches',
    },
    {
      id: 19,
      name: 'Womens Clothing',
    },
    {
      id: 20,
      name: 'Footwear & Handbags',
    },
    {
      id: 21,
      name: 'Fashion jewellery',
    }
  ];

  getAllHousingLocations(): productName[] {
    return this.housingLocationList;
  }
}
