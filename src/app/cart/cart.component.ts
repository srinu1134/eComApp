import { Component } from '@angular/core';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  quantityList: any = ['1','2','3','4','5'];
  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
   
  }
}
