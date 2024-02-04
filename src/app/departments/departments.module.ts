import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentModalWrapperComponent } from './department-modal-wrapper/department-modal-wrapper.component';
import { CommonCustomModule } from '../common/common-custom.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentModalWrapperComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    CommonCustomModule,
    ReactiveFormsModule,
    ModalModule.forChild()
  ]
})
export class DepartmentsModule { }
