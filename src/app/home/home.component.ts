import { Component, OnInit, inject } from '@angular/core';
import { ProductLocation, product } from '../data-type';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ProductLocationList: ProductLocation[] = [];
  productService: HomeService = inject(HomeService);
  filteredLocationList: ProductLocation[] = [];

  constructor() {
    this.ProductLocationList = this.productService.getAllProductLocations();
    this.filteredLocationList = this.ProductLocationList;
  }
  trendyProducts:undefined | product[];

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.ProductLocationList;
    }

    this.filteredLocationList = this.ProductLocationList.filter(
      ProductLocation => ProductLocation?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  ngOnInit() {}
}
