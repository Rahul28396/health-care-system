import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentModalWrapperComponent } from './department-modal-wrapper.component';

describe('DepartmentModalWrapperComponent', () => {
  let component: DepartmentModalWrapperComponent;
  let fixture: ComponentFixture<DepartmentModalWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentModalWrapperComponent]
    });
    fixture = TestBed.createComponent(DepartmentModalWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
