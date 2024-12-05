import { Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  imports: [BrowserModule],
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
