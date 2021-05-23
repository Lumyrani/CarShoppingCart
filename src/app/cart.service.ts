import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  total:number =0
  items:any = [];
  count:number=0
  // Total:number=0
  constructor(){}


  
addToCart(product:any) {
 this.items.push(product);
//  this.productCount(this.items)

}

getItems() {
  return this.items;
  
}
clearCart() {
  this.items = [];
  this.total= 0
  return this.items;
 }

// clearCart() {
//  this.items = [];
//  return this.items;
// }
// productCount(product:any)
// {
//   if(product.productName==this.items.productName)
//  this.count=this.items.product.quantity
//  return this.count
//   }

// // Total=  parseInt(this.items.price )* parseInt(this.items.quantity);
 // this.count=this.cart.addToCart(this.product_list.quantity++)
}


 