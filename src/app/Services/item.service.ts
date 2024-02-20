import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsData: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }

  getItemList(typeId: string, companyIds?: string) {
    const data ={
      results: [
      {id: 1, name: 'Item1', desc: 'Item 1', price: '20.00', typeId: 1, imgUrl: 'assets/images/mobile.webp'},
      {id: 2, name: 'Item2', desc: 'Item 2', price: '30.00', typeId: 1, imgUrl: 'assets/images/mobile.webp'}
    ],
    totalResults: 100};
    this.itemsData.next(data);
  }
  
  getCompanyList(typeId: string){
    return of([
      {id: 1, name: 'Company 1', desc: 'Company 1', price: '20.00', typeId: 1},
      {id: 2, name: 'Company 2', desc: 'Company 2', price: '30.00', typeId: 1},
    ]);
  }
}
