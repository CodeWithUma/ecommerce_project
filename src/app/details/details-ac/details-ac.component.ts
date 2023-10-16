import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details-ac',
  templateUrl: './details-ac.component.html',
  styleUrls: ['./details-ac.component.scss']
})
export class DetailsAcComponent implements OnInit{

  productData:undefined | product;
  productQuantity:number=31;
  removeCart=false;
  cartData:product|undefined;
  constructor(private activeRoute:ActivatedRoute, private product:ProductService) { }

  ngOnInit(): void {
    let productId= this.activeRoute.snapshot.paramMap.get('productId');
    productId && this.product.getACProductList(productId).subscribe((result)=>{
      this.productData= result;
    })
  }
}
