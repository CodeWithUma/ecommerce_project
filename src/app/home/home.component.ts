import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductLocation, product } from '../data-type';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private product:ProductService, config: NgbRatingConfig) {
    this.ProductLocationList = this.productService.getAllProductLocations();
    this.filteredLocationList = this.ProductLocationList;

    // customize default values of ratings used by this component tree
		config.max = 5;
		config.readonly = true;
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

  ngOnInit(): void {}
}
