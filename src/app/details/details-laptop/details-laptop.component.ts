import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details-laptop',
  templateUrl: './details-laptop.component.html',
  styleUrls: ['./details-laptop.component.scss'],
})
export class DetailsLaptopComponent implements OnInit{
  productData:undefined | product;
  productQuantity:number=1;
  removeCart=false;
  cartData:product|undefined;
  constructor(private activeRoute:ActivatedRoute, private product:ProductService, config: NgbRatingConfig) { 
    config.max = 5;
		config.readonly = true;
  }

  ngOnInit(): void {
    let productId= this.activeRoute.snapshot.paramMap.get('productId');
    productId && this.product.getLaptopProductList(productId).subscribe((result)=>{
      this.productData= result;
    })
  }
}
