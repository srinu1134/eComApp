import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  cartInfo$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  filters$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  companies$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  paginationData$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  savedLater$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  typeId: any = '';
  sortOption: any = [];
  companies: any = [
    { id: 1, name: 'Company 1', desc: 'Company 1', typeId: 1 },
    { id: 2, name: 'Company 2', desc: 'Company 2', typeId: 1 },
    { id: 3, name: 'Company 3', desc: 'Company 3', typeId: 2 },
    { id: 4, name: 'Company 4', desc: 'Company 4', typeId: 2 },
    { id: 5, name: 'Company 5', desc: 'Company 5', typeId: 3 },
    { id: 6, name: 'Company 6', desc: 'Company 6', typeId: 3 },
    { id: 7, name: 'Company 7', desc: 'Company 7', typeId: 4 },
    { id: 8, name: 'Company 8', desc: 'Company 8', typeId: 4 },
    { id: 9, name: 'Company 9', desc: 'Company 9', typeId: 5 },
    { id: 10, name: 'Company 10', desc: 'Company 10', typeId: 5 },
  ];
  items: any = [
    {id: 1, name: 'Ttem1', desc: 'Item 1', price: '120.00', creationDate: '02-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 1},
    {id: 2, name: 'Ttem2', desc: 'Item 2', price: '30.00', creationDate: '02-23-2024', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 2},
    {id: 3, name: 'Ttem3', desc: 'Item 3', price: '90.00', creationDate: '04-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 2},
    {id: 4, name: 'Ttem4', desc: 'Item 4', price: '150.00', creationDate: '09-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 1},
    {id: 5, name: 'Ttem5', desc: 'Item 5', price: '60.00', creationDate: '11-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 2},
    {id: 1, name: 'Ttem1', desc: 'Item 1', price: '120.00', creationDate: '02-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 1},
    {id: 2, name: 'Ttem2', desc: 'Item 2', price: '30.00', creationDate: '02-23-2024', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 2},
    {id: 3, name: 'Ttem3', desc: 'Item 3', price: '90.00', creationDate: '04-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 2},
    {id: 4, name: 'Ttem4', desc: 'Item 4', price: '150.00', creationDate: '09-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 1},
    {id: 5, name: 'Ttem5', desc: 'Item 5', price: '60.00', creationDate: '11-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 2},
    {id: 1, name: 'Ttem1', desc: 'Item 1', price: '120.00', creationDate: '02-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 1},
    {id: 2, name: 'Ttem2', desc: 'Item 2', price: '30.00', creationDate: '02-23-2024', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 2},
    {id: 3, name: 'Ttem3', desc: 'Item 3', price: '90.00', creationDate: '04-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 2},
    {id: 4, name: 'Ttem4', desc: 'Item 4', price: '150.00', creationDate: '09-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 1},
    {id: 5, name: 'Ttem5', desc: 'Item 5', price: '60.00', creationDate: '11-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 2},
    {id: 1, name: 'Ttem1', desc: 'Item 1', price: '120.00', creationDate: '02-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 1},
    {id: 2, name: 'Ttem2', desc: 'Item 2', price: '30.00', creationDate: '02-23-2024', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 2},
    {id: 3, name: 'Ttem3', desc: 'Item 3', price: '90.00', creationDate: '04-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 2},
    {id: 4, name: 'Ttem4', desc: 'Item 4', price: '150.00', creationDate: '09-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 1},
    {id: 5, name: 'Ttem5', desc: 'Item 5', price: '60.00', creationDate: '11-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 2},
    {id: 1, name: 'Ttem1', desc: 'Item 1', price: '120.00', creationDate: '02-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 1},
    {id: 2, name: 'Ttem2', desc: 'Item 2', price: '30.00', creationDate: '02-23-2024', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 2},
    {id: 3, name: 'Ttem3', desc: 'Item 3', price: '90.00', creationDate: '04-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 2},
    {id: 4, name: 'Ttem4', desc: 'Item 4', price: '150.00', creationDate: '09-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 1},
    {id: 5, name: 'Ttem5', desc: 'Item 5', price: '60.00', creationDate: '11-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 2},
    {id: 1, name: 'Ttem1', desc: 'Item 1', price: '120.00', creationDate: '02-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 1},
    {id: 2, name: 'Ttem2', desc: 'Item 2', price: '30.00', creationDate: '02-23-2024', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 2},
    {id: 3, name: 'Ttem3', desc: 'Item 3', price: '90.00', creationDate: '04-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 2},
    {id: 4, name: 'Ttem4', desc: 'Item 4', price: '150.00', creationDate: '09-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 1},
    {id: 5, name: 'Ttem5', desc: 'Item 5', price: '60.00', creationDate: '11-23-2023', typeId: 1, imgUrl: 'assets/images/mobile.webp', companyId: 2},
    {id: 6, name: 'Ttem6', desc: 'Item 6', price: '70.00', creationDate: '12-23-2023', typeId: 2, imgUrl: 'assets/images/mobile.webp', companyId: 3},
    {id: 7, name: 'Ttem7', desc: 'Item 7', price: '80.00', creationDate: '05-02-2024', typeId: 2, imgUrl: 'assets/images/mobile.webp', companyId: 3},
    {id: 8, name: 'Ttem8', desc: 'Item 8', price: '90.00', creationDate: '02-01-2024', typeId: 2, imgUrl: 'assets/images/mobile.webp', companyId: 3},
    {id: 9, name: 'Ttem9', desc: 'Item 9', price: '100.00', creationDate: '02-23-2024', typeId: 2, imgUrl: 'assets/images/mobile.webp', companyId: 4},
    {id: 10, name: 'Ttem10', desc: 'Item 10', price: '110.00', creationDate: '01-23-2024', typeId: 2, imgUrl: 'assets/images/mobile.webp', companyId: 4},
    {id: 9, name: 'Ttem9', desc: 'Item 9', price: '100.00', creationDate: '02-23-2024', typeId: 2, imgUrl: 'assets/images/mobile.webp', companyId: 4},
    {id: 10, name: 'Ttem10', desc: 'Item 10', price: '110.00', creationDate: '01-23-2024', typeId: 2, imgUrl: 'assets/images/mobile.webp', companyId: 4}
  ];

  constructor() { }

  getItemList(companyIds?: string) {
    const items = this.items.filter((item: any) => item.typeId == this.typeId && (!companyIds || companyIds.length == 0 || companyIds.includes(item.companyId)));
    if (this.sortOption.key == 'price') {
      if (this.sortOption.isAsc) {
        items.sort((a: any, b: any) => a.price - b.price);
      }
      else {
        items.sort((a: any, b: any) => b.price - a.price);
      }
    } else {
      items.sort((a: any, b: any) => Number(new Date(b.creationDate)) - Number(new Date(a.creationDate)));
    }
    const pageData = this.paginationData$.value;
    const temp = items.slice((pageData.seletedPage - 1) * pageData.pageSize , pageData.seletedPage * pageData.pageSize);
    const data = {
      results: temp,
      totalResults: items.length
    };
    this.itemsData.next(data);
  }

  getCompanyList() {
    const temp = this.companies.filter((company: any) => company.typeId == this.typeId);
    this.companies$.next(temp);
  }
}
