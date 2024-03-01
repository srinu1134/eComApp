import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginModule } from './login/login.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SidenavModule } from './sidenav/sidenav.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CartComponent } from './cart/cart.component';
import { SummaryComponent } from './summary/summary.component';
import {MatChipsModule} from '@angular/material/chips';
import { CheckoutModule } from './checkout/checkout.module';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ItemListComponent,
    ToolbarComponent,
    CartComponent,
    SummaryComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    LoginModule,
    SidenavModule,
    MatChipsModule,
    CheckoutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
