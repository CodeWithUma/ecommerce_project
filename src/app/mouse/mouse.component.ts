import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.scss']
})
export class MouseComponent implements OnInit{
  mouseProductList:undefined | product[];

  constructor(private product: ProductService) { }

  ngOnInit() {
    this.product.mouseProductList().subscribe(
      (data)=>{
        this.mouseProductList=data;
      },
      (error) => {
        console.error('Error fetching mouse product list:', error);
      }
    );
  }
}
