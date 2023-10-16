import { Component, inject } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { productName } from '../data-type';
import { ProductService } from '../services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private modalService: NgbModal, private product:ProductService) {}
  
  housingLocationList: productName[] = [];
  housingService: ProductService = inject(ProductService);
  filteredLocationList: productName[] = [];
  mobileNumber: string = '';
  
  bsModalRef: BsModalRef | any;

  openModal1(content1: any) {
    this.modalService.open(content1,{centered: true});
  }
  
  openModal2(content2: any) {
    this.modalService.open(content2,{centered: true});
  }
  
}
