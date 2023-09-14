import { Component } from '@angular/core';
import { ModalService } from 'src/app/modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent {
  constructor(private modalService: ModalService) {}
  bsModalRef: BsModalRef | any;

  openModal() {
    this.modalService.showModal();
  }

  closeModal() {
    this.modalService.hideModal();
  }

  hideModal() {
    this.bsModalRef.hide();
  }
}
