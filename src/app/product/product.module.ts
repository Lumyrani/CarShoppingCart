import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FormsModule, ReactiveFormsModule}from'@angular/forms'
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductentryComponent } from './productentry/productentry.component';
import{FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ProductComponent,
    ProductlistComponent,
    ProductentryComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,FormsModule,ReactiveFormsModule,FontAwesomeModule
  ]
})
export class ProductModule { 
  
}