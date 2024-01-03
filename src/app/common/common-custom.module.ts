import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { AddressPipe } from '../pipes/address.pipe';
import { DeleteConfirmationModalComponent } from './delete-confirmation-modal/delete-confirmation-modal.component';

@NgModule({
  declarations: [
    PaginationComponent,
    AddressPipe,
    DeleteConfirmationModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    DeleteConfirmationModalComponent,
    AddressPipe
  ]
})
export class CommonCustomModule { }
