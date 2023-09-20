import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { productName } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private product:ProductService) {}

  ngOnInit(): void {}
}
