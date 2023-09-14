import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from 'src/app/modal-content/modal-content.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  bsModalRef: BsModalRef | any;

  constructor(private modalService: BsModalService) {}

  showModal() {
    this.bsModalRef = this.modalService.show(ModalContentComponent);
  }

  hideModal() {
    this.bsModalRef.hide();
  }
}
