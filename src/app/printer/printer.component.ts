import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss']
})
export class PrinterComponent implements OnInit{
  printerProductList:undefined | product[];

  constructor(private product: ProductService) { }

  ngOnInit() {
    this.product.printerProductList().subscribe((data)=>{
      this.printerProductList=data;
    })
  }
}
