import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-refridgerator',
  templateUrl: './refridgerator.component.html',
  styleUrls: ['./refridgerator.component.scss']
})
export class RefridgeratorComponent implements OnInit{

  refridgeratorProductList:undefined | product[];

  constructor(private product: ProductService) { }

  ngOnInit() {
    this.product.refridgeratorProductList().subscribe((data)=>{
      this.refridgeratorProductList=data;
    })
  }
}
