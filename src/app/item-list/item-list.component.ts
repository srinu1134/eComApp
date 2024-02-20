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
  numbers: any = ['1','2','3','4','5'];
  pageSize: number = 10;
  numberOfPages: number = 0;
  // pageNumbers: any = [1, 2, 3, 4, 5, 6, 7];
  seletedPage: number = 1;
  numberOfPagesArray:any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private itemservice: ItemService) { }
   
  ngOnInit(): void {
    this.itemservice.itemsData.subscribe((data:any)=>{
      if(data){
      this.itemList = data.results;
      this.numberOfPages = Math.ceil(data.totalResults / this.pageSize);
      this.numberOfPagesArray = Array.from(
        {length:this.numberOfPages},(_:any,index)=>index+1);
      }
    })
  
  }

  onSelectPage(i: any) {
    this.seletedPage = i;
  }
 
}

