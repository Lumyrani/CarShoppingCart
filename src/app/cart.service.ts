import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  total:number =0
  items:any = [];
  count:number=0
  cartCount:number=0
  constructor(){}


  
addToCart(product:any) {
 this.items.push(product);


}
clearCart() {
  this.items =[] ;
  this.total= 0
  return this.items;
 }

getItems() {
  return this.items;
  
}
flag(quantityCount:any)
  {
    
   this.cartCount=quantityCount+this.cartCount
  return this.cartCount
  }

}


 