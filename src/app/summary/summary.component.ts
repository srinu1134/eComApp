import { Component, OnInit } from '@angular/core';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit{
  quantity: number = 0;
  totalPrice: number = 0;

  constructor(private itemService:ItemService){}
  ngOnInit(): void {
    this.itemService.cartInfo$.subscribe((cartItems:any)=>{
      this.quantity = cartItems.reduce((s:number , item:any)=> s += +item.quantity, 0);
      this.totalPrice = cartItems.reduce((s:number , item:any)=> s += item.price * +item.quantity, 0);
    })
  }
}
