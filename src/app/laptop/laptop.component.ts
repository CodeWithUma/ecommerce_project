import { Component, Input, OnInit } from '@angular/core';
import { LaptopDescription, product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit {
  laptopProductList:undefined | product[];

  constructor(private product: ProductService) { }

  ngOnInit() {
    this.product.laptopProductList().subscribe((data)=>{
      this.laptopProductList=data;
    })
  }
}
