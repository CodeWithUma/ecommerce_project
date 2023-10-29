import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root',
})
export class SignupModalService {
  bsModalRef: BsModalRef | any;

  constructor(private modalService: BsModalService) {}

  showModal1() {
    this.bsModalRef = this.modalService;
  }

  hideModal1() {
    this.bsModalRef.hide();
  }
}
