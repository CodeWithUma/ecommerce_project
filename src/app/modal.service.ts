import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  bsModalRef: BsModalRef | any;

  constructor(private modalService: BsModalService) {}

  showModal() {
    this.bsModalRef = this.modalService;
  }

  hideModal() {
    this.bsModalRef.hide();
  }
}
