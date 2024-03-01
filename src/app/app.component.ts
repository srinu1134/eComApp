import { Component, OnInit } from '@angular/core';
import { LoginService } from './Services/login.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eComApp';
  isLoginPage:boolean = false;
  isCart:boolean = false;
  isCheckout:boolean = false;
  constructor(public loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(e =>{
      if(e instanceof NavigationEnd){
        this.isLoginPage = e.url.includes('login') || e.url.includes('forgot-password') || e.url.includes('Register');
        this.isCart = e.url.includes('cart');
        this.isCheckout = e.url.includes('checkout');

      }
    })
  }
}
