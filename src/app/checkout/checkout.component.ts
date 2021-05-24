import { Component, OnInit } from '@angular/core';
import{CartService} from'src/app/cart.service';
import { ProductService } from 'src/app/product.service';
import{faDollarSign} from '@fortawesome/free-solid-svg-icons'
import{ProductlistComponent} from'../product/productlist/productlist.component'
import { from } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 dollar:any=faDollarSign
 
total:number=0
 totalamount:number=0 


 items= this.cart.getItems();

 
 constructor( private cart: CartService) { 

 }

  ngOnInit(): void {
  
  }

 
  clear() {
  this.items=this.cart.clearCart() ;
  this.total= 0
  return this.items;
  
  }
   

  calcTotalCost(){
  
  let total = 0;
  for (var i=0;i<this.items.length;i++){
  total+=this.items[i].price * this.items[i].quantity
  this.totalamount=total
  }
  return total
  }

  
}
