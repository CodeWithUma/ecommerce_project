import { Component } from '@angular/core';
import { ModalService } from 'src/app/modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SignupModalService } from '../signup-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  bsModalRef: BsModalRef | any;
  constructor(private modalService: ModalService, private signupModalService: SignupModalService) {}

  openModal() {
    this.modalService.showModal();
  }
  
  openModal1() {
    this.signupModalService.showModal1();
  }
  
}
