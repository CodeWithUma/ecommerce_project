import { Component, Input } from '@angular/core';
import { LaptopDescription } from '../data-type';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent {
  @Input() laptopDescription!: LaptopDescription;
}
