import { Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AutofocusDirective } from '../../directives/autofocus.directive';

@Component({
  selector: 'app-modal',
  imports: [BrowserModule, AutofocusDirective],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() message: string | undefined;
  @Input() isConfirmModal: boolean | undefined;

  show = false;

  constructor(
    public activeModal: NgbActiveModal,
  ) {
  }

  ngOnInit() {
    this.show = true;
  }

  accept(): void {
    this.activeModal.close(true);
  }

  cancel(): void {
    this.activeModal.close(false);
  }
}
