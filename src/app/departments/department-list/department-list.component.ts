import { Component, TemplateRef, inject } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Department, departments } from 'src/app/models/department.model';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent {
  departmentList =  departments;
  modalService = inject(BsModalService);
  modalRef?: BsModalRef;
  deleteConfirmationText: string = '';
  selectedDepartment?: Department;

  openDepartmentModal(templateRef: TemplateRef<void>){
    this.modalRef = this.modalService.show(templateRef,{
      class: "modal-dialog-centered"
    })
  }

  openDeleteDepartmentModal(templateRef: TemplateRef<void>,element: Department){
    this.selectedDepartment = element;
    this.deleteConfirmationText = `Are you sure want to delete ${this.selectedDepartment.name} department ?`
    this.modalRef = this.modalService.show(templateRef,{
      class: "modal-dialog-centered"
    })
  }

  saveDepartment(department: Department){
    console.log(department);
  }

  deleteDepartment(element: Department){
    console.log(element);
  }

  closeModal(){
    this.modalService.hide();
  }
}
