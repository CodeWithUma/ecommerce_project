import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SignupModalService } from '../signup-modal.service';

@Component({
  selector: 'app-signup-modal-content',
  templateUrl: './signup-modal-content.component.html',
  styleUrls: ['./signup-modal-content.component.scss']
})
export class SignupModalContentComponent {

  constructor(private signupModalService: SignupModalService) {}
  bsModalRef: BsModalRef | any;
  mobileNumber: string = '';

  openModal1() {
    this.signupModalService.showModal1();
  }

  closeModal1() {
    this.signupModalService.hideModal1();
  }

  hideModal1() {
    this.bsModalRef.hide();
  }

}
