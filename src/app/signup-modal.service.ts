import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from 'src/app/modal-content/modal-content.component';
import { SignupModalContentComponent } from './signup-modal-content/signup-modal-content.component';

@Injectable({
  providedIn: 'root',
})
export class SignupModalService {
  bsModalRef: BsModalRef | any;

  constructor(private modalService: BsModalService) {}

  showModal1() {
    this.bsModalRef = this.modalService.show(SignupModalContentComponent);
  }

  hideModal1() {
    this.bsModalRef.hide();
  }
}
