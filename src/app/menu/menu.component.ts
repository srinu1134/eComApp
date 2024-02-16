import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
menu:any = [
  {name:'Company1',id:1,route:'/itemList/1',isActive:true},
  {name:'Company2',id:2,route:'/itemList/2',isActive:true},
  {name:'Company3',id:3,route:'/itemList/3',isActive:true},
  {name:'Company4',id:4,route:'/itemList/4',isActive:true},
  {name:'Company5',id:5,route:'/itemList/5',isActive:true}
]
}
