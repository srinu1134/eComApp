import { Component, OnInit } from '@angular/core';
import { ItemService } from '../Services/item.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit{
  totalResults: any;
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.itemsData.subscribe((data: any) => {
      if(data) {
        this.totalResults = data.totalResults;
      }
    })
  }
}
