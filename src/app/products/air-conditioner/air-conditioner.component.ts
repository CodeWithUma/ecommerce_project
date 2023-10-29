import { Component, OnInit } from '@angular/core';
import { product } from '../../data-type';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-air-conditioner',
  templateUrl: './air-conditioner.component.html',
  styleUrls: ['./air-conditioner.component.scss']
})
export class AirConditionerComponent implements OnInit{

  acProductList:undefined | product[];

  constructor(private product: ProductService) { }

  ngOnInit() {
    this.product.acProductList().subscribe((data)=>{
      this.acProductList=data;
    })
  }
}
