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

  onQtyChange(cartItems:any){
    this.itemService.cartInfo$.next(cartItems);
  }
  onDelete(i:any , cartItems:any){
    cartItems.splice(i, 1);
    this.itemService.cartInfo$.next(cartItems);
  }
  onSavedLater(i:any , item:any, cartItems:any) {
    let items: any;
    this.itemService.savedLater$.subscribe((savedInfo:any)=>{
      items = savedInfo;
    }).unsubscribe();
    this.itemService.savedLater$.next([...items, item]);
    cartItems.splice(i,1);
    this.itemService.cartInfo$.next(cartItems);

  }
  onMoveToCart(i:any, item:any, savedItems:any) {
    let items: any;
    this.itemService.cartInfo$.subscribe((cartInfo:any)=>{
      items = cartInfo;
    }).unsubscribe();
    this.itemService.cartInfo$.next([...items, item]);
    savedItems.splice(i, 1);
    this.itemService.savedLater$.next(savedItems);
  }
}
