import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
user:any;
quantity:number = 0;
  constructor(public loginService:LoginService,public itemService:ItemService){}
  ngOnInit(): void {
    this.loginService.user$.subscribe((data:any)=>{
      if(data){
      this.user = data;
      }
    });
    this.itemService.cartInfo$.subscribe((cartItems:any)=>{
      this.quantity = cartItems.reduce((s:number , item:any)=> s += +item.quantity, 0);
    })
  }
}
