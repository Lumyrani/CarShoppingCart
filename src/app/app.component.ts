import { Component, OnInit } from '@angular/core';
import{faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import{CartService}from './cart.service'
import{CheckoutComponent} from './checkout/checkout.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  cartCount:number=0
shoppingCart:any=faShoppingCart
 title = 'ShoppingCart';


cartflagCount:number=0

  items= this.cart.getItems();
constructor(private cart: CartService) { 

 

}

  ngOnInit(): void {
  


  }
cartflag()
  {
    let flag =0
    for (var i=0;i<this.items.length;i++){
    flag =this.cart.items.quantity++
     this.cartflagCount=flag
      // return this.cartflagCount
  //  this.cartflagCount=quantityCount++
      // this.totalamount=total
    }
  return this.cartflagCount
}

 
  }
