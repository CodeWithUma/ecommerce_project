import { Injectable } from '@angular/core';
import { ProductLocation } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  protected productLocationList: ProductLocation[] = [
    {
      id: 0,
      name: 'Laptop',
      photo: `//assets/images/laptop(1).png`,
      link:{
        text: "More...",
        url: "/laptop"
      }
    },
    {
      id: 1,
      name: 'Mouse',
      photo: `//assets/images/mouse.png`,
      link:{
        text: "More...",
        url: "/mouse"
      }
    },
    {
      id: 2,
      name: 'Printer',
      photo: `//assets/images/printer.png`,
      link:{
        text: "More...",
        url: "/printer"
      }
    },
    {
      id: 3,
      name: 'Monitor',
      photo: `//assets/images/monitor.png`,
      link:{
        text: "More...",
        url: "/monitor"
      }
    },
    {
      id: 4,
      name: 'AC (Air Conditioner)',
      photo: `//assets/images/ac.png`,
      link:{
        text: "More...",
        url: "/air-cond"
      }
    },
    {
      id: 5,
      name: 'Refridgerator',
      photo: `//assets/images/double-door-fridge.png`,
      link:{
        text: "More...",
        url: "/refridgerator"
      }
    },
    {
      id: 6,
      name: 'TV (Television)',
      photo: `//assets/images/tv.png`,
      link:{
        text: "More...",
        url: "/television"
      }
    },
    {
      id: 7,
      name: 'Washing Machine',
      photo: `//assets/images/washing-machine.png`,
      link:{
        text: "More...",
        url: "/washing-machine"
      }
    },
  ];


  getAllProductLocations(): ProductLocation[] {
    return this.productLocationList;
  }

  getProductLocationById(id: number): ProductLocation | undefined {
    return this.productLocationList.find(
      (productLocation) => productLocation.id === id
    );
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
