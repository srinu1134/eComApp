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

  constructor(private loginService: LoginService, private router: Router, private fb: FormBuilder) { }

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
          sessionStorage.setItem('user', JSON.stringify(this.loginForm.value));
          this.loginService.user$.next({...this.loginForm.value, address: {name: 'test 123', phone: '234234141', address1: 'H.No: 123', address2: '', country: 1, state: 1, city: 'Pidugurall', pin: 522413, landMark: 'New Police station', isDefault: true}});
          if(this.loginService.isCheckoutOn){
            this.router.navigateByUrl('/checkout');
          } else {
          this.router.navigateByUrl('/home');
          }
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