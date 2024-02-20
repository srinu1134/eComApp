import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
user:any;
  constructor(private loginService:LoginService){}
  ngOnInit(): void {
    this.loginService.user$.subscribe((data:any)=>{
      if(data){
      this.user = data;
      }
    })
  }
}
