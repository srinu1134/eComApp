import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit{
  typeId: string = '';
  itemList: any = [];
  quantityList: any = ['1','2','3','4','5'];
  pageSize: number = 5;
  numberOfPages: number = 0;
  seletedPage: number = 1;
  pageNumbers:any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private itemService: ItemService) { }
   
  ngOnInit(): void {
    this.itemService.itemsData.subscribe((data:any)=>{
      if(data){
      this.itemList = data.results.map((item:any)=>({...item,quantity: 1}));
      this.numberOfPages = Math.ceil(data.totalResults / this.pageSize);
      this.pageNumbers = Array.from(
        {length:this.numberOfPages},(_:any,index)=>index+1);
      }
    });
    this.activatedRoute.params.subscribe((params: any) => {
      this.itemService.typeId = params.typeId;
      this.itemService.filters$.next([]);
      this.seletedPage = 1;
      this.setPaginationInfo();
      this.getCompanyList();      
      this.getItemList();
    });
  }
  
  getCompanyList() {
    this.itemService.getCompanyList();
  }

  getItemList() {
    this.itemService.getItemList();
  }

  setPaginationInfo(){
    const data:any = {
      pageSize:this.pageSize,
      seletedPage:this.seletedPage
    }
    this.itemService.paginationData$.next(data);
  }

  onSelectPage(i: any) {
    this.seletedPage = i;
    this.setPaginationInfo();
    let companyIds: any = [];
    this.itemService.filters$.subscribe((companyList: any) => {
      companyIds = companyList.map((company: any) => company.id);
    }).unsubscribe();
    this.itemService.getItemList(companyIds);
  }

  addToCart(item:any){
    let items: any;
    this.itemService.cartInfo$.subscribe((cartInfo:any)=>{
      items = cartInfo;
    }).unsubscribe();
    this.itemService.cartInfo$.next([...items, item]);
  }
}

