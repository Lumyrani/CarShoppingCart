import { Component, OnInit } from '@angular/core';
import{ }from '@angular/common'
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private pservice:ProductService) { }
product_list:any=[]
  ngOnInit(): void {
    this.pservice.readProduct().subscribe((data)=>{
    this.product_list=data})
  }

}
