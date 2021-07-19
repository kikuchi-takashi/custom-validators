import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { upperCaseValidator } from './upper-case.validator';

@Directive({
  selector: '[appUpperCase]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UpperCaseValidatorDirective,
      multi: true,
    },
  ],
})
export class UpperCaseValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return upperCaseValidator()(control);
  }
}
