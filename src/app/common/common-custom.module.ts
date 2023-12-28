import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { AddressPipe } from '../pipes/address.pipe';

@NgModule({
  declarations: [
    PaginationComponent,
    AddressPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    AddressPipe
  ]
})
export class CommonCustomModule { }
