import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/data-type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details-mouse',
  templateUrl: './details-mouse.component.html',
  styleUrls: ['./details-mouse.component.scss']
})
export class DetailsMouseComponent implements OnInit {

  productData:undefined | product;
  productQuantity:number=16;
  removeCart=false;
  cartData:product|undefined;
  constructor(private activeRoute:ActivatedRoute, private product:ProductService) { }

  ngOnInit(): void {
    let productId= this.activeRoute.snapshot.paramMap.get('productId');
    productId && this.product.getMouseProductList(productId).subscribe((result)=>{
      this.productData= result;
    })
  }
}
