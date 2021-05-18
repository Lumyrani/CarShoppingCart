import { Component } from '@angular/core';
import{faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import{CartService}from './cart.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
shoppingCart:any=faShoppingCart


 title = 'ShoppingCart';
}
