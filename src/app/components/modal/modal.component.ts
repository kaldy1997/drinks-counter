import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent {

  @Input() public showModal: boolean;
  @Output() public showModalChange: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  public toggleModal(): void {
    this.showModalChange.emit(!this.showModal);
  }

}
