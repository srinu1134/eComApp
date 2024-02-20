import { Component, OnInit } from '@angular/core';
import { ItemService } from '../Services/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  companyList: any = [];
  typeId:string = '';

  constructor(private itemService: ItemService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any)=>{
      this.typeId = params.typeId;
      this.getCompanyList();
      this.getItemList();
    })
  }
  getCompanyList(){
    this.itemService.getCompanyList(this.typeId).subscribe((items)=>{
      this.companyList = items;
      
    })
  }
  
  getItemList() {
    this.itemService.getItemList(this.typeId);
  }
}
