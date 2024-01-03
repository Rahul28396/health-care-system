import { Component, EventEmitter, Input ,Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation-modal',
  templateUrl: './delete-confirmation-modal.component.html',
  styleUrls: ['./delete-confirmation-modal.component.scss']
})
export class DeleteConfirmationModalComponent<T> {

  @Input()
  title?: string;

  @Input()
  element?: T;

  @Output()
  onSubmit: EventEmitter<T> = new EventEmitter<T>();

  @Output()
  onClose: EventEmitter<void> = new EventEmitter<void>();

  confirm(){
    this.onSubmit.emit(this.element);
  }

  decline(){
    this.onClose.emit();
  }

}
