import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component: LoginComponent,title:'Login'},
  {path:'home',component:HomeComponent,title:'Home'},
  {path:'cart',component:CartComponent,title:'Cart'},
  {path:'Register',component:RegistrationComponent,title:'Register'},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'itemList/:typeId',component:ItemListComponent,title:'Item List'},
  {path:'**',component:PageNotFoundComponent,title:'wild-card-route'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
