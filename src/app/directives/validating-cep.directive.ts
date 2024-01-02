import { Directive } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { Observable, map } from 'rxjs';
import { ConsultaCepService } from '../services/consulta-cep.service';

@Directive({
  selector: '[cepValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: ValidatingCepDirective,
      multi: true,
    },
  ],
})
export class ValidatingCepDirective implements AsyncValidator {
  constructor(private cepService: ConsultaCepService) {}

  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cep = control.value;

    return this.cepService
      .checkIfCepIsValid(cep)
      .pipe(
        map((result: any) => (result.erro ? { cepValidator: true } : null))
      );
  }
}
