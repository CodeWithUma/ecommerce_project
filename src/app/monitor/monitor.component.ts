import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit{

  monitorProductList:undefined | product[];

  constructor(private product: ProductService) { }

  ngOnInit() {
    this.product.monitorProductList().subscribe((data)=>{
      this.monitorProductList=data;
    })
  }
}
