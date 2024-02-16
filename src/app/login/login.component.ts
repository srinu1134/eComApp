import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../Services/Custom-validators';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  hide = true;
  loginForm!: FormGroup;
  hasError: boolean = false;

  constructor(private loginService: LoginService, private router:Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
  this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, CustomValidators.passwordValidation]],
      rememberMe: [false]
    });
}
  login(): void {
    if (this.loginForm.value.userName && this.loginForm.value.password) {
      this.loginService.validateUser(this.loginForm.value.userName, this.loginForm.value.password).subscribe((isValid) => {
        if (isValid) {
                // this.rxjsService.setUserName(this.loginForm.userName);
                // this.rxjsService.userDetailsSubject.next(this.loginForm);
                // sessionStorage.setItem('user', JSON.stringify(this.loginForm));
          this.router.navigateByUrl('/home');
        } else {
          this.handleError();
        }
      });
    } else {
      this.handleError();
    }
  }
  
  getControl(key: string): any {
    return this.loginForm.get(key);
  }

  clearError() {
    if (this.hasError) {
      this.hasError = false;
    }
  }

  handleError() {
    this.hasError = true;
  }

}