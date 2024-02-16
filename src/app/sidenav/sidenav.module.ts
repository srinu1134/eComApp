import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }
