import { Component, OnInit } from '@angular/core';
// import{FormControl, FormGroup}from '@angular/forms'
import{FormBuilder,Validators,FormControl} from '@angular/forms'



@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.css']
})
export class  ProductentryComponent implements OnInit {

 constructor(private fb:FormBuilder) { }

productForm= this.fb.group({

  pid:["",[Validators.required,Validators.minLength(3)]],
  productName:["",[Validators.required]],
  price:["",[Validators.required]],
  description:["",[Validators.required]],
  quantity:["",[Validators.required]],
  path:["",[Validators.required]]
})
add(){
  console.log(this.productForm.value)
}
  ngOnInit(): void {
  }

}