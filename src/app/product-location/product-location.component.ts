import { Component, Input } from '@angular/core';
import { ProductLocation } from '../data-type';

@Component({
  selector: 'app-product-location',
  templateUrl: './product-location.component.html',
  styleUrls: ['./product-location.component.scss']
})
export class ProductLocationComponent {
  @Input() productLocation!: ProductLocation;
}
