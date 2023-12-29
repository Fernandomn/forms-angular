import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[fullAgeValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: FullAgeDirective, multi: true },
  ],
})
export class FullAgeDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const birthDate = control.value;
    const birthYear = new Date(birthDate).getFullYear();
    const currentYear = new Date().getFullYear();

    const isBigger = birthYear + 18 <= currentYear;

    return isBigger ? null : { fullAgeValidator: true };
  }
}
