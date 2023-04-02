import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterationPageComponent } from './registeration-page/registeration-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ProductModuleComponent } from './product-module/product-module.component';
import { SupplierModuleComponent } from './supplier-module/supplier-module.component';
import { OrderModuleComponent } from './order-module/order-module.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterationPageComponent,
    AdminPageComponent,
    ProductModuleComponent,
    SupplierModuleComponent,
    OrderModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
