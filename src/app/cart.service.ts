import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  totalPrice:number =0
  items:any = [];
  constructor(){}
 total:any=[]

  
addToCart(product:any) {
 this.items.push(product);
}

getItems() {
  return this.items;
}

clearCart() {
 this.items = [];
 return this.items;
}


totalprice=  this.items.price * this.items.quantity;
calcTotalCost(){
  let total = 0;
 this.items.forEach((product:any)=> {
  this.total = this.items.price * this.items.quantity;
  });
}
}


 