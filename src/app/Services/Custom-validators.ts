import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { LoginService } from "./login.service";

export class CustomValidators {
    static passwordValidation(control: AbstractControl): ValidationErrors | null {
        if(control?.value.trim()) {
            const pwd = control.value.trim();
            if(pwd.length < 8) {
                return {invalidPwd: true};
            }
        }
        return  null;
    }

    static ageRangeValidator(min: number, max: number): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (control?.value && (isNaN(control.value) || control.value < min || control.value > max)) {
                return { 'ageRange': true };
            }
            return null;
        };
    }

    // static userNameValidator(loginService: LoginService): AsyncValidatorFn {
    //     return (control: AbstractControl): Observable<ValidationErrors | null> => {
    //         // return loginService
    //         // .checkIfUsernameExists(control.value)
    //         // .pipe(
    //         //     map((result: boolean) =>
    //         //     result ? { usernameAlreadyExists: true } : null
    //         //     )
    //         // );
    //     };
    //     }
    
}