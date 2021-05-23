import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from'@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ ProductModule} from './product/product.module'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import{FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckoutComponent } from './checkout/checkout.component';

import { ProductlistComponent } from './product/productlist/productlist.component';
// import { Product } from './product';
import { ProductComponent } from './product/product.component';
@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
