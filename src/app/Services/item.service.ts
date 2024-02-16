import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItemList(typeId: string, companyIds?: string){
    return of([
      {id: 1, name: 'Item1', desc: 'Item 1', price: '20.00', typeId: 1, imgUrl: 'item1'},
      {id: 2, name: 'Item2', desc: 'Item 2', price: '30.00', typeId: 1, imgUrl: 'item2'}
    ])
  }
  getCompanyList(typeId: string){
    return of([
      {id: 1, name: 'Company 1', desc: 'Company 1', price: '20.00', typeId: 1},
      {id: 2, name: 'Company 2', desc: 'Company 2', price: '30.00', typeId: 1},
    ])

  }
}
