import { Component, OnInit } from '@angular/core';
import { product } from '../../data-type';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-washing-machine',
  templateUrl: './washing-machine.component.html',
  styleUrls: ['./washing-machine.component.scss']
})
export class WashingMachineComponent implements OnInit{

  wmProductList:undefined | product[];

  constructor(private product: ProductService) { }

  ngOnInit() {
    this.product.wmProductList().subscribe((data)=>{
      this.wmProductList=data;
    })
  }
}
