import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Product } from './product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) {}

    readProduct(){
     return  this._http.get("http://localhost:4200/assets/products.json")
    }
  }

