import { Component, OnInit } from '@angular/core';
import{faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import{CartService}from './cart.service'
import{ProductService}from'./product.service'
import{CheckoutComponent} from './checkout/checkout.component'
import{ProductComponent}from'./product/product.component'
import{LoginComponent} from'./login/login.component'
import { Login } from './login/login';
import{ Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
shoppingCart:any=faShoppingCart
 title = 'ShoppingCart';

items= this.cart.getItems();

constructor(private cart: CartService,private productService:ProductService,private router:Router,) { 
  
}


// isLoggedin:boolean=true

 
  ngOnInit(): void {
    
  }
  
  
}
