import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaptopDescription } from 'src/app/data-type';
import { DetailsLaptopService } from 'src/app/services/details-laptop.service';

@Component({
  selector: 'app-details-laptop',
  templateUrl: './details-laptop.component.html',
  styleUrls: ['./details-laptop.component.scss']
})
export class DetailsLaptopComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  laptopService = inject(DetailsLaptopService);
  laptopDescription: LaptopDescription | undefined;

  constructor() {
    const laptopDescriptionId = parseInt(this.route.snapshot.params['id'], 10);
    this.laptopDescription = this.laptopService.getProductLocationById(laptopDescriptionId);
  }

}
