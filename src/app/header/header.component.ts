import { Component, inject } from '@angular/core';
import { ModalService } from 'src/app/modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SignupModalService } from '../signup-modal.service';
import { productName } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private modalService: ModalService, private signupModalService: SignupModalService, private product:ProductService) {}
  
  housingLocationList: productName[] = [];
  housingService: ProductService = inject(ProductService);
  filteredLocationList: productName[] = [];
  
  bsModalRef: BsModalRef | any;

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  openModal() {
    this.modalService.showModal();
  }
  
  openModal1() {
    this.signupModalService.showModal1();
  }
  
}
