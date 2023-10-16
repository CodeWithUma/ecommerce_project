import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details-monitor',
  templateUrl: './details-monitor.component.html',
  styleUrls: ['./details-monitor.component.scss']
})
export class DetailsMonitorComponent implements OnInit {

  productData:undefined | product;
  productQuantity:number=31;
  removeCart=false;
  cartData:product|undefined;
  constructor(private activeRoute:ActivatedRoute, private product:ProductService) { }

  ngOnInit(): void {
    let productId= this.activeRoute.snapshot.paramMap.get('productId');
    productId && this.product.getMonitorProductList(productId).subscribe((result)=>{
      this.productData= result;
    })
  }
}
