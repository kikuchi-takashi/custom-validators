import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const upperCaseValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const formValue = String(control.value);
    const upperCase = formValue.toLocaleUpperCase();
    return formValue === upperCase ? null : { upperCase: true };
  };
};
