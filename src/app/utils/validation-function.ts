import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const numberValidator = (): ValidatorFn =>{
    return (control: AbstractControl): ValidationErrors | null => {
        return isNaN(control.value) ? { number: `${control.value} is not a number`}: null;
    }
}

export const phoneNumberValidator = (): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
        return control.value.length !== 10 ? { invalidPhoneNumber: { value: control.value } } : null;
    }
}