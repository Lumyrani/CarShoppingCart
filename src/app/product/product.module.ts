import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FormsModule, ReactiveFormsModule}from'@angular/forms'
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductentryComponent } from './productentry/productentry.component';
import{FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// import{Product} from'../product'



@NgModule({
  declarations: [
    ProductComponent,
    ProductlistComponent,
    ProductentryComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,FormsModule,ReactiveFormsModule,FontAwesomeModule,
  ],
  
})
export class ProductModule { 
  
  // private pid:any=""
  // private productName:any=""
  // private price:number=0
  // private quantity:number=0
  // private path:any=""
  //  constructor(pid:any="",
  //  productName:any="",
  //  price:number=0,
  //  quantity:number=0,
  //  path:any=""){
  //      this.pid=pid
  //      this.productName=productName
  //      this.price=price
  //      this.quantity=quantity
  //      this.path=path

  //  }
  
}