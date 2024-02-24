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
      this.getCompanyList();
  }

  getCompanyList(){
    this.itemService.companies$.subscribe((companies:any)=>{
      this.companyList = companies;
      console.log(this.companyList)
    });
    this.itemService.filters$.subscribe((companyList:any)=>{
      const companyIds = companyList.map((company: any)=> company.id);
      this.companyList.forEach((company:any) => {
        company.selected = companyIds.includes(company.id);
      });
    });
  }
  
  selectionChange(data: any) {
    const selCompanies = data.map((item: any) => item.value);
    this.itemService.filters$.next(selCompanies);
    const companyIds = selCompanies.map((company: any) => company.id);
    this.itemService.getItemList(companyIds);
  }
}
