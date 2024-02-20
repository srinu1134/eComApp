import { Component } from '@angular/core';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  itemList: any = [];
  numbers: any = ['1','2','3','4','5'];
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.itemsData.subscribe((data: any) => {
      if(data) {
        this.itemList = data.results;
        // this.numberOfPages = Math.ceil(data.totalResults / this.pageSize);
      }
    })
  }
}
