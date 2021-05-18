import { Component, OnInit } from '@angular/core';
import{CartService} from'src/app/cart.service';
import { ProductService } from 'src/app/product.service';
import{faDollarSign} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
dollar:any=faDollarSign
 
Total:number=0
total:any=[]
  items= this.cart.getItems();

constructor(private pservice:ProductService, private cart: CartService) { 

  this.Total=  this.items.price * this.items.quantity;

}
  ngOnInit(): void {
    
  }
  calcTotalCost(){
    let total = 0;
   this.items.forEach((product:any)=> {
    this.total = this.Total++;
    });
  }
  
}
