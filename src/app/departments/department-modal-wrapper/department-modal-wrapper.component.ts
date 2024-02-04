import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Department } from 'src/app/models/department.model';

@Component({
  selector: 'app-department-modal-wrapper',
  templateUrl: './department-modal-wrapper.component.html',
  styleUrls: ['./department-modal-wrapper.component.scss']
})
export class DepartmentModalWrapperComponent {
  formBuilderService = inject(FormBuilder);

  @Output() save = new EventEmitter<Department>();
  @Output() close = new EventEmitter<void>();

  departmentForm = this.formBuilderService.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    image: ['', [Validators.required]]
  });

  get name() {
    return this.departmentForm.get('name');
  }

  get description() {
    return this.departmentForm.get('description');
  }

  get image() {
    return this.departmentForm.get('image');
  }

  onSave() {
    const department =  new Department(
      1,
      typeof this.name?.value === 'string' ? this.name.value : '', 
      typeof this.description?.value === 'string' ? this.description.value: '', 
      typeof this.image?.value === 'string' ? this.image?.value: '', 
      []
    )
    this.save.emit(department)
  }

  closeModal() {
    this.close.emit()
  }
}
