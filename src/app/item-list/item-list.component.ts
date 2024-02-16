import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit{
  companyId: string = '';
  itemList: any = [];

  constructor(private activatedRoute: ActivatedRoute,private itemService: ItemService) { }
   

  ngOnInit(): void {
     this.activatedRoute.params.subscribe((params: any) => {
      this.companyId = params.companyId;
      this.getItemList();
    });
  }

  getItemList() {
    this.itemService.getItemList(this.companyId).subscribe((items) => {
      this.itemList = items;
    });
  }
}
