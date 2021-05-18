import { Component, OnInit } from '@angular/core';
import{faRupeeSign} from '@fortawesome/free-solid-svg-icons'
import{faDollarSign} from '@fortawesome/free-solid-svg-icons'
import { ProductService } from 'src/app/product.service';
import{CartService} from'src/app/cart.service';
import{ from, Subscription} from 'rxjs'
import{ProductModule}from '../product.module'
import { ActivatedRoute } from '@angular/router';
import{Product}from 'src/app/product/product'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  rupee:any=faRupeeSign
  dollar:any=faDollarSign
  product_list:any=[]
  cartCount:any=""
  
  constructor(private pservice:ProductService, private cart:CartService) { }
  
  ngOnInit(): void {
    this.pservice.readProduct().subscribe((data)=>{
    this.product_list=data})
}

  addToCart(product:any) {
  this.cart.addToCart(product);
  this.flag(product.quantity)
  window.alert("your product has been added to the cart")
}

  addQuantity(product:any){
    if(product.quantity>=0){
      product.quantity=product.quantity+1
      this.flag(product.quantity)
  }
}
  minusQuantity(product:any){
   if(product.quantity>=1)
     product.quantity=product.quantity-1
     this.flag(product.quantity)
}


  flag(quantityCount:any)
  {
   this.cartCount=quantityCount++
  return this.cartCount
  }
}    
      
      
 