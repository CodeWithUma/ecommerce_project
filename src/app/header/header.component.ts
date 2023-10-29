import { Component, inject } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { product, productName } from '../data-type';
import { ProductService } from '../services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private modalService: NgbModal, private product:ProductService, private route: Router) {}
  menuType: string = 'default';
  searchResult:undefined|product[];
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

  searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.product.searchProduct(element.value).subscribe((result)=>{
        if(result.length>5){
          result.length=length
        }
        this.searchResult=result;
      })
    }
  }

  hideSearch(){
    this.searchResult=undefined
  }

  submitSearch(val:string){
    this.route.navigate([`search/${val}`]);
  }

  redirectToDetails(id:number){
    this.route.navigate(['/details/'+id])
  }
}
