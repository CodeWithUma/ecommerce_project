import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.scss']
})
export class TelevisionComponent implements OnInit{

  tvProductList:undefined | product[];

  constructor(private product: ProductService) { }

  ngOnInit() {
    this.product.tvProductList().subscribe((data)=>{
      this.tvProductList=data;
    })
  }
}
